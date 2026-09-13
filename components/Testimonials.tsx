const testimonials = [
  {
    quote: "He clearly has a broad, full-stack knowledge base, which allowed him to immediately identify and respond to any issues we brought to his attention, as well as help us brainstorm solutions. His obsession with organisation and process (as annoying as it was!) meant that EVERYTHING was ALWAYS delivered on time and to specification. No surprises or disappointments.",
    name: "Bianca Shapiro",
    title: "COO and Partner, MyCareSpace",
  },
  {
    quote: "Oliver has a great passion for product and a sharp eye for user experience, always advocating for what's best for the end user while keeping the broader business goals in mind.",
    name: "Hooman Dehkordi",
    title: "Head of Engineering, Sesimi",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <p className="text-[10px] font-bold uppercase tracking-[1px] text-accent">
          Recommendations
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-ink sm:text-5xl">
          From clients and collaborators.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col border-t-2 border-accent bg-paper px-6 pb-7 pt-6 shadow-[0_10px_35px_rgba(13,27,42,0.05)] sm:px-8 sm:pb-8"
            >
              <span aria-hidden="true" className="font-serif text-6xl leading-none text-accent/35">
                “
              </span>
              <blockquote className="-mt-3 flex-1 font-serif text-xl leading-[1.45] tracking-[-0.01em] text-ink sm:text-2xl">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5 text-sm text-ink-muted">
                <span className="font-semibold text-accent">{testimonial.name}</span>
                <span className="mx-2 text-ink-faint">·</span>
                {testimonial.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
