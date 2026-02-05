"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { VideoTexture, CanvasTexture, Vector2, LinearFilter, Mesh, Texture } from "three";
import { MultiEffect } from "./effects/multi-effect";
import type { PlaygroundSettings } from "./controls-panel";

interface VideoPlaneProps {
  videoElement: HTMLVideoElement | null;
  backgroundColor?: string;
}

function VideoPlane({ videoElement, backgroundColor = "#f6f5ef" }: VideoPlaneProps) {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();
  const [texture, setTexture] = useState<Texture | null>(null);

  // Create texture from video or canvas
  useEffect(() => {
    if (!videoElement) {
      setTexture(null);
      return;
    }

    // Check if this is a fake video with a canvas (for images)
    const fakeCanvas = (videoElement as unknown as { _canvas?: HTMLCanvasElement })._canvas;

    if (fakeCanvas) {
      // Use canvas texture for images
      const tex = new CanvasTexture(fakeCanvas);
      tex.minFilter = LinearFilter;
      tex.magFilter = LinearFilter;
      tex.needsUpdate = true;
      setTexture(tex);
    } else if (videoElement.srcObject || videoElement.src) {
      // Use video texture for videos
      const tex = new VideoTexture(videoElement);
      tex.minFilter = LinearFilter;
      tex.magFilter = LinearFilter;
      tex.needsUpdate = true;
      setTexture(tex);
    }

    return () => {
      // Cleanup
    };
  }, [videoElement]);

  // Update texture on each frame for videos
  useFrame(() => {
    if (texture && videoElement && !videoElement.paused) {
      texture.needsUpdate = true;
    }
  });

  // Calculate aspect ratio to fit viewport
  const videoAspect = videoElement
    ? videoElement.videoWidth / videoElement.videoHeight || 16 / 9
    : 16 / 9;
  const viewportAspect = viewport.width / viewport.height;

  let planeWidth = viewport.width;
  let planeHeight = viewport.height;

  if (videoAspect > viewportAspect) {
    // Video is wider - fit to width
    planeHeight = viewport.width / videoAspect;
  } else {
    // Video is taller - fit to height
    planeWidth = viewport.height * videoAspect;
  }

  if (!texture) {
    // Use background color when no media loaded
    return (
      <mesh ref={meshRef}>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial color={backgroundColor} />
      </mesh>
    );
  }

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[planeWidth, planeHeight]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

interface EffectSceneProps {
  videoElement: HTMLVideoElement | null;
  settings: PlaygroundSettings;
}

function EffectScene({ videoElement, settings }: EffectSceneProps) {
  const { size } = useThree();
  const resolution = useMemo(
    () => new Vector2(size.width, size.height),
    [size.width, size.height]
  );

  return (
    <>
      <VideoPlane videoElement={videoElement} backgroundColor={settings.color.backgroundColor} />
      <EffectComposer>
        <MultiEffect
          effectType={settings.effectType}
          resolution={resolution}
          globalSettings={settings.global}
          colorSettings={settings.color}
          effectSettings={settings.effects}
        />
      </EffectComposer>
    </>
  );
}

export interface VideoCanvasProps {
  videoElement: HTMLVideoElement | null;
  settings: PlaygroundSettings;
  className?: string;
}

export function VideoCanvas({
  videoElement,
  settings,
  className,
}: VideoCanvasProps) {
  return (
    <div className={className}>
      <Canvas
        orthographic
        camera={{ zoom: 1, position: [0, 0, 100] }}
        gl={{ antialias: false, alpha: false }}
        dpr={1}
      >
        <color attach="background" args={["#1a1a1a"]} />
        <EffectScene videoElement={videoElement} settings={settings} />
      </Canvas>
    </div>
  );
}
