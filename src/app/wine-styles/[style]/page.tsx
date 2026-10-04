import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { wineStyles } from "@/data/wine-styles";
import { getGrapesBySlugs } from "@/data/grapes";
import { pageMeta, breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/seo";
import { Breadcrumb, Sheet, LinkCard, CardGrid } from "@/components/ui";

export const dynamicParams = true;

export async function generateStaticParams() {
  const { wineStyles } = await import("@/data/wine-styles");
  return wineStyles.map((s) => ({ style: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ style: string }>;
}): Promise<Metadata> {
  return params.then(async ({ style }) => {
    const s = wineStyles.find((x) => x.slug === style);
    if (!s) return {};
    return pageMeta({
      title: `${s.name} — Wine Style Guide`,
      description: s.description.slice(0, 155),
      path: `/wine-styles/${s.slug}/`,
    });
  });
}

export default async function WineStylePage({
  params,
}: {
  params: Promise<{ style: string }>;
}) {
  const { style } = await params;
  const s = wineStyles.find((x) => x.slug === style);
  if (!s) notFound();

  const grapes = getGrapesBySlugs(s.keyGrapeSlugs);
  const related = wineStyles.filter((x) => s.relatedStyleSlugs.includes(x.slug));

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Wine Styles", item: "/wine-styles/" },
      { name: s.name },
    ]),
    articleJsonLd({
      headline: `${s.name} — A Complete Guide`,
      description: s.description,
      path: `/wine-styles/${s.slug}/`,
      about: [s.name, "wine"],
    }),
    faqJsonLd([
      { question: `What is ${s.name}?`, answer: s.description },
      { question: `How is ${s.name} made?`, answer: s.productionMethod },
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
              { label: "Wine Styles", href: "/wine-styles/" },
              { label: s.name },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
              {s.hero}
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
              {s.name}
            </h1>
            <p className="text-[#d9cbb0] text-lg leading-relaxed">{s.description}</p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="py-12 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl mb-3">How it&apos;s made</h2>
            <p className="prose-body">{s.productionMethod}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl mb-4">At a glance</h2>
            <Sheet
              head={["Attribute", "Detail"]}
              rows={[
                ["Serving temperature", s.servingTemperature],
                ["Key regions", s.keyRegions.join(", ")],
                ["Food pairings", s.foodPairings.join(", ")],
              ]}
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {s.characteristics.map((c) => (
                <span key={c} className="chip bg-[var(--c-wine-soft)] border-[var(--c-wine)]/20 text-[var(--c-wine-2)]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {grapes.length > 0 && (
          <section className="pb-12">
            <h2 className="font-display text-2xl mb-4">Signature grapes</h2>
            <CardGrid cols={3}>
              {grapes.map((g) => (
                <LinkCard
                  key={g.slug}
                  href={`/grapes/${g.slug}/`}
                  title={g.name}
                  blurb={g.description.slice(0, 110) + "…"}
                />
              ))}
            </CardGrid>
          </section>
        )}

        <section className="pb-14">
          <h2 className="font-display text-2xl mb-4">Related styles</h2>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/wine-styles/${r.slug}/`}
                className="chip py-2 px-4 bg-white border-[#e5dccb] hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition"
              >
                {r.name} →
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
