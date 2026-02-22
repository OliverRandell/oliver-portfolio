import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Oliver Randell
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
            <Link href="/about" className="hover:text-neutral-900 transition">
              About
            </Link>
            <Link href="/case-studies" className="hover:text-neutral-900 transition">
              Case Studies
            </Link>
            <Link href="/contact" className="hover:text-neutral-900 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}