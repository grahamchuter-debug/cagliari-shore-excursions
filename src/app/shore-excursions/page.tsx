import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { excursionsHubImage, getExcursionImage } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Cagliari Shore Excursions",
  description:
    "Premium Cagliari shore excursions for cruise passengers — city highlights, Nora archaeology, flamingo nature tours, Gulf of Angels boat trips, Sardinian food and wine, sailing and private South Sardinia tours.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: ["Cagliari cruise excursions", "Nora from Cagliari cruise port", "flamingo tour Cagliari", "Gulf of Angels boat tour"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Shore Excursions", path: "/shore-excursions" },
];

const AVAILABILITY_BADGES = {
  "coming-soon": { label: "Coming soon", className: "pill bg-coastal-100" },
  "register-interest": { label: "Register interest", className: "pill-accent" },
  available: { label: "Available", className: "pill bg-coastal-800 text-white" },
};

export default function ShoreExcursionsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Cagliari Shore Excursions", description: "Premium Cagliari shore excursions for cruise passengers.", path: "/shore-excursions" })]} />
      <PhotoHeroBand
        image={excursionsHubImage}
        eyebrow="Southern Sardinia tours"
        title="Cagliari Shore Excursions"
        subtitle="Premium, passenger-first tours built around your Cagliari port day — Castello highlights, Nora archaeology, flamingo wetlands, Gulf of Angels boat tours and Sardinian food and wine, with reliable return-to-ship timing."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mb-10 card-feature max-w-3xl">
            <p className="text-sm text-gray-700 leading-relaxed">
              Direct, shared and private tours are launching soon. Browse excursion options below and <Link href="/enquire" className="font-semibold text-coastal-700 hover:underline">register your interest</Link> — we will notify you when bookable tours go live, including exclusive tours, wildlife tours, food tours, wine tours and sailing experiences.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursions.map((e) => {
              const image = getExcursionImage(e.slug);
              const badge = e.availability ? AVAILABILITY_BADGES[e.availability] : AVAILABILITY_BADGES["register-interest"];
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent" aria-hidden="true" />
                    <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{e.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">{e.duration} · {e.pace}</p>
                    <span className={`mt-2 inline-block ${badge.className}`}>{badge.label}</span>
                    <p className="mt-2 text-xs text-gray-500">Best for: {e.bestFor}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
