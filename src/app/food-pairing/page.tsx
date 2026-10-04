import type { Metadata } from "next";
import { foodPairings } from "@/data/food-pairings";

export const metadata: Metadata = {
  title: "Food & Wine Pairing Guide",
  description:
    "Learn which wines to serve with steak, seafood, spicy food, cheese, pasta and more — with the simple principles behind every match.",
  alternates: { canonical: "https://worldwidewines.info/food-pairing/" },
};

const emojiBySlug: Record<string, string> = {
  "grilled-steak": "🥩",
  "seared-salmon": "🐟",
  "spicy-curry": "🍛",
  oysters: "🦪",
  "hard-cheese": "🧀",
  "pasta-marinara": "🍝",
  "chocolate-dessert": "🍫",
  "roast-chicken": "🍗",
};

export default function FoodPairingPage() {
  return (
    <article>
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            Food & Wine Pairing
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-3xl mb-4">
            What to drink with what you eat
          </h1>
          <p className="text-[#d9cbb0] text-lg max-w-2xl">
            Practical pairings built on a few simple principles — not rules.
            Use our pairing finder or browse the guides below.
          </p>
          <div className="mt-6">
            <a href="/tools/pairing/" className="btn-wine">
              Open the Pairing Finder →
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {foodPairings.map((p) => (
            <a
              key={p.slug}
              href={`/food-pairing/${p.slug}/`}
              className="group flex gap-5 bg-white rounded-2xl border border-[#ece4d8] p-6 hover:border-[var(--c-wine)] hover:shadow-md transition"
            >
              <span aria-hidden className="text-4xl shrink-0">
                {emojiBySlug[p.slug] ?? "🍽️"}
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)]">
                  {p.food}
                </h2>
                <p className="text-sm text-[var(--c-ink-soft)] mt-1.5">
                  {p.description.slice(0, 110)}…
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.recommendedGrapes.slice(0, 3).map((g) => (
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
