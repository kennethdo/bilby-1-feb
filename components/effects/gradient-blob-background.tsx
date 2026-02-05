"use client";

import { useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface GradientBlobBackgroundProps {
  className?: string;
  /** Position of the blob within the container */
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "center";
  /** Blob color - default: #9479af */
  blobColor?: string;
  /** Background color - default: transparent */
  backgroundColor?: string;
  /** Animation speed - default: 0.55 */
  animationSpeed?: number;
  /** Blob count - default: 2 */
  blobCount?: number;
  /** Blob size - default: 0.35 */
  blobSize?: number;
  /** Opacity of the entire effect */
  opacity?: number;
}

const defaultSettings = {
  blobCount: 2,
  blobSize: 0.35,
  blobSoftness: 0.55,
  dotSize: 1.0,
  dotSpacing: 5,
  densityFalloff: 2.0,
  animationSpeed: 0.55,
  morphSpeed: 0.0,
  flowDirection: 195,
  blobColor: "#9479af",
  backgroundColor: "transparent",
};

// Get blob anchor position based on position prop
function getAnchorPosition(position: string): { x: number; y: number } {
  switch (position) {
    case "bottom-right":
      return { x: 0.75, y: 0.75 };
    case "bottom-left":
      return { x: 0.25, y: 0.75 };
    case "top-right":
      return { x: 0.75, y: 0.25 };
    case "top-left":
      return { x: 0.25, y: 0.25 };
    case "center":
    default:
      return { x: 0.5, y: 0.5 };
  }
}

export function GradientBlobBackground({
  className,
  position = "bottom-right",
  blobColor = defaultSettings.blobColor,
  backgroundColor = defaultSettings.backgroundColor,
  animationSpeed = defaultSettings.animationSpeed,
  blobCount = defaultSettings.blobCount,
  blobSize = defaultSettings.blobSize,
  opacity = 1,
}: GradientBlobBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16) / 255,
          g: parseInt(result[2], 16) / 255,
          b: parseInt(result[3], 16) / 255,
        }
      : { r: 0.58, g: 0.47, b: 0.69 };
  };

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const time = (performance.now() - startTimeRef.current) / 1000;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    const settings = {
      ...defaultSettings,
      blobColor,
      animationSpeed,
      blobCount,
      blobSize,
    };

    const color = hexToRgb(settings.blobColor);
    const flowRad = (settings.flowDirection * Math.PI) / 180;
    const flowVec = { x: Math.cos(flowRad), y: Math.sin(flowRad) };

    // Get anchor position based on position prop
    const anchor = getAnchorPosition(position);

    // Calculate blob positions - anchored to the specified position
    const blobs: { x: number; y: number; radius: number }[] = [];
    const t = time * settings.animationSpeed;

    for (let i = 0; i < settings.blobCount; i++) {
      const phase = i * 2.094;

      // Smaller orbit range for corner positioning
      const orbit = {
        x: Math.sin(t + phase) * 0.15,
        y: Math.cos(t * 0.7 + phase) * 0.12,
      };

      const drift = {
        x: flowVec.x * Math.sin(t * 0.5 + i) * 0.08,
        y: flowVec.y * Math.sin(t * 0.5 + i) * 0.08,
      };

      // Position blob relative to anchor
      const spreadX = (i - settings.blobCount * 0.5) * 0.08;
      const spreadY = (i - settings.blobCount * 0.5) * 0.06;

      const centerX = anchor.x + orbit.x + drift.x + spreadX;
      const centerY = anchor.y + orbit.y + drift.y + spreadY;

      const blobRadius = settings.blobSize * (0.8 + 0.2 * Math.sin(t * 0.5 + i * 2.0));

      blobs.push({ x: centerX, y: centerY, radius: blobRadius });
    }

    // Render dots
    const spacing = settings.dotSpacing;
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let py = 0; py < height; py += spacing) {
      for (let px = 0; px < width; px += spacing) {
        const cellCenterX = (Math.floor(px / spacing) + 0.5) * spacing / width;
        const cellCenterY = (Math.floor(py / spacing) + 0.5) * spacing / height;

        // Calculate field at dot center
        let dotField = 0;
        for (const blob of blobs) {
          const dx = cellCenterX - blob.x;
          const dy = cellCenterY - blob.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          dotField += (blob.radius * blob.radius) / (dist * dist + 0.001);
        }

        // Density based on field strength
        let density = (dotField - 0.2) / 1.6;
        density = Math.max(0, Math.min(1, density));
        density = Math.pow(density, settings.densityFalloff);

        if (density < 0.02) continue;

        // Draw dot
        const dotRadius = settings.dotSize * (0.3 + density * 0.7);
        const centerPx = Math.floor(px / spacing) * spacing + spacing / 2;
        const centerPy = Math.floor(py / spacing) * spacing + spacing / 2;

        // Simple circle drawing
        for (let dy = -Math.ceil(dotRadius); dy <= Math.ceil(dotRadius); dy++) {
          for (let dx = -Math.ceil(dotRadius); dx <= Math.ceil(dotRadius); dx++) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= dotRadius) {
              const x = Math.round(centerPx + dx);
              const y = Math.round(centerPy + dy);
              if (x >= 0 && x < width && y >= 0 && y < height) {
                const idx = (y * width + x) * 4;
                const alpha = Math.min(1, (dotRadius - dist + 0.5)) * density;
                const colorVar = 0.9 + density * 0.2;
                data[idx] = Math.round(color.r * colorVar * 255);
                data[idx + 1] = Math.round(color.g * colorVar * 255);
                data[idx + 2] = Math.round(color.b * colorVar * 255);
                data[idx + 3] = Math.round(alpha * 255 * opacity);
              }
            }
          }
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
    animationRef.current = requestAnimationFrame(render);
  }, [blobColor, animationSpeed, blobCount, blobSize, opacity, position]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const dpr = Math.min(window.devicePixelRatio, 2);
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }
    });

    resizeObserver.observe(canvas.parentElement!);
    startTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(render);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
  }, [render]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      style={{ backgroundColor }}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
