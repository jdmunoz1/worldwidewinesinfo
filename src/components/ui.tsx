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
    <section className={`max-w-6xl mx-auto px-4 py-14 ${className}`}>
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl md:text-4xl tracking-tight text-[var(--c-ink)] mb-4">
          {title}
        </h2>
        {intro && <p className="lede">{intro}</p>}
      </div>
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}

/** A clickable card with title, blurb and optional tag chips. */
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
      className="group block bg-white rounded-2xl border border-[#ece4d8] p-5 transition hover:border-[var(--c-wine)] hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-[var(--c-ink)] group-hover:text-[var(--c-wine)]">
          {flag && <span className="mr-2">{flag}</span>}
          {title}
        </h3>
        <span
          aria-hidden
          className="text-[var(--c-wine)] opacity-0 group-hover:opacity-100 transition text-xl leading-none mt-1"
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
            <span key={c} className="chip">
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
