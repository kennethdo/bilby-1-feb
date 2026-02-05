"use client";

import Image from "next/image";
import { KeyboardArrowDown } from "@material-symbols-svg/react/w200";

import { cn } from "@/lib/utils";
import { mainNavItems, mainSocialItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";
import { Chip } from "@/components/ui/chip";

// =============================================================================
// Assets
// =============================================================================

const imgImage87 = "/images/68eb3c09-e865-4a96-8aec-1161b2a8b58e.png";
// What to Expect images (same as Scanning page Features)
const imgImage70 = "/images/6e8b048f-f809-476c-a049-271dbb6c2f0b.png";
const imgImage71 = "/images/b746bc6e-2feb-460a-a8df-65d72312479f.png";
const imgImage72 = "/images/7312bc62-24a8-4dbc-b521-15c042199d32.png";
const imgLogo = "/images/6e2db4b3-97b3-4cca-96fb-7247f351965d.svg";
const imgFrame1000003036 = "/images/f7f9d860-7413-465b-a1a4-fbb795ab9467.svg";

// =============================================================================
// Data
// =============================================================================

const expectSteps = [
  {
    number: "1",
    title: "Initial Consultation (5 min)",
    body: "Immediate response with relevant materials and industry-specific case studies",
    image: imgImage70
  },
  {
    number: "2",
    title: "Expert Discussion (24h)",
    body: "Dedicated conversation with our specialists about your specific requirements",
    image: imgImage71
  },
  {
    number: "3",
    title: "Custom Demonstration (48h)",
    body: "Tailored demo showcasing solutions relevant to your industry and use cases",
    image: imgImage72
  }
];

// =============================================================================
// Form Components
// =============================================================================

interface FormFieldProps {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
}

function FormField({ label, id, required, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="type-mono-xs block text-[#71171b]" htmlFor={id}>
        {label}
        {required && " *"}
      </label>
      {children}
    </div>
  );
}

const inputStyles =
  "type-body w-full bg-white px-6 py-5 text-brand-strong placeholder:text-brand-strong/30 outline-none ring-brand-strong/20 transition-shadow focus:ring-2";

// =============================================================================
// Glass Card Components
// =============================================================================

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "space-y-12 border border-[#97353b]/5 bg-white/40 px-6 py-7 backdrop-blur-[9px]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface InfoBlockProps {
  title: string;
  children: React.ReactNode;
}

function InfoBlock({ title, children }: InfoBlockProps) {
  return (
    <div className="space-y-1.5">
      <p className="type-mono-xs">{title}</p>
      <p className="type-body-sm leading-[1.2]">{children}</p>
    </div>
  );
}

// =============================================================================
// Section Components
// =============================================================================

function HeroSection() {
  return (
    <MotionSection className="relative overflow-hidden bg-[#f2f2f2]">
      <Image
        alt=""
        src={imgImage87}
        fill
        className="object-cover opacity-5"
        priority
      />
      {/* Background vertical lines */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto flex max-w-[1232px] gap-2 px-[106px]"
        aria-hidden
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "min-h-full flex-1 border-l border-black/10",
              i === 3 && "border-r"
            )}
          />
        ))}
      </div>

      <StaggerGroup className="relative mx-auto flex min-h-[756px] w-full max-w-[1440px] flex-col items-start justify-end gap-4 px-6 pb-10 pt-[200px] lg:px-[107px]">
        <Chip>Contact Us</Chip>
        <div className="grid w-full gap-8 lg:grid-cols-[1fr_337px] lg:items-end">
          <h1 className="type-display-hero-xl font-normal text-brand-strong">
            Start Your
            <br />
            Intelligence Transformation
          </h1>
          <div className="max-w-[280px] py-1 lg:justify-self-end">
            <p className="type-body-sm leading-[1.2] text-brand-strong">
              Connect with our specialists to explore how Bilby can enhance your
              government intelligence capabilities.
            </p>
          </div>
        </div>
      </StaggerGroup>
    </MotionSection>
  );
}

