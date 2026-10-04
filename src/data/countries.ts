import type { Country } from "@/types";
import { countriesPart1 } from "./countries-a";
import { countriesPart2 } from "./countries-b";
import { countriesPart3 } from "./countries-c";
import { countriesPart4 } from "./countries-d";
import { countriesPart5 } from "./countries-e";

export const countries: Country[] = [
  ...countriesPart1,
  ...countriesPart2,
  ...countriesPart3,
  ...countriesPart4,
  ...countriesPart5,
];

export function getCountry(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getCountryBySlug(slug: string): Country | undefined {
  return getCountry(slug);
}

export const continents = [
  "Europe",
  "North America",
  "South America",
  "Oceania",
  "Africa",
  "Asia",
] as const;
