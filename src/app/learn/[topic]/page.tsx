import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { learnSections } from "@/data/learn";
import { pageMeta, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui";

export const dynamicParams = true;

export async function generateStaticParams() {
  const { learnSections } = await import("@/data/learn");
  return learnSections.map((s) => ({ topic: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  return params.then(async ({ topic }) => {
    const s = learnSections.find((x) => x.slug === topic);
    if (!s) return {};
    return pageMeta({
      title: `${s.title} — Learn`,
      description: s.intro.slice(0, 155),
      path: `/learn/${s.slug}/`,
    });
  });
}

export default async function LearnTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const s = learnSections.find((x) => x.slug === topic);
  if (!s) notFound();

  const related = learnSections.filter((x) => s.relatedSlugs.includes(x.slug));

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Learn", item: "/learn/" },
      { name: s.title },
    ]),
    articleJsonLd({
      headline: s.title,
      description: s.intro,
      path: `/learn/${s.slug}/`,
      about: [s.title, "wine"],
    }),
  ];

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[var(--c-paper)] pt-10 pb-12 border-b border-[#ece4d8]">
        <div className="max-w-3xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Learn", href: "/learn/" },
              { label: s.title },
            ]}
          />
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mt-8 mb-4">
            {s.title}
          </h1>
          <p className="lede text-lg">{s.intro}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {s.sections.map((sec) => (
          <div key={sec.heading} className="mb-8">
            <h2 className="font-display text-2xl mb-3">{sec.heading}</h2>
            <div className="prose-body">
              {sec.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-10 bg-[var(--c-paper-2)] rounded-2xl p-6">
          <h3 className="font-display text-lg font-semibold text-[var(--c-wine)] mb-3">
            Key points
          </h3>
          <ul className="prose-body">
            {s.keyPoints.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </div>

        {related.length > 0 && (
          <div className="mt-12 border-t border-[#ece4d8] pt-8">
            <h2 className="font-display text-2xl mb-4">Continue exploring</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/learn/${r.slug}/`}
                  className="chip py-2 px-4 bg-white border-[#e5dccb] hover:bg-[var(--c-wine)] hover:text-white hover:border-[var(--c-wine)] transition"
                >
                  {r.title} →
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
