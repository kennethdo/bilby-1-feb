import Image from "next/image";
import { Fragment } from "react";
import { Language, VerifiedUser, School } from "@material-symbols-svg/react/w200";

import { mainNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";

const imgImage80 =
  "/images/67ae2d1c-3de1-4dad-b38b-dd62caa6aade.png";
const imgImage54 =
  "/images/f0c6d3b0-8650-41b3-9254-fd4571c935af.png";
const imgImage64 =
  "/images/a0ffdb08-bf35-4212-97e7-5884259667eb.png";
const imgImage70 =
  "/images/6e8b048f-f809-476c-a049-271dbb6c2f0b.png";
const imgImage71 =
  "/images/b746bc6e-2feb-460a-a8df-65d72312479f.png";
const imgImage72 =
  "/images/7312bc62-24a8-4dbc-b521-15c042199d32.png";
const imgLogo =
  "/images/6ae43774-8782-4482-b744-dc80ceff7b5f.svg";
const imgFrame1000003036 =
  "/images/84a5fa6a-720f-4d32-b965-d33d2c7a0f44.svg";
const imgSocialLinkedIn =
  "/images/58cddc74-2fe7-43a7-8fc6-6af89da9493b.svg";
const imgSocialX =
  "/images/278018a2-ce1b-49a3-9637-ef5438292346.svg";
const imgSocialYoutube =
  "/images/8e6eae6f-1b8f-43c6-8c5f-df9b1dcb47b4.svg";
const imgSocialInstagram =
  "/images/0113247a-d2f4-4136-b135-aa4932a871e7.svg";
const imgSocialGithub =
  "/images/59fbced6-1f2c-4955-b9cb-7f0fd4122c9e.svg";
const imgVector =
  "/images/b7bdd235-a54b-482d-8992-c3b8c1a40be2.svg";
const imgGlobe1 =
  "/images/49e678a6-8d82-448a-af13-1fd36e6c311d.svg";
const imgGlobe2 =
  "/images/1a3e240f-e95d-44d7-8e81-c9eb6668b645.svg";
const imgGlobe3 =
  "/images/926068ff-bdfb-4f4c-ac79-fcec9eed2697.svg";
const imgVector35 =
  "/images/813bd170-3f4d-457e-b802-423a397dbfc5.svg";
const imgVector1 =
  "/images/2086b9c6-6ffc-4455-9dc7-73082c0ed330.svg";

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
    Icon: Language
  },
  {
    title: "Guaranteed capture",
    body:
      "automated AI coverage checking and SLA guarantee that we don't miss anything",
    image: imgImage71,
    Icon: VerifiedUser
  },
  {
    title: "Expert curation",
    body:
      "curated, modelled, and written by genuine specialists (mainly professors).",
    image: imgImage72,
    Icon: School
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
