import { Database, Server, Smartphone, Zap } from "lucide-react";

/** Architecture card: client → API → cache → DB with animated beams between nodes. */

const nodes = [
  { icon: Smartphone, label: "Client", tech: "React Native" },
  { icon: Server, label: "API", tech: "Node · NestJS" },
  { icon: Zap, label: "Cache", tech: "Redis" },
  { icon: Database, label: "DB", tech: "PostgreSQL" },
];

export function Flow() {
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
