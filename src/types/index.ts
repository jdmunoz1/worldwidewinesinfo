// Core content types for WorldwideWines.info

export type GrapeColor = "red" | "white";
export type Level = "low" | "medium" | "high";
export type BodyLevel = "light" | "medium" | "full";
export type Sweetness = "dry" | "off-dry" | "sweet";
export type NoneableLevel = "low" | "medium" | "high" | "none";

export interface Country {
  id: string;
  name: string;
  slug: string;
  continent: string;
  flagEmoji: string;
  overview: string;
  wineHistory: string;
  climate: string;
  geography: string;
  majorRegions: string[];
  majorRegionsSlugs: string[];
  majorGrapes: string[];
  majorGrapeSlugs: string[];
  classifications: string;
  typicalStyles: string;
  labelTerms: string;
  famousWines: string;
  foodCulture: string;
  wineProductionRank: number;
  annualProduction: string;
  relatedCountries: string[];
}

export interface Region {
  id: string;
  name: string;
  slug: string;
  country: string;
  countrySlug: string;
  parentRegion?: string;
  climate: string;
  geography: string;
  majorGrapes: string[];
  majorGrapeSlugs: string[];
  mainWineStyles: string[];
  keyAppellations: string[];
  description: string;
  famousFor: string[];
  visitingInfo: string;
  relatedRegionSlugs: string[];
  mapCode?: string; // code on the SVG world map
}

export interface Grape {
  id?: string; // reserved; slug is the unique identifier used across links
  name: string;
  slug: string;
  alsoKnownAs?: string;
  color: GrapeColor;
  origin: string;
  body: BodyLevel;
  acidity: Level;
  tannin: NoneableLevel;
  sweetness: Sweetness;
  alcoholTendency: Level;
  typicalAromas: string[];
  typicalFlavors: string[];
  majorCountries: string[];
  majorRegionSlugs: string[];
  foodPairings: string[];
  similarGrapes: string[];
  description: string;
  pronunciation?: string;
}

export interface WineStyle {
  id: string;
  name: string;
  slug: string;
  family: "red" | "white" | "rosé" | "sparkling" | "dessert" | "fortified" | "specialty";
  hero?: string;
  description: string;
  productionMethod: string;
  keyGrapes: string[];
  keyGrapeSlugs: string[];
  keyRegions: string[];
  foodPairings: string[];
  servingTemperature: string;
  characteristics: string[];
  relatedStyleSlugs: string[];
}

export interface WineSchoolTopic {
  id: string;
  title: string;
  slug: string;
  category:
    | "basics"
    | "tasting"
    | "winemaking"
    | "storage"
    | "serving"
    | "terminology"
    | "wine-chemistry";
  excerpt: string;
  body: string[]; // paragraphs
  bullets?: { heading: string; text: string }[];
  relatedTopics: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
}

export interface FoodPairing {
  id: string;
  food: string;
  slug: string;
  description: string;
  pairingPrinciples: string;
  recommendedWineStyles: string[];
  recommendedGrapes: string[];
  whyItWorks: string[];
  avoid: string;
  relatedPairingSlugs: string[];
}

export interface TravelGuide {
  id: string;
  region: string;
  slug: string;
  country: string;
  countrySlug: string;
  intro: string;
  whenToGo: string;
  howLong: string;
  baseTown: string;
  highlights: string[];
  gettingAround: string;
  practicalNotes: string;
  relatedSlugs: string[];
}

export interface GlossaryTerm {
  term: string;
  slug: string;
  category:
    | "wine-character"
    | "winemaking"
    | "labels-classification"
    | "service"
    | "tasting"
    | "viticulture";
  definition: string;
  seeAlso?: string[];
}

export interface LearnSection {
  id: string;
  title: string;
  slug: string;
  category: "history" | "viticulture" | "winemaking" | "glossary";
  intro: string;
  sections: { heading: string; body: string[] }[];
  keyPoints: string[];
  factNote?: string;
  relatedSlugs: string[];
}

export interface ToolDef {
  id: string;
  name: string;
  slug: string;
  description: string;
}
