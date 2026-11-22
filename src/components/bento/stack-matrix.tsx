"use client";

import { Layers } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/components/providers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stack, ui } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CardHead } from "./card-head";

const b = ui.bento;

/** Tech stack card: all technologies, with a category filter that highlights one group. */
export function StackMatrix() {
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
