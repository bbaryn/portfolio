"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, type ComponentProps, type PointerEvent, type ReactNode } from "react";
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

/** Tilts its content in 3D towards the mouse (mouse only, off for reduced motion). */
export function TiltCard({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), spring);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={() => (x.set(0), y.set(0))}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
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

/** Counts up from 0 to `value` once it scrolls into view. */
export function Ticker({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: reduce ? 0 : 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => ref.current && (ref.current.textContent = String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return <span ref={ref}>0</span>;
}

/** Fades and lifts content in when it enters the viewport. */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
