import NewsletterForm from '@/components/NewsletterForm';

export const metadata = { title: 'The Company — Klieg House' };

const services = [
  {
    title: 'Premieres',
    copy: 'End-to-end red carpet production: venue, run of show, seating politics, and the walk itself. We have run premieres in four-hundred-seat revival houses and airport hangars, and we plan both the same way — around the twelve minutes before the lights go down.',
  },
  {
    title: 'Campaigns',
    copy: 'Teaser drops, countdown sequences, and a release calendar that treats a film like a live event with a start time, not a product with a shelf date. We build the anticipation on purpose, in public, on a schedule.',
  },
  {
    title: 'Press',
    copy: 'Junkets, embargo strategy, and a house style for how a film is first described in the world. We write the first sentence a critic reads about your film before we let anyone else write it for you.',
  },
];

const timeline = [
  { year: '2016', copy: 'Founded by three former studio publicists who thought premieres had gotten boring.' },
  { year: '2019', copy: 'Ran our first simultaneous four-city launch for an independent feature with no studio backing.' },
  { year: '2023', copy: 'Opened the Lisbon office to run European premieres without flying the whole show across an ocean.' },
  { year: '2026', copy: 'Currently building five launches at once, from teaser to red carpet.' },
];

export default function CompanyPage() {
  return (
    <div>
      <section className="border-b border-white/5 bg-marquee px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-widest text-klieg">The company</p>
          <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">
            A studio-adjacent house that only does one night — opening night.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-carbon">
            Klieg House is a film-launch company. We don&rsquo;t finance films and we don&rsquo;t
            distribute them — we build the moment a film meets its first audience, and everything
            that makes that audience show up ready to talk about it the next morning.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <h2 className="font-display text-2xl text-paper">What we do</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-md border border-white/5 bg-marquee p-6">
              <h3 className="font-display text-xl text-paper">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-carbon">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-marquee px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl text-paper">How we got here</h2>
          <ul className="mt-8 space-y-6 border-l border-white/10 pl-6">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-klieg" />
                <p className="font-mono text-xs uppercase tracking-widest text-klieg">{t.year}</p>
                <p className="mt-1 text-sm leading-relaxed text-carbon">{t.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20 text-center sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-klieg">Work with us</p>
        <h2 className="mt-2 font-display text-3xl text-paper">Launching a film? Let&rsquo;s talk.</h2>
        <p className="mt-3 text-sm leading-relaxed text-carbon">
          Tell us about the film and the date you&rsquo;re building toward. We reply from a person, not a form.
        </p>
        <div className="mt-8 text-left">
          <NewsletterForm source="contact" showMessageField />
        </div>
      </section>
    </div>
  );
}
