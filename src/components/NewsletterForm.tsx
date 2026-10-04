"use client";

import { useState } from "react";

export default function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setState("loading");
    setError("");
    // Note: newsletter delivery is wired to a platform later. For now we
    // record intent without exposing subscriber counts or fabricating them.
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      setState("done");
    } catch {
      setError("Something went wrong. Please try again.");
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <p
        className={
          dark
            ? "text-[var(--c-gold)] font-medium"
            : "text-[var(--c-wine)] font-medium"
        }
      >
        Thank you — you&apos;re on the list. Welcome to the world of wine. 🍷
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <label htmlFor={`nl-${dark ? "d" : "l"}`} className="sr-only">
        Email address
      </label>
      <input
        id={`nl-${dark ? "d" : "l"}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 px-4 py-3 rounded-full border border-[#e5dccb] bg-white text-[var(--c-ink)] placeholder:text-[#a99e8e] focus:outline-none focus:ring-2 focus:ring-[var(--c-gold)]"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="px-6 py-3 rounded-full bg-[var(--c-gold)] text-[#2a1d0a] font-semibold hover:bg-[var(--c-gold)]/90 transition disabled:opacity-60"
      >
        {state === "loading" ? "Joining…" : "Join free"}
      </button>
      {error && <p className="text-sm text-red-300 sm:col-span-2">{error}</p>}
    </form>
  );
}
