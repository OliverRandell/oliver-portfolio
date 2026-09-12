export default function Testimonials() {
  return (
    <section className="border-b border-accent-dark bg-accent text-paper">
      <div className="mx-auto grid max-w-(--container-content) gap-8 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.35fr_1.65fr] lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/70">
          What people say
        </p>
        <figure>
          <blockquote className="max-w-4xl font-serif text-3xl font-medium leading-[1.16] tracking-[-0.02em] sm:text-4xl">
            “Oliver has a great passion for product and a sharp eye for user
            experience, always advocating for what&apos;s best for the end user
            while keeping the broader business goals in mind.”
          </blockquote>
          <figcaption className="mt-8 text-sm text-paper/75">
            <span className="font-semibold text-paper">Hooman Dehkordi</span>
            <span className="mx-2">·</span>
            Head of Engineering, Sesimi
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
