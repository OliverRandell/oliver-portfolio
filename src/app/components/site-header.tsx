import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-medium tracking-tight text-black hover:opacity-80"
          aria-label="Home"
        >
          or<span className="text-black/60">.</span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-[0.16em] text-black/70 hover:text-black"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}