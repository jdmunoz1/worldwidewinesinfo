import type { Country } from "@/types";

// countries-b: Australia, New Zealand, United States, Argentina
export const countriesPart2: Country[] = [
  {
    id: "australia",
    name: "Australia",
    slug: "australia",
    continent: "Oceania",
    flagEmoji: "AU",
    overview:
      "Australia produces wines of exceptional quality across an extraordinary range of styles — from the bold, fruit-forward Shiraz of Barossa Valley to the elegant, cool-climate Pinot Noir of Yarra Valley and the refined Cabernet Sauvignon of Margaret River. Australian winemakers are known for innovation and sustainable viticulture.",
    wineHistory:
      "Viticulture arrived with the First Fleet in 1788. By the 1830s winemaking had spread to South Australia. The 20th century saw Australia become one of the world's largest wine exporters. The 1990s brought a quality revolution focused on regional distinctiveness, old vines, and cooler-climate sites.",
    climate:
      "Barossa and McLaren Vale enjoy hot, dry conditions ideal for bold reds. Margaret River's maritime climate produces Bordeaux-style blends. Yarra Valley and Mornington are cool and marginal, perfect for Pinot Noir and Chardonnay. Tasmania is coolest, for elegant sparkling wine.",
    geography:
      "Australian regions span from the hot Barossa Valley to cool Tasmania. Soils range from Coonawarra's Terra Rossa to Margaret River's sands. The continent's isolation has allowed unique viticultural approaches to develop.",
    majorRegions: ["Barossa Valley", "McLaren Vale", "Clare Valley", "Adelaide Hills", "Coonawarra", "Margaret River", "Hunter Valley", "Yarra Valley", "Mornington Peninsula", "Tasmania", "Orange", "Canberra District", "Great Southern", "Heathcote"],
    majorRegionsSlugs: ["barossa-valley", "mclaren-vale", "clare-valley", "adelaide-hills", "coonawarra", "margaret-river", "hunter-valley", "yarra-valley", "mornington-peninsula", "tasmania", "orange", "canberra-district", "great-southern", "heathcote"],
    majorGrapes: ["Shiraz", "Cabernet Sauvignon", "Chardonnay", "Riesling", "Semillon", "Grenache", "Pinot Noir", "Sauvignon Blanc"],
    majorGrapeSlugs: ["syrah", "cabernet-sauvignon", "chardonnay", "riesling", "semillon", "grenache", "pinot-noir", "sauvignon-blanc"],
    classifications:
      "Australia uses Geographical Indication (GI) zones rather than strict quality ageing laws. The Langton's Classification ranks Australia's most collectable wines but is not an official government designation.",
    typicalStyles:
      "Bold, ripe Shiraz from Barossa and McLaren Vale; elegant, structured Cabernet from Margaret River and Coonawarra; complex, age-worthy Hunter Valley Semillon; aromatic Clare and Great Southern Riesling; cool-climate Pinot Noir and Chardonnay.",
    labelTerms:
      "Labels highlight grape and region. 'Old Vine' identifies older, low-yielding vines. 'Reserve' is unregulated and varies by producer.",
    famousWines:
      "Penfolds Grange, Henschke Hill of Grace, Torbreck RunRig (Barossa); Cullen Diana Madeline, Moss Wood (Margaret River); Tyrrell's Vat 1 Hunter Semillon; Giaconda (Beechworth).",
    foodCulture:
      "Australian wine pairs with barbecue and fusion cuisine. Shiraz matches grilled lamb and beef, Riesling suits seafood and Asian flavours, Chardonnay accompanies roast chicken.",
    wineProductionRank: 5,
    annualProduction: "~13 million hectolitres",
    relatedCountries: ["new-zealand", "united-states", "south-africa"],
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    slug: "new-zealand",
    continent: "Oceania",
    flagEmoji: "NZ",
    overview:
      "New Zealand produces distinctly aromatic, cool-climate wines with a global reputation out of proportion to its small size. Marlborough Sauvignon Blanc achieved worldwide fame for its intense, zesty style, while Central Otago Pinot Noir is one of the Southern Hemisphere's most exciting cool-climate reds.",
    wineHistory:
      "Vines were planted from the 1830s, but the modern era began in the 1970s with Marlborough's expansion. Cloudy Bay's 1980s Sauvignon Blanc put New Zealand on the map. The industry has since focused on Sauvignon Blanc, Pinot Noir, Syrah, and Chardonnay.",
    climate:
      "New Zealand is a cool, maritime climate nation. Marlborough enjoys high sunshine with cool nights preserving acidity. Central Otago is the world's most southerly region, with dramatic diurnal swings. Hawke's Bay is warmer and drier, suited to Syrah and Cabernet.",
    geography:
      "Two long islands with mountainous spines create diverse, sea-influenced environments. Soils range from Marlborough's alluvial gravels to Central Otago's schist and Hawke's Bay's Gimblett Gravels limestone.",
    majorRegions: ["Marlborough", "Central Otago", "Hawke's Bay", "Martinborough", "Nelson", "Canterbury", "Auckland", "Gisborne"],
    majorRegionsSlugs: ["marlborough", "central-otago", "hawkes-bay", "martinborough", "nelson", "canterbury", "auckland", "gisborne"],
    majorGrapes: ["Sauvignon Blanc", "Pinot Noir", "Chardonnay", "Syrah", "Riesling", "Pinot Gris"],
    majorGrapeSlugs: ["sauvignon-blanc", "pinot-noir", "chardonnay", "syrah", "riesling", "pinot-grigio"],
    classifications:
      "New Zealand uses a Geographical Indication system similar to Australia, protecting region names rather than imposing quality hierarchies.",
    typicalStyles:
      "Intense, aromatic, zesty Sauvignon Blanc from Marlborough; concentrated, perfumed Pinot Noir from Central Otago and Martinborough; elegant, peppery Syrah from Hawke's Bay; rich Chardonnay.",
    labelTerms:
      "Labels concentrate on grape and region. 'Estate' or 'Single Vineyard' denote provenance. NZ labels rarely use old-world ageing terms.",
    famousWines:
      "Cloudy Bay, Dog Point (Marlborough); Felton Road (Central Otago); Ata Rangi (Martinborough); Craggy Range (Hawke's Bay).",
    foodCulture:
      "Sauvignon Blanc pairs brilliantly with seafood, oysters, salads, and goat cheese. Pinot Noir suits lamb, duck, and mushrooms. Syrah matches grilled meats.",
    wineProductionRank: 12,
    annualProduction: "~3 million hectolitres",
    relatedCountries: ["australia", "united-states"],
  },
];
