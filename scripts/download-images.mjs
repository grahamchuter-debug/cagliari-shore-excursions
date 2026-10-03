// Downloads Cagliari / Sardinia imagery from Wikimedia Commons into public/images.
import { writeFileSync, mkdirSync, existsSync, statSync, unlinkSync, readdirSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const OUT = "public/images";
const FORCE = process.argv.includes("--force");
const UA = "cagliari-shore-excursions/1.0 (contact: hello@cagliarishoreexcursions.com)";
const MIN_BYTES = 30000;
const DOWNLOAD_DELAY_MS = 4000;

mkdirSync(OUT, { recursive: true });

/** Verified Wikimedia Commons URLs — curated for Cagliari cruise site subjects. */
const directUrls = {
  "bastione.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bastione_San_Remy_seen_from_piazza_Costituzione.jpg/1920px-Bastione_San_Remy_seen_from_piazza_Costituzione.jpg",
  "old-town.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Castello%2C_Cagliari.jpg/1920px-Castello%2C_Cagliari.jpg",
  "city-highlights.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cagliari_Panorama_del_Quartiere_di_Castello.jpg/1920px-Cagliari_Panorama_del_Quartiere_di_Castello.jpg",
  "hero-home.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cagliari_Panorama_del_Quartiere_di_Castello.jpg/1920px-Cagliari_Panorama_del_Quartiere_di_Castello.jpg",
  "og-default.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Skyline_Cagliari.JPG/1920px-Skyline_Cagliari.JPG",
  "cathedral.jpg": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cagliari_kathedrale.jpg",
  "history.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cagliari_Anfiteatro_Romano.jpg/1920px-Cagliari_Anfiteatro_Romano.jpg",
  "poetto.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/POETTO_TORRE_CAGLIARI.jpg/1280px-POETTO_TORRE_CAGLIARI.jpg",
  "flamingos.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/d/dd/Greater_Flamingo_%28Fenicottero_Rosa%29_%28Phoenicopterus_roseus%29_-_Cagliari%2C_Italy_2024-03-25.jpg",
  "nature.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Parco_Molentargius_1.JPG/1920px-Parco_Molentargius_1.JPG",
  "nora.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Archaeological_site_Nora_-_Pula_-_Sardinia_-_Italy_-_04.jpg/1920px-Archaeological_site_Nora_-_Pula_-_Sardinia_-_Italy_-_04.jpg",
  "nuraghe.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Nuraghe_Su_Nuraxi_-_Barumini_-_Sardinia_-_Italy_-_27.jpg/1920px-Nuraghe_Su_Nuraxi_-_Barumini_-_Sardinia_-_Italy_-_27.jpg",
  "boats-marina-piccola-sella-del-diavolo.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Sella_del_Diavolo.jpg/1920px-Sella_del_Diavolo.jpg",
  "sailing-dinghies-gulf-of-angels.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Costa_degli_angeli.jpg/1920px-Costa_degli_angeli.jpg",
  "clear-water-sella-del-diavolo.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sella_del_Diavolo_2_%28Cagliari%29.jpg/1920px-Sella_del_Diavolo_2_%28Cagliari%29.jpg",
  "food.jpg": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sanbenedetto.jpg",
  "carignano-vineyard-sant-antioco.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Spiaggia_Grande_vineyard_on_a_sandy_soil.jpg/1920px-Spiaggia_Grande_vineyard_on_a_sandy_soil.jpg",
  "villanovaforru-village.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Villanovaforru_-_Panorama_%2803%29.jpg/1920px-Villanovaforru_-_Panorama_%2803%29.jpg",
  "cruise-ship-port-of-cagliari.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cagliari_haven_2018_4.jpg/1920px-Cagliari_haven_2018_4.jpg",
  "private-tour.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Staro_mesto_%28Castello%29%2C_Cagliari.jpg/1920px-Staro_mesto_%28Castello%29%2C_Cagliari.jpg",
  "family.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/POETTO_TORRE_CAGLIARI.jpg/1280px-POETTO_TORRE_CAGLIARI.jpg",
  "couples.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cagliari_-_Sella_del_Diavolo_-_Capo_Sant%27Elia.jpg/1920px-Cagliari_-_Sella_del_Diavolo_-_Capo_Sant%27Elia.jpg",
};

const alternates = {
  "flamingos.jpg": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Parco_Molentargius_1.JPG/1920px-Parco_Molentargius_1.JPG",
  ],
  "food.jpg": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Castello%2C_Cagliari.jpg/1920px-Castello%2C_Cagliari.jpg",
  ],
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function downloadWithCurl(url, dest) {
  try {
    execSync(
      `curl -fsSL -A ${JSON.stringify(UA)} ${JSON.stringify(url)} -o ${JSON.stringify(dest)}`,
      { stdio: "pipe" },
    );
    return existsSync(dest) && statSync(dest).size >= MIN_BYTES;
  } catch {
    return false;
  }
}

function cleanupLegacyImages() {
  const keep = new Set([...Object.keys(directUrls), "logo-mark.svg", "favicon.ico"]);
  for (const name of readdirSync(OUT)) {
    if (!keep.has(name)) {
      unlinkSync(join(OUT, name));
      console.log(`  removed legacy ${name}`);
    }
  }
}

async function main() {
  console.log(`Cagliari image set: ${Object.keys(directUrls).length} files${FORCE ? " (force re-download)" : ""}`);
  cleanupLegacyImages();

  let ok = 0;
  let fail = 0;

  for (const [filename, url] of Object.entries(directUrls)) {
    const dest = join(OUT, filename);
    if (!FORCE && existsSync(dest) && statSync(dest).size > MIN_BYTES) {
      console.log(`  skip ${filename} (exists)`);
      ok++;
      continue;
    }

    const candidates = [url, ...(alternates[filename] ?? [])];
    let saved = false;
    for (const u of candidates) {
      await sleep(DOWNLOAD_DELAY_MS);
      if (downloadWithCurl(u, dest)) {
        console.log(`  ok   ${filename}`);
        ok++;
        saved = true;
        break;
      }
    }
    if (!saved) {
      console.log(`  miss ${filename}`);
      fail++;
    }
  }

  console.log(`\nDone: ${ok} ok, ${fail} missed`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
