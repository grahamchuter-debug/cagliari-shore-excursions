import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Cagliari Shore Excursions",
  description: "About Cagliari Shore Excursions — an independent Southern Sardinia cruise planning authority for passengers calling at the Cagliari cruise port.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Cagliari Shore Excursions", description: "About Cagliari Shore Excursions.", path })]} />
      <PageHero title="About Cagliari Shore Excursions" subtitle="An independent planning authority for cruise passengers discovering Southern Sardinia from Cagliari." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Cagliari. Ships berth at Stazione Marittima on the Gulf of Angels, and our goal is to help you choose the right experience — historic Castello on foot, Nora archaeology, flamingo wetlands, boat tours or Sardinian food and wine — based on your interests, previous visits and port window.
            </p>
            <p>
              We aim to be the definitive Cagliari cruise planning authority, not simply another excursion catalogue. We focus on practical decisions: whether Nora fits your hours ashore, how far Su Nuraxi really is, where to walk from the pier, and how nature lovers can discover authentic Sardinia beyond the usual city coach tour.
            </p>
            <p>
              Our guides are written for real cruise timings, not generic Sardinia tourism. We highlight realistic drive times, walking distances, return-to-ship buffers and honest advice on when a guided tour beats going it alone. Direct, shared and private tours are launching soon — register interest via our excursion pages or enquiry form.
            </p>
            <p>
              We are not affiliated with any cruise line or the Port of Cagliari. Ship schedules and travel times are indicative — always confirm all-aboard times with your cruise line.
            </p>
            <p>
              Have a question we haven&apos;t answered? <a href="/enquire">Get in touch</a> and we&apos;ll help you plan.
            </p>
          </div>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
