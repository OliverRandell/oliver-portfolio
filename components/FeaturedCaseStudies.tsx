import Link from "next/link";
import SectionHeading from "./ui/SectionHeading";
import CaseStudyCard from "./CaseStudyCard";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export default function FeaturedCaseStudies() {
  const featured = getFeaturedCaseStudies();

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="A couple of things I'm proud of."
          />
          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent"
          >
            View all case studies
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2">
          {featured.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
