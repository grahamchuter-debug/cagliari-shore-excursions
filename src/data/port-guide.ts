import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export const terminals: Terminal[] = [
  { name: "Stazione Marittima", quay: "Molo Sant'Agostino / Via Roma waterfront", usedBy: "Most cruise ships calling at Cagliari", cityAccess: "20–30 min walk to Castello; taxis at terminal exit" },
  { name: "Molo Ichnusa", quay: "Adjacent commercial cruise berths", usedBy: "Some larger vessels and seasonal assignments", cityAccess: "Similar walk to Via Roma and Castello elevator" },
  { name: "Outer port berths", quay: "Porto di Cagliari commercial zone", usedBy: "Occasional assignments requiring bus transfer", cityAccess: "Shuttle or taxi to historic centre (~15 min)" },
];

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideSections: PortGuideSection[] = [
  {
    heading: "Where cruise ships dock in Cagliari",
    paragraphs: [
      "Cagliari is Sardinia's capital and the main cruise gateway to Southern Sardinia — a hilltop city above the Gulf of Angels with Nuragic heritage, Roman ruins, flamingo lagoons and some of the Mediterranean's finest beaches within an hour. Most vessels berth at Stazione Marittima on the waterfront, putting the Castello district, Bastione di Saint Remy and Via Roma shopping within a 20–30 minute walk or a short taxi ride.",
      "This geography defines Cagliari as more than a generic Mediterranean port: you can explore 3,000 years of history on foot in the morning, see pink flamingos at Molentargius after lunch, or board a coach for Nora's Roman theatre and Su Nuraxi's UNESCO nuraghe when your port window allows.",
    ],
  },
  {
    heading: "Getting from the port to Castello and beyond",
    paragraphs: [
      "For city exploration, walking or the Castello elevator from Via Roma is often the best option. From Stazione Marittima, follow the waterfront toward Largo Carlo Felice, then climb into Castello on foot or use the public elevator to the Bastione di Saint Remy terrace. Taxis wait at the terminal for Nora, Barumini, Molentargius and Gulf of Angels boat departures.",
      "CTM buses connect the port to Poetto beach (lines PF/PQ) and Molentargius. For Nora (~45 min each way), Su Nuraxi di Barumini (~1 hour) or Gulf of Angels boat tours, pre-booked excursions or private transfers are strongly recommended — they track your ship's all-aboard time.",
      "Do not assume every berth is equally walkable. Confirm your terminal assignment on arrival; outer port berths may require a shuttle or taxi to Castello.",
    ],
  },
  {
    heading: "Facilities and practicalities",
    paragraphs: [
      "The euro is the local currency. Italian is the main language; English is common on organised tours and in central tourist areas. ATMs and cafés are on Via Roma and in Castello; plan ahead for inland wine-country trips.",
      "Cagliari is a safe, relaxed city, but use normal precautions in busy markets and on crowded port days. Download offline maps before leaving the ship — mobile signal can be patchy near the terminal.",
      "Summer calls can be hot; spring and autumn are ideal for walking Castello's inclines. The Gulf of Angels breeze cools the waterfront even in July.",
    ],
  },
  {
    heading: "Return-to-ship timing",
    paragraphs: [
      "Confirm your all-aboard time (usually 30–60 minutes before departure) and work backwards. Castello walks need 45–60 minutes return buffer. Nora and Molentargius need 60–75 minutes. Su Nuraxi di Barumini should only be attempted on long port days with a reputable operator.",
      "Traffic on SS195 toward Pula can slow afternoon returns, especially on multi-ship days. If you book independently, choose operators that track ship schedules. Ship-run excursions guarantee the vessel waits; independent passengers must manage their own timing.",
    ],
  },
];

export const portGuideFaqs: FAQ[] = [
  { question: "How far is Cagliari Castello from the cruise terminal?", answer: "About 20–30 minutes on foot from Stazione Marittima to the Bastione di Saint Remy and cathedral. The Castello elevator from Via Roma saves uphill walking." },
  { question: "Can I walk to Nora from the cruise port?", answer: "No — Nora is roughly 45 minutes by road at Pula, south of Cagliari. It requires a half-day or full-day excursion." },
  { question: "Is there a shuttle from the Cagliari cruise terminal?", answer: "Some cruise lines offer their own shuttles, especially from outer berths. Castello is walkable from most central berths — check your terminal assignment on arrival." },
  { question: "How much time do I need to get back to my ship?", answer: "Allow 45–60 minutes buffer for city walks, 60–75 minutes for Nora or Molentargius, and only attempt Su Nuraxi on port days with 8+ usable hours ashore." },
];
