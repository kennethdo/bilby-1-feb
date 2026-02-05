"use client";

import Image from "next/image";
import { useState } from "react";
import { Article, Forum, Campaign, Lightbulb } from "@material-symbols-svg/react/w200";

import { cn } from "@/lib/utils";
import { aboutNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { StaggerGroup } from "@/components/motion-section";

const imgNicolasLePallec =
  "/images/f720ffcc-303c-4011-bd9e-90d5ae55a925.png";

const imgImage94 =
  "/images/4f018b6c-3ed8-4f55-9c56-0d4e9f323480.png";
const imgImage54 =
  "/images/dbf7542b-43cc-4adc-9421-8633cf96b1ed.png";
const imgLogo =
  "/images/2cde171c-b7a5-4670-98d6-a595ab8f6856.svg";
const imgFrame1000003036 =
  "/images/6bda768e-f4a3-4808-b689-6a2d3ee8863f.svg";
const imgSocialLinkedIn =
  "/images/1c006981-7e75-4469-89c8-6f7f76054a66.svg";
const imgSocialX =
  "/images/ee062747-895b-4d60-b48f-04f0ad3243d7.svg";
const imgSocialYoutube =
  "/images/0627cb86-fdda-4924-a5a7-9a277601673f.svg";
const imgSocialInstagram =
  "/images/1cbcfbea-6b96-40ea-8e30-fc365bdad163.svg";
const imgSocialGithub =
  "/images/101ed8f7-e983-43b0-983f-cea390d15a80.svg";
const imgLogoMark =
  "/images/679e7fab-03c1-4eac-bd10-7454330705e1.svg";

const socialItems = [
  { label: "LinkedIn", icon: imgSocialLinkedIn, href: "#" },
  { label: "X", icon: imgSocialX, href: "#" },
  { label: "YouTube", icon: imgSocialYoutube, href: "#" },
  { label: "Instagram", icon: imgSocialInstagram, href: "#" },
  { label: "GitHub", icon: imgSocialGithub, href: "#" }
];

const staffMembers = [
  {
    name: "Dr. Ryan Manuel",
    role: "CEO & Founder",
    photo: "/images/staff/ryan-manuel.png",
    description: "More than 20 years industry experience; a third-time founder who previously taught at Oxford, Australian National and Hong Kong universities, and worked for BCG and the Australian government. Holds a doctorate from Oxford, where he was a Rhodes Scholar."
  },
  {
    name: "Dr. Steve Enright-Ward",
    role: "Chief Technology Officer",
    photo: "/images/staff/stephen-enrightward.jpg",
    description: "Leads Bilby's technology strategy and engineering teams. Brings deep expertise in AI systems architecture, scalable data pipelines, and building production ML platforms for government intelligence."
  },
  {
    name: "Simon Cartledge",
    role: "Head of Research",
    photo: "/images/staff/simon-cartledge.png",
    description: "Directs Bilby's research programme, overseeing policy analysis methodology and knowledge graph development. Background in political economy and Asian government systems."
  },
  {
    name: "Nicolas Le Pallec",
    role: "Head of Engineering",
    photo: imgNicolasLePallec,
    description: "Oversees platform engineering and infrastructure, ensuring Bilby's systems deliver reliable, high-performance intelligence at scale across global deployments."
  },
  {
    name: "David Lee",
    role: "Senior ML Research Engineer",
    photo: "/images/staff/david-lee.png",
    description: "Develops and optimises Bilby's core machine learning models for document classification, sentiment analysis, and policy maturity scoring across multilingual datasets."
  },
  {
    name: "Jeremy Thompson",
    role: "Research Analyst",
    photo: "/images/staff/jeremy-thompson.png",
    description: "Conducts policy research and analysis, contributing to Bilby's intelligence products with expertise in regulatory landscapes and government activity monitoring."
  },
  {
    name: "Carlo Taleon",
    role: "Software Engineer",
    photo: "/images/staff/carlo-taleon.jpeg",
    description: "Builds and maintains Bilby's web platforms and API services, working across the full stack to deliver intuitive interfaces for complex intelligence data."
  },
  {
    name: "Damian Cox",
    role: "Solutions Architect",
    photo: "/images/staff/damian-cox.png",
    description: "Designs and implements client-facing deployment architectures, ensuring Bilby's platforms integrate seamlessly with enterprise and government infrastructure."
  },
  {
    name: "Harvey Wen",
    role: "Data Scientist",
    photo: "/images/staff/harvey-wen.jpg",
    description: "Applies statistical modelling and data analysis to extract actionable signals from government activity data, supporting Bilby's quantitative intelligence products."
  },
  {
    name: "Hugh Daly",
    role: "AI & Data Engineering",
    photo: "/images/staff/hugh-daly.jpeg",
    description: "Builds data pipelines and AI infrastructure that power Bilby's automated scanning and analysis of global government and regulatory sources."
  },
  {
    name: "Marco Law",
    role: "Business Development",
    photo: "/images/staff/marco-law.png",
    description: "Drives Bilby's commercial growth across Asia-Pacific markets, building relationships with government agencies and enterprise clients."
  },
  {
    name: "Nik Takano",
    role: "Product Design Lead",
    photo: "/images/staff/nik-takano.png",
    description: "Shapes the user experience of Bilby's platforms, translating complex intelligence workflows into clear, actionable interfaces for analysts and decision-makers."
  },
  {
    name: "Pallav Bakshi",
    role: "Infrastructure Engineer",
    photo: "/images/staff/pallav-bakshi.png",
    description: "Manages Bilby's cloud infrastructure and DevOps practices, ensuring high availability, security, and performance across production environments."
  },
  {
    name: "Sam Davenport",
    role: "ML & Quantitative Research",
    photo: "/images/staff/sam-davenport.jpg",
    description: "Develops quantitative models and machine learning systems for Bilby's API products, turning government activity data into structured signals for investors and analysts."
  },
  {
    name: "Satyadev Sarma",
    role: "Head of Data",
    photo: "/images/staff/satya.jpg",
    description: "Leads data strategy and governance, ensuring Bilby's datasets maintain completeness, accuracy, and timeliness across 38+ countries and thousands of sources."
  },
  {
    name: "Abigail Soryal",
    role: "Research Associate",
    photo: "/images/staff/abigail.jpg",
    description: "Supports Bilby's research efforts with policy analysis, data validation, and knowledge graph curation across multiple regions and regulatory domains."
  },
];

const storyItems = [
  "Origins in the Australian desert",
  "Turning academic research into practice",
  "Starting with the hardest problem first",
  "Knowledge graphs as the foundation",
  "Commitment to data and model sovereignty",
  "Scaling specialist knowledge",
  "Data as a signal of our craft"
];

const mediaCards = [
  {
    title: "Medium: Bilby CTO",
    body: "Strategic briefings and global policy analysis for organizations navigating geopolitical shifts.",
    Icon: Article
  },
  {
    title: "The Conversation",
    body: "How to use A.I. in policy analysis while maintaining public trust.",
    Icon: Forum
  },
  {
    title: "Bilby in the media",
    body: "Monthly releases highlighting global government activity, policy sentiment, and market impact.",
    Icon: Campaign
  },
  {
    title: "Public insights",
    body: "Independent research on regulatory risk, sovereign AI, and the signals that shift outcomes.",
    Icon: Lightbulb
  }
];

const faqItems = [
  {
    title: "What types of clients does Bilby serve?",
    body:
      "Bilby works with governments, financial institutions, and enterprises. Our particular specialty is creating unified indexable data from government activity."
  },
  {
    title: "How does Bilby's platform integrate with existing systems?",
    body:
      "Our platforms use universal REST APIs, secure databases and cloud platforms, with encryption both in transit and at rest."
  },
  {
    title: "How customisable are Bilby's solutions?",
    body:
      "Fully customisable, although we also have a range of set products. We co-create platforms using your priority themes and scope expansions dynamically."
  },
  {
    title: "What is the typical timeline for a Bilby project?",
    body:
      "If the data is not already available, projects usually aim for a 5-month rollout. We use agile phases: PoC development, design/integration, testing, deployment, and handover."
  },
  {
    title: "What about data quality and SLAs?",
    body:
      "We guarantee 95% completeness and 99.9% uptime. Analyst-reviewed AI models ensure translation accuracy with clear remediation roadmaps."
  },
  {
    title: "How secure is working with Bilby?",
    body:
      "Security is core: end-to-end encryption, audit trails, role-based access, and hosting on private or managed cloud with disaster recovery."
  },
  {
    title: "How can I get started or request a demo?",
    body:
      "We offer demo access at lite.bilby.ai. For custom proposals, email ryan@bilby.ai with your use case to schedule a call."
  }
];

function StaffSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = staffMembers[activeIndex];

  return (
    <section className="bg-white py-20">
      <StaggerGroup className="mx-auto w-full max-w-6xl px-6 lg:px-10">
        <h3 className="type-display-xl">Leadership Team</h3>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.5fr_1fr]">
          <div className="sticky top-8 self-start border border-default bg-surface-tan px-1.5 pb-1.5 pt-3">
            <div className="relative aspect-[5/6] w-full overflow-hidden border border-default bg-surface-soft">
              <Image
                alt={active.name}
                src={active.photo}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 px-2 pb-2">
              <p className="type-body-13 font-medium text-brand">{active.name}</p>
              <p className="type-mono-10 text-brand-soft">{active.role}</p>
              <p className="type-body-12 mt-2 text-brand-soft leading-[1.5]">
                {active.description}
              </p>
            </div>
          </div>
          <div className="border border-default">
            <div className="divide-y divide-default">
              {staffMembers.map((member, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={member.name}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={cn(
                      "cursor-pointer transition-colors duration-200",
                      isActive && "bg-surface-soft"
                    )}
                  >
                    <div className="type-body-12 grid grid-cols-[0.32fr_0.5fr_0.18fr] items-center gap-3 px-4 py-2.5 text-left text-brand">
                      <span className="type-mono-10 text-brand-soft">{member.role}</span>
                      <span>{member.name}</span>
                      <span className="type-mono-10 text-right text-[rgb(var(--color-brand)/0.6)]">
                        {isActive ? "▾" : "▸"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </StaggerGroup>
    </section>
  );
}

export function AboutPage() {
  return (
    <main className="min-h-dvh bg-surface-muted text-brand">
      <SiteHeader
        logoSrc={imgLogo}
        navItems={aboutNavItems}
        activeLabel="About Bilby"
        navMarkSrc={imgFrame1000003036}
        socialItems={socialItems}
      />

      <section className="relative overflow-hidden bg-surface-muted py-24 text-center">
        <Image
          alt=""
          src={imgImage94}
          fill
          className="object-cover opacity-10"
        />
        <div className="pointer-events-none absolute inset-y-0 inset-x-6 grid grid-cols-4">
          <div className="border-l border-grid" />
          <div className="border-l border-grid" />
          <div className="border-l border-grid" />
          <div className="border-x border-grid" />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-[182px] h-[327px] w-[681px] -translate-x-1/2 rounded-[89px] bg-surface-glow opacity-[0.66] blur-[56px]" />
        <StaggerGroup className="relative">
        <p className="type-display-sm">about</p>
          <Image
            alt=""
            src={imgLogoMark}
            width={295}
            height={82}
            className="mx-auto mt-4"
          />
        </StaggerGroup>
      </section>

      <section className="bg-surface-100 border-t border-black/10">
        <StaggerGroup>
          <div className="mx-auto flex h-[165px] w-full max-w-[1440px] items-center px-6 lg:px-[178px]">
          <h2 className="type-display-xl">
              Technical Info
            </h2>
          </div>
          <div className="relative overflow-hidden bg-surface-panel py-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0.65) 50%, rgba(242,242,242,1) 50%), linear-gradient(rgba(255,255,255,0.65) 50%, rgba(242,242,242,1) 50%)",
                backgroundSize: "180px 180px"
              }}
            />
            <div className="relative mx-auto max-w-[720px] border border-muted bg-white p-10">
              <div className="absolute -left-[13.9px] -top-[13.9px] size-[26.9px] rotate-45">
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-brand" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-brand" />
              </div>
              <div className="absolute -bottom-[13.9px] -right-[13.9px] size-[26.9px] rotate-45">
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-brand" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-brand" />
              </div>
              <div className="space-y-6">
                <p className="type-title text-brand">
                  Technical white paper here
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-20 overflow-hidden rounded-full bg-neutral">
                    <Image alt="Nicolas Le Pallec" src={imgNicolasLePallec} width={80} height={80} className="size-full object-cover" />
                  </div>
                <div className="type-body-15-2">
                    <p className="font-medium text-brand">Nicolas Le Pallec</p>
                    <p className="text-neutral">Head of Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StaggerGroup>
      </section>

      <StaffSection />

      <section className="bg-surface-muted py-20">
        <StaggerGroup className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <p className="type-mono-10 uppercase tracking-wider text-brand-soft">
            Our Story
          </p>
          <h3 className="type-display-lg mt-4">
            From the desert to knowledge graphs
          </h3>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
            <div className="space-y-3">
              {storyItems.map((item, index) => (
                <div
                  key={item}
                  className={cn(
                    "type-body flex items-center gap-3 border-b border-default py-3",
                    index === 0 ? "bg-brand px-3 text-white" : "text-brand"
                  )}
                >
                  <span className="size-2 rounded-full bg-current" />
                  {item}
                </div>
              ))}
            </div>
            <div className="border border-strong bg-surface-subtle p-6">
              <Image
                alt=""
                src={imgImage54}
                width={620}
                height={420}
                className="w-full object-cover"
              />
              <p className="type-body-sm text-body-muted mt-4">
                Bilby began in the Australian desert and evolved into a knowledge-graph
                platform that powers regulatory intelligence at scale.
              </p>
            </div>
          </div>
        </StaggerGroup>
      </section>

      <section className="bg-white py-20">
        <StaggerGroup className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <h3 className="type-title">
            Bilby in the media
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mediaCards.map((card) => (
              <div key={card.title} className="border border-default p-6">
                <card.Icon className="mb-4 size-7 text-brand" />
                <p className="type-body-sm uppercase">
                  {card.title}
                </p>
                <p className="type-body-sm text-body-muted mt-2">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </StaggerGroup>
      </section>

      <section className="bg-white py-20">
        <StaggerGroup className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <h3 className="type-display-xl">FAQ</h3>
          <div className="mt-12 space-y-6">
            {faqItems.map((item) => (
              <div key={item.title}>
                <p className="type-body-13 border-l-4 border-brand pl-3 font-medium">
                  {item.title}
                </p>
                <p className="type-body-13 mt-2 text-brand">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </StaggerGroup>
      </section>

      <section className="bg-surface-muted py-20">
        <StaggerGroup className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.48fr_0.52fr]">
            <div className="relative overflow-hidden border border-default bg-white">
              <div className="h-12 bg-brand" />
              <div
                className="absolute inset-x-0 top-12 h-[62px] opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(121,35,35,0.08) 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }}
              />
              <div
                className="absolute inset-x-0 bottom-0 top-12 opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(121,35,35,0.08) 1px, transparent 1px), linear-gradient(rgba(121,35,35,0.08) 1px, transparent 1px)",
                  backgroundSize: "160px 160px"
                }}
              />
              <div className="relative px-6 py-10">
                <h3 className="type-display-lg">
                  Working at Bilby
                </h3>
              </div>
            </div>
            <div className="space-y-10">
              <div className="relative border border-default bg-white px-8 pb-8 pt-10">
                <div className="absolute left-1/2 top-0 h-6 w-[8px] -translate-x-1/2 bg-brand" />
                <p className="type-mono-11 text-brand-soft text-center">
                  Our Mission
                </p>
                <div className="mt-6 border-t border-default pt-6">
                  <p className="type-display-sm">
                    A Stable, Seamless Early-Signal Infrastructure
                  </p>
                  <p className="type-body-sm text-brand-soft mt-4 leading-[1.45]">
                    The vision is that we improve the world’s decision making.
                    Nearly every decision involves some judgment on government
                    activity. Yet even the most sophisticated investors are
                    blindsided, while governments themselves struggle to make policy
                    in a changing world.
                  </p>
                </div>
              </div>
              <div className="relative border border-default bg-white px-8 pb-8 pt-10">
                <div className="absolute left-0 top-[18px] flex w-full items-center gap-3">
                  <span className="ml-6 h-px flex-1 bg-[rgb(var(--color-border))]" />
                  <span className="type-mono-11 text-brand-soft">
                    Join our team
                  </span>
                  <span className="mr-6 h-px flex-1 bg-[rgb(var(--color-border))]" />
                </div>
                <div className="mt-8">
                  <p className="type-display-sm">
                    Autonomy in Pace, Precision in Delivery
                  </p>
                  <p className="type-body-sm text-brand-soft mt-4 leading-[1.45]">
                    We pick champions. However, we dislike making them punch a clock
                    in and out. You can choose the hours and lifestyle needed to
                    perform at your best and to take charge of tasks to ensure they
                    get done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StaggerGroup>
      </section>
    </main>
  );
}
