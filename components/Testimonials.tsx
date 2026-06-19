import SectionHeading from "./ui/SectionHeading";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";

// Add more real quotes here as you gather them — the grid wraps responsively
// for any number of cards.
const testimonials: Testimonial[] = [
  {
    quote:
      "I had the pleasure of working with Oliver at Sesimi, where he brought a ton of energy, curiosity and initiative with himself. He has a great passion for product and a sharp eye for user experience, always advocating for what's best for the end user while keeping the broader business goals in mind. Oliver wasn't afraid to ask the hard questions, explore bold ideas, or dive into problems with both creativity and rigour. He was driven, empathetic and product-minded through and through. I'd happily work with him again.",
    name: "Hooman Dehkordi",
    title: "Head of Engineering, Sesimi",
  },
  {
    quote:
      "[Add quote] — ideally from someone who saw the discovery-to-delivery arc, not just the finished product.",
    name: "[Name]",
    title: "[Title, Company]",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-border bg-paper">
      <div className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <SectionHeading
          eyebrow="What people say"
          title="A few words from people I've worked alongside."
        />

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
