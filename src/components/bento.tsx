"use client";

import { Check, Database, Layers, Monitor, Server, Smartphone, Zap } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { GlowCard, Reveal, SectionHeading, TiltCard } from "@/components/fx";
import { useLang } from "@/components/providers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stack, ui } from "@/lib/content";
import { cn } from "@/lib/utils";

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

function CardHead({ icon: Icon, title, text }: { icon: typeof Server; title: string; text?: string }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 font-medium">
        <Icon className="size-4 text-violet-600" aria-hidden />
        {title}
      </h3>
      {text && <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}

/* ---------- Web: browser mockup with a concept analytics dashboard ---------- */

const chartLine = "M0 62 C30 58 45 40 75 44 S120 60 150 38 S210 20 240 26 S280 12 300 8";

function Browser() {
  const kpis = [
    ["Sessions", "48.2k", "+12%"],
    ["Avg. rank", "3.4", "↑2"],
    ["LCP", "0.8s", "good"],
  ];
  return (
    <div className="flex-1 overflow-hidden rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-[0_24px_60px_-28px_rgb(79_70_229/0.45)]">
      <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-50 px-3 py-2">
        <span className="size-2.5 rounded-full bg-rose-400" />
        <span className="size-2.5 rounded-full bg-amber-300" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="mx-auto w-1/2 truncate rounded-md bg-zinc-100 px-3 py-0.5 text-center font-mono text-[10px] text-zinc-500">
          app.example.com/analytics
        </span>
      </div>
      <div className="flex">
        <div aria-hidden className="hidden w-28 shrink-0 flex-col gap-3 border-r border-zinc-100 p-3 sm:flex">
          {[70, 85, 55, 75, 60].map((w, k) => (
            <span key={k} className={cn("h-2 rounded-full", k === 0 ? "bg-violet-500" : "bg-zinc-200")} style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="min-w-0 flex-1 space-y-3 p-3">
          <div className="grid grid-cols-3 gap-2">
            {kpis.map(([k, v, d]) => (
              <div key={k} className="rounded-lg border border-zinc-100 bg-zinc-50 p-2">
                <p className="truncate text-[10px] text-zinc-500">{k}</p>
                <p className="font-mono text-sm font-semibold">
                  {v} <span className="text-[10px] font-normal text-emerald-600">{d}</span>
                </p>
              </div>
            ))}
          </div>
          {/* the line draws itself as the card scrolls into view (.draw in globals.css) */}
          <svg viewBox="0 0 300 80" className="draw-scope w-full" aria-hidden>
            <defs>
              <linearGradient id="web-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${chartLine} L300 80 L0 80 Z`} fill="url(#web-area)" />
            <path d={chartLine} pathLength={1} className="draw" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------- Mobile: phone mockup with an auto-cycling concept app ---------- */

const screens = [
  { name: "Scan", node: <ScanScreen /> },
  { name: "Review", node: <ReviewScreen /> },
  { name: "Insights", node: <InsightsScreen /> },
];

function Phone() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return; // no auto-advancing content for reduced-motion users; dots still work
    const id = setTimeout(() => setI((v) => (v + 1) % screens.length), 3200);
    return () => clearTimeout(id);
  }, [i, reduce]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <div className="relative aspect-[9/19] w-[200px] rounded-[2.4rem] border border-white/15 bg-zinc-950 p-2 shadow-[0_30px_80px_-20px_rgb(124_58_237/0.5)]">
        <div className="absolute top-3.5 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-full overflow-hidden rounded-[1.9rem] bg-linear-to-b from-zinc-900 to-zinc-950 text-white">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={i}
              className="h-full"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              {screens[i].node}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex gap-1.5">
        {screens.map((s, k) => (
          <button
            key={s.name}
            aria-label={s.name}
            aria-pressed={k === i}
            onClick={() => setI(k)}
            className={cn("h-1.5 rounded-full transition-all", k === i ? "w-6 bg-violet-500" : "w-1.5 bg-zinc-300 hover:bg-zinc-400")}
          />
        ))}
      </div>
    </div>
  );
}

function ScreenTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <>
      <p className="text-[10px] text-white/50">{kicker}</p>
      <p className="text-sm font-semibold">{title}</p>
    </>
  );
}

function ScanScreen() {
  return (
    <div className="flex h-full flex-col p-4 pt-10">
      <ScreenTitle kicker="Invoices" title="Scan invoice" />
      <div className="relative mt-4 flex-1 overflow-hidden rounded-xl border border-dashed border-violet-400/40 bg-white/[0.03] p-3">
        {[70, 45, 85, 60, 40, 75, 55, 65].map((w, k) => (
          <div key={k} className="mb-2.5 h-1.5 rounded bg-white/15" style={{ width: `${w}%` }} />
        ))}
        <div className="absolute inset-x-0 h-10 animate-[scan_2.4s_ease-in-out_infinite] bg-linear-to-b from-transparent via-cyan-400/40 to-transparent" />
      </div>
      <div className="mt-3 rounded-lg bg-violet-500/20 py-2 text-center text-[11px] font-medium text-violet-200">AI · OCR running…</div>
    </div>
  );
}

function ReviewScreen() {
  const fields = [
    ["Vendor", "Nordic AB"],
    ["Amount", "12 480 SEK"],
    ["VAT", "25%"],
    ["Due", "14 Dec"],
  ];
  return (
    <div className="flex h-full flex-col p-4 pt-10">
      <ScreenTitle kicker="Extracted" title="Review data" />
      <ul className="mt-4 space-y-2">
        {fields.map(([k, v]) => (
          <li key={k} className="flex items-center justify-between rounded-lg bg-white/[0.05] px-2.5 py-2">
            <span className="text-[10px] text-white/50">{k}</span>
            <span className="flex items-center gap-1 text-[11px] font-medium">
              {v}
              <Check className="size-3 text-emerald-400" />
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto rounded-lg bg-emerald-500/20 py-2 text-center text-[11px] font-medium text-emerald-200">Approve</div>
    </div>
  );
}

function InsightsScreen() {
  return (
    <div className="flex h-full flex-col p-4 pt-10">
      <ScreenTitle kicker="Insights" title="Manual work" />
      <p className="mt-3 font-mono text-2xl font-semibold text-emerald-300">−60%</p>
      <div className="mt-auto flex h-32 items-end gap-2">
        {[90, 78, 64, 52, 41, 36].map((h, k) => (
          <div key={k} className="flex-1 rounded-t bg-linear-to-t from-violet-500/40 to-cyan-400/70" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[9px] text-white/40">
        <span>Jan</span>
        <span>Jun</span>
      </div>
    </div>
  );
}

/* ---------- Card 2: request flow with animated beams ---------- */

const nodes = [
  { icon: Smartphone, label: "Client", tech: "React Native" },
  { icon: Server, label: "API", tech: "Node · NestJS" },
  { icon: Zap, label: "Cache", tech: "Redis" },
  { icon: Database, label: "DB", tech: "PostgreSQL" },
];

function Flow() {
  return (
    <div className="mt-auto space-y-6">
      <div className="flex items-start">
        {nodes.map(({ icon: Icon, label, tech }, k) => (
          <div key={label} className="contents">
            {k > 0 && (
              <div aria-hidden className="relative mt-6 h-px flex-1 overflow-hidden bg-zinc-200">
                <span
                  className="absolute inset-y-0 w-1/2 animate-[beam_2.4s_linear_infinite] bg-linear-to-r from-transparent via-violet-500 to-transparent"
                  style={{ animationDelay: `${k * 0.4}s` }}
                />
              </div>
            )}
            <div className="flex w-16 flex-col items-center gap-2 text-center sm:w-24">
              <div className="grid size-12 place-items-center rounded-xl border border-zinc-200 bg-white shadow-[0_8px_24px_-10px_rgb(139_92_246/0.55)]">
                <Icon className="size-5 text-violet-600" aria-hidden />
              </div>
              <span className="text-xs font-medium">{label}</span>
              <span className="-mt-1.5 font-mono text-[10px] leading-tight text-muted-foreground">{tech}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="truncate rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 font-mono text-[11px] text-muted-foreground">
        GET /api/invoices <span className="text-emerald-600">200</span> · cache hit · 12 ms
      </p>
    </div>
  );
}

/* ---------- Card 3: tech stack with category highlight ---------- */

function StackMatrix() {
  const { t } = useLang();
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <CardHead icon={Layers} title={t(b.stackTitle)} />
      <div className="mt-4 flex flex-wrap gap-1" role="group" aria-label={t(b.stackTitle)}>
        {[{ id: null, label: t(b.all) }, ...stack.map((g) => ({ id: g.id, label: t(g.label) }))].map((f) => (
          <Button
            key={f.label}
            variant="ghost"
            size="xs"
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
            className={cn("rounded-full px-2.5", active === f.id ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background" : "text-muted-foreground")}
          >
            {f.label}
          </Button>
        ))}
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {stack.flatMap((g) =>
          g.items.map((item) => {
            const on = active === g.id;
            const dim = active !== null && !on;
            return (
              <li key={item}>
                <Badge
                  variant="outline"
                  className={cn(
                    "h-7 rounded-lg border-zinc-200 bg-white px-2.5 text-[13px] font-normal transition-all duration-300 hover:border-violet-400 hover:shadow-[0_0_16px_-6px_rgb(139_92_246/0.6)]",
                    on && "border-violet-400 bg-violet-50 text-violet-700 shadow-[0_0_16px_-6px_rgb(139_92_246/0.6)]",
                    dim && "opacity-25",
                  )}
                >
                  {item}
                </Badge>
              </li>
            );
          }),
        )}
      </ul>
    </>
  );
}

/* ---------- Card 4: simulated live status ---------- */

const tick = (cb: () => void) => {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
};

function LiveStatus() {
  const { t, lang } = useLang();
  // shortcut: simulated metrics (labelled "demo data"); swap for a real /api/status or GitHub API call when there is one.
  const [lat, setLat] = useState(() => Array.from({ length: 24 }, (_, k) => 12 + Math.sin(k / 2) * 2));
  useEffect(() => {
    const id = setInterval(() => setLat((a) => [...a.slice(1), 9 + Math.random() * 7]), 1500);
    return () => clearInterval(id);
  }, []);

  const fmt = new Intl.DateTimeFormat(lang === "pl" ? "pl-PL" : "en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Warsaw" });
  const time = useSyncExternalStore(tick, () => fmt.format(Date.now()), () => "--:--:--");

  const points = lat.map((v, k) => `${(k / (lat.length - 1)) * 100},${30 - ((v - 6) / 12) * 30}`).join(" ");

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{t(b.liveTitle)}</h3>
        <Badge variant="outline" className="font-mono text-[10px] text-muted-foreground">
          {t(b.demo)}
        </Badge>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <dt className="text-xs text-muted-foreground">Status</dt>
          <dd className="mt-2 flex items-center gap-2 text-sm font-medium">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {t(b.operational)}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">{t(b.latency)}</dt>
          <dd className="mt-1 flex items-end gap-3">
            <span className="font-mono text-2xl font-semibold tabular-nums">{Math.round(lat[lat.length - 1])}ms</span>
            <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="mb-1 h-6 flex-1" aria-hidden>
              <polyline points={points} fill="none" stroke="#0891b2" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            </svg>
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">{t(b.uptime)}</dt>
          <dd className="mt-1 font-mono text-2xl font-semibold">99.98%</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">{t(b.localTime)}</dt>
          <dd className="mt-1 font-mono text-2xl font-semibold tabular-nums">{time}</dd>
        </div>
      </dl>
    </>
  );
}
