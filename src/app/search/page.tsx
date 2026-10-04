"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { countries } from "@/data/countries";
import { regions } from "@/data/regions";
import { grapes } from "@/data/grapes";
import { wineStyles } from "@/data/wine-styles";
import { glossaryTerms } from "@/data/glossary";
import { learnSections } from "@/data/learn";
import { travelGuides } from "@/data/travel";
import { foodPairings } from "@/data/food-pairings";

type Result = { title: string; href: string; type: string; blurb: string };

export default function SearchPage() {
  const [q, setQ] = useState("");

  const results = useMemo<Result[]>(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    const out: Result[] = [];
    const push = (r: Result) => {
      out.push(r);
    };

    for (const c of countries) {
      if (c.name.toLowerCase().includes(term)) {
        push({ title: c.name, href: `/${c.slug}/`, type: "Country", blurb: c.overview.slice(0, 140) });
      }
    }
    for (const r of regions) {
      if (r.name.toLowerCase().includes(term)) {
        push({ title: `${r.name} · ${r.country}`, href: `/${r.countrySlug}/${r.slug}/`, type: "Region", blurb: r.description.slice(0, 140) });
      }
    }
    for (const g of grapes) {
      if (g.name.toLowerCase().includes(term) || (g.alsoKnownAs && g.alsoKnownAs.toLowerCase().includes(term))) {
        push({ title: g.name, href: `/grapes/${g.slug}/`, type: "Grape", blurb: g.description.slice(0, 140) });
      }
    }
    for (const s of wineStyles) {
      if (s.name.toLowerCase().includes(term)) {
        push({ title: s.name, href: `/wine-styles/${s.slug}/`, type: "Style", blurb: s.description.slice(0, 140) });
      }
    }
    for (const g of glossaryTerms) {
      if (g.term.toLowerCase().includes(term)) {
        push({ title: g.term, href: `/glossary/#${g.slug}`, type: "Glossary", blurb: g.definition.slice(0, 140) });
      }
    }
    for (const l of learnSections) {
      if (l.title.toLowerCase().includes(term)) {
        push({ title: l.title, href: `/learn/${l.slug}/`, type: "Learn", blurb: l.intro.slice(0, 140) });
      }
    }
    for (const t of travelGuides) {
      if (t.region.toLowerCase().includes(term)) {
        push({ title: t.region, href: `/wine-travel/${t.slug}/`, type: "Travel Guide", blurb: t.intro.slice(0, 140) });
      }
    }
    for (const f of foodPairings) {
      if (f.food.toLowerCase().includes(term)) {
        push({ title: f.food, href: `/food-pairing/${f.slug}/`, type: "Food Pairing", blurb: f.description.slice(0, 140) });
      }
    }

    return out.slice(0, 40);
  }, [q]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl md:text-4xl text-[var(--c-wine)] mb-6">
        Search
      </h1>
      <label className="sr-only" htmlFor="search-input">
        Search the site
      </label>
      <input
        id="search-input"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Try “Sauvignon”, “Bordeaux”, “tannin”, “Burgundy travel”…"
        className="w-full px-5 py-4 rounded-2xl border border-[#ece4d8] bg-white text-lg text-[var(--c-ink)] outline-none focus:border-[var(--c-wine)] focus:ring-2 focus:ring-[var(--c-wine-soft)] mb-6 shadow-sm"
      />

      {q.trim().length >= 2 && results.length === 0 && (
        <p className="text-[var(--c-ink-soft)]">
          No matches for “{q}”. Try a broader term.
        </p>
      )}
      {q.trim().length < 2 && (
        <p className="text-[var(--c-ink-soft)]">
          Type at least two characters to search the site.
        </p>
      )}

      <ul className="space-y-3">
        {results.map((r) => (
          <li key={r.href + r.title}>
            <Link
              href={r.href}
              className="block bg-white rounded-2xl border border-[#ece4d8] p-4 hover:border-[var(--c-wine)] hover:shadow-md transition"
            >
              <span className="text-[0.7rem] uppercase tracking-wide text-[var(--c-gold)] font-semibold">
                {r.type}
              </span>
              <h3 className="font-display text-lg text-[var(--c-ink)]">{r.title}</h3>
              <p className="text-sm text-[var(--c-ink-soft)] mt-1">{r.blurb}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
