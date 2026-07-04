import FilmCard from '@/components/FilmCard';
import { getFilms } from '@/lib/api';

export const metadata = { title: 'Upcoming Launches — Klieg House' };
export const dynamic = 'force-dynamic';

export default async function LaunchesPage() {
  const films = await getFilms();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-klieg">The slate</p>
      <h1 className="mt-2 max-w-2xl font-display text-4xl text-paper sm:text-5xl">Upcoming Launches</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-carbon">
        Every film Klieg House is currently building toward opening night, from first
        announcement to the red carpet itself.
      </p>

      {films.length === 0 ? (
        <p className="mt-16 font-mono text-sm text-carbon">
          Nothing on the slate yet — check back after the next drop.
        </p>
      ) : (
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      )}
    </div>
  );
}
