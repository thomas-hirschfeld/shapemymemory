'use client';

import { useEffect, useState } from 'react';

const IMAGES = [
  '/hero/Screenshot 2025-08-31 at 2.47.36 PM.png',
  '/hero/Screenshot 2025-10-05 at 4.20.45 PM.png',

];

const DURATION = 10000; // 10 seconds per image

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = () => setIdx((i) => (i + 1) % IMAGES.length);
  const goPrev = () => setIdx((i) => (i - 1 + IMAGES.length) % IMAGES.length);

  // auto-rotate with pause
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % IMAGES.length), DURATION);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <section id="how" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-8 md:grid-cols-2 items-center">
        {/* Left: headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            3D-Printed <span className="text-[var(--color-lavender)]">Memories</span>
          </h1>
          <p className="text-lg text-[var(--color-mute)]">
            Scan with iPhone LiDAR. Preview. Personalize. We print and ship with care.
          </p>
          <div className="flex gap-3">
            <a
              href="#scan"
              className="px-5 py-3 rounded-lg text-white"
              style={{ backgroundColor: 'var(--color-lavender)' }}
            >
              Start Scan
            </a>
            <a
              href="#shop"
              className="px-5 py-3 rounded-lg border"
              style={{ borderColor: 'var(--color-softgray)' }}
            >
              Browse Styles
            </a>
          </div>
        </div>

        {/* Right: rotating image */}
        <div
          className="relative aspect-[4/3] rounded-xl overflow-hidden"
          style={{ backgroundColor: 'var(--color-softgray)' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Example memory"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === idx ? 'opacity-100' : 'opacity-0'
              }`}
              draggable={false}
            />
          ))}

          {/* Prev/Next buttons */}
          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold shadow-md"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold shadow-md"
          >
            ›
          </button>

          {/* Dot indicators */}
          <div className="pointer-events-auto absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-2 py-1 shadow-md">
              {IMAGES.map((_, i) => {
                const active = i === idx;
                return (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIdx(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      active
                        ? 'w-6 bg-[var(--color-lavender)]'
                        : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}