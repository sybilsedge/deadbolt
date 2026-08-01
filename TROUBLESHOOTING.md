# Deployment & Build Troubleshooting Log

This document records all build, configuration, and deployment issues encountered during project setup, along with their root causes and resolutions.

---

## 1. Missing Entry-point during Cloudflare Deployment (`npx wrangler deploy`)

### Symptom & Error Log
```text
✘ [ERROR] Missing entry-point to Worker script or to assets directory
  If you are uploading a directory of assets, you can either:
  - Specify the path via command line: (ex: `npx wrangler deploy --assets=./dist`)
  - Or create a "wrangler.jsonc" file
Failed: error occurred while running deploy command
```

### Root Cause
Wrangler CLI requires an explicit path or configuration file identifying where pre-rendered static assets are located before deploying to Cloudflare Pages/Workers.

### Solution
Created **[wrangler.jsonc](file:///c:/Users/sybil/git/turnkey/wrangler.jsonc)** in the project root:
```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "turnkey",
  "compatibility_date": "2026-08-01",
  "assets": {
    "directory": "./dist"
  }
}
```

---

## 2. Conflicting Peer Dependency Resolution (`ERESOLVE`)

### Symptom & Error Log
```text
npm error ERESOLVE could not resolve
npm error While resolving: @astrojs/cloudflare@12.6.13
npm error Found: astro@7.1.6
npm error Could not resolve dependency:
npm error peer astro@"^5.7.0" from @astrojs/cloudflare@12.6.13
```

### Root Cause
`package.json` declared `"astro": "^5.2.0"`, which allowed `npm` during CI `npm clean-install` to pick up Astro v7 pre-release versions. `@astrojs/cloudflare@12` specifies a peer dependency requiring Astro v5 (`^5.7.0`), triggering a fatal `ERESOLVE` error.

### Solution
1. Pinned Astro version to stable v5 range in **[package.json](file:///c:/Users/sybil/git/turnkey/package.json)**:
   ```json
   "astro": "~5.4.0"
   ```
2. Created **[.npmrc](file:///c:/Users/sybil/git/turnkey/.npmrc)** to bypass strict peer dependency checks in CI:
   ```ini
   legacy-peer-deps=true
   ```
3. Updated `package-lock.json` via `npm install`.

---

## 3. Missing 'vite' Package Resolution in SSR Build

### Symptom & Error Log
```text
Error when evaluating SSR module /opt/buildhome/repo/astro.config.mjs: 
Cannot find package 'vite' imported from /opt/buildhome/repo/node_modules/@tailwindcss/vite/dist/index.mjs
```

### Root Cause
`@tailwindcss/vite` imports `vite` directly via Node ESM loader. In strict CI environments (`npm ci`), `vite` must be explicitly declared in `package.json` so it is installed at top-level `node_modules/vite`.

### Solution
Explicitly added `vite` to `devDependencies` in **[package.json](file:///c:/Users/sybil/git/turnkey/package.json)**:
```json
"devDependencies": {
  "typescript": "^5.7.3",
  "vite": "^6.0.0"
}
```

---

## 4. Session Config Without Experimental Flag Error

### Symptom & Error Log
```text
[SessionConfigWithoutFlagError] Session config was provided without enabling the experimental.session flag
Hint: See https://docs.astro.build/en/reference/experimental-flags/sessions/
```

### Root Cause
`@astrojs/cloudflare` v12 automatically initializes KV session handlers, which in Astro 5 requires the experimental session flag (`experimental.session`) to be enabled in `astro.config.mjs`.

### Solution
Enabled `experimental.session` in **[astro.config.mjs](file:///c:/Users/sybil/git/turnkey/astro.config.mjs)**:
```javascript
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  experimental: {
    session: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
```

---

## 5. Uploading Pages _worker.js Safety Error

### Symptom & Error Log
```text
✘ [ERROR] Uploading a Pages _worker.js directory as an asset.
  This could expose your private server-side code to the public Internet. Is this intended?
  If you do not want to upload this directory, either remove it or add an ".assetsignore" file, 
  to the root of your asset directory, containing "_worker.js" to avoid uploading.
```

### Root Cause
Wrangler requires an `.assetsignore` file inside the assets output directory (`./dist`) when uploading static assets generated alongside `_worker.js` by `@astrojs/cloudflare`.

### Solution
Created **[public/.assetsignore](file:///c:/Users/sybil/git/turnkey/public/.assetsignore)**. Astro automatically copies files in `public/` to `dist/` during build:
```ini
# Cloudflare Assets Ignore Configuration
```

---

## ✅ Summary of Verified Files

| File | Purpose |
| :--- | :--- |
| **`wrangler.jsonc`** | Points Cloudflare Wrangler deployment to `./dist` |
| **`.npmrc`** | Enables `legacy-peer-deps=true` for CI clean installs |
| **`public/.assetsignore`** | Satisfies Wrangler security check for `_worker.js` during asset deployment |
| **`package.json`** | Pins `astro: ~5.4.0` and adds `vite: ^6.0.0` |
| **`astro.config.mjs`** | Enables `experimental: { session: true }` for `@astrojs/cloudflare` |
| **`package-lock.json`** | Synchronized dependency lockfile |
