import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses and protects your personal data — cookies, analytics, newsletter and your rights.`,
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Your privacy"
      title="Privacy policy"
      lede="This privacy policy explains what information we collect, why we collect it, and how we keep it safe."
      crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
    >
      <div className="prose-body max-w-3xl space-y-6">
        <h2>Information we collect</h2>
        <p>
          We collect minimal data. When you subscribe to our newsletter, we
          collect your email address and consent. When you browse, standard
          analytics may collect anonymous usage data (pages visited, device
          type, general location) to help us understand what content is useful.
        </p>

        <h2>How we use your data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To deliver the newsletter you have subscribed to.</li>
          <li>To understand and improve our content and site experience.</li>
          <li>To respond if you contact us.</li>
        </ul>
        <p>
          We do not sell your personal data to anyone, ever.
        </p>

        <h2>Cookies &amp; analytics</h2>
        <p>
          We use cookies and similar technologies as described in our{" "}
          <a className="underline underline-offset-2 hover:text-[var(--c-wine)]" href="/cookie-policy/">
            cookie policy
          </a>
          . Some analytics and affiliate processes are handled by our partners;
          they process data under their own privacy policies.
        </p>

        <h2>Third-party services</h2>
        <p>
          Our newsletter is delivered using a trusted email service provider,
          and our analytics may be processed through a recognised analytics
          platform. Each of these may process personal data on our behalf and
          has its own privacy commitments.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live (including under the GDPR, UK GDPR and
          CCPA), you may have the right to access, correct, delete or export
          your personal data, to withdraw consent, and to object to certain
          processing. To exercise any of these rights, email{" "}
          <a className="underline underline-offset-2" href="mailto:privacy@worldwidewines.info">
            privacy@worldwidewines.info
          </a>
          .
        </p>

        <h2>Data security &amp; retention</h2>
        <p>
          We keep personal data only as long as needed for the purposes above,
          protect it with appropriate technical and organisational measures,
          and delete it when it is no longer needed (for example, when you
          unsubscribe from the newsletter).
        </p>

        <h2>Children's privacy</h2>
        <p>
          This site is intended for adults of legal drinking age. We do not
          knowingly collect personal data from minors.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. We will post any changes
          on this page with a fresh “last updated” date. Contact us at{" "}
          <a className="underline underline-offset-2" href="mailto:privacy@worldwidewines.info">
            privacy@worldwidewines.info
          </a>{" "}
          with any questions.
        </p>
      </div>
    </ContentPage>
  );
}
