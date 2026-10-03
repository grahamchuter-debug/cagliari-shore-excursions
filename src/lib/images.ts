export interface SiteImage {
  src: string;
  alt: string;
}

const B = "/images";

export const siteImages = {
  hero: {
    src: `${B}/hero-home.jpg`,
    alt: "Giuseppe Barberis's 1895 engraving of Cagliari's Castello quarter above its bastions",
  },
  ogDefault: {
    src: `${B}/og-default.jpg`,
    alt: "Cagliari's skyline and San Michele hill, seen from Monte Claro park",
  },
  logo: {
    src: `${B}/logo-mark.svg`,
    alt: "Cagliari Shore Excursions",
  },
  port: {
    src: `${B}/cruise-port.jpg`,
    alt: "Cagliari's old Castello quarter and its walls rising above the city",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  "old-town": { src: `${B}/old-town.jpg`, alt: "The walled Castello quarter on its hilltop above central Cagliari" },
  bastione: { src: `${B}/bastione.jpg`, alt: "The Bastione di Saint Remy's monumental arch and staircase, seen from Piazza Costituzione" },
  cathedral: { src: `${B}/cathedral.jpg`, alt: "Cagliari Cathedral in the Castello district" },
  poetto: { src: `${B}/poetto.jpg`, alt: "The Torre del Poetto watchtower on its headland above the sea at Poetto, Cagliari" },
  flamingos: { src: `${B}/flamingos.jpg`, alt: "A greater flamingo feeding in the shallows at Parco Molentargius, Cagliari" },
  nora: { src: `${B}/nora.jpg`, alt: "Roman ruins at Nora archaeological site near Pula" },
  nuraghe: { src: `${B}/nuraghe.jpg`, alt: "Su Nuraxi di Barumini UNESCO nuraghe in Sardinia" },
  boat: { src: `${B}/boat.jpg`, alt: "A sailing boat below the limestone cliffs of the Baunei coast in eastern Sardinia" },
  sailing: { src: `${B}/sailing.jpg`, alt: "Yachts moored in the marina at La Caletta, on Sardinia's east coast, at sunset" },
  snorkel: { src: `${B}/snorkel.jpg`, alt: "A sailing boat below the limestone cliffs of the Baunei coast in eastern Sardinia" },
  food: { src: `${B}/food.jpg`, alt: "Fruit and vegetable stalls inside Cagliari's San Benedetto market" },
  wine: { src: `${B}/wine.jpg`, alt: "The Roman amphitheatre in Cagliari, cut into the limestone hillside" },
  villages: { src: `${B}/villages.jpg`, alt: "The walled Castello quarter on its hilltop above central Cagliari" },
  "city-highlights": { src: `${B}/city-highlights.jpg`, alt: "Giuseppe Barberis's 1895 engraving of Cagliari's Castello quarter above its bastions" },
  "private-tour": { src: `${B}/private-tour.jpg`, alt: "Cagliari's old Castello quarter and its walls rising above the city" },
  family: { src: `${B}/family.jpg`, alt: "The Torre del Poetto watchtower on its headland above the sea at Poetto, Cagliari" },
  couples: { src: `${B}/couples.jpg`, alt: "Turquoise water and rocks below the Sella del Diavolo headland, Cagliari" },
  nature: { src: `${B}/nature.jpg`, alt: "A path through the Molentargius nature park, with the lagoon and hills beyond" },
  history: { src: `${B}/history.jpg`, alt: "Roman amphitheatre and ancient heritage in Cagliari" },
  planner: { src: `${B}/city-highlights.jpg`, alt: "Giuseppe Barberis's 1895 engraving of Cagliari's Castello quarter above its bastions" },
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "cagliari-city-highlights": "city-highlights",
  "nora-archaeological-tour": "nora",
  "flamingos-and-nature": "flamingos",
  "gulf-of-angels-boat-tour": "boat",
  "sailing-experience": "sailing",
  "snorkelling-experience": "snorkel",
  "sardinian-wine-experience": "wine",
  "sardinian-food-experience": "food",
  "private-south-sardinia-tour": "private-tour",
  "small-group-cagliari-highlights": "old-town",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "city-highlights");
}

export const excursionsHubImage = pick("bastione");

const attractionImageKeys: Record<string, string> = {
  "bastione-di-saint-remy": "bastione",
  "cagliari-cathedral": "cathedral",
  "poetto-beach-from-cruise-port": "poetto",
  "molentargius-flamingo-park": "flamingos",
  "nora-archaeological-site": "nora",
  "su-nuraxi-unesco-site": "nuraghe",
};

export function getAttractionImage(slug: string): SiteImage {
  return pick(attractionImageKeys[slug] ?? "city-highlights");
}

const guideImageKeys: Record<string, string> = {
  "cagliari-old-town-walking-guide": "old-town",
  "gulf-of-angels-boat-tours": "boat",
  "sailing-experiences-from-cagliari": "sailing",
  "snorkelling-from-cagliari": "snorkel",
  "best-things-to-do-in-cagliari-from-a-cruise-ship": "city-highlights",
  "one-day-in-cagliari-from-a-cruise-ship": "city-highlights",
  "sardinian-food-guide": "food",
  "sardinian-wine-experiences": "wine",
  "traditional-sardinian-villages": "villages",
  "independent-vs-cruise-line-excursions": "private-tour",
  "best-cagliari-excursions-for-families": "family",
  "best-cagliari-excursions-for-couples": "couples",
  "best-cagliari-excursions-for-nature-lovers": "nature",
  "best-cagliari-excursions-for-history-lovers": "history",
};

export function getGuideImage(slug: string): SiteImage {
  const key = guideImageKeys[slug] ?? "city-highlights";
  return pick(key);
}
