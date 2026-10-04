import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description: `The terms that apply when you use ${SITE_NAME} — reading, sharing and relying on our wine content.`,
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Terms of use"
      title="Terms of use"
      lede="The agreement that applies when you visit and use WorldwideWines.info."
      crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
    >
      <div className="prose-body max-w-3xl space-y-6">
        <h2>Acceptance of terms</h2>
        <p>
          By accessing or using {SITE_NAME}, you agree to be bound by these
          terms and by our{" "}
          <a className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/privacy/">
            privacy policy
          </a>
          . If you do not agree, please do not use the site.
        </p>

        <h2>Educational purpose</h2>
        <p>
          The content on this site is provided for general information and
          education only. It does not constitute professional advice. You
          should read our{" "}
          <a className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/disclaimer/">
            disclaimer
          </a>{" "}
          for full details on the limits of the information we provide.
        </p>

        <h2>Permitted use</h2>
        <p>
          You may read, share and link to our content for personal,
          non-commercial purposes. All content is protected by copyright and
          may not be reproduced, distributed or exploited commercially without
          our prior written permission.
        </p>

        <h2>Prohibited conduct</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Scraping or bulk downloading content.</li>
          <li>Using the site for unlawful purposes.</li>
          <li>Attempting to disrupt the site or its services.</li>
          <li>Misrepresenting your affiliation with {SITE_NAME}.</li>
        </ul>

        <h2>Intellectual property</h2>
        <p>
          The {SITE_NAME} name, logo, design and original content are the
          property of their respective owners and are protected by intellectual
          property law. Third-party names and marks remain the property of
          their owners.
        </p>

        <h2>Disclaimer of warranties &amp; limitation of liability</h2>
        <p>
          The site is provided “as is”, without warranties of any kind, express
          or implied. To the fullest extent permitted by law, we disclaim all
          liability for any loss or damage arising from your use of the site
          or reliance on its content, including indirect or consequential
          damages.
        </p>

        <h2>Links to third parties</h2>
        <p>
          The site contains links to external websites we do not control. We
          are not responsible for their content or availability, and linking
          is not an endorsement of their views.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the jurisdiction in which
          the site operates, without regard to conflict-of-law principles.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Contact us via the{" "}
          <a className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/contact/">
            contact page
          </a>
          .
        </p>
      </div>
    </ContentPage>
  );
}
