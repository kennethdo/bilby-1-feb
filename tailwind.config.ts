import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
        display: ["var(--font-grotesk)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-dm)", "ui-sans-serif", "system-ui"],
        jp: ["var(--font-jp-sans)", "ui-sans-serif", "system-ui"],
        jpSerif: ["var(--font-jp-serif)", "serif"],
        arabic: ["var(--font-arabic)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
