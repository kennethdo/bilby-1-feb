"use client";

import Image from "next/image";
import { Accordion } from "@base-ui/react";
import { motion, useReducedMotion } from "motion/react";
import { Add, ArrowForward, AccountBalance, Payments } from "@material-symbols-svg/react/w200";

import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { mainNavItems } from "@/components/nav-data";

import heroImgGlobe from "@/hero-img-2.png";

const imgHighlights =
  "/images/639d17f6-f04b-4840-8fc0-b3e1700d8407.png";
const imgHighlightIcon =
  "/images/3fc23e58-83ad-46e6-b71b-53b90cdc2191.svg";
const imgFrame1000003036 =
  "/images/a7bfd7f9-5959-4e67-b1d0-37dfcb62be86.svg";
const imgContentImage =
  "/images/de584695-fcc6-4bc2-a00f-dc67cd6eab71.png";
const imgContentImage1 =
  "/images/06fdc944-4643-4369-9cbb-d497497c775a.png";
const imgContentImage2 =
  "/images/663b8872-2fac-4ea1-bc37-d8bbec27b13d.png";
const imgFooterImage =
  "/images/b817c8e3-d31b-4626-a781-d4784c4c5feb.png";
const imgFooterBackgroundImage =
  "/images/5d0178f3-085b-4048-9a3d-d98140db4fbe.png";
const imgFooterVector =
  "/images/d79e1d99-7277-45d2-95fb-61b6b065ed0c.svg";
const imgCardCornerLeft =
  "/images/36c05905-8b7b-45ce-9e8c-c4afbe414033.svg";
const imgCardCornerRight =
  "/images/7f49d8d8-671a-40b2-ba6a-cfaee77e228c.svg";
const imgLogo =
  "/images/52e09870-c954-44d7-9261-71ad8b36269d.svg";
const imgSocialLinkedIn =
  "/images/bd5bd585-5e35-4784-8003-cda38372ff1f.svg";
const imgSocialX =
  "/images/aebe7771-4100-41fc-addf-779ff6b74dcc.svg";

const springHover =
  "spring-transform transition-opacity duration-150 ease-out hover:-translate-y-0.5";
const imgSocialYoutube =
  "/images/6b499a14-7e23-4067-8fba-af02698ca362.svg";
const imgSocialInstagram =
  "/images/9f35e34b-eb94-4ebc-9be8-8c26422e6573.svg";
const imgSocialGithub =
  "/images/632df740-b6b6-4b2c-8da2-e021eb8969e0.svg";
const imgMoneyIcon =
  "/images/c39a115c-2209-434d-8c02-babc6c2cc3dd.svg";
const imgInfraIcon =
  "/images/e72d1a9d-153a-4941-9272-37aa397f89c4.svg";
const imgFinanceIcon =
  "/images/663eee44-8f3e-44f1-b572-85b9639ba403.svg";

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
    Icon: AccountBalance
  },
  {
    label: "Government",
    title: "AI OS for Governments",
    Icon: Payments
  }
];

const bigButtonCta = {
  label: "Our Services",
  title: "Explore our services and elevate your project with us."
};

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

      <div className="overflow-hidden rounded-lg bg-surface-card">
        <div className="relative mx-auto grid min-h-[756px] w-full max-w-[1440px] items-end gap-10 px-6 pb-14 pt-[62px] lg:grid-cols-[1.1fr_0.9fr]">
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
              <a
                className={cn(
                  "type-mono-xs rounded-[1000px] bg-brand px-[18px] py-3 text-inverse",
                  springHover,
                  "hover:opacity-80"
                )}
                href="#"
              >
                Learn More
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
              className="absolute bottom-0 right-0 z-10 w-full border border-default bg-white/35 px-8 py-7 backdrop-blur-[3.9px] lg:w-[347px]"
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
                <a
                  className={cn(
                    "type-mono-xs rounded-[1000px] bg-brand px-[18px] py-3 text-inverse",
                    springHover,
                    "hover:opacity-80"
                  )}
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex gap-1">
        {bigButtons.map((item, index) => (
          <article
            key={`${item.label}-${index}`}
            className="relative flex h-[188px] w-[357px] shrink-0 flex-col justify-between bg-white px-6 py-7 text-brand"
          >
            <div className="type-mono-xs leading-[16px]">
              {item.label}
            </div>
            <p className="type-body-15 max-w-[200px] leading-[1.2]">
              {item.title}
            </p>
            <item.Icon className="absolute right-6 top-7 size-6 text-brand" />
          </article>
        ))}
        <article className="flex w-[452px] shrink-0 flex-col gap-20 rounded-lg bg-brand px-6 py-7 text-inverse">
          <p className="type-body-sm font-medium uppercase leading-[1.2]">
            {bigButtonCta.label}
          </p>
          <p className="type-body-sm max-w-[200px] leading-[1.2]">
            {bigButtonCta.title}
          </p>
        </article>
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
                        <Add
                          aria-hidden
                          className="ml-4 size-5 text-brand-strong transition-transform duration-150 ease-out group-data-[state=open]:rotate-45"
                        />
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
              Learn more <ArrowForward className="ml-1.5 inline-block size-4" />
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
    <section className="relative h-[480px] overflow-hidden bg-surface-soft">
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
      <div className="relative z-20 h-full w-full px-6 pb-12 pt-[51px] lg:px-[49px] lg:pb-16">
        <div className="flex flex-wrap gap-16 text-ink">
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
