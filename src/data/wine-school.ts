import type { WineSchoolTopic } from "@/types";

export const wineSchoolTopics: WineSchoolTopic[] = [
  {
    id: "wine-basics",
    title: "Wine Basics",
    slug: "wine-basics",
    category: "basics",
    excerpt:
      "The essential starting point — what wine is, the main styles, and how to read a label with confidence.",
    body: [
      "Wine begins as grapes. Fermentation transforms their natural sugar into alcohol, yielding the wine we drink. Everything else — colour, aroma, structure, taste — is shaped by grape variety, climate, soil, and winemaking choices.",
      "There are just a handful of fundamental styles: still red, still white, rosé, sparkling and dessert. Understanding this spectrum is the foundation of all wine literacy.",
      "On a label, the information that matters most is the producer, the region (or grape variety, depending on the style of labelling), the vintage, and the alcohol level. In the Old World, wine is usually named by place (Bordeaux, Chablis); in the New World, often by grape (Cabernet, Pinot Noir).",
    ],
    bullets: [
      {
        heading: "Know the core styles",
        text: "Red, white, rosé and sparkling each have distinct flavour profiles and food affinities. Start by taste-testing one of each.",
      },
      {
        heading: "Home your senses",
        text: "Tasting is 90% smell. Swirl your glass, sniff deeply, then sip — you'll pick up vastly more aromas.",
      },
    ],
    relatedTopics: ["how-wine-is-made", "how-to-taste", "serving-wine"],
    difficulty: "beginner",
  },
  {
    id: "how-wine-is-made",
    title: "How Wine Is Made",
    slug: "how-wine-is-made",
    category: "winemaking",
    excerpt:
      "From vine to bottle — the journey of the grape through harvest, crushing, fermentation and ageing.",
    body: [
      "The vintage begins at harvest, when grapes are picked at the peak of ripeness. White grapes are usually crushed and pressed quickly, while red grapes ferment with their skins, which give colour and tannin.",
      "Fermentation is driven by yeast converting sugar into alcohol. The length and temperature of fermentation dramatically shape the final wine: cooler fermentations preserve aromatics, while warmer ones draw out richness and body.",
      "After fermentation, most wines are aged — in stainless steel to keep them fresh and fruity, in oak barrels to add spice, toast, and texture. The wine is then clarified, blended if needed, and bottled.",
    ],
    bullets: [
      {
        heading: "Red vs white",
        text: "The key difference is skin contact. Red wine ferments on the skins; most whites are pressed off them almost immediately.",
      },
      {
        heading: "Ageing matters",
        text: "Oak can add complexity but shouldn't dominate. Fine wine is about balance between fruit, acidity, tannin and oak.",
      },
    ],
    relatedTopics: ["wine-basics", "viticulture", "serving-wine"],
    difficulty: "beginner",
  },
  {
    id: "how-to-taste",
    title: "How to Taste Wine",
    slug: "how-to-taste",
    category: "tasting",
    excerpt:
      "A step-by-step method for tasting wine like a professional — look, smell, taste, and assess.",
    body: [
      "Professional tasting follows a simple, repeatable method: Look, Smell, Taste, and then reflect. Each step gathers information.",
      "Look at the wine against a white background — its clarity, depth and colour hint at age, grape and body. Swirl to release aromas, then smell. Note fruit, floral, herbal, spice or earthy characters.",
      "Sip, and let the wine coat your palate. Assess sweetness, acidity, tannin, body and alcohol. Finally, judge balance, length, and how the wine finishes.",
    ],
    bullets: [
      {
        heading: "Work the senses in order",
        text: "Sight, then smell, then taste. Writing one short note for each forces you to notice more.",
      },
      {
        heading: "Compare to learn",
        text: "Tasting wines side by side — or the same grape from two regions — is the fastest way to build your palate.",
      },
    ],
    relatedTopics: ["wine-basics", "tasting-terms", "glossary"],
    difficulty: "beginner",
  },
  {
    id: "serving-wine",
    title: "Serving Wine",
    slug: "serving-wine",
    category: "serving",
    excerpt:
      "Temperature, glassware and decanting — the simple service choices that make wine taste its best.",
    body: [
      "Temperature transforms wine. Serve light whites and sparkling chilled (6–10°C), fuller whites and rosé cool (10–13°C), and reds at cool room temperature (15–18°C). A wine served too warm tastes flat and alcoholic; too cold and it shuts down.",
      "Glassware matters more than most think. A large-bowled red glass lets aromas open; a narrower glass preserves a white's perfume; flutes keep sparkling's bubbles lively.",
      "Decanting aerates young reds and separates aged wines from their sediment. A few minutes in the glass can do the same for most young wines.",
    ],
    bullets: [
      {
        heading: "Get the temperature right",
        text: "When in doubt, serve red a touch cooler and white a touch warmer than you'd expect.",
      },
      {
        heading: "One skill at a time",
        text: "Pour, swirl, and simply enjoy. Perfect service is about showing a wine at its best, not ceremony.",
      },
    ],
    relatedTopics: ["wine-basics", "how-to-taste", "storage"],
    difficulty: "beginner",
  },
  {
    id: "storage",
    title: "Storing Wine",
    slug: "storage",
    category: "storage",
    excerpt:
      "How to keep wine at its best — light, temperature, humidity, and how long it actually lasts.",
    body: [
      "Three enemies shorten a wine's life: heat, light and too much air. Store bottles on their side in a cool, dark, stable place at around 10–14°C.",
      "Red wines generally handle cellar conditions better than whites, whose freshness declines sooner. But most wine is made for early drinking — only a minority improves with age.",
      "Once opened, wines oxidise quickly. A decent vacuum pump or inert-gas system buys another day or two; a half-full bottle of a delicate white is best finished that evening.",
    ],
    bullets: [
      {
        heading: "Stability beats temperature",
        text: "Steady cool is far better than swings. A stable 15°C is kinder than a room that fluctuates.",
      },
      {
        heading: "Drink most wine young",
        text: "Only a small fraction of wine benefits from cellaring. Enjoy the rest within a few years of release.",
      },
    ],
    relatedTopics: ["serving-wine", "wine-basics"],
    difficulty: "beginner",
  },
  {
    id: "tasting-terms",
    title: "Wine Tasting Glossary",
    slug: "tasting-terms",
    category: "terminology",
    excerpt:
      "Decode the tasting-room vocabulary — body, tannin, acidity, finish and more — in plain language.",
    body: [
      "Tasting language can feel like a barrier, but the core terms are simple. Body describes the perceived weight and richness of a wine. Acidity is the fresh, mouth-watering zing. Tannin is the drying grip you feel in red wines. Each contributes to balance.",
      "The finish is how long a wine's flavour lingers after you swallow — a hallmark of quality. Aromatic intensity and complexity (how many layers present themselves) round out professional assessment.",
      "You don't need eloquence to taste well. Honest, observational notes are the most useful kind.",
    ],
    bullets: [
      {
        heading: "Body",
        text: "Light, medium or full — how heavy the wine feels in your mouth.",
      },
      {
        heading: "Tannin & acidity",
        text: "Tannin grips; acidity refreshes. Great wine balances fruit against both.",
      },
    ],
    relatedTopics: ["how-to-taste", "glossary", "wine-basics"],
    difficulty: "beginner",
  },
  {
    id: "pairing-principles",
    title: "Food & Wine Pairing Principles",
    slug: "pairing-principles",
    category: "basics",
    excerpt:
      "The simple rules that make food-and-wine matches sing — match weight, mirror or contrast flavours.",
    body: [
      "Pairing need not be intimidating. The golden rules are to match intensity, balance sweetness and acidity, and use regional logic.",
      "Match weight: a light wine with delicate food, a fuller wine with richer dishes. Match or contrast flavour: earthy wines love mushrooms, a zesty white cuts rich seafood, an off-dry wine tames spice.",
      "Regional pairing is a reliable shortcut — the wine that grew beside the food almost always pairs beautifully with it.",
    ],
    bullets: [
      {
        heading: "Match intensity",
        text: "Delicate food, delicate wine; bold food, bold wine. It's the single most useful rule.",
      },
      {
        heading: "Regional logic",
        text: "Chianti with pasta, Rioja with lamb, Marlborough with fresh fish — local pairings are built to work.",
      },
    ],
    relatedTopics: ["wine-basics", "serving-wine"],
    difficulty: "beginner",
  },
];
