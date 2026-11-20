// All site copy lives here. A plain string is shown in both languages; an { en, pl } pair is translated.
export type Lang = "en" | "pl";
export type T = string | Record<Lang, string>;

export const profile = {
  name: "Bartłomiej Baryń",
  email: "bartlomiej.baryn@gmail.com",
  linkedin: "https://www.linkedin.com/in/baryn-6337b7105",
  cv: "/Bartlomiej_Baryn_CV.pdf",
};

export const ui = {
  nav: {
    stack: { en: "Overview", pl: "W skrócie" },
    work: { en: "Work", pl: "Projekty" },
    experience: { en: "Experience", pl: "Doświadczenie" },
    contact: { en: "Contact", pl: "Kontakt" },
  },
  hero: {
    badge: { en: "Gliwice, Poland · 7+ years in production", pl: "Gliwice · 7+ lat komercyjnie" },
    role: "Senior Full-Stack & Mobile Engineer",
    summary: {
      en: "I design, build and maintain web, mobile and desktop products — React and React Native on the front, Node.js and AWS on the back. End-to-end features, direct client collaboration and software that holds up under real load.",
      pl: "Projektuję, buduję i utrzymuję produkty webowe, mobilne i desktopowe — React i React Native na froncie, Node.js i AWS na backendzie. Funkcje end-to-end, bezpośrednia współpraca z klientem i oprogramowanie, które wytrzymuje realne obciążenie.",
    },
    ctaWork: { en: "View projects", pl: "Zobacz projekty" },
    ctaCv: { en: "Download CV", pl: "Pobierz CV (EN)" },
  },
  stats: [
    { value: 7, suffix: "+", label: { en: "years of commercial experience", pl: "lat doświadczenia komercyjnego" } },
    { value: 25, prefix: "−", suffix: "%", label: { en: "fraudulent transactions", pl: "fraudulentnych transakcji" } },
    { value: 75, suffix: "%+", label: { en: "code shared web ↔ mobile", pl: "kodu wspólnego web ↔ mobile" } },
    { value: 60, prefix: "−", suffix: "%", label: { en: "manual invoice-processing time", pl: "czasu ręcznej obsługi faktur" } },
  ],
  bento: {
    eyebrow: { en: "Overview", pl: "W skrócie" },
    title: { en: "Web, mobile and the backend in between.", pl: "Web, mobile i backend pomiędzy." },
    mobileTitle: { en: "Mobile apps", pl: "Aplikacje mobilne" },
    mobileText: {
      en: "React Native, Tamagui & Ionic — one TypeScript codebase for iOS, Android and the web.",
      pl: "React Native, Tamagui i Ionic — jeden kod TypeScript dla iOS, Androida i weba.",
    },
    mobileNote: { en: "Concept preview · AI invoice app", pl: "Podgląd poglądowy · aplikacja do faktur z AI" },
    archTitle: { en: "End-to-end architecture", pl: "Architektura end-to-end" },
    archText: {
      en: "From the app in your pocket to the query plan in the database.",
      pl: "Od aplikacji w kieszeni po plan zapytania w bazie danych.",
    },
    stackTitle: { en: "Tech stack", pl: "Technologie" },
    all: { en: "All", pl: "Wszystko" },
    liveTitle: { en: "System status", pl: "Status systemu" },
    demo: { en: "demo data", pl: "dane demo" },
    operational: { en: "All systems operational", pl: "Wszystkie systemy działają" },
    latency: { en: "API latency", pl: "Opóźnienie API" },
    uptime: { en: "Uptime · 30 days", pl: "Dostępność · 30 dni" },
    localTime: { en: "Local time · Gliwice", pl: "Czas lokalny · Gliwice" },
  },
  work: {
    eyebrow: "Case studies",
    title: { en: "Selected work, measured in results.", pl: "Wybrane projekty i ich wyniki." },
    problem: "Problem",
    solution: { en: "Solution", pl: "Rozwiązanie" },
  },
  experience: {
    eyebrow: { en: "Experience", pl: "Doświadczenie" },
    title: { en: "Teams and products I work with.", pl: "Zespoły i produkty, które współtworzę." },
    education: { en: "Education", pl: "Wykształcenie" },
    languages: { en: "Languages", pl: "Języki" },
    beyond: { en: "Beyond code", pl: "Poza kodem" },
  },
  contact: {
    title: { en: "Let's build something reliable.", pl: "Zbudujmy coś niezawodnego." },
    text: {
      en: "Have a web, mobile or backend project in mind? Get in touch.",
      pl: "Masz w planach projekt webowy, mobilny lub backendowy? Napisz do mnie.",
    },
  },
};

