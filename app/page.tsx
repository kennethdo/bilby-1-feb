import {
  ContentBlocksSection,
  FooterNavSection,
  HeroSection,
  HighlightsSection,
  PillarsSection,
  StatementStripSection
} from "@/components/home-sections";

export default function Page() {
  return (
    <main className="min-h-dvh bg-surface">
      <HeroSection />
      <HighlightsSection />
      <StatementStripSection />
      <ContentBlocksSection />
      <PillarsSection />
      <FooterNavSection />
    </main>
  );
}
