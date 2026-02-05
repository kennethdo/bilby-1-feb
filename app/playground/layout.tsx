import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Shader Playground | Bilby",
  description: "Test and tune dithering effects for the Bilby hero section",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
