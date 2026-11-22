import type { PointerEvent } from "react";

export { cn } from "cn";

// Feeds the cursor position to CSS (--x/--y) for the spotlight effects, without React re-renders.
export function trackPointer(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}
