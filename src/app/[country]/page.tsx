import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Grape } from "@/types";
import { getCountryBySlug } from "@/data/countries";
import { getRegionsByCountry } from "@/data/regions";
import { getGrape } from "@/data/grapes";
import { pageMeta, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { LinkCard, CardGrid, Breadcrumb, Sheet, Section } from "@/components/ui";

export const dynamicParams = true;

export function generateStaticParams() {
  const { countries } = require("@/data/countries") as typeof import("@/data/countries");
  return countries.map((c) => ({ country: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  return params.then(async ({ country }) => {
    const c = getCountryBySlug(country);
    if (!c) return {};
    return pageMeta({
      title: `${c.name} — Wine Guide, Regions & Grapes`,
      description: c.overview.slice(0, 155),
      path: `/${c.slug}/`,
    });
  });
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const c = getCountryBySlug(country);
  if (!c) notFound();

  const regions = getRegionsByCountry(c.slug);
  const regionGrapeSlugs = [
    ...new Set(regions.flatMap((r) => r.majorGrapeSlugs)),
  ];
  const majorGrapes = c.majorGrapeSlugs
    .map((s) => getGrape(s))
    .filter((g): g is Grape => Boolean(g))
    .slice(0, 6);

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Wine Regions", item: "/wine-regions/" },
      { name: c.name },
    ]),
    articleJsonLd({
      headline: `${c.name} — A Complete Wine Guide`,
      description: c.overview,
      path: `/${c.slug}/`,
      about: [c.name, "wine"],
    }),
  ];

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Wine Regions", href: "/wine-regions/" },
              { label: c.name },
            ]}
          />
          <div className="mt-8 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl" aria-hidden>{c.flagEmoji}</span>
              <h1 className="font-display text-4xl md:text-5xl tracking-tight">
                {c.name}
              </h1>
            </div>
            <p className="text-[#d9cbb0] text-lg leading-relaxed">
              {c.overview}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <span className="chip bg-white/10 border-white/20 text-[#f6efe6]">
              🌍 {c.continent}
            </span>
            <span className="chip bg-white/10 border-white/20 text-[#f6efe6]">
              🍇 {c.majorGrapes.length}+ grapes
            </span>
            <span className="chip bg-white/10 border-white/20 text-[#f6efe6]">
              🗺️ {regions.length} regions
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Intro sections */}
        <div className="grid md:grid-cols-2 gap-10 py-14">
          <SectionSection title="Wine history & culture" text={c.wineHistory} />
          <SectionSection title="Climate & geography" text={`${c.climate} ${c.geography}`} />
        </div>

        {/* Key facts sheet */}
        <div className="mb-14">
          <h2 className="font-display text-2xl mb-4">At a glance</h2>
          <Sheet
            head={["Fact", "Detail"]}
            rows={[
              ["Production rank", `World #${c.wineProductionRank}`],
              ["Annual production", c.annualProduction],
              ["Classification system", c.classifications],
              ["Typical styles", c.typicalStyles],
              ["Label terms", c.labelTerms],
              ["Famous wines", c.famousWines],
            ]}
          />
        </div>

        {/* Regions */}
        <Section eyebrow="Regions" title={`Regions of ${c.name}`}>
          <CardGrid cols={3}>
            {regions.map((r) => (
              <LinkCard
                key={r.slug}
                href={`/${c.slug}/${r.slug}/`}
                title={r.name}
                blurb={r.description.slice(0, 120) + "…"}
                chips={[r.climate.split(",")[0], ...r.mainWineStyles.slice(0, 2)]}
              />
            ))}
          </CardGrid>
        </Section>

        {/* Grapes */}
        <Section eyebrow="Grapes" title={`Signature grapes of ${c.name}`}>
          <CardGrid cols={3}>
            {majorGrapes.map((g) => (
              <LinkCard
                key={g.slug}
                href={`/grapes/${g.slug}/`}
                title={g.name}
                blurb={g.description.slice(0, 120) + "…"}
                chips={[g.color === "red" ? "Red" : "White", g.body + " body"]}
              />
            ))}
          </CardGrid>
        </Section>

        {/* Food culture */}
        <Section
          eyebrow="Food & Culture"
          title={`Food culture in ${c.name}`}
          intro={c.foodCulture}
        />

        {/* Related countries */}
        <Section eyebrow="Continue your journey" title="Related wine countries">
          <CardGrid cols={3}>
            {c.relatedCountries.map((slug) => {
              const rc = getCountryBySlug(slug);
              if (!rc) return null;
              return (
                <LinkCard
                  key={rc.slug}
                  href={`/${rc.slug}/`}
                  title={`${rc.flagEmoji} ${rc.name}`}
                  blurb={rc.overview.slice(0, 120) + "…"}
                />
              );
            })}
          </CardGrid>
        </Section>
      </div>
    </article>
  );
}

function SectionSection({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-[var(--c-ink)] mb-3">{title}</h2>
      <p className="prose-body">{text}</p>
    </div>
  );
}
