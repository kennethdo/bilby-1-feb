// Navigation items
export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Automated Solutions", href: "/platform" },
  { label: "API", href: "/api" },
  { label: "Scanning", href: "/scanning" },
  { label: "Bilby Japan", href: "/bilby-japan" },
  { label: "Bilby GCC", href: "/bilby-gcc" },
  { label: "About Bilby", href: "/about" },
  { label: "Contact us", href: "/contact" }
];

export const aboutNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "API", href: "/api" },
  { label: "Mass Products", href: "/platform" },
  { label: "Research", href: "/platform" },
  { label: "About Bilby", href: "/about" },
  { label: "Contact", href: "/contact" }
];

// Social links - shared across all pages
export interface SocialItem {
  label: string;
  icon: string;
  href: string;
}

export const mainSocialItems: SocialItem[] = [
  { label: "LinkedIn", icon: "/images/bd5bd585-5e35-4784-8003-cda38372ff1f.svg", href: "#" },
  { label: "X", icon: "/images/aebe7771-4100-41fc-addf-779ff6b74dcc.svg", href: "#" },
  { label: "YouTube", icon: "/images/6b499a14-7e23-4067-8fba-af02698ca362.svg", href: "#" },
  { label: "Instagram", icon: "/images/9f35e34b-eb94-4ebc-9be8-8c26422e6573.svg", href: "#" },
  { label: "GitHub", icon: "/images/632df740-b6b6-4b2c-8da2-e021eb8969e0.svg", href: "#" }
];
