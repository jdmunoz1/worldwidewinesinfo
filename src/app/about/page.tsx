import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About",
  description: `Learn about ${SITE_NAME} — who we are, why we built the world's friendliest wine education site, and what we stand for.`,
  path: "/about/",
});

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About us"
      title={`Everything you wanted to know about wine, and about ${SITE_NAME}`}
      lede={`${SITE_NAME} is an independent, ad-light editorial site dedicated to wine education — from grape varieties to travel guides. Here's who we are and why this site exists.`}
      crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
    >
      <div className="prose-body max-w-3xl space-y-6">
        <h2>Why we built this site</h2>
        <p>
          Wine can feel intimidating — full of jargon, regional rules, and
          unspoken etiquette. We believe everyone should be able to walk into a
          shop, pick up a bottle, and understand what they are buying.{" "}
          {SITE_NAME} exists to remove the mystery and replace it with
          knowledge: country by country, region by region, grape by grape.
        </p>
        <p>
          We are a small team of writers, sommeliers and researchers who love
          wine and love sharing what we know. Our goal is a single, trustworthy
          place to learn about the wine world — with practical advice you can
          use the very same evening you read it.
        </p>

        <h2>What you'll find here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Complete guides to more than 20 wine-producing countries and 50+
            regions.
          </li>
          <li>Deep-dives on the world's most important grape varieties.</li>
          <li>Wine styles explained, from a crisp rosé to a nutty sherry.</li>
          <li>Food-pairing principles and practical tools.</li>
          <li>An ongoing wine school that takes you from zero to confident.</li>
          <li>Wine-travel guides to the best destinations on earth.</li>
        </ul>

        <h2>Our editorial values</h2>
        <p>
          We publish{" "}
          <a
            className="underline underline-offset-2 hover:text-[var(--c-wine)]"
            href="/editorial-policy/"
          >
            according to an editorial policy
          </a>{" "}
          built on accuracy, transparency and independence. Content is written
          and fact-checked by humans who know wine, as described in{" "}
          <a
            className="underline underline-offset-2 hover:text-[var(--c-wine)]"
            href="/how-we-research/"
          >
            how we research
          </a>
          . We are transparent about errors via our{" "}
          <a
            className="underline underline-offset-2 hover:text-[var(--c-wine)]"
            href="/corrections-policy/"
          >
            corrections policy
          </a>
          , and we disclose any affiliate relationships in our{" "}
          <a
            className="underline underline-offset-2 hover:text-[var(--c-wine)]"
            href="/affiliate-disclosure/"
          >
            affiliate disclosure
          </a>
          .
        </p>

        <h2>Get in touch</h2>
        <p>
          Questions, corrections, or ideas for coverage? We would love to hear
          from you — visit our{" "}
          <a
            className="underline underline-offset-2 hover:text-[var(--c-wine)]"
            href="/contact/"
          >
            contact page
          </a>
          . For business and media enquiries, write to us at{" "}
          <a
            className="underline underline-offset-2 hover:text-[var(--c-wine)]"
            href={`mailto:hello@${new URL(SITE_URL).hostname.replace("www.", "")}`}
          >
            hello@{new URL(SITE_URL).hostname.replace("www.", "")}
          </a>
          .
        </p>
      </div>
    </ContentPage>
  );
}
