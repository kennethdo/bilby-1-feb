import Image from "next/image";

import { mainNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";

const imgImage81 =
  "/images/725a732f-1cef-48ef-b3cc-26ecd37e8443.png";
const imgImage65 =
  "/images/122d8c7b-f03f-4152-9faf-5ec05df65325.png";
const imgImage64 =
  "/images/794ac1fe-cae9-4545-a546-7239cc433f12.png";
const imgImage66 =
  "/images/39ffb92a-1fdd-449c-ab1e-3a137dc3469b.png";
const imgLogo =
  "/images/4479504e-310a-4965-bd8d-90b1d8629e11.svg";
const imgFrame1000003036 =
  "/images/ad1d210a-ee62-4dd7-a9b9-e773ac705e20.svg";
const imgSocialLinkedIn =
  "/images/d3d3da3b-daa5-459e-a56d-bddbc91f9cb8.svg";
const imgSocialX =
  "/images/51dacac2-c571-4c10-99ec-c429615a8b57.svg";
const imgSocialYoutube =
  "/images/908320f3-c500-4f32-8254-f1339fe06228.svg";
const imgSocialInstagram =
  "/images/b6218a3a-7090-4af6-a45f-afc11bb2b1a5.svg";
const imgSocialGithub =
  "/images/1b2cc422-f52b-4083-ab2a-b47ebf2d0a4d.svg";

const socialItems = [
  { label: "LinkedIn", icon: imgSocialLinkedIn, href: "#" },
  { label: "X", icon: imgSocialX, href: "#" },
  { label: "YouTube", icon: imgSocialYoutube, href: "#" },
  { label: "Instagram", icon: imgSocialInstagram, href: "#" },
  { label: "GitHub", icon: imgSocialGithub, href: "#" }
];

export function BilbyJapanPage() {
  return (
    <main className="min-h-dvh bg-surface-soft text-brand">
      <SiteHeader
        logoSrc={imgLogo}
        navItems={mainNavItems}
        activeLabel="Bilby Japan"
        navMarkSrc={imgFrame1000003036}
        socialItems={socialItems}
      />

      <MotionSection className="relative overflow-hidden bg-surface-soft">
        <StaggerGroup>
        <div className="absolute inset-0">
          <Image
            alt=""
            src={imgImage81}
            fill
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[rgb(var(--color-surface-soft)/0.6)]" />
        </div>
        <div className="absolute inset-x-6 inset-y-0 hidden grid-cols-4 gap-2 lg:grid">
          <div className="border-l border-grid" />
          <div className="border-l border-grid" />
          <div className="border-l border-grid" />
          <div className="border-x border-grid" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="type-mono-xs inline-flex items-center gap-1.5 border border-brand border-b-[1.5px] border-l-[0.75px] border-r-[0.75px] border-t-[0.75px] px-2 pb-1.5 pt-1 text-brand">
            <span className="size-[3px] rounded-[1px] bg-brand" />
            Built for Japan
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <h1 className="type-jp-38 text-pretty font-jp">
              Bilbyは、各国政府の動向を常に最新の形で捉え、世界情勢をリアルタイムに把握できる、AIを活用した革新的なプラットフォームです。
            </h1>
            <div className="border border-default bg-white/70 p-4">
              <div className="type-jp-14 border-l-2 border-brand pl-4 font-jp text-brand">
                グローバルな政策・規制の変化を自動で検知し、企業が必要とするインテリジェンスとして届けることで、意思決定のスピードと精度を同時に高めます。
              </div>
            </div>
          </div>
        </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="bg-surface-soft py-16">
        <StaggerGroup className="mx-auto w-full max-w-6xl space-y-16 px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-default bg-white p-8">
              <div className="relative">
                <p className="type-mono-xs mb-6 text-brand-muted">
                  WHY BILBY
                </p>
                <h2 className="type-jp-26 font-jp text-brand-muted">
                  目まぐるしく変化するグローバル社会における
                  <br />「政府」というリスク要因を可視化
                </h2>
                <p className="type-jp-18 mt-4 font-jp text-brand-muted">
                  目まぐるしく変化するグローバル社会において、Bilbyは企業の意思決定に大きな影響を与える「政府」という重要な要素を、独自のAI技術で分析・評価するまったく新しいアプローチを提供します。政策や規制の動きを、単なるニュースとしてではなく、「自社にとって何を意味するのか」という観点から整理し、具体的なインサイトとして提示します。
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image alt="" src={imgImage64} fill className="object-cover" />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image alt="" src={imgImage65} fill className="object-cover" />
            </div>
            <div className="border border-default bg-white p-8">
              <div className="relative">
                <p className="type-mono-xs mb-6 text-brand-muted">
                  BUILT FOR JAPAN
                </p>
                <h2 className="type-jp-26 font-jp text-brand-muted">
                  日本政府の動向に特化したモデルと、日本語に最適化された言語インテリジェンス
                </h2>
                <p className="type-jp-18 mt-4 font-jp text-brand-muted">
                  Bilbyは日本政府の動向を分析する専用モデルも備えており、日本語に最適化された言語モデルによって、情報の収集から要約・分析までを高精度かつ効率的に実現します。国内外の動きを、日本の意思決定者にとって理解しやすいコンテキストと表現で届けることで、現場から経営層まで共通認識を持った議論を可能にします。
                </p>
              </div>
            </div>
          </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-surface-soft py-24 text-center">
        <StaggerGroup>
        <div className="absolute inset-0 mix-blend-darken">
          <Image alt="" src={imgImage66} fill className="object-cover opacity-60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="type-jp-30 font-jp">
            Bilbyは、変化の激しい時代を生き抜くあなたの意思決定を支える、次世代のインテリジェンスプラットフォームです。
          </p>
          <p className="type-jp-60 mt-8 font-jpSerif">
            Bilbyとともに。
          </p>
        </div>
        </StaggerGroup>
      </MotionSection>
    </main>
  );
}
