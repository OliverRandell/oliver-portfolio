import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-paper">
      <div className="mx-auto grid min-h-[calc(100svh-4.75rem)] max-w-(--container-content) gap-12 px-6 py-16 sm:px-8 sm:py-20 md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-16 lg:px-12">
        <div className="order-2 md:order-1">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Oliver Randell · Senior Product Manager
          </p>

          <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.75rem]">
            I help organisations turn {" "}
            <span className="text-accent">complex problems</span> into  digital products
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            I combine product strategy, UX and engineering fluency to create
            clarity, align teams and move ambitious digital products from
            uncertainty to launch.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/case-studies">View selected work</Button>
            <Button href="/about" variant="outline">
              More about me
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5 text-xs font-medium uppercase tracking-[0.08em] text-ink-faint">
            <span>Product strategy</span>
            <span>Delivery leadership</span>
            <span>UX and discovery</span>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-[25rem] py-8 md:max-w-none md:py-16">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-[14%] right-[-35vw] -z-10 rounded-l-[5rem] bg-surface sm:rounded-l-[8rem]"
            />
            <div
              aria-hidden="true"
              className="absolute -left-3 top-[16%] h-20 w-20 rounded-full bg-sun sm:h-28 sm:w-28"
            />
            <div className="relative mx-auto aspect-square w-[88%] overflow-hidden rounded-full border-[10px] border-paper shadow-[0_20px_65px_rgba(13,27,42,0.14)]">
              <Image
                src="/images/oliver-portrait.jpg"
                alt="Portrait of Oliver Randell"
                fill
                priority
                sizes="(min-width: 768px) 32rem, 80vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-[8%] right-[2%] rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-paper shadow-lg">
              Melbourne, Australia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
