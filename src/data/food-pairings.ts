import type { FoodPairing } from "@/types";

export const foodPairings: FoodPairing[] = [
  {
    id: "grilled-steak",
    food: "Grilled Steak",
    slug: "grilled-steak",
    description:
      "Charred, juicy steak demands a red with enough structure and dark fruit to match its richness.",
    pairingPrinciples: "Match intensity and protein with tannin, which cleanses the palate between bites.",
    recommendedWineStyles: ["Full-bodied red", "Bold Cabernet", "Malbec"],
    recommendedGrapes: ["Cabernet Sauvignon", "Malbec", "Syrah", "Tempranillo"],
    whyItWorks: [
      "Tannin binds with protein, refreshing your palate for the next bite.",
      "Dark, brooding fruit echoes the steak's char and savour.",
    ],
    avoid: "Light, low-tannin reds that will be overwhelmed by the meat.",
    relatedPairingSlugs: ["lamb", "barbecue"],
  },
  {
    id: "seared-salmon",
    food: "Seared Salmon",
    slug: "seared-salmon",
    description:
      "Rich, oily salmon suits wines with bright acidity to cut through the fat and enough body to hold its own.",
    pairingPrinciples: "Balance richness with acidity; match the wine's weight to the dish's.",
    recommendedWineStyles: ["Elegant white", "Rosé", "Light Pinot Noir"],
    recommendedGrapes: ["Pinot Noir", "Chardonnay", "Grenache Blanc"],
    whyItWorks: [
      "Acidity cuts the salmon's natural oils.",
      "A light red can echo salmon's savoury side without dominating.",
    ],
    avoid: "Heavy oak that fights the delicate fish.",
    relatedPairingSlugs: ["grilled-fish", "grilled-steak"],
  },
  {
    id: "spicy-curry",
    food: "Spicy Curry",
    slug: "spicy-curry",
    description:
      "Heat and spice call for off-dry, aromatic wines that cool the palate and match the exotic aromas.",
    pairingPrinciples: "A touch of sweetness tames chilli heat; aromatic intensity meets spice.",
    recommendedWineStyles: ["Off-dry Riesling", "Gewürztraminer", "Aromatic white"],
    recommendedGrapes: ["Riesling", "Gewürztraminer", "Dry Muscat"],
    whyItWorks: [
      "Residual sugar cools chilli heat.",
      "Lush aromatics hold their own against complex spice.",
    ],
    avoid: "High-alcohol, heavily tannic reds that can amplify heat.",
    relatedPairingSlugs: ["chinese-food", "mexican"],
  },
  {
    id: "oysters",
    food: "Oysters",
    slug: "oysters",
    description:
      "Briny, cold oysters want a crisp, mineral, very chilled white with racy acidity.",
    pairingPrinciples: "Match salinity with minerality; high acidity refreshes between shells.",
    recommendedWineStyles: ["Muscadet", "Chablis", "Albariño", "Brut sparkling"],
    recommendedGrapes: ["Melon de Bourgogne", "Chardonnay", "Albariño"],
    whyItWorks: [
      "Mineral, salty notes mirror the oyster's brine.",
      "Lemon-fresh acidity cleanses the rich, saline flesh.",
    ],
    avoid: "Oaked, full-bodied whites that overwhelm delicate oysters.",
    relatedPairingSlugs: ["seared-salmon", "grilled-fish"],
  },
  {
    id: "hard-cheese",
    food: "Hard Cheese & Charcuterie",
    slug: "hard-cheese",
    description:
      "Aged cheese and cured meat are the wine lover's classic board, pairing best with medium-bodied, savoury wines.",
    pairingPrinciples: "Let tannin and sweetness stand up to salt and fat; match savoury depth.",
    recommendedWineStyles: ["Medium red", "Off-dry Riesling", "Sparkling"],
    recommendedGrapes: ["Tempranillo", "Syrah", "Riesling"],
    whyItWorks: [
      "Savoury, salty cheese rounds out fruity reds.",
      "Sparkling and off-dry whites cut through rich, fatty board items.",
    ],
    avoid: "Thin, acidic wines that seem sharp against heavy cheese.",
    relatedPairingSlugs: ["drunken-cheese", "grilled-steak"],
  },
  {
    id: "pasta-marinara",
    food: "Pasta with Tomato Sauce",
    slug: "pasta-marinara",
    description:
      "Bright, acidic tomato sauce pairs with medium-bodied Italian reds whose natural acidity and savour echo the dish.",
    pairingPrinciples: "Match acidity to acidity; Italian food loves Italian wine.",
    recommendedWineStyles: ["Medium red", "Chianti", "Sangiovese blend"],
    recommendedGrapes: ["Sangiovese", "Barbera", "Nero d'Avola"],
    whyItWorks: [
      "The red's acidity harmonises with tomato's tang.",
      "Savoury, peppery notes complement oregano and garlic.",
    ],
    avoid: "Oaky, high-tannin wines that clash with the bright sauce.",
    relatedPairingSlugs: ["pizza", "bolognese"],
  },
  {
    id: "chocolate-dessert",
    food: "Chocolate Dessert",
    slug: "chocolate-dessert",
    description:
      "Dark chocolate calls for nothing sweeter or richer — from Ruby Port to sweet fortified and rich reds.",
    pairingPrinciples: "The wine must be at least as sweet as the dessert; richness should match richness.",
    recommendedWineStyles: ["Ruby Port", "Fortified", "Rich sweet red"],
    recommendedGrapes: ["Tinta Roriz", "Touriga Nacional", "Malbec"],
    whyItWorks: [
      "Sweeter-than-desert rule prevents bitter clashes.",
      "Dark fruit and cocoa echo one another beautifully.",
    ],
    avoid: "Dry, light wines that taste thin and bitter against chocolate.",
    relatedPairingSlugs: ["dessert-creme-brulee", "hard-cheese"],
  },
  {
    id: "roast-chicken",
    food: "Roast Chicken",
    slug: "roast-chicken",
    description:
      "A golden roast chicken is the ultimate food-friendly canvas, pairing with a remarkable range of both white and red wines.",
    pairingPrinciples: "Match the preparation and herbs; medium body suits all.",
    recommendedWineStyles: ["Light Chardonnay", "Pinot Noir", "Sauvignon Blanc"],
    recommendedGrapes: ["Chardonnay", "Pinot Noir", "Sauvignon Blanc"],
    whyItWorks: [
      "Crisp skin and herbs meet aromatic whites or gentle reds.",
      "Versatile enough to follow either a white or red theme.",
    ],
    avoid: "Overly oaked, heavy wines that smother the delicate bird.",
    relatedPairingSlugs: ["seared-salmon", "pasta-marinara"],
  },
];
