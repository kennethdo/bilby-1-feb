"use client";

import Image from "next/image";
import { Accordion } from "@base-ui/react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { mainNavItems } from "@/components/nav-data";

import heroImgGlobe from "@/hero-img-2.png";

const imgHighlights =
  "https://www.figma.com/api/mcp/asset/75439da3-b380-4f90-9d6b-7adada5e2f0e";
const imgHighlightIcon =
  "https://www.figma.com/api/mcp/asset/f4b0acd9-bb01-4540-8c96-00224443781a";
const imgFrame1000003036 =
  "https://www.figma.com/api/mcp/asset/ad5c6e62-1e19-4642-b533-dad064529f0d";
const imgContentImage =
  "https://www.figma.com/api/mcp/asset/bbd85f75-9c67-4ecd-85ea-6d33df81ae3a";
const imgContentImage1 =
  "https://www.figma.com/api/mcp/asset/97862f56-31ef-4d92-a5ad-1d7e8a376a3a";
const imgContentImage2 =
  "https://www.figma.com/api/mcp/asset/1a6fd65d-6f07-4ff2-bc58-38ecd6c5e136";
const imgFooterImage =
  "https://www.figma.com/api/mcp/asset/eb70f7d8-0eff-471b-8ce8-7ae4c94cabdb";
const imgFooterBackgroundImage =
  "https://www.figma.com/api/mcp/asset/4e417558-a4f1-493d-985b-c3af12bf9984";
const imgFooterVector =
  "https://www.figma.com/api/mcp/asset/56e52db4-fc93-45d2-aa50-5783a7593201";
const imgCardCornerLeft =
  "https://www.figma.com/api/mcp/asset/3b85a16d-f667-4240-b452-20b918d5c2f5";
const imgCardCornerRight =
  "https://www.figma.com/api/mcp/asset/7e9510d3-6198-43a1-b997-4255a88dfb4b";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/a6a911c6-175d-4892-9f60-bf35e173e70b";
const imgSocialLinkedIn =
  "https://www.figma.com/api/mcp/asset/cfac3666-8d4f-47e8-b11e-bb787213e926";
const imgSocialX =
  "https://www.figma.com/api/mcp/asset/d49bd455-7deb-4aa9-83cb-8ac6fb94f1ec";

const springHover =
  "spring-transform transition-opacity duration-150 ease-out hover:-translate-y-0.5";
const imgSocialYoutube =
  "https://www.figma.com/api/mcp/asset/d7c2a7d2-7d83-44b7-9595-ee42339fe79d";
const imgSocialInstagram =
  "https://www.figma.com/api/mcp/asset/ee9fcc46-76ff-4f98-bf50-599b16f5aa06";
const imgSocialGithub =
  "https://www.figma.com/api/mcp/asset/cac613fb-0e3e-4e12-a748-0ea5e4418e03";
const imgMoneyIcon =
  "https://www.figma.com/api/mcp/asset/c8ae61db-720b-4afe-b303-a88f00991089";
const imgInfraIcon =
  "https://www.figma.com/api/mcp/asset/e711ccd4-6956-4f17-8171-3b93f4256ea3";
const imgFinanceIcon =
  "https://www.figma.com/api/mcp/asset/2768127e-64c4-4cf7-b9e7-a84aa901c7c1";

const navItems = mainNavItems;

const socialLinks = [
  { label: "LinkedIn", icon: imgSocialLinkedIn, href: "#" },
  { label: "X", icon: imgSocialX, href: "#" },
  { label: "YouTube", icon: imgSocialYoutube, href: "#" },
  { label: "Instagram", icon: imgSocialInstagram, href: "#" },
  { label: "GitHub", icon: imgSocialGithub, href: "#" }
];

const bigButtons = [
  {
    label: "Government",
    title: "AI OS for Governments",
    icon: imgFinanceIcon
  },
  {
    label: "Financial Services",
    title: "Transform Government Signals into Alpha",
    icon: imgMoneyIcon
  },
  {
    label: "Regulated Industries",
    title: "Play offence with regulations rather than defence",
    icon: imgInfraIcon
  }
];

