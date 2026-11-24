import { defineConfig } from "@playwright/test";

// Same port as `pnpm dev`: Next allows one dev server per project, so a running one is reused instead of a second one failing.
const url = "http://localhost:3011";

export default defineConfig({
  testDir: "e2e",
  use: {
    baseURL: url,
    // shortcut: runs in the installed Google Chrome (no browser download); on machines without Chrome run
    // `pnpm exec playwright install chromium` and remove `channel`.
    channel: "chrome",
  },
  webServer: {
    // Next's own server; `next start` refuses to run with output: "export", so dev is the only built-in option.
    command: "pnpm dev",
    url,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
