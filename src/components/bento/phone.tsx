"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { screens } from "./phone-screens";

/** Mobile card: phone mockup that auto-cycles through the concept app screens. */
export function Phone() {
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
