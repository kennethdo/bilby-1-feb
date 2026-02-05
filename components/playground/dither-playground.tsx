"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { VideoCanvas } from "./video-canvas";
import {
  ControlsPanel,
  defaultPlaygroundSettings,
  type PlaygroundSettings,
} from "./controls-panel";
import { NoiseDotsBackground, GradientBlobBackground } from "@/components/effects";
import { cn } from "@/lib/utils";

export default function DitherPlayground() {
  const [settings, setSettings] = useState<PlaygroundSettings>(
    defaultPlaygroundSettings
  );
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(
    null
  );
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<"video" | "image" | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Check if current effect is standalone (no video needed)
  const isStandaloneEffect = settings.effectType === "noiseDots" || settings.effectType === "gradientBlob";

  // Create video element when URL changes
  useEffect(() => {
    if (!fileUrl) {
      setVideoElement(null);
      return;
    }

    if (fileType === "video") {
      const video = document.createElement("video");
      video.src = fileUrl;
      video.crossOrigin = "anonymous";
      video.loop = true;
      video.muted = true;
      video.playsInline = true;

      video.onloadeddata = () => {
        video.play().catch(console.error);
        setVideoElement(video);
        setError(null);
      };

      video.onerror = () => {
        setError("Failed to load video. Please try another file.");
        setVideoElement(null);
      };

      return () => {
        video.pause();
        video.src = "";
      };
    } else if (fileType === "image") {
      // For images, create a canvas and use CanvasTexture directly
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        // Create a canvas to draw the image
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
        }
        canvasRef.current = canvas;

        // Create a fake video object with the canvas attached
        // This is handled by video-canvas.tsx using CanvasTexture
        const fakeVideo = {
          videoWidth: img.width,
          videoHeight: img.height,
          width: img.width,
          height: img.height,
          paused: true,
          src: "",
          srcObject: null,
          _canvas: canvas,
        } as unknown as HTMLVideoElement;

        setVideoElement(fakeVideo);
        setError(null);
      };

      img.onerror = () => {
        setError("Failed to load image. Please try another file.");
        setVideoElement(null);
      };

      img.src = fileUrl;
    }
  }, [fileUrl, fileType]);

  const handleFile = useCallback(
    (file: File) => {
      const isVideo = file.type.startsWith("video/");
      const isImage = file.type.startsWith("image/");

      if (!isVideo && !isImage) {
        setError("Please upload a video or image file");
        return;
      }

      // Revoke previous URL
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }

      const url = URL.createObjectURL(file);
      setFileType(isVideo ? "video" : "image");
      setFileUrl(url);
    },
    [fileUrl]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleExport = useCallback(() => {
    const json = JSON.stringify(settings, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "shader-settings.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [settings]);

  // Get settings for standalone effects
  const nd = settings.effects.noiseDots;
  const gb = settings.effects.gradientBlob;

  return (
    <main className="flex h-dvh flex-col bg-[#1a1a1a]">
      {/* Header */}
      <header className="flex shrink-0 items-center justify-between border-b border-[#333] bg-[#222] px-6 py-3">
        <div className="flex items-center gap-4">
          <h1 className="font-mono text-sm font-medium uppercase tracking-wider text-white">
            Shader Playground
          </h1>
          <span className="rounded bg-[#333] px-2 py-0.5 font-mono text-[10px] uppercase text-[#888]">
            {isStandaloneEffect ? "Canvas" : "WebGL"}
          </span>
        </div>
        <a
          href="/"
          className="font-mono text-xs uppercase tracking-wider text-[#888] transition-colors hover:text-white"
        >
          Back to Bilby
        </a>
      </header>

      {/* Main Content */}
      <div className="flex min-h-0 flex-1">
        {/* Canvas Area */}
        <div className="relative flex flex-1 flex-col">
          {/* Canvas */}
          <div className="relative flex-1" style={{ backgroundColor: isStandaloneEffect ? settings.color.backgroundColor : undefined }}>
            {isStandaloneEffect ? (
              // Standalone effects - no video needed
              settings.effectType === "noiseDots" ? (
                <NoiseDotsBackground
                  dotColor={nd.dotColor}
                  accentColor={nd.accentColor}
                  animationSpeed={nd.animationSpeed}
                  dotSize={nd.dotSize}
                  spacing={nd.spacing}
                  accentFrequency={nd.accentFrequency}
                  opacity={1}
                />
              ) : (
                <GradientBlobBackground
                  position="center"
                  blobColor={gb.blobColor}
                  animationSpeed={gb.animationSpeed}
                  blobCount={gb.blobCount}
                  blobSize={gb.blobSize}
                  opacity={1}
                />
              )
            ) : (
              // Video-based effects
              <>
                <VideoCanvas
                  videoElement={videoElement}
                  settings={settings}
                  className="size-full"
                />
                {/* Show upload hint when no video loaded */}
                {!videoElement && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <p className="rounded bg-black/50 px-4 py-2 font-mono text-sm text-[#888]">
                      Upload a video or image to preview this effect
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Drop Zone - only show for video-based effects */}
          {!isStandaloneEffect && (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                "flex shrink-0 cursor-pointer items-center justify-center border-t border-[#333] bg-[#222] px-6 py-4 transition-colors",
                isDragging && "bg-[#2a2a2a]"
              )}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm,video/*,image/*"
                onChange={handleFileInput}
                className="hidden"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="font-mono text-xs uppercase tracking-wider text-[#888]">
                  {isDragging
                    ? "Drop file here"
                    : "Drop file or click to upload"}
                </p>
                <p className="font-mono text-[10px] text-[#555]">
                  PNG, JPG, GIF, MP4, WebM
                </p>
                {error && (
                  <p className="font-mono text-[10px] text-red-500">{error}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Controls Panel */}
        <aside className="w-80 shrink-0 overflow-hidden bg-[#222]">
          <ControlsPanel
            settings={settings}
            onChange={setSettings}
            onExport={handleExport}
          />
        </aside>
      </div>
    </main>
  );
}
