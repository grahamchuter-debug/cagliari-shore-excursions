import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold">Cagliari Shore Excursions</div>
            <p className="mt-3 text-sm text-coastal-100/70 leading-relaxed">The Southern Sardinia cruise planning authority — shore excursions, port guidance, Nora archaeology, flamingo wetlands, Gulf of Angels boat tours and return-to-ship confidence for Cagliari cruise passengers.</p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/cruise-planner" className="hover:text-white">Cruise Planner</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/one-day-in-cagliari-from-a-cruise-ship" className="hover:text-white">One Day in Cagliari</Link></li>
              <li><Link href="/ship-schedules" className="hover:text-white">Ship Schedules</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Sardinia guides</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/nora-archaeological-site" className="hover:text-white">Nora Archaeological Site</Link></li>
              <li><Link href="/cagliari-old-town-walking-guide" className="hover:text-white">Old Town Walking Guide</Link></li>
              <li><Link href="/molentargius-flamingo-park" className="hover:text-white">Flamingo Park</Link></li>
              <li><Link href="/cruise-port-guide" className="hover:text-white">Cruise Port Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Boat, food &amp; wine</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/gulf-of-angels-boat-tours" className="hover:text-white">Gulf of Angels Boat Tours</Link></li>
              <li><Link href="/sardinian-food-guide" className="hover:text-white">Sardinian Food Guide</Link></li>
              <li><Link href="/independent-vs-cruise-line-excursions" className="hover:text-white">Independent vs Ship Tours</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Enquire</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/image-credits" className="hover:text-white">Photo credits</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent Cagliari cruise planning resource — not affiliated with any cruise line or the Port of Cagliari.
      </div>
    </footer>
  );
}
