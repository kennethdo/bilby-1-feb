"use client";

import { forwardRef, useMemo } from "react";
import { Effect } from "postprocessing";
import { Uniform, Vector2 } from "three";

// Bayer 8x8 dithering matrix (normalized to 0-1 range)
const bayerMatrix8x8 = `
const float bayer8x8[64] = float[64](
   0.0/64.0, 32.0/64.0,  8.0/64.0, 40.0/64.0,  2.0/64.0, 34.0/64.0, 10.0/64.0, 42.0/64.0,
  48.0/64.0, 16.0/64.0, 56.0/64.0, 24.0/64.0, 50.0/64.0, 18.0/64.0, 58.0/64.0, 26.0/64.0,
  12.0/64.0, 44.0/64.0,  4.0/64.0, 36.0/64.0, 14.0/64.0, 46.0/64.0,  6.0/64.0, 38.0/64.0,
  60.0/64.0, 28.0/64.0, 52.0/64.0, 20.0/64.0, 62.0/64.0, 30.0/64.0, 54.0/64.0, 22.0/64.0,
   3.0/64.0, 35.0/64.0, 11.0/64.0, 43.0/64.0,  1.0/64.0, 33.0/64.0,  9.0/64.0, 41.0/64.0,
  51.0/64.0, 19.0/64.0, 59.0/64.0, 27.0/64.0, 49.0/64.0, 17.0/64.0, 57.0/64.0, 25.0/64.0,
  15.0/64.0, 47.0/64.0,  7.0/64.0, 39.0/64.0, 13.0/64.0, 45.0/64.0,  5.0/64.0, 37.0/64.0,
  63.0/64.0, 31.0/64.0, 55.0/64.0, 23.0/64.0, 61.0/64.0, 29.0/64.0, 53.0/64.0, 21.0/64.0
);
`;

const fragmentShader = `
${bayerMatrix8x8}

uniform float pixelSize;
uniform float colorDepth;
uniform bool grayscale;
uniform float contrast;
uniform float brightness;
uniform vec2 resolution;

float getBayerValue(vec2 coord) {
  int x = int(mod(coord.x, 8.0));
  int y = int(mod(coord.y, 8.0));
  return bayer8x8[y * 8 + x];
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // 1. Pixelate by snapping to grid
  vec2 pixelCoord = floor(uv * resolution / pixelSize) * pixelSize;
  vec2 pixelatedUV = pixelCoord / resolution;

  vec4 color = texture2D(inputBuffer, pixelatedUV);

  // 2. Apply contrast and brightness
  color.rgb = (color.rgb - 0.5) * contrast + 0.5 + brightness;
  color.rgb = clamp(color.rgb, 0.0, 1.0);

  // 3. Convert to grayscale if needed
  if (grayscale) {
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    color.rgb = vec3(gray);
  }

  // 4. Get Bayer threshold for this pixel
  float threshold = getBayerValue(pixelCoord / pixelSize) - 0.5;

  // 5. Quantize with dithering
  float levels = pow(2.0, colorDepth);
  vec3 dithered = color.rgb + threshold / levels;
  color.rgb = floor(dithered * levels) / (levels - 1.0);
  color.rgb = clamp(color.rgb, 0.0, 1.0);

  outputColor = vec4(color.rgb, 1.0);
}
`;

export interface DitherEffectOptions {
  pixelSize?: number;
  colorDepth?: number;
  grayscale?: boolean;
  contrast?: number;
  brightness?: number;
  resolution?: Vector2;
}

class DitherEffectImpl extends Effect {
  constructor({
    pixelSize = 4,
    colorDepth = 3,
    grayscale = false,
    contrast = 1.0,
    brightness = 0.0,
    resolution = new Vector2(1920, 1080),
  }: DitherEffectOptions = {}) {
    const uniforms = new Map<string, Uniform<unknown>>();
    uniforms.set("pixelSize", new Uniform(pixelSize));
    uniforms.set("colorDepth", new Uniform(colorDepth));
    uniforms.set("grayscale", new Uniform(grayscale));
    uniforms.set("contrast", new Uniform(contrast));
    uniforms.set("brightness", new Uniform(brightness));
    uniforms.set("resolution", new Uniform(resolution));

    super("DitherEffect", fragmentShader, { uniforms });
  }

  set pixelSize(value: number) {
    this.uniforms.get("pixelSize")!.value = value;
  }

  set colorDepth(value: number) {
    this.uniforms.get("colorDepth")!.value = value;
  }

  set grayscale(value: boolean) {
    this.uniforms.get("grayscale")!.value = value;
  }

  set contrast(value: number) {
    this.uniforms.get("contrast")!.value = value;
  }

  set brightness(value: number) {
    this.uniforms.get("brightness")!.value = value;
  }

  set resolution(value: Vector2) {
    this.uniforms.get("resolution")!.value = value;
  }
}

export const DitherEffect = forwardRef<DitherEffectImpl, DitherEffectOptions>(
  function DitherEffect(props, ref) {
    const effect = useMemo(() => new DitherEffectImpl(props), []);

    // Update uniforms when props change
    useMemo(() => {
      if (props.pixelSize !== undefined) effect.pixelSize = props.pixelSize;
      if (props.colorDepth !== undefined) effect.colorDepth = props.colorDepth;
      if (props.grayscale !== undefined) effect.grayscale = props.grayscale;
      if (props.contrast !== undefined) effect.contrast = props.contrast;
      if (props.brightness !== undefined) effect.brightness = props.brightness;
      if (props.resolution) effect.resolution = props.resolution;
    }, [
      effect,
      props.pixelSize,
      props.colorDepth,
      props.grayscale,
      props.contrast,
      props.brightness,
      props.resolution,
    ]);

    return <primitive ref={ref} object={effect} />;
  }
);
