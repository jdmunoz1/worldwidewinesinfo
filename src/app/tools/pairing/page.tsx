"use client";

import { useState } from "react";
import Link from "next/link";
import { foodPairings } from "@/data/food-pairings";

export default function PairingFinderTool() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (slug: string) =>
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );

  const matches = foodPairings.filter(
    (p) => selected.length === 0 || selected.some((s) => p.recommendedGrapes.includes(s))
  );

  return (
    <main data-tool className="max-w-6xl mx-auto px-4 py-12">
      <nav className="breadcrumbs text-sm text-[var(--c-ink-soft)]">
        <Link href="/">Home</Link> <span>/</span>
        <Link href="/tools/">Tools</Link> <span>/</span>
        <span>Pairing Finder</span>
      </nav>

      <h1 className="font-display text-4xl md:text-5xl tracking-tight mt-6 mb-3">
        Pairing finder
      </h1>
      <p className="text-lg text-[var(--c-ink-soft)] max-w-2xl">
        Tell us what&apos;s on the plate — tap as many ingredients or dishes as
        you like — and we&apos;ll surface the wine styles that love them.
      </p>

      <div className="mt-8">
        <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--c-gold)] font-semibold mb-3">
          What are you eating?
        </p>
        <div className="flex flex-wrap gap-2">
          {foodPairings.map((p) => (
            <button
              key={p.slug}
              onClick={() => toggle(p.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                selected.includes(p.slug)
                  ? "bg-[var(--c-wine)] text-white border-[var(--c-wine)]"
                  : "bg-white border-[#ece4d8] text-[var(--c-ink)] hover:border-[var(--c-wine)]"
              }`}
            >
              {p.food}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-2xl mb-4">
          {selected.length === 0 ? "Popular pairings" : "Great matches"}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {matches.map((p) => (
            <Link
              key={p.slug}
              href={`/food-pairing/${p.slug}/`}
              className="group block bg-white rounded-2xl border border-[#ece4d8] p-5 hover:border-[var(--c-wine)] hover:shadow-md transition"
            >
              <h3 className="font-display text-xl font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)]">
                {p.food}
              </h3>
              <p className="text-sm text-[var(--c-ink-soft)] mt-1.5">
                {p.description.slice(0, 90)}…
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.recommendedGrapes.slice(0, 3).map((g) => (
                  <span key={g} className="chip">
                    {g}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        {matches.length === 0 && (
          <p className="text-[var(--c-ink-soft)]">No direct match — try fewer selections.</p>
        )}
      </div>
    </main>
  );
}
