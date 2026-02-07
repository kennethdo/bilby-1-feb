"use client";

import Image from "next/image";

import { mainNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";
import { DitherBackground } from "@/components/dither-background";

const imgImage93 =
  "/images/63757473-2697-4d36-bb47-1bcc0252988b.png";
const imgImageHero =
  "/images/86a5552a-e9a0-4c68-9d84-7efaa3daefd9.png";
const imgImage66 =
  "/images/db8d1721-a02f-4f1e-8225-74b38223c461.png";
const imgFeatureImage =
  "/images/6dd2635c-61fe-4739-b2b0-bb2d734923e8.png";
const imgLogo =
  "/images/005b2b6a-0205-4b6d-afcb-abe3ac15c2c3.svg";
const imgFrame1000003036 =
  "/images/5aac8bc8-9464-4e4f-8f12-1de6d2a01356.svg";
const imgSocialLinkedIn =
  "/images/14a1b126-3592-4752-855c-cbd6a2108392.svg";
const imgSocialX =
  "/images/8cda63bd-834f-41ea-a039-8c8e2d9a796f.svg";
const imgSocialYoutube =
  "/images/f07696ae-3f49-438b-9020-b5b47c6d1511.svg";
const imgSocialInstagram =
  "/images/8c91a8e6-6e22-47d9-9c5f-1943c44387f2.svg";
const imgSocialGithub =
  "/images/db2a1fca-1611-49de-b24f-0861cc4821c9.svg";
const imgVercelMark =
  "/images/81d31c34-505a-4c74-be35-71956c126b0e.svg";

const socialItems = [
  { label: "LinkedIn", icon: imgSocialLinkedIn, href: "#" },
  { label: "X", icon: imgSocialX, href: "#" },
  { label: "YouTube", icon: imgSocialYoutube, href: "#" },
  { label: "Instagram", icon: imgSocialInstagram, href: "#" },
  { label: "GitHub", icon: imgSocialGithub, href: "#" }
];

export function BilbyGccPage() {
  return (
    <main className="min-h-dvh bg-surface-soft text-brand">
      <SiteHeader
        logoSrc={imgLogo}
        navItems={mainNavItems}
        activeLabel="Bilby GCC"
        navMarkSrc={imgFrame1000003036}
        socialItems={socialItems}
      />

      <MotionSection className="relative overflow-hidden bg-surface-soft">
        <StaggerGroup>
        <div className="absolute left-1/2 top-[44px] h-[1867px] w-[1440px] -translate-x-1/2 opacity-40 lg:opacity-50">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              alt=""
              src={imgImage93}
              fill
              className="object-cover object-[36%_center]"
            />
          </div>
        </div>
        <div className="absolute inset-x-6 inset-y-0 hidden grid-cols-4 gap-2 lg:grid">
          <div className="border-l border-grid" />
          <div className="border-l border-grid" />
          <div className="border-l border-grid" />
          <div className="border-x border-grid" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex flex-col items-end text-right" dir="rtl">
            <div className="type-mono-xs inline-flex items-center gap-1.5 border border-brand border-b-[1.5px] border-l-[0.75px] border-r-[0.75px] border-t-[0.75px] bg-white/35 px-2 pb-1.5 pt-1 text-brand backdrop-blur-[3.9px]">
              <span className="size-[3px] rounded-[1px] bg-brand" />
              Built for GCC
            </div>
            <div className="mt-8 space-y-6 font-arabic text-right">
              <p className="type-ar-53 [font-variation-settings:'wdth'_75]">
                تمكّن منصة Bilby القادة في دول مجلس التعاون الخليجي من الاستفادة من
                المستجدات والأحداث حول العالم باستخدام تقنيات الذكاء الاصطناعي.
              </p>
              <p className="type-ar-34 [font-variation-settings:'wdth'_62.5]">
                تجمع Bilby بين الرصد الآلي للمعلومات والتحليل الذكي حتى يحصل صُنّاع
                القرار في المنطقة على صورة واضحة ومحدَّثة لما يحدث حولهم، دون الحاجة
                إلى تتبّع الأخبار والوثائق بشكل يدوي.
              </p>
            </div>
          </div>
        </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand text-white">
        <StaggerGroup>
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="relative min-h-[280px]">
            <Image alt="" src={imgImageHero} fill className="object-cover" />
          </div>
          <div className="space-y-6 font-arabic text-right" dir="rtl">
            <div className="type-ar-12 inline-flex items-center gap-1.5 border-[0.75px] border-b-[1.5px] border-white/30 px-2 pb-1.5 pt-1 text-white">
              <span className="size-[3px] rounded-[1px] bg-white" />
              لماذا BILBY
            </div>
            <h2 className="type-ar-42">
              تحويل حركة الحكومات إلى رؤية قابلة للتنفيذ
            </h2>
            <div className="flex gap-4 justify-end">
              <p className="type-ar-15 text-white/90">
                تتيح المنصة فرصة رصد التحوّلات والتغيّرات في سياسات الحكومات من خلال
                جمع البيانات من مختلف الوزارات، وشبكات التواصل الاجتماعي، وغيرها من
                المدخلات، وإنشاء منظومة وطنية للارتقاء بالأداء على المستوى المحلي،
                ودول مجلس التعاون الخليجي، والمستوى الدولي.
              </p>
              <div className="h-auto w-[3px] bg-white" />
            </div>
          </div>
        </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="bg-surface-soft py-20">
        <StaggerGroup className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px] overflow-hidden">
              <Image alt="" src={imgFeatureImage} fill className="object-cover" />
            </div>
            <div className="bg-surface-ghost p-8 font-arabic text-right" dir="rtl">
              <div className="type-ar-12 inline-flex items-center gap-1.5 border border-brand border-b-[1.5px] border-l-[0.75px] border-r-[0.75px] border-t-[0.75px] px-2 pb-1.5 pt-1 text-brand">
                <span className="size-[3px] rounded-[1px] bg-brand" />
                المزايا الرئيسية
              </div>
              <h3 className="type-ar-44 mt-4">
                حَوْكمة أكثر كفاءة، وثقة أعلى، وتنافسية عالمية
              </h3>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="type-ar-44">
                    كفاءة الحوكمة
                  </p>
                  <p className="type-ar-15">
                    من خلال أتمتة عمليات الرصد، والتخطيط لجهات العمل، وتحليل المواضيع،
                    مما يوفّر الموارد المتاحة للقيام بالمهام الاستراتيجية الأكثر أهمية.
                  </p>
                </div>
                <div>
                  <p className="type-ar-44">
                    التوافق الثقافي
                  </p>
                  <p className="type-ar-15">
                    عبر حلول متوافقة مع الشريعة الإسلامية، ومخصّصة لدول مجلس التعاون
                    الخليجي، مما يعزّز الثقة بين المواطنين والمؤسسات وأصحاب العمل.
                  </p>
                </div>
                <div>
                  <p className="type-ar-44">
                    القدرة التنافسية العالمية
                  </p>
                  <p className="type-ar-15">
                    من خلال تزويد أصحاب العمل بتقنيات ذكاء اصطناعي متطوّرة للتعامل مع
                    الأنظمة الاقتصادية المعقّدة، بما يعزّز الابتكار ويفتح أبواب الوصول
                    إلى الأسواق المحلية والدولية.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-end gap-4">
                <div className="h-px w-20 bg-brand" />
                <Image alt="" src={imgVercelMark} width={13} height={11} />
              </div>
            </div>
          </div>
        </StaggerGroup>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-surface-soft py-16 text-center font-arabic">
        <StaggerGroup>
        <div className="absolute inset-0">
          <DitherBackground />
        </div>
        <div className="relative mx-auto max-w-4xl px-6" dir="rtl">
          <p className="type-ar-25">
            مع Bilby، تتحوّل البيانات المتناثرة إلى رؤية واحدة تساعدك على اتخاذ
            قرارات أدقّ وأسرع في بيئة إقليمية ودولية متغيّرة.
          </p>
          <p className="type-ar-44 mt-6">
            Bilby شريك قرارك في الخليج.
          </p>
        </div>
        </StaggerGroup>
      </MotionSection>
    </main>
  );
}
