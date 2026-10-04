"use client";

import { useState } from "react";
import Link from "next/link";
import { wineStyles } from "@/data/wine-styles";

const styleGuide: Record<string, string> = {
  "red-wine": "15–18°C — cool room temperature; lighter reds toward the cooler end",
  "white-wine": "8–13°C — well chilled, but not icy",
  rose: "8–12°C — chilled",
  "sparkling-wine": "6–10°C — well chilled",
  "dessert-wine": "6–10°C — chilled",
  "fortified-wine": "6–18°C — fino ice-cold, tawny/port at room temperature",
  "natural-wine": "10–14°C — gentle chill",
};

export default function ServingTemperatureTool() {
  const [activeStyle, setActiveStyle] = useState<string>("white-wine");

  return (
    <main data-tool className="max-w-6xl mx-auto px-4 py-12">
      <nav className="breadcrumbs text-sm text-[var(--c-ink-soft)]">
        <Link href="/">Home</Link> <span>/</span>
        <Link href="/tools/">Tools</Link> <span>/</span>
        <span>Serving Temperature</span>
      </nav>

      <h1 className="font-display text-4xl md:text-5xl tracking-tight mt-6 mb-3">
        Serving temperature guide
      </h1>
      <p className="text-lg text-[var(--c-ink-soft)] max-w-2xl">
        Serving wine at the right temperature reveals more aroma and balances
        flavour. Pick a style to see exactly how to chill it.
      </p>

      <div className="mt-8 grid lg:grid-cols-[240px_1fr] gap-8">
        <aside className="space-y-2">
          {wineStyles.map((s) => (
            <button
              key={s.slug}
              onClick={() => setActiveStyle(s.slug)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium border transition ${
                activeStyle === s.slug
                  ? "bg-[var(--c-wine)] text-white border-[var(--c-wine)]"
                  : "bg-white border-[#ece4d8] text-[var(--c-ink)] hover:border-[var(--c-wine)]"
              }`}
            >
              {s.name}
            </button>
          ))}
        </aside>

        <div className="bg-white rounded-2xl border border-[#ece4d8] p-6 md:p-8">
          {wineStyles
            .filter((s) => s.slug === activeStyle)
            .map((s) => (
              <div key={s.slug}>
                <h2 className="font-display text-3xl text-[var(--c-wine)]">
                  {s.name}
                </h2>
                <p className="text-[var(--c-ink-soft)] mt-1">{s.hero}</p>
                <div className="mt-6 rounded-xl bg-[var(--c-wine-soft)] p-6">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--c-wine-2)] font-semibold mb-2">
                    Recommended
                  </p>
                  <p className="text-2xl font-medium text-[var(--c-wine-2)]">
                    {styleGuide[s.slug]}
                  </p>
                </div>
                <p className="text-sm text-[var(--c-ink-soft)] mt-4 leading-relaxed">
                  A simple rule: the more delicate and aromatic the wine, the
                  cooler it&apos;s served. Full-bodied whites and light reds need
                  less chilling than crisp whites and sparklers. Over-chilling
                  deadens aroma; under-chilling makes alcohol and tannin stand
                  out.
                </p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