export const stack: { id: string; label: T; items: string[] }[] = [
  { id: "frontend", label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "HTML5", "CSS3"] },
  { id: "mobile", label: "Mobile", items: ["React Native", "Tamagui", "Ionic"] },
  { id: "backend", label: "Backend", items: ["Node.js", "NestJS", "Express.js", "Python", "FastAPI", "Django", "Temporal", "REST APIs"] },
  { id: "data", label: { en: "Databases", pl: "Bazy danych" }, items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "InfluxDB", "Redis", "Drizzle ORM"] },
  { id: "devops", label: { en: "Cloud & DevOps", pl: "Chmura i DevOps" }, items: ["AWS", "AWS Lambda", "Docker", "CI/CD", "Vercel"] },
  { id: "tools", label: { en: "Desktop & tools", pl: "Desktop i narzędzia" }, items: ["Electron", "Git", "Jest", "Claude Code", "Cursor AI", "GitHub Copilot"] },
];

export const caseStudies: {
  title: string;
  client: T;
  period: T;
  problem: T;
  solution: T;
  metrics: { value: string; label: T }[];
  tech: string[];
}[] = [
  {
    title: "Anti-Fraud · Tech-Travel Platform",
    client: { en: "Future Processing · global UK-based company", pl: "Future Processing · globalna firma z UK" },
    period: { en: "Dec 2025 – present", pl: "gru 2025 – obecnie" },
    problem: {
      en: "A large-scale travel, loyalty and insurance platform processing millions of transactions needed stronger protection against fraud.",
      pl: "Platforma travel, loyalty i ubezpieczeń przetwarzająca miliony transakcji potrzebowała skuteczniejszej ochrony przed nadużyciami.",
    },
    solution: {
      en: "Real-time data-validation workflows on AWS Lambda and Node.js, built for low latency and fault tolerance, with integration standards shared across 3+ teams.",
      pl: "Walidacja danych w czasie rzeczywistym na AWS Lambda i Node.js — niskie opóźnienia, odporność na awarie i wspólne standardy integracji dla 3+ zespołów.",
    },
    metrics: [
      { value: "−25%", label: { en: "fraudulent transactions", pl: "fraudulentnych transakcji" } },
      { value: "3+", label: { en: "teams on shared integration standards", pl: "zespoły na wspólnych standardach" } },
    ],
    tech: ["Node.js", "AWS Lambda", "TypeScript", "React", "SnapLogic", ".NET"],
  },
  {
    title: "AI-Powered Accounting Platform",
    client: { en: "Swedish fintech company", pl: "Szwedzki fintech" },
    period: { en: "Apr 2026 – Oct 2026", pl: "kwi 2026 – paź 2026" },
    problem: {
      en: "Invoice processing was slow and manual, and the product had to work equally well on web and mobile.",
      pl: "Obsługa faktur była powolna i ręczna, a produkt musiał działać równie dobrze na webie i na mobile.",
    },
    solution: {
      en: "Web & mobile app with AI-powered invoice processing and OCR, a modular TypeScript architecture on Tamagui, and PostgreSQL tuned with Drizzle ORM and indexing.",
      pl: "Aplikacja web i mobile z przetwarzaniem faktur przez AI i OCR, modularna architektura TypeScript na Tamagui oraz PostgreSQL zoptymalizowany przez Drizzle ORM i indeksy.",
    },
    metrics: [
      { value: "−60%", label: { en: "manual invoice-processing time", pl: "czasu ręcznej obsługi faktur" } },
      { value: "75%+", label: { en: "code shared web ↔ mobile", pl: "kodu wspólnego web ↔ mobile" } },
    ],
    tech: ["React Native", "React", "Tamagui", "Python", "Temporal", "Drizzle ORM", "PostgreSQL"],
  },
  {
    title: "Mobile Medical Application",
    client: "Vidal MMI",
    period: { en: "Nov 2025 – May 2026", pl: "lis 2025 – maj 2026" },
    problem: {
      en: "Offline data-sync issues caused crashes, and search had to meet WCAG accessibility requirements.",
      pl: "Problemy z synchronizacją offline powodowały awarie, a wyszukiwarka musiała spełniać wymagania WCAG.",
    },
    solution: {
      en: "Resolved offline data synchronisation and redesigned the search interface around accessibility and usability.",
      pl: "Naprawiona synchronizacja offline i przeprojektowana wyszukiwarka z naciskiem na dostępność i użyteczność.",
    },
    metrics: [{ value: "<0.2%", label: { en: "crash rate on iOS & Android", pl: "crash rate na iOS i Androidzie" } }],
    tech: ["Ionic", "React", "TypeScript", "REST APIs"],
  },
  {
    title: "SEO & AI Content Platform",
    client: "Rellify",
    period: { en: "Jan 2025 – Nov 2025", pl: "sty 2025 – lis 2025" },
    problem: {
      en: "Content teams needed faster search-rank analysis and content creation.",
      pl: "Zespoły contentowe potrzebowały szybszej analizy pozycji w wyszukiwarce i tworzenia treści.",
    },
    solution: {
      en: "Interactive SEO dashboard with AI-assisted content generation, backed by NestJS REST APIs processing search metrics on DynamoDB.",
      pl: "Interaktywny dashboard SEO z generowaniem treści wspieranym przez AI, oparty na API NestJS przetwarzającym metryki w DynamoDB.",
    },
    metrics: [{ value: "3×", label: { en: "faster content generation", pl: "szybsze generowanie treści" } }],
    tech: ["React", "NestJS", "AWS", "DynamoDB", "Python", "FastAPI"],
  },
  {
    title: "Skyfld SaaS Platform",
    client: "Helm AG",
    period: { en: "Mar 2019 – May 2021", pl: "mar 2019 – maj 2021" },
    problem: {
      en: "Releases of a financial and agricultural mapping platform took days.",
      pl: "Wydania platformy finansowo-rolniczej z mapami trwały całe dni.",
    },
    solution: {
      en: "Standardised CI/CD on Docker and AWS, plus invoice processing, geolocation and real-time push notifications.",
      pl: "Ustandaryzowane CI/CD na Docker i AWS oraz przetwarzanie faktur, geolokalizacja i powiadomienia push w czasie rzeczywistym.",
    },
    metrics: [{ value: "<30 min", label: { en: "release time, down from days", pl: "czas wydania zamiast dni" } }],
    tech: ["Node.js", "NestJS", "React", "Django", "Docker", "AWS", "PostgreSQL"],
  },
];

