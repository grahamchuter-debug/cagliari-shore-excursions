import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import cagliariSchedule from "./imported-schedules/cagliari.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are the Cagliari cruise ship schedules?",
    answer:
      "Schedules are compiled from published cruise timetables and updated periodically. Times, berths and dates can change — always confirm your arrival and departure with your cruise line before booking shore excursions.",
  },
  {
    question: "Where do ships dock when they call at Cagliari?",
    answer:
      "Most vessels berth at Stazione Marittima on the waterfront, within walking distance of Castello. See our Cagliari Cruise Port Guide for details.",
  },
  {
    question: "When is Cagliari cruise season?",
    answer:
      "Cagliari sees most cruise calls from April through October, with peak traffic in May, June, September and October. Winter calls occur but are less frequent.",
  },
];

const SCHEDULE_TIPS = [
  "Check how many ships share your port day before booking Nora or Barumini coach tours",
  "Confirm your berth — most calls are walkable to Castello from Stazione Marittima",
  "Book Gulf of Angels boat tours and inland archaeology early on multi-ship days",
  "Compare your hours ashore before choosing between city walks and Su Nuraxi day trips",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "cagliari",
    name: "Cagliari",
    country: "Italy",
    seoTitle: "Cagliari Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "Cagliari cruise ship schedule hub. See which ships are in port and plan Nora, Molentargius, Gulf of Angels and Cagliari shore excursions around published arrival and departure times.",
    intro:
      "Cagliari is Sardinia's main cruise port with ships berthing at Stazione Marittima. Check which vessels are scheduled before you book shore excursions, Nora archaeology tours or Gulf of Angels boat trips.",
    description: "Southern Sardinia's cruise gateway — ships dock on the waterfront with Castello within walking distance.",
    scheduleOverview:
      "Cagliari sees seasonal cruise traffic from April through October, with calls from Mediterranean and repositioning itineraries.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  cagliari: cagliariSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(slug: string): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
