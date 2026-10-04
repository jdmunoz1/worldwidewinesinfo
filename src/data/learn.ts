import type { LearnSection } from "@/types";

export const learnSections: LearnSection[] = [
  {
    id: "history-of-wine",
    title: "The History of Wine",
    slug: "history-of-wine",
    category: "history",
    intro:
      "Wine is one of humanity's oldest beverages, inseparable from our agriculture, religion and culture for eight millennia.",
    sections: [
      {
        heading: "From the Caucasus to the table",
        body: [
          "The earliest evidence of grape wine-making dates to around 6000 BCE in the Caucasus, where cultivated grapes were first processed with man's first wine presses. From there the craft travelled through Mesopotamia, Egypt, Greece and Rome, which planted vineyards across its empire — from Gaul to Iberia.",
          "Monasteries preserved and advanced the craft through the Middle Ages, mapping the best vineyard sites. The wine world we know took shape through trade, empire, the 1855 Bordeaux classification and, in the 20th century, an explosion of New World quality and the modern era of terroir-driven winemaking.",
        ],
      },
    ],
    keyPoints: [
      "Wine-making began around 6000 BCE in the Caucasus.",
      "Rome spread viticulture across Europe.",
      "Monasteries mapped Europe's finest vineyard sites.",
      "Modern wine is defined by terroir, technology and global trade.",
    ],
    factNote:
      "This overview reflects the broad current consensus of archaeological and historical scholarship.",
    relatedSlugs: ["viticulture", "how-wine-is-made"],
  },
  {
    id: "viticulture",
    title: "Viticulture — Growing Wine Grapes",
    slug: "viticulture",
    category: "viticulture",
    intro:
      "Great wine begins in the vineyard. Viticulture is the craft of coaxing the best fruit from a place across an entire year.",
    sections: [
      {
        heading: "A year in the vineyard",
        body: [
          "The annual cycle starts with winter pruning, which balances crop load against vigour. Spring brings budbreak and flowering; summer's shoot growth and berry set follow, with canopy management and water decisions shaping quality. At veraison, berries turn colour and begin to ripen, accumulating sugar and flavour into autumn.",
          "Harvest, the season's culmination, is timed to balance sugar, acidity and phenolic ripeness. Because climate, soil and site — collectively terroir — differ so much, no single recipe fits; great growers read their vines and their place.",
        ],
      },
    ],
    keyPoints: [
      "Pruning balances crop and concentration.",
      "Canopy, water and canopy management shape quality.",
      "Harvest timing balances sugar, acid and ripe flavour.",
      "Terroir — soil, climate, site — defines a wine's character.",
    ],
    relatedSlugs: ["history-of-wine", "how-wine-is-made"],
  },
  {
    id: "winemaking",
    title: "Winemaking",
    slug: "winemaking",
    category: "winemaking",
    intro:
      "The craft of turning grapes into wine: crushing, fermenting, ageing and bottling — with endless stylistic choices along the way.",
    sections: [
      {
        heading: "Making the choices that matter",
        body: [
          "Winemaking is a long string of decisions. When to pick, whether to crush or press, how to ferment (temperature, vessel, yeast), how long to macerate, whether to use oak, and when to bottle each shape the final wine.",
          "Red wines ferment on their skins to extract colour and tannin; whites are pressed from the juice; sparkling wines gain bubbles from a second fermentation; fortified wines are strengthened with neutral spirit.",
        ],
      },
    ],
    keyPoints: [
      "Skin contact separates red from white winemaking.",
      "Fermentation temperature and vessel shape aromatics.",
      "Oak ageing adds complexity and structure.",
      "Every step is a stylistic choice.",
    ],
    relatedSlugs: ["viticulture", "how-wine-is-made"],
  },
];
