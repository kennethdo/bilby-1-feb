import Image from "next/image";
import { Dashboard, Automation, SmartToy, Extension, Database } from "@material-symbols-svg/react/w200";

import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";
import { mainNavItems, mainSocialItems } from "@/components/nav-data";

const imgHero =
  "/images/0ff9142d-1bef-47d4-b631-3c388ede2041.png";
const imgBackgroundGrid =
  "/images/94a41a52-85ec-48fd-9f56-c4526b263a54.png";
const imgCapabilitiesTexture =
  "/images/94994b09-13e5-4a75-85aa-8bd288467df4.png";
const imgImpactCard1 =
  "/images/6ca081c2-8277-4765-8495-94dc5d1243d9.png";
const imgImpactCard2 =
  "/images/47c32efb-bc5b-43e5-a4e8-ec8793b00a91.png";
const imgImpactCard3 =
  "/images/265e755b-9a86-44d4-9d29-25f17b4376c6.png";
const imgImpactCard4 =
  "/images/9ef5d70a-bec0-4869-a20a-3cedcf9b60da.png";
const imgLogo =
  "/images/9ca84669-40fd-4d3b-b1a0-3e3c167938b3.svg";
const imgNavMark =
  "/images/f441779b-17a7-43ff-b6ad-5147185c00d6.svg";
const imgCapabilityIcon1 =
  "/images/7aeb8978-ee64-4136-8c6f-05c44dbbfe5b.svg";
const imgCapabilityIcon2 =
  "/images/f5cd881f-2ef3-4b35-9638-fe58234cbd5e.svg";
const imgCapabilityIcon3 =
  "/images/a85f3e9d-1328-49e6-9e03-8d55a59c72c8.svg";
const imgCapabilityIcon4 =
  "/images/89d9e14f-6c7b-4272-9c9e-eb19ea2c080a.svg";
const imgCapabilityIcon5 =
  "/images/b32da51b-ce43-43ee-8edf-970ba1eff49f.svg";
const imgQuoteVector =
  "/images/ac94a57a-306c-4053-b1da-97938603ae33.svg";
const imgQuoteVector2 =
  "/images/0890c57f-6189-4071-87ef-99317dddedbc.svg";
const imgDotsLeft =
  "/images/93c7d494-7fd8-44d3-91ef-7662a7078f9e.svg";
const imgDotsRight =
  "/images/94ee7d35-d0d2-4bc9-9c22-6c12f4facd3e.svg";

const navItems = mainNavItems;

const capabilityCards = [
  {
    title: "Core Analysis Platforms",
    body:
      "Custom dashboards and APIs for auto-analysing government activity, matching statements to actors, and tracking narratives and sentiment across languages and regions — including automated policy testing and visualisation.",
    Icon: Dashboard
  },
  {
    title: "Automated Analysis Tools",
    body:
      "Policy lifecycle and importance markup tools, graph databases for stakeholder mapping, and ML ops to build supervised and unsupervised models on top of government data.",
    Icon: Automation
  },
  {
    title: "Generative AI Tools",
    body:
      "Web, mobile, and WhatsApp-integrated interfaces for querying insights, generating reports, and simulating policy outcomes, in the language and format your teams actually use.",
    Icon: SmartToy
  },
  {
    title: "Specialised Modules",
    body:
      "Automated company analysis, regulatory pipelines, social media legal compliance, and geo-political risk advisory reports on demand, tuned to your settings and jurisdictions.",
    Icon: Extension
  },
  {
    title: "Data Enrichment Services",
    body:
      "Normalised, enriched datasets for model builders, with human-in-the-loop refinement for accuracy and REST APIs for seamless integration into your existing infrastructure.",
    Icon: Database
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
        socialItems={mainSocialItems}
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
        <StaggerGroup className="relative z-20 mx-auto w-full max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
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
                <p className="type-mono-19 text-brand-strong">
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
          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
            {capabilityCards.map((card, index) => (
              <div
                key={card.title}
                className={cn(
                  "space-y-7 px-4 py-8 text-white/80",
                  index !== 0 && "lg:border-l lg:border-white/30"
                )}
              >
                <card.Icon className="size-7 text-white" />
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
                <svg className="absolute left-2 top-2" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="7" height="7" stroke="rgb(var(--color-border-strong))" strokeWidth="1" />
                </svg>
                <Image
                  alt=""
                  src={card.image}
                  width={397}
                  height={383}
                  className="h-[240px] w-full object-cover md:h-[280px]"
                />
                <div className="type-mono-23 mt-4 text-brand">
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
        <StaggerGroup className="relative z-20 mx-auto w-full max-w-6xl px-6 pb-28 pt-32 lg:px-10">
          <div className="mx-auto w-full max-w-4xl border border-default bg-white p-6 lg:p-10">
            <div className="relative border border-default p-6 lg:p-8">
              <Image
                alt=""
                src={imgDotsLeft}
                width={15}
                height={15}
                className="absolute -left-[7px] -top-[7px]"
              />
              <Image
                alt=""
                src={imgDotsRight}
                width={15}
                height={15}
                className="absolute -right-[7px] -top-[7px]"
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
