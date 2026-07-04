import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-klieg">Reel missing</p>
      <h1 className="mt-3 font-display text-4xl text-paper">This screening isn&rsquo;t on the schedule.</h1>
      <p className="mt-3 text-sm text-carbon">
        The film or page you&rsquo;re looking for isn&rsquo;t in the current slate.
      </p>
      <Link
        href="/launches"
        className="mt-8 rounded-full bg-klieg px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink"
      >
        See what&rsquo;s launching
      </Link>
    </div>
  );
}
