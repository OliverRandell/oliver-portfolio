const links = [
  {
    // Add the final PDF at public/oliver-randell-resume.pdf.
    label: "Download résumé",
    href: "resume/oliver-randell-resume.pdf",
    download: true,
    icon: (
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    ),
  },
  {
    label: "Email Oliver",
    href: "mailto:oliverrandell@gmail.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "Open LinkedIn",
    href: "https://www.linkedin.com/in/oliverrandell",
    external: true,
    icon: (
      <>
        <path d="M8 10v8M8 6.5v.01M12 18v-4.5a3.5 3.5 0 0 1 7 0V18M12 10v8" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </>
    ),
  },
];

export default function ContactRail() {
  return (
    <aside
      aria-label="Contact shortcuts"
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 overflow-hidden rounded-full border border-border bg-paper/95 p-1 shadow-[0_10px_35px_rgba(13,27,42,0.14)] backdrop-blur-md md:bottom-auto md:left-0 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:flex-col md:rounded-l-none md:rounded-r-xl"
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          title={link.label}
          download={link.download || undefined}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="group relative grid h-11 w-11 place-items-center rounded-full text-ink-faint transition-colors hover:bg-accent-tint hover:text-accent md:rounded-lg"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {link.icon}
          </svg>
          <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs text-paper opacity-0 shadow-sm transition-opacity group-hover:opacity-100 md:block">
            {link.label}
          </span>
        </a>
      ))}
    </aside>
  );
}
