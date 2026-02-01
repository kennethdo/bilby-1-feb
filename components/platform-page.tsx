import Image from "next/image";

import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";
import { mainNavItems } from "@/components/nav-data";

const imgHero =
  "https://www.figma.com/api/mcp/asset/2572d1ea-29d4-4c32-b95b-0dc99fcee3d7";
const imgBackgroundGrid =
  "https://www.figma.com/api/mcp/asset/6a1e6d7d-be87-4f35-962a-11ead1b934cd";
const imgCapabilitiesTexture =
  "https://www.figma.com/api/mcp/asset/ace015f0-17d7-4ef4-b8a9-ebec6df3fb0e";
const imgImpactCard1 =
  "https://www.figma.com/api/mcp/asset/2e69c7e2-53b5-47ae-93d6-83c30df4eec6";
const imgImpactCard2 =
  "https://www.figma.com/api/mcp/asset/5a7c0546-d324-4769-8d57-2c61b9585896";
const imgImpactCard3 =
  "https://www.figma.com/api/mcp/asset/9150a0c5-9eef-4c4b-9f41-15a0467cfc0a";
const imgImpactCard4 =
  "https://www.figma.com/api/mcp/asset/ef5b2cba-c1d5-4a1e-a9ae-cf60077f4c63";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/2d6dea7a-cb4f-43f8-9ad1-7a38b704f49c";
const imgNavMark =
  "https://www.figma.com/api/mcp/asset/cc8bf780-5650-4964-a527-f6116a3b86b7";
const imgSocialLinkedIn =
  "https://www.figma.com/api/mcp/asset/a8fb309e-e7cd-49c1-92bc-2e83ba94b5b0";
const imgSocialX =
  "https://www.figma.com/api/mcp/asset/cc9a32df-75e0-4e9b-98f3-6652b03da409";
const imgSocialYoutube =
  "https://www.figma.com/api/mcp/asset/ba317ff5-aff1-4386-9ed0-7c51d49c61d9";
const imgSocialInstagram =
  "https://www.figma.com/api/mcp/asset/c4322abe-230c-4870-a393-2a6795f4147b";
const imgSocialGithub =
  "https://www.figma.com/api/mcp/asset/4e7b6d7b-04c8-4840-adca-b4e11d6cd1cc";
const imgCapabilityIcon1 =
  "https://www.figma.com/api/mcp/asset/4d44792e-b79f-45da-b303-72736df425bd";
const imgCapabilityIcon2 =
  "https://www.figma.com/api/mcp/asset/ba164343-eaff-4cd3-b558-ff6e7757f30d";
const imgCapabilityIcon3 =
  "https://www.figma.com/api/mcp/asset/59e23d6c-7c98-4511-9b0e-710332b0d603";
const imgCapabilityIcon4 =
  "https://www.figma.com/api/mcp/asset/7ba4a93a-436f-48d5-9ed2-2001a4eaf0f0";
const imgCapabilityIcon5 =
  "https://www.figma.com/api/mcp/asset/01482f99-cb7a-4246-9adb-fdcd9382832d";
const imgQuoteVector =
  "https://www.figma.com/api/mcp/asset/7155d84d-9f99-4e97-943d-7bb981bf679a";
const imgQuoteVector2 =
  "https://www.figma.com/api/mcp/asset/517e4b2c-baf1-4ee2-aca9-cfd0b6ec1cde";
const imgDotsLeft =
  "https://www.figma.com/api/mcp/asset/a0909236-fa2b-49b5-aaad-846d60bee84d";
const imgDotsRight =
  "https://www.figma.com/api/mcp/asset/7ee4af95-9709-4267-86ab-a612aea87949";

const navItems = mainNavItems;

const socialLinks = [
  { label: "LinkedIn", icon: imgSocialLinkedIn, href: "#" },
  { label: "X", icon: imgSocialX, href: "#" },
  { label: "YouTube", icon: imgSocialYoutube, href: "#" },
  { label: "Instagram", icon: imgSocialInstagram, href: "#" },
  { label: "GitHub", icon: imgSocialGithub, href: "#" }
];

