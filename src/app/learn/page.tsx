import type { Metadata } from "next";
import { learnSections } from "@/data/learn";

export const metadata: Metadata = {
  title: "Learn — Wine History, Viticulture & Winemaking",
  description:
    "Deep-dive learning on the history of wine, the craft of viticulture, and how wine is made.",
  alternates: { canonical: "https://worldwidewines.info/learn/" },
};

const categoryLabels: Record<string, string> = {
  history: "A short history",
  viticulture: "The vineyard",
  winemaking: "The winery",
};

export default function LearnPage() {
  return (
    <article>
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            Learn
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            Beyond the glass
          </h1>
          <p className="text-[#d9cbb0] text-lg max-w-2xl">
            The stories and craft behind your glass — history, the vineyard, and
            the winery.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {learnSections.map((s) => (
            <a
              key={s.slug}
              href={`/learn/${s.slug}/`}
              className="group block bg-white rounded-2xl border border-[#ece4d8] p-6 hover:border-[var(--c-wine)] hover:shadow-md transition"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--c-gold)] font-semibold mb-2">
                {categoryLabels[s.category]}
              </p>
              <h2 className="font-display text-2xl font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)]">
                {s.title}
              </h2>
              <p className="text-sm text-[var(--c-ink-soft)] mt-2">{s.intro}</p>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
