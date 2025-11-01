'use client';

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  href: string;     // product detail or Shopify link (placeholder for now)
  sku: 'HAND' | 'FOOT' | 'HEAD';
};

const PRODUCTS: Product[] = [
  {
    id: 'hand',
    name: '3D Printed Hand',
    price: '$59',
    image: '/products/hand.jpg',
    href: '/shop/hand',
    sku: 'HAND',
  },
  {
    id: 'foot',
    name: '3D Printed Foot',
    price: '$59',
    image: '/products/foot.jpg',
    href: '/shop/foot',
    sku: 'FOOT',
  },
  {
    id: 'head',
    name: '3D Printed Head',
    price: '$79',
    image: '/products/head.jpg',
    href: '/shop/head',
    sku: 'HEAD',
  },
];

export default function ProductCards() {
  return (
    <section id="shop" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Shop Keepsakes</h2>
        <a href="#scan" className="text-sm underline text-[var(--color-lavender)]">
          Or jump straight to scanning →
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <article
            key={p.id}
            className="rounded-xl overflow-hidden border"
            style={{ borderColor: 'var(--color-softgray)' }}
          >
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            <div className="p-4 space-y-2">
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-[var(--color-mute)]">{p.price}</p>

              <div className="flex gap-3 pt-2">
                <a
                  href={p.href}
                  className="px-4 py-2 rounded-lg border text-sm"
                  style={{ borderColor: 'var(--color-softgray)' }}
                >
                  Details
                </a>
                <a
                  href={`https://scan.shapemymemory.com/scan?sku=${p.sku}`}
                  className="px-4 py-2 rounded-lg text-white text-sm"
                  style={{ backgroundColor: 'var(--color-lavender)' }}
                >
                  Scan & Buy
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}