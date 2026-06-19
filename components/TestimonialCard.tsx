export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export default function TestimonialCard({ quote, name, title }: Testimonial) {
  return (
    <figure className="flex h-full flex-col rounded-md border border-border bg-paper p-7 sm:p-8">
      <span
        aria-hidden="true"
        className="font-serif text-4xl leading-none text-accent/40"
      >
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 font-serif text-lg italic leading-relaxed text-ink sm:text-xl">
        {quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4">
        <p className="text-sm font-medium text-ink">{name}</p>
        <p className="text-sm text-ink-faint">{title}</p>
      </figcaption>
    </figure>
  );
}
