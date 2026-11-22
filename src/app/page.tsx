import { Bento } from "@/components/bento";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Work } from "@/components/work";
import { profile, stack, ui } from "@/lib/content";
import { siteUrl } from "@/lib/site";

// Schema.org structured data: tells Google this is a person's profile page.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    jobTitle: ui.hero.role,
    url: siteUrl,
    sameAs: [profile.linkedin],
    address: { "@type": "PostalAddress", addressLocality: "Gliwice", addressCountry: "PL" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Silesian University of Technology" },
    knowsLanguage: ["pl", "en"],
    knowsAbout: stack.flatMap((g) => g.items),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // escape "<" so the JSON can never close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main>
        <Hero />
        <Bento />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
