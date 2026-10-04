import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";
import type { BreadcrumbList, FAQPage, WithContext, Article } from "schema-dts";

/** Build a page Metadata object with title, description and canonical. */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      type: "website",
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
    },
  };
}

/** JSON-LD BreadcrumbList. */
export function breadcrumbJsonLd(
  items: { name: string; item?: string }[]
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.item ? { item: `${SITE_URL}${it.item}` } : {}),
    })),
  };
}

/** JSON-LD Article with publisher + about. */
export function articleJsonLd({
  headline,
  description,
  path,
  about,
  image,
}: {
  headline: string;
  description: string;
  path: string;
  about?: string[];
  image?: string;
}): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${path}`,
    ...(image ? { image } : {}),
    about: about,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
  };
}

/** JSON-LD FAQPage from Q/A pairs. */
export function faqJsonLd(
  faqs: { question: string; answer: string }[]
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
