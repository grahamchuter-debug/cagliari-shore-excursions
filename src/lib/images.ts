export interface SiteImage {
  src: string;
  alt: string;
}

const B = "/images";

export const siteImages = {
  hero: {
    src: `${B}/hero-home.jpg`,
    alt: "Cagliari skyline, Bastione di Saint Remy and Gulf of Angels coastline above the cruise port",
  },
  ogDefault: {
    src: `${B}/og-default.jpg`,
    alt: "Cagliari cruise planning — Castello, flamingos and Southern Sardinia coastline",
  },
  logo: {
    src: `${B}/logo-mark.svg`,
    alt: "Cagliari Shore Excursions",
  },
  port: {
    src: `${B}/cruise-port.jpg`,
    alt: "Cruise ships berthed at Cagliari Stazione Marittima on the Gulf of Angels",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  "old-town": { src: `${B}/old-town.jpg`, alt: "Castello quarter lanes and limestone terraces in Cagliari" },
  bastione: { src: `${B}/bastione.jpg`, alt: "Bastione di Saint Remy terrace overlooking Cagliari and the Gulf of Angels" },
  cathedral: { src: `${B}/cathedral.jpg`, alt: "Cagliari Cathedral in the Castello district" },
  poetto: { src: `${B}/poetto.jpg`, alt: "Poetto beach and turquoise waters on the Gulf of Angels" },
  flamingos: { src: `${B}/flamingos.jpg`, alt: "Pink flamingos at Parco Molentargius near Cagliari" },
  nora: { src: `${B}/nora.jpg`, alt: "Roman ruins at Nora archaeological site near Pula" },
  nuraghe: { src: `${B}/nuraghe.jpg`, alt: "Su Nuraxi di Barumini UNESCO nuraghe in Sardinia" },
  boat: { src: `${B}/boat.jpg`, alt: "Boat tour on the Gulf of Angels from Cagliari" },
  sailing: { src: `${B}/sailing.jpg`, alt: "Sailing catamaran on the Gulf of Angels" },
  snorkel: { src: `${B}/snorkel.jpg`, alt: "Snorkelling in clear Sardinian coastal waters" },
  food: { src: `${B}/food.jpg`, alt: "Sardinian food and fresh seafood at Mercato San Benedetto" },
  wine: { src: `${B}/wine.jpg`, alt: "Sardinian Cannonau wine tasting in the Campidano" },
  villages: { src: `${B}/villages.jpg`, alt: "Traditional Sardinian village in the Campidano hills" },
  "city-highlights": { src: `${B}/city-highlights.jpg`, alt: "Cagliari Castello district and Gulf of Angels views" },
  "private-tour": { src: `${B}/private-tour.jpg`, alt: "Private guided tour exploring Southern Sardinia from Cagliari" },
  family: { src: `${B}/family.jpg`, alt: "Family-friendly Cagliari sights and flamingo park" },
  couples: { src: `${B}/couples.jpg`, alt: "Romantic Gulf of Angels sunset from Cagliari" },
  nature: { src: `${B}/nature.jpg`, alt: "Molentargius lagoon wildlife near Cagliari cruise port" },
  history: { src: `${B}/history.jpg`, alt: "Roman amphitheatre and ancient heritage in Cagliari" },
  planner: { src: `${B}/city-highlights.jpg`, alt: "Planning a Cagliari cruise day in Southern Sardinia" },
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
