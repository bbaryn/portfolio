"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { GlowCard, Reveal, SectionHeading } from "@/components/fx";
import { useLang } from "@/components/providers";
import { beyondCode, experience, languages, ui } from "@/lib/content";

export function Experience() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const e = ui.experience;

  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading eyebrow={t(e.eyebrow)} title={t(e.title)} />

      <div ref={ref} className="relative ml-1">
        {/* timeline fills as you scroll */}
        <motion.div
          aria-hidden
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-0 z-10 h-full w-px origin-top bg-linear-to-b from-brand via-brand-2 to-brand/0"
        />
        <ol className="border-l border-zinc-200">
          {experience.map((job) => (
            <li key={job.company} className="relative pb-14 pl-8 last:pb-0">
              <span className="absolute top-1.5 -left-1.25 size-2.5 rounded-full bg-brand shadow-[0_0_0_4px_rgb(var(--brand)/0.18)]" />
              <Reveal>
                <p className="font-mono text-xs text-muted-foreground">{t(job.period)}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {job.company} <span className="text-sm font-normal text-muted-foreground">· {t(job.type)}</span>
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {job.projects.map((p) => (
                    <li key={p.name}>
                      <GlowCard className="h-full rounded-xl p-4">
                        <p className="text-sm font-medium">
                          {p.name}
                          {p.client && <span className="text-brand-ink"> · {t(p.client)}</span>}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">{t(p.text)}</p>
                      </GlowCard>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-20 grid gap-4 md:grid-cols-2">
        <Reveal>
          <GlowCard className="h-full p-6">
            <h3 className="font-medium">{t(e.languages)}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {languages.map((l) => (
                <li key={t(l)}>{t(l)}</li>
              ))}
            </ul>
          </GlowCard>
        </Reveal>
        <Reveal>
          <GlowCard className="h-full p-6">
            <h3 className="font-medium">{t(e.beyond)}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {beyondCode.map((b) => (
                <li key={t(b)}>{t(b)}</li>
              ))}
            </ul>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
