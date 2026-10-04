import type { Metadata } from "next";
import { wineStyles } from "@/data/wine-styles";

export const metadata: Metadata = {
  title: "Wine Styles — Red, White, Rosé, Sparkling & More",
  description:
    "Understand every wine style — red, white, rosé, sparkling, dessert, fortified and natural. Production, key grapes, regions, food and serving.",
  alternates: { canonical: "https://worldwidewines.info/wine-styles/" },
};

const icons: Record<string, string> = {
  red: "🍷",
  white: "🥂",
  "rosé": "🌸",
  sparkling: "✨",
  dessert: "🍯",
  fortified: "⛵",
  specialty: "🌿",
};

export default function WineStylesPage() {
  return (
    <article>
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            Wine Styles
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-3xl mb-4">
            Every wine style, explained
          </h1>
          <p className="text-[#d9cbb0] text-lg max-w-2xl">
            From dry reds to crystalline sparklers — the styles that shape every
            cellar and dinner table.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {wineStyles.map((s) => (
            <a
              key={s.slug}
              href={`/wine-styles/${s.slug}/`}
              className="group flex gap-5 bg-white rounded-2xl border border-[#ece4d8] p-6 hover:border-[var(--c-wine)] hover:shadow-md transition"
            >
              <span aria-hidden className="text-4xl shrink-0">
                {icons[s.family] ?? "🍇"}
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)]">
                  {s.name}
                </h2>
                <p className="text-sm text-[var(--c-ink-soft)] mt-1.5">
                  {s.description.slice(0, 120)}…
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {s.keyGrapes.slice(0, 3).map((g) => (
                    <span key={g} className="chip">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
