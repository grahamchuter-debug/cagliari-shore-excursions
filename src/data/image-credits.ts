/**
 * Image-credit registry for every photograph in public/images.
 *
 * Rendered on /image-credits. Every entry is a verified Wikimedia Commons
 * source page; do not add an image without one. Where two filenames are
 * listed, the files are byte-identical copies of the same image.
 */

export type ImageCredit = {
  filename: string;
  workTitle: string;
  creator: string;
  sourcePlatform: string;
  sourceUrl: string;
  licence: string;
  licenceUrl: string;
  shareAlike: boolean;
  modifications: string;
};

const UNMODIFIED = "Used as published. No changes.";
const RESIZED = "Resized. No other changes.";

export const IMAGE_CREDITS: ImageCredit[] = [
  {
    filename: "hero-home.jpg, city-highlights.jpg",
    workTitle: "Cagliari Panorama del Quartiere di Castello",
    creator: "Giuseppe Barberis",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cagliari_Panorama_del_Quartiere_di_Castello.jpg",
    licence: "Public domain (1895 engraving)",
    licenceUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    shareAlike: false,
    modifications: RESIZED,
  },
  {
    filename: "og-default.jpg",
    workTitle: "Skyline Cagliari",
    creator: "Mattafalluga",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Skyline_Cagliari.JPG",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "cruise-port.jpg, private-tour.jpg",
    workTitle: "Staro mesto (Castello), Cagliari",
    creator: "Cernegaja28",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Staro_mesto_(Castello),_Cagliari.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "old-town.jpg, villages.jpg",
    workTitle: "Castello, Cagliari",
    creator: "Cernegaja28",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Castello,_Cagliari.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "bastione.jpg",
    workTitle: "Bastione San Remy seen from piazza Costituzione",
    creator: "Eduard Marmet",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bastione_San_Remy_seen_from_piazza_Costituzione.jpg",
    licence: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "cathedral.jpg",
    workTitle: "Cagliari kathedrale",
    creator: "Hans Peter Schaefer",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cagliari_kathedrale.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
    shareAlike: true,
    modifications: UNMODIFIED,
  },
  {
    filename: "history.jpg, wine.jpg",
    workTitle: "Cagliari Anfiteatro Romano",
    creator: "Unukorno",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cagliari_Anfiteatro_Romano.jpg",
    licence: "CC BY 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by/4.0/",
    shareAlike: false,
    modifications: RESIZED,
  },
  {
    filename: "food.jpg",
    workTitle: "Sanbenedetto",
    creator: "Freek Janssens",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sanbenedetto.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
    shareAlike: true,
    modifications: UNMODIFIED,
  },
  {
    filename: "poetto.jpg, family.jpg",
    workTitle: "POETTO TORRE CAGLIARI",
    creator: "Zagorfree",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:POETTO_TORRE_CAGLIARI.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "couples.jpg",
    workTitle: "Cagliari - Sella del Diavolo - Capo Sant'Elia",
    creator: "cristianocani",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cagliari_-_Sella_del_Diavolo_-_Capo_Sant%27Elia.jpg",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    shareAlike: false,
    modifications: RESIZED,
  },
  {
    filename: "flamingos.jpg",
    workTitle: "Greater Flamingo (Fenicottero Rosa) (Phoenicopterus roseus) - Cagliari, Italy 2024-03-25",
    creator: "Ryan Hodnett",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Greater_Flamingo_(Fenicottero_Rosa)_(Phoenicopterus_roseus)_-_Cagliari,_Italy_2024-03-25.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: UNMODIFIED,
  },
  {
    filename: "nature.jpg",
    workTitle: "Parco Molentargius 1",
    creator: "Fabiocarboni",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Parco_Molentargius_1.JPG",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "nora.jpg",
    workTitle: "Archaeological site Nora - Pula - Sardinia - Italy - 04",
    creator: "Norbert Nagel",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Archaeological_site_Nora_-_Pula_-_Sardinia_-_Italy_-_04.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "nuraghe.jpg",
    workTitle: "Nuraghe Su Nuraxi - Barumini - Sardinia - Italy - 27",
    creator: "Norbert Nagel",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nuraghe_Su_Nuraxi_-_Barumini_-_Sardinia_-_Italy_-_27.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "boat.jpg, snorkel.jpg",
    workTitle: "Baunei - panoramio (1)",
    creator: "Patrick Nouhailler",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Baunei_-_panoramio_(1).jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "sailing.jpg",
    workTitle: "Sailing in Sardinia , La Caletta - panoramio (1)",
    creator: "Patrick Nouhailler",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sailing_in_Sardinia_,_La_Caletta_-_panoramio_(1).jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
];
