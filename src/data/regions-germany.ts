import type { Region } from "@/types";

export const regionsGermany: Region[] = [
  {
    id: "mosel",
    name: "Mosel",
    slug: "mosel",
    country: "Germany",
    countrySlug: "germany",
    climate: "Cool with steep south-facing slopes and river reflection",
    geography: "Gorgeous slate-stepped river valley of western Germany",
    majorGrapes: ["Riesling"],
    majorGrapeSlugs: ["riesling"],
    mainWineStyles: ["Aromatic white (Riesling)", "Sweet & off-dry Riesling", "Eiswein"],
    keyAppellations: ["Mosel", "Saar", "Ruwer", "Bernkastel", "Piesport"],
    description:
      "The Mosel, with its dizzyingly steep blue-slate slopes and river-reflection warmth, makes some of the world's greatest Riesling, from bone-dry to luscious dessert wines that age for decades.",
    famousFor: ["World-class Riesling", "Steep slate slopes", "Wehlener Sonnenuhr"],
    visitingInfo:
      "Half-timbered villages, twinkling river cruises and legendary cellar doors like those of Bernkastel-Kues make an unforgettable trip.",
    relatedRegionSlugs: ["rheingau", "nahe", "pfalz"],
    mapCode: "DE",
  },
  {
    id: "rheingau",
    name: "Rheingau",
    slug: "rheingau",
    country: "Germany",
    countrySlug: "germany",
    climate: "Cool, sunny south-facing slope along the Rhine",
    geography: "Narrow east-west hillside between the Rhine and the Taunus",
    majorGrapes: ["Riesling", "Spätburgunder (Pinot Noir)"],
    majorGrapeSlugs: ["riesling", "pinot-noir"],
    mainWineStyles: ["Aromatic white (Riesling)", "Elegant red"],
    keyAppellations: ["Rheingau", "Johannisberg", "Rüdesheim", "Schloss Johannisberg"],
    description:
      "The Rheingau is where German Riesling found its modern form, a graceful stretch of south-facing slopes and storied monastic estates that defined the fine wine of Germany.",
    famousFor: ["Historic estates", "Riesling", "Schloss Johannisberg"],
    visitingInfo:
      "Neoclassical castles, the legendary 'Rheingau' terrace and the wine capital of Wiesbaden nearby make a refined visit.",
    relatedRegionSlugs: ["mosel", "nahe", "pfalz"],
    mapCode: "DE",
  },
  {
    id: "pfalz",
    name: "Pfalz",
    slug: "pfalz",
    country: "Germany",
    countrySlug: "germany",
    climate: "Germany's warmest, driest wine region",
    geography: "Long east-west ridge shorts of the Haardt (palatinate forest)",
    majorGrapes: ["Riesling", "Spätburgunder", "Müller-Thurgau", "Grauer Burgunder"],
    majorGrapeSlugs: ["riesling", "pinot-noir", "gruner-veltliner"],
    mainWineStyles: ["Aromatic white", "Pinot Noir", "Spätburgunder"],
    keyAppellations: ["Pfalz", "Mittelhaardt", "Südliche Weinstraße"],
    description:
      "The Pfalz is Germany's warmest region, producing rich off-dry Riesling, fine Spätburgunder and full-bodied whites along the sunny German Wine Road.",
    famousFor: ["German Wine Road", "Rich Riesling", "Spätburgunder"],
    visitingInfo:
      "The Deutsche Weinstraße (German Wine Road), vineyards woven with castles and chestnut-shaded taverns, makes a charming, easy-driving holiday.",
    relatedRegionSlugs: ["rheingau", "nahe", "mosel"],
    mapCode: "DE",
  },
  {
    id: "nahe",
    name: "Nahe",
    slug: "nahe",
    country: "Germany",
    countrySlug: "germany",
    climate: "Cool, varied soils",
    geography: "Valleys around the Nahe river between the Mosel and Rheingau",
    majorGrapes: ["Riesling", "Silvaner", "Weissburgunder"],
    majorGrapeSlugs: ["riesling", "silvaner"],
    mainWineStyles: ["Aromatic white (Riesling)", "Elegant white"],
    keyAppellations: ["Nahe", "Schlossböckelheim", "Niederhäuser"],
    description:
      "The Nahe is a compact, brilliant Riesling region whose diverse slate, volcanic and sandstone soils produce some of Germany's most precise and compelling dry whites.",
    famousFor: ["Precise Riesling", "Soil diversity", "Dönnhoff"],
    visitingInfo:
      "Secluded valleys, ruined castles and the idyll of Bad Kreuznach make an off-the-beaten-path gem.",
    relatedRegionSlugs: ["rheingau", "mosel", "pfalz"],
    mapCode: "DE",
  },
];
