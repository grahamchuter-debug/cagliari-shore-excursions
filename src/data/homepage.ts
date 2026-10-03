import type { FAQ, VisitorType } from "./types";

export const visitorTypes: VisitorType[] = [
  {
    id: "first-time",
    label: "First time in Cagliari on a cruise",
    shortLabel: "First visit",
    description: "Choose between historic Castello on foot, Nora archaeology or a Gulf of Angels boat day — we help you pick the right first experience.",
    href: "/best-things-to-do-in-cagliari-from-a-cruise-ship",
    cta: "See first-timer picks",
  },
  {
    id: "nature",
    label: "Here for wildlife and coastline",
    shortLabel: "Nature & coast",
    description: "Flamingos at Molentargius, Gulf of Angels boat tours, snorkelling coves and Poetto beach — Southern Sardinia's wild side.",
    href: "/best-cagliari-excursions-for-nature-lovers",
    cta: "Nature guides",
  },
  {
    id: "food-wine",
    label: "Here for Sardinian food and wine",
    shortLabel: "Food & wine",
    description: "Mercato San Benedetto, Cannonau and Vermentino tastings, and authentic Sardinian flavours from the cruise port.",
    href: "/sardinian-food-guide",
    cta: "Food & wine guides",
  },
  {
    id: "history",
    label: "I want archaeology and history",
    shortLabel: "History",
    description: "Nora's Roman ruins, Su Nuraxi nuraghe, Castello quarter and Punic heritage — Southern Sardinia's ancient layers.",
    href: "/best-cagliari-excursions-for-history-lovers",
    cta: "History guides",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  { slug: "shore-excursions", number: "01", title: "Shore Excursions", description: "Premium, cruise-timed tours of Cagliari, Nora, flamingo wetlands, Gulf of Angels boat trips and Sardinian food and wine.", href: "/shore-excursions", cta: "Browse excursions" },
  { slug: "cruise-port-guide", number: "02", title: "Cagliari Cruise Port Guide", description: "Where ships dock at Stazione Marittima, walking distances to Castello, taxi options and return-to-ship timing.", href: "/cruise-port-guide", cta: "Read the guide" },
  { slug: "one-day", number: "03", title: "One Day in Cagliari", description: "Realistic port-day itineraries — historic Cagliari, Nora, flamingos, boat tours or beach escape matched to your hours.", href: "/one-day-in-cagliari-from-a-cruise-ship", cta: "See day plans" },
  { slug: "nora", number: "04", title: "Nora from the Port", description: "Drive times, what fits your port window and how to visit Sardinia's greatest coastal archaeology with confidence.", href: "/nora-archaeological-site", cta: "Nora guide" },
  { slug: "food", number: "05", title: "Sardinian Food & Wine", description: "Markets, regional specialities, Cannonau tastings and why Cagliari is one of the Mediterranean's great culinary ports.", href: "/sardinian-food-guide", cta: "Food guide" },
  { slug: "ship-schedules", number: "06", title: "Cruise Ship Schedules", description: "See which ships are scheduled at Cagliari before you book excursions or day trips.", href: "/ship-schedules", cta: "Check schedules" },
  { slug: "cruise-planner", number: "07", title: "Cagliari Cruise Planner", description: "Enter your ship times and interests — get tailored excursion ideas with return-to-ship confidence.", href: "/cruise-planner", cta: "Start planning" },
  { slug: "compare", number: "08", title: "Independent vs Ship Excursions", description: "Compare cruise-line tours with independent options — flexibility, value and timing.", href: "/independent-vs-cruise-line-excursions", cta: "Compare options" },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Where do cruise ships dock in Cagliari?",
      answer:
        "Most ships berth at Stazione Marittima on the waterfront south of the historic centre, with Castello and the Bastione di Saint Remy reachable on foot in 20–30 minutes. See our Cagliari Cruise Port Guide for terminal details and realistic walking times.",
    },
    {
      question: "Should I stay in Cagliari or visit Nora on a port day?",
      answer:
        "It depends on your hours ashore and interests. Nora needs roughly 45 minutes each way plus 2–3 hours at the site — ideal on standard or long calls. Historic Cagliari is walkable and rewarding for shorter calls. Our planner helps you choose.",
    },
    {
      question: "Can I see flamingos from the Cagliari cruise port?",
      answer:
        "Yes. Parco Molentargius-Saline lies between the city and Poetto beach, with pink flamingos visible year-round. It is one of the easiest wildlife experiences from Stazione Marittima — see our Molentargius Flamingo Park guide.",
    },
    {
      question: "How much time do I need to get back to my ship?",
      answer:
        "Allow 45–60 minutes buffer for Castello walks, 60–75 minutes for Nora or Molentargius, and only attempt Su Nuraxi di Barumini on port days with 8+ usable hours ashore. Always confirm all-aboard with your cruise line.",
    },
    {
      question: "Should I book a cruise-line excursion or go independent in Cagliari?",
      answer:
        "Ship excursions guarantee the vessel waits if you're delayed. Independent tours often offer smaller groups, better food focus and more flexibility — but you must respect all-aboard times. See our Independent vs Cruise Line Excursions guide.",
    },
  ];
}
