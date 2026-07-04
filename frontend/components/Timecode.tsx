'use client';

import { useEffect, useState } from 'react';

function pad(n: number, len = 2) {
  return n.toString().padStart(len, '0');
}

/**
 * Klieg House's signature UI element.
 * Film prints carry a burnt-in timecode (HH:MM:SS:FF) in the corner of every frame.
 * This is that timecode, alive, counting the frames of your visit the way a
 * projectionist would count a reel — a small reminder you're at a screening,
 * not a webpage.
 */
export default function Timecode() {
  const [time, setTime] = useState<{ h: number; m: number; s: number; f: number }>({
    h: 0,
    m: 0,
    s: 0,
    f: 0,
  });

  useEffect(() => {
    const start = performance.now();
    let raf: number;

    const tick = () => {
      const elapsedMs = performance.now() - start;
      const totalFrames = Math.floor(elapsedMs / (1000 / 24)); // 24fps, cinema standard
      const f = totalFrames % 24;
      const totalSeconds = Math.floor(totalFrames / 24);
      const s = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const m = totalMinutes % 60;
      const h = Math.floor(totalMinutes / 60);
      setTime({ h, m, s, f });
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-4 right-4 z-40 select-none rounded-sm border border-klieg/20 bg-ink/70 px-2.5 py-1 font-mono text-[11px] tracking-widest text-klieg/70 backdrop-blur-sm sm:bottom-6 sm:right-6"
    >
      REEL&nbsp;01 &middot; {pad(time.h)}:{pad(time.m)}:{pad(time.s)}:{pad(time.f)}
    </div>
  );
}
