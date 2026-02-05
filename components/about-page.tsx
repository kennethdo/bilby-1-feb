"use client";

import Image from "next/image";
import { useState } from "react";
import { Article, Forum, Campaign, Lightbulb } from "@material-symbols-svg/react/w200";

import { cn } from "@/lib/utils";
import { aboutNavItems, mainSocialItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { StaggerGroup } from "@/components/motion-section";

const imgImage94 =
  "/images/4f018b6c-3ed8-4f55-9c56-0d4e9f323480.png";
const imgImage54 =
  "/images/dbf7542b-43cc-4adc-9421-8633cf96b1ed.png";
const imgLogo =
  "/images/2cde171c-b7a5-4670-98d6-a595ab8f6856.svg";
const imgFrame1000003036 =
  "/images/6bda768e-f4a3-4808-b689-6a2d3ee8863f.svg";
const imgLogoMark =
  "/images/679e7fab-03c1-4eac-bd10-7454330705e1.svg";

const staffMembers = [
  {
    name: "Dr. Ryan Manuel",
    role: "Founder and CEO",
    photo: "/images/staff/ryan-manuel.png",
    description: "Dr Ryan Manuel has more than 20 years industry experience; a third-time founder, he previously taught at Oxford, Australian National and Hong Kong universities, and worked for BCG and the Australian government. He holds a doctorate from Oxford, where he was a Rhodes Scholar."
  },
  {
    name: "Dr. Stephen Enright-Ward",
    role: "CTO",
    photo: "/images/staff/stephen-enrightward.jpg",
    description: "Steve has extensive practical experience in NLP-based machine learning algorithms, and more than 10 years postdoctoral industry experience at designing AI systems to extract value from unstructured text. He holds a doctorate from Freiburg in pure mathematics."
  },
  {
    name: "Satyadev Sarma",
    role: "Head of Data",
    photo: "/images/staff/satya.jpg",
    description: "Satyadev is responsible for the data infrastructure at Bilby. He has 10 years of experience working at startups and large tech companies, building data and machine learning driven products. Outside of work, he is an avid gamer and cross country motorcyclist."
  },
  {
    name: "David Lee",
    role: "Head of Product",
    photo: "/images/staff/david-lee.png",
    description: "David, a software engineer-turned product manager at Bilby with 5+ years of experience, enjoys taking ideas all the way to something people rely on. He's motivated by curiosity and high-quality execution."
  },
  {
    name: "Simon Cartledge",
    role: "Head of Research",
    photo: "/images/staff/simon-cartledge.png",
    description: "Simon has lived and worked in Beijing, Hong Kong and other parts of Asia since the 1990s. A former Editor-in-Chief, Asia for the Economist Intelligence Unit, he also ran his own independent research and publishing business, Big Brains, for more than 20 years. Simon has an MA (Hons) degree in politics from the University of Edinburgh."
  },
  {
    name: "Samuel Davenport",
    role: "Senior Machine Learning Engineer",
    photo: "/images/staff/sam-davenport.jpg",
    description: "Machine Learning researcher and quantitative analyst with extensive experience of using statistics, AI, and large language models to extract signal from high dimensional data. He holds a doctorate from the University of Oxford in statistical machine learning."
  },
  {
    name: "Damian Cox",
    role: "Senior Data Engineer",
    photo: "/images/staff/damian-cox.png",
    description: "An accomplished data professional with expertise in data engineering, machine learning, and AI. He is skilled in building scalable systems, advanced data pipelines, and predictive models using Python, SQL, big data, and cloud technologies."
  },
  {
    name: "Pallav Bakshi",
    role: "Senior Data Engineer",
    photo: "/images/staff/pallav-bakshi.png",
    description: "Pallav is a software engineer specialising in AI agents, machine learning, and software architecture, focusing on building systems that combine automation with thoughtful design. With extensive experience across data engineering and cloud infrastructure, he's passionate about creating tools that are impactful for real-world use."
  },
  {
    name: "Harvey Wen",
    role: "Data Scientist",
    photo: "/images/staff/harvey-wen.jpg",
    description: "Harvey works on Quant ML team, training in-house models and analysing large-scale datasets. He specialises in machine learning applications for particle physics. Away from his desk, you'll likely catch him cooking up a steak with Tom Misch on the speakers."
  },
  {
    name: "Carlo Taleon",
    role: "Product Engineer",
    photo: "/images/staff/carlo-taleon.jpeg",
    description: "Carlo is a software engineer who loves building sleek web apps and exploring the latest tech. Outside of work, he's usually out with his trusty camera capturing life and saving memories."
  },
  {
    name: "Hugh Daly",
    role: "US Analyst",
    photo: "/images/staff/hugh-daly.jpeg",
    description: "Hugh is a former senior Congressional aide who can also develop software, models, and data systems from start to finish. He leads our US model development and research."
  },
  {
    name: "Abigail Soryal",
    role: "Senior Analyst",
    photo: "/images/staff/abigail.jpg",
    description: "Abigail leverages policy research experience across the United States, Europe, and Asia to distil complex policy and regulatory systems into solutions that anticipate government action and market impact."
  },
  {
    name: "Jeremy Thompson",
    role: "Senior Analyst",
    photo: "/images/staff/jeremy-thompson.png",
    description: "Jeremy works on both the research and business side of things. You'll most likely see him with a craft beer in hand after work, he also runs a beer distribution business."
  },
  {
    name: "Marco Law",
    role: "Analyst",
    photo: "/images/staff/marco-law.png",
    description: "Marco has a background in international relations and enjoys making sense of how global political systems function. Along the way, he has accumulated a wide range of knowledge about the world, not all of it equally useful."
  },
  {
    name: "Nik Takano",
    role: "Administrative Assistant",
    photo: "/images/staff/nik-takano.png",
    description: "Nik is our administrative person who supports our executives in office needs and admin work. Loves to travel and do outdoor activities."
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
        <h3 className="type-display-xl">Staff</h3>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.5fr_1fr]">
          {/* Mobile: Show selected staff card above the list */}
          <div className="order-1 border border-default bg-surface-tan px-1.5 pb-1.5 pt-3 lg:sticky lg:top-8 lg:order-none lg:self-start">
            <div className="relative aspect-[5/6] w-full max-w-[300px] overflow-hidden border border-default bg-surface-soft lg:max-w-none">
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
              <p className="type-body-12 mt-2 leading-[1.5] text-brand-soft">
                {active.description}
              </p>
            </div>
          </div>
          {/* Staff list */}
          <div className="order-2 border border-default lg:order-none">
            <div className="divide-y divide-default">
              {staffMembers.map((member, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={member.name}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "cursor-pointer transition-colors duration-200",
                      isActive && "bg-surface-soft"
                    )}
                  >
                    <div className="type-body-12 grid grid-cols-[0.4fr_0.5fr_0.1fr] items-center gap-2 px-3 py-2.5 text-left text-brand sm:grid-cols-[0.32fr_0.5fr_0.18fr] sm:gap-3 sm:px-4">
                      <span className="type-mono-10 truncate text-brand-soft">{member.role}</span>
                      <span className="truncate">{member.name}</span>
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
        socialItems={mainSocialItems}
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
                    <Image alt="Dr. Stephen Enright-Ward" src="/images/staff/stephen-enrightward.jpg" width={80} height={80} className="size-full object-cover" />
                  </div>
                <div className="type-body-15-2">
                    <p className="font-medium text-brand">Dr. Stephen Enright-Ward</p>
                    <p className="text-neutral">CTO</p>
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
