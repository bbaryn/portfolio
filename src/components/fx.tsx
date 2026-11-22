"use client";

import { motion, useReducedMotion, useSpring } from "motion/react";
import type { ComponentProps, PointerEvent, ReactNode } from "react";
import { cn, trackPointer } from "@/lib/utils";

const spring = { stiffness: 220, damping: 18, mass: 0.4 };

/** Glass card whose border and surface light up under the cursor. `beam` adds a rotating border light. */
export function GlowCard({ className, children, beam, ...props }: ComponentProps<"div"> & { beam?: boolean }) {
  return (
    <div onPointerMove={trackPointer} className={cn("glass spotlight relative rounded-2xl", className)} {...props}>
      {beam && <span aria-hidden className="border-beam" />}
      {children}
    </div>
  );
}

/** Pulls its child slightly towards the cursor. */
export function Magnetic({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };

  return (
    <motion.div onPointerMove={onMove} onPointerLeave={() => (x.set(0), y.set(0))} style={{ x, y }} className="inline-block">
      {children}
    </motion.div>
  );
}

/** Fades content in as it scrolls into view. Pure CSS scroll-driven animation (.reveal in globals.css): no JS, runs off the main thread. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("reveal", className)}>{children}</div>;
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-ink">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
