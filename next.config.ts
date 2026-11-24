import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/ for GitHub Pages. Pages serves the repo under /<repo>, so CI sets PAGES_BASE_PATH=/portfolio.
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || undefined,
  // cacheComponents/partialPrefetching removed: they forbid `dynamic = "force-static"`, which static export requires for robots/sitemap.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
