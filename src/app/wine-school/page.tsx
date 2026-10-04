import type { Metadata } from "next";
import { wineSchoolTopics } from "@/data/wine-school";

export const metadata: Metadata = {
  title: "Wine School — Learn Wine Step by Step",
  description:
    "A free, structured wine school. Learn wine basics, how wine is made, how to taste, serving, storage and pairing principles — clearly explained.",
  alternates: { canonical: "https://worldwidewines.info/wine-school/" },
};

const topicsByCategory = [
  { key: "basics", label: "Fundamentals" },
  { key: "winemaking", label: "Winemaking" },
  { key: "tasting", label: "Tasting" },
  { key: "serving", label: "Serving & Storage" },
  { key: "terminology", label: "Terminology" },
] as const;

export default function WineSchoolPage() {
  return (
    <article>
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            Wine School
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-3xl mb-4">
            Learn wine, step by step
          </h1>
          <p className="text-[#d9cbb0] text-lg max-w-2xl">
            A free, self-paced school. No jargon walls — just clear lessons in
            the order that makes sense.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {topicsByCategory.map((cat) => {
          const topics = wineSchoolTopics.filter(
            (t) => t.category === cat.key
          );
          if (topics.length === 0) return null;
          return (
            <section key={cat.key} className="mb-10">
              <h2 className="font-display text-2xl text-[var(--c-wine)] mb-4">
                {cat.label}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {topics.map((t) => (
                  <a
                    key={t.slug}
                    href={`/wine-school/${t.slug}/`}
                    className="group block bg-white rounded-2xl border border-[#ece4d8] p-5 hover:border-[var(--c-wine)] hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)]">
                        {t.title}
                      </h3>
                      <span className="text-[var(--c-wine)] text-lg group-hover:translate-x-0.5 transition">→</span>
                    </div>
                    <p className="text-sm text-[var(--c-ink-soft)] mt-2">
                      {t.excerpt}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}
