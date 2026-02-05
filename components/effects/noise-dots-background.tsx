"use client";

import { useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface NoiseDotsBackgroundProps {
  className?: string;
  /** Dot color - default: #b5b5b5 */
  dotColor?: string;
  /** Accent color for occasional dots - default: #792323 */
  accentColor?: string;
  /** Background color - default: transparent */
  backgroundColor?: string;
  /** Animation speed - default: 2.0 */
  animationSpeed?: number;
  /** Dot size - default: 1.0 */
  dotSize?: number;
  /** Spacing between dots - default: 12 */
  spacing?: number;
  /** Accent frequency (0-1) - default: 0.05 */
  accentFrequency?: number;
  /** Opacity of the entire effect */
  opacity?: number;
}

const defaultSettings = {
  dotSize: 1.0,
  spacing: 12,
  animationSpeed: 2.0,
  twinkleIntensity: 0.15,
  dotColor: "#b5b5b5",
  colorVariation: 0.0,
  accentColor: "#792323",
  accentFrequency: 0.05,
  positionJitter: 0.2,
  sizeVariation: 0.3,
  opacityVariation: 1.0,
  backgroundColor: "transparent",
};

// Deterministic random based on seed
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function NoiseDotsBackground({
  className,
  dotColor = defaultSettings.dotColor,
  accentColor = defaultSettings.accentColor,
  backgroundColor = defaultSettings.backgroundColor,
  animationSpeed = defaultSettings.animationSpeed,
  dotSize = defaultSettings.dotSize,
  spacing = defaultSettings.spacing,
  accentFrequency = defaultSettings.accentFrequency,
  opacity = 1,
}: NoiseDotsBackgroundProps) {
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
      : { r: 0.71, g: 0.71, b: 0.71 };
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

    const settings = { ...defaultSettings, dotColor, accentColor, animationSpeed, dotSize, spacing, accentFrequency };
    const mainColor = hexToRgb(settings.dotColor);
    const accent = hexToRgb(settings.accentColor);

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    const cellsX = Math.ceil(width / settings.spacing);
    const cellsY = Math.ceil(height / settings.spacing);

    for (let cy = 0; cy < cellsY; cy++) {
      for (let cx = 0; cx < cellsX; cx++) {
        const cellSeed = cx * 1000 + cy;
        const cellRand = seededRandom(cellSeed);
        const cellRand2 = seededRandom(cellSeed + 100);
        const cellRand3 = seededRandom(cellSeed + 200);

        // Position jitter
        const jitterX = (seededRandom(cellSeed + 1) - 0.5) * settings.positionJitter;
        const jitterY = (seededRandom(cellSeed + 2) - 0.5) * settings.positionJitter;

        const centerX = (cx + 0.5 + jitterX) * settings.spacing;
        const centerY = (cy + 0.5 + jitterY) * settings.spacing;

        // Animated twinkle
        const twinkle = Math.sin(time * settings.animationSpeed * Math.PI + cellRand * 6.28) * 0.5 + 0.5;
        const twinkleAmount = 1 - (1 - twinkle) * settings.twinkleIntensity;

        // Size variation
        const sizeVar = 1 + (cellRand2 - 0.5) * settings.sizeVariation * 2;
        const radius = settings.dotSize * sizeVar * twinkleAmount;

        // Opacity variation
        const opacityVar = 1 - cellRand * settings.opacityVariation;
        const finalOpacity = opacityVar * twinkleAmount * opacity;

        if (finalOpacity < 0.01) continue;

        // Color: main or accent
        let color = mainColor;
        if (cellRand < settings.accentFrequency) {
          color = accent;
        }

        // Draw dot
        for (let dy = -Math.ceil(radius); dy <= Math.ceil(radius); dy++) {
          for (let dx = -Math.ceil(radius); dx <= Math.ceil(radius); dx++) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= radius) {
              const x = Math.round(centerX + dx);
              const y = Math.round(centerY + dy);
              if (x >= 0 && x < width && y >= 0 && y < height) {
                const idx = (y * width + x) * 4;
                const edgeAlpha = Math.min(1, radius - dist + 0.5);
                data[idx] = Math.round(color.r * 255);
                data[idx + 1] = Math.round(color.g * 255);
                data[idx + 2] = Math.round(color.b * 255);
                data[idx + 3] = Math.round(edgeAlpha * finalOpacity * 255);
              }
            }
          }
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
    animationRef.current = requestAnimationFrame(render);
  }, [dotColor, accentColor, animationSpeed, dotSize, spacing, accentFrequency, opacity]);

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
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ backgroundColor }}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
