import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "How We Research",
  description: `Find out how ${SITE_NAME} researches and fact-checks its wine content — the sources, methods and standards behind every guide.`,
  path: "/how-we-research/",
});

export default function HowWeResearchPage() {
  return (
    <ContentPage
      eyebrow="Research & sourcing"
      title="How we research wine"
      lede="Behind every country profile, grape guide and travel piece is a deliberate research process. Here's how we make sure the facts are right."
      crumbs={[{ label: "Home", href: "/" }, { label: "How We Research" }]}
    >
      <div className="prose-body max-w-3xl space-y-6">
        <h2>Primary sources first</h2>
        <p>
          Whenever possible we ground wine facts in primary and authoritative
          sources: official appellation and regulatory bodies (such as AOC /
          appellation authorities, the EU wine register and national wine
          boards), established wine reference texts, and data from recognised
          research and trade organisations. Where a statistic (e.g. production
          totals) is a moving target, we state the context and date it reflects.
        </p>

        <h2>Domain expertise</h2>
        <p>
          The articles are written and reviewed by people with wine training
          and sommelier experience as well as regional knowledge. Practical
          guidance — how to taste, how to pair food, how to travel a wine
          region — reflects both formal study and real-world experience.
        </p>

        <h2>Cross-verification</h2>
        <p>
          Sensitive or easily-mis-stated claims — grape origins, classification
          tiers, producer names — are checked against at least one independent
          source. When references conflict, we present the differences honestly
          rather than flattening them.
        </p>

        <h2>Review before publication</h2>
        <p>
          Every piece passes an internal editorial review focused on factual
          accuracy, clarity and usefulness before going live. Complex pieces
          are checked again if significant updates are made later.
        </p>

        <h2>Keeping content current</h2>
        <p>
          The wine world changes: new appellations are recognised, producers
          evolve, travel logistics shift. We review core reference pages
          periodically and update them to reflect current information, noting
          meaningful changes where relevant.
        </p>

        <h2>You can help</h2>
        <p>
          If you spot a factual error or know a region better than we do, we
          want to hear from you. See our{" "}
          <a
            className="underline underline-offset-2 hover:text-[var(--c-wine)]"
            href="/corrections-policy/"
          >
            corrections policy
          </a>{" "}
          for how to report it — we genuinely appreciate the help.
        </p>
      </div>
    </ContentPage>
  );
}
