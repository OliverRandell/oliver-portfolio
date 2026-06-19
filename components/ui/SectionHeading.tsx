type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowColor = tone === "inverted" ? "text-paper/70" : "text-accent";
  const titleColor = tone === "inverted" ? "text-paper" : "text-ink";
  const descColor = tone === "inverted" ? "text-paper/75" : "text-ink-muted";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p
        className={`mb-3 text-xs font-medium uppercase tracking-[0.18em] ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2 className={`font-serif text-3xl font-medium sm:text-4xl ${titleColor}`}>
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
