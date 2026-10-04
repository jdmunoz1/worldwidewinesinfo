import type { Country } from "@/types";

// NA = countries part 1 (Europe + Oceania)
export const countriesPart1: Country[] = [
  {
    id: "france",
    name: "France",
    slug: "france",
    continent: "Europe",
    flagEmoji: "FR",
    overview:
      "France is the world's most influential wine nation, home to thousands of appellations and the benchmark for wine quality, tradition, and innovation. From the limestone slopes of Burgundy to the gravelly banks of Bordeaux, French wine culture is inseparable from the nation's identity, cuisine, and landscape. French wines set global benchmarks for quality in virtually every major category — still reds, whites, rosé, and sparkling — and its appellation system has been emulated worldwide.",
    wineHistory:
      "Wine arrived in France with Greek settlers around 600 BCE, but it was the Romans who systematised viticulture across Gaul. By the Middle Ages, monasteries had established many of France's most prized vineyard sites. The 1855 Bordeaux Classification, the Napoleonic Code, and the 1935 appellation d'origine contrôlée (AOC) laws collectively shaped France's wine regulatory framework.",
    climate:
      "France spans multiple climatic zones. Atlantic-influenced regions (Bordeaux, Loire) bring maritime moisture and moderate temperatures. Continental interiors (Burgundy, Rhône) see hot summers and cold winters. Mediterranean areas (Provence, Languedoc) enjoy long, warm growing seasons. Cool northern zones (Champagne, Alsace) produce lighter, more acidic wines.",
    geography:
      "France's wine regions stretch from Alsace in the northeast to the Pyrenees in the southwest. The country benefits from diverse geological substrates — limestone in Burgundy and Champagne, gravel in Bordeaux, clay-limestone in the Rhône, schist in Alsace. Rivers such as the Garonne, Rhône, Loire, and Seine moderate temperatures and shape regional identities.",
    majorRegions: ["Bordeaux", "Burgundy", "Champagne", "Rhône Valley", "Loire Valley", "Alsace", "Provence", "Languedoc-Roussillon"],
    majorRegionsSlugs: ["bordeaux", "burgundy", "champagne", "rhone-valley", "loire-valley", "alsace", "provence", "languedoc-roussillon"],
    majorGrapes: ["Cabernet Sauvignon", "Merlot", "Pinot Noir", "Chardonnay", "Sauvignon Blanc", "Grenache", "Syrah", "Riesling"],
    majorGrapeSlugs: ["cabernet-sauvignon", "merlot", "pinot-noir", "chardonnay", "sauvignon-blanc", "grenache", "syrah", "riesling"],
    classifications:
      "France's appellation system (AOC/AOP) regulates grape varieties, yields, alcohol levels, and winemaking practices. Below AOC is Vin de France. The EU equivalent Appellation d'Origine Protégée replaced AOC for European labelling. Regional IGP wines have more flexibility. In Burgundy, Grand Cru vineyards sit above Premier Cru, which sits above Village and Regional wines.",
    typicalStyles:
      "Bold, structured reds from Bordeaux (Cabernet Sauvignon, Merlot); elegant, aromatic reds and whites from Burgundy (Pinot Noir, Chardonnay); precise, mineral sparkling wines from Champagne; full-bodied, spicy reds from the Rhône (Grenache, Syrah, Mourvèdre); crisp, mineral whites from the Loire (Sauvignon Blanc, Chenin Blanc); aromatic whites from Alsace; pale, delicate rosé from Provence.",
    labelTerms:
      "'Mis en Bouteille au Château/Domaine' (estate-bottled); 'Cru' (growth); 'Grand Cru' (great growth); 'Premier Cru' (first growth); 'Vieilles Vignes' (old vines); 'Cuvée' (a specific blend); 'Monopole'; 'Millésime' (vintage).",
    famousWines:
      "Château Lafite Rothschild, Château Margaux, Château Latour, Château Haut-Brion; Romanée-Conti (Burgundy); Dom Pérignon, Krug (Champagne); Château Rayas (Rhône); Château d'Yquem (Sauternes).",
    foodCulture:
      "French cuisine is inseparable from wine. Burgundy is synonymous with coq au vin and beef Bourguignon; Bordeaux with duck confit and entrecôte; Champagne with oysters; the Rhône with daube; Alsace with Choucroute garnie; Loire with goat cheese. The concept of 'accord mets-vins' (food and wine pairing) underpins the culinary tradition.",
    wineProductionRank: 2,
    annualProduction: "~47 million hectolitres",
    relatedCountries: ["italy", "spain", "portugal", "germany"],
  },
  {
    id: "italy",
    name: "Italy",
    slug: "italy",
    continent: "Europe",
    flagEmoji: "IT",
    overview:
      "Italy is the world's largest wine producer by volume and home to an extraordinary diversity of indigenous grape varieties — estimates range from 500 to 800 — far more than any other nation. Italian wine culture is woven into the fabric of daily life. The country produces everything from sparkling Prosecco to bold, age-worthy Barolo, from crisp Pinot Grigio to rich, sweet Marsala.",
    wineHistory:
      "Italy's winemaking heritage stretches to the Greeks who colonised the southern peninsula around 800 BCE. The Etruscans developed sophisticated winemaking before Roman expansion spread viticulture throughout the empire. The 20th century saw transformation from bulk wine production to world-class quality, accelerating after the 1963 DOC law and the 1980 DOCG elevation of Barolo and Barbaresco.",
    climate:
      "Italy's long north-south span creates enormous climatic diversity. The cool Alpine foothills of Trentino-Alto Adige and Franciacorta produce crisp whites and elegant Pinot Noir. The continental plains of Veneto enjoy warm summers and cool autumns. Tuscany benefits from a Mediterranean climate with hot, dry summers. Southern regions are distinctly Mediterranean; volcanic soils of Mount Etna create uniquely terroir-driven wines.",
    geography:
      "Italy's boot-shaped peninsula extends 1,200 km, surrounded by the Mediterranean on three sides. Wine regions span Alpine valleys, Po River plains, Apennine foothills, coastal plains, and volcanic islands. Soils are equally varied: limestone and clay in Piedmont, galestro in Tuscany, volcanic basalt on Etna.",
    majorRegions: ["Tuscany", "Piedmont", "Veneto", "Sicily", "Sardinia", "Lombardy", "Trentino-Alto Adige", "Friuli-Venezia Giulia", "Emilia-Romagna", "Campania", "Puglia", "Abruzzo", "Umbria", "Marche"],
    majorRegionsSlugs: ["tuscany", "piedmont", "veneto", "sicily", "sardinia", "lombardy", "trentino-alto-adige", "friuli-venezia-giulia", "emilia-romagna", "campania", "puglia", "abruzzo", "umbria", "marche"],
    majorGrapes: ["Sangiovese", "Nebbiolo", "Barbera", "Montepulciano", "Cortese", "Trebbiano", "Garganega", "Glera", "Grillo", "Nero d'Avola", "Vermentino", "Fiano"],
    majorGrapeSlugs: ["sangiovese", "nebbiolo", "barbera", "montepulciano", "garganega", "glera", "grillo", "nero-davola", "vermentino", "fiano"],
    classifications:
      "Italy's wine law creates a four-tier quality pyramid: DOCG (highest tier with rigorous standards); DOC (standard quality appellation); IGT (allows flexibility while specifying regional origin); and Vino da Tavola (table wine). The 'Super Tuscan' wines — such as Sassicaia and Tignanello — were originally classified as IGT.",
    typicalStyles:
      "Powerful, tannic Nebbiolo-based Barolo and Barbaresco of Piedmont; Sangiovese-driven Chianti, Brunello di Montalcino and Vino Nobile in Tuscany; the Glera-based Prosecco of Veneto; Montepulciano d'Abruzzo's plummy reds; Soave whites; the volcanic reds of Etna; the tannic Primitivo of Puglia; and the sun-drenched Nero d'Avola of Sicily.",
    labelTerms:
      "'Classico' (wine from the original, best subzone); 'Superiore'; 'Riserva' (extended ageing); 'Passito' (dried-grape dessert wine); 'Spumante' (sparkling); 'Frizzante' (lightly sparkling).",
    famousWines:
      "Giacomo Conterno Monfortino, Bruno Giacosa, Gaja (Piedmont); Antinori Tignanello and Sassicaia (Tuscany); Biondi-Santi Brunello di Montalcino; Ornellaia, Masseto; Bertani Amarone; Quintarelli Amarone.",
    foodCulture:
      "Tuscan Chianti accompanies bistecca alla fiorentina and pasta al ragù. Piedmontese Barolo and Barbaresco suit white truffles and aged cheeses. Venetian Valpolicella and Soave pair with seafood risotto. Sicilian Nero d'Avola matches grilled swordfish. Pugliese Primitivo pairs with orecchiette. Italian wine is rarely consumed without food.",
    wineProductionRank: 1,
    annualProduction: "~50 million hectolitres",
    relatedCountries: ["france", "spain", "portugal", "greece"],
  },
  {
    id: "spain",
    name: "Spain",
    slug: "spain",
    continent: "Europe",
    flagEmoji: "ES",
    overview:
      "Spain is one of the world's great wine nations, with a vineyard area larger than any other country and a wine culture stretching back more than 3,000 years. Spanish wine's defining characteristic is its relationship with oak — from the American oak botas of Jerez to the French oak barricas of Rioja. The country produces exceptional wines across an extraordinary range of climates.",
    wineHistory:
      "The Phoenicians introduced winemaking to Iberia around 1100 BCE. The Romans systematised viticulture, and monasteries preserved winemaking knowledge. Spain's true quality revolution came in the late 20th century as producers embraced modern viticulture. The 'Parkerization' era, beginning in the 1990s, elevated Spanish wines — particularly from Ribera del Duero — to global fame.",
    climate:
      "The dominant influence is altitude: much of Spain's best vineyard land sits at 600–1,000+ metres, where cool nights offset hot daytime temperatures. Continental climates (Rioja, Ribera del Duero, Rueda) bring hot summers and cold winters. Atlantic-influenced regions (Galicia, Rías Baixas) are cooler and wetter. Mediterranean coastal areas enjoy warmth moderated by sea breezes.",
    geography:
      "Wine regions span from the Basque Country in the north to Andalusia in the south. Soils vary enormously: Rioja's iron-rich clay over limestone; Ribera del Duero's limestone-clay soils; Priorat's distinctive llicorella (slate) hillsides; Sherry's chalky albariza.",
    majorRegions: ["Rioja", "Ribera del Duero", "Priorat", "Rías Baixas", "Rueda", "Jerez (Sherry)", "Penedès", "Ribeira Sacra", "Galicia"],
    majorRegionsSlugs: ["rioja", "ribera-del-duero", "priorat", "rias-baixas", "rueda", "jerez", "penedes", "ribeira-sacra", "galicia"],
    majorGrapes: ["Tempranillo", "Garnacha", "Albariño", "Verdejo", "Monastrell", "Mencía", "Palomino", "Pedro Ximénez", "Airén"],
    majorGrapeSlugs: ["tempranillo", "grenache", "albarino", "verdejo", "monastrell", "mencia", "palomino", "pedro-ximenez", "airen"],
    classifications:
      "Spain's classifications centre on aging. The Rioja system — Joven, Crianza, Reserva, Gran Reserva — became a national model. Priorat uses its own DOCa designation, one of only two alongside Rioja.",
    typicalStyles:
      "The elegant, oak-aged Tempranillo of Rioja and Ribera del Duero; the powerful, mineral Garnacha of Priorat; the maritime, zesty Albariño of Rías Baixas; the crisp Verdejo of Rueda; the complex Oloroso and delicate Fino and Manzanilla Sherries; the sweet Pedro Ximénez from Jerez; and the avant-garde wines of Bierzo.",
    labelTerms:
      "Labels display aging classification (Joven, Crianza, Reserva, Gran Reserva). 'Cosechero' indicates harvest-year wine. 'Coupage' is a blend. 'Denominación de Origen' (DO) and 'Denominación de Origen Calificada' (DOCa) are quality designations. 'Pago' denotes a single estate.",
    famousWines:
      "Vega Sicilia Único, Pingus (Ribera del Duero); La Rioja Alta Gran Reserva 904, Marqués de Riscal (Rioja); Clos Mogador (Priorat); Torres Mas la Plana (Penedès); Tío Pepe, Lustau (Sherry).",
    foodCulture:
      "Spanish wine accompanies tapas and long meals. Rioja and Ribera del Duero pair with grilled lamb, Manchego cheese, and chorizo. Albariño partners Galicia's seafood. Sherry spans from Fino's affinity with fried fish and jamón ibérico to Pedro Ximénez's dark chocolate.",
    wineProductionRank: 3,
    annualProduction: "~40 million hectolitres",
    relatedCountries: ["france", "italy", "portugal"],
  },
];
