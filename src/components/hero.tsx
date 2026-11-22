"use client";

import { ArrowDown, Mail } from "lucide-react";
import type { CSSProperties } from "react";
import { Magnetic } from "@/components/fx";
import { useLang } from "@/components/providers";
import { buttonVariants } from "@/components/ui/button";
import { profile, ui } from "@/lib/content";
import { cn, trackPointer } from "@/lib/utils";

// Stagger index for the CSS entrance animation (CSS, not JS, so the hero paints before hydration).
const step = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      onPointerMove={trackPointer}
      className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden px-4 pt-28 pb-16"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-48 left-1/2 h-[480px] w-[min(760px,120vw)] -translate-x-1/2 animate-[glow_8s_ease-in-out_infinite] rounded-full bg-violet-400/40 blur-[120px]" />
        <div className="absolute top-24 -left-24 size-80 animate-[float_14s_ease-in-out_infinite] rounded-full bg-cyan-300/45 blur-[100px]" />
        <div className="absolute top-48 -right-24 size-80 animate-[float_18s_ease-in-out_infinite_reverse] rounded-full bg-indigo-300/45 blur-[100px]" />
        <div className="hero-spot absolute inset-0" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <span className="rise glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground" style={step(0)}>
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          {t(ui.hero.badge)}
        </span>

        <h1 className="mt-6 text-5xl font-semibold tracking-tighter sm:text-7xl md:text-8xl">
          {profile.name.split(" ").map((word, i) => (
            <span key={word} className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
              <span className="rise inline-block bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-transparent" style={step(i + 1)}>
                {word}
              </span>
            </span>
          ))}
          {/* role sits inside the h1 so the main heading carries the searched-for keywords */}
          <span className="rise text-gradient mt-3 block text-xl font-medium tracking-tight sm:text-3xl" style={step(3)}>
            {ui.hero.role}
          </span>
        </h1>
        <p className="rise mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg" style={step(4)}>
          {t(ui.hero.summary)}
        </p>

        <div className="rise mt-10 flex flex-wrap gap-4" style={step(5)}>
          <Magnetic>
            <a
              href="#work"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group h-11 rounded-full bg-zinc-950 px-6 text-white shadow-[0_10px_40px_-10px_rgb(124_58_237/0.7)] hover:bg-zinc-800 hover:shadow-[0_14px_50px_-8px_rgb(124_58_237/0.8)]",
              )}
            >
              {t(ui.hero.ctaWork)}
              <ArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "glass h-11 rounded-full px-6")}>
              <Mail />
              {t(ui.hero.ctaContact)}
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
