"use client";

import { forwardRef, useMemo } from "react";
import { Effect } from "postprocessing";
import { Uniform, Vector2 } from "three";
import type { EffectType, GlobalSettings, EffectSettings, ColorSettings } from "./index";

// Combined shader with 4 effects + color mapping
const fragmentShader = `
// ============ UNIFORMS ============
uniform int effectType;
uniform vec2 resolution;
uniform float time;

// Global adjustments
uniform float brightness;
uniform float contrast;
uniform float saturation;
uniform float hueRotation;
uniform float gamma;
uniform float intensity;

// Color mapping
uniform int colorMode; // 0=original, 1=grayscale, 2=duotone, 3=threshold
uniform vec3 backgroundColor;
uniform vec3 darkColor;
uniform vec3 lightColor;
uniform float colorThreshold;
uniform float colorSoftness;
uniform bool colorInvert;

// ASCII
uniform float asciiScale;
uniform float asciiSpacing;
uniform bool asciiInvert;
uniform int asciiColorMode; // 0=mono, 1=colored
uniform float asciiCharBrightness;
uniform float asciiEdgeEnhance;

// Dithering
uniform float pixelSize;
uniform float colorDepth;
uniform int bayerSize;
uniform float errorDiffusion;
uniform float noiseAmount;
uniform float quantizeLevels;

// Halftone
uniform float halftoneSize;
uniform float halftoneAngle;
uniform float halftoneSpacing;
uniform bool halftoneCmyk;
uniform int halftoneShape; // 0=circle, 1=ellipse, 2=square, 3=line
uniform int halftoneBlend; // 0=normal, 1=multiply, 2=screen
uniform float halftoneAngleOffset;
uniform float halftoneSharpness;

// Dots
uniform float dotsSize;
uniform float dotsSpacing;
uniform int dotsShape; // 0=circle, 1=square, 2=diamond, 3=cross
uniform float dotsSizeVariation;
uniform float dotsRotation;
uniform int dotsGridType; // 0=square, 1=hex, 2=random
uniform int dotsFillMode; // 0=solid, 1=outline, 2=gradient

// Noise Dots
uniform float noiseDotSize;
uniform float noiseDotsSpacing;
uniform float noiseDotsAnimSpeed;
uniform float noiseDotsTwinkle;
uniform vec3 noiseDotColor;
uniform float noiseDotsColorVar;
uniform vec3 noiseDotsAccent;
uniform float noiseDotsAccentFreq;
uniform float noiseDotsPosJitter;
uniform float noiseDotsSizeVar;
uniform float noiseDotsOpacityVar;

// Gradient Blob
uniform float blobCount;
uniform float blobSize;
uniform float blobSoftness;
uniform float blobDotSize;
uniform float blobDotSpacing;
uniform float blobDensityFalloff;
uniform float blobAnimSpeed;
uniform float blobMorphSpeed;
uniform float blobFlowDir;
uniform vec3 blobColor;

// ============ HELPER FUNCTIONS ============

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float luminance(vec3 c) {
  return dot(c, vec3(0.299, 0.587, 0.114));
}

float rand(vec2 co) {
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

// Bayer matrices
const float bayer2[4] = float[4](0.0, 2.0, 3.0, 1.0);
const float bayer4[16] = float[16](
  0.0, 8.0, 2.0, 10.0,
  12.0, 4.0, 14.0, 6.0,
  3.0, 11.0, 1.0, 9.0,
  15.0, 7.0, 13.0, 5.0
);
const float bayer8[64] = float[64](
  0.0, 32.0, 8.0, 40.0, 2.0, 34.0, 10.0, 42.0,
  48.0, 16.0, 56.0, 24.0, 50.0, 18.0, 58.0, 26.0,
  12.0, 44.0, 4.0, 36.0, 14.0, 46.0, 6.0, 38.0,
  60.0, 28.0, 52.0, 20.0, 62.0, 30.0, 54.0, 22.0,
  3.0, 35.0, 11.0, 43.0, 1.0, 33.0, 9.0, 41.0,
  51.0, 19.0, 59.0, 27.0, 49.0, 17.0, 57.0, 25.0,
  15.0, 47.0, 7.0, 39.0, 13.0, 45.0, 5.0, 37.0,
  63.0, 31.0, 55.0, 23.0, 61.0, 29.0, 53.0, 21.0
);

float getBayer(vec2 coord, int size) {
  if (size == 2) {
    int x = int(mod(coord.x, 2.0));
    int y = int(mod(coord.y, 2.0));
    return bayer2[y * 2 + x] / 4.0;
  } else if (size == 4) {
    int x = int(mod(coord.x, 4.0));
    int y = int(mod(coord.y, 4.0));
    return bayer4[y * 4 + x] / 16.0;
  } else {
    int x = int(mod(coord.x, 8.0));
    int y = int(mod(coord.y, 8.0));
    return bayer8[y * 8 + x] / 64.0;
  }
}

// ============ GLOBAL ADJUSTMENTS ============

vec3 applyAdjustments(vec3 color) {
  // Brightness
  color += brightness;

  // Contrast
  color = (color - 0.5) * (1.0 + contrast) + 0.5;

  // Saturation
  float gray = luminance(color);
  color = mix(vec3(gray), color, 1.0 + saturation);

  // Hue rotation
  if (hueRotation != 0.0) {
    vec3 hsv = rgb2hsv(color);
    hsv.x = fract(hsv.x + hueRotation / 360.0);
    color = hsv2rgb(hsv);
  }

  // Gamma
  color = pow(max(color, 0.0), vec3(1.0 / gamma));

  return clamp(color, 0.0, 1.0);
}

// ============ COLOR MAPPING ============

vec3 applyColorMapping(vec3 color) {
  float lum = luminance(color);

  if (colorMode == 1) { // grayscale
    return vec3(lum);
  } else if (colorMode == 2) { // duotone
    return mix(darkColor, lightColor, lum);
  } else if (colorMode == 3) { // threshold
    float t;
    if (colorSoftness > 0.0) {
      t = smoothstep(colorThreshold - colorSoftness, colorThreshold + colorSoftness, lum);
    } else {
      t = step(colorThreshold, lum);
    }
    if (colorInvert) t = 1.0 - t;
    return mix(darkColor, lightColor, t);
  }

  return color; // original
}

// ============ EFFECT IMPLEMENTATIONS ============

// 0: ASCII
vec3 effectAscii(vec2 uv, vec3 original) {
  float scale = asciiScale * 8.0;
  vec2 cell = floor(uv * resolution / scale);
  vec2 cellUV = fract(uv * resolution / scale);

  vec2 sampleUV = (cell + 0.5) * scale / resolution;
  vec3 color = texture2D(inputBuffer, sampleUV).rgb;

  // Edge enhancement
  if (asciiEdgeEnhance > 0.0) {
    vec2 texel = scale / resolution;
    float lumC = luminance(color);
    float lumL = luminance(texture2D(inputBuffer, sampleUV - vec2(texel.x, 0.0)).rgb);
    float lumR = luminance(texture2D(inputBuffer, sampleUV + vec2(texel.x, 0.0)).rgb);
    float lumU = luminance(texture2D(inputBuffer, sampleUV - vec2(0.0, texel.y)).rgb);
    float lumD = luminance(texture2D(inputBuffer, sampleUV + vec2(0.0, texel.y)).rgb);
    float edge = abs(lumL - lumR) + abs(lumU - lumD);
    color = mix(color, color * (1.0 + edge * 2.0), asciiEdgeEnhance);
  }

  float lum = luminance(color) * asciiCharBrightness;
  if (asciiInvert) lum = 1.0 - lum;

  // ASCII character simulation using patterns
  float charIndex = floor(lum * 10.0);
  float pattern = 0.0;

  vec2 p = cellUV;
  if (charIndex < 1.0) pattern = 0.0;
  else if (charIndex < 2.0) pattern = step(0.9, max(p.x, p.y)) * 0.3;
  else if (charIndex < 3.0) pattern = step(0.8, p.x) * step(0.8, p.y) * 0.5;
  else if (charIndex < 4.0) pattern = (step(0.4, p.x) * step(p.x, 0.6)) * 0.5;
  else if (charIndex < 5.0) pattern = (step(0.4, p.y) * step(p.y, 0.6) + step(0.4, p.x) * step(p.x, 0.6)) * 0.5;
  else if (charIndex < 6.0) pattern = length(p - 0.5) < 0.3 ? 0.6 : 0.0;
  else if (charIndex < 7.0) pattern = length(p - 0.5) < 0.4 ? 0.7 : 0.0;
  else if (charIndex < 8.0) pattern = (step(0.2, p.x) * step(p.x, 0.8) * step(0.2, p.y) * step(p.y, 0.8)) * 0.8;
  else if (charIndex < 9.0) pattern = (step(0.1, p.x) * step(p.x, 0.9) * step(0.1, p.y) * step(p.y, 0.9)) * 0.9;
  else pattern = 1.0;

  vec3 outputColor = asciiColorMode == 1 ? color : vec3(1.0);
  return mix(backgroundColor, outputColor, pattern);
}

// 1: Dithering
vec3 effectDithering(vec2 uv, vec3 original) {
  vec2 pixelCoord = floor(uv * resolution / pixelSize) * pixelSize;
  vec2 pixelatedUV = pixelCoord / resolution;
  vec3 color = texture2D(inputBuffer, pixelatedUV).rgb;

  // Add noise
  if (noiseAmount > 0.0) {
    float n = rand(pixelCoord + time) * 2.0 - 1.0;
    color += n * noiseAmount * 0.1;
  }

  float threshold = getBayer(pixelCoord / pixelSize, bayerSize) - 0.5;

  // Error diffusion blending
  float levels = pow(2.0, colorDepth);
  vec3 quantized = floor(color * levels) / (levels - 1.0);
  vec3 dithered = color + threshold / levels;
  vec3 ditheredQuantized = floor(dithered * levels) / (levels - 1.0);

  color = mix(ditheredQuantized, quantized, errorDiffusion);

  // Additional quantize levels
  if (quantizeLevels > 0.0) {
    color = floor(color * quantizeLevels) / (quantizeLevels - 1.0);
  }

  return clamp(color, 0.0, 1.0);
}

// 2: Halftone
vec3 effectHalftone(vec2 uv, vec3 original) {
  float angle = halftoneAngle * 3.14159 / 180.0;
  mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));

  vec2 coord = uv * resolution;
  vec2 rotCoord = rot * coord;
  vec2 cell = floor(rotCoord / halftoneSpacing);
  vec2 cellCenter = (cell + 0.5) * halftoneSpacing;
  vec2 samplePos = inverse(rot) * cellCenter / resolution;

  vec3 color = texture2D(inputBuffer, clamp(samplePos, 0.0, 1.0)).rgb;
  float lum = luminance(color);

  vec2 p = rotCoord - cellCenter;
  float dist;

  if (halftoneShape == 0) { // circle
    dist = length(p);
  } else if (halftoneShape == 1) { // ellipse
    dist = length(p * vec2(1.0, 1.5));
  } else if (halftoneShape == 2) { // square
    dist = max(abs(p.x), abs(p.y));
  } else { // line
    dist = abs(p.y);
  }

  float radius = lum * halftoneSize;
  float sharpness = 0.5 / halftoneSharpness;
  float dot = smoothstep(radius + sharpness, radius - sharpness, dist);

  if (halftoneCmyk) {
    // CMYK simulation with angle offsets
    vec3 result = vec3(0.0);
    for (int i = 0; i < 4; i++) {
      float a = angle + float(i) * halftoneAngleOffset * 3.14159 / 180.0;
      mat2 r = mat2(cos(a), -sin(a), sin(a), cos(a));
      vec2 rc = r * coord;
      vec2 cc = floor(rc / halftoneSpacing);
      vec2 ccenter = (cc + 0.5) * halftoneSpacing;
      float d = length(rc - ccenter);

      float channel = i < 3 ? color[i] : luminance(color);
      float rad = channel * halftoneSize;
      float dt = smoothstep(rad + sharpness, rad - sharpness, d);

      if (i < 3) result[i] = dt;
      else result = mix(result, vec3(dt), 0.3);
    }

    // Blend modes
    if (halftoneBlend == 1) { // multiply
      result = result * color;
    } else if (halftoneBlend == 2) { // screen
      result = 1.0 - (1.0 - result) * (1.0 - color);
    }

    return result;
  }

  vec3 dotColor = halftoneBlend == 1 ? color * dot : (halftoneBlend == 2 ? 1.0 - (1.0 - color) * (1.0 - dot) : color);
  return mix(backgroundColor, dotColor, dot);
}

// 3: Dots
vec3 effectDots(vec2 uv, vec3 original) {
  vec2 coord = uv * resolution;

  // Apply rotation
  if (dotsRotation != 0.0) {
    float a = dotsRotation * 3.14159 / 180.0;
    mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
    coord = rot * (coord - resolution * 0.5) + resolution * 0.5;
  }

  vec2 cell;
  vec2 cellCenter;

  if (dotsGridType == 0) { // square grid
    cell = floor(coord / dotsSpacing);
    cellCenter = (cell + 0.5) * dotsSpacing;
  } else if (dotsGridType == 1) { // hex grid
    float rowHeight = dotsSpacing * 0.866;
    float row = floor(coord.y / rowHeight);
    float offset = mod(row, 2.0) * dotsSpacing * 0.5;
    cell = vec2(floor((coord.x - offset) / dotsSpacing), row);
    cellCenter = vec2((cell.x + 0.5) * dotsSpacing + offset, (cell.y + 0.5) * rowHeight);
  } else { // random offset
    cell = floor(coord / dotsSpacing);
    vec2 randOffset = vec2(rand(cell), rand(cell + 100.0)) * 0.5 - 0.25;
    cellCenter = (cell + 0.5 + randOffset) * dotsSpacing;
  }

  vec2 samplePos = cellCenter / resolution;
  vec3 color = texture2D(inputBuffer, clamp(samplePos, 0.0, 1.0)).rgb;
  float lum = luminance(color);

  vec2 p = coord - cellCenter;
  float dist;

  if (dotsShape == 0) { // circle
    dist = length(p);
  } else if (dotsShape == 1) { // square
    dist = max(abs(p.x), abs(p.y));
  } else if (dotsShape == 2) { // diamond
    dist = abs(p.x) + abs(p.y);
  } else { // cross
    dist = min(abs(p.x), abs(p.y));
  }

  // Size variation based on luminance
  float sizeVar = 1.0 + (lum - 0.5) * dotsSizeVariation;
  float radius = lum * dotsSize * sizeVar;

  float dot;
  if (dotsFillMode == 1) { // outline
    dot = smoothstep(radius + 1.0, radius, dist) * smoothstep(radius - 2.0, radius - 1.0, dist);
  } else if (dotsFillMode == 2) { // gradient
    dot = smoothstep(radius + 0.5, 0.0, dist);
  } else { // solid
    dot = smoothstep(radius + 0.5, radius - 0.5, dist);
  }

  return mix(backgroundColor, color, dot);
}

// 4: Noise Dots - Animated twinkling particle field (standalone, no video)
vec3 effectNoiseDots(vec2 uv, vec3 original) {
  vec2 coord = uv * resolution;

  // Grid cell calculation
  vec2 cell = floor(coord / noiseDotsSpacing);
  vec2 cellUV = fract(coord / noiseDotsSpacing);

  // Position jitter based on cell (deterministic per cell)
  float cellRand = rand(cell);
  float cellRand2 = rand(cell + 100.0);
  float cellRand3 = rand(cell + 200.0);
  vec2 jitter = vec2(
    (rand(cell + 1.0) - 0.5) * noiseDotsPosJitter,
    (rand(cell + 2.0) - 0.5) * noiseDotsPosJitter
  );

  vec2 dotCenter = vec2(0.5) + jitter;
  vec2 toDot = cellUV - dotCenter;
  float dist = length(toDot);

  // Animated twinkle effect
  float twinkle = sin(time * noiseDotsAnimSpeed * 3.14159 + cellRand * 6.28) * 0.5 + 0.5;
  twinkle = mix(1.0, twinkle, noiseDotsTwinkle);

  // Size variation
  float sizeVar = 1.0 + (cellRand2 - 0.5) * noiseDotsSizeVar * 2.0;
  float dotRadius = noiseDotSize * sizeVar * twinkle / noiseDotsSpacing;

  // Opacity variation
  float opacityVar = 1.0 - cellRand * noiseDotsOpacityVar;

  // Dot shape
  float dot = smoothstep(dotRadius + 0.5 / noiseDotsSpacing, dotRadius - 0.5 / noiseDotsSpacing, dist);
  dot *= opacityVar * twinkle;

  // Color: base dot color with variation, or accent color
  vec3 dotColor = noiseDotColor * (0.8 + cellRand3 * noiseDotsColorVar);

  // Accent color for some dots based on frequency
  if (cellRand < noiseDotsAccentFreq) {
    dotColor = noiseDotsAccent;
  }

  return mix(backgroundColor, dotColor, dot);
}

// 5: Gradient Blob - Flowing metaball shapes with dot density gradients (standalone, no video)
vec3 effectGradientBlob(vec2 uv, vec3 original) {
  vec2 coord = uv * resolution;
  vec2 aspect = vec2(resolution.x / resolution.y, 1.0);
  vec2 uvAspect = uv * aspect;

  // Flow direction
  float flowRad = blobFlowDir * 3.14159 / 180.0;
  vec2 flowVec = vec2(cos(flowRad), sin(flowRad));

  // Dot grid for rendering
  vec2 cell = floor(coord / blobDotSpacing);
  vec2 cellUV = fract(coord / blobDotSpacing);
  vec2 cellCenter = (cell + 0.5) * blobDotSpacing / resolution;

  // Calculate field at dot center for density
  float dotField = 0.0;
  vec2 dotUVAspect = cellCenter * aspect;

  for (float i = 0.0; i < 6.0; i++) {
    if (i >= blobCount) break;

    float phase = i * 2.094; // 120 degree offset
    float t = time * blobAnimSpeed;

    // Primary orbital motion
    vec2 orbit = vec2(
      sin(t + phase) * 0.35,
      cos(t * 0.7 + phase) * 0.3
    );

    // Secondary morph motion
    vec2 morph = vec2(
      sin(t * blobMorphSpeed * 1.3 + i * 1.5) * 0.2,
      cos(t * blobMorphSpeed * 0.9 + i * 2.1) * 0.15
    );

    // Flow drift
    vec2 drift = flowVec * sin(t * 0.5 + i) * 0.15;

    // Blob center - start from right side and flow
    vec2 center = vec2(0.7, 0.5) * aspect + orbit + morph + drift;
    center.x += (i - blobCount * 0.5) * 0.15;
    center.y += (i - blobCount * 0.5) * 0.1;

    vec2 toBlob = dotUVAspect - center;
    float dist = length(toBlob);

    // Animated blob radius
    float blobRadius = blobSize * (0.8 + 0.2 * sin(t * 0.5 + i * 2.0));
    dotField += blobRadius * blobRadius / (dist * dist + 0.001);
  }

  // Dot density based on field strength (gradient effect)
  float density = smoothstep(0.2, 1.8, dotField);
  density = pow(density, blobDensityFalloff);

  // Dot rendering
  vec2 toDotCenter = cellUV - 0.5;
  float dotDist = length(toDotCenter);

  // Vary dot size based on density - smaller dots at edges
  float dotRadius = blobDotSize * (0.3 + density * 0.7) / blobDotSpacing;
  float dot = smoothstep(dotRadius + 0.3 / blobDotSpacing, dotRadius - 0.3 / blobDotSpacing, dotDist);

  // Skip dots in very low density areas
  if (density < 0.02) dot = 0.0;

  // Subtle color variation - lighter at edges, darker in center
  vec3 color = mix(blobColor * 1.2, blobColor * 0.85, density);

  return mix(backgroundColor, color, dot);
}

// ============ MAIN ============

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec3 original = inputColor.rgb;
  vec3 result;

  // Apply selected effect
  if (effectType == 0) result = effectAscii(uv, original);
  else if (effectType == 1) result = effectDithering(uv, original);
  else if (effectType == 2) result = effectHalftone(uv, original);
  else if (effectType == 3) result = effectDots(uv, original);
  else if (effectType == 4) result = effectNoiseDots(uv, original);
  else if (effectType == 5) result = effectGradientBlob(uv, original);
  else result = original;

  // Apply global adjustments
  result = applyAdjustments(result);

  // Apply color mapping
  result = applyColorMapping(result);

  // Mix with original based on intensity
  result = mix(original, result, intensity);

  outputColor = vec4(result, 1.0);
}
`;

