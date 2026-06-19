import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "inverted";
  showArrow?: boolean;
  className?: string;
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-accent text-paper hover:bg-accent-dark",
  outline:
    "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  inverted: "bg-paper text-ink hover:bg-accent hover:text-paper",
};

export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-2.5 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ${variantStyles[variant]} ${className}`}
    >
      {children}
      {showArrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </Link>
  );
}
