const testimonials = [
  {
    quote:
      "He clearly has a broad, full-stack knowledge base, which allowed him to immediately identify and respond to any issues we brought to his attention, as well as help us brainstorm solutions. His obsession with organisation and process (as annoying as it was!) meant that EVERYTHING was ALWAYS delivered on time and to specification. No surprises or disappointments.",
    name: "Bianca Shapiro",
    title: "COO and Partner, MyCareSpace",
  },
  {
    quote:
      "Oliver has a great passion for product and a sharp eye for user experience, always advocating for what's best for the end user while keeping the broader business goals in mind.",
    name: "Hooman Dehkordi",
    title: "Head of Engineering, Sesimi",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-accent-dark bg-accent text-paper">
      <div className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/70">
          What people say
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col rounded-xl border border-paper/20 bg-paper/10 p-7 sm:p-9"
            >
              <blockquote className="flex-1 font-serif text-2xl font-medium leading-[1.25] tracking-[-0.015em]">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-paper/20 pt-5 text-sm text-paper/75">
                <span className="font-semibold text-paper">
                  {testimonial.name}
                </span>
                <span className="mx-2">·</span>
                {testimonial.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
