import Image from 'next/image';
import Link from 'next/link';
import type { Film } from '@/lib/types';

const statusLabel: Record<Film['status'], string> = {
  announced: 'Announced',
  teaser: 'Teaser Live',
  upcoming: 'Upcoming',
  premiered: 'Premiered',
};

export default function FilmCard({ film }: { film: Film }) {
  const date = new Date(film.premiere_at);
  const formatted = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link
      href={`/launches/${film.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-md border border-white/5 bg-marquee transition-transform duration-300 hover:-translate-y-1 hover:border-klieg/30"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-stage">
        {film.poster_path && (
          <Image
            src={film.poster_path}
            alt={`${film.title} poster`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute left-3 top-3 rounded-full border border-klieg/40 bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-klieg backdrop-blur-sm">
          {statusLabel[film.status]}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-carbon">
          {film.genre} &middot; {formatted}
        </p>
        <h3 className="font-display text-xl leading-tight text-paper">{film.title}</h3>
        <p className="line-clamp-2 text-sm text-carbon">{film.logline}</p>
        <span className="mt-auto pt-2 font-mono text-[11px] uppercase tracking-widest text-klieg opacity-0 transition-opacity group-hover:opacity-100">
          View the launch &rarr;
        </span>
      </div>
    </Link>
  );
}