const capabilityCards = [
  {
    title: "Core Analysis Platforms",
    body:
      "Custom dashboards and APIs for auto-analysing government activity, matching statements to actors, and tracking narratives and sentiment across languages and regions — including automated policy testing and visualisation.",
    icon: imgCapabilityIcon1
  },
  {
    title: "Automated Analysis Tools",
    body:
      "Policy lifecycle and importance markup tools, graph databases for stakeholder mapping, and ML ops to build supervised and unsupervised models on top of government data.",
    icon: imgCapabilityIcon2
  },
  {
    title: "Generative AI Tools",
    body:
      "Web, mobile, and WhatsApp-integrated interfaces for querying insights, generating reports, and simulating policy outcomes, in the language and format your teams actually use.",
    icon: imgCapabilityIcon3
  },
  {
    title: "Specialised Modules",
    body:
      "Automated company analysis, regulatory pipelines, social media legal compliance, and geo-political risk advisory reports on demand, tuned to your settings and jurisdictions.",
    icon: imgCapabilityIcon4
  },
  {
    title: "Data Enrichment Services",
    body:
      "Normalised, enriched datasets for model builders, with human-in-the-loop refinement for accuracy and REST APIs for seamless integration into your existing infrastructure.",
    icon: imgCapabilityIcon5
  }
];

const impactCards = [
  {
    title: "Coordination",
    body:
      "monitor deviations in messaging, direction, and movement from national and central plans and/or policy and election statements.",
    image: imgImpactCard1
  },
  {
    title: "Companies",
    body:
      "see how changes in government sentiment, policy, and regulations affect any listed company — and the market relevance and impact of all official news and policy.",
    image: imgImpactCard2
  },
  {
    title: "Policy",
    body:
      "understand what has changed worldwide in a sector and how that compares to your government activity.",
    image: imgImpactCard3
  },
  {
    title: "Society",
    body:
      "match government activity against depictions in media and commentary in online and social media, and test possible impacts of proposed changes.",
    image: imgImpactCard4
  }
];

const gridSquares = Array.from({ length: 70 }).map((_, index) => index);