const effectTypeMap: Record<EffectType, number> = {
  ascii: 0,
  dithering: 1,
  halftone: 2,
  dots: 3,
  noiseDots: 4,
  gradientBlob: 5,
};

export interface MultiEffectOptions {
  effectType: EffectType;
  resolution?: Vector2;
  time?: number;
  globalSettings: GlobalSettings;
  colorSettings: ColorSettings;
  effectSettings: EffectSettings;
}

class MultiEffectImpl extends Effect {
  private startTime: number;

  constructor(options: MultiEffectOptions) {
    const uniforms = new Map<string, Uniform<unknown>>();

    // Effect type
    uniforms.set("effectType", new Uniform(effectTypeMap[options.effectType]));
    uniforms.set("resolution", new Uniform(options.resolution ?? new Vector2(1920, 1080)));
    uniforms.set("time", new Uniform(0));

    // Global settings
    const g = options.globalSettings;
    uniforms.set("brightness", new Uniform(g.brightness));
    uniforms.set("contrast", new Uniform(g.contrast));
    uniforms.set("saturation", new Uniform(g.saturation));
    uniforms.set("hueRotation", new Uniform(g.hueRotation));
    uniforms.set("gamma", new Uniform(g.gamma));
    uniforms.set("intensity", new Uniform(g.intensity));

    // Color settings
    const col = options.colorSettings;
    uniforms.set("colorMode", new Uniform(
      col.mode === "grayscale" ? 1 : col.mode === "duotone" ? 2 : col.mode === "threshold" ? 3 : 0
    ));
    uniforms.set("backgroundColor", new Uniform(hexToVec3(col.backgroundColor)));
    uniforms.set("darkColor", new Uniform(hexToVec3(col.darkColor)));
    uniforms.set("lightColor", new Uniform(hexToVec3(col.lightColor)));
    uniforms.set("colorThreshold", new Uniform(col.threshold));
    uniforms.set("colorSoftness", new Uniform(col.softness));
    uniforms.set("colorInvert", new Uniform(col.invert));

    // ASCII
    const a = options.effectSettings.ascii;
    uniforms.set("asciiScale", new Uniform(a.scale));
    uniforms.set("asciiSpacing", new Uniform(a.spacing));
    uniforms.set("asciiInvert", new Uniform(a.invert));
    uniforms.set("asciiColorMode", new Uniform(a.colorMode === "colored" ? 1 : 0));
    uniforms.set("asciiCharBrightness", new Uniform(a.charBrightness));
    uniforms.set("asciiEdgeEnhance", new Uniform(a.edgeEnhance));

    // Dithering
    const d = options.effectSettings.dithering;
    uniforms.set("pixelSize", new Uniform(d.pixelSize));
    uniforms.set("colorDepth", new Uniform(d.colorDepth));
    uniforms.set("bayerSize", new Uniform(d.bayerSize));
    uniforms.set("errorDiffusion", new Uniform(d.errorDiffusion));
    uniforms.set("noiseAmount", new Uniform(d.noiseAmount));
    uniforms.set("quantizeLevels", new Uniform(d.quantizeLevels));

    // Halftone
    const h = options.effectSettings.halftone;
    uniforms.set("halftoneSize", new Uniform(h.dotSize));
    uniforms.set("halftoneAngle", new Uniform(h.angle));
    uniforms.set("halftoneSpacing", new Uniform(h.spacing));
    uniforms.set("halftoneCmyk", new Uniform(h.cmyk));
    uniforms.set("halftoneShape", new Uniform(
      h.shape === "circle" ? 0 : h.shape === "ellipse" ? 1 : h.shape === "square" ? 2 : 3
    ));
    uniforms.set("halftoneBlend", new Uniform(
      h.blendMode === "normal" ? 0 : h.blendMode === "multiply" ? 1 : 2
    ));
    uniforms.set("halftoneAngleOffset", new Uniform(h.angleOffset));
    uniforms.set("halftoneSharpness", new Uniform(h.dotSharpness));

    // Dots
    const dt = options.effectSettings.dots;
    uniforms.set("dotsSize", new Uniform(dt.size));
    uniforms.set("dotsSpacing", new Uniform(dt.spacing));
    uniforms.set("dotsShape", new Uniform(
      dt.shape === "circle" ? 0 : dt.shape === "square" ? 1 : dt.shape === "diamond" ? 2 : 3
    ));
    uniforms.set("dotsSizeVariation", new Uniform(dt.sizeVariation));
    uniforms.set("dotsRotation", new Uniform(dt.rotation));
    uniforms.set("dotsGridType", new Uniform(
      dt.gridType === "square" ? 0 : dt.gridType === "hex" ? 1 : 2
    ));
    uniforms.set("dotsFillMode", new Uniform(
      dt.fillMode === "solid" ? 0 : dt.fillMode === "outline" ? 1 : 2
    ));

    // Noise Dots
    const nd = options.effectSettings.noiseDots;
    uniforms.set("noiseDotSize", new Uniform(nd.dotSize));
    uniforms.set("noiseDotsSpacing", new Uniform(nd.spacing));
    uniforms.set("noiseDotsAnimSpeed", new Uniform(nd.animationSpeed));
    uniforms.set("noiseDotsTwinkle", new Uniform(nd.twinkleIntensity));
    uniforms.set("noiseDotColor", new Uniform(hexToVec3(nd.dotColor)));
    uniforms.set("noiseDotsColorVar", new Uniform(nd.colorVariation));
    uniforms.set("noiseDotsAccent", new Uniform(hexToVec3(nd.accentColor)));
    uniforms.set("noiseDotsAccentFreq", new Uniform(nd.accentFrequency));
    uniforms.set("noiseDotsPosJitter", new Uniform(nd.positionJitter));
    uniforms.set("noiseDotsSizeVar", new Uniform(nd.sizeVariation));
    uniforms.set("noiseDotsOpacityVar", new Uniform(nd.opacityVariation));

    // Gradient Blob
    const gb = options.effectSettings.gradientBlob;
    uniforms.set("blobCount", new Uniform(gb.blobCount));
    uniforms.set("blobSize", new Uniform(gb.blobSize));
    uniforms.set("blobSoftness", new Uniform(gb.blobSoftness));
    uniforms.set("blobDotSize", new Uniform(gb.dotSize));
    uniforms.set("blobDotSpacing", new Uniform(gb.dotSpacing));
    uniforms.set("blobDensityFalloff", new Uniform(gb.dotDensityFalloff));
    uniforms.set("blobAnimSpeed", new Uniform(gb.animationSpeed));
    uniforms.set("blobMorphSpeed", new Uniform(gb.morphSpeed));
    uniforms.set("blobFlowDir", new Uniform(gb.flowDirection));
    uniforms.set("blobColor", new Uniform(hexToVec3(gb.blobColor)));

    super("MultiEffect", fragmentShader, { uniforms });
    this.startTime = performance.now();
  }

