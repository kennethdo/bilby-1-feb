import Image from "next/image";
import Link from "next/link";
import { KeyboardArrowDown, Menu } from "@material-symbols-svg/react/w200";

import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type SocialItem = {
  label: string;
  icon: string;
  href: string;
};

type SiteHeaderProps = {
  logoSrc: string;
  navItems: NavItem[];
  activeLabel?: string;
  navMarkSrc?: string;
  socialItems: SocialItem[];
  ctaSecondary?: { label: string; href: string };
  ctaPrimary?: { label: string; href: string };
};

export function SiteHeader({
  logoSrc,
  navItems,
  activeLabel,
  navMarkSrc,
  socialItems,
  ctaSecondary = { label: "Get Started", href: "#" },
  ctaPrimary = { label: "Book a demo", href: "#" }
}: SiteHeaderProps) {
  const hoverBase =
    "spring-transform transition-opacity duration-150 ease-out hover:-translate-y-0.5";
  return (
    <header className="sticky top-0 z-50 w-full border border-muted bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-stretch px-4">
        <Link href="/" className="flex min-w-[106px] items-center px-4 py-3">
          <Image alt="Bilby logo" src={logoSrc} width={74} height={20} priority />
        </Link>
        <nav className="hidden flex-1 items-center border-l border-muted px-10 lg:flex">
          <div className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeLabel === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap pb-0.5 text-[12px] uppercase tracking-[0.01em] text-brand transition-all duration-150",
                    "border-b-[1.4px] border-transparent",
                    "hover:border-brand hover:font-semibold",
                    isActive && "border-brand"
                  )}
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  {item.label}
                </Link>
              );
            })}
            {navMarkSrc ? (
              <Image alt="" src={navMarkSrc} width={22} height={11} />
            ) : null}
          </div>
        </nav>
        <button
          aria-label="Open menu"
          className={cn(
            "flex items-center justify-center border-l border-muted px-3 lg:hidden",
            hoverBase,
            "hover:opacity-70"
          )}
        >
          <Menu className="size-6 text-brand" />
        </button>
        <div className="flex items-center gap-2 border-l border-muted pl-[9px] pr-[8px] py-[8px]">
          <div className="hidden items-center gap-2 xl:flex">
            {socialItems.map((item) => (
              <Link
                key={item.label}
                aria-label={item.label}
                className={cn(
                  "flex min-w-10 items-center justify-center rounded-full border border-transparent p-2 transition-colors duration-150 ease-out",
                  hoverBase,
                  "hover:opacity-70"
                )}
                href={item.href}
              >
                <Image alt="" src={item.icon} width={24} height={24} />
              </Link>
            ))}
          </div>
          <div className="relative hidden lg:block xl:hidden">
            <div className="group">
              <span
                className={cn(
                  "type-body-12 inline-flex cursor-default items-center gap-2 border border-default bg-white px-4 py-2 uppercase text-brand",
                  hoverBase,
                  "hover:opacity-80"
                )}
              >
                Follow us
                <KeyboardArrowDown aria-hidden className="size-4 text-brand" />
              </span>
              <div className="pointer-events-none absolute right-full top-full z-10 mr-2 mt-2 w-[220px] translate-y-1 rounded border border-muted bg-white opacity-0 shadow-lg transition-all duration-150 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex flex-col py-2">
                  {socialItems.map((item) => (
                    <Link
                      key={`follow-${item.label}`}
                      href={item.href}
                      className={cn(
                        "type-body-12 flex items-center gap-3 px-4 py-2 text-brand",
                        hoverBase,
                        "hover:bg-surface-muted hover:opacity-80"
                      )}
                    >
                      <Image alt="" src={item.icon} width={18} height={18} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link
            className={cn(
              "type-body-12 hidden border border-muted px-[25px] py-[9px] font-medium uppercase text-brand lg:inline-flex whitespace-nowrap",
              hoverBase,
              "hover:opacity-80"
            )}
            href={ctaSecondary.href}
          >
            {ctaSecondary.label}
          </Link>
          <Link
            className={cn(
              "type-body-12 bg-brand px-[25px] py-[9px] font-medium uppercase text-inverse whitespace-nowrap",
              hoverBase,
              "hover:opacity-90"
            )}
            href={ctaPrimary.href}
          >
            {ctaPrimary.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
