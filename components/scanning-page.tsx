import Image from "next/image";
import { Fragment } from "react";

import { mainNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";

const imgImage80 =
  "https://www.figma.com/api/mcp/asset/2eb3f743-8925-4839-8485-fbeb142420b3";
const imgImage54 =
  "https://www.figma.com/api/mcp/asset/0f2cb459-7a31-4b2b-af35-136dbfcf8e9e";
const imgImage64 =
  "https://www.figma.com/api/mcp/asset/0aca4894-6c3e-4899-afd3-9df14ea275eb";
const imgImage70 =
  "https://www.figma.com/api/mcp/asset/160c7b47-c254-40eb-aaf6-75435e7e01a9";
const imgImage71 =
  "https://www.figma.com/api/mcp/asset/fb308fb6-8184-44a3-b28a-37afc86aa554";
const imgImage72 =
  "https://www.figma.com/api/mcp/asset/5cc67282-9a91-4d32-ab0c-ea4fe24e595a";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/ee64851b-936c-4e35-b753-4c25fc1ae90a";
const imgFrame1000003036 =
  "https://www.figma.com/api/mcp/asset/87261b2f-f970-482a-bc72-4d0f8e8a4c95";
const imgSocialLinkedIn =
  "https://www.figma.com/api/mcp/asset/addfe107-c441-465b-8e13-cb035d58f411";
const imgSocialX =
  "https://www.figma.com/api/mcp/asset/310d5413-6851-4055-9b23-cc1b58c500e5";
const imgSocialYoutube =
  "https://www.figma.com/api/mcp/asset/5604296f-1eb8-4f62-b875-c69cead4f3ef";
const imgSocialInstagram =
  "https://www.figma.com/api/mcp/asset/adce01ff-a934-4e1e-b253-64b09e4dbb04";
const imgSocialGithub =
  "https://www.figma.com/api/mcp/asset/aef7b9b4-2939-4d47-bc8d-0b4bca05adca";
const imgVector =
  "https://www.figma.com/api/mcp/asset/ea681809-70db-441e-986b-48df280af044";
const imgGlobe1 =
  "https://www.figma.com/api/mcp/asset/de2b3cce-2501-4620-97c7-3ff1a5d387d1";
const imgGlobe2 =
  "https://www.figma.com/api/mcp/asset/400307f7-131d-4f1f-a888-5eea11c4eb8e";
const imgGlobe3 =
  "https://www.figma.com/api/mcp/asset/b86f622c-1592-4bd9-acb5-18348ee2d52c";
const imgVector35 =
  "https://www.figma.com/api/mcp/asset/bfe5ed3c-140d-45f2-8c75-e8679581ca29";
const imgVector1 =
  "https://www.figma.com/api/mcp/asset/2f31f3f3-1b88-48c0-b236-00afb220b224";

const socialItems = [
  { label: "LinkedIn", icon: imgSocialLinkedIn, href: "#" },
  { label: "X", icon: imgSocialX, href: "#" },
  { label: "YouTube", icon: imgSocialYoutube, href: "#" },
  { label: "Instagram", icon: imgSocialInstagram, href: "#" },
  { label: "GitHub", icon: imgSocialGithub, href: "#" }
];

const featureCards = [
  {
    title: "Wide coverage",
    body:
      "wide coverage of markets from Asia, Europe, the Americas, and the Middle East.",
    image: imgImage70,
    icon: imgGlobe1
  },
  {
    title: "Guaranteed capture",
    body:
      "automated AI coverage checking and SLA guarantee that we don't miss anything",
    image: imgImage71,
    icon: imgGlobe2
  },
  {
    title: "Expert curation",
    body:
      "curated, modelled, and written by genuine specialists (mainly professors).",
    image: imgImage72,
    icon: imgGlobe3
  }
];

export function ScanningPage() {
  return (
    <main className="min-h-dvh bg-white text-brand">
      <SiteHeader
        logoSrc={imgLogo}
        navItems={mainNavItems}
        activeLabel="Scanning"
        navMarkSrc={imgFrame1000003036}
        socialItems={socialItems}
      />

      <MotionSection className="relative overflow-hidden bg-surface-muted lg:h-[750px]">
        <StaggerGroup>
        <div className="absolute inset-0 lg:hidden">
          <Image
            alt=""
            src={imgImage80}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[rgb(var(--color-surface-muted)/0.8)]" />
        </div>
        <div className="absolute left-[754px] top-1/2 hidden h-[620px] w-[560px] -translate-y-1/2 bg-surface-muted lg:block">
          <div className="absolute left-1/2 top-1/2 h-[569px] w-[541px] -translate-x-1/2 -translate-y-1/2">
            <Image alt="" src={imgImage80} fill className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-x-6 inset-y-0 hidden grid-cols-4 gap-2 lg:grid">
          <div className="border-l border-grid" />
          <div className="border-l border-grid" />
          <div className="border-l border-grid" />
          <div className="border-x border-grid" />
        </div>
        <div className="relative mx-auto flex w-full max-w-[1232px] flex-col gap-8 px-6 py-20 lg:static lg:py-0">
          <div className="flex flex-col gap-4 lg:absolute lg:bottom-[60px] lg:left-[55px] lg:w-[662px]">
            <div className="type-mono-xs inline-flex w-fit items-center gap-1.5 border border-brand border-b-[1.5px] border-l-[0.75px] border-r-[0.75px] border-t-[0.75px] px-2 pb-1.5 pt-1 text-brand">
              <span className="size-[3px] rounded-[1px] bg-brand" />
              Building Agency
            </div>
            <h1 className="type-display-hero-xl font-normal">
              Regulatory Intelligence, Delivered Automatically
            </h1>
            <p className="type-body-sm leading-[1.2] lg:w-[442px]">
              Bilby uses patented AI systems trained by real experts to scan
              regulations, policies, and government updates worldwide — then turns
              them into clear, actionable intelligence in your language, every day,
              automatically.
            </p>
          </div>
        </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-white py-24">
        <StaggerGroup>
        <div className="absolute inset-0">
          <Image alt="" src={imgImage54} fill className="object-cover opacity-50" />
        </div>
        <div className="relative mx-auto flex max-w-[1190px] flex-col items-center gap-6 px-6 text-center">
          <p className="type-body-15">
            Analysts still waste hours manually tracking policy changes.
          </p>
          <h2 className="type-display-hero font-normal">
            Why rely on manual monitoring in 2025?
          </h2>
          <p className="type-body-15 max-w-[512px] leading-[1.3] lg:leading-[1.2]">
            We use our patented Bilby method first to make a then curate relevant
            changes from around the globe or from within your own system and
            analyse them against the model of what should be done. We automated AI
            scanning of regulations, news, policies — and the analysis of them.
            Our systems are trained by world-class experts.
          </p>
        </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="bg-white overflow-clip">
        <StaggerGroup className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-[25px] lg:py-[83px]">
          <div className="mx-auto lg:max-w-[1083px]">
            <div className="type-body border-l-4 border-brand pl-4 text-brand-soft leading-[1.2]">
              Bilby gives you a tripwire product in your language that functions as a
              continuously reporting platform, rather than a static memo. That brings
              considerable efficiency: gets rid of barriers of expertise, language
              and scale. You get the thing you need to give your boss about
              regulations and policy provided to you in your language, in whatever
              output form you wish.
            </div>
          </div>
          <div className="mx-auto mt-10 flex flex-col items-center lg:px-[18px] lg:py-[34px]">
            <div className="relative w-full overflow-hidden border border-brand-subtle lg:h-[616px] lg:w-[1084px]">
              <div className="type-mono-22 pt-12 text-center">
                Features:
              </div>
              <div className="mt-8 grid gap-8 px-6 pb-8 lg:mt-0 lg:absolute lg:left-[10px] lg:top-[109px] lg:flex lg:gap-[35px] lg:px-[34px] lg:pb-0">
                {featureCards.map((card, index) => (
                  <Fragment key={card.title}>
                    <div className="text-center lg:w-[285px]">
                      <div className="relative mx-auto h-[294px] w-[294px]">
                        <Image
                          alt=""
                          src={card.image}
                          fill
                          className="object-cover"
                        />
                        <Image
                          alt=""
                          src={card.icon}
                          width={46}
                          height={46}
                          className="absolute left-1/2 top-[11px] -translate-x-1/2"
                        />
                      </div>
                      <p className="type-body-14-5 mt-4">{card.body}</p>
                    </div>
                    {index < featureCards.length - 1 ? (
                      <div className="hidden h-[506px] items-center justify-center lg:flex">
                        <Image
                          alt=""
                          src={imgVector35}
                          width={1}
                          height={506}
                          className="h-[506px] w-px"
                        />
                      </div>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="bg-white py-[90px]">
        <StaggerGroup>
        <div className="relative mx-auto max-w-[1155px] text-center">
          <div className="font-semibold text-brand" style={{ fontFamily: "var(--font-dm), ui-sans-serif, system-ui", fontSize: "21.7px", lineHeight: "27.94px", letterSpacing: "-0.484px" }}>Ewan Smith</div>
          <div className="relative mt-6">
            <p className="type-display-lg leading-[1.04]">
              We remain astounded by the speed and scope of what Bilby provides us
              every day
            </p>
            <Image
              alt=""
              src={imgVector1}
              width={14}
              height={14}
              className="absolute left-[86px] -bottom-16 rotate-45"
            />
            <Image
              alt=""
              src={imgVector1}
              width={14}
              height={14}
              className="absolute -right-[118px] -bottom-4 rotate-45"
            />
          </div>
        </div>
        </StaggerGroup>
      </MotionSection>
    </main>
  );
}
