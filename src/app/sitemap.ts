import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { countries } from "@/data/countries";
import { regions } from "@/data/regions";
import { grapes } from "@/data/grapes";
import { wineStyles } from "@/data/wine-styles";
import { wineSchoolTopics } from "@/data/wine-school";
import { foodPairings } from "@/data/food-pairings";
import { travelGuides } from "@/data/travel";
import { learnSections } from "@/data/learn";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "/",
    "/wine-regions/",
    "/grapes/",
    "/wine-styles/",
    "/wine-school/",
    "/food-pairing/",
    "/wine-travel/",
    "/learn/",
    "/glossary/",
    "/map/",
    "/tools/",
    "/tools/pairing/",
    "/tools/serving-temperature/",
    "/search/",
    "/about/",
    "/editorial-policy/",
    "/how-we-research/",
    "/contact/",
    "/corrections-policy/",
    "/affiliate-disclosure/",
    "/privacy/",
    "/terms/",
    "/disclaimer/",
    "/cookie-policy/",
  ].map((path) => ({ url: `${SITE_URL}${path}`, lastModified: now }));

  const countryRoutes: MetadataRoute.Sitemap = countries.map((c) => ({
    url: `${SITE_URL}/${c.slug}/`,
    lastModified: now,
  }));

  const regionRoutes: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${SITE_URL}/${r.countrySlug}/${r.slug}/`,
    lastModified: now,
  }));

  const grapeRoutes: MetadataRoute.Sitemap = grapes.map((g) => ({
    url: `${SITE_URL}/grapes/${g.slug}/`,
    lastModified: now,
  }));

  const styleRoutes: MetadataRoute.Sitemap = wineStyles.map((s) => ({
    url: `${SITE_URL}/wine-styles/${s.slug}/`,
    lastModified: now,
  }));

  const schoolRoutes: MetadataRoute.Sitemap = wineSchoolTopics.map((t) => ({
    url: `${SITE_URL}/wine-school/${t.slug}/`,
    lastModified: now,
  }));

  const pairingRoutes: MetadataRoute.Sitemap = foodPairings.map((f) => ({
    url: `${SITE_URL}/food-pairing/${f.slug}/`,
    lastModified: now,
  }));

  const travelRoutes: MetadataRoute.Sitemap = travelGuides.map((t) => ({
    url: `${SITE_URL}/wine-travel/${t.slug}/`,
    lastModified: now,
  }));

  const learnRoutes: MetadataRoute.Sitemap = learnSections.map((l) => ({
    url: `${SITE_URL}/learn/${l.slug}/`,
    lastModified: now,
  }));

  return [
    ...staticRoutes,
    ...countryRoutes,
    ...regionRoutes,
    ...grapeRoutes,
    ...styleRoutes,
    ...schoolRoutes,
    ...pairingRoutes,
    ...travelRoutes,
    ...learnRoutes,
  ];
}
