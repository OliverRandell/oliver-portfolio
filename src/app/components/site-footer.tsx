import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <div className="text-sm text-white/80">© {year} Oliver Randell</div>
            <div className="flex gap-4 text-sm">
              <Link className="text-white/70 hover:text-white" href="#">
                Instagram
              </Link>
              <Link className="text-white/70 hover:text-white" href="#">
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-xs tracking-[0.16em] text-white/70 sm:grid-cols-1 sm:text-right">
            <Link className="hover:text-white" href="/about">
              ABOUT
            </Link>
            <Link className="hover:text-white" href="/case-studies">
              CASE STUDIES
            </Link>
            <Link className="hover:text-white" href="/experience">
              EXPERIENCE
            </Link>
            <Link className="hover:text-white" href="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}