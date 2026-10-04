import type { Metadata } from "next";
import Link from "next/link";
import { getPopularRegions, getRegionsByCountry } from "@/data/regions";
import { grapes } from "@/data/grapes";
import { countries } from "@/data/countries";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { LinkCard, CardGrid, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: `${SITE_NAME} — A Complete Guide to the World's Wine`,
  description:
    "Explore wine countries, regions, grape varieties, wine styles, food pairings, and wine travel guides. Authoritative, editorial-quality wine education for every level.",
  alternates: { canonical: SITE_URL },
};

export default async function HomePage() {
  const featuredRegions = getPopularRegions(6);
  const featuredGrapes = grapes
    .filter((g) =>
      [
        "cabernet-sauvignon",
        "pinot-noir",
        "chardonnay",
        "syrah",
        "riesling",
        "sauvignon-blanc",
        "malbec",
        "pinot-grigio",
      ].includes(g.slug)
    )
    .slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--c-paper)] pt-16 pb-28">
        {/* Ambient wine-tinted glows + vine motif for depth */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(196,151,74,0.18),transparent_60%)]" />
          <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(122,46,59,0.14),transparent_60%)]" />
          <div className="absolute right-[16%] top-[30%] hidden lg:block opacity-[0.14]" style={{ transform: "rotate(12deg)" }}>
            <svg width="340" height="380" viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="350" r="210" stroke="#7a2e3b" strokeWidth="1"/>
              <circle cx="300" cy="350" r="150" stroke="#7a2e3b" strokeWidth="0.5"/>
              <path d="M300 150 Q410 250 300 350 Q190 450 300 550" stroke="#7a2e3b" strokeWidth="2.5" fill="none"/>
              <circle cx="300" cy="150" r="18" fill="#7a2e3b" opacity="0.55"/>
              <circle cx="412" cy="252" r="12" fill="#c4974a" opacity="0.6"/>
              <circle cx="190" cy="448" r="10" fill="#7a2e3b" opacity="0.5"/>
              <circle cx="300" cy="550" r="8" fill="#c4974a" opacity="0.55"/>
            </svg>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2.5 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--c-gold)] font-semibold mb-5">
              <span aria-hidden className="h-px w-8 bg-[var(--c-gold)]" />
              Your wine education starts here
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[4.25rem] tracking-tight text-[var(--c-ink)] leading-[1.06] mb-6">
              The world&apos;s wines,{" "}
              <em className="not-italic text-[var(--c-wine)] underline decoration-[var(--c-gold)] decoration-2 underline-offset-[6px]">
                explained with care
              </em>
            </h1>
            <p className="lede text-xl mb-10 max-w-xl">
              Country guides, deep regional coverage, grape variety profiles,
              wine styles, food pairings, wine school and travel — all in one
              editorial reference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/wine-regions/" className="btn-wine">
                Explore Wine Regions
                <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/wine-school/" className="btn-ghost">
                Start with Wine School
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Country nav */}
      <div className="bg-[var(--c-paper-2)] border-y border-[#e5dccb]">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-wrap gap-x-7 gap-y-2 items-center text-sm">
            <span className="text-[0.7rem] uppercase tracking-widest text-[var(--c-ink-soft)] font-medium shrink-0">
              Explore by country:
            </span>
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}/`}
                className="hover:text-[var(--c-wine)] text-[var(--c-ink-soft)] transition font-medium"
              >
                {c.flagEmoji} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Regions */}
      <Section eyebrow="Wine Regions" title="Explore the world's wine regions">
        <CardGrid cols={3}>
          {featuredRegions.map((region) => (
            <LinkCard
              key={region.slug}
              href={`/${region.countrySlug}/${region.slug}/`}
              title={region.name}
              blurb={region.description.slice(0, 130) + "…"}
              chips={[region.country, ...region.mainWineStyles.slice(0, 2)]}
            />
          ))}
        </CardGrid>
        <div className="mt-8 text-center">
          <Link href="/wine-regions/" className="btn-ghost">
            Browse all wine regions
          </Link>
        </div>
      </Section>

      {/* Grapes teaser */}
      <div className="bg-[var(--c-paper-2)]">
        <Section
          eyebrow="Grape Varieties"
          title="Know your grapes"
          intro={`${grapes.length} grape varieties covered — from the classics to the curious.`}
          className="py-14"
        >
          <CardGrid cols={4}>
            {featuredGrapes.map((grape) => (
              <LinkCard
                key={grape.slug}
                href={`/grapes/${grape.slug}/`}
                title={grape.name}
                blurb={grape.description.slice(0, 100) + "…"}
                chips={[grape.color === "red" ? "Red" : "White", grape.body + " body"]}
              />
            ))}
          </CardGrid>
          <div className="mt-8 text-center">
            <Link href="/grapes/" className="btn-ghost">
              Browse all grape varieties
            </Link>
          </div>
        </Section>
      </div>

      {/* Wine School teaser */}
      <Section
        eyebrow="Wine School"
        title="Learn the fundamentals"
        intro="Wine can seem intimidating. Our school cuts straight to what matters."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href: "/wine-school/wine-basics/", label: "Wine Basics", icon: "🍇" },
            { href: "/wine-school/how-to-taste/", label: "How to Taste", icon: "👃" },
            { href: "/wine-school/serving-wine/", label: "Serving Wine", icon: "🍷" },
            { href: "/wine-school/tasting-terms/", label: "Glossary", icon: "📖" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center gap-3 p-7 bg-white rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-transform duration-200 text-center overflow-hidden relative"
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-[var(--c-wine)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              <span
                aria-hidden
                className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--c-wine-soft)] text-2xl transition-transform duration-200 group-hover:scale-110"
              >
                {item.icon}
              </span>
              <span className="font-display font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)] transition-colors duration-200">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/wine-school/" className="btn-wine">
            Enter the Wine School
          </Link>
        </div>
      </Section>

      {/* Responsible drinking */}
      <div className="bg-[var(--c-wine-soft)]">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center">
          <p className="text-sm text-[var(--c-wine-2)] leading-relaxed max-w-2xl mx-auto">
            <strong>Wine is best enjoyed responsibly.</strong> The legal drinking
            age applies in your jurisdiction. WorldwideWines.info is for
            adults of legal drinking age only. Never drink and drive. If you
            have a health condition, consult your physician.
          </p>
        </div>
      </div>
    </>
  );
}
