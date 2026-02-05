"use client";

import { cn } from "@/lib/utils";
import {
  effectsList,
  type EffectType,
  type GlobalSettings,
  type EffectSettings,
  type ColorSettings,
  defaultGlobalSettings,
  defaultEffectSettings,
  defaultColorSettings,
  bilbyColorPreset,
} from "./effects/index";

export interface PlaygroundSettings {
  effectType: EffectType;
  global: GlobalSettings;
  color: ColorSettings;
  effects: EffectSettings;
}

export const defaultPlaygroundSettings: PlaygroundSettings = {
  effectType: "dithering",
  global: defaultGlobalSettings,
  color: defaultColorSettings,
  effects: defaultEffectSettings,
};

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

function Slider({ label, value, min, max, step, onChange }: SliderProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="font-mono text-[10px] uppercase tracking-wider text-[#888]">
          {label}
        </label>
        <span className="font-mono text-[10px] text-[#666]">
          {value.toFixed(step < 1 ? 2 : 0)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none rounded-none bg-[#333] accent-white"
      />
    </div>
  );
}

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function Toggle({ label, checked, onChange }: ToggleProps) {
  return (
    <label className="flex cursor-pointer items-center justify-between">
      <span className="font-mono text-[10px] uppercase tracking-wider text-[#888]">
        {label}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative h-5 w-9 rounded-full transition-colors",
          checked ? "bg-white" : "bg-[#444]"
        )}
      >
        <span
          className={cn(
            "absolute left-0.5 top-0.5 size-4 rounded-full transition-transform",
            checked ? "translate-x-4 bg-[#222]" : "bg-[#666]"
          )}
        />
      </button>
    </label>
  );
}

interface SelectProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] uppercase tracking-wider text-[#888]">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 w-full appearance-none border border-[#444] bg-[#333] px-2 font-mono text-xs text-white focus:border-[#666] focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
}: CollapsibleSectionProps) {
  return (
    <details open={defaultOpen} className="group border-b border-[#333] pb-2">
      <summary className="flex cursor-pointer items-center gap-2 py-3 font-mono text-xs uppercase tracking-wider text-[#aaa]">
        <span className="text-[#666] transition-transform group-open:rotate-90">
          +
        </span>
        {title}
      </summary>
      <div className="flex flex-col gap-3 pb-4 pl-4">{children}</div>
    </details>
  );
}

interface ControlsPanelProps {
  settings: PlaygroundSettings;
  onChange: (settings: PlaygroundSettings) => void;
  onExport: () => void;
}