const highlights = [
  {
    value: "4.3M",
    title: "Malaysia Gov Contract",
    text: "Enterprise validation"
  },
  {
    value: "38+",
    title: "Countries Covered",
    text: "Global intelligence"
  },
  {
    value: "80x",
    title: "Processing Speed",
    text: "2 days to 20 minutes"
  },
  {
    value: "20+",
    title: "Expert Team",
    text: "Oxford PhDs, BCG alumni"
  }
];

const contentBlocks = [
  {
    title: "Why this matters",
    body:
      "Government activity is nearly 30% of global GDP, and growing. Yet existing AI solutions only gain analysts 30 minutes a week. We need at least a 10x improvement in understanding the world, and that will only come with fully automated solutions that knit various departments together.",
    image: imgContentImage,
    imagePosition: "right"
  },
  {
    title: "How Bilby works",
    body:
      "Our custom AI models, knowledge graphs, and multilingual processing turn government activity into hierarchical, clean data — and those data into software. We help governments, enterprises, financial institutions, and investors navigate policy landscapes, monitor sentiment, and forecast impacts.",
    image: imgContentImage2,
    imagePosition: "left"
  },
  {
    title: "Proven global impact",
    body:
      "Our platforms have already transformed over 75 million artefacts from 3,000+ sources across more than 40 countries, enabling efficient decision-making in areas like national security, regulatory compliance, economic development, and public engagement. We started with China and the US. We’re now going to the world.",
    image: imgContentImage1,
    imagePosition: "right"
  }
];

const pillarContent = [
  {
    title: "Expert-Led Innovation",
    body:
      "Our founding team blends academic rigor with policy expertise. We build human-first systems that turn complex government signals into usable intelligence."
  },
  {
    title: "Advanced Proprietary Technology",
    body:
      "Custom models, multilingual pipelines, and knowledge graphs power every layer. The stack is optimized for precision, scale, and speed."
  },
  {
    title: "Global Reach & Impact",
    body:
      "We operate across regions and regulatory environments with trusted partners. The platform translates local policy into global action."
  },
  {
    title: "Comprehensive Intelligence Solutions",
    body:
      "From discovery to forecasting, Bilby delivers end-to-end intelligence. Teams move from signal detection to decision-ready insight."
  }
];

const footerNav = [
  { title: "Our platform", items: ["Our platform", "Our approach"] },
  { title: "Case studies", items: ["Case studies", "Book a demo"] },
  { title: "Privacy policy", items: ["Privacy policy", "Terms of service", "Cookies"] }
];

const logoRow = Array.from({ length: 5 }).map((_, index) => ({
  id: index,
  src: imgHighlightIcon
}));
function TickerValue({ value }: { value: string }) {
  return <div className="tabular-nums">{value}</div>;
}

