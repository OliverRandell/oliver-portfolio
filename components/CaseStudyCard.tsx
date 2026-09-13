import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  variant?: "default" | "featured";
};

function CaseStudyVisual({ caseStudy }: { caseStudy: CaseStudy }) {
  if (caseStudy.coverImage) {
    return (
      <Image
        src={caseStudy.coverImage}
        alt={caseStudy.coverAlt ?? ""}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className={
          caseStudy.coverFit === "contain"
            ? "object-contain object-center"
            : "object-cover object-center transition-transform duration-500 group-hover:scale-[1.015]"
        }
      />
    );
  }

  const isCcv = caseStudy.slug === "cancer-council-victoria";

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${
        isCcv
          ? "bg-[linear-gradient(135deg,#ec6175_0%,#f08a5d_55%,#f2ce62_100%)]"
          : "bg-[linear-gradient(135deg,#0d4555_0%,#17748a_58%,#bde8db_100%)]"
      }`}
    >
      <div className="absolute -right-[10%] -top-[30%] h-[85%] w-[75%] rounded-full border-[28px] border-paper/15" />
      <div className="absolute bottom-[12%] left-[10%] right-[10%] rounded-xl bg-paper/95 p-5 shadow-xl sm:p-6">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          <span>{isCcv ? "National public health" : "Enterprise SaaS"}</span>
          <span>{caseStudy.year}</span>
        </div>
        <div className="mt-5 grid grid-cols-[1fr_auto] items-end gap-5">
          <div>
            <span className="block h-2 w-16 rounded-full bg-accent/20" />
            <span className="mt-2 block h-2 w-28 rounded-full bg-accent/10" />
          </div>
          {caseStudy.metrics[0] && (
            <div className="text-right">
              <span className="block font-serif text-3xl font-medium leading-none text-ink">
                {caseStudy.metrics[0].value}
              </span>
              <span className="mt-1 block max-w-28 text-[9px] uppercase leading-tight tracking-[0.08em] text-ink-faint">
                {caseStudy.metrics[0].label}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyCard({
  caseStudy,
  variant = "default",
}: CaseStudyCardProps) {
  if (variant === "featured") {
    return (
      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="group block border-t border-border pt-5"
      >
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.1em]">
          <span className="text-accent">{caseStudy.client}</span>
          <span className="text-ink-faint">{caseStudy.year}</span>
        </div>
        <h3 className="mt-4 min-h-[4.5rem] max-w-xl font-serif text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-ink sm:text-4xl">
          {caseStudy.title}
        </h3>
        <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-xl">
          <CaseStudyVisual caseStudy={caseStudy} />
        </div>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
          {caseStudy.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1px] text-ink transition-colors group-hover:text-accent">
          Read the case study
          <span aria-hidden="true">↗</span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group flex h-full flex-col rounded-md border border-border bg-paper p-7 transition-colors duration-200 hover:border-border-strong sm:p-8"
    >
      <div className="flex items-center justify-between text-xs text-ink-faint">
        <span className="uppercase tracking-[0.1em]">{caseStudy.client}</span>
        <span>{caseStudy.year}</span>
      </div>

      <h3 className="mt-4 font-serif text-2xl font-medium text-ink">
        {caseStudy.title}
      </h3>

      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-muted">
        {caseStudy.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 border-t border-border pt-4 text-xs text-ink-faint">
        {caseStudy.tools.slice(0, 4).join(" · ")}
      </div>

      <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1px] text-accent">
        Read the case study
        <svg
          width="13"
          height="13"
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
      </span>
    </Link>
  );
}