export const experience: {
  period: T;
  company: string;
  type: T;
  projects: { name: string; client?: T; text: T }[];
}[] = [
  {
    period: { en: "Dec 2025 – present", pl: "gru 2025 – obecnie" },
    company: "Future Processing",
    type: { en: "B2B contractor", pl: "Kontrakt B2B" },
    projects: [
      {
        name: "Tech-Travel Platform",
        client: { en: "Global UK-based company", pl: "Globalna firma z UK" },
        text: {
          en: "Anti-fraud team on a high-load platform processing millions of transactions.",
          pl: "Zespół anti-fraud na wysoko obciążonej platformie przetwarzającej miliony transakcji.",
        },
      },
    ],
  },
  {
    period: { en: "Feb 2024 – Sep 2026", pl: "lut 2024 – wrz 2026" },
    company: "Freelance",
    type: { en: "Independent B2B contractor · multiple clients", pl: "Własna działalność B2B · wielu klientów" },
    projects: [
      {
        name: "AI-Powered Accounting Platform",
        client: { en: "Swedish fintech", pl: "Szwedzki fintech" },
        text: { en: "Web & mobile app with AI invoice processing and OCR.", pl: "Aplikacja web i mobile z przetwarzaniem faktur przez AI i OCR." },
      },
      {
        name: "Mobile Medical Application",
        client: "Vidal MMI",
        text: { en: "Accessible healthcare app with reliable offline sync.", pl: "Dostępna aplikacja medyczna z niezawodną synchronizacją offline." },
      },
      {
        name: "Real-Time Translation Platform",
        client: "MVP",
        text: {
          en: "Real-time translation for online meetings and phone calls.",
          pl: "Tłumaczenie w czasie rzeczywistym podczas spotkań online i rozmów telefonicznych.",
        },
      },
      {
        name: "SEO & AI Content Platform",
        client: "Rellify",
        text: { en: "SEO dashboard and AI-assisted content generation.", pl: "Dashboard SEO i generowanie treści wspierane przez AI." },
      },
      {
        name: "Industrial Fluid-Flow Monitoring",
        text: {
          en: "Performant data visualisation plotting thousands of data points.",
          pl: "Wydajna wizualizacja danych z tysiącami punktów pomiarowych.",
        },
      },
      {
        name: "Gamified Fitness & Event Platform",
        text: {
          en: "Mobile features and APIs linking virtual challenges to real-world achievements.",
          pl: "Funkcje mobilne i API łączące wirtualne wyzwania z realnymi osiągnięciami.",
        },
      },
    ],
  },
  {
    period: { en: "Sep 2022 – Jan 2024", pl: "wrz 2022 – sty 2024" },
    company: "Software Interactive",
    type: { en: "B2B contractor", pl: "Kontrakt B2B" },
    projects: [
      {
        name: "SaaS Desktop Application",
        client: "Zebra Technologies",
        text: {
          en: "Electron + React desktop app: new features, better workflows, higher reliability.",
          pl: "Aplikacja desktopowa Electron + React: nowe funkcje, lepsze procesy, większa niezawodność.",
        },
      },
    ],
  },
  {
    period: { en: "Jun 2021 – Aug 2022", pl: "cze 2021 – sie 2022" },
    company: "Bitnoise",
    type: { en: "B2B contractor", pl: "Kontrakt B2B" },
    projects: [
      {
        name: "High-Performance E-Commerce",
        client: "Ursa Major",
        text: { en: "Fast-loading storefront focused on frontend performance.", pl: "Szybki sklep internetowy z naciskiem na wydajność frontendu." },
      },
    ],
  },
  {
    period: { en: "Mar 2019 – May 2021", pl: "mar 2019 – maj 2021" },
    company: "Moodup Team",
    type: { en: "B2B contractor", pl: "Kontrakt B2B" },
    projects: [
      {
        name: "Skyfld SaaS Platform",
        client: "Helm AG",
        text: {
          en: "Invoice processing, geolocation and push notifications; CI/CD on Docker & AWS.",
          pl: "Przetwarzanie faktur, geolokalizacja i powiadomienia push; CI/CD na Docker i AWS.",
        },
      },
    ],
  },
];

