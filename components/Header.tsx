"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-(--container-content) items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-serif text-[40px] font-normal leading-none tracking-[-0.04em] text-ink"
          onClick={() => setOpen(false)}
        >
          or.
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 text-[13px] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium uppercase tracking-[0.08em] transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-accent"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          aria-label="Primary mobile"
          className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-sm px-2 py-2.5 text-sm uppercase tracking-[0.08em] ${
                isActive(link.href) ? "text-accent" : "text-ink-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
