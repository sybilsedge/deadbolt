# Dead Bolt, Inc. - Property Preservation & REO Turnover Website

A lightweight, performant, mobile-responsive business profile website for **Dead Bolt, Inc.**, built with **Astro**, **Tailwind CSS v4**, and configured for **Cloudflare Pages** deployment.

---

## 🚀 Tech Stack & Features

* **Framework:** [Astro](https://astro.build/) (v5 / SSG Static Mode)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
* **Deployment Adapter:** `@astrojs/cloudflare` (Workerd runtime integration for Cloudflare Pages)
* **Design System:** Heavy Industrial Slate (`#1E293B`), Gunmetal (`#334155`), Safety Amber (`#EA580C`), and Tactical Brass (`#B45309`) palette with glassmorphism overlays and job site micro-animations.
* **Configuration:** Centralized site configuration in `src/config/site.ts` for instant brand and content toggling.

---

## 🛠️ Project Structure

```text
deadbolt/
├── public/
│   ├── favicon.svg             # Deadbolt lock logo favicon
│   └── images/                 # High-res property & leadership assets
├── src/
│   ├── config/
│   │   └── site.ts             # Central brand metadata & service definitions
│   ├── components/
│   │   ├── Navbar.astro        # Top utility bar, logo, and mobile menu
│   │   ├── Hero.astro          # Full-width interior overlay hero section
│   │   ├── Services.astro      # 6 Core Property Preservation services container
│   │   ├── ServiceCard.astro   # Elevated service card component with custom SVGs
│   │   ├── Advantage.astro     # Dead Bolt advantage 2x2 grid & leadership card
│   │   ├── QuoteForm.astro     # Interactive preservation quote request form
│   │   └── Footer.astro        # Dark slate footer with contact details & dynamic year
│   ├── layouts/
│   │   └── Layout.astro        # Master HTML layout & SEO metadata
│   ├── pages/
│   │   └── index.astro         # Main landing page assembly
│   └── styles/
│       └── global.css          # Tailwind CSS v4 @theme design tokens
├── astro.config.mjs            # Astro configuration with Cloudflare adapter
├── package.json                # Project dependencies & npm scripts
└── tsconfig.json               # TypeScript strict configuration
```

---

## ⚙️ Central Brand Configuration (`src/config/site.ts`)

All business metadata, contact details, service features, and navigation links can be easily edited in a single location:

```typescript
export const siteConfig = {
  name: "Dead Bolt, Inc.",
  altNames: ["Dead Bolt Inc.", "Dead Bolt Property Preservation", "Dead Bolt REO Services"],
  tagline: "Full-Service Property Preservation & Trash-Outs in Hampton Roads",
  location: {
    city: "Virginia Beach",
    state: "VA",
    zip: "23452",
    full: "Hampton Roads, VA"
  },
  contact: {
    phone: "(757) 555-0101",
    email: "info@757deadbolt.com"
  },
  badgeText: "SECURED. CLEANED. PRESERVED.",
  // ...
};
```

---

## 💻 Local Development & Build Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
# Starts Astro dev server at http://localhost:4321
```

### 3. Build for Production
```bash
npm run build
# Pre-renders static HTML and processes Tailwind assets into the dist/ directory
```

---

## ☁️ Deploying to Cloudflare Pages

### Direct Deployment via Wrangler CLI
```bash
npx wrangler pages deploy dist --project-name=deadbolt
```
