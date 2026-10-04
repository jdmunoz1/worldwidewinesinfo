import type { ReactNode } from "react";
import { Breadcrumb } from "./ui";

export function ContentPage({
  eyebrow,
  title,
  lede,
  children,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: { label: string; href?: string }[];
  children: ReactNode;
}) {
  return (
    <article>
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6] pt-10 pb-14">
        <div className="max-w-6xl mx-auto px-4">
          {crumbs.length > 0 && <Breadcrumb items={crumbs} />}
          <div className="mt-6 max-w-3xl">
            {eyebrow && (
              <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-3">
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
              {title}
            </h1>
            {lede && (
              <p className="text-[#d9cbb0] text-lg leading-relaxed">{lede}</p>
            )}
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-12">{children}</div>
    </article>
  );
}
