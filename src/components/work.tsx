"use client";

import { GlowCard, Reveal, SectionHeading } from "@/components/fx";
import { useLang } from "@/components/providers";
import { Badge } from "@/components/ui/badge";
import { caseStudies, ui } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Work() {
  const { t } = useLang();

  return (
    <section id="work" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading eyebrow={t(ui.work.eyebrow)} title={t(ui.work.title)} />
      <div className="grid gap-4 md:grid-cols-2">
        {caseStudies.map((c, i) => {
          const featured = i === 0;
          return (
            <Reveal key={c.title} className={cn(featured && "md:col-span-2")}>
              <GlowCard beam={featured} className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="text-sm text-brand-ink">{t(c.client)}</p>
                  <p className="font-mono text-xs text-muted-foreground">{t(c.period)}</p>
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{c.title}</h3>

                <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                  {c.metrics.map((m) => (
                    <div key={m.value}>
                      <p className="text-gradient font-mono text-3xl font-semibold tracking-tight sm:text-4xl">{m.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{t(m.label)}</p>
                    </div>
                  ))}
                </div>

                <div className={cn("mt-6 grid gap-5", featured && "md:grid-cols-2")}>
                  <Block label={t(ui.work.problem)} text={t(c.problem)} />
                  <Block label={t(ui.work.solution)} text={t(c.solution)} />
                </div>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {c.tech.map((x) => (
                    <li key={x}>
                      <Badge variant="outline" className="border-zinc-200 bg-white/70 font-mono text-[11px] font-normal text-muted-foreground">
                        {x}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mb-1.5 font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase">{label}</p>
      <p className="text-sm leading-relaxed text-pretty text-foreground/85">{text}</p>
    </div>
  );
}
