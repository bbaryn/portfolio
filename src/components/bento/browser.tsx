import { cn } from "@/lib/utils";

/** Web card: browser mockup with a concept analytics dashboard. */

const chartLine = "M0 62 C30 58 45 40 75 44 S120 60 150 38 S210 20 240 26 S280 12 300 8";

const kpis = [
  ["Sessions", "48.2k", "+12%"],
  ["Avg. rank", "3.4", "↑2"],
  ["LCP", "0.8s", "good"],
];

export function Browser() {
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
