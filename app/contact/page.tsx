import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import RotatingPhrase from "@/components/RotatingPhrase";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Oliver Randell — Melbourne-based Senior Product Manager.",
};

const links = [
  { label: "oliverrandell@gmail.com", href: "mailto:oliverrandell@gmail.com" },
  { label: "+61 451 029 748", href: "tel:+61451029748" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oliverrandell" },
];

export default function ContactPage() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h1 className="max-w-2xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
            Currently open to <RotatingPhrase />. Based in Melbourne, happy
            to talk remote or hybrid.
          </p>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_20rem] lg:gap-20">
            <ContactForm />

            <div>
              <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-sm border border-border">
                <Image
                  src="/images/oliver-portrait.jpg"
                  alt="Portrait of Oliver Randell"
                  fill
                  sizes="10rem"
                  className="object-cover grayscale-[8%]"
                />
              </div>

              <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                {links.map((link) => (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-ink transition-colors duration-200 hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </dl>

              <p className="mt-6 text-sm text-ink-faint">Melbourne, Australia</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
