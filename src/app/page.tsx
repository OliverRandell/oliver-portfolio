import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";

export default async function HomePage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="max-w-3xl">
          <p className="text-sm text-neutral-500">
            Senior Product Manager • Onboarding & Growth
          </p>

          <h1 className="mt-4 text-4xl leading-tight md:text-6xl md:leading-[1.05] font-semibold">
            I build onboarding that converts,
            <br className="hidden md:block" /> and growth loops that stick.
          </h1>

          <p className="mt-6 text-lg text-neutral-600 md:text-xl">
            I help product-led SaaS teams improve activation, retention and
            revenue by turning messy journeys into clear systems: lifecycle
            messaging, UX improvements, experimentation, and operational rigor.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
            >
              View case studies
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:border-neutral-400 transition"
            >
              Contact
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 p-4">
              <p className="text-sm text-neutral-500">Strength</p>
              <p className="mt-1 font-medium">Activation & onboarding</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-4">
              <p className="text-sm text-neutral-500">Style</p>
              <p className="mt-1 font-medium">Calm delivery, high clarity</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-4">
              <p className="text-sm text-neutral-500">Output</p>
              <p className="mt-1 font-medium">Shipped systems, not slides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Case studies</h2>
            <p className="mt-2 text-neutral-600">
              A few recent projects showing how I think, lead, and deliver.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="hidden sm:inline-flex text-sm text-neutral-700 hover:text-neutral-900 underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {caseStudies.slice(0, 4).map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group rounded-3xl border border-neutral-200 p-6 hover:border-neutral-400 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-neutral-500">{cs.year}</p>
                <p className="text-sm text-neutral-500">{cs.brand}</p>
              </div>

              <h3 className="mt-4 text-xl md:text-2xl font-semibold">
                {cs.title}
              </h3>

              <p className="mt-3 text-neutral-600">{cs.summary}</p>

              <p className="mt-6 text-sm font-medium text-neutral-900">
                Read case study <span className="inline-block group-hover:translate-x-0.5 transition">→</span>
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/case-studies"
            className="inline-flex text-sm text-neutral-700 hover:text-neutral-900 underline underline-offset-4"
          >
            View all case studies
          </Link>
        </div>
      </section>

      {/* How I work */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="rounded-3xl border border-neutral-200 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold">How I work</h2>
          <p className="mt-3 text-neutral-600 max-w-3xl">
            I’m most useful when the problem is fuzzy, the stakes are real, and
            the team needs momentum without chaos.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-neutral-500">01</p>
              <p className="mt-2 font-medium">Diagnose the journey</p>
              <p className="mt-2 text-sm text-neutral-600">
                Where users drop, why, and what success looks like — with
                instrumentation and qualitative insight.
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">02</p>
              <p className="mt-2 font-medium">Ship the highest-leverage changes</p>
              <p className="mt-2 text-sm text-neutral-600">
                Messaging, UX, activation flows, lifecycle moments — focused on
                measurable movement.
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">03</p>
              <p className="mt-2 font-medium">Make it repeatable</p>
              <p className="mt-2 text-sm text-neutral-600">
                Playbooks, systems, and cadence so growth doesn’t depend on heroics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-neutral-900 px-8 py-10 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Want to chat about onboarding or growth?
            </h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              If you’re hiring a Senior PM or want help tightening activation,
              retention or lifecycle, I’m happy to talk.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90 transition"
          >
            Contact me
          </Link>
        </div>
      </section>
    </main>
  );
}