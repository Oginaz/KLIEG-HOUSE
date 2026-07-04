import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-[0.2em] text-paper">KLIEG HOUSE</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-carbon">
              We don&rsquo;t distribute films. We give them a first night worth remembering.
            </p>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-carbon">
            <p className="mb-3 text-klieg/80">Navigate</p>
            <ul className="space-y-2">
              <li><Link href="/launches" className="hover:text-klieg">Upcoming Launches</Link></li>
              <li><Link href="/company" className="hover:text-klieg">The Company</Link></li>
              <li><Link href="/#stay-in-the-loop" className="hover:text-klieg">Stay in the Loop</Link></li>
            </ul>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-carbon">
            <p className="mb-3 text-klieg/80">Reach us</p>
            <ul className="space-y-2">
              <li>hello@kliegh.house</li>
              <li>+254 (758) 924-951</li>
              <li>Vipingo &middot; Kilifi &middot; Kenya</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 font-mono text-[10px] tracking-widest text-carbon/60">
          &copy; {new Date().getFullYear()} KLIEG HOUSE. All premieres fictional, all standing ovations earned.
        </p>
      </div>
    </footer>
  );
}
