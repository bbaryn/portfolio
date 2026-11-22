"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { GlowCard, Magnetic, Reveal } from "@/components/fx";
import { useLang } from "@/components/providers";
import { buttonVariants } from "@/components/ui/button";
import { profile, ui } from "@/lib/content";
import { cn } from "@/lib/utils";

const pill = cn(buttonVariants({ variant: "outline", size: "lg" }), "glass h-11 rounded-full px-5");

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 pt-24 pb-10">
      <Reveal>
        <GlowCard beam className="px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(60%_60%_at_50%_0%,rgb(var(--brand)/0.14),transparent)]"
          />
          <h2 className="relative text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{t(ui.contact.title)}</h2>
          <p className="relative mt-4 text-muted-foreground">{t(ui.contact.text)}</p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full bg-zinc-950 px-5 text-white hover:bg-zinc-800")}
              >
                <Mail />
                {profile.email}
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={pill}>
                LinkedIn
                <ArrowUpRight />
              </a>
            </Magnetic>
          </div>
        </GlowCard>
      </Reveal>

      <footer className="mt-16 flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
        <p>© {profile.name}</p>
        <p className="font-mono">Next.js · Tailwind CSS · shadcn/ui · Motion · Lenis</p>
      </footer>
    </section>
  );
}
