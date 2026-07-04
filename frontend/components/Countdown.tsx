'use client';

import { useEffect, useState } from 'react';

function getRemaining(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);
  return { days, hours, minutes, seconds, past: diff <= 0 };
}

export default function Countdown({ target }: { target: string }) {
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (remaining.past) {
    return (
      <p className="font-mono text-xs uppercase tracking-widest text-klieg">
        Now premiering
      </p>
    );
  }

  const units: [number, string][] = [
    [remaining.days, 'Days'],
    [remaining.hours, 'Hrs'],
    [remaining.minutes, 'Min'],
    [remaining.seconds, 'Sec'],
  ];

  return (
    <div className="flex gap-4">
      {units.map(([value, label]) => (
        <div key={label} className="text-center">
          <p className="font-mono text-2xl text-klieg tabular-nums">{String(value).padStart(2, '0')}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-carbon">{label}</p>
        </div>
      ))}
    </div>
  );
}
