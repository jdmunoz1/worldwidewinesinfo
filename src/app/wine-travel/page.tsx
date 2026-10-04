import type { Metadata } from "next";
import { travelGuides } from "@/data/travel";

export const metadata: Metadata = {
  title: "Wine Travel — Plan Your Wine Region Trip",
  description:
    "Travel guides to the world's great wine regions — when to go, where to stay, what to see and how to taste.",
  alternates: { canonical: "https://worldwidewines.info/wine-travel/" },
};

export default function WineTravelPage() {
  return (
    <article>
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            Wine Travel
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            Where to go, when, and what to taste
          </h1>
          <p className="text-[#d9cbb0] text-lg max-w-2xl">
            Practical trip guides to the world&apos;s wine regions — built to
            help you see, taste and remember.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {travelGuides.map((g) => (
            <a
              key={g.slug}
              href={`/wine-travel/${g.slug}/`}
              className="group flex gap-5 bg-white rounded-2xl border border-[#ece4d8] p-6 hover:border-[var(--c-wine)] hover:shadow-md transition"
            >
              <div className="flex-1">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--c-gold)] font-semibold mb-1">
                  {g.country}
                </p>
                <h2 className="font-display text-2xl font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)]">
                  {g.region}
                </h2>
                <p className="text-sm text-[var(--c-ink-soft)] mt-2">
                  {g.intro.slice(0, 120)}…
                </p>
              </div>
              <span aria-hidden className="text-[var(--c-wine)] text-xl mt-1 group-hover:translate-x-0.5 transition">→</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
