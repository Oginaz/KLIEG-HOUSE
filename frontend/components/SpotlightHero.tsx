import Link from 'next/link';

export default function SpotlightHero() {
  return (
    <section className="relative isolate flex min-h-[92vh] flex-col justify-end overflow-hidden bg-ink px-6 pb-16 pt-32 sm:px-10">
      {/* Ambient stage glow */}
      <div className="pointer-events-none absolute inset-0 bg-spotlight" />

      {/* Klieg-light sweep — two searchlight beams crossing on load, then settling */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="klieg-sweep absolute -top-20 left-0 h-[140%] w-24 origin-top bg-gradient-to-b from-klieg/25 via-klieg/5 to-transparent blur-md" />
        <div
          className="klieg-sweep absolute -top-20 left-0 h-[140%] w-16 origin-top bg-gradient-to-b from-klieg/20 via-klieg/5 to-transparent blur-md"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6">
        <p className="rise-in font-mono text-xs uppercase tracking-marquee text-klieg" style={{ animationDelay: '0.9s' }}>
          A film-launch house &middot; Est. Vipingo
        </p>
        <h1
          className="rise-in max-w-4xl font-display text-5xl leading-[1.05] text-paper sm:text-6xl md:text-7xl"
          style={{ animationDelay: '1.05s' }}
        >
          Every film deserves
          <br /> one perfect first night.
        </h1>
        <p
          className="rise-in max-w-xl text-base leading-relaxed text-carbon sm:text-lg"
          style={{ animationDelay: '1.2s' }}
        >
          Klieg House builds the premieres, the teaser drops, and the countdown to opening
          night for films that deserve to be an event, not a release date.
        </p>
        <div
          className="rise-in mt-2 flex flex-wrap gap-4"
          style={{ animationDelay: '1.35s' }}
        >
          <Link
            href="/launches"
            className="rounded-full bg-klieg px-7 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
          >
            See what&rsquo;s launching
          </Link>
          <Link
            href="/company"
            className="rounded-full border border-white/15 px-7 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-klieg hover:text-klieg"
          >
            Meet the house
          </Link>
        </div>
      </div>
    </section>
  );
}
