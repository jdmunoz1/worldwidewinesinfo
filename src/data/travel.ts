import type { TravelGuide } from "@/types";

export const travelGuides: TravelGuide[] = [
  {
    id: "bordeaux",
    region: "Bordeaux",
    slug: "bordeaux",
    country: "France",
    countrySlug: "france",
    intro:
      "A city of grand châteaux and gravel banks, Bordeaux blends historic architecture with the world's most famous wine region on its doorstep.",
    whenToGo: "Aim for May–October; June is prime for the châteaux and the start of the summer market.",
    howLong: "3–5 days for the city and the major appellations; a week to explore slowly.",
    baseTown: "Bordeaux city — walkable, with superb dining and easy access to the Médoc and Saint-Émilion.",
    highlights: [
      "The Cité du Vin wine museum",
      "Saint-Émilion's UNESCO-listed medieval town",
      "Médoc châteaux along the D2 route des châteaux",
      "The Garonne riverfront and Place de la Bourse",
    ],
    gettingAround:
      "The city is walkable and tram-linking. Beyond it, a car or a guided tour is best for the châteaux, which can be spread far apart.",
    practicalNotes:
      "Book château visits ahead; many grand estates require appointments. Saint-Émilion is 40 minutes by train. Tasting fees have become common.",
    relatedSlugs: ["burgundy", "napa-valley"],
  },
  {
    id: "burgundy",
    region: "Burgundy",
    slug: "burgundy",
    country: "France",
    countrySlug: "france",
    intro:
      "Burgundy's narrow ribbon of Grand Cru slopes is a pilgrimage for Pinot Noir and Chardonnay lovers, set among rolling vineyards and stone villages.",
    whenToGo: "April–October. The June wine market and harvest-season colour are particularly special.",
    howLong: "3–4 days to cover the Côte de Nuits and Côte de Beaune.",
    baseTown: "Beaune — the historic wine capital with the magnificent Hôtel-Dieu.",
    highlights: [
      "The Hôtel-Dieu in Beaune",
      "Walking the Côte de Nuits' Grands Crus (Vosne-Romanée, Gevrey)",
      "Burgundy's 'Route des Grands Crus' through the vineyards",
      "A tasting at a négociant or small village cellar",
    ],
    gettingAround:
      "A car is strongly recommended to explore the scattered vineyards and villages. Beaune's wine school and tourist office organise tasting walks.",
    practicalNotes:
      "Many tiny domaines don't open to the public; plan around négociant cellars and booked appointments. Prices and crowds peak in late summer.",
    relatedSlugs: ["bordeaux", "champagne"],
  },
  {
    id: "napa-valley",
    region: "Napa Valley",
    slug: "napa-valley",
    country: "United States",
    countrySlug: "united-states",
    intro:
      "America's most polished wine destination: iconic wineries, Michelin-level dining and the towering valley views between Calistoga and Napa.",
    whenToGo: "April–October for blue skies; harvest (Aug–Oct) offers the most energy.",
    howLong: "2–4 days; a long weekend covers Highway 29 and the Silverado Trail.",
    baseTown: "Yountville for dining, or Napa city for most hotels and the riverfront.",
    highlights: [
      "Highway 29 and the Silverado Trail wineries",
      "The historic town of St. Helena and Beringer's mansion",
      "The spectacular Thomas Keller restaurant strip in Yountville",
      "The Napa Valley Wine Train",
    ],
    gettingAround:
      "A car (appointed drivers recommended for tasting) or a guided tour bus. Downtown Napa's trams and shuttles ease the way.",
    practicalNotes:
      "Tastings now charge and often require reservations. Plan your route by appointment and drink responsibly — consider a designated driver or organised tour.",
    relatedSlugs: ["willamette-valley", "sonoma"],
  },
  {
    id: "mendoza",
    region: "Mendoza",
    slug: "mendoza",
    country: "Argentina",
    countrySlug: "argentina",
    intro:
      "At the foot of the Andes, Mendoza is South America's wine capital — high-altitude Malbec, empanadas, asado and unforgettable mountain views.",
    whenToGo: "March–May (harvest/autumn) are ideal; the fall colours are stunning.",
    howLong: "3–4 days across the city, Maipú and the Uco Valley.",
    baseTown: "Mendoza city — walkable, tree-shaded and full of bars and excellent restaurants.",
    highlights: [
      "Bicycle wine tour of Maipú's bodegas",
      "A day trip to the dramatic Uco Valley's high-altitude wineries",
      "Andean sunsets from the wine-country belvederes",
      "World-class asado and Argentine Malbec",
    ],
    gettingAround:
      "The city is flat and safe on two wheels or on foot; guided tours or a rental car reach Maipú and the Uco Valley.",
    practicalNotes:
      "Altitude brings intense sun — bring sunscreen and water. Many bodegas open for tastings year-round; book the top-estate visits ahead.",
    relatedSlugs: ["salta", "maipo-valley"],
  },
];
