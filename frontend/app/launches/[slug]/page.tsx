import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Countdown from '@/components/Countdown';
import NewsletterForm from '@/components/NewsletterForm';
import { getFilm } from '@/lib/api';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const film = await getFilm(params.slug);
    return { title: `${film.title} — Klieg House` };
  } catch {
    return { title: 'Film not found — Klieg House' };
  }
}

export default async function FilmDetailPage({ params }: Props) {
  let film;
  try {
    film = await getFilm(params.slug);
  } catch {
    notFound();
  }

  const date = new Date(film.premiere_at);
  const formatted = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article>
      <section className="relative overflow-hidden border-b border-white/5 bg-marquee">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[280px,1fr] lg:gap-14 lg:py-24">
          <div className="relative mx-auto aspect-[2/3] w-56 overflow-hidden rounded-md border border-white/10 shadow-2xl shadow-black/50 lg:mx-0 lg:w-full">
            {film.poster_path && (
              <Image src={film.poster_path} alt={`${film.title} poster`} fill className="object-cover" priority />
            )}
          </div>

          <div>
            <Link href="/launches" className="font-mono text-xs uppercase tracking-widest text-carbon hover:text-klieg">
              &larr; All launches
            </Link>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-klieg">{film.genre}</p>
            <h1 className="mt-2 font-display text-4xl leading-tight text-paper sm:text-5xl">{film.title}</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-carbon">{film.logline}</p>

            <dl className="mt-8 grid grid-cols-2 gap-6 font-mono text-xs uppercase tracking-widest text-carbon sm:grid-cols-3">
              <div>
                <dt className="text-klieg/80">Premiere</dt>
                <dd className="mt-1 normal-case tracking-normal text-paper">{formatted}</dd>
              </div>
              <div>
                <dt className="text-klieg/80">Venue</dt>
                <dd className="mt-1 normal-case tracking-normal text-paper">{film.premiere_venue ?? 'TBA'}</dd>
              </div>
              {film.runtime_minutes && (
                <div>
                  <dt className="text-klieg/80">Runtime</dt>
                  <dd className="mt-1 normal-case tracking-normal text-paper">{film.runtime_minutes} min</dd>
                </div>
              )}
            </dl>

            <div className="mt-8">
              <Countdown target={film.premiere_at} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[1fr,320px] lg:py-24">
        <div>
          <h2 className="font-display text-2xl text-paper">Synopsis</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-carbon">{film.synopsis}</p>

          {film.trailer_url ? (
            <div className="mt-10">
              <h2 className="font-display text-2xl text-paper">Teaser</h2>
              <video
                controls
                preload="none"
                poster={film.poster_path ?? undefined}
                className="mt-4 aspect-video w-full max-w-2xl rounded-md border border-white/10 bg-black"
              >
                <source src={film.trailer_url} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="mt-10">
              <h2 className="font-display text-2xl text-paper">Teaser</h2>
              <p className="mt-4 max-w-md rounded-md border border-white/10 bg-stage p-5 font-mono text-xs uppercase tracking-widest text-carbon">
                Teaser has not dropped yet join the list below to be first to see it.
              </p>
            </div>
          )}
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-klieg">Director</h2>
            <p className="mt-2 font-display text-xl text-paper">{film.director}</p>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-klieg">Cast</h2>
            <ul className="mt-2 space-y-1 text-sm text-carbon">
              {film.cast.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-white/5 bg-marquee p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-klieg">Get updates on {film.title}</p>
            <div className="mt-4">
              <NewsletterForm source="newsletter" />
            </div>
          </div>
        </aside>
      </section>
    </article>
  );
}

