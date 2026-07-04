import Link from 'next/link';
import SpotlightHero from '@/components/SpotlightHero';
import FilmCard from '@/components/FilmCard';
import NewsletterForm from '@/components/NewsletterForm';
import Countdown from '@/components/Countdown';
import { getFilms } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const films = await getFilms();
  const featured = films.filter((f) => f.is_featured).slice(0, 2);
  const nextUp = films[0];

  return (
    <>
      <SpotlightHero />

      {nextUp && (
        <section className="border-y border-white/5 bg-marquee">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center sm:px-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-klieg">Next on the calendar</p>
              <p className="mt-1 font-display text-2xl text-paper">{nextUp.title}</p>
              <p className="text-sm text-carbon">{nextUp.premiere_venue}</p>
            </div>
            <Countdown target={nextUp.premiere_at} />
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-klieg">Featured</p>
            <h2 className="mt-2 font-display text-3xl text-paper sm:text-4xl">Currently in the spotlight</h2>
          </div>
          <Link
            href="/launches"
            className="font-mono text-xs uppercase tracking-widest text-carbon transition-colors hover:text-klieg"
          >
            All launches &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {featured.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-marquee">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[1fr,1.1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-klieg">What we do</p>
            <h2 className="mt-2 font-display text-3xl text-paper sm:text-4xl">
              We engineer the night a film is born.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-carbon">
              Klieg House runs premieres, teaser campaigns, and press days for studios and
              independent productions who want their launch to feel like the film already
              matters before anyone has seen a frame of it.
            </p>
            <Link
              href="/company"
              className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-klieg hover:opacity-80"
            >
              More on the company &rarr;
            </Link>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {[
              { term: 'Premieres', desc: 'Venue, red carpet, run of show, and the room reading the room in real time.' },
              { term: 'Campaigns', desc: 'Teaser drops, countdown sequences, and release-week pacing built around the film.' },
              { term: 'Press', desc: 'Junkets, embargoes, and a house style for how a film gets talked about first.' },
            ].map((service) => (
              <div key={service.term} className="rounded-md border border-white/5 bg-ink/40 p-5">
                <dt className="font-display text-lg text-paper">{service.term}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-carbon">{service.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="stay-in-the-loop" className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-klieg">Stay in the loop</p>
        <h2 className="mt-2 font-display text-3xl text-paper sm:text-4xl">
          Hear about a launch before the poster drops.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-carbon">
          One email, sent only when there&rsquo;s a premiere date, a teaser, or a ticket window worth knowing about.
        </p>
        <div className="mt-8">
          <NewsletterForm source="newsletter" />
        </div>
      </section>
    </>
  );
}
