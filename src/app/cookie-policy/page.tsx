import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description: `How ${SITE_NAME} uses cookies and similar technologies — and how you can control them.`,
  path: "/cookie-policy/",
});

export default function CookiePolicyPage() {
  return (
    <ContentPage
      eyebrow="Cookies"
      title="Cookie policy"
      lede="What cookies are on this site, why we use them, and how you can control them."
      crumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
    >
      <div className="prose-body max-w-3xl space-y-6">
        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help a site remember your preferences and understand
          how it is used.
        </p>

        <h2>Cookies we use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Strictly necessary cookies:</strong> required for the site
            to function, such as remembering your consent choice.
          </li>
          <li>
            <strong>Analytics cookies:</strong> anonymous data about how the
            site is used — pages visited, approximate location, device — used
            to improve content and performance.
          </li>
          <li>
            <strong>Preference cookies:</strong> remember choices you make,
            such as dismissible notices you have seen.
          </li>
        </ul>

        <h2>Similar technologies</h2>
        <p>
          In addition to cookies, our analytics and newsletter services may use
          pixels, local storage or other tracking technologies for similar
          purposes. These are described in our{" "}
          <a className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/privacy/">
            privacy policy
          </a>
          .
        </p>

        <h2>Controlling cookies</h2>
        <p>
          You can control cookies through your browser settings — most browsers
          let you block or delete cookies, or alert you when one is set. You can
          also opt out of analytics cookies via the consent banner on this site.
          Please note that disabling cookies may affect how the site works for
          you.
        </p>

        <h2>Third-party cookies</h2>
        <p>
          Some cookies are set by our partners rather than by us. Each partner
          has its own privacy and cookie practices, which you can review on
          their websites.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy. Any changes will be posted here with a
          new “last updated” date. For questions, email{" "}
          <a className="underline underline-offset-2" href="mailto:privacy@worldwidewines.info">
            privacy@worldwidewines.info
          </a>
          .
        </p>
        <p className="text-sm text-[var(--c-ink-soft)]">
          Last updated: January 2024
        </p>
      </div>
    </ContentPage>
  );
}
