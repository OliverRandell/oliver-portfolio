import type { Metadata } from "next";
import Image from "next/image";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Former motorsport engineer, now a Senior Product Manager. Fifteen years moving between frontend development, UX and product leadership.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-(--container-content) gap-12 px-6 py-20 sm:px-8 sm:py-28 md:grid-cols-[1fr_18rem] md:items-start md:gap-16 lg:px-12">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h1 className="max-w-2xl font-serif text-3xl font-medium leading-[1.2] text-ink sm:text-4xl">
              I think the best product work happens at the boundaries —
              between design, engineering, and the people who actually have
              to use the thing.
            </h1>

            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-relaxed text-ink-muted sm:text-base">
              <p>
                I spent my first career as a motorsport engineer, where every
                decision gets tested against a lap time — not an opinion.
                When I moved into digital product, that habit came with me:
                I'm sceptical of ideas that sound good and haven't been
                tested against anything.
              </p>
              <p>
                Fifteen years on, I've worked across frontend development,
                UX and product leadership — usually all three on the same
                project. That range turns out to be the useful part. A lot
                of product work fails quietly at the handoffs: the strategy
                that engineering can't build, the design that the business
                won't fund, the roadmap nobody on the ground believes in.
                Having sat in each of those seats, I'm reasonably good at
                spotting where that's about to happen.
              </p>
              <p>
                Outside work I do triathlons badly but consistently, play
                guitar, and am slowly working through a hiking list of
                Victoria that's longer than I'd like to admit. I live in
                Melbourne.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[14rem] md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <Image
                src="/images/oliver-portrait.jpg"
                alt="Portrait of Oliver Randell"
                fill
                sizes="(min-width: 768px) 18rem, 60vw"
                className="object-cover grayscale-[8%]"
              />
            </div>
          </div>
        </div>
      </section>

      <ExperienceTimeline />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