export function PlatformPage() {
  return (
    <main className="min-h-dvh bg-surface text-brand">
      <SiteHeader
        logoSrc={imgLogo}
        navItems={navItems}
        activeLabel="Automated Solutions"
        navMarkSrc={imgNavMark}
        socialItems={socialLinks}
      />

      <MotionSection className="bg-surface-raised">
        <StaggerGroup className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10">
          <div className="relative rounded-[3px] px-8 py-14 lg:px-10 lg:py-16">
            <div className="type-mono-xs inline-flex items-center gap-1.5 border border-brand border-b-[1.5px] border-l-[0.75px] border-r-[0.75px] border-t-[0.75px] px-2 pb-1.5 pt-1 text-brand">
              <span className="size-[3px] rounded-[1px] bg-brand" />
              Building Agency
            </div>
            <div className="mt-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                <h1 className="type-display-hero-xl font-normal text-brand">
                  Making government work better
                </h1>
                <p className="type-body-sm leading-[1.4] text-brand">
                  Bilby transforms government information into insight. Accelerate
                  policy research with AI-powered analysis across 38+ countries,
                  empowering your evidence-based recommendations that advance
                  goals. Tell leaders what works and what doesn’t — based on data.
                </p>
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  alt=""
                  src={imgHero}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-surface-soft">
        <div className="absolute inset-0 opacity-30 mix-blend-darken">
          <Image alt="" src={imgBackgroundGrid} fill className="object-cover" />
        </div>
        <StaggerGroup className="relative mx-auto w-full max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <h2 className="type-display-md sm:type-display-lg font-normal text-brand">
              AI-powered white-label platforms for governments
            </h2>
            <div className="space-y-8">
              <div className="type-mono-xs border-l border-brand pl-4 leading-[1.4] text-brand">
                Bilby creates AI-powered white-label platforms for governments that
                act like a superhuman team of assistants — modelling your existing
                policy system and then indexing signals from around the world
                against it.
              </div>
              <div className="space-y-4">
                <p className="type-mono-18 text-brand-strong">
                  AI-OS for governments
                </p>
                <div className="type-body space-y-4 leading-[1.6] text-brand-strong">
                  <p>
                    We start by building a baseline: a digital twin of your
                    existing policy system. We then collect information from
                    around the world — or from within your own systems — and index
                    it against this model.
                  </p>
                  <p>
                    This boosts system efficiency: instead of being stuck in
                    silos, you can create new worlds. Predicting, analysing, and
                    comparing across departments or across the globe can be done
                    automatically.
                  </p>
                  <p>
                    Analysts can test their judgments, export their work into the
                    correct templates, and disseminate it across all stakeholders
                    at the click of a button. Leaders can see and test proposed
                    changes to policy or regulation against how social media, the
                    stock market, or other systems are likely to react.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            alt=""
            src={imgCapabilitiesTexture}
            fill
            className="object-cover"
          />
        </div>
        <StaggerGroup className="relative mx-auto w-full max-w-6xl px-6 py-24 lg:px-10 lg:py-20">
          <div className="type-mono-xs inline-flex items-center gap-1.5 border-[0.75px] border-b-[1.5px] border-white/30 px-2 pb-1.5 pt-1 text-white">
            <span className="size-[2.206px] rounded-[0.5px] bg-white" />
            AI-POWERED
          </div>
          <h3 className="type-title mt-4 font-normal text-white">
            What our automated solutions can do
          </h3>
          <div className="mt-10 grid gap-8 lg:grid-cols-5">
            {capabilityCards.map((card, index) => (
              <div
                key={card.title}
                className={cn(
                  "space-y-7 px-4 py-8 text-white/80",
                  index !== 0 && "border-l border-white/30"
                )}
              >
                <Image alt="" src={card.icon} width={28} height={28} />
                <div className="space-y-3">
                  <p className="type-mono-xs text-white">
                    {card.title}
                  </p>
                  <p className="type-body-sm text-white/70">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="bg-white">
        <StaggerGroup className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-10 lg:py-24">
          <div className="space-y-6">
            <div className="w-44 space-y-3">
              <p className="type-mono-xs text-brand">
                Impact
              </p>
              <div className="h-px w-full bg-brand" />
            </div>
            <h3 className="type-body-21 font-normal text-brand">
              Where Sovereign AI lifts performance
            </h3>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {impactCards.map((card) => (
              <div
                key={card.title}
                className="relative border border-strong bg-surface-subtle p-6"
              >
                <div className="absolute left-2 top-2 size-2">
                  <div className="h-2 w-2 border border-strong" />
                </div>
                <Image
                  alt=""
                  src={card.image}
                  width={397}
                  height={383}
                  className="h-[240px] w-full object-cover md:h-[280px]"
                />
                <div className="type-mono-22 mt-4 text-brand">
                  {card.title}
                </div>
                <p className="type-body-sm text-body-muted mt-2">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-surface-200">
        <div className="absolute inset-x-0 top-0 grid grid-cols-5 gap-px sm:grid-cols-6 lg:grid-cols-10">
          {gridSquares.map((item) => (
            <div key={item} className="aspect-square bg-surface-soft" />
          ))}
        </div>
        <div className="absolute inset-0 opacity-80 mix-blend-darken">
          <Image alt="" src={imgBackgroundGrid} fill className="object-cover" />
        </div>
        <StaggerGroup className="relative mx-auto w-full max-w-6xl px-6 pb-28 pt-32 lg:px-10">
          <div className="mx-auto w-full max-w-4xl border border-default bg-white p-6 lg:p-10">
            <div className="relative border border-default p-6 lg:p-8">
              <Image
                alt=""
                src={imgDotsLeft}
                width={15}
                height={15}
                className="absolute -top-5 left-0"
              />
              <Image
                alt=""
                src={imgDotsRight}
                width={15}
                height={15}
                className="absolute -top-5 right-0"
              />
              <div className="type-mono-xs inline-flex items-center gap-1.5 border border-brand border-b-[1.5px] border-l-[0.75px] border-r-[0.75px] border-t-[0.75px] px-2 pb-1.5 pt-1 text-brand">
                <span className="size-[3px] rounded-[1px] bg-brand" />
                Building Agency
              </div>
              <p className="type-body-lg mt-4 text-brand-strong">
                Our automated solutions have already supported national-level
                regulators such as the Malaysian Communications and Multimedia
                Commission (MCMC) and other institutions working at the
                intersection of policy, media, and markets.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl bg-white px-8 py-20 text-center">
            <div className="relative">
              <Image
                alt=""
                src={imgQuoteVector}
                width={14}
                height={14}
                className="absolute -left-2 -top-12 rotate-45"
              />
              <h3 className="type-display-sm sm:type-display-lg font-normal text-brand">
                You have absolutely no idea how much time this saves me.
              </h3>
              <p className="type-body-21 mt-6 text-brand">
                Jeremy Page, Head of Asia, The Economist magazine
              </p>
              <Image
                alt=""
                src={imgQuoteVector}
                width={14}
                height={14}
                className="absolute -bottom-12 -right-2 rotate-45"
              />
            </div>
          </div>
        </StaggerGroup>
      </MotionSection>
    </main>
  );
}
