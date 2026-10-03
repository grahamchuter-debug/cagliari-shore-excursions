import { excursions } from "./excursions";

export interface PlannerInput {
  arrivalTime: string;
  departureTime: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  style: "guided" | "mix" | "diy";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  guides: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
  returnConfidence: "high" | "medium" | "low";
}

export const INTEREST_OPTIONS = [
  { id: "history", label: "History & monuments" },
  { id: "archaeology", label: "Archaeology & ruins" },
  { id: "beaches", label: "Beaches & coast" },
  { id: "wildlife", label: "Wildlife & nature" },
  { id: "sailing", label: "Sailing & boat tours" },
  { id: "food", label: "Sardinian food" },
  { id: "wine", label: "Wine & tastings" },
  { id: "relaxation", label: "Relaxation" },
];

const INTEREST_TO_EXCURSION: Record<string, string[]> = {
  history: ["cagliari-city-highlights", "small-group-cagliari-highlights", "nora-archaeological-tour"],
  archaeology: ["nora-archaeological-tour", "private-south-sardinia-tour", "cagliari-city-highlights"],
  beaches: ["gulf-of-angels-boat-tour", "flamingos-and-nature", "cagliari-city-highlights"],
  wildlife: ["flamingos-and-nature", "gulf-of-angels-boat-tour", "snorkelling-experience"],
  sailing: ["sailing-experience", "gulf-of-angels-boat-tour", "snorkelling-experience"],
  food: ["sardinian-food-experience", "cagliari-city-highlights"],
  wine: ["sardinian-wine-experience", "sardinian-food-experience"],
  relaxation: ["gulf-of-angels-boat-tour", "sailing-experience", "flamingos-and-nature"],
};

function parseTime(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + (m || 0);
}

function hoursAshore(arrival: string, departure: string): number {
  const diff = parseTime(departure) - parseTime(arrival);
  return Math.max(0, diff / 60);
}

function excursionLink(slug: string, why: string): PlannerLink | null {
  const e = excursions.find((x) => x.slug === slug);
  if (!e) return null;
  return { label: e.title, href: `/shore-excursions/${slug}`, why };
}

