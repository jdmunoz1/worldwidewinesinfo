import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGrape, getGrapesBySlugs } from "@/data/grapes";
import { getRegionsByIds } from "@/data/regions";
import { pageMeta, breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/seo";
import { LinkCard, CardGrid, Breadcrumb, Sheet, Eyebrow } from "@/components/ui";

export const dynamicParams = true;

export async function generateStaticParams() {
  const { grapes } = await import("@/data/grapes");
  return grapes.map((g) => ({ grape: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ grape: string }>;
}): Promise<Metadata> {
  return params.then(async ({ grape }) => {
    const g = getGrape(grape);
    if (!g) return {};
    return pageMeta({
      title: `${g.name} — Grape Variety Guide`,
      description: g.description.slice(0, 155),
      path: `/grapes/${g.slug}/`,
    });
  });
}

export default async function GrapePage({
  params,
}: {
  params: Promise<{ grape: string }>;
}) {
  const { grape } = await params;
  const g = getGrape(grape);
  if (!g) notFound();

  const relatedGrapes = getGrapesBySlugs(g.similarGrapes).slice(0, 5);
  const regions = getRegionsByIds(g.majorRegionSlugs);

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Grapes", item: "/grapes/" },
      { name: g.name },
    ]),
    articleJsonLd({
      headline: `${g.name} — The Complete Grape Guide`,
      description: g.description,
      path: `/grapes/${g.slug}/`,
      about: [g.name, "grape variety", "wine"],
    }),
    faqJsonLd([
      { question: `What is ${g.name}?`, answer: g.description },
      {
        question: `Where is ${g.name} grown?`,
        answer: `Primarily in ${g.majorCountries.join(", ")}.`,
      },
      {
        question: `What does ${g.name} taste like?`,
        answer: `${g.typicalAromas.join(", ")} with ${g.typicalFlavors.join(", ")} character.`,
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
              { label: "Grapes", href: "/grapes/" },
              { label: g.name },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="flex items-baseline gap-3 mb-2 flex-wrap">
              <h1 className="font-display text-4xl md:text-5xl tracking-tight">
                {g.name}
              </h1>
              {g.pronunciation && (
                <span className="text-[#d9cbb0] text-sm italic">
                  /{g.pronunciation}/
                </span>
              )}
            </div>
            {g.alsoKnownAs && (
              <p className="text-[#d9cbb0] text-sm mb-4">
                Also known as {g.alsoKnownAs}
              </p>
            )}
            <p className="text-[#d9cbb0] text-lg leading-relaxed">{g.description}</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            <span className="chip bg-white/10 border-white/20 text-[#f6efe6]">
              {g.color === "red" ? "🍇 Red" : "🍇 White"} grape
            </span>
            <span className="chip bg-white/10 border-white/20 text-[#f6efe6]">
              {g.body} body
            </span>
            <span className="chip bg-white/10 border-white/20 text-[#f6efe6]">
              {g.sweetness}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Character profile */}
        <div className="py-12">
          <Eyebrow>Grape profile</Eyebrow>
          <h2 className="font-display text-2xl mb-4">Character & style</h2>
          <Sheet
            head={["Trait", "Character"]}
            rows={[
              ["Body", g.body],
              ["Acidity", g.acidity],
              ["Tannins", g.tannin],
              ["Sweetness", g.sweetness],
              ["Alcohol tendency", g.alcoholTendency],
              ["Origin", g.origin],
              ["Common flavours", g.typicalFlavors.join(", ")],
              ["Aromas", g.typicalAromas.join(", ")],
            ]}
          />
        </div>

        {/* Food pairings */}
        <section className="pb-12">
          <Eyebrow>Pairing</Eyebrow>
          <h2 className="font-display text-2xl mb-3">Best food pairings</h2>
          <div className="prose-body max-w-3xl">
            <ul>
              {g.foodPairings.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Regions */}
        {regions.length > 0 && (
          <section className="pb-12">
            <Eyebrow>Where it thrives</Eyebrow>
            <h2 className="font-display text-2xl mb-1">Key regions for {g.name}</h2>
            <p className="text-sm text-[var(--c-ink-soft)] mb-6">
              {g.majorCountries.join(", ")}
            </p>
            <CardGrid cols={3}>
              {regions.map((r) => (
                <LinkCard
                  key={r.slug}
                  href={`/${r.countrySlug}/${r.slug}/`}
                  title={r.name}
                  blurb={r.description.slice(0, 110) + "…"}
                  chips={[r.country]}
                />
              ))}
            </CardGrid>
          </section>
        )}

        {/* Related grapes */}
        {relatedGrapes.length > 0 && (
          <section className="pb-14">
            <Eyebrow>Explore more</Eyebrow>
            <h2 className="font-display text-2xl mb-1">Similar grapes</h2>
            <p className="text-sm text-[var(--c-ink-soft)] mb-6">
              Varieties worth exploring alongside {g.name}.
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedGrapes.map((rg) => (
                <Link
                  key={rg.slug}
                  href={`/grapes/${rg.slug}/`}
                  className="chip hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition"
                >
                  {rg.name} →
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
