export type EffectType = "ascii" | "dithering" | "halftone" | "dots" | "noiseDots" | "gradientBlob";

export interface EffectInfo {
  id: EffectType;
  name: string;
  description: string;
}

export const effectsList: EffectInfo[] = [
  { id: "ascii", name: "ASCII", description: "Convert to ASCII characters" },
  { id: "dithering", name: "Dithering", description: "Bayer ordered dithering" },
  { id: "halftone", name: "Halftone", description: "CMYK halftone dots" },
  { id: "dots", name: "Dots", description: "Circular dot pattern" },
  { id: "noiseDots", name: "Noise Dots", description: "Animated twinkling particle field" },
  { id: "gradientBlob", name: "Gradient Blob", description: "Flowing metaball shapes with dot gradients" },
];

export interface GlobalSettings {
  brightness: number;
  contrast: number;
  saturation: number;
  hueRotation: number;
  gamma: number;
  intensity: number;
}

export const defaultGlobalSettings: GlobalSettings = {
  brightness: 0,
  contrast: 0,
  saturation: 0,
  hueRotation: 0,
  gamma: 1.0,
  intensity: 1.0,
};

// Color mapping settings for duotone/threshold coloring
export interface ColorSettings {
  mode: "original" | "grayscale" | "duotone" | "threshold";
  backgroundColor: string;
  // Duotone colors
  darkColor: string;
  lightColor: string;
  // Threshold controls
  threshold: number;
  softness: number;
  invert: boolean;
}

export const defaultColorSettings: ColorSettings = {
  mode: "original",
  backgroundColor: "#000000",
  darkColor: "#792323",
  lightColor: "#ffffff",
  threshold: 0.5,
  softness: 0.1,
  invert: false,
};

// Bilby preset - red and white duotone
export const bilbyColorPreset: ColorSettings = {
  mode: "threshold",
  backgroundColor: "#f6f5ef",
  darkColor: "#792323",
  lightColor: "#ffffff",
  threshold: 0.45,
  softness: 0.05,
  invert: false,
};

// Effect-specific settings
export interface AsciiSettings {
  scale: number;
  spacing: number;
  characterSet: "standard" | "dense" | "minimal" | "blocks" | "braille";
  // Additional settings
  invert: boolean;
  colorMode: "mono" | "colored";
  charBrightness: number;
  edgeEnhance: number;
}

export interface DitheringSettings {
  pixelSize: number;
  colorDepth: number;
  bayerSize: 2 | 4 | 8;
  // Additional settings
  errorDiffusion: number;
  noiseAmount: number;
  quantizeLevels: number;
}

export interface HalftoneSettings {
  dotSize: number;
  angle: number;
  spacing: number;
  cmyk: boolean;
  // Additional settings
  shape: "circle" | "ellipse" | "square" | "line";
  blendMode: "normal" | "multiply" | "screen";
  angleOffset: number;
  dotSharpness: number;
}

export interface DotsSettings {
  size: number;
  spacing: number;
  shape: "circle" | "square" | "diamond" | "cross";
  // Additional settings
  sizeVariation: number;
  rotation: number;
  gridType: "square" | "hex" | "random";
  fillMode: "solid" | "outline" | "gradient";
}

export interface NoiseDotsSettings {
  dotSize: number;
  spacing: number;
  // Animation
  animationSpeed: number;
  twinkleIntensity: number;
  // Colors
  dotColor: string;
  colorVariation: number;
  accentColor: string;
  accentFrequency: number;
  // Randomness
  positionJitter: number;
  sizeVariation: number;
  opacityVariation: number;
}

export interface GradientBlobSettings {
  // Blob shape
  blobCount: number;
  blobSize: number;
  blobSoftness: number;
  // Dot rendering
  dotSize: number;
  dotSpacing: number;
  dotDensityFalloff: number;
  // Animation
  animationSpeed: number;
  morphSpeed: number;
  flowDirection: number;
  // Color
  blobColor: string;
}

export type EffectSettings = {
  ascii: AsciiSettings;
  dithering: DitheringSettings;
  halftone: HalftoneSettings;
  dots: DotsSettings;
  noiseDots: NoiseDotsSettings;
  gradientBlob: GradientBlobSettings;
};

export const defaultEffectSettings: EffectSettings = {
  ascii: {
    scale: 2,
    spacing: 0,
    characterSet: "standard",
    invert: false,
    colorMode: "mono",
    charBrightness: 1.0,
    edgeEnhance: 0,
  },
  dithering: {
    pixelSize: 4,
    colorDepth: 3,
    bayerSize: 8,
    errorDiffusion: 0,
    noiseAmount: 0,
    quantizeLevels: 4,
  },
  halftone: {
    dotSize: 4,
    angle: 45,
    spacing: 8,
    cmyk: false,
    shape: "circle",
    blendMode: "normal",
    angleOffset: 15,
    dotSharpness: 1.0,
  },
  dots: {
    size: 4,
    spacing: 8,
    shape: "circle",
    sizeVariation: 0,
    rotation: 0,
    gridType: "square",
    fillMode: "solid",
  },
  noiseDots: {
    dotSize: 1.5,
    spacing: 12,
    animationSpeed: 0.5,
    twinkleIntensity: 0.3,
    dotColor: "#555555",
    colorVariation: 0.15,
    accentColor: "#792323",
    accentFrequency: 0.05,
    positionJitter: 0.2,
    sizeVariation: 0.3,
    opacityVariation: 0.4,
  },
  gradientBlob: {
    blobCount: 3,
    blobSize: 0.4,
    blobSoftness: 0.3,
    dotSize: 2,
    dotSpacing: 6,
    dotDensityFalloff: 2.0,
    animationSpeed: 0.3,
    morphSpeed: 0.5,
    flowDirection: 45,
    blobColor: "#a090b0",
  },
};
