export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--color-softgray)] mt-16"
      style={{ backgroundColor: 'var(--color-softgray)' }}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 text-sm">
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div
              className="h-5 w-5 rounded-full"
              style={{ backgroundColor: 'var(--color-lavender)' }}
            />
            <span className="font-medium">
              Shape<span className="text-[var(--color-lavender)]">My</span>Memory
            </span>
          </div>
          <p className="text-[var(--color-mute)]">
            Meaningful 3D printed keepsakes — captured straight from your iPhone.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="space-y-2">
          <h4 className="font-medium mb-2">Explore</h4>
          <ul className="space-y-1 text-[var(--color-mute)]">
            <li><a href="#how" className="hover:text-[var(--color-ink)]">How it works</a></li>
            <li><a href="#shop" className="hover:text-[var(--color-ink)]">Shop</a></li>
            <li><a href="#scan" className="hover:text-[var(--color-ink)]">Start Scan</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-2">
          <h4 className="font-medium mb-2">Contact</h4>
          <p className="text-[var(--color-mute)]">design@shapemymemory.com</p>
          <p className="text-[var(--color-mute)]"> {new Date().getFullYear()} ShapeMyMemory</p>
        </div>
      </div>
    </footer>
  );
}