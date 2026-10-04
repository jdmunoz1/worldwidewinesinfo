import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegion, getRelatedRegions } from "@/data/regions";
import { getCountryBySlug } from "@/data/countries";
import { getGrapesBySlugs } from "@/data/grapes";
import { pageMeta, breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/seo";
import { LinkCard, CardGrid, Breadcrumb, Sheet, Eyebrow } from "@/components/ui";

export const dynamicParams = true;

export async function generateStaticParams() {
  const { regions } = await import("@/data/regions");
  return regions.map((r) => ({ country: r.countrySlug, region: r.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; region: string }>;
}): Promise<Metadata> {
  return params.then(async ({ region }) => {
    const r = getRegion(region);
    if (!r) return {};
    return pageMeta({
      title: `${r.name} Wine Region Guide — ${r.country}`,
      description: r.description.slice(0, 155),
      path: `/${r.countrySlug}/${r.slug}/`,
    });
  });
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ country: string; region: string }>;
}) {
  const { region, country } = await params;
  const r = getRegion(region);
  if (!r || r.countrySlug !== country) notFound();

  const countryObj = getCountryBySlug(r.countrySlug);
  const related = getRelatedRegions(r);
  const grapes = getGrapesBySlugs(r.majorGrapeSlugs);

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Wine Regions", item: "/wine-regions/" },
      { name: r.country, item: `/${r.countrySlug}/` },
      { name: r.name },
    ]),
    articleJsonLd({
      headline: `${r.name} Wine Region — A Complete Guide`,
      description: r.description,
      path: `/${r.countrySlug}/${r.slug}/`,
      about: [r.name, `${r.country} wine`, "wine region"],
    }),
    faqJsonLd([
      {
        question: `What is ${r.name} known for?`,
        answer: r.description,
      },
      {
        question: `What grapes are grown in ${r.name}?`,
        answer: `${r.majorGrapes.join(", ")}.`,
      },
      {
        question: `What is the climate of ${r.name}?`,
        answer: `${r.climate}. ${r.geography}.`,
      },
    ]),
  ];

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-10 pb-14">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Wine Regions", href: "/wine-regions/" },
              { label: r.country, href: `/${r.countrySlug}/` },
              { label: r.name },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
              {r.name}
            </h1>
            <p className="text-[#d9cbb0] text-lg leading-relaxed">{r.description}</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {r.mainWineStyles.map((s) => (
              <span key={s} className="chip bg-white/10 border-white/20 text-[#f6efe6]">
                🍷 {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Fact sheet */}
        <div className="py-12">
          <Eyebrow>Fast facts</Eyebrow>
          <h2 className="font-display text-2xl mb-4">At a glance</h2>
          <Sheet
            head={["Attribute", "Detail"]}
            rows={[
              ["Climate", r.climate],
              ["Geography", r.geography],
              ["Key appellations", r.keyAppellations.join(" · ")],
              ["Main grapes", r.majorGrapes.join(", ")],
              ["Famous for", r.famousFor.join(", ")],
            ]}
          />
        </div>

        {/* Grapes */}
        {grapes.length > 0 && (
          <section className="pb-12">
            <Eyebrow>Grapes</Eyebrow>
            <h2 className="font-display text-2xl mb-1">
              Signature grapes of {r.name}
            </h2>
            <p className="text-sm text-[var(--c-ink-soft)] mb-6">
              The varieties that define this region&apos;s wines.
            </p>
            <CardGrid cols={3}>
              {grapes.map((g) => (
                <LinkCard
                  key={g.slug}
                  href={`/grapes/${g.slug}/`}
                  title={g.name}
                  blurb={g.description.slice(0, 110) + "…"}
                  chips={[
                    g.color === "red" ? "Red" : "White",
                    ...g.typicalAromas.slice(0, 2),
                  ]}
                />
              ))}
            </CardGrid>
          </section>
        )}

        {/* Related regions */}
        {related.length > 0 && (
          <section className="pb-12">
            <Eyebrow>Nearby</Eyebrow>
            <h2 className="font-display text-2xl mb-1">Related regions</h2>
            <p className="text-sm text-[var(--c-ink-soft)] mb-6">
              Explore neighbouring wine areas.
            </p>
            <div className="flex flex-wrap gap-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${rel.countrySlug}/${rel.slug}/`}
                  className="chip hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition"
                >
                  {rel.name} →
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Visiting */}
        <section className="pb-12 border-t border-[#ece4d8] pt-10">
          <Eyebrow>Wine travel</Eyebrow>
          <h2 className="font-display text-2xl mb-3">Visiting {r.name}</h2>
          <p className="prose-body max-w-3xl">{r.visitingInfo}</p>
          <div className="mt-6">
            <Link href={`/wine-travel/`} className="btn-ghost">
              Plan a wine trip →
            </Link>
          </div>
        </section>

        {/* Country link */}
        {countryObj && (
          <section className="pb-14">
            <LinkCard
              href={`/${countryObj.slug}/`}
              title={`${countryObj.flagEmoji} Explore all of ${countryObj.name}`}
              blurb={`Country-wide wine guide with regions, grapes, classification and food culture.`}
            />
          </section>
        )}
      </div>
    </article>
  );
}
