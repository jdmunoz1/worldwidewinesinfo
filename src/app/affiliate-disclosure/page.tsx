import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Affiliate Disclosure",
  description: `How ${SITE_NAME} uses affiliate links: what they are, how we choose them, and that they never affect editorial content.`,
  path: "/affiliate-disclosure/",
});

export default function AffiliateDisclosurePage() {
  return (
    <ContentPage
      eyebrow="Transparency"
      title="Affiliate disclosure"
      lede="We may earn a commission on some links to wine retailers and services. This disclosure explains exactly what that means for you."
      crumbs={[{ label: "Home", href: "/" }, { label: "Affiliate Disclosure" }]}
    >
      <div className="prose-body max-w-3xl space-y-6">
        <h2>What affiliate links are</h2>
        <p>
          Some outbound links on {SITE_NAME} are “affiliate links”. If you buy
          through one of these links, we may earn a small commission — at no
          extra cost to you. This is a common, transparent way to fund a free
          educational site.
        </p>

        <h2>It never affects editorial content</h2>
        <p>
          Crucially, our editorial decisions are made before any commercial
          relationship is considered. We do not recommend a wine, region or
          brand because it makes us money; the recommendation stands alone on
          its merits. When we include an affiliate link, we are recommending
          the product to you regardless.
        </p>

        <h2>Which links are affiliates</h2>
        <p>
          We label our affiliate relationships clearly. Links that go through
          a partner program or are marked as “sponsored” fall under this
          disclosure. Third-party sites we link to have their own policies,
          which we do not control.
        </p>

        <h2>Our promise</h2>
        <p>
          We would rather you trust us than click anything — if you ever feel
          uneasy about a recommendation, we invite you to read our{" "}
          <a className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/editorial-policy/">
            editorial policy
          </a>{" "}
          and{" "}
          <a className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/contact/">
            contact us
          </a>
          . We are happy to explain any relationship in detail.
        </p>
      </div>
    </ContentPage>
  );
}
