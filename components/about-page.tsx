import Image from "next/image";

import { aboutNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { StaggerGroup } from "@/components/motion-section";

const imgImage94 =
  "https://www.figma.com/api/mcp/asset/8901d988-0d16-4fd1-b22e-f71e99559a27";
const imgImage85 =
  "https://www.figma.com/api/mcp/asset/e728b899-ab82-494c-a84a-b14a5c3f2886";
const imgImage54 =
  "https://www.figma.com/api/mcp/asset/e8881b6b-96d9-4d94-98d8-2944be5a799a";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/f17bc58d-ee2d-4536-9187-b4b24c66bb42";
const imgFrame1000003036 =
  "https://www.figma.com/api/mcp/asset/89cb49a5-88dd-43fc-b1db-340d09dda8ee";
const imgSocialLinkedIn =
  "https://www.figma.com/api/mcp/asset/20b0570e-94e4-4c3c-ab30-8777a5117611";
const imgSocialX =
  "https://www.figma.com/api/mcp/asset/bcd903a8-1be1-403b-9dac-7853960abcd9";
const imgSocialYoutube =
  "https://www.figma.com/api/mcp/asset/f248d417-479a-4819-9d49-6bea55e6373d";
const imgSocialInstagram =
  "https://www.figma.com/api/mcp/asset/a8d214b0-59fa-40c7-953b-64bbb91e51a8";
const imgSocialGithub =
  "https://www.figma.com/api/mcp/asset/251809b3-e349-4847-aa59-6a07331505a1";
const imgLogoMark =
  "https://www.figma.com/api/mcp/asset/6d000397-6a2d-4bfa-81e8-33120de5b58a";

const socialItems = [
  { label: "LinkedIn", icon: imgSocialLinkedIn, href: "#" },
  { label: "X", icon: imgSocialX, href: "#" },
  { label: "YouTube", icon: imgSocialYoutube, href: "#" },
  { label: "Instagram", icon: imgSocialInstagram, href: "#" },
  { label: "GitHub", icon: imgSocialGithub, href: "#" }
];

const staffRows = [
  { role: "Chief Technology Officer", name: "Dr. Steve Enright-Ward" },
  { role: "Chief Technology Officer", name: "Dr. Anya Sharma, PhD" },
  { role: "Chief Technology Officer", name: "Data Innovation Lead" },
  { role: "Chief Technology Officer", name: "Lead Systems Engineer" },
  { role: "Chief Technology Officer", name: "Global Sales Director" },
  { role: "Chief Technology Officer", name: "Marketing Lead" },
  { role: "Chief Technology Officer", name: "Community Outreach" },
  { role: "Chief Technology Officer", name: "Budget Management" },
  { role: "Chief Technology Officer", name: "Risk Management" },
  { role: "Chief Technology Officer", name: "Recruiting Manager" }
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
    body: "Strategic briefings and global policy analysis for organizations navigating geopolitical shifts."
  },
  {
    title: "The Conversation",
    body: "How to use A.I. in policy analysis while maintaining public trust."
  },
  {
    title: "Bilby in the media",
    body: "Monthly releases highlighting global government activity, policy sentiment, and market impact."
  },
  {
    title: "Public insights",
    body: "Independent research on regulatory risk, sovereign AI, and the signals that shift outcomes."
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
                  <div className="size-20 overflow-hidden rounded-full bg-neutral" />
                <div className="type-body-15-2">
                    <p className="font-medium text-brand">Name</p>
                    <p className="text-neutral">Title</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StaggerGroup>
      </section>

      <section className="bg-white py-20">
        <StaggerGroup className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <h3 className="type-display-xl">
            Staff
          </h3>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.5fr_1fr]">
            <div className="border border-default bg-surface-tan px-1.5 pb-1.5 pt-3">
              <Image
                alt=""
                src={imgImage85}
                width={378}
                height={456}
                className="w-full border border-default object-cover"
              />
            </div>
            <div className="border border-default">
              <div className="grid grid-cols-[0.32fr_0.5fr_0.18fr] items-center gap-3 bg-brand px-4 py-3 text-white">
                <div className="type-mono-10 text-white/80">
                  Leadership team
                </div>
                <div className="type-body-13">Dr. Ryan Manuel</div>
                <div className="type-mono-10 text-right text-white/70">
                  Info
                </div>
              </div>
              <div className="type-body-12 border-b border-default px-4 py-4 text-brand-soft">
                Dr Ryan Manuel has more than 20 years industry experience in third‑intelligence
                consulting. He previously taught at Oxford, Australian National and Hong Kong
                universities, and worked for BCG and the Australian Government.
              </div>
              <div className="type-mono-10 grid grid-cols-[0.32fr_0.5fr_0.18fr] items-center gap-3 border-b border-default px-4 py-2 text-brand-soft">
                <span>Role</span>
                <span>Name</span>
                <span className="text-right">Type</span>
              </div>
              <div className="divide-y divide-default">
                {staffRows.map((row) => (
                  <div
                    key={`${row.role}-${row.name}`}
                    className="type-body-12 grid grid-cols-[0.32fr_0.5fr_0.18fr] items-center gap-3 px-4 py-2 text-brand"
                  >
                    <span className="type-mono-10 text-brand-soft">
                      {row.role}
                    </span>
                    <span>{row.name}</span>
                    <span className="type-mono-10 flex items-center justify-end gap-2 text-[rgb(var(--color-brand)/0.6)]">
                      Info
                      <span aria-hidden className="type-body-12 text-[rgb(var(--color-brand)/0.6)]">
                        +
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StaggerGroup>
      </section>

      <section className="bg-surface-muted py-20">
        <StaggerGroup className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <h3 className="type-display-lg">
            From the desert to knowledge graphs
          </h3>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
            <div className="space-y-3">
              {storyItems.map((item, index) => (
                <div
                  key={item}
                  className={`type-body flex items-center gap-3 border-b border-default py-3 ${
                    index === 0
                      ? "bg-brand px-3 text-white"
                      : "text-brand"
                  }`}
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
                <div className="mb-4 h-10 w-10 bg-brand" />
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
