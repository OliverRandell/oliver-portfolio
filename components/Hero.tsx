import Image from "next/image";
import Button from "./ui/Button";
import SkillPill from "./ui/SkillPill";

const skills = [
  "Product strategy",
  "Discovery & facilitation",
  "UX & interaction design",
  "Stakeholder alignment",
  "Engineering fluency",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-(--container-content) gap-12 px-6 py-20 sm:px-8 sm:py-28 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 lg:px-12">
        {/* Left — copy */}
        <div className="order-2 md:order-1">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Hello! I&apos;m Oliver
          </p>

          <h1 className="font-serif text-4xl font-medium leading-[1.15] text-ink sm:text-5xl lg:text-[3.25rem]">
            Product Manager helping organisations turn complex problems into
            products people actually use.
          </h1>

          <div className="mt-7 max-w-xl space-y-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
            <p>
              I spent the first part of my career as a motorsport engineer,
              where decisions are tested against lap times, not opinions.
              That same discipline carried over when I moved into digital
              product — fifteen years now spent moving between frontend
              development, UX and product leadership.
            </p>
            <p>
              Most recently I led the end-to-end rebuild of a SaaS platform
              used by Toyota, Volkswagen and Quest Hotels, and I now lead
              delivery on complex, multi-stakeholder products spanning health,
              aged care and automotive. I&apos;m at my best translating a
              messy business problem into something a team can build — and a
              person can actually use.
            </p>
          </div>

          <div className="mt-9">
            <Button href="/case-studies">View my work</Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <SkillPill key={skill}>{skill}</SkillPill>
            ))}
          </div>
        </div>

        {/* Right — portrait */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-[22rem] md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 bottom-3 left-3 -z-10 rounded-sm bg-accent-tint sm:-right-4 sm:-top-4 sm:bottom-4 sm:left-4"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <Image
                src="/images/oliver-portrait.jpg"
                alt="Portrait of Oliver Randell"
                fill
                priority
                sizes="(min-width: 768px) 36rem, 90vw"
                className="object-cover grayscale-[8%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
