import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { Nav } from "@/components/nav";
import { Providers } from "@/components/providers";

test("language toggle switches the nav to Polish and remembers the choice", async () => {
  render(
    <Providers>
      <Nav />
    </Providers>,
  );
  expect(screen.getByRole("link", { name: "Work" })).toBeTruthy();

  await userEvent.click(screen.getByRole("button", { name: "pl" }));

  expect(screen.getByRole("link", { name: "Projekty" })).toBeTruthy();
  expect(screen.getByRole("button", { name: "pl" }).getAttribute("aria-pressed")).toBe("true");
  expect(document.documentElement.lang).toBe("pl");
  expect(localStorage.getItem("lang")).toBe("pl");
});