function WhatToExpectSection() {
  return (
    <MotionSection className="border border-[#dcdcdc] bg-[#f2f2f2]">
      <StaggerGroup className="mx-auto w-full max-w-[1440px] space-y-4 px-6 py-[140px] lg:px-[106px]">
        <p className="type-mono-xs text-[#97353b]">What to Expect</p>
        <div className="grid gap-px md:grid-cols-3">
          {expectSteps.map((step) => (
            <article
              key={step.number}
              className="flex flex-col items-start gap-12 border border-brand-strong/20 bg-[#f9f9f9] px-6 pb-[68px] pt-7"
            >
              <p
                className="w-full text-[74px] font-extralight leading-[0.88] tracking-[-0.04em] text-brand-strong"
                style={{ fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif" }}
              >
                {step.number}
              </p>
              <div className="relative mx-auto size-[294px]">
                <Image alt="" src={step.image} fill className="object-cover" />
              </div>
              <div className="w-full max-w-[320px] space-y-2">
                <h3 className="type-body font-normal uppercase tracking-[-0.96px] text-brand-strong">
                  {step.title}
                </h3>
                <p className="type-body-sm leading-[1.2] text-brand-strong">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </StaggerGroup>
    </MotionSection>
  );
}

function ContactForm() {
  return (
    <div className="w-full max-w-[661px] pr-0 lg:pr-[25px]">
      <div className="space-y-8">
        <h2 className="type-display-lg font-normal text-brand-strong">
          Request Consultation
        </h2>
        <form className="space-y-8">
          <div className="space-y-6">
            <FormField label="Name" id="contact-name" required>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                className={inputStyles}
                placeholder="John Anderson"
              />
            </FormField>

            <div className="grid gap-2 md:grid-cols-2">
              <FormField label="Work Email" id="contact-email" required>
                <input
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  required
                  type="email"
                  className={inputStyles}
                  placeholder="john.anderson@gmail.com"
                />
              </FormField>

              <FormField label="Interest (optional dropdown)" id="contact-interest">
                <div className="relative">
                  <select
                    id="contact-interest"
                    name="interest"
                    className={cn(inputStyles, "appearance-none pr-12")}
                  >
                    <option>Select Your Industry/Need</option>
                    <option>Government</option>
                    <option>Financial Services</option>
                    <option>Healthcare</option>
                    <option>Technology</option>
                    <option>Other</option>
                  </select>
                  <KeyboardArrowDown
                    className="pointer-events-none absolute right-6 top-1/2 size-4 -translate-y-1/2 text-brand-strong/50"
                    aria-hidden
                  />
                </div>
              </FormField>
            </div>

            <FormField
              label="Phone number (optional, if you want contact on WhatsApp)"
              id="contact-phone"
            >
              <input
                id="contact-phone"
                name="phone"
                autoComplete="tel"
                type="tel"
                className={inputStyles}
                placeholder="+1 (555) 000-0000"
              />
            </FormField>

            <FormField label="Message" id="contact-message">
              <textarea
                id="contact-message"
                name="message"
                className={cn(inputStyles, "min-h-[168px] resize-none")}
                placeholder="Describe your government intelligence needs or regulatory challenges"
              />
            </FormField>
          </div>

          <div className="space-y-[18px] text-center">
            <button
              type="submit"
              className="type-mono-xs w-full bg-[#84181f] px-[18px] py-[18px] text-white transition-opacity hover:opacity-90"
            >
              Submit Inquiry
            </button>
            <p className="type-mono-xs text-brand-strong">
              Enterprise-grade security and confidentiality guaranteed
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function InfoCards() {
  return (
    <div className="flex flex-1 items-center justify-center px-5 py-12 lg:py-0">
      <div className="w-full max-w-[556px] space-y-px">
        {/* Clients Card */}
        <GlassCard className="min-h-[200px] sm:min-h-[278px]">
          <Chip>Trusted by Global Leaders</Chip>
          <div className="grid grid-cols-1 gap-6 text-[#84181f] sm:grid-cols-2 sm:gap-[22px]">
            <InfoBlock title="Government Clients">
              Ministry of Communications
              <br />
              4.3M USD Malaysia contract
              <br />
              Multi-country deployments
            </InfoBlock>
            <InfoBlock title="Enterprise Clients">
              Fortune 500 companies
              <br />
              Global pharmaceutical giants
              <br />
              Major financial institutions
            </InfoBlock>
          </div>
        </GlassCard>

        {/* Contact & Security Row */}
        <div className="flex flex-col gap-px sm:flex-row">
          <GlassCard className="min-h-[280px] sm:min-h-[396px] sm:w-[280px] sm:shrink-0">
            <Chip>Direct Contact</Chip>
            <div className="space-y-6 text-[#84181f] sm:space-y-[42px]">
              <InfoBlock title="Enterprise Inquiries:">
                accounts@bilby.ai
              </InfoBlock>
              <InfoBlock title="Office address">
                Global Offices: New York | Hong Kong
              </InfoBlock>
              <InfoBlock title="Professional Networks:">
                LinkedIn | Industry Publications
              </InfoBlock>
            </div>
          </GlassCard>

          <GlassCard className="min-h-[200px] flex-1 sm:min-h-[396px]">
            <Chip>Data Security</Chip>
            <p className="type-body-sm leading-[1.2] text-[#84181f] sm:max-w-[320px]">
              All inquiries are processed through secure channels with
              enterprise-grade encryption. Your information is handled according
              to strict confidentiality protocols.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function ContactFormSection() {
  return (
    <MotionSection className="relative overflow-hidden bg-[#f0f4f8]">
      {/* Background blur */}
      <div
        className="pointer-events-none absolute left-[76px] top-[97px] h-[766px] w-[1302px] rounded-[140px] bg-[#f0f4f8] blur-[59px]"
        aria-hidden
      />

      <StaggerGroup className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-px px-6 py-[120px] lg:flex-row lg:pl-[106px] lg:pr-0">
        <ContactForm />
        <InfoCards />
      </StaggerGroup>
    </MotionSection>
  );
}

// =============================================================================
// Main Page Component
// =============================================================================

export function ContactPage() {
  return (
    <main className="min-h-dvh bg-[#f2f2f2] text-brand">
      <SiteHeader
        logoSrc={imgLogo}
        navItems={mainNavItems}
        activeLabel="Contact us"
        navMarkSrc={imgFrame1000003036}
        socialItems={mainSocialItems}
      />
      <HeroSection />
      <WhatToExpectSection />
      <ContactFormSection />
    </main>
  );
}
