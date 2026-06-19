import Button from "./ui/Button";

export default function CTA() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-(--container-content) px-6 py-20 text-center sm:px-8 sm:py-28 lg:px-12">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-paper/60">
          Let&apos;s talk
        </p>
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium text-paper sm:text-4xl">
          Have a complex product problem worth talking through?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-paper/70 sm:text-base">
          I&apos;m based in Melbourne and open to Senior Product Manager
          conversations. If you&apos;d rather just trade notes on a hard
          product problem, that works too.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/contact" variant="inverted">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
