import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="text-xs font-medium tracking-[0.16em] text-black/50">
            OLIVER RANDELL
          </div>

          <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Senior Product Manager focused on onboarding & growth.
          </h1>

          <p className="max-w-prose text-pretty text-base leading-relaxed text-black/70">
            I help product-led teams improve activation, retention, and lifecycle
            performance through evidence-led strategy, crisp execution, and
            measurable iteration.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              View case studies →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-black hover:border-black/25"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Photo placeholder (swap later for real image) */}
        <div className="w-full">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/10 bg-neutral-100" />
          <p className="mt-3 text-xs text-black/50">
            Replace with your portrait image later.
          </p>
        </div>
      </section>

      {/* Quick links / sections preview */}
      <section className="grid gap-6 border-t border-black/10 pt-10 sm:grid-cols-3">
        <div className="space-y-2">
          <div className="text-xs font-medium tracking-[0.16em] text-black/50">
            CASE STUDIES
          </div>
          <p className="text-sm leading-relaxed text-black/70">
            Four projects covering onboarding, platform rebuild, and product
            delivery.
          </p>
          <Link className="text-sm font-medium hover:opacity-80" href="/case-studies">
            Explore →
          </Link>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-medium tracking-[0.16em] text-black/50">
            EXPERIENCE
          </div>
          <p className="text-sm leading-relaxed text-black/70">
            A concise timeline of roles, outcomes, and focus areas.
          </p>
          <Link className="text-sm font-medium hover:opacity-80" href="/experience">
            View timeline →
          </Link>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-medium tracking-[0.16em] text-black/50">
            CONTACT
          </div>
          <p className="text-sm leading-relaxed text-black/70">
            Reach out for roles, collaborations, or a quick chat.
          </p>
          <Link className="text-sm font-medium hover:opacity-80" href="/contact">
            Get in touch →
          </Link>
        </div>
      </section>
    </div>
  );
}