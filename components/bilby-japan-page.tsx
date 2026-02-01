import Image from "next/image";

import { mainNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";

const imgImage81 =
  "https://www.figma.com/api/mcp/asset/fd1ed629-9237-405c-9fe2-6838cbed6f63";
const imgImage65 =
  "https://www.figma.com/api/mcp/asset/4730b9e3-5a1a-46be-b6c1-081199bf8249";
const imgImage64 =
  "https://www.figma.com/api/mcp/asset/16367ce4-3d6f-456c-9494-109a998b00a3";
const imgImage66 =
  "https://www.figma.com/api/mcp/asset/dddd6409-24bc-4fab-b42b-f6acbde89927";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/4ed355af-1376-482e-94f0-ccbcc6e4f21e";
const imgFrame1000003036 =
  "https://www.figma.com/api/mcp/asset/0f335b0c-2b38-45f4-a568-a0530ea408c8";
const imgSocialLinkedIn =
  "https://www.figma.com/api/mcp/asset/609ed5c2-aa23-4201-a7a0-fd64d8bd274a";
const imgSocialX =
  "https://www.figma.com/api/mcp/asset/39b7084b-347f-4dad-8c0b-0a5d88135d3f";
const imgSocialYoutube =
  "https://www.figma.com/api/mcp/asset/45e6e46e-2cc4-423a-a41a-556bcbc613c4";
const imgSocialInstagram =
  "https://www.figma.com/api/mcp/asset/097eab38-cc16-4e2f-9832-becfc54ff377";
const imgSocialGithub =
  "https://www.figma.com/api/mcp/asset/c1bc891c-7eed-4f41-a3a0-f184c143a849";
const imgDotsLeft =
  "https://www.figma.com/api/mcp/asset/3a5cca91-ea14-472f-bc2f-3fd54a08e25c";
const imgDotsRight =
  "https://www.figma.com/api/mcp/asset/153c38f9-6907-43a9-96df-9bc5c170aab3";

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
          <div className="type-mono-xs inline-flex items-center gap-2 border border-brand px-3 py-2">
            <span className="size-1 rounded-[1px] bg-brand" />
            BILBY JAPAN
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
                <div className="relative mb-6 inline-block">
                  <Image
                    alt=""
                    src={imgDotsLeft}
                    width={10}
                    height={10}
                    className="absolute -left-1 -top-1"
                  />
                  <Image
                    alt=""
                    src={imgDotsRight}
                    width={10}
                    height={10}
                    className="absolute -right-1 -top-1"
                  />
                  <p className="type-mono-xs px-1 text-border">
                    WHY BILBY
                  </p>
                </div>
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
                <div className="relative mb-6 inline-block">
                  <Image
                    alt=""
                    src={imgDotsLeft}
                    width={10}
                    height={10}
                    className="absolute -left-1 -top-1"
                  />
                  <Image
                    alt=""
                    src={imgDotsRight}
                    width={10}
                    height={10}
                    className="absolute -right-1 -top-1"
                  />
                  <p className="type-mono-xs px-1 text-border">
                    BUILT FOR JAPAN
                  </p>
                </div>
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
