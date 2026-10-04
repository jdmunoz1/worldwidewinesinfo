import type { ReactNode } from "react";
import Link from "next/link";
import { PRIMARY_NAV, SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import MobileNav from "./MobileNav";
import NewsletterForm from "./NewsletterForm";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-wine focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 bg-[var(--c-paper)]/95 backdrop-blur border-b border-[#ece4d8]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <span
                aria-hidden
                className="h-7 w-7 rounded-full bg-[var(--c-wine)] text-white grid place-items-center group-hover:scale-105 transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C9 5 7 7.5 7 11a5 5 0 0 0 10 0c0-3.5-2-6-5-9Zm0 8a2 2 0 0 1 0 4 2 2 0 0 1 0-4ZM5 14v1c0 2 3 3 7 3s7-1 7-3v-1l-1.5 1.2H6.5L5 14Zm0 4c0 2 3 3 7 3s7-1 7-3v1c0 2-3 3-7 3s-7-1-7-3v-1Z" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold tracking-tight">
                  Worldwide<span className="text-[var(--c-wine)]">Wines</span>
                </span>
                <span className="text-[0.62rem] uppercase tracking-[0.18em] text-[var(--c-ink-soft)]">
                  .info · education
                </span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
              {PRIMARY_NAV.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[var(--c-ink)] hover:text-[var(--c-wine)] py-3 inline-flex items-center gap-1"
                  >
                    {item.label}
                    <svg
                      aria-hidden
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="translate-y-0.5"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition group-focus-within:opacity-100 group-focus-within:visible">
                    <div className="min-w-56 bg-white rounded-2xl shadow-xl border border-[#ece4d8] p-2">
                      {item.children?.map((c) => (
                        <Link
                          key={c.href + c.label}
                          href={c.href}
                          className="block px-3 py-2 rounded-lg text-sm text-[var(--c-ink-soft)] hover:bg-[var(--c-wine-soft)] hover:text-[var(--c-wine-2)]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/search"
                className="hidden sm:inline-flex items-center gap-2 text-sm text-[var(--c-ink-soft)] hover:text-[var(--c-wine)] px-3 py-2"
                aria-label="Search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="hidden md:inline">Search</span>
              </Link>
              <div className="lg:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      {/* Newsletter band */}
      <section className="bg-[var(--c-burgundy)] text-[#f6efe6]">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl mb-2">
            Explore the world of wine, one region and story at a time
          </h2>
          <p className="text-[#d9cbb0] max-w-xl mx-auto mb-6">
            Join the newsletter for region-of-the-week guides, grape deep-dives,
            food pairings and wine travel — straight to your inbox.
          </p>
          <NewsletterForm dark />
        </div>
      </section>

      <footer className="bg-[#221b16] text-[#c9beae] text-sm">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <FooterCol
              title="Explore"
              links={[
                ["All Wine Regions", "/wine-regions/"],
                ["Grape Varieties", "/grapes/"],
                ["Wine Styles", "/wine-styles/"],
                ["Wine School", "/wine-school/"],
                ["Food & Wine Pairing", "/food-pairing/"],
              ]}
            />
            <FooterCol
              title="Countries"
              links={[
                ["France", "/france/"],
                ["Italy", "/italy/"],
                ["Spain", "/spain/"],
                ["Australia", "/australia/"],
                ["United States", "/united-states/"],
                ["New Zealand", "/new-zealand/"],
              ]}
            />
            <FooterCol
              title="Tools & Travel"
              links={[
                ["World Wine Map", "/map/"],
                ["Pairing Finder", "/tools/pairing/"],
                ["Serving Temperatures", "/tools/serving-temperature/"],
                ["Wine Travel", "/wine-travel/"],
                ["Glossary", "/glossary/"],
                ["Learn", "/learn/"],
              ]}
            />
            <FooterCol
              title="About"
              links={[
                ["About", "/about/"],
                ["Editorial Policy", "/editorial-policy/"],
                ["How We Research", "/how-we-research/"],
                ["Contact", "/contact/"],
                ["Corrections", "/corrections-policy/"],
                ["Affiliate Disclosure", "/affiliate-disclosure/"],
              ]}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#8f8474] border-t border-[#3a312a] pt-8">
            <FooterCol
              title="Legal"
              links={[
                ["Privacy Policy", "/privacy/"],
                ["Terms", "/terms/"],
                ["Disclaimer", "/disclaimer/"],
                ["Cookie Policy", "/cookie-policy/"],
              ]}
            />
            <FooterCol
              title="Popular Guides"
              links={[
                ["Wine for Beginners", "/wine-school/wine-basics/"],
                ["How Wine Is Made", "/wine-school/how-wine-is-made/"],
                ["How to Taste Wine", "/wine-school/how-to-taste/"],
                ["Bordeaux Guide", "/france/bordeaux/"],
                ["Napa Valley Guide", "/united-states/napa-valley/"],
              ]}
            />
          </div>

          <div className="mt-10 pt-6 border-t border-[#3a312a] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#8f8474]">
            <p>
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <p className="max-w-md text-center md:text-right">
              {SITE_TAGLINE} Please enjoy wine responsibly. This site is for
              informational and educational purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h3 className="font-display text-white font-semibold mb-3 uppercase tracking-wide text-xs">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={href + label}>
            <Link href={href} className="hover:text-white transition">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
