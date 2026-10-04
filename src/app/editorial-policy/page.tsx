import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Editorial Policy",
  description: `Read the ${SITE_NAME} editorial policy — our standards for accuracy, independence, transparency and corrections.`,
  path: "/editorial-policy/",
});

export default function EditorialPolicyPage() {
  return (
    <ContentPage
      eyebrow="Editorial standards"
      title="Editorial policy"
      lede="The principles that guide every article, tool and guide we publish — accuracy first, independence always."
      crumbs={[{ label: "Home", href: "/" }, { label: "Editorial Policy" }]}
    >
      <div className="prose-body max-w-3xl space-y-6">
        <h2>Our mission</h2>
        <p>
          {SITE_NAME} publishes accurate, useful and enjoyable wine education.
          Our first obligation is to our readers: we aim to help you understand
          and enjoy wine, and we never let commercial interests compromise that
          goal.
        </p>

        <h2>Accuracy &amp; fact-checking</h2>
        <p>
          Wine facts — vintages, appellations, grape origins, production
          methods — are verified against authoritative sources and reviewed for
          accuracy before publication. When precise numbers or classifications
          are disputed, we note the nuance rather than presenting one version
          as fact. You can read more in{" "}
          <a
            className="underline underline-offset-2 hover:text-[var(--c-wine)]"
            href="/how-we-research/"
          >
            How we research
          </a>
          .
        </p>

        <h2>Independence</h2>
        <p>
          Our editorial content is independent. Wine producers, distributors
          and brands do not pay for coverage, placement or favourable reviews.
          We may receive a commission on some product links, but commercial
          relationships never influence editorial decisions — see our{" "}
          <a
            className="underline underline-offset-2 hover:text-[var(--c-wine)]"
            href="/affiliate-disclosure/"
          >
            affiliate disclosure
          </a>
          .
        </p>

        <h2>Transparency</h2>
        <p>
          We are transparent about who we are, how we work and how the site is
          funded. Opinions and recommendations are our own and are always
          clearly grounded in the wine itself, not in who benefits.
        </p>

        <h2>Responsible drinking</h2>
        <p>
          Wine is a pleasure to be enjoyed responsibly. We encourage moderate,
          legal drinking and never glorify excess. Our content is intended for
          adults of legal drinking age.
        </p>

        <h2>Corrections</h2>
        <p>
          We are human, and occasionally wrong. When we find or are told about
          an error, we fix it promptly and transparently. Our full process is
          described in our{" "}
          <a
            className="underline underline-offset-2 hover:text-[var(--c-wine)]"
            href="/corrections-policy/"
          >
            corrections policy
          </a>
          .
        </p>
      </div>
    </ContentPage>
  );
}
