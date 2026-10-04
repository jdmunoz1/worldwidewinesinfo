import type { Country } from "@/types";

// countries-c: United States, Argentina
export const countriesPart3: Country[] = [
  {
    id: "united-states",
    name: "United States",
    slug: "united-states",
    continent: "North America",
    flagEmoji: "US",
    overview:
      "The United States is one of the world's most important and innovative wine producers, home to the Napa Valley phenomenon. California dominates production, but Oregon, Washington, and the East Coast contribute distinctive wines, from world-class Pinot Noir to Bordeaux-style blends.",
    wineHistory:
      "Wine has been made in California since the 18th-century Spanish missions. The industry survived Prohibition (1920–1933). The 1976 'Judgment of Paris' — where California wines beat French counterparts in blind tasting — transformed global perceptions. Oregon and Washington emerged as major forces in the late 20th century.",
    climate:
      "California's Mediterranean climate suits bold reds and ripe whites, moderated by coastal fog and altitude (Russian River Valley). Oregon's Willamette Valley is cool, ideal for Pinot Noir. Washington's Columbia Valley is hot and sunny with irrigated, semi-arid production.",
    geography:
      "Napa Valley sits on the Pacific coast with its famous alluvial valley floor and hillsides. Oregon's Willamette Valley is a cool, volcanic-soil region. Washington lies east of the Cascades with a semi-arid climate. The Finger Lakes and Virginia add cooler diversity.",
    majorRegions: ["Napa Valley", "Sonoma", "Paso Robles", "Santa Barbara", "Willamette Valley", "Washington State", "Finger Lakes", "Virginia"],
    majorRegionsSlugs: ["napa-valley", "sonoma", "paso-robles", "santa-barbara", "willamette-valley", "washington-state", "finger-lakes", "virginia"],
    majorGrapes: ["Cabernet Sauvignon", "Chardonnay", "Pinot Noir", "Zinfandel", "Merlot", "Sauvignon Blanc", "Syrah", "Riesling"],
    majorGrapeSlugs: ["cabernet-sauvignon", "chardonnay", "pinot-noir", "zinfandel", "merlot", "sauvignon-blanc", "syrah", "riesling"],
    classifications:
      "The US uses American Viticultural Areas (AVAs) to protect geographic names. Unlike most Old World designations, AVAs do not mandate grape varieties or methods, giving winemakers freedom.",
    typicalStyles:
      "Ripe, concentrated Napa Cabernet; elegant, cool-climate Chardonnay and Pinot Noir from Sonoma and Santa Barbara; bold Zinfandel; aromatic Finger Lakes Riesling; diverse Washington wines.",
    labelTerms:
      "US labels commonly show grape and AVA. 'Estate Grown' denotes provenance; 'Reserve' is unregulated. AVAs like Napa Valley and Willamette Valley signal origins.",
    famousWines:
      "Screaming Eagle, Opus One, Harlan Estate (Napa); Ridge Monte Bello; Caymus; Duckhorn; Domaine Serene, Cristom (Oregon); Quilceda Creek (Washington).",
    foodCulture:
      "American wine pairs with steaks, barbecue, burgers, and international fare. Napa Cabs match grilled meats, while Oregon Pinot Noir suits salmon, duck, and mushrooms.",
    wineProductionRank: 4,
    annualProduction: "~23 million hectolitres",
    relatedCountries: ["chile", "argentina", "australia", "new-zealand"],
  },
  {
    id: "argentina",
    name: "Argentina",
    slug: "argentina",
    continent: "South America",
    flagEmoji: "AR",
    overview:
      "Argentina is South America's largest wine producer and the world's leading source of Malbec. High-altitude vineyards in the Andes foothills produce deeply coloured, concentrated reds with remarkable freshness, while Torrontés delivers fragrant, aromatic whites. Argentine wine surged in global popularity from the 1990s, led by Mendoza.",
    wineHistory:
      "Winemaking arrived with Spanish missionaries in the 16th century. Immigrants brought Malbec in the 19th century, which thrived at Mendoza's altitude. Foreign investment and modern winemaking in the 1980s–90s propelled Argentine Malbec to international fame.",
    climate:
      "High-altitude Andean vineyards enjoy intense sunlight, warm days, cool nights, and low humidity. This dramatic diurnal swing preserves acidity and aroma. The Uco Valley sits at some of the world's highest vineyards.",
    geography:
      "In the Andes' rain shadow, much of Argentina's wine country is semi-arid, requiring irrigation from Andean snowmelt. Soils vary from alluvial clay and gravel to sandy, calcium-rich terraces, spanning hot Salta to cooler Patagonia.",
    majorRegions: ["Mendoza", "Uco Valley", "Salta", "Patagonia"],
    majorRegionsSlugs: ["mendoza", "uco-valley", "salta", "patagonia"],
    majorGrapes: ["Malbec", "Torrontés", "Cabernet Sauvignon", "Chardonnay", "Bonarda", "Syrah", "Tempranillo"],
    majorGrapeSlugs: ["malbec", "torrontes", "cabernet-sauvignon", "chardonnay", "bonarda", "syrah", "tempranillo"],
    classifications:
      "Argentina uses independent DOCs (Denominación de Origen Controlada), though far fewer regions are designated than in France or Italy. Regions like Luján de Cuyo and Mendoza are protected GIs.",
    typicalStyles:
      "Ripe, plush, high-altitude Malbec with soft tannins; floral, aromatic Torrontés; powerful Cabernet blends; cool-climate Chardonnay; refined Uco Valley reds.",
    labelTerms:
      "Labels show grape and region. 'Reserva' and 'Gran Reserva' are lightly regulated. Terms like 'Vino de Altura' highlight high-elevation vineyards.",
    famousWines:
      "Catena Zapata Adrianna Vineyard, Nicolás Catena Zapata; Gran Enemigo; Zuccardi Aluvional (Uco Valley); Susana Balbo; Achaval-Ferrer.",
    foodCulture:
      "Argentine wine pairs with the nation's asado (barbecued beef). Malbec is the natural partner for grilled steak; Torrontés suits empanadas and lighter fare.",
    wineProductionRank: 6,
    annualProduction: "~12 million hectolitres",
    relatedCountries: ["chile", "united-states", "uruguay"],
  },
];
