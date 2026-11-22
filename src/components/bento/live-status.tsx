"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useLang } from "@/components/providers";
import { Badge } from "@/components/ui/badge";
import { ui } from "@/lib/content";

const b = ui.bento;

const tick = (cb: () => void) => {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
};

/** Status card: simulated API latency + uptime, and the real local time in Gliwice. */
export function LiveStatus() {
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
              <polyline points={points} fill="none" className="stroke-brand-2" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
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
