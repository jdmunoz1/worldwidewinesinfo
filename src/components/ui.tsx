import Link from "next/link";
import type { ReactNode } from "react";

/** Centered editorial section heading with optional eyebrow. */
export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-6xl mx-auto px-4 py-16 md:py-20 ${className}`}>
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="flex items-center gap-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-4">
            <span aria-hidden className="h-px w-8 bg-[var(--c-gold)]" />
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl md:text-[2.75rem] md:leading-[1.12] tracking-tight text-[var(--c-ink)] mb-4">
          {title}
        </h2>
        {intro && <p className="lede">{intro}</p>}
      </div>
      {children && <div className="mt-10">{children}</div>}
    </section>
  );
}

/** A clickable card — layered surfaces, tinted shadow, refined hover reveal. */
export function LinkCard({
  href,
  title,
  blurb,
  chips,
  flag,
}: {
  href: string;
  title: string;
  blurb?: string;
  chips?: string[];
  flag?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 transition-transform duration-200 hover:-translate-y-1 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 bg-[var(--c-gold)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
      />
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)] transition-colors duration-200 leading-snug">
          {flag && <span className="mr-2">{flag}</span>}
          {title}
        </h3>
        <span
          aria-hidden
          className="shrink-0 text-[var(--c-wine)] opacity-0 group-hover:translate-x-0.5 transition-all duration-200 text-xl leading-none mt-1"
        >
          →
        </span>
      </div>
      {blurb && (
        <p className="text-sm text-[var(--c-ink-soft)] mt-2 leading-relaxed">
          {blurb}
        </p>
      )}
      {chips && chips.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {chips.slice(0, 4).map((c) => (
            <span
              key={c}
              className="chip transition-colors duration-200 group-hover:bg-[var(--c-wine-soft)] group-hover:text-[var(--c-wine-2)]"
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}

/** A simple link grid — children rendered in a responsive grid. */
export function CardGrid({
  children,
  cols = 3,
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
}) {
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[cols];
  return (
    <div className={`grid grid-cols-1 gap-5 ${colClass}`}>{children}</div>
  );
}

/** Editorial prose container. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-body max-w-3xl">{children}</div>;
}

/** Inline table used for data sheets (stats, comparators). */
export function Sheet({
  head,
  rows,
}: {
  head: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#ece4d8]">
      <table className="sheet">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Breadcrumb trail. */
export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumb">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          {it.href ? (
            <Link href={it.href}>{it.label}</Link>
          ) : (
            <span className="text-[#3a342c]">{it.label}</span>
          )}
          {i < items.length - 1 && <span aria-hidden>›</span>}
        </span>
      ))}
    </nav>
  );
}

/** Small uppercase section eyebrow label. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
      {children}
    </p>
  );
}
