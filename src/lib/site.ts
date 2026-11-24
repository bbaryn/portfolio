// Absolute site URL for the sitemap, robots.txt, canonical and JSON-LD.
// CI sets NEXT_PUBLIC_SITE_URL for GitHub Pages; the fallback is the local dev server.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3011";
