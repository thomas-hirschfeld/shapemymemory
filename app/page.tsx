import Hero from '@/components/Hero';
import ProductCards from '@/components/ProductCards';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="w-full border-b border-[var(--color-softgray)]">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full" style={{ backgroundColor: 'var(--color-lavender)' }} />
            <span className="text-lg font-semibold">
              Shape<span className="text-[var(--color-lavender)]">My</span>Memory
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-[var(--color-mute)]">
            <a href="#how" className="hover:text-[var(--color-ink)]">How it works</a>
            <a href="#gallery" className="hover:text-[var(--color-ink)]">Gallery</a>
            <a href="#shop" className="hover:text-[var(--color-ink)]">Shop</a>
          </nav>
          <a href="#scan" className="px-4 py-2 rounded-lg text-white"
             style={{ backgroundColor: 'var(--color-lavender)' }}>
            Start Scan
          </a>
        </div>
      </header>

      {/* Hero section */}
        <section className="w-full bg-[var(--color-warmbeige)] py-6">
          <Hero />
        </section>

      {/*How It Works Section */}
      <HowItWorks />

      {/* Product cards section */}
      <ProductCards />

      {/* Footer*/}
      <Footer />


    </main>

  );
}