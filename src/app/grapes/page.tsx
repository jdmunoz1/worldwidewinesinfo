import type { Metadata } from "next";
import Link from "next/link";
import type { Grape } from "@/types";
import { grapes } from "@/data/grapes";
import { countries } from "@/data/countries";
import { Section, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Grape Varieties — A-Z Guide to Wine Grapes",
  description:
    "Browse our complete guide to wine grape varieties, from global classics to regional specialities — with tasting profiles, food pairings and key regions.",
  alternates: { canonical: "https://worldwidewines.info/grapes/" },
};

export default function GrapesIndexPage() {
  const reds = grapes.filter((g) => g.color === "red");
  const whites = grapes.filter((g) => g.color === "white");
  const popular = [
    "cabernet-sauvignon",
    "pinot-noir",
    "merlot",
    "chardonnay",
    "syrah",
    "sauvignon-blanc",
    "riesling",
    "nebbiolo",
    "sangiovese",
    "tempranillo",
  ];
  const popularGrapes = popular
    .map((s) => grapes.find((g) => g.slug === s))
    .filter((g): g is Grape => Boolean(g));

  return (
    <article>
      {/* Hero */}
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            Grape Varieties
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-3xl mb-4">
            {grapes.length}+ grape varieties, explained
          </h1>
          <p className="text-[#d9cbb0] text-lg max-w-2xl">
            Each grape gets the full treatment — origin, character, aromas,
            food pairings and the regions that do it best.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Popular */}
        <Section eyebrow="Start here" title="The grapes everyone asks about" className="pb-10">
          <div className="flex flex-wrap gap-3">
            {popularGrapes.map((g) => (
              <Link
                key={g.slug}
                href={`/grapes/${g.slug}/`}
                className="chip py-2 px-4 bg-white border-[#e5dccb] hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition"
              >
                {g.name}
              </Link>
            ))}
          </div>
        </Section>

        {/* All grapes grouped by color */}
        <section className="pb-4">
          <Eyebrow>The full list</Eyebrow>
          <h2 className="font-display text-3xl mb-6">All grape varieties</h2>

          <h3 className="font-display text-2xl text-[var(--c-wine)] mt-8 mb-3">
            Red grapes ({reds.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {reds.map((g) => (
              <Link key={g.slug} href={`/grapes/${g.slug}/`} className="chip hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition">
                {g.name}
              </Link>
            ))}
          </div>

          <h3 className="font-display text-2xl text-[var(--c-wine)] mt-10 mb-3">
            White grapes ({whites.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {whites.map((g) => (
              <Link key={g.slug} href={`/grapes/${g.slug}/`} className="chip hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition">
                {g.name}
              </Link>
            ))}
          </div>
        </section>

        {/* By country */}
        <Section eyebrow="By country" title="Find grapes by country" className="pb-14">
          <div className="flex flex-wrap gap-3">
            {countries.map((c) => {
              const cGrapes = grapes.filter((g) =>
                g.majorCountries.includes(c.name)
              );
              if (cGrapes.length === 0) return null;
              return (
                <Link
                  key={c.slug}
                  href={`/${c.slug}/`}
                  className="chip py-2 px-4 bg-white border-[#e5dccb] hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition"
                >
                  {c.flagEmoji} {c.name} · {cGrapes.length} grapes
                </Link>
              );
            })}
          </div>
        </Section>
      </div>
    </article>
  );
}
