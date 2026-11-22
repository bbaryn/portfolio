import { defineConfig } from "@playwright/test";

const port = 3100; // not 3000, so it never clashes with `pnpm dev`

export default defineConfig({
  testDir: "e2e",
  use: {
    baseURL: `http://localhost:${port}`,
    // shortcut: runs in the installed Google Chrome (no browser download); on machines without Chrome run
    // `pnpm exec playwright install chromium` and remove `channel`.
    channel: "chrome",
  },
  webServer: {
    command: `pnpm build && pnpm start -p ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
