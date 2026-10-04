import type { Metadata } from "next";
import Link from "next/link";
import { countries, continents } from "@/data/countries";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "World Wine Map — Countries & Regions",
  description:
    "Explore the wine world by continent: every major wine-producing country, its regions and its signature grapes.",
  path: "/map/",
});

export default function WineMapPage() {
  return (
    <article>
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            World Wine Map
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            The wine world, continent by continent
          </h1>
          <p className="text-[#d9cbb0] text-lg max-w-2xl">
            Every major wine-producing country we cover, grouped by region — a
            visual way to wander the globe and plan your next discovery.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Simple continent map overview */}
        <div className="flex flex-wrap gap-3 mb-12">
          {continents.map((c) => (
            <a key={c} href={`#${c.replace(/\s+/g, "-").toLowerCase()}`} className="chip py-2 px-4 bg-white border-[#e5dccb] hover:border-[var(--c-wine)] hover:text-[var(--c-wine)] transition">
              {c} →
            </a>
          ))}
        </div>

        <div className="space-y-12">
          {continents.map((c) => {
            const list = countries.filter((x) => x.continent === c);
            if (list.length === 0) return null;
            return (
              <section key={c} id={c.replace(/\s+/g, "-").toLowerCase()}>
                <h2 className="font-display text-2xl md:text-3xl text-[var(--c-wine)] mb-4">
                  {c}
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {list.map((co) => (
                    <Link
                      key={co.slug}
                      href={`/${co.slug}/`}
                      className="group bg-white rounded-2xl border border-[#ece4d8] p-5 hover:border-[var(--c-wine)] hover:shadow-md transition"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-xl font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)]">
                          <span aria-hidden className="mr-2">{co.flagEmoji}</span>
                          {co.name}
                        </h3>
                        <span aria-hidden className="text-[var(--c-wine)] text-lg group-hover:translate-x-0.5 transition">→</span>
                      </div>
                      <p className="text-sm text-[var(--c-ink-soft)] mt-1.5">
                        {co.overview.slice(0, 90)}…
                      </p>
                      {co.majorRegions.length > 0 && (
                        <p className="text-xs text-[var(--c-gold)] mt-2 font-medium uppercase tracking-wide">
                          {co.majorRegions.slice(0, 3).join(" · ")}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}
