import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { wineSchoolTopics } from "@/data/wine-school";
import { pageMeta, breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui";

export const dynamicParams = true;

export async function generateStaticParams() {
  const { wineSchoolTopics } = await import("@/data/wine-school");
  return wineSchoolTopics.map((t) => ({ topic: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  return params.then(async ({ topic }) => {
    const t = wineSchoolTopics.find((x) => x.slug === topic);
    if (!t) return {};
    return pageMeta({
      title: `${t.title} — Wine School`,
      description: t.excerpt,
      path: `/wine-school/${t.slug}/`,
    });
  });
}

export default async function WineSchoolTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const t = wineSchoolTopics.find((x) => x.slug === topic);
  if (!t) notFound();

  const related = wineSchoolTopics
    .filter((x) => t.relatedTopics.includes(x.slug))
    .slice(0, 4);

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Wine School", item: "/wine-school/" },
      { name: t.title },
    ]),
    articleJsonLd({
      headline: t.title,
      description: t.excerpt,
      path: `/wine-school/${t.slug}/`,
      about: [t.title, "wine"],
    }),
    faqJsonLd([
      { question: `What should I know about ${t.title.toLowerCase()}?`, answer: t.excerpt },
    ]),
  ];

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[var(--c-paper)] pt-10 pb-12 border-b border-[#ece4d8]">
        <div className="max-w-3xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Wine School", href: "/wine-school/" },
              { label: t.title },
            ]}
          />
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mt-8 mb-2">
            {t.difficulty} · Wine School
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="lede text-lg">{t.excerpt}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose-body">
          {t.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {t.bullets && (
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {t.bullets.map((b) => (
              <div key={b.heading} className="bg-[var(--c-paper-2)] rounded-2xl p-5">
                <h3 className="font-display font-semibold text-[var(--c-wine)] mb-2">
                  {b.heading}
                </h3>
                <p className="text-sm text-[var(--c-ink-soft)]">{b.text}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-14 border-t border-[#ece4d8] pt-8">
          <h2 className="font-display text-2xl mb-4">Continue your learning</h2>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/wine-school/${r.slug}/`}
                className="chip py-2 px-4 bg-white border-[#e5dccb] hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition"
              >
                {r.title} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
