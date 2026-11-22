import { expect, test } from "@playwright/test";

test("home page renders the profile with one h1", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Bartłomiej Baryń/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Senior Full-Stack & Mobile Engineer");
  await expect(page.locator("#work")).toBeAttached();
});

test("language choice survives a reload", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "pl", exact: true }).click();
  await expect(page.getByRole("link", { name: "Projekty", exact: true })).toBeVisible();

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "pl");
  await expect(page.getByRole("link", { name: "Projekty", exact: true })).toBeVisible();
});

test("robots.txt and sitemap.xml are served", async ({ request }) => {
  for (const path of ["/robots.txt", "/sitemap.xml"]) {
    expect((await request.get(path)).ok(), path).toBe(true);
  }
});
