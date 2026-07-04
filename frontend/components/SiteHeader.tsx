import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl tracking-[0.2em] text-paper">KLIEG</span>
          <span className="font-mono text-[10px] tracking-marquee text-klieg/80 group-hover:text-klieg">
            HOUSE
          </span>
        </Link>
        <nav className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-carbon">
          <Link href="/launches" className="transition-colors hover:text-klieg">
            Launches
          </Link>
          <Link href="/company" className="transition-colors hover:text-klieg">
            Company
          </Link>
          <Link
            href="/#stay-in-the-loop"
            className="rounded-full border border-klieg/40 px-4 py-2 text-klieg transition-colors hover:bg-klieg hover:text-ink"
          >
            Stay in the loop
          </Link>
        </nav>
      </div>
    </header>
  );
}
