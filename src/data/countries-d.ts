import type { Country } from "@/types";

// countries-d: Chile, South Africa, Portugal, Germany
export const countriesPart4: Country[] = [
  {
    id: "chile",
    name: "Chile",
    slug: "chile",
    continent: "South America",
    flagEmoji: "CL",
    overview:
      "Chile is one of the world's geologically newest wine frontiers, with a long, narrow band of vineyards between the Pacific and the Andes. It is the ancestral home of Carmenère and produces superb Cabernet Sauvignon plus fresh, vibrant whites. Natural barriers — desert, mountains, ocean — keep its vineyards remarkably phylloxera-free.",
    wineHistory:
      "Viticulture began with 16th-century Spanish missionaries. French varieties arrived in the 19th century, founding the modern industry. A quality revolution in the 1980s–90s transformed Chile into a major exporter and pioneered the revival of the lost Bordeaux grape Carmenère.",
    climate:
      "Chile's climate is Mediterranean, moderated by the cold Humboldt Current and coastal fog. Cool valleys like Casablanca produce crisp whites, while warmer inland valleys (Maipo, Colchagua) ripen bold reds. Altitude and diurnal swings enhance acidity.",
    geography:
      "Vineyards occupy valleys running east-west between the Pacific and Andes. Soils include alluvial gravel and clay in Maipo, granite in coastal areas, limestone in emerging zones. Chile's isolation has kept vineyards free of phylloxera.",
    majorRegions: ["Maipo Valley", "Colchagua Valley", "Casablanca Valley", "Aconcagua", "Maule", "Curicó", "Rapel", "Limari"],
    majorRegionsSlugs: ["maipo-valley", "colchagua-valley", "casablanca-valley", "aconcagua", "maule", "curico", "rapel", "limari"],
    majorGrapes: ["Carmenère", "Cabernet Sauvignon", "Sauvignon Blanc", "Chardonnay", "Syrah", "Merlot", "Pinot Noir"],
    majorGrapeSlugs: ["carmenere", "cabernet-sauvignon", "sauvignon-blanc", "chardonnay", "syrah", "merlot", "pinot-noir"],
    classifications:
      "Chile uses Denominación de Origen (DO) regions. There is no mandatory ageing classification; 'Reserva' and 'Gran Reserva' are used loosely, though regulations have tightened.",
    typicalStyles:
      "Structured, peppery Carmenère; bold, age-worthy Cabernet from Maipo and Colchagua; fresh, mineral coastal Sauvignon Blanc; premium cool-climate Chardonnay; elegant Syrah and Pinot Noir from cooler sites.",
    labelTerms:
      "DO region names show origin. 'Reserva' and 'Gran Reserva' signal quality tiers. Single-vineyard and estate bottlings denote provenance.",
    famousWines:
      "Almaviva, Concha y Toro Don Melchor (Maipo); Viña Seña (Aconcagua); Clos Apalta (Colchagua); Montes Purple Angel; De Martino Single Vineyard Carmenère.",
    foodCulture:
      "Chilean wine pairs with empanadas, grilled meats, ceviche, and seafood. Carmenère suits roasted vegetables, pork, and herbs. Sauvignon Blanc matches shellfish.",
    wineProductionRank: 7,
    annualProduction: "~11 million hectolitres",
    relatedCountries: ["argentina", "united-states", "uruguay"],
  },
  {
    id: "south-africa",
    name: "South Africa",
    slug: "south-africa",
    continent: "Africa",
    flagEmoji: "ZA",
    overview:
      "South Africa is Africa's leading wine producer, centred on the Cape first planted by Dutch settlers in the 17th century. Its signature grapes include Chenin Blanc — the most planted variety — and the legendary Pinotage. Stellenbosch, Franschhoek, and Swartland produce wines of growing acclaim.",
    wineHistory:
      "The first vines were planted in 1655 by Jan van Riebeeck, with the first wine in 1659. The industry grew under French Huguenot influence. After late-20th-century political isolation, the post-1994 era saw a quality renaissance and global export growth.",
    climate:
      "The Cape has a Mediterranean climate, cooled by the Atlantic Benguela Current and the Cape Doctor wind. Warm, sunny conditions suit Chenin Blanc and reds, while cooler sub-regions (Walker Bay, Elgin) excel with Pinot Noir and Chardonnay.",
    geography:
      "Cape wine regions cluster around Cape Town, framed by mountains. Soils include the weathered granite of Paarl, the sandstone and shale of Stellenbosch, and the iron-rich ancient soils of Swartland.",
    majorRegions: ["Stellenbosch", "Paarl", "Franschhoek", "Constantia", "Swartland", "Walker Bay", "Elgin"],
    majorRegionsSlugs: ["stellenbosch", "paarl", "franschhoek", "constantia", "swartland", "walker-bay", "elgin"],
    majorGrapes: ["Chenin Blanc", "Pinotage", "Cabernet Sauvignon", "Syrah", "Chardonnay", "Sauvignon Blanc", "Pinot Noir"],
    majorGrapeSlugs: ["chenin-blanc", "pinotage", "cabernet-sauvignon", "syrah", "chardonnay", "sauvignon-blanc", "pinot-noir"],
    classifications:
      "South Africa uses a Wine of Origin (WO) system that certifies geographical origin, grape variety, and vintage. Wards, districts, and regions are defined geographically, with estate wines cleared by the Wine and Spirit Board.",
    typicalStyles:
      "Versatile Chenin Blanc from mineral to rich and oaked; bold, smoky Pinotage; structured Stellenbosch Cabernet and Bordeaux blends; full-bodied Syrah; elegant Walker Bay Pinot Noir and Chardonnay; celebrated sweet Constantia.",
    labelTerms:
      "'WO' certifies origin, variety, and vintage. 'Estate' denotes a single registered estate. 'MCC' refers to Méthode Cap Classique, South African traditional-method sparkling wine.",
    famousWines:
      "Klein Constantia Vin de Constance; Meerlust Rubicon; Kanonkop Estate Pinotage; Sadie Family Columella and Palladius (Swartland); Mullineux (Swartland); Hamilton Russell (Walker Bay).",
    foodCulture:
      "South African wine pairs with braai (barbecue), bobotie, and Cape Malay cuisine. Chenin Blanc suits seafood and spices, Pinotage matches smoky braaied meats, Cabernet blends accompany roast lamb.",
    wineProductionRank: 8,
    annualProduction: "~10 million hectolitres",
    relatedCountries: ["australia", "united-states", "france"],
  },
];
