import Image from "next/image";

import { mainNavItems } from "@/components/nav-data";
import { SiteHeader } from "@/components/site-header";
import { MotionSection, StaggerGroup } from "@/components/motion-section";

const imgImage93 =
  "https://www.figma.com/api/mcp/asset/e0864c23-d503-45b7-8965-b37d92de5931";
const imgImageDither =
  "https://www.figma.com/api/mcp/asset/6e1d4fca-cdbc-4e82-a72e-42d831e13bab";
const imgImageHero =
  "https://www.figma.com/api/mcp/asset/6e1d4fca-cdbc-4e82-a72e-42d831e13bab";
const imgImage66 =
  "https://www.figma.com/api/mcp/asset/63a7d689-d5e3-4dc7-833b-c9bf3dd31691";
const imgFeatureImage =
  "https://www.figma.com/api/mcp/asset/cf307bdf-d828-48a1-a79a-7a108a05b42a";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/b5216550-a64f-496f-9958-6954f67a3ae8";
const imgFrame1000003036 =
  "https://www.figma.com/api/mcp/asset/48e98a85-b594-4a0c-9286-5e44cdf19ce5";
const imgSocialLinkedIn =
  "https://www.figma.com/api/mcp/asset/f34c2ec5-814a-44d5-8a10-b34e051a5a65";
const imgSocialX =
  "https://www.figma.com/api/mcp/asset/f73ce0e4-7c3e-45da-a013-bd3374a6c856";
const imgSocialYoutube =
  "https://www.figma.com/api/mcp/asset/b74f3a0f-0278-49b5-9429-cefc46b6840d";
const imgSocialInstagram =
  "https://www.figma.com/api/mcp/asset/bd51cf56-8229-4ae2-8be9-ae470f8bb811";
const imgSocialGithub =
  "https://www.figma.com/api/mcp/asset/200c6eeb-3556-419e-80ff-25a107867399";
const imgVercelMark =
  "https://www.figma.com/api/mcp/asset/993b2873-1ddb-4e11-9665-bb5de0b340c8";

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
            <div className="type-mono-xs inline-flex items-center gap-2 border border-brand px-3 py-2">
              <span className="size-1 rounded-[1px] bg-brand" />
              BILBY GCC
            </div>
            <div className="mt-8 space-y-6 font-arabic text-right">
              <p
                className="type-ar-53"
                style={{ fontVariationSettings: "'wdth' 75" }}
              >
                تمكّن منصة Bilby القادة في دول مجلس التعاون الخليجي من الاستفادة من
                المستجدات والأحداث حول العالم باستخدام تقنيات الذكاء الاصطناعي.
              </p>
              <p
                className="type-ar-34"
                style={{ fontVariationSettings: "'wdth' 62.5" }}
              >
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
        <div className="absolute inset-0">
          <Image alt="" src={imgImageDither} fill className="object-cover opacity-90" />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="relative min-h-[280px]">
            <Image alt="" src={imgImageHero} fill className="object-cover" />
          </div>
          <div className="space-y-6 font-arabic text-right" dir="rtl">
            <div className="type-ar-12 inline-flex items-center gap-2 border border-white/70 px-3 py-2">
              <span className="size-1 rounded-[1px] bg-white" />
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
              <div className="type-ar-12 inline-flex items-center gap-2 border border-brand px-3 py-2">
                <span className="size-1 rounded-[1px] bg-brand" />
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
          <Image alt="" src={imgImage66} fill className="object-cover opacity-80" />
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