export function ControlsPanel({
  settings,
  onChange,
  onExport,
}: ControlsPanelProps) {
  const updateGlobal = <K extends keyof GlobalSettings>(
    key: K,
    value: GlobalSettings[K]
  ) => {
    onChange({
      ...settings,
      global: { ...settings.global, [key]: value },
    });
  };

  const updateColor = <K extends keyof ColorSettings>(
    key: K,
    value: ColorSettings[K]
  ) => {
    onChange({
      ...settings,
      color: { ...settings.color, [key]: value },
    });
  };

  const updateEffect = <T extends EffectType>(
    effectType: T,
    key: keyof EffectSettings[T],
    value: unknown
  ) => {
    onChange({
      ...settings,
      effects: {
        ...settings.effects,
        [effectType]: {
          ...settings.effects[effectType],
          [key]: value,
        },
      },
    });
  };

  const resetGlobal = () => {
    onChange({
      ...settings,
      global: defaultGlobalSettings,
    });
  };

  const resetColor = () => {
    onChange({
      ...settings,
      color: defaultColorSettings,
    });
  };

  const applyBilbyPreset = () => {
    onChange({
      ...settings,
      color: bilbyColorPreset,
    });
  };

  const swapColors = () => {
    onChange({
      ...settings,
      color: {
        ...settings.color,
        darkColor: settings.color.lightColor,
        lightColor: settings.color.darkColor,
      },
    });
  };

  const currentEffect = settings.effectType;

  return (
    <div className="flex h-full flex-col overflow-hidden border-l border-[#333] bg-[#1a1a1a]">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-[#333] p-4">
        <h2 className="font-mono text-xs uppercase tracking-wider text-white">
          Settings
        </h2>
        <button
          onClick={onExport}
          className="bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#222] transition-opacity hover:opacity-80"
        >
          Export
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Effect Selection */}
        <CollapsibleSection title="Effects">
          <div className="flex flex-col gap-0.5">
            {effectsList.map((effect) => (
              <button
                key={effect.id}
                onClick={() =>
                  onChange({ ...settings, effectType: effect.id })
                }
                className={cn(
                  "flex items-center gap-2 px-2 py-1.5 text-left transition-colors",
                  currentEffect === effect.id
                    ? "bg-white text-[#222]"
                    : "text-[#888] hover:bg-[#333] hover:text-white"
                )}
              >
                <span
                  className={cn(
                    "size-2 rounded-full",
                    currentEffect === effect.id ? "bg-[#222]" : "bg-[#555]"
                  )}
                />
                <span className="font-mono text-[11px]">{effect.name}</span>
              </button>
            ))}
          </div>
        </CollapsibleSection>

        {/* Effect-specific settings */}
        <CollapsibleSection
          title={`${effectsList.find((e) => e.id === currentEffect)?.name} Settings`}
        >
          {currentEffect === "ascii" && (
            <>
              <Slider
                label="Scale"
                value={settings.effects.ascii.scale}
                min={1}
                max={8}
                step={0.5}
                onChange={(v) => updateEffect("ascii", "scale", v)}
              />
              <Slider
                label="Spacing"
                value={settings.effects.ascii.spacing}
                min={0}
                max={4}
                step={0.5}
                onChange={(v) => updateEffect("ascii", "spacing", v)}
              />
              <Select
                label="Character Set"
                value={settings.effects.ascii.characterSet}
                options={[
                  { value: "standard", label: "Standard" },
                  { value: "dense", label: "Dense" },
                  { value: "minimal", label: "Minimal" },
                  { value: "blocks", label: "Blocks" },
                  { value: "braille", label: "Braille" },
                ]}
                onChange={(v) => updateEffect("ascii", "characterSet", v)}
              />
              <Toggle
                label="Invert"
                checked={settings.effects.ascii.invert}
                onChange={(v) => updateEffect("ascii", "invert", v)}
              />
              <Select
                label="Color Mode"
                value={settings.effects.ascii.colorMode}
                options={[
                  { value: "mono", label: "Monochrome" },
                  { value: "colored", label: "Colored" },
                ]}
                onChange={(v) => updateEffect("ascii", "colorMode", v)}
              />
              <Slider
                label="Char Brightness"
                value={settings.effects.ascii.charBrightness}
                min={0.5}
                max={2}
                step={0.1}
                onChange={(v) => updateEffect("ascii", "charBrightness", v)}
              />
              <Slider
                label="Edge Enhance"
                value={settings.effects.ascii.edgeEnhance}
                min={0}
                max={1}
                step={0.1}
                onChange={(v) => updateEffect("ascii", "edgeEnhance", v)}
              />
            </>
          )}

          {currentEffect === "dithering" && (
            <>
              <Slider
                label="Pixel Size"
                value={settings.effects.dithering.pixelSize}
                min={1}
                max={16}
                step={1}
                onChange={(v) => updateEffect("dithering", "pixelSize", v)}
              />
              <Slider
                label="Color Depth"
                value={settings.effects.dithering.colorDepth}
                min={1}
                max={8}
                step={1}
                onChange={(v) => updateEffect("dithering", "colorDepth", v)}
              />
              <Select
                label="Bayer Size"
                value={String(settings.effects.dithering.bayerSize)}
                options={[
                  { value: "2", label: "2x2" },
                  { value: "4", label: "4x4" },
                  { value: "8", label: "8x8" },
                ]}
                onChange={(v) =>
                  updateEffect("dithering", "bayerSize", Number(v))
                }
              />
              <Slider
                label="Error Diffusion"
                value={settings.effects.dithering.errorDiffusion}
                min={0}
                max={1}
                step={0.1}
                onChange={(v) => updateEffect("dithering", "errorDiffusion", v)}
              />
              <Slider
                label="Noise Amount"
                value={settings.effects.dithering.noiseAmount}
                min={0}
                max={1}
                step={0.1}
                onChange={(v) => updateEffect("dithering", "noiseAmount", v)}
              />
              <Slider
                label="Quantize Levels"
                value={settings.effects.dithering.quantizeLevels}
                min={0}
                max={16}
                step={1}
                onChange={(v) => updateEffect("dithering", "quantizeLevels", v)}
              />
            </>
          )}

          {currentEffect === "halftone" && (
            <>
              <Slider
                label="Dot Size"
                value={settings.effects.halftone.dotSize}
                min={1}
                max={16}
                step={0.5}
                onChange={(v) => updateEffect("halftone", "dotSize", v)}
              />
              <Slider
                label="Angle"
                value={settings.effects.halftone.angle}
                min={0}
                max={90}
                step={5}
                onChange={(v) => updateEffect("halftone", "angle", v)}
              />
              <Slider
                label="Spacing"
                value={settings.effects.halftone.spacing}
                min={2}
                max={20}
                step={1}
                onChange={(v) => updateEffect("halftone", "spacing", v)}
              />
              <Toggle
                label="CMYK Mode"
                checked={settings.effects.halftone.cmyk}
                onChange={(v) => updateEffect("halftone", "cmyk", v)}
              />
              <Select
                label="Shape"
                value={settings.effects.halftone.shape}
                options={[
                  { value: "circle", label: "Circle" },
                  { value: "ellipse", label: "Ellipse" },
                  { value: "square", label: "Square" },
                  { value: "line", label: "Line" },
                ]}
                onChange={(v) => updateEffect("halftone", "shape", v)}
              />
              <Select
                label="Blend Mode"
                value={settings.effects.halftone.blendMode}
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "multiply", label: "Multiply" },
                  { value: "screen", label: "Screen" },
                ]}
                onChange={(v) => updateEffect("halftone", "blendMode", v)}
              />
              <Slider
                label="Angle Offset (CMYK)"
                value={settings.effects.halftone.angleOffset}
                min={0}
                max={45}
                step={5}
                onChange={(v) => updateEffect("halftone", "angleOffset", v)}
              />
              <Slider
                label="Dot Sharpness"
                value={settings.effects.halftone.dotSharpness}
                min={0.5}
                max={3}
                step={0.1}
                onChange={(v) => updateEffect("halftone", "dotSharpness", v)}
              />
            </>
          )}

          {currentEffect === "dots" && (
            <>
              <Slider
                label="Size"
                value={settings.effects.dots.size}
                min={1}
                max={16}
                step={0.5}
                onChange={(v) => updateEffect("dots", "size", v)}
              />
              <Slider
                label="Spacing"
                value={settings.effects.dots.spacing}
                min={2}
                max={20}
                step={1}
                onChange={(v) => updateEffect("dots", "spacing", v)}
              />
              <Select
                label="Shape"
                value={settings.effects.dots.shape}
                options={[
                  { value: "circle", label: "Circle" },
                  { value: "square", label: "Square" },
                  { value: "diamond", label: "Diamond" },
                  { value: "cross", label: "Cross" },
                ]}
                onChange={(v) => updateEffect("dots", "shape", v)}
              />
              <Slider
                label="Size Variation"
                value={settings.effects.dots.sizeVariation}
                min={0}
                max={2}
                step={0.1}
                onChange={(v) => updateEffect("dots", "sizeVariation", v)}
              />
              <Slider
                label="Rotation"
                value={settings.effects.dots.rotation}
                min={0}
                max={90}
                step={5}
                onChange={(v) => updateEffect("dots", "rotation", v)}
              />
              <Select
                label="Grid Type"
                value={settings.effects.dots.gridType}
                options={[
                  { value: "square", label: "Square" },
                  { value: "hex", label: "Hexagonal" },
                  { value: "random", label: "Random" },
                ]}
                onChange={(v) => updateEffect("dots", "gridType", v)}
              />
              <Select
                label="Fill Mode"
                value={settings.effects.dots.fillMode}
                options={[
                  { value: "solid", label: "Solid" },
                  { value: "outline", label: "Outline" },
                  { value: "gradient", label: "Gradient" },
                ]}
                onChange={(v) => updateEffect("dots", "fillMode", v)}
              />
            </>
          )}

          {currentEffect === "noiseDots" && (
            <>
              <Slider
                label="Dot Size"
                value={settings.effects.noiseDots.dotSize}
                min={0.5}
                max={4}
                step={0.1}
                onChange={(v) => updateEffect("noiseDots", "dotSize", v)}
              />
              <Slider
                label="Spacing"
                value={settings.effects.noiseDots.spacing}
                min={4}
                max={24}
                step={1}
                onChange={(v) => updateEffect("noiseDots", "spacing", v)}
              />
              <Slider
                label="Animation Speed"
                value={settings.effects.noiseDots.animationSpeed}
                min={0}
                max={2}
                step={0.1}
                onChange={(v) => updateEffect("noiseDots", "animationSpeed", v)}
              />
              <Slider
                label="Twinkle Intensity"
                value={settings.effects.noiseDots.twinkleIntensity}
                min={0}
                max={1}
                step={0.05}
                onChange={(v) => updateEffect("noiseDots", "twinkleIntensity", v)}
              />
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#888]">
                  Dot Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={settings.effects.noiseDots.dotColor}
                    onChange={(e) => updateEffect("noiseDots", "dotColor", e.target.value)}
                    className="h-8 w-12 cursor-pointer border border-[#444] bg-[#333]"
                  />
                  <span className="font-mono text-[10px] text-[#666]">
                    {settings.effects.noiseDots.dotColor}
                  </span>
                </div>
              </div>
              <Slider
                label="Color Variation"
                value={settings.effects.noiseDots.colorVariation}
                min={0}
                max={0.5}
                step={0.05}
                onChange={(v) => updateEffect("noiseDots", "colorVariation", v)}
              />
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#888]">
                  Accent Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={settings.effects.noiseDots.accentColor}
                    onChange={(e) => updateEffect("noiseDots", "accentColor", e.target.value)}
                    className="h-8 w-12 cursor-pointer border border-[#444] bg-[#333]"
                  />
                  <span className="font-mono text-[10px] text-[#666]">
                    {settings.effects.noiseDots.accentColor}
                  </span>
                </div>
              </div>
              <Slider
                label="Accent Frequency"
                value={settings.effects.noiseDots.accentFrequency}
                min={0}
                max={0.2}
                step={0.01}
                onChange={(v) => updateEffect("noiseDots", "accentFrequency", v)}
              />
              <Slider
                label="Position Jitter"
                value={settings.effects.noiseDots.positionJitter}
                min={0}
                max={0.5}
                step={0.05}
                onChange={(v) => updateEffect("noiseDots", "positionJitter", v)}
              />
              <Slider
                label="Size Variation"
                value={settings.effects.noiseDots.sizeVariation}
                min={0}
                max={1}
                step={0.1}
                onChange={(v) => updateEffect("noiseDots", "sizeVariation", v)}
              />
              <Slider
                label="Opacity Variation"
                value={settings.effects.noiseDots.opacityVariation}
                min={0}
                max={1}
                step={0.1}
                onChange={(v) => updateEffect("noiseDots", "opacityVariation", v)}
              />
            </>
          )}

          {currentEffect === "gradientBlob" && (
            <>
              <Slider
                label="Blob Count"
                value={settings.effects.gradientBlob.blobCount}
                min={1}
                max={6}
                step={1}
                onChange={(v) => updateEffect("gradientBlob", "blobCount", v)}
              />
              <Slider
                label="Blob Size"
                value={settings.effects.gradientBlob.blobSize}
                min={0.1}
                max={0.8}
                step={0.05}
                onChange={(v) => updateEffect("gradientBlob", "blobSize", v)}
              />
              <Slider
                label="Blob Softness"
                value={settings.effects.gradientBlob.blobSoftness}
                min={0.05}
                max={0.8}
                step={0.05}
                onChange={(v) => updateEffect("gradientBlob", "blobSoftness", v)}
              />
              <Slider
                label="Dot Size"
                value={settings.effects.gradientBlob.dotSize}
                min={1}
                max={6}
                step={0.5}
                onChange={(v) => updateEffect("gradientBlob", "dotSize", v)}
              />
              <Slider
                label="Dot Spacing"
                value={settings.effects.gradientBlob.dotSpacing}
                min={3}
                max={16}
                step={1}
                onChange={(v) => updateEffect("gradientBlob", "dotSpacing", v)}
              />
              <Slider
                label="Density Falloff"
                value={settings.effects.gradientBlob.dotDensityFalloff}
                min={0.5}
                max={4}
                step={0.1}
                onChange={(v) => updateEffect("gradientBlob", "dotDensityFalloff", v)}
              />
              <Slider
                label="Animation Speed"
                value={settings.effects.gradientBlob.animationSpeed}
                min={0}
                max={1}
                step={0.05}
                onChange={(v) => updateEffect("gradientBlob", "animationSpeed", v)}
              />
              <Slider
                label="Morph Speed"
                value={settings.effects.gradientBlob.morphSpeed}
                min={0}
                max={2}
                step={0.1}
                onChange={(v) => updateEffect("gradientBlob", "morphSpeed", v)}
              />
              <Slider
                label="Flow Direction"
                value={settings.effects.gradientBlob.flowDirection}
                min={0}
                max={360}
                step={15}
                onChange={(v) => updateEffect("gradientBlob", "flowDirection", v)}
              />
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#888]">
                  Blob Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={settings.effects.gradientBlob.blobColor}
                    onChange={(e) => updateEffect("gradientBlob", "blobColor", e.target.value)}
                    className="h-8 w-12 cursor-pointer border border-[#444] bg-[#333]"
                  />
                  <span className="font-mono text-[10px] text-[#666]">
                    {settings.effects.gradientBlob.blobColor}
                  </span>
                </div>
              </div>
            </>
          )}
        </CollapsibleSection>

        {/* Global Adjustments */}
        <CollapsibleSection title="Adjustments" defaultOpen={false}>
          <Slider
            label="Brightness"
            value={settings.global.brightness}
            min={-0.5}
            max={0.5}
            step={0.05}
            onChange={(v) => updateGlobal("brightness", v)}
          />
          <Slider
            label="Contrast"
            value={settings.global.contrast}
            min={-0.5}
            max={1}
            step={0.05}
            onChange={(v) => updateGlobal("contrast", v)}
          />
          <Slider
            label="Saturation"
            value={settings.global.saturation}
            min={-1}
            max={1}
            step={0.1}
            onChange={(v) => updateGlobal("saturation", v)}
          />
          <Slider
            label="Hue Rotation"
            value={settings.global.hueRotation}
            min={0}
            max={360}
            step={10}
            onChange={(v) => updateGlobal("hueRotation", v)}
          />
          <Slider
            label="Gamma"
            value={settings.global.gamma}
            min={0.5}
            max={2}
            step={0.1}
            onChange={(v) => updateGlobal("gamma", v)}
          />
          <Slider
            label="Intensity"
            value={settings.global.intensity}
            min={0}
            max={1}
            step={0.05}
            onChange={(v) => updateGlobal("intensity", v)}
          />
          <button
            onClick={resetGlobal}
            className="mt-2 w-full border border-[#444] bg-[#333] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#888] transition-colors hover:bg-[#444] hover:text-white"
          >
            Reset Adjustments
          </button>
        </CollapsibleSection>

        {/* Color Mapping */}
        <CollapsibleSection title="Color" defaultOpen={false}>
          {/* Presets */}
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[10px] uppercase tracking-wider text-[#888]">
              Presets
            </label>
            <div className="flex gap-2">
              <button
                onClick={applyBilbyPreset}
                className="flex-1 border border-[#792323] bg-[#792323] px-2 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white transition-opacity hover:opacity-80"
              >
                Bilby
              </button>
              <button
                onClick={resetColor}
                className="flex-1 border border-[#444] bg-[#333] px-2 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#888] transition-colors hover:bg-[#444] hover:text-white"
              >
                Reset
              </button>
            </div>
            <button
              onClick={swapColors}
              className="w-full border border-[#444] bg-[#333] px-2 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#888] transition-colors hover:bg-[#444] hover:text-white"
            >
              Swap Dark/Light
            </button>
          </div>

          <Select
            label="Mode"
            value={settings.color.mode}
            options={[
              { value: "original", label: "Original" },
              { value: "grayscale", label: "Grayscale" },
              { value: "duotone", label: "Duotone" },
              { value: "threshold", label: "Threshold" },
            ]}
            onChange={(v) =>
              updateColor("mode", v as ColorSettings["mode"])
            }
          />

          {(settings.color.mode === "duotone" ||
            settings.color.mode === "threshold") && (
            <>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#888]">
                  Dark Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={settings.color.darkColor}
                    onChange={(e) => updateColor("darkColor", e.target.value)}
                    className="h-8 w-12 cursor-pointer border border-[#444] bg-[#333]"
                  />
                  <span className="font-mono text-[10px] text-[#666]">
                    {settings.color.darkColor}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#888]">
                  Light Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={settings.color.lightColor}
                    onChange={(e) => updateColor("lightColor", e.target.value)}
                    className="h-8 w-12 cursor-pointer border border-[#444] bg-[#333]"
                  />
                  <span className="font-mono text-[10px] text-[#666]">
                    {settings.color.lightColor}
                  </span>
                </div>
              </div>
            </>
          )}

          {settings.color.mode === "threshold" && (
            <>
              <Slider
                label="Threshold"
                value={settings.color.threshold}
                min={0}
                max={1}
                step={0.05}
                onChange={(v) => updateColor("threshold", v)}
              />
              <Slider
                label="Softness"
                value={settings.color.softness}
                min={0}
                max={0.5}
                step={0.05}
                onChange={(v) => updateColor("softness", v)}
              />
              <Toggle
                label="Invert"
                checked={settings.color.invert}
                onChange={(v) => updateColor("invert", v)}
              />
            </>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[10px] uppercase tracking-wider text-[#888]">
              Background
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={settings.color.backgroundColor}
                onChange={(e) =>
                  updateColor("backgroundColor", e.target.value)
                }
                className="h-8 w-12 cursor-pointer border border-[#444] bg-[#333]"
              />
              <span className="font-mono text-[10px] text-[#666]">
                {settings.color.backgroundColor}
              </span>
            </div>
          </div>
        </CollapsibleSection>

        {/* Reset All */}
        <button
          onClick={() => onChange(defaultPlaygroundSettings)}
          className="mt-4 w-full border border-[#444] bg-[#333] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[#888] transition-colors hover:bg-[#444] hover:text-white"
        >
          Reset All
        </button>
      </div>
    </div>
  );
}
