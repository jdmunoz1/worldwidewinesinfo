import type { GlossaryTerm } from "@/types";

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Acidity",
    slug: "acidity",
    category: "wine-character",
    definition:
      "The bright, refreshing tartness that makes wine mouth-watering. Acidity balances sweetness and gives wine its crisp character.",
    seeAlso: ["Tannin", "Balance", "Body"],
  },
  {
    term: "Tannin",
    slug: "tannin",
    category: "wine-character",
    definition:
      "Natural compounds in grape skins and seeds (and oak) that give red wine its grip and drying, astringent texture. Tannins also act as a natural preservative.",
    seeAlso: ["Acidity", "Body", "Oak"],
  },
  {
    term: "Body",
    slug: "body",
    category: "wine-character",
    definition:
      "The perceived weight and richness of a wine in the mouth, often described as light, medium or full. Heavier wines are said to have more body.",
    seeAlso: ["Tannin", "Acidity"],
  },
  {
    term: "Balance",
    slug: "balance",
    category: "wine-character",
    definition:
      "A wine where fruit, acidity, tannin, alcohol and sweetness coexist harmoniously. Extremes can be compelling; balance is the benchmark of quality.",
    seeAlso: ["Finish", "Complexity"],
  },
  {
    term: "Finish",
    slug: "finish",
    category: "wine-character",
    definition:
      "How the wine tastes after you swallow — a short finish fades quickly, a long finish lingers. Length is prized in fine wine.",
    seeAlso: ["Balance", "Aroma"],
  },
  {
    term: "Aroma",
    slug: "aroma",
    category: "tasting",
    definition:
      "The scents of a wine, from young primary fruit aromas to the bottle-aged secondary and tertiary aromas of bouquet. Swirling intensifies aroma release.",
    seeAlso: ["Finish", "Tasting"],
  },
  {
    term: "AOC / AOP",
    slug: "aoc",
    category: "labels-classification",
    definition:
      "Appellation d'Origine Contrôlée (France) — a legal guarantee of origin and production rules. Superseded in EU labelling by AOP (Appellation d'Origine Protégée) but still used on labels.",
    seeAlso: ["DOC/DOCG", "Denominación de Origen", "Classification"],
  },
  {
    term: "DOC / DOCG",
    slug: "doc",
    category: "labels-classification",
    definition:
      "Denominazione di Origine Controllata (e Garantita) — Italy's appellation system, similar to France's AOC. DOCG is the top tier with stricter rules.",
    seeAlso: ["AOC / AOP", "Denominación de Origen", "Classification"],
  },
  {
    term: "Denominación de Origen",
    slug: "do",
    category: "labels-classification",
    definition:
      "Spain's controlled appellation system. DO sits above the basic Vino de la Tierra, with DOCa (Rioja, Priorat) at the top.",
    seeAlso: ["AOC / AOP", "DOC/DOCG"],
  },
  {
    term: "Terroir",
    slug: "terroir",
    category: "viticulture",
    definition:
      "The French concept that a place's soil, climate, aspect and human craft combine into a wine's unique expression of origin.",
    seeAlso: ["Wine region", "Viticulture"],
  },
  {
    term: "Viticulture",
    slug: "viticulture",
    category: "viticulture",
    definition:
      "The science and craft of growing wine grapes — from planting and pruning to harvest decisions that shape every bottle.",
    seeAlso: ["Terroir", "Winemaking"],
  },
  {
    term: "Winemaking",
    slug: "winemaking",
    category: "winemaking",
    definition:
      "The craft of turning harvested grapes into wine: crushing, fermenting, ageing, blending and bottling.",
    seeAlso: ["Viticulture", "Fermentation"],
  },
  {
    term: "Fermentation",
    slug: "fermentation",
    category: "winemaking",
    definition:
      "The process by which yeast converts grape sugar into alcohol and carbon dioxide, producing wine. Its control shapes nearly every style.",
    seeAlso: ["Winemaking", "Malolactic"],
  },
  {
    term: "Malolactic Fermentation",
    slug: "malolactic",
    category: "winemaking",
    definition:
      "Often abbreviated MLF — a secondary fermentation converting sharp malic acid into softer lactic acid. Most reds and many whites undergo it, giving roundness.",
    seeAlso: ["Acidity", "Winemaking"],
  },
  {
    term: "Oak",
    slug: "oak",
    category: "winemaking",
    definition:
      "Barrel ageing in oak imparts vanilla, toast, coconut and spice and softens mouthfeel. New barrels give more impact than old.",
    seeAlso: ["Tannin", "Toast"],
  },
  {
    term: "Decanting",
    slug: "decanting",
    category: "service",
    definition:
      "Pouring wine from bottle to decanter removes sediment from aged wines and aerates young ones. Many young wines benefit from simple aeration in glass.",
    seeAlso: ["Serving", "Sediment"],
  },
  {
    term: "Mise en Bouteille",
    slug: "estate-bottled",
    category: "labels-classification",
    definition:
      "French for 'bottled at the estate'. 'Mise en Bouteille au Château/Domaine' guarantees the producer bottled the wine at their property.",
    seeAlso: ["AOC / AOP", "Proprietor"],
  },
  {
    term: "Grand Cru",
    slug: "grand-cru",
    category: "labels-classification",
    definition:
      "'Great growth' — the highest classification in Burgundy (vineyards) and the top tier of the Bordeaux classification. A guarantee of pedigree, not quality.",
    seeAlso: ["Premier Cru", "Classification"],
  },
  {
    term: "Premier Cru",
    slug: "premier-cru",
    category: "labels-classification",
    definition:
      "'First growth' — the tier below Grand Cru in Burgundy and Bordeaux's 1855 classification. Excellent wines, often a fraction of the price of Grand Cru.",
    seeAlso: ["Grand Cru", "Classification"],
  },
  {
    term: "Vintage",
    slug: "vintage",
    category: "labels-classification",
    definition:
      "The year the grapes were harvested. Vintage conditions (weather, ripening) shape ripening and can vary dramatically in quality for fine wines.",
    seeAlso: ["Balance", "Terroir"],
  },
  {
    term: "Cuvée",
    slug: "cuvee",
    category: "winemaking",
    definition:
      "French for a blend or batch — often a producer's specific limited-release formula, as in prestige Champagne cuvées.",
    seeAlso: ["Blend", "Proprietor"],
  },
  {
    term: "Blend",
    slug: "blend",
    category: "winemaking",
    definition:
      "A wine made from multiple grape varieties or batches, blended for balance, complexity and consistency.",
    seeAlso: ["Cuvée", "Proprietor"],
  },
];