function LogoRow() {
  return (
    <div className="flex w-full max-w-[856px] items-center justify-between">
      {logoRow.map((logo) => (
        <Image
          key={logo.id}
          alt=""
          src={logo.src}
          width={65}
          height={21}
          className="opacity-70"
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const heroInitial = prefersReducedMotion ? false : { y: 12 };
  const heroAnimate = { y: 0 };
  const heroCtaBase = cn(
    "type-body-sm px-5 py-3 uppercase text-brand-strong",
    springHover,
    "hover:opacity-80"
  );
  const heroCtaGhost = cn(heroCtaBase, "border border-light bg-white");
  const heroCtaOutline = cn(heroCtaBase, "border border-brand-strong");

  return (
    <section className="bg-white overflow-hidden">
      <SiteHeader
        logoSrc={imgLogo}
        navItems={navItems}
        activeLabel="Home"
        navMarkSrc={imgFrame1000003036}
        socialItems={socialLinks}
      />

      <div className="mx-auto w-full max-w-[1232px] px-6 pb-16 pt-14 lg:px-[95px] lg:pb-14">
        <div className="grid min-h-[720px] items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-[696px] space-y-7">
            <motion.div
              initial={heroInitial}
              animate={heroAnimate}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="type-mono-xs inline-flex items-center gap-1.5 border border-brand-strong border-b-[1.5px] border-l-[0.75px] border-r-[0.75px] border-t-[0.75px] px-2 pb-1.5 pt-1 text-brand-strong"
            >
              <span className="size-[2.2px] rounded-[0.5px] bg-brand-strong" />
              AI-POWERED
            </motion.div>
            <motion.h1
              initial={heroInitial}
              animate={heroAnimate}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.05 }}
              className="type-display-hero font-normal text-brand-strong"
            >
              Bilby is the AI OS
              <br />
              of government
            </motion.h1>
            <motion.div
              initial={heroInitial}
              animate={heroAnimate}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
              className="flex flex-wrap gap-3"
            >
              <a className={heroCtaGhost} href="#">
                Talk to us
              </a>
              <a className={heroCtaOutline} href="#">
                View capabilities
              </a>
            </motion.div>
          </div>

          <div className="relative h-full min-h-[560px] self-stretch">
            <motion.div
              initial={prefersReducedMotion ? false : { scale: 0.98, y: 6 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
              className="absolute bottom-0 left-0 z-10 h-[620px] w-[560px] max-w-full"
            >
              <Image
                alt=""
                src={heroImgGlobe}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div
              initial={heroInitial}
              animate={heroAnimate}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.15 }}
              className="absolute bottom-0 right-0 z-10 w-full border border-default bg-white px-8 py-7 lg:w-[400px]"
            >
              <p className="type-body leading-[1.36] text-brand-strong">
                Bilby transforms complex global government, policy, and
                regulatory information into marked-up data — creating predictive,
                actionable insights.
              </p>
              <div className="mt-4 flex flex-nowrap gap-2">
                <a className={heroCtaGhost} href="#">
                  Talk to us
                </a>
                <a className={heroCtaOutline} href="#">
                  View capabilities
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex gap-1">
        {bigButtons.map((item, index) => (
          <article
            key={item.label}
            className={cn(
              "relative flex h-[188px] flex-col justify-between bg-white px-6 py-7 text-brand-strong",
              index === 0 && "flex-1",
              index === 1 && "flex-1",
              index === 2 && "flex-[2]"
            )}
          >
            <div className="type-mono-xs leading-[16px]">
              {item.label}
            </div>
            <p className="type-body-15 max-w-[200px] leading-[1.2]">
              {item.title}
            </p>
            <Image
              alt=""
              src={item.icon}
              width={index === 0 ? 25 : 21}
              height={index === 0 ? 25 : 21}
              className="absolute right-6 top-7"
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export function HighlightsSection() {
  const prefersReducedMotion = useReducedMotion();
  const highlightInitial = prefersReducedMotion ? false : { opacity: 0, y: 10 };

  return (
    <section className="relative overflow-hidden bg-surface-card">
      <div className="absolute inset-0">
        <Image
          alt=""
          src={imgHighlights}
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>
      <div className="relative mx-auto w-full max-w-[1232px] px-6 py-28 lg:px-[104px] lg:py-[100px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <motion.div
            initial={highlightInitial}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="type-display-md lg:type-display-lg font-normal text-brand-strong">
              Trusted by Government Agencies and Fortune 500 Companies
            </p>
          </motion.div>
          <motion.div
            initial={highlightInitial}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.5 }}
            className="pt-5"
          >
            <LogoRow />
          </motion.div>
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={highlightInitial}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-2 pt-6 text-brand-strong"
            >
              <div className="type-stat font-extralight">
                <TickerValue value={item.value} />
              </div>
              <div className="type-mono-13">
                {item.title}
              </div>
              <p className="type-body-13 leading-[1.2]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatementStripSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1232px] px-2.5 py-12 lg:px-2.5">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="type-mono-19 text-center text-brand-strong"
        >
          Transforming government activity into predictive intelligence
        </motion.p>
      </div>
    </section>
  );
}

export function ContentBlocksSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-surface-soft">
      <div className="mx-auto w-full max-w-[1311px] px-6 py-16 lg:px-[63px] lg:py-[118px]">
        <div className="space-y-10">
          {contentBlocks.map((block) => {
            const isImageRight = block.imagePosition === "right";
            return (
              <div
                key={block.title}
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]",
                  !isImageRight && "lg:grid-cols-[0.9fr_1.1fr]"
                )}
              >
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.4 }}
                  className={cn(!isImageRight && "lg:order-2")}
                >
                  <div className="relative border border-white bg-white p-2">
                    <div className="relative border border-default px-6 py-8">
                      <Image
                        alt=""
                        src={imgCardCornerLeft}
                        width={15}
                        height={15}
                        className="absolute left-[8px] top-[8px]"
                      />
                      <Image
                        alt=""
                        src={imgCardCornerRight}
                        width={15}
                        height={15}
                        className="absolute right-[9px] top-[8px]"
                      />
                      <h3 className="type-title font-normal text-brand-muted">
                        {block.title}
                      </h3>
                      <p className="type-body-lg mt-4 text-brand-muted">
                        {block.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.05 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className={cn(!isImageRight && "lg:order-1")}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white shadow-sm">
                    <Image
                      alt=""
                      src={block.image}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PillarsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1232px] px-6 py-16 lg:px-[104px] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-brand-strong">
              <p className="type-mono-13">
                Expert-Led Innovation
              </p>
              <h2 className="type-display-40 sm:type-display-48 font-normal">
                The Pillars
              </h2>
              <p className="type-body-lg">
                Oxford PhD founders with over 20 years of experience. Former BCG
                consultants and government advisors leading cutting-edge research in
                AI-powered government intelligence.
              </p>
            </div>
            <div className="border-t border-default">
              <Accordion.Root
                className="divide-y divide-default"
                defaultValue={[]}
                multiple={false}
              >
                {pillarContent.map((item) => (
                  <Accordion.Item
                    key={item.title}
                    value={item.title}
                    className="py-3"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="type-display-22 group flex w-full items-center justify-between text-left text-brand-strong spring-transform transition-opacity duration-150 ease-out hover:-translate-x-0.5 hover:opacity-90">
                        {item.title}
                        <span
                          aria-hidden
                          className="type-body-lg ml-4 text-brand-strong transition-transform duration-150 ease-out group-data-[state=open]:rotate-45"
                        >
                          +
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel className="type-body pt-3 leading-[1.6] text-brand-muted">
                      {item.body}
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
            <a
              className={cn(
                "type-mono-13 inline-flex border border-muted px-6 py-3 text-brand-strong",
                springHover,
                "hover:opacity-80"
              )}
              href="#"
            >
              Learn more →
            </a>
          </motion.div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative aspect-[4/3] w-full overflow-hidden bg-surface-card"
          >
            <Image
              alt=""
              src={imgFooterImage}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FooterNavSection() {
  return (
    <section className="relative h-[400px] overflow-hidden bg-surface-soft">
      <div className="absolute inset-0 z-0 opacity-80 scale-x-[-1]">
        <Image
          alt=""
          src={imgFooterBackgroundImage}
          fill
          className="object-cover object-center mix-blend-darken"
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[300px] w-[720px] opacity-90">
        <Image alt="" src={imgFooterVector} fill className="object-contain" />
      </div>
      <div className="relative z-20 mx-auto h-full w-full max-w-[1232px] px-6 pb-12 pt-20 lg:px-[104px] lg:pb-16">
        <div className="grid gap-10 text-ink sm:grid-cols-2 lg:grid-cols-3">
          {footerNav.map((column) => (
            <div key={column.title} className="type-body-13 space-y-6">
              {column.items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={cn(
                    "type-mono-13 block",
                    springHover,
                    "hover:opacity-70"
                  )}
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
