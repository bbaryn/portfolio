# Portfolio — Bartłomiej Baryń

Personal portfolio of a Senior Full-Stack & Mobile Engineer: a single-page site with a hero, bento overview (web, mobile, architecture, tech stack, status), case studies and experience timeline, in English and Polish.

## Stack

- **Next.js 16** (App Router, static prerender) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Base UI)
- **Motion** (springs, magnetic buttons) + **Lenis** (smooth scroll); section fade-ins are CSS scroll-driven animations
- **pnpm**

## Getting started

```bash
pnpm install   # also installs the git hooks (husky)
pnpm dev       # http://localhost:3000
```

## Scripts

| Command          | What it does                                           |
| ---------------- | ------------------------------------------------------ |
| `pnpm dev`       | Dev server                                             |
| `pnpm build`     | Production build                                       |
| `pnpm start`     | Serve the production build                             |
| `pnpm lint`      | ESLint (Next rules + full jsx-a11y)                    |
| `pnpm format`    | Prettier on the whole repo                             |
| `pnpm typecheck` | Generate Next route types, then `tsc --noEmit`         |
| `pnpm test`      | Unit/component tests (Vitest + Testing Library)        |
| `pnpm test:e2e`  | E2E tests (Playwright; builds and serves on port 3100) |

## Git hooks

| Hook         | Runs                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| `pre-commit` | lint-staged on staged files: Prettier → ESLint `--fix` → related Vitest tests                          |
| `commit-msg` | Commitlint — [Conventional Commits](https://www.conventionalcommits.org) (`feat:`, `fix:`, `chore:` …) |
| `pre-push`   | `pnpm typecheck` + `pnpm test:e2e`                                                                     |

Playwright uses the installed **Google Chrome** (`channel: "chrome"`). Without Chrome, run `pnpm exec playwright install chromium` and remove `channel` in `playwright.config.ts`.

## Where things live

| Path                              | Contents                                                                  |
| --------------------------------- | ------------------------------------------------------------------------- |
| `src/lib/content.ts`              | All copy and CV data; `{ en, pl }` pairs are translated                   |
| `src/app/globals.css`             | Theme tokens and effects; accent colour = `--brand*` variables at the top |
| `src/components/`                 | Page sections (`hero`, `work`, `experience`, `contact`, `nav`)            |
| `src/components/bento/`           | One file per bento card                                                   |
| `src/components/fx.tsx`           | Shared effects: `GlowCard`, `Magnetic`, `Reveal`, `SectionHeading`        |
| `src/app/sitemap.ts`, `robots.ts` | SEO files; JSON-LD profile is in `src/app/page.tsx`                       |

**Languages:** the PL/EN switch is client-side (React context + `localStorage`, first visit follows the browser language), so search engines index the English version.

## Deploy

Built for **Vercel**. Set `NEXT_PUBLIC_SITE_URL` to your domain (used by the sitemap, robots.txt, canonical URL and JSON-LD); on Vercel the production URL is used automatically when it is not set.
