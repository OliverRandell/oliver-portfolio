type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
  size?: "default" | "large";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  size = "default",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowColor = tone === "inverted" ? "text-paper/70" : "text-accent";
  const titleColor = tone === "inverted" ? "text-paper" : "text-ink";
  const descColor = tone === "inverted" ? "text-paper/75" : "text-ink-muted";
  const titleSize =
    size === "large"
      ? "text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl"
      : "text-3xl sm:text-4xl";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p
        className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2 className={`font-serif font-medium ${titleSize} ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
