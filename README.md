# Mahadev Book

Next.js + Tailwind frontend with a **standalone Sanity Studio** (Altertype-style split).

| Package | Role | Deploy |
|---------|------|--------|
| Repo root (`src/`) | Next.js website | **Vercel** |
| `studio/` | Sanity CMS editor | **Your server** or `sanity deploy` |

Content is stored in Sanity Cloud. Studio writes; the Vercel site only reads via GROQ.

## Quick start (website)

```bash
cp .env.example .env.local
# Set NEXT_PUBLIC_SANITY_PROJECT_ID after creating a Sanity project

npm install
npm run dev
```

Without a project ID, the site uses built-in fallback content (current static copy).

## Quick start (CMS studio)

```bash
cd studio
cp .env.example .env
# Set SANITY_STUDIO_PROJECT_ID to the same project ID

npm install
npm run dev
```

Studio runs at http://localhost:3333

See [`studio/README.md`](studio/README.md) for hosting the studio on your server.

## Vercel env vars

Add these in the Vercel project:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET` (`production`)
- Optional: `SANITY_API_TOKEN`, `NEXT_PUBLIC_SANITY_USE_CDN=false`

## CMS content

- **Site Settings** — WhatsApp URL, logo, nav, footer, SEO  
- **Home Page** — hero, matches, casino, about, features, FAQ, blog preview  
- **Blog Posts** — articles (sections or rich text)  
- **Categories** — blog categories  

Pages revalidate every 60 seconds after publish.
