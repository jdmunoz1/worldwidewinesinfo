export const SITE_NAME = "WorldwideWines.info";
export const SITE_TAGLINE =
  "A complete guide to the wines, grapes, regions and wine cultures of the world.";
export const SITE_URL = "https://worldwidewines.info";
export const SITE_DESCRIPTION =
  "Explore the world of wine — countries, regions, grape varieties, styles, food pairings, wine school and travel guides.";

// Amazon Associates disclosure is required wherever affiliate links may appear.
export const AFFILIATE_DISCLOSURE =
  "As an Amazon Associate I earn from qualifying purchases.";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

// Primary navigation (matches the brief's section 3).
export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Wine Regions",
    href: "/wine-regions/",
    children: [
      { label: "France", href: "/france/" },
      { label: "Italy", href: "/italy/" },
      { label: "Spain", href: "/spain/" },
      { label: "Portugal", href: "/portugal/" },
      { label: "Germany", href: "/germany/" },
      { label: "Australia", href: "/australia/" },
      { label: "New Zealand", href: "/new-zealand/" },
      { label: "United States", href: "/united-states/" },
      { label: "Argentina", href: "/argentina/" },
      { label: "Chile", href: "/chile/" },
      { label: "South Africa", href: "/south-africa/" },
      { label: "Other Wine Regions", href: "/wine-regions/" },
    ],
  },
  {
    label: "Grapes",
    href: "/grapes/",
    children: [
      { label: "All Grapes", href: "/grapes/" },
      { label: "Red Grapes", href: "/grapes/red/" },
      { label: "White Grapes", href: "/grapes/white/" },
      { label: "International Varieties", href: "/grapes/" },
      { label: "Regional Varieties", href: "/grapes/" },
    ],
  },
  {
    label: "Wine Styles",
    href: "/wine-styles/",
    children: [
      { label: "Red Wine", href: "/wine-styles/red-wine/" },
      { label: "White Wine", href: "/wine-styles/white-wine/" },
      { label: "Rosé", href: "/wine-styles/rose/" },
      { label: "Sparkling Wine", href: "/wine-styles/sparkling-wine/" },
      { label: "Dessert Wine", href: "/wine-styles/dessert-wine/" },
      { label: "Fortified Wine", href: "/wine-styles/fortified-wine/" },
      { label: "Natural Wine", href: "/wine-styles/natural-wine/" },
    ],
  },
  {
    label: "Wine School",
    href: "/wine-school/",
    children: [
      { label: "Wine Basics", href: "/wine-school/wine-basics/" },
      { label: "How Wine Is Made", href: "/wine-school/how-wine-is-made/" },
      { label: "How to Taste", href: "/wine-school/how-to-taste/" },
      { label: "Serving Wine", href: "/wine-school/serving-wine/" },
      { label: "Wine Storage", href: "/wine-school/storage/" },
      { label: "Wine Terminology", href: "/wine-school/tasting-terms/" },
    ],
  },
  {
    label: "Food Pairing",
    href: "/food-pairing/",
    children: [
      { label: "Meat", href: "/food-pairing/" },
      { label: "Seafood", href: "/food-pairing/" },
      { label: "Cheese", href: "/food-pairing/" },
      { label: "Pasta", href: "/food-pairing/" },
      { label: "Asian Food", href: "/food-pairing/" },
      { label: "Vegetarian", href: "/food-pairing/" },
      { label: "Desserts", href: "/food-pairing/" },
    ],
  },
  {
    label: "Wine Travel",
    href: "/wine-travel/",
    children: [
      { label: "Wine Regions", href: "/wine-travel/" },
      { label: "Wine Routes", href: "/wine-travel/" },
      { label: "Travel Guides", href: "/wine-travel/" },
    ],
  },
  {
    label: "Learn",
    href: "/learn/",
    children: [
      { label: "Wine History", href: "/learn/history-of-wine/" },
      { label: "Viticulture", href: "/learn/viticulture/" },
      { label: "Winemaking", href: "/learn/winemaking/" },
      { label: "Glossary", href: "/glossary/" },
    ],
  },
];
