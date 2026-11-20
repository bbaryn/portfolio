"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang, T } from "@/lib/content";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "en", setLang: () => {} });

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const reduce = useReducedMotion();

  // shortcut: language is a client-side toggle (no /pl route), so search engines index EN only; move to next-intl routing if PL SEO matters.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("lang");
    } catch {}
    const initial = saved === "pl" || saved === "en" ? saved : navigator.language.startsWith("pl") ? "pl" : "en";
    // eslint-disable-next-line react-hooks/set-state-in-effect -- must read localStorage after hydration
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  return (
    <LangCtx value={{ lang, setLang }}>
      <MotionConfig reducedMotion="user">
        {!reduce && <ReactLenis root options={{ anchors: true, lerp: 0.1 }} />}
        {children}
      </MotionConfig>
    </LangCtx>
  );
}

export function useLang() {
  const { lang, setLang } = useContext(LangCtx);
  return { lang, setLang, t: (s: T) => (typeof s === "string" ? s : s[lang]) };
}
