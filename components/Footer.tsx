import Link from "next/link";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "Case studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const contactLinks = [
  { label: "Email", href: "mailto:oliverrandell@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oliverrandell" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper/60">
      <div className="mx-auto max-w-(--container-content) px-6 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-xl text-paper">Oliver Randell</p>
            <p className="mt-1 text-sm">
              Senior Product Manager, based in Melbourne, VIC
            </p>
          </div>

          <nav aria-label="Site" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {siteLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Contact" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition-colors duration-200 hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-paper/10 pt-6 text-xs">
          <p>&copy; {year} Oliver Randell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
