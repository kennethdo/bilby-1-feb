"use client";

import { Dithering } from "@paper-design/shaders-react";

/**
 * Dithering background from Paper Design
 * Configured for dark brand sections with subtle texture
 */
export function DitherBackground() {
  return (
    <Dithering
      speed={0.2}
      shape="wave"
      type="8x8"
      size={0.8}
      scale={1}
      colorBack="#79232300"
      colorFront="#ffffff15"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
