"use client";

import { Button } from "@/components/ui/button";
import { useLang } from "@/components/providers";
import { ui } from "@/lib/content";
import { cn } from "@/lib/utils";

const links = ["stack", "work", "experience", "contact"] as const;

export function Nav() {
  const { t, lang, setLang } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full py-1.5 pr-1.5 pl-5">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          BB<span className="text-violet-400">.</span>
        </a>
        <ul className="hidden gap-7 text-sm text-muted-foreground sm:flex">
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-foreground">
                {t(ui.nav[id])}
              </a>
            </li>
          ))}
        </ul>
        <div role="group" aria-label="Language" className="flex rounded-full border border-white/10 p-0.5">
          {(["en", "pl"] as const).map((l) => (
            <Button
              key={l}
              variant="ghost"
              size="xs"
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
              className={cn("rounded-full px-2.5 font-mono uppercase", lang === l ? "bg-white/10 text-foreground" : "text-muted-foreground")}
            >
              {l}
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
}
