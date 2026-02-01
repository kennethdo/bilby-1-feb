import "./globals.css";
import type { Metadata } from "next";
import {
  DM_Sans,
  IBM_Plex_Mono,
  Noto_Sans_Arabic,
  Noto_Sans_JP,
  Noto_Serif_JP,
  Space_Grotesk,
  Work_Sans
} from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap"
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp-sans",
  display: "swap"
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-jp-serif",
  display: "swap"
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Bilby",
  description: "Bilby is the AI OS of government."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${ibmPlexMono.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${notoSansJp.variable} ${notoSerifJp.variable} ${notoSansArabic.variable} bg-surface text-brand-strong antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
