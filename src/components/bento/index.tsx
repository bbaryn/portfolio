"use client";

import { Monitor, Server, Smartphone } from "lucide-react";
import { GlowCard, Reveal, SectionHeading, TiltCard } from "@/components/fx";
import { useLang } from "@/components/providers";
import { ui } from "@/lib/content";
import { Browser } from "./browser";
import { CardHead } from "./card-head";
import { Flow } from "./flow";
import { LiveStatus } from "./live-status";
import { Phone } from "./phone";
import { StackMatrix } from "./stack-matrix";

const b = ui.bento;

export function Bento() {
  const { t } = useLang();

  return (
    <section id="stack" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading eyebrow={t(b.eyebrow)} title={t(b.title)} />
      {/* md: web (2 cols) + mobile (2 rows) / architecture (2 cols) / stack (2 cols) + status */}
      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <GlowCard className="flex h-full flex-col gap-6 p-6">
            <CardHead icon={Monitor} title={t(b.webTitle)} text={t(b.webText)} />
            <Browser />
            <p className="text-center font-mono text-[11px] text-muted-foreground">{t(b.webNote)}</p>
          </GlowCard>
        </Reveal>
        <Reveal className="md:row-span-2">
          <TiltCard className="h-full">
            <GlowCard className="flex h-full flex-col gap-6 p-6">
              <CardHead icon={Smartphone} title={t(b.mobileTitle)} text={t(b.mobileText)} />
              <Phone />
              <p className="text-center font-mono text-[11px] text-muted-foreground">{t(b.mobileNote)}</p>
            </GlowCard>
          </TiltCard>
        </Reveal>
        <Reveal className="md:col-span-2">
          <GlowCard beam className="flex h-full flex-col gap-8 p-6">
            <CardHead icon={Server} title={t(b.archTitle)} text={t(b.archText)} />
            <Flow />
          </GlowCard>
        </Reveal>
        <Reveal className="md:col-span-2">
          <GlowCard className="h-full p-6">
            <StackMatrix />
          </GlowCard>
        </Reveal>
        <Reveal>
          <GlowCard className="h-full p-6">
            <LiveStatus />
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