export function generateCagliariPlan(input: PlannerInput): PlannerResult {
  const { arrivalTime, departureTime, adults, children, interests, mobility, budget, style } = input;
  const party = adults + children;
  const hasKids = children > 0;
  const hours = hoursAshore(arrivalTime, departureTime);
  const shortDay = hours < 5;
  const standardDay = hours >= 5 && hours < 8;
  const longDay = hours >= 8;

  const excSlugs: string[] = [];
  const pushSlug = (s: string) => {
    if (s && !excSlugs.includes(s)) excSlugs.push(s);
  };

  const activeInterests = interests.length ? interests : ["history", "beaches"];
  for (const interest of activeInterests) {
    for (const s of INTEREST_TO_EXCURSION[interest] ?? []) pushSlug(s);
  }

  if (hasKids) pushSlug("cagliari-city-highlights");
  if (mobility === "limited") pushSlug("private-south-sardinia-tour");
  if (style === "diy") pushSlug("small-group-cagliari-highlights");

  if (shortDay) {
    pushSlug("cagliari-city-highlights");
    pushSlug("small-group-cagliari-highlights");
    ["nora-archaeological-tour", "private-south-sardinia-tour"].forEach((s) => {
      const idx = excSlugs.indexOf(s);
      if (idx >= 0) excSlugs.splice(idx, 1);
    });
  } else if (standardDay) {
    if (activeInterests.includes("archaeology")) pushSlug("nora-archaeological-tour");
    if (activeInterests.includes("wildlife")) pushSlug("flamingos-and-nature");
    if (activeInterests.includes("sailing")) pushSlug("gulf-of-angels-boat-tour");
    if (activeInterests.includes("food")) pushSlug("sardinian-food-experience");
    if (activeInterests.includes("wine")) pushSlug("sardinian-wine-experience");
  } else if (longDay) {
    if (activeInterests.includes("archaeology")) pushSlug("private-south-sardinia-tour");
    if (activeInterests.includes("food") && activeInterests.includes("wine")) pushSlug("sardinian-food-experience");
    if (activeInterests.includes("sailing")) pushSlug("sailing-experience");
  }

  if (style === "guided" && party >= 2) pushSlug("private-south-sardinia-tour");
  if (budget === "premium") pushSlug("private-south-sardinia-tour");
  if (activeInterests.includes("wildlife") && activeInterests.includes("sailing")) pushSlug("snorkelling-experience");

  const reasonMap: Record<string, string> = {
    "cagliari-city-highlights": "Historic Cagliari — Castello, Bastione and Roman amphitheatre without long drives.",
    "small-group-cagliari-highlights": "Walking Day — intimate city access with manageable pacing.",
    "nora-archaeological-tour": "Nora & Archaeology — Phoenician and Roman ruins on a standard port window.",
    "flamingos-and-nature": "Flamingos & Nature — Molentargius wetlands minutes from the port.",
    "gulf-of-angels-boat-tour": "Boat & Snorkelling — Gulf of Angels coastline from the cruise port.",
    "sailing-experience": "Premium sailing on the Gulf of Angels when your call is long enough.",
    "snorkelling-experience": "Clear-water coves and marine life on a guided snorkel trip.",
    "sardinian-food-experience": "Food & Wine — Mercato San Benedetto and authentic Sardinian flavours.",
    "sardinian-wine-experience": "Cannonau and Vermentino tastings in the Campidano wine country.",
    "private-south-sardinia-tour": mobility === "limited" ? "Flexible vehicle and pacing for your group." : "Maximum return-to-ship confidence for inland archaeology.",
  };

  const excursionLinks = excSlugs
    .slice(0, 5)
    .map((s) => excursionLink(s, reasonMap[s] ?? "A strong match for your interests."))
    .filter((x): x is PlannerLink => x !== null);

  const guides: PlannerLink[] = [
    { label: "Cagliari Cruise Port Guide", href: "/cruise-port-guide", why: "Stazione Marittima layout, walking distances and realistic transfer times." },
    { label: "One Day in Cagliari", href: "/one-day-in-cagliari-from-a-cruise-ship", why: "Itineraries matched to your hours ashore." },
    { label: "Best Things to Do", href: "/best-things-to-do-in-cagliari-from-a-cruise-ship", why: "Compare city, archaeology, nature, boat and food options." },
  ];
  if (activeInterests.includes("archaeology")) guides.push({ label: "Nora Archaeological Site", href: "/nora-archaeological-site", why: "Drive times, what fits and return buffers explained." });
  if (activeInterests.includes("wildlife")) guides.push({ label: "Molentargius Flamingo Park", href: "/molentargius-flamingo-park", why: "Pink flamingos and lagoon wildlife near the port." });
  if (activeInterests.includes("sailing")) guides.push({ label: "Gulf of Angels Boat Tours", href: "/gulf-of-angels-boat-tours", why: "Coastal cruises and timing from Stazione Marittima." });
  if (activeInterests.includes("food")) guides.push({ label: "Sardinian Food Guide", href: "/sardinian-food-guide", why: "Where cruise passengers eat well on a port day." });
  if (activeInterests.includes("wine")) guides.push({ label: "Sardinian Wine Experiences", href: "/sardinian-wine-experiences", why: "Tastings and cellar visits from Cagliari." });
  if (activeInterests.includes("beaches")) guides.push({ label: "Poetto Beach from Cruise Port", href: "/poetto-beach-from-cruise-port", why: "Beach Escape — bus, taxi and timing for Poetto." });
  if (hasKids) guides.push({ label: "Best for Families", href: "/best-cagliari-excursions-for-families", why: "Family Day options with manageable walking and fun stops." });

  const logistics: PlannerLink[] = [
    { label: "Ship Schedules", href: "/ship-schedules", why: "See if other ships share your port day." },
    { label: "Independent vs Ship Excursions", href: "/independent-vs-cruise-line-excursions", why: "Compare flexibility and return-to-ship guarantees." },
    { label: "FAQ", href: "/faq", why: "Common Cagliari cruise passenger questions answered." },
  ];

  const dayPlan: { time: string; text: string }[] = [];
  const topExc = excursionLinks[0]?.label ?? "your chosen excursion";

  dayPlan.push({ time: "On arrival", text: "Disembark at Stazione Marittima. Allow 30–45 minutes for immigration and terminal exit before your excursion or walk begins." });

  if (shortDay) {
    dayPlan.push({ time: "Morning", text: `Historic Cagliari / Walking Day: ${topExc}. Castello and the Bastione are walkable — skip Nora and Barumini inland trips.` });
    dayPlan.push({ time: "Midday", text: activeInterests.includes("food") ? "Quick lunch near Via Roma or Mercato San Benedetto." : "Bastione di Saint Remy terrace and cathedral exterior." });
    dayPlan.push({ time: "Return", text: "Head back 45–60 minutes before all-aboard. Short port days leave little margin for inland archaeology." });
  } else if (standardDay) {
    if (activeInterests.includes("archaeology") && !shortDay) {
      dayPlan.push({ time: "Early start", text: `Nora & Archaeology: ${topExc} — allow roughly 45 minutes each way to Pula.` });
      dayPlan.push({ time: "Midday", text: "Roman theatre, forum and coastal views at Nora before return." });
      dayPlan.push({ time: "Afternoon", text: "Return to Cagliari with a 60–75 minute buffer before all-aboard." });
    } else if (activeInterests.includes("wildlife") || activeInterests.includes("sailing")) {
      dayPlan.push({ time: "Morning", text: activeInterests.includes("wildlife") ? "Flamingos & Nature at Molentargius — pink flamingos and lagoon birdlife." : `Boat & Snorkelling: ${topExc} on the Gulf of Angels.` });
      dayPlan.push({ time: "Midday", text: activeInterests.includes("beaches") ? "Beach Escape at Poetto if time allows." : "Coastal lunch or onboard picnic on a boat tour." });
      dayPlan.push({ time: "Afternoon", text: "Optional Castello walk if energy remains — keep 45–60 minutes return margin." });
      dayPlan.push({ time: "Return buffer", text: "Allow 45–60 minutes for city and nature days, 60–75 for Nora." });
    } else {
      dayPlan.push({ time: "Morning", text: `Start with ${topExc} — ${activeInterests.includes("food") ? "Food & Wine at Mercato San Benedetto." : "Historic Cagliari rewards an early Castello start."}` });
      dayPlan.push({ time: "Midday", text: activeInterests.includes("wine") ? "Sardinian wine tasting in the Campidano." : "Lunch near Marina or Stampace districts." });
      dayPlan.push({ time: "Afternoon", text: activeInterests.includes("relaxation") ? "Relaxed Gulf of Angels viewpoint or Poetto promenade." : "Roman amphitheatre or second Castello sights." });
      dayPlan.push({ time: "Return buffer", text: "Allow 45–60 minutes margin for city days, 60–75 for Nora or Barumini." });
    }
  } else {
    dayPlan.push({ time: "Early start", text: `Maximise your long day: ${topExc}. You have time for Nora, Su Nuraxi or a combined Food & Wine experience.` });
    dayPlan.push({ time: "Midday", text: activeInterests.includes("archaeology") ? "Nora ruins and coastal archaeology at Pula." : activeInterests.includes("food") ? "Sardinian food experience with market and tastings." : "Gulf of Angels boat cruise with swimming stops." });
    dayPlan.push({ time: "Afternoon", text: hasKids ? "Family Day — flamingos, beach time or city highlights at a gentle pace." : "Second experience or relaxed return via coastal road." });
    dayPlan.push({ time: "Return buffer", text: "Even on long days, keep 60–75 minutes margin. Confirm your tour tracks ship departure." });
  }

  let returnConfidence: PlannerResult["returnConfidence"] = "high";
  if (excSlugs.includes("private-south-sardinia-tour") && !longDay) returnConfidence = "medium";
  else if (excSlugs.includes("nora-archaeological-tour") && shortDay) returnConfidence = "low";
  else if (shortDay) returnConfidence = "medium";

  const interestLabels = activeInterests.map((i) => INTEREST_OPTIONS.find((o) => o.id === i)?.label ?? i).join(", ");

  return {
    headline: `Your Cagliari Port-Day Plan (${hours.toFixed(1)} hours ashore)`,
    summary: `A ${shortDay ? "short" : standardDay ? "standard" : "long"} port day for ${party} guest${party === 1 ? "" : "s"} focused on ${interestLabels.toLowerCase()}. ${style === "guided" ? "Guided tours recommended for Nora, Barumini and boat trips." : style === "diy" ? "DIY works well in Castello — book inland tours ahead if going independently." : "A mix of guided and independent suits most Cagliari calls."}`,
    excursions: excursionLinks,
    guides,
    logistics,
    dayPlan,
    returnConfidence,
  };
}
