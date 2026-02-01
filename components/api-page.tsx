import Image from "next/image";
import { Fragment } from "react";
import { ArrowForward } from "@material-symbols-svg/react/w200";

import { mainNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";

const imgImage74 =
  "/images/c225e380-036f-45fa-a4c0-7b3f6ef8ec08.png";
const imgImage70 =
  "/images/283877e0-f40f-48e8-873d-543f98af2805.png";
const imgImage71 =
  "/images/4a65e711-0c35-4cb4-8a07-c396f753b2fd.png";
const imgImage72 =
  "/images/574b3c93-0cc9-4eca-8ca4-81c6a2616a99.png";
const imgImage64 =
  "/images/6d7c137d-5427-44ca-84ef-379edd30d201.png";
const imgLogo =
  "/images/b1dbab26-152b-49de-ac27-031f6e000f54.svg";
const imgFrame1000003036 =
  "/images/28916180-53d0-4638-a846-286663537ec5.svg";
const imgSocialLinkedIn =
  "/images/4374f9b5-1d9e-44a8-b081-095895078451.svg";
const imgSocialX =
  "/images/e224db60-16be-434c-b8a0-157281dd644e.svg";
const imgSocialYoutube =
  "/images/f6461b13-87fa-4030-a5b1-18cba424c36e.svg";
const imgSocialInstagram =
  "/images/297195da-c6fc-4ba9-82d3-c42eeb393e53.svg";
const imgSocialGithub =
  "/images/857f5a37-e785-4a65-8b5d-88ebdd21e617.svg";
const imgFrame1000002931 =
  "/images/e20088b6-e8ab-4649-b019-b8d52fe5c0b8.svg";
const imgVector35 =
  "/images/f8682abd-ba73-45a6-aad3-321798892d57.svg";
const imgVector =
  "/images/3abfe70d-d3d6-47a2-ad04-52c40e5d53e6.svg";
const imgVector1 =
  "/images/99c72d0f-6fbd-423d-b9da-e158065b6643.svg";

const socialItems = [
  { label: "LinkedIn", icon: imgSocialLinkedIn, href: "#" },
  { label: "X", icon: imgSocialX, href: "#" },
  { label: "YouTube", icon: imgSocialYoutube, href: "#" },
  { label: "Instagram", icon: imgSocialInstagram, href: "#" },
  { label: "GitHub", icon: imgSocialGithub, href: "#" }
];

const sources = [
  {
    title: "Official government sources",
    image: imgImage70
  },
  {
    title: "Newspapers",
    image: imgImage71
  },
  {
    title: "Reports from Ministries",
    image: imgImage72
  }
];

const features = [
  {
    title: "Sentiment scores",
    body:
      "Scores indicating the importance of the document, based on the people or organizations that publish it"
  },
  {
    title: "Maturity scores",
    body:
      "Scores indicating the maturity of the document (how close the document is to be translated into official government policy)"
  }
];

export function ApiPage() {
  return (
    <main className="min-h-dvh bg-surface-muted text-brand">
      <SiteHeader
        logoSrc={imgLogo}
        navItems={mainNavItems}
        activeLabel="API"
        navMarkSrc={imgFrame1000003036}
        socialItems={socialItems}
      />

      <div className="type-body-sm bg-brand p-2.5 text-center uppercase leading-[1.28] text-white">
        For more info on our quant product, please visit{" "}
        <span className="underline">Enceladus</span>
      </div>

      <MotionSection className="mx-auto w-full max-w-[1440px] px-4 py-10 lg:py-6">
        <StaggerGroup>
        <div className="relative flex min-h-[760px] items-center overflow-hidden rounded-[8px] bg-white">
          <Image
            alt=""
            src={imgFrame1000002931}
            width={952}
            height={777}
            className="pointer-events-none absolute left-[248px] top-[442px] w-[952px] -translate-y-1/2 opacity-70"
          />
          <div className="pointer-events-none absolute left-1/2 top-[calc(50%-32px)] h-[404px] w-[1062px] -translate-x-1/2 rounded-[181px] bg-white opacity-60 blur-[50px]" />
          <div className="relative mx-auto flex max-w-[944px] flex-col items-center gap-8 px-6 text-center">
            <div className="type-mono-xs inline-flex items-center gap-1.5 border border-brand border-b-[1px] border-l-[0.5px] border-r-[0.5px] border-t-[0.5px] px-2 pb-1.5 pt-1">
              <span className="size-[3px] rounded-[1px] bg-brand" />
              AI-OS for governments
            </div>
            <h1 className="type-display-hero-xl font-normal">
              Bilby is the world’s best source of marked up government data. We
              provide this using an API.
            </h1>
            <p className="type-body-sm max-w-[510px] leading-[1.4] lg:leading-[1.2]">
              Our API is an alternative data stream, designed to help quantify
              risk arising from political decisions. The quantitative signals it
              serves are algorithmically distilled from Bilby’s constantly-updated
              database of official policy documents.
            </p>
          </div>
        </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="bg-brand text-white">
        <StaggerGroup>
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-[71px] lg:py-[135px]">
          <div className="space-y-6">
            <h2 className="type-display-md sm:type-display-lg max-w-[684px] font-normal">
              Bilby’s data quantifies government activity and produces early
              signals on policy change.
            </h2>
            <div className="type-body-15 space-y-4 leading-[1.3] text-white/90 lg:leading-[1.2]">
              <div className="flex max-w-[413px] gap-[10px]">
                <div className="w-[3px] bg-white" />
                <p>
                  This structured data ranges back to 2017, and is updated several
                  times per day. It includes measures of sentiment, political
                  importance and policy development maturity.
                </p>
              </div>
              <div className="flex max-w-[413px] gap-[10px]">
                <div className="w-[3px] bg-white" />
                <p>
                  This benefits anyone who needs a consistent, quantified signal
                  capturing emerging policy risk. For example: investors, government
                  analysts and policymakers, or corporations with government
                  exposure.
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <Image alt="" src={imgImage74} fill className="object-cover" />
          </div>
        </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="mx-auto w-full max-w-[1440px] px-6 py-24 lg:px-[25px] lg:py-[157px]">
        <StaggerGroup>
        <div className="mx-auto max-w-[1084px] border border-brand-subtle px-5 py-8">
          <div className="type-mono-19 text-center">
            The raw data comes from a range of sources, all publicly available:
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start">
            {sources.map((item, index) => (
              <Fragment key={item.title}>
                <div className="space-y-4 text-center">
                  <Image
                    alt=""
                    src={item.image}
                    width={294}
                    height={294}
                    className="mx-auto h-[294px] w-[294px] object-cover"
                  />
                  <div className="type-display-22">
                    {item.title}
                  </div>
                  <button className="type-mono-10-2 border border-muted px-5 py-2.5">
                    Learn more <ArrowForward className="ml-1 inline-block size-3.5" />
                  </button>
                </div>
                {index < sources.length - 1 ? (
                  <div className="hidden h-full items-center justify-center lg:flex">
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
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="mx-auto w-full max-w-[1440px] px-6 py-24 lg:px-[71px] lg:py-[185px]">
        <StaggerGroup>
        <div className="grid gap-[108px] lg:grid-cols-[1.2fr_0.8fr]">
          <h3 className="type-display-md sm:type-display-lg font-normal">
            Bilby enriches the data with a machine learning pipeline that extracts
            the following information:
          </h3>
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <p className="type-display-22">{feature.title}</p>
                <div className="flex gap-[10px]">
                  <div className="w-[3px] bg-brand" />
                  <p className="type-body-15 leading-[1.2]">
                    {feature.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-white py-20">
        <StaggerGroup>
        <div className="absolute inset-0">
          <Image alt="" src={imgImage64} fill className="object-cover opacity-80" />
        </div>
        <div className="relative mx-auto max-w-[1155px] text-center">
          <div className="type-display-22">APCO</div>
          <p className="type-display-md sm:type-display-lg mt-6 font-normal">
            We switched to Bilby as it was the richest, most complete data source
            on what governments do
          </p>
          <Image
            alt=""
            src={imgVector}
            width={14}
            height={14}
            className="absolute left-[86px] top-[244px] rotate-45"
          />
          <Image
            alt=""
            src={imgVector}
            width={14}
            height={14}
            className="absolute right-[-118px] top-[337px] rotate-45"
          />
          <Image
            alt=""
            src={imgVector1}
            width={12}
            height={12}
            className="absolute left-1/2 top-[472px] -translate-x-1/2 rotate-90"
          />
        </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-white py-20">
        <StaggerGroup>
        <div className="absolute inset-0">
          <Image alt="" src={imgImage64} fill className="object-cover opacity-80" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="type-body-lg">Ewan Smith</div>
          <p className="type-display-md mt-6 leading-[1.1]">
            We remain astounded by the speed and scope of what Bilby provides us
            every day
          </p>
          <Image
            alt=""
            src={imgVector1}
            width={12}
            height={12}
            className="absolute left-10 top-10 rotate-45"
          />
          <Image
            alt=""
            src={imgVector1}
            width={12}
            height={12}
            className="absolute right-10 bottom-6 rotate-45"
          />
        </div>
        </StaggerGroup>
      </MotionSection>
    </main>
  );
}
