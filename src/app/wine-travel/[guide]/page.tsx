import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { travelGuides } from "@/data/travel";
import { pageMeta, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui";

export const dynamicParams = true;

export async function generateStaticParams() {
  const { travelGuides } = await import("@/data/travel");
  return travelGuides.map((g) => ({ guide: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ guide: string }>;
}): Promise<Metadata> {
  return params.then(async ({ guide }) => {
    const g = travelGuides.find((x) => x.slug === guide);
    if (!g) return {};
    return pageMeta({
      title: `${g.region} — Wine Travel Guide`,
      description: g.intro.slice(0, 155),
      path: `/wine-travel/${g.slug}/`,
    });
  });
}

export default async function TravelGuidePage({
  params,
}: {
  params: Promise<{ guide: string }>;
}) {
  const { guide } = await params;
  const g = travelGuides.find((x) => x.slug === guide);
  if (!g) notFound();

  const related = travelGuides.filter((x) => g.relatedSlugs.includes(x.slug));

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Wine Travel", item: "/wine-travel/" },
      { name: g.region },
    ]),
    articleJsonLd({
      headline: `${g.region} — Wine Travel Guide`,
      description: g.intro,
      path: `/wine-travel/${g.slug}/`,
    }),
  ];

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-10 pb-14">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Wine Travel", href: "/wine-travel/" },
              { label: g.region },
            ]}
          />
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mt-8 mb-4">
            Wine trip: {g.region}
          </h1>
          <p className="text-[#d9cbb0] text-lg leading-relaxed max-w-3xl">
            {g.intro}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <section>
            <h2 className="font-display text-2xl mb-3">When to go</h2>
            <p className="prose-body">{g.whenToGo}</p>
            <h2 className="font-display text-2xl mt-8 mb-3">How long</h2>
            <p className="prose-body">{g.howLong}</p>
            <h2 className="font-display text-2xl mt-8 mb-3">Base yourself in</h2>
            <p className="prose-body">{g.baseTown}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-3">Getting around</h2>
            <p className="prose-body">{g.gettingAround}</p>
            <h2 className="font-display text-2xl mt-8 mb-3">Practical notes</h2>
            <p className="prose-body">{g.practicalNotes}</p>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl mb-4">Highlights</h2>
          <div className="prose-body max-w-3xl">
            <ul>
              {g.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl mb-4">More wine trips</h2>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/wine-travel/${r.slug}/`}
                className="chip py-2 px-4 bg-white border-[#e5dccb] hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition"
              >
                {r.region} →
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
