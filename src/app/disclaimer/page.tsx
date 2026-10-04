import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Disclaimer",
  description: `Read the ${SITE_NAME} disclaimer — the limits of our wine education content and why it is not professional advice.`,
  path: "/disclaimer/",
});

export default function DisclaimerPage() {
  return (
    <ContentPage
      eyebrow="Disclaimer"
      title="Disclaimer"
      lede="We love wine, but we are educators — not your doctor, your lawyer or your financial adviser. Here are the limits of what our content is, and is not."
      crumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
    >
      <div className="prose-body max-w-3xl space-y-6">
        <h2>Educational information only</h2>
        <p>
          All content on {SITE_NAME} is provided for general educational and
          informational purposes. It is provided in good faith for general
          guidance and should not be treated as professional, legal, medical or
          investment advice.
        </p>

        <h2>Wine &amp; health</h2>
        <p>
          We encourage responsible drinking. Our content about health-related
          topics related to wine — including any discussion of health effects —
          is informational and is not medical advice. Please consult a qualified
          professional for personal health questions, and never drink and drive.
        </p>

        <h2>Travel &amp; legal information</h2>
        <p>
          Travel guides reflect information at the time of writing, including
          opening hours, transport and tasting policies, which change. Always
          verify current details directly with the destination before travelling.
        </p>

        <h2>No guarantee of accuracy</h2>
        <p>
          We work hard to keep information accurate and current, but we make no
          representations or warranties about the completeness, accuracy or
          reliability of content on this site. Errors may occur; see our{" "}
          <a className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/corrections-policy/">
            corrections policy
          </a>
          .
        </p>

        <h2>External links</h2>
        <p>
          Links to external sites are provided for convenience. We are not
          responsible for the content of, or the reliability of information on,
          those external sites.
        </p>

        <h2>Professional judgment applies</h2>
        <p>
          Use the information on this site as a starting point, always apply
          your own professional judgment, and verify critical details with
          primary sources before relying on them.
        </p>
      </div>
    </ContentPage>
  );
}
