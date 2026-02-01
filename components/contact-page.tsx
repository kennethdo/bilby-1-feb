import Image from "next/image";

import { mainNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";

const imgImage87 =
  "/images/68eb3c09-e865-4a96-8aec-1161b2a8b58e.png";
const imgImage70 =
  "/images/e6155f21-95f9-4a22-a051-a43773b7e1c6.png";
const imgImage71 =
  "/images/0a0910b3-36ef-4bfc-926f-9fd6227f4323.png";
const imgImage72 =
  "/images/601f00a9-e7c5-4c86-89f1-39c3ce8b4b08.png";
const imgLogo =
  "/images/6e2db4b3-97b3-4cca-96fb-7247f351965d.svg";
const imgFrame1000003036 =
  "/images/f7f9d860-7413-465b-a1a4-fbb795ab9467.svg";
const imgSocialLinkedIn =
  "/images/f3ecaebd-6e20-45bf-a8da-4efb22f5be75.svg";
const imgSocialX =
  "/images/f03e6f82-7350-4c2b-b9e9-880cc5e9ab07.svg";
const imgSocialYoutube =
  "/images/3c45554e-ff6e-4a93-94fa-49fce0695f11.svg";
const imgSocialInstagram =
  "/images/b4ce07aa-8739-44e3-9e0c-c6738ff0f17e.svg";
const imgSocialGithub =
  "/images/07478871-4e0d-4c6d-a1cb-c0b42a90d1e5.svg";

const socialItems = [
  { label: "LinkedIn", icon: imgSocialLinkedIn, href: "#" },
  { label: "X", icon: imgSocialX, href: "#" },
  { label: "YouTube", icon: imgSocialYoutube, href: "#" },
  { label: "Instagram", icon: imgSocialInstagram, href: "#" },
  { label: "GitHub", icon: imgSocialGithub, href: "#" }
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
