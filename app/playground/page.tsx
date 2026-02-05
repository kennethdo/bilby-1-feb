"use client";

import dynamic from "next/dynamic";

const DitherPlayground = dynamic(
  () => import("@/components/playground/dither-playground"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-dvh items-center justify-center bg-surface">
        <div className="type-mono-xs text-brand">Loading WebGL...</div>
      </div>
    ),
  }
);

export default function PlaygroundPage() {
  return <DitherPlayground />;
}
