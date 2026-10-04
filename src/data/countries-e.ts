import type { Country } from "@/types";

// countries-e: Portugal, Germany
export const countriesPart5: Country[] = [
  {
    id: "portugal",
    name: "Portugal",
    slug: "portugal",
    continent: "Europe",
    flagEmoji: "PT",
    overview:
      "Portugal produces some of the world's most distinctive wines, from the powerful, structured Douro reds that define Port to the crisp, effervescent Vinho Verde of the northwest. With around 250 indigenous grape varieties, Portugal is a treasure trove of viticultural biodiversity, producing superb still reds and whites plus world-famous fortified wines.",
    wineHistory:
      "Portuguese winemaking dates to pre-Roman times. The Treaty of Methuen (1703) opened British markets, and the Marquis of Pombal created the world's first demarcated wine region — the Douro Valley — in 1756. The late 20th century saw a renaissance in serious still wine production.",
    climate:
      "The Atlantic influences the north, bringing high rainfall and maritime freshness to Vinho Verde and the Douro. Central and southern regions (Dão, Alentejo, Bairrada) have warmer, drier, more continental climates, with cooling coastal breezes.",
    geography:
      "Portugal's winemaking spans the cool, green Minho in the northwest to the hot, dry Alentejo in the south. Soils include the schist of the Douro, the limestone of Bairrada, and the granite and clay of the Dão.",
    majorRegions: ["Douro", "Vinho Verde", "Dão", "Alentejo", "Bairrada", "Lisboa", "Setúbal"],
    majorRegionsSlugs: ["douro", "vinho-verde", "dao", "alentejo", "bairrada", "lisboa", "setubal"],
    majorGrapes: ["Touriga Nacional", "Touriga Franca", "Tinta Roriz", "Alvarinho", "Arinto", "Baga", "Fernão Pires", "Encruzado"],
    majorGrapeSlugs: ["touriga-nacional", "touriga-franca", "tinta-roriz", "albarino", "arinto", "baga", "fernao-pires", "encruzado"],
    classifications:
      "Portugal uses Denominação de Origem Controlada (DOC) for its finest appellations, with the Douro, Dão, and Bairrada among the most prominent. Below DOC is the wider Vinho Regional classification.",
    typicalStyles:
      "Rich, tannic Douro reds; fragrant Alvarinho-based Vinho Verde; elegant, age-worthy Dão; full-bodied Alentejo reds; and world-famous Port and Madeira fortified wines.",
    labelTerms:
      "'DOC' (Denominação de Origem Controlada) marks a quality appellation. 'Vinho Regional' is a regional wine. 'Colheita' means vintage/harvest year. 'Garrafeira' denotes a specially selected, aged wine.",
    famousWines:
      "Quinta do Noval, Taylor's, Graham's, Dow's (Port); Niepoort Redoma (Douro); Quinta dos Roques Dão; Vinho Verde from Soalheiro; the great vintage Ports.",
    foodCulture:
      "Portuguese wine pairs with the nation's seafood, bacalhau (salt cod), grilled meats, and Iberian pork. Vinho Verde suits fresh seafood, Douro reds match grilled meats, and Port accompanies cheese and desserts.",
    wineProductionRank: 10,
    annualProduction: "~6 million hectolitres",
    relatedCountries: ["spain", "france", "italy"],
  },
  {
    id: "germany",
    name: "Germany",
    slug: "germany",
    continent: "Europe",
    flagEmoji: "DE",
    overview:
      "Germany produces some of the world's greatest Riesling — aromatic, racy, and minerally — alongside elegant Spätburgunder (Pinot Noir). German wines are defined by cool, marginal vineyard sites on steep river slopes, where Riesling achieves remarkable precision. The country excels at both dry and off-dry styles.",
    wineHistory:
      "Viticulture in Germany dates to the Roman era, but the modern reputation rests on Riesling, first documented in the 15th century. The monastic wine tradition, the Riesling wine rush of the 18th century, and the late-20th-century embrace of dry wines have all shaped German wine.",
    climate:
      "Germany's cool continental climate is moderated by its rivers (Rhine, Mosel, Nahe). Steep, south-facing slate slopes maximise heat and sunlight. Harvests are late, producing wines of naturally high acidity and lower alcohol — ideal for Riesling's racy character.",
    geography:
      "German vineyard land hugs river valleys in the south and west. The steep slate slopes of the Mosel, the sandstone, clay and limestone of the Rheingau, and the varied soils of the Nahe and Pfalz each give distinct character to Riesling.",
    majorRegions: ["Mosel", "Rheingau", "Pfalz", "Rheinhessen", "Nahe", "Baden", "Franken", "Ahr"],
    majorRegionsSlugs: ["mosel", "rheingau", "pfalz", "rheinhessen", "nahe", "baden", "franken", "ahr"],
    majorGrapes: ["Riesling", "Spätburgunder (Pinot Noir)", "Grauburgunder (Pinot Gris)", "Weissburgunder (Pinot Blanc)", "Silvaner"],
    majorGrapeSlugs: ["riesling", "pinot-noir", "pinot-grigio", "pinot-grigio", "silvaner"],
    classifications:
      "Germany's Qualitätswein system includes Qualitätswein and Pradikatswein — the latter graded by grape ripeness at harvest: Kabinett, Spätlese, Auslese, Beerenauslese, and Trockenbeerenauslese. The VDP (Verband Deutscher Prädikatsweingüter) adds a quality hierarchy of estates and sites.",
    typicalStyles:
      "Racy, slate-mineral Mosel Riesling; fuller-bodied, richer Rheingau Riesling; elegant dry Spätburgunder; and the great sweet dessert wines of Auslese and Trockenbeerenauslese (TBA).",
    labelTerms:
      "'Trocken' (dry), 'Halbtrocken'/Feinherb (off-dry), 'Lieblich' (sweet-ish), 'Süss' (sweet). 'Prädikat' grades indicate harvest ripeness. 'Gutsabfüllung' means estate-bottled; 'Erzeugerabfüllung' is cooperative-bottled.",
    famousWines:
      "Egon Müller-Scharzhof (Mosel); Dr. Loosen (Mosel); Weingut Keller (Rheinhessen); Fritz Haag (Mosel); Markobrunn Riesling from the Schloss Vollrads (Rheingau); and the great TBA dessert wines.",
    foodCulture:
      "German Riesling pairs superbly with the cuisine's delicate, savoury dishes — spaetzle, pork, white asparagus, and salads. Off-dry Rieslings suit slightly spicy and Asian food. Spätburgunder pairs with roasts and poultry.",
    wineProductionRank: 9,
    annualProduction: "~9 million hectolitres",
    relatedCountries: ["france", "austria", "italy"],
  },
];
