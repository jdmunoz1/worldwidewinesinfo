import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description: `Contact the ${SITE_NAME} team — questions, corrections, feedback and press enquiries.`,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="We'd love to hear from you"
      lede="Questions about wine, corrections, partnership ideas or just a friendly hello — get in touch with the WorldwideWines.info team."
      crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="prose-body max-w-3xl space-y-6">
        <h2>How to reach us</h2>
        <p>
          The quickest way to reach the team is by email. We read everything
          and usually reply within a few business days.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>General questions &amp; feedback</strong> —{" "}
            <a className="underline underline-offset-2" href="mailto:hello@worldwidewines.info">
              hello@worldwidewines.info
            </a>
          </li>
          <li>
            <strong>Corrections &amp; factual errors</strong> — visit our{" "}
            <Link className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/corrections-policy/">
              corrections policy
            </Link>{" "}
            or email{" "}
            <a className="underline underline-offset-2" href="mailto:corrections@worldwidewines.info">
              corrections@worldwidewines.info
            </a>
            .
          </li>
          <li>
            <strong>Media &amp; press</strong> —{" "}
            <a className="underline underline-offset-2" href="mailto:press@worldwidewines.info">
              press@worldwidewines.info
            </a>
          </li>
          <li>
            <strong>Business &amp; partnerships</strong> —{" "}
            <a className="underline underline-offset-2" href="mailto:business@worldwidewines.info">
              business@worldwidewines.info
            </a>
          </li>
        </ul>

        <h2>Suggest a topic</h2>
        <p>
          Want us to cover a region, grape or wine topic that we have missed?
          We are always expanding. Tell us what you would love to read about —
          your suggestion may shape the next guide we publish.
        </p>
        <p>
          Before writing, you may enjoy our{" "}
          <Link className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/about/">
            about page
          </Link>{" "}
          and our{" "}
          <Link className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/editorial-policy/">
            editorial policy
          </Link>{" "}
          to learn more about how we work.
        </p>
      </div>
    </ContentPage>
  );
}
