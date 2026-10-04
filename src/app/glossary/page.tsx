import type { Metadata } from "next";
import { glossaryTerms } from "@/data/glossary";

export const metadata: Metadata = {
  title: "Wine Glossary — Terms Explained",
  description:
    "A plain-language wine glossary covering tasting terms, labels and classification, winemaking, service and more.",
  alternates: { canonical: "https://worldwidewines.info/glossary/" },
};

const categories = [
  { key: "wine-character", label: "Wine character" },
  { key: "tasting", label: "Tasting" },
  { key: "labels-classification", label: "Labels & classification" },
  { key: "viticulture", label: "Viticulture" },
  { key: "winemaking", label: "Winemaking" },
  { key: "service", label: "Service" },
] as const;

export default function GlossaryPage() {
  return (
    <article>
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            Glossary
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            Wine terms, decoded
          </h1>
          <p className="text-[#d9cbb0] text-lg max-w-2xl">
            {glossaryTerms.length} entries in plain language — the shorthand of
            any wine conversation, demystified.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {categories.map((cat) => {
          const terms = glossaryTerms.filter((t) => t.category === cat.key);
          if (terms.length === 0) return null;
          return (
            <section key={cat.key} className="mb-10">
              <h2 className="font-display text-2xl text-[var(--c-wine)] mb-4">
                {cat.label}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {terms.map((t) => (
                  <div
                    key={t.slug}
                    className="bg-white rounded-2xl border border-[#ece4d8] p-5"
                  >
                    <h3 className="font-display text-lg font-semibold text-[var(--c-ink)]">
                      {t.term}
                    </h3>
                    <p className="text-sm text-[var(--c-ink-soft)] mt-1.5">
                      {t.definition}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}
