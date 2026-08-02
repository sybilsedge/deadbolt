export interface NavItem {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  icon: 'secure' | 'trash' | 'yard' | 'eviction' | 'winterization' | 'maid';
}

export interface SiteConfig {
  name: string;
  altNames: string[];
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  location: {
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  contact: {
    phone: string;
    phoneRaw: string;
    email: string;
  };
  badgeText: string;
  colors: {
    brandDark: string;
    brandSlate: string;
    brandMuted: string;
    amberPrimary: string;
    amberHover: string;
    amberBg: string;
    amberBorder: string;
  };
  navItems: NavItem[];
  services: ServiceItem[];
  trustSpecs: string[];
}

export const siteConfig: SiteConfig = {
  name: "Dead Bolt, Inc.",
  altNames: ["Dead Bolt Inc.", "Dead Bolt Property Preservation", "Dead Bolt REO Services"],
  tagline: "Complete property preservation, initial secure, trash-outs, and ongoing maintenance for asset managers, lenders, and realtors across Hampton Roads.",
  heroHeadline: "SECURED. CLEANED. PRESERVED.",
  heroSubheadline: "Turn-Key REO & Foreclosure Field Services",
  location: {
    city: "Virginia Beach",
    state: "VA",
    zip: "23452",
    full: "Virginia Beach & Hampton Roads"
  },
  contact: {
    phone: "(757) 555-0199",
    phoneRaw: "7575550199",
    email: "info@757deadbolt.com"
  },
  badgeText: "24/7 Emergency Securing",
  colors: {
    brandDark: "#0F172A",
    brandSlate: "#1E293B",
    brandMuted: "#475569",
    amberPrimary: "#EA580C",
    amberHover: "#C2410C",
    amberBg: "#FFF7ED",
    amberBorder: "#FDBA74"
  },
  navItems: [
    { name: "HOME", href: "#home" },
    { name: "SERVICES", href: "#services" },
    { name: "WHY US", href: "#why-us" },
    { name: "COVERAGE", href: "#coverage" },
    { name: "REQUEST WORK ORDER", href: "#quote" }
  ],
  trustSpecs: [
    "✓ Licensed & Insured",
    "✓ Fast Photo Documentation",
    "✓ Code Violation Corrections",
    "✓ Eviction & Lockout Ready"
  ],
  services: [
    {
      id: "securing-rekey",
      number: "1",
      title: "Initial Secure & Rekey",
      shortDesc: "Lock changes, deadbolt installations, padlocking outbuildings, window board-ups, and installing contractor access lockboxes.",
      icon: "secure"
    },
    {
      id: "trash-outs",
      number: "2",
      title: "Trash-Outs & Junk Removal",
      shortDesc: "Complete interior and exterior debris removal, hazardous material abatement, shed clean-outs, and vehicle/tire haul-offs.",
      icon: "trash"
    },
    {
      id: "yard-exterior",
      number: "3",
      title: "Yard & Exterior Abatement",
      shortDesc: "Initial grass overhaul, tree trimming, brush clearing, ongoing lawn maintenance, and pool securing/covering.",
      icon: "yard"
    },
    {
      id: "eviction-crew",
      number: "4",
      title: "Sheriff Eviction Crew",
      shortDesc: "On-site removal team for sheriff-assisted evictions, including legal property handling, bagging, tagging, and haul-away.",
      icon: "eviction"
    },
    {
      id: "winterization",
      number: "5",
      title: "Winterization & Repairs",
      shortDesc: "System pressure testing, plumbing drainage, anti-freeze application, roof tarping, and safety code repairs.",
      icon: "winterization"
    },
    {
      id: "sales-cleaning",
      number: "6",
      title: "Sales-Ready Cleaning",
      shortDesc: "Deep interior sanitation, appliance cleaning, window washing, and touch-up work ready for open-house listing.",
      icon: "maid"
    }
  ]
};