  update() {
    const elapsed = (performance.now() - this.startTime) / 1000;
    this.uniforms.get("time")!.value = elapsed;
  }

  setEffectType(type: EffectType) {
    this.uniforms.get("effectType")!.value = effectTypeMap[type];
  }

  setResolution(res: Vector2) {
    this.uniforms.get("resolution")!.value = res;
  }

  setUniform(name: string, value: unknown) {
    const uniform = this.uniforms.get(name);
    if (uniform) uniform.value = value;
  }
}

function hexToVec3(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255,
    ];
  }
  return [0, 0, 0];
}

export const MultiEffect = forwardRef<MultiEffectImpl, MultiEffectOptions>(
  function MultiEffect(props, ref) {
    const effect = useMemo(() => new MultiEffectImpl(props), []);

    // Update effect type
    useMemo(() => {
      effect.setEffectType(props.effectType);
    }, [effect, props.effectType]);

    // Update resolution
    useMemo(() => {
      if (props.resolution) {
        effect.setResolution(props.resolution);
      }
    }, [effect, props.resolution]);

    // Update global settings
    useMemo(() => {
      const g = props.globalSettings;
      effect.setUniform("brightness", g.brightness);
      effect.setUniform("contrast", g.contrast);
      effect.setUniform("saturation", g.saturation);
      effect.setUniform("hueRotation", g.hueRotation);
      effect.setUniform("gamma", g.gamma);
      effect.setUniform("intensity", g.intensity);
    }, [effect, props.globalSettings]);

    // Update color settings
    useMemo(() => {
      const col = props.colorSettings;
      effect.setUniform("colorMode",
        col.mode === "grayscale" ? 1 : col.mode === "duotone" ? 2 : col.mode === "threshold" ? 3 : 0
      );
      effect.setUniform("backgroundColor", hexToVec3(col.backgroundColor));
      effect.setUniform("darkColor", hexToVec3(col.darkColor));
      effect.setUniform("lightColor", hexToVec3(col.lightColor));
      effect.setUniform("colorThreshold", col.threshold);
      effect.setUniform("colorSoftness", col.softness);
      effect.setUniform("colorInvert", col.invert);
    }, [effect, props.colorSettings]);

    // Update effect-specific settings
    useMemo(() => {
      const s = props.effectSettings;

      // ASCII
      effect.setUniform("asciiScale", s.ascii.scale);
      effect.setUniform("asciiSpacing", s.ascii.spacing);
      effect.setUniform("asciiInvert", s.ascii.invert);
      effect.setUniform("asciiColorMode", s.ascii.colorMode === "colored" ? 1 : 0);
      effect.setUniform("asciiCharBrightness", s.ascii.charBrightness);
      effect.setUniform("asciiEdgeEnhance", s.ascii.edgeEnhance);

      // Dithering
      effect.setUniform("pixelSize", s.dithering.pixelSize);
      effect.setUniform("colorDepth", s.dithering.colorDepth);
      effect.setUniform("bayerSize", s.dithering.bayerSize);
      effect.setUniform("errorDiffusion", s.dithering.errorDiffusion);
      effect.setUniform("noiseAmount", s.dithering.noiseAmount);
      effect.setUniform("quantizeLevels", s.dithering.quantizeLevels);

      // Halftone
      effect.setUniform("halftoneSize", s.halftone.dotSize);
      effect.setUniform("halftoneAngle", s.halftone.angle);
      effect.setUniform("halftoneSpacing", s.halftone.spacing);
      effect.setUniform("halftoneCmyk", s.halftone.cmyk);
      effect.setUniform("halftoneShape",
        s.halftone.shape === "circle" ? 0 : s.halftone.shape === "ellipse" ? 1 : s.halftone.shape === "square" ? 2 : 3
      );
      effect.setUniform("halftoneBlend",
        s.halftone.blendMode === "normal" ? 0 : s.halftone.blendMode === "multiply" ? 1 : 2
      );
      effect.setUniform("halftoneAngleOffset", s.halftone.angleOffset);
      effect.setUniform("halftoneSharpness", s.halftone.dotSharpness);

      // Dots
      effect.setUniform("dotsSize", s.dots.size);
      effect.setUniform("dotsSpacing", s.dots.spacing);
      effect.setUniform("dotsShape",
        s.dots.shape === "circle" ? 0 : s.dots.shape === "square" ? 1 : s.dots.shape === "diamond" ? 2 : 3
      );
      effect.setUniform("dotsSizeVariation", s.dots.sizeVariation);
      effect.setUniform("dotsRotation", s.dots.rotation);
      effect.setUniform("dotsGridType",
        s.dots.gridType === "square" ? 0 : s.dots.gridType === "hex" ? 1 : 2
      );
      effect.setUniform("dotsFillMode",
        s.dots.fillMode === "solid" ? 0 : s.dots.fillMode === "outline" ? 1 : 2
      );

      // Noise Dots
      effect.setUniform("noiseDotSize", s.noiseDots.dotSize);
      effect.setUniform("noiseDotsSpacing", s.noiseDots.spacing);
      effect.setUniform("noiseDotsAnimSpeed", s.noiseDots.animationSpeed);
      effect.setUniform("noiseDotsTwinkle", s.noiseDots.twinkleIntensity);
      effect.setUniform("noiseDotColor", hexToVec3(s.noiseDots.dotColor));
      effect.setUniform("noiseDotsColorVar", s.noiseDots.colorVariation);
      effect.setUniform("noiseDotsAccent", hexToVec3(s.noiseDots.accentColor));
      effect.setUniform("noiseDotsAccentFreq", s.noiseDots.accentFrequency);
      effect.setUniform("noiseDotsPosJitter", s.noiseDots.positionJitter);
      effect.setUniform("noiseDotsSizeVar", s.noiseDots.sizeVariation);
      effect.setUniform("noiseDotsOpacityVar", s.noiseDots.opacityVariation);

      // Gradient Blob
      effect.setUniform("blobCount", s.gradientBlob.blobCount);
      effect.setUniform("blobSize", s.gradientBlob.blobSize);
      effect.setUniform("blobSoftness", s.gradientBlob.blobSoftness);
      effect.setUniform("blobDotSize", s.gradientBlob.dotSize);
      effect.setUniform("blobDotSpacing", s.gradientBlob.dotSpacing);
      effect.setUniform("blobDensityFalloff", s.gradientBlob.dotDensityFalloff);
      effect.setUniform("blobAnimSpeed", s.gradientBlob.animationSpeed);
      effect.setUniform("blobMorphSpeed", s.gradientBlob.morphSpeed);
      effect.setUniform("blobFlowDir", s.gradientBlob.flowDirection);
      effect.setUniform("blobColor", hexToVec3(s.gradientBlob.blobColor));
    }, [effect, props.effectSettings]);

    return <primitive ref={ref} object={effect} />;
  }
);
