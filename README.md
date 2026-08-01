# Tidewater Turkey Solutions - Property Turnover Services Website

A lightweight, performant, mobile-responsive business profile website for **Tidewater Turkey Solutions** (or **Turkey Home Solutions**), built with **Astro**, **Tailwind CSS v4**, and configured for **Cloudflare Pages** deployment.

---

## 🚀 Tech Stack & Features

* **Framework:** [Astro](https://astro.build/) (v5 / SSG Static Mode)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
* **Deployment Adapter:** `@astrojs/cloudflare` (Workerd runtime integration for Cloudflare Pages)
* **Design System:** Deep Navy (`#0F172A`, `#1E293B`) & Accent Gold (`#C59B27`, `#EAAA00`) palette with glassmorphism overlays and micro-animations.
* **Configuration:** Centralized site configuration in `src/config/site.ts` for instant brand/content toggling.

---

## 🛠️ Project Structure

```text
turnkey/
├── public/
│   ├── favicon.svg             # Key/house logo favicon
│   └── images/                 # Generated high-res property & avatar assets
├── src/
│   ├── config/
│   │   └── site.ts             # Central brand metadata & service definitions
│   ├── components/
│   │   ├── Navbar.astro        # Top announcement bar, logo, and mobile menu
│   │   ├── Hero.astro          # Full-width interior overlay hero section
│   │   ├── Services.astro      # Services container section
│   │   ├── ServiceCard.astro   # Elevated service card component
│   │   ├── Advantage.astro     # Turnkey advantage 2x2 grid & Navy Veteran owner card
│   │   ├── QuoteForm.astro     # Interactive turnover quote request form
│   │   └── Footer.astro        # Dark navy footer with contact details & dynamic year
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

All business metadata, contact details, service features, and navigation links can be easily edited or toggled in a single location:

```typescript
export const siteConfig = {
  name: "Tidewater Turkey Solutions",
  altNames: ["Turkey Home Solutions", "Tidewater Turnkey Solutions"],
  tagline: "Premium Make-Ready & Rental Turnover Services for Hampton Roads Property Managers",
  location: {
    city: "Windsor",
    state: "VA",
    zip: "23487",
    full: "Windsor, VA 23487"
  },
  contact: {
    phone: "(757) 555-0101",
    email: "info@tidewaterturkey.com"
  },
  badgeText: "VETERAN-OWNED BUSINESS",
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

### Option A: Direct Git Integration (Recommended)
1. Push your repository to GitHub or GitLab.
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
3. Select **Create application** > **Pages** > **Connect to Git**.
4. Configure build settings:
   - **Framework Preset:** `Astro`
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`
   - **Environment Variable:** `NODE_VERSION = 22`

### Option B: Direct Deployment via Wrangler CLI
```bash
npx wrangler pages deploy dist --project-name=tidewater-turkey-solutions
```
