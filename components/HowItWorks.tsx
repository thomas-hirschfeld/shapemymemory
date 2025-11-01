'use client';

const STEPS = [
  {
    id: 1,
    title: 'Scan with iPhone LiDAR',
    desc: 'Use our App Clip to capture a quick 3D scan of your hand, foot, or head.',
    icon: '📱',
  },
  {
    id: 2,
    title: 'Review & personalize',
    desc: 'Preview the model, choose a finish, add engraving, and confirm size.',
    icon: '✨',
  },
  {
    id: 3,
    title: 'We 3D print & ship',
    desc: 'Printed with care and inspected by hand. Delivered to your door.',
    icon: '📦',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold mb-8">How it works</h2>

      {/* Steps */}
      <ol className="grid gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <li
            key={s.id}
            className="rounded-xl border p-5"
            style={{ borderColor: 'var(--color-softgray)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'var(--color-warmbeige)' }}
                aria-hidden
              >
                {s.icon}
              </div>
              <div className="text-sm text-[var(--color-mute)]">Step {i + 1}</div>
            </div>
            <h3 className="font-medium mb-2">{s.title}</h3>
            <p className="text-[var(--color-mute)]">{s.desc}</p>
          </li>
        ))}
      </ol>

      {/* CTA banner */}
      <div
        className="mt-10 rounded-xl p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        style={{ backgroundColor: 'var(--color-softgray)' }}
      >
        <div>
          <h4 className="font-medium">Ready to capture a memory?</h4>
          <p className="text-[var(--color-mute)]">
            Open the scanner on iPhone and start your 3D capture in seconds.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://scan.shapemymemory.com/scan?sku=HAND"
            className="px-5 py-3 rounded-lg text-white"
            style={{ backgroundColor: 'var(--color-lavender)' }}
          >
            Open iPhone Scanner
          </a>
          <a
            href="#shop"
            className="px-5 py-3 rounded-lg border"
            style={{ borderColor: 'var(--color-softgray)' }}
          >
            Browse styles
          </a>
        </div>
      </div>
    </section>
  );
}