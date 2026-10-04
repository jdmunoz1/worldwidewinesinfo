import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wine Tools — Pairing, Serving & Reference",
  description:
    "Interactive tools for wine lovers: a pairing finder, a serving-temperature guide, and quick references.",
  alternates: { canonical: "https://worldwidewines.info/tools/" },
};

const tools = [
  {
    title: "Pairing finder",
    href: "/tools/pairing/",
    blurb: "Tell us what you're eating and discover the wine styles that love it.",
    emoji: "🍽️",
  },
  {
    title: "Serving temperature guide",
    href: "/tools/serving-temperature/",
    blurb: "See exactly how to chill every wine style for maximum aroma and balance.",
    emoji: "🧊",
  },
];

export default function ToolsPage() {
  return (
    <article>
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            Tools
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            Handy wine tools
          </h1>
          <p className="text-[#d9cbb0] text-lg max-w-2xl">
            Little interactive helpers to make pairing and serving easy.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((t) => (
            <a
              key={t.href}
              href={t.href}
              className="group flex gap-5 bg-white rounded-2xl border border-[#ece4d8] p-6 hover:border-[var(--c-wine)] hover:shadow-md transition"
            >
              <span aria-hidden className="text-4xl shrink-0">{t.emoji}</span>
              <div>
                <h2 className="font-display text-2xl font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)]">
                  {t.title}
                </h2>
                <p className="text-sm text-[var(--c-ink-soft)] mt-1.5">{t.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
