"use client";

import { useState } from "react";
import Link from "next/link";
import { PRIMARY_NAV } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="p-2 -mr-2"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <nav
            aria-label="Mobile"
            className="absolute right-0 top-0 bottom-0 w-80 max-w-[90vw] bg-white overflow-y-auto p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-display font-semibold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-1"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-1">
              {PRIMARY_NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-semibold py-2 border-b border-[#f0e8dc]"
                  >
                    {item.label}
                  </Link>
                  <ul className="pl-4 py-1 space-y-1">
                    {item.children?.map((c) => (
                      <li key={c.href + c.label}>
                        <Link
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-sm text-[var(--c-ink-soft)]"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="btn-wine w-full justify-center"
              >
                Search
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
