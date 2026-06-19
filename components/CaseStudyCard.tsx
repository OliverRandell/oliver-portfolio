import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
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

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
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
