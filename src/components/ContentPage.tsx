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
      <section className="relative overflow-hidden bg-[var(--c-burgundy)] text-[#f6efe6] pt-12 pb-16">
        {/* ambient depth: gold glow top-right + subtle radial vignette */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(196,151,74,0.22),transparent_62%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-[radial-gradient(120%_100%_at_50%_100%,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(196,151,74,0.45),transparent)]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          {crumbs.length > 0 && <Breadcrumb items={crumbs} />}
          <div className="mt-8 max-w-3xl">
            {eyebrow && (
              <p className="flex items-center gap-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--c-gold)] font-semibold mb-4">
                <span aria-hidden className="h-px w-8 bg-[var(--c-gold)]" />
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] lg:leading-[1.08] tracking-tight mb-4">
              {title}
            </h1>
            {lede && (
              <p className="text-[#d9cbb0] text-lg leading-relaxed max-w-2xl">
                {lede}
              </p>
            )}
          </div>
        </div>
      </section>
      <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-16">{children}</div>
    </article>
  );
}
