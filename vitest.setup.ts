// jsdom has no window.matchMedia. Reporting "prefers-reduced-motion" makes Providers skip Lenis
// (which also needs ResizeObserver etc.) and keeps tests free of animations.
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: query.includes("reduced-motion"),
      media: query,
      onchange: null,
      addEventListener() {},
      removeEventListener() {},
      addListener() {},
      removeListener() {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}
