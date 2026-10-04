import type { Metadata } from "next";
import Link from "next/link";
import { regions } from "@/data/regions";
import { countries } from "@/data/countries";
import { Section, CardGrid, LinkCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Wine Regions of the World — Country & Regional Guides",
  description:
    "Explore the world's great wine regions — from Bordeaux and Burgundy to Napa, Barossa and beyond. In-depth guides to climate, grapes, appellations and wine travel.",
  alternates: { canonical: "https://worldwidewines.info/wine-regions/" },
};

export default function WineRegionsPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            Wine Regions
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-3xl mb-4">
            The world&apos;s wine regions
          </h1>
          <p className="text-[#d9cbb0] text-lg max-w-2xl">
            {regions.length}+ in-depth regional guides across {countries.length}{" "}
            countries — what&apos;s grown, why it matters, and how to visit.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <Section eyebrow="By country" title="Choose a country to begin" className="pb-6">
          <CardGrid cols={3}>
            {countries.map((c) => {
              const count = regions.filter((r) => r.countrySlug === c.slug).length;
              return (
                <LinkCard
                  key={c.slug}
                  href={`/${c.slug}/`}
                  title={`${c.flagEmoji} ${c.name}`}
                  blurb={c.overview.slice(0, 110) + "…"}
                  chips={[`${count} guides`, c.continent]}
                />
              );
            })}
          </CardGrid>
        </Section>

        <Section eyebrow="All regions" title={`Every region guide (${regions.length})`} className="pt-4">
          <CardGrid cols={3}>
            {regions.map((r) => (
              <LinkCard
                key={r.slug}
                href={`/${r.countrySlug}/${r.slug}/`}
                title={r.name}
                blurb={r.description.slice(0, 100) + "…"}
                chips={[r.country, r.climate.split(",")[0]]}
              />
            ))}
          </CardGrid>
        </Section>
      </div>
    </article>
  );
}
