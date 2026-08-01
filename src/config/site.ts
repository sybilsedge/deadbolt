export interface NavItem {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: 'paint' | 'clean' | 'repair';
  features: string[];
}

export interface AdvantageFeature {
  title: string;
  description: string;
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
  owner: {
    name: string;
    title: string;
    bio: string;
  };
  colors: {
    navyDark: string;
    navyCard: string;
    goldAccent: string;
    goldHover: string;
    bgLight: string;
  };
  navItems: NavItem[];
  services: ServiceItem[];
  advantageFeatures: AdvantageFeature[];
}

export const siteConfig: SiteConfig = {
  name: "Tidewater Turnkey Solutions",
  altNames: ["Turnkey Home Solutions", "Tidewater Turnkey Solutions"],
  tagline: "Premium Make-Ready & Rental Turnover Services for Hampton Roads Property Managers",
  heroHeadline: "VACANT UNITS READY IN DAYS, NOT WEEKS",
  heroSubheadline: "Premium Make-Ready & Rental Turnover Services for Hampton Roads Property Managers",
  location: {
    city: "Windsor",
    state: "VA",
    zip: "23487",
    full: "Windsor, VA 23487"
  },
  contact: {
    phone: "(757) 555-0101",
    phoneRaw: "7575550101",
    email: "info@tidewaterTurnkey.com"
  },
  badgeText: "VETERAN-OWNED BUSINESS",
  owner: {
    name: "Marcus Vance",
    title: "OWNER | NAVY VETERAN",
    bio: "Dedicated to military precision, fast turnaround schedules, and meticulous property preparation for Hampton Roads property managers."
  },
  colors: {
    navyDark: "#0F172A",
    navyCard: "#1E293B",
    goldAccent: "#D97706",
    goldHover: "#CA8A04",
    bgLight: "#F8FAFC"
  },
  navItems: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "The Team", href: "#team" },
    { name: "Get a Quote", href: "#quote" }
  ],
  services: [
    {
      id: "paint-patch",
      title: "Paint & Patch",
      shortDesc: "Comprehensive wall restoration, drywall repair, and flawless interior repaints for clean tenant transitions.",
      fullDesc: "From small nail holes to complete room drywall repairs and color matching repaints, we restore walls to brand-new condition rapidly.",
      icon: "paint",
      features: [
        "Interior wall touch-ups & scuff removal",
        "Drywall patch, texture match & joint repair",
        "Full unit repaints with durable eggshell/semi-gloss finishes",
        "Trim, molding, baseboard & door repaints"
      ]
    },
    {
      id: "deep-cleaning",
      title: "Deep Cleaning",
      shortDesc: "Hospitality-grade move-in and move-out sanitation to ensure immediate tenant readiness.",
      fullDesc: "Thorough turnover deep cleaning targeting kitchen appliances, bath fixtures, window sills, flooring, and cabinet interiors.",
      icon: "clean",
      features: [
        "Detailed appliance degreasing & deep clean (oven, fridge, stove)",
        "Bathroom sanitation, grout scrub, & tile de-scaling",
        "Cabinet, drawer, and pantry interior wipe-downs",
        "Deep carpet vacuuming, floor scrubbing, & baseboard detail"
      ]
    },
    {
      id: "minor-repairs",
      title: "Minor Repairs",
      shortDesc: "Fast-response maintenance, light fixture updates, and essential hardware swaps.",
      fullDesc: "Address tenant punch-list items, change locks, replace broken outlet covers, adjust cabinet doors, and replace outdated lighting.",
      icon: "repair",
      features: [
        "Light fixture, ceiling fan & bulb replacement",
        "Door handle, lockset, deadbolt & cabinet latch installs",
        "Faucet, sink strainer & disposal repair/replacement",
        "Blind/curtain rod mounting & weatherstripping fixes"
      ]
    }
  ],
  advantageFeatures: [
    {
      title: "Fast Turnarounds",
      description: "Guaranteed rapid timeline execution to minimize vacant days and maximize lease revenue."
    },
    {
      title: "Insured & Bonded",
      description: "Complete liability coverage and legal protection for total peace of mind on every property site."
    },
    {
      title: "Dedicated Project Manager",
      description: "Single point of contact providing real-time photo updates and status tracking for property managers."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden surprise fees. Clear line-item estimates upfront with guaranteed quote accuracy."
    }
  ]
};
