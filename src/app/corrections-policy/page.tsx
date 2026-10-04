import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Corrections Policy",
  description: `How ${SITE_NAME} handles factual errors — report a mistake and see how and when we fix it.`,
  path: "/corrections-policy/",
});

export default function CorrectionsPolicyPage() {
  return (
    <ContentPage
      eyebrow="Accountability"
      title="Corrections policy"
      lede="We fix errors promptly, transparently and free of charge — here's exactly how it works."
      crumbs={[{ label: "Home", href: "/" }, { label: "Corrections Policy" }]}
    >
      <div className="prose-body max-w-3xl space-y-6">
        <h2>How to report an error</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Find the page</strong> with the mistake — include its URL.
          </li>
          <li>
            <strong>Describe the error</strong> and, ideally, what you believe
            the correct information is, with a source if you have one.
          </li>
          <li>
            <strong>Send it</strong> to{" "}
            <a className="underline underline-offset-2" href="mailto:corrections@worldwidewines.info">
              corrections@worldwidewines.info
            </a>{" "}
            or use the contact form.
          </li>
        </ol>

        <h2>What happens next</h2>
        <p>
          We review every correction report, verify the claim against our
          sources, and — when you are right — update the page and confirm to
          you. Minor typographical fixes usually happen within days; more
          substantial factual corrections are handled just as promptly.
        </p>

        <h2>Substantial corrections</h2>
        <p>
          When a correction meaningfully changes the takeaway of an article, we
          add a small note at the top or bottom of the page documenting the
          change, so the record stays honest for every reader.
        </p>

        <h2>We appreciate your input</h2>
        <p>
          Corrections from readers are one of our most important quality
          mechanisms. Every reported error makes the site better for everyone.
          Thank you for helping us keep {SITE_NAME} accurate and trustworthy.
        </p>
      </div>
    </ContentPage>
  );
}
