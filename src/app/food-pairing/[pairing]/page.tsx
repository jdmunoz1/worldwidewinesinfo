import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { foodPairings } from "@/data/food-pairings";
import { getGrapesBySlugs } from "@/data/grapes";
import { pageMeta, breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/seo";
import { Breadcrumb, LinkCard, CardGrid } from "@/components/ui";

export const dynamicParams = true;

export async function generateStaticParams() {
  const { foodPairings } = await import("@/data/food-pairings");
  return foodPairings.map((p) => ({ pairing: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ pairing: string }>;
}): Promise<Metadata> {
  return params.then(async ({ pairing }) => {
    const p = foodPairings.find((x) => x.slug === pairing);
    if (!p) return {};
    return pageMeta({
      title: `Wine with ${p.food} — Pairing Guide`,
      description: p.description.slice(0, 155),
      path: `/food-pairing/${p.slug}/`,
    });
  });
}

export default async function FoodPairingPage({
  params,
}: {
  params: Promise<{ pairing: string }>;
}) {
  const { pairing } = await params;
  const p = foodPairings.find((x) => x.slug === pairing);
  if (!p) notFound();

  const grapes = getGrapesBySlugs(p.recommendedGrapes);
  const related = foodPairings.filter((x) => p.relatedPairingSlugs.includes(x.slug));

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Food Pairing", item: "/food-pairing/" },
      { name: p.food },
    ]),
    articleJsonLd({
      headline: `Wine Pairings for ${p.food}`,
      description: p.description,
      path: `/food-pairing/${p.slug}/`,
      about: [p.food, "wine pairing"],
    }),
    faqJsonLd([
      { question: `What wine goes with ${p.food}?`, answer: p.description },
      { question: `Why does ${p.food} pair well with these wines?`, answer: p.pairingPrinciples },
    ]),
  ];

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-10 pb-14">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Food Pairing", href: "/food-pairing/" },
              { label: p.food },
            ]}
          />
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mt-8 mb-4">
            Wine for {p.food}
          </h1>
          <p className="text-[#d9cbb0] text-lg leading-relaxed max-w-3xl">
            {p.description}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl mb-3">The principle</h2>
            <p className="prose-body">{p.pairingPrinciples}</p>
            <h2 className="font-display text-2xl mt-8 mb-3">What to reach for</h2>
            <ul className="prose-body">
              {p.recommendedWineStyles.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="mt-6 bg-[var(--c-wine-soft)] rounded-2xl p-5">
              <p className="text-sm text-[var(--c-wine-2)]">
                <strong>Avoid:</strong> {p.avoid}
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl mb-3">Why it works</h2>
            <ul className="prose-body">
              {p.whyItWorks.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </div>

        {grapes.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl mb-4">Best grapes</h2>
            <CardGrid cols={3}>
              {grapes.map((g) => (
                <LinkCard
                  key={g.slug}
                  href={`/grapes/${g.slug}/`}
                  title={g.name}
                  blurb={g.description.slice(0, 100) + "…"}
                />
              ))}
            </CardGrid>
          </section>
        )}

        <section className="mt-12">
          <h2 className="font-display text-2xl mb-4">More pairings</h2>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/food-pairing/${r.slug}/`}
                className="chip py-2 px-4 bg-white border-[#e5dccb] hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition"
              >
                {r.food} →
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