export const education: { period: string; title: T; school: T }[] = [
  {
    period: "2014 – 2015",
    title: {
      en: "MSc, Biomedical Engineering (Biomechanics & Medical Equipment)",
      pl: "Studia magisterskie, Inżynieria Biomedyczna (Biomechanika i aparatura medyczna)",
    },
    school: { en: "Silesian University of Technology", pl: "Politechnika Śląska" },
  },
  {
    period: "2010 – 2014",
    title: {
      en: "BSc, Biomedical Engineering (Medical Device Engineering)",
      pl: "Studia inżynierskie, Inżynieria Biomedyczna (Inżynieria urządzeń medycznych)",
    },
    school: { en: "Silesian University of Technology", pl: "Politechnika Śląska" },
  },
];

export const languages: T[] = [
  { en: "Polish — native", pl: "Polski — ojczysty" },
  { en: "English — B2", pl: "Angielski — B2" },
];

export const beyondCode: T[] = [
  { en: "Direct client collaboration", pl: "Bezpośrednia współpraca z klientem" },
  { en: "Cross-functional delivery with QA & UX/UI", pl: "Praca z QA i UX/UI w zespołach interdyscyplinarnych" },
  { en: "Mentoring and interviewing interns", pl: "Mentoring i rekrutacja stażystów" },
  { en: "AI-assisted development (Claude Code, Cursor, Copilot)", pl: "Programowanie wspierane AI (Claude Code, Cursor, Copilot)" },
];
