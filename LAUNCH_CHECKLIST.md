# Launch checklist

Pre-deploy verification for the CRISP Content Engine marketing site.

## Local checks

1. Run `npm run lint`
2. Run `npm run build`
3. Run `npm run verify:routes`
4. Optional: start the dev server and run `BASE_URL=http://localhost:3000 npm run verify:routes`
5. Optional: run `BASE_URL=https://crisp-you.vercel.app npm run check:live-routes`

## Deploy

1. Push to main (or merge the release branch)
2. Confirm the Vercel deployment matches the latest commit SHA
3. Confirm the production domain points at the correct Vercel project

## Post-deploy smoke test

1. Open `/blog` and confirm **10** articles are listed
2. Open `/sitemap.xml` and confirm all core, use-case, feature, compare, free planner and blog URLs are present
3. Open `/llms.txt` and `/llms-full.txt` and confirm URLs use `https://crisp.you`
4. Spot-check use-case pages: `/use-cases/founders`, `/use-cases/consultants`, `/use-cases/agencies`, `/use-cases/lean-teams`
5. Spot-check feature pages: `/features/brand-profile`, `/features/content-queue`, `/features/linkedin-content-system`, `/features/ai-image-prompts`
6. Spot-check comparison pages: `/compare/chatgpt-vs-crisp-content-engine`, `/compare/content-calendar-vs-content-engine`
7. Open `/free-ai-content-planner`

## If production shows old content

- Trigger a fresh Vercel deploy from the latest commit
- Check domain → project mapping in Vercel (custom domain vs preview URL)
- Compare production `/blog` article count with preview; stale deploy is the most common cause when code is correct locally

## Source of truth

- Blog posts: `src/content/blog.ts` + `src/content/blog-extra.ts`
- Landing pages: `src/content/landing-pages/`
- Route registry: `src/content/routes.ts`
- Sitemap: `src/app/sitemap.ts` (uses route registry)
- LLMs files: `public/llms.txt`, `public/llms-full.txt`

Legacy files under `src/content/` (for example `compare.ts`, `features-extra.ts`) are not used by current routes. Do not delete without confirming imports.
