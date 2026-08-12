# Mahadev Book — Sanity Studio

Standalone Sanity Studio for the Mahadev Book website (same pattern as Altertype).

- **Studio** (this folder): edit content — deploy/host on your server or via `sanity deploy`
- **Next.js app** (repo root): reads published content — deploy on Vercel

## Setup

> **Note:** This machine was low on disk during setup. Run `npm install` inside `studio/` on a machine/server with enough free space (~1GB+). Do not commit `node_modules`.

1. Create a Sanity project at [https://www.sanity.io/manage](https://www.sanity.io/manage) (or run `npx sanity@latest login`).
2. Copy env file and set your project ID:

```bash
cp .env.example .env
# Edit SANITY_STUDIO_PROJECT_ID
```

3. Install and run locally:

```bash
cd studio
npm install
npm run dev
```

Studio opens at [http://localhost:3333](http://localhost:3333).

4. In the Sanity manage dashboard, add CORS origins for:
   - `http://localhost:3000` (Next.js local)
   - `http://localhost:3333` (Studio local)
   - Your Vercel production domain
   - Your studio production domain

## Deploy studio (your server / Sanity hosting)

### Option A — Sanity hosted (`*.sanity.studio`)

```bash
npm run deploy
```

### Option B — Your own server

```bash
npm run build
# Serve the `dist/` folder with nginx/Apache/Node static hosting
npm run start   # or serve dist/ behind your reverse proxy
```

Point your CMS subdomain (e.g. `cms.yourdomain.com`) at that host.

## Content model

| Document        | Purpose                                      |
|-----------------|----------------------------------------------|
| Site Settings   | WhatsApp URL, logo, nav, footer, SEO         |
| Home Page       | Hero, matches, casino, about, FAQ, etc.      |
| Blog Posts      | Articles with sections / rich text           |
| Categories      | Blog categories                              |

Singletons **Site Settings** and **Home Page** are fixed document IDs in the desk structure.
