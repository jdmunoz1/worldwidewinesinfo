import type { Region } from "@/types";
import { regionsFrance } from "./regions-france";
import { regionsItalyA } from "./regions-italy-a";
import { regionsItalyB } from "./regions-italy-b";
import { regionsSpain } from "./regions-spain";
import { regionsAustraliaA } from "./regions-australia-a";
import { regionsAustraliaB } from "./regions-australia-b";
import { regionsNZ } from "./regions-nz";
import { regionsUSA } from "./regions-usa";
import { regionsSouthAmerica } from "./regions-south-america";
import { regionsSouthAfrica } from "./regions-south-africa";
import { regionsPortugal } from "./regions-portugal";
import { regionsGermany } from "./regions-germany";

// Every region carries the full editorial guide data inline (no fabrication:
// tasting notes, rankings and prices are intentionally omitted). Related-region
// and grape links are stored as slugs so the architecture can grow arbitrarily
// without schema change.

export const regions: Region[] = [
  ...regionsFrance,
  ...regionsItalyA,
  ...regionsItalyB,
  ...regionsSpain,
  ...regionsAustraliaA,
  ...regionsAustraliaB,
  ...regionsNZ,
  ...regionsUSA,
  ...regionsSouthAmerica,
  ...regionsSouthAfrica,
  ...regionsPortugal,
  ...regionsGermany,
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getRegionsByCountry(countrySlug: string): Region[] {
  return regions.filter((r) => r.countrySlug === countrySlug);
}

export function getRegionsByIds(ids: string[]): Region[] {
  const map = new Map(regions.map((r) => [r.slug, r]));
  return ids
    .map((id) => map.get(id))
    .filter((r): r is Region => Boolean(r));
}

export function getRelatedRegions(region: Region): Region[] {
  return getRegionsByIds(region.relatedRegionSlugs);
}

export function getPopularRegions(limit = 12): Region[] {
  const priority = [
    "bordeaux",
    "burgundy",
    "champagne",
    "tuscany",
    "piedmont",
    "rioja",
    "mendoza",
    "napa-valley",
    "marlborough",
    "barossa-valley",
    "stellenbosch",
    "douro",
  ];
  const list = getRegionsByIds(priority);
  return list
    .concat(regions.filter((r) => !priority.includes(r.slug)))
    .slice(0, limit);
}
