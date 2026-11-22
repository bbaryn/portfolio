import { Check } from "lucide-react";

/** The three screens of the concept invoice app shown inside <Phone />. */

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

export const screens = [
  { name: "Scan", node: <ScanScreen /> },
  { name: "Review", node: <ReviewScreen /> },
  { name: "Insights", node: <InsightsScreen /> },
];
