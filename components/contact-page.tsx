import Image from "next/image";

import { mainNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";

const imgImage87 =
  "https://www.figma.com/api/mcp/asset/60beb769-6266-47b1-a593-3a8518e945ce";
const imgImage70 =
  "https://www.figma.com/api/mcp/asset/23b5dc5e-91bb-48dc-b772-e743a0528058";
const imgImage71 =
  "https://www.figma.com/api/mcp/asset/ad327266-19fd-4ab3-8848-512b461b1e5e";
const imgImage72 =
  "https://www.figma.com/api/mcp/asset/04b21005-97db-4436-b839-6db8304cf2f8";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/844ad919-6ee0-4d5b-ae4e-f4e7ad9cab8e";
const imgFrame1000003036 =
  "https://www.figma.com/api/mcp/asset/44a14399-2a06-4e2c-b653-fb0e3fe11c0a";
const imgSocialLinkedIn =
  "https://www.figma.com/api/mcp/asset/08733609-823d-4df3-920e-ef17589670bb";
const imgSocialX =
  "https://www.figma.com/api/mcp/asset/19aa1068-d738-41db-ae0b-c25e3ece2270";
const imgSocialYoutube =
  "https://www.figma.com/api/mcp/asset/4ae56a0a-f8c1-4c67-aaad-d7625dcc5049";
const imgSocialInstagram =
  "https://www.figma.com/api/mcp/asset/8d586a7c-16e6-4cac-b818-90bd0c2bc613";
const imgSocialGithub =
  "https://www.figma.com/api/mcp/asset/d5e46145-2ab9-410c-9a6b-d94865f1f46b";

const socialItems = [
  { label: "LinkedIn", icon: imgSocialLinkedIn, href: "#" },
  { label: "X", icon: imgSocialX, href: "#" },
  { label: "YouTube", icon: imgSocialYoutube, href: "#" },
  { label: "Instagram", icon: imgSocialInstagram, href: "#" },
  { label: "GitHub", icon: imgSocialGithub, href: "#" }
];

const steps = [
  {
    number: "1",
    title: "Initial Consultation (5 min)",
    body: "Immediate response with relevant materials and industry-specific case studies",
    image: imgImage70
  },
  {
    number: "2",
    title: "Expert Discussion (24h)",
    body: "Detailed conversation with our specialists about your specific requirements",
    image: imgImage71
  },
  {
    number: "3",
    title: "Custom Demonstration (48h)",
    body: "Tailored demo showcasing solutions relevant to your industry and use cases",
    image: imgImage72
  }
];

export function ContactPage() {
  return (
    <main className="min-h-dvh bg-surface-muted text-brand">
      <SiteHeader
        logoSrc={imgLogo}
        navItems={mainNavItems}
        activeLabel="Contact us"
        navMarkSrc={imgFrame1000003036}
        socialItems={socialItems}
      />

      <MotionSection className="relative overflow-hidden bg-surface-muted">
        <StaggerGroup>
        <Image
          alt=""
          src={imgImage87}
          fill
          className="object-cover opacity-5"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 lg:px-10">
          <div className="type-mono-xs inline-flex items-center gap-2 border border-brand px-3 py-2">
            <span className="size-1 rounded-[1px] bg-brand" />
            Contact
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <h1 className="type-display-hero-xl font-normal">
              Start Your Intelligence Transformation
            </h1>
            <p className="type-body-sm">
              Connect with our specialists to explore how Bilby can enhance your
              government intelligence capabilities.
            </p>
          </div>
        </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="border border-soft bg-surface-muted py-24">
        <StaggerGroup className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <p className="type-mono-xs text-brand-rose">
            What to Expect
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border border-brand-subtle bg-surface-light p-6 text-center"
              >
                <div className="type-mono-64-tight">
                  {step.number}
                </div>
                <Image
                  alt=""
                  src={step.image}
                  width={294}
                  height={294}
                  className="mx-auto h-[240px] w-[240px] object-cover lg:h-[250px] lg:w-[250px]"
                />
                <p className="type-body mt-4 uppercase">
                  {step.title}
                </p>
                <p className="type-body-sm mt-2">{step.body}</p>
              </div>
            ))}
          </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="bg-surface-soft py-20">
        <StaggerGroup className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <form className="space-y-8">
            <h2 className="type-display-lg font-normal text-brand">
              Request Consultation
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="type-mono-xs block text-brand-deep" htmlFor="contact-name">
                  Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  className="type-body text-brand-strong-soft w-full border border-default bg-white px-6 py-5"
                  placeholder="John Anderson"
                />
              </div>
              <div className="space-y-2">
                <label className="type-mono-xs block text-brand-deep" htmlFor="contact-email">
                  Work Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  required
                  className="type-body text-brand-strong-soft w-full border border-default bg-white px-6 py-5"
                  placeholder="john.anderson@gmail.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="type-mono-xs block text-brand-deep" htmlFor="contact-phone">
                  Phone Number (Optional, if you want contact via WhatsApp)
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  autoComplete="tel"
                  className="type-body text-brand-strong-soft w-full border border-default bg-white px-6 py-5"
                  placeholder="General Inquiry"
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <label className="type-mono-xs block text-brand-deep" htmlFor="contact-interest">
                  Interest (Optional Topic/Domain)
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  className="type-body text-brand-strong-soft w-full border border-default bg-white px-6 py-5"
                >
                  <option>Select Your industry/need</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="type-mono-xs block text-brand-deep" htmlFor="contact-message">
                  Message → Directly to our mail inbox/sales inbox?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="type-body text-brand-strong-soft w-full border border-default bg-white px-6 py-5"
                  placeholder="Describe your government intelligence needs or regulatory challenges"
                  rows={4}
                />
              </div>
            </div>
            <button className="type-mono-xs w-full bg-brand px-6 py-5 text-white">
              Submit Inquiry
            </button>
            <p className="type-mono-10 text-brand">
              Enterprise-grade security and confidentiality guarantees
            </p>
          </form>
          <div className="space-y-6">
            <div className="border border-default bg-white p-6">
              <div className="type-mono-xs mb-4 inline-block bg-brand px-3 py-1.5 text-white">
                Trusted by Global Leaders
              </div>
              <div className="type-body-sm text-body-muted mt-4 space-y-3 leading-[1.4]">
                <div>
                  <p className="font-semibold">Government Clients</p>
                  <p>Ministry of Communications, 4.5M USD Malaysia contract, Multi-country deployments</p>
                </div>
                <div>
                  <p className="font-semibold">Enterprise Clients</p>
                  <p>Fortune 500 companies, Global pharmaceutical giants, Major financial institutions</p>
                </div>
              </div>
            </div>
            <div className="border border-default bg-white p-6">
              <div className="type-mono-xs mb-4 inline-block bg-brand px-3 py-1.5 text-white">
                Direct Contact
              </div>
              <div className="type-body-sm text-body-muted mt-4 space-y-3 leading-[1.4]">
                <div>
                  <p className="font-semibold">Enterprise Inquiries</p>
                  <p>accounts@bilby.ai</p>
                </div>
                <div>
                  <p className="font-semibold">Office Address</p>
                  <p>Global Offices: New York | Hong Kong</p>
                </div>
              </div>
            </div>
            <div className="border border-default bg-white p-6">
              <div className="type-mono-xs mb-4 inline-block bg-brand px-3 py-1.5 text-white">
                Data Security
              </div>
              <p className="type-body-sm text-body-muted mt-4 leading-[1.4]">
                All inquiries are processed through secure channels with enterprise-grade encryption. Your information is handled according to strict confidentiality protocols.
              </p>
            </div>
            <div className="type-mono-xs text-body-muted pt-4">
              <p className="mb-2">Professional Networks</p>
              <p>LinkedIn | Industry/Publications</p>
            </div>
          </div>
        </StaggerGroup>
      </MotionSection>
    </main>
  );
}
