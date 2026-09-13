import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import CaseStudyCard from "./CaseStudyCard";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export default function FeaturedCaseStudies() {
  const featured = getFeaturedCaseStudies();

  return (
    <section className="border-b border-border bg-paper">
      <div className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <SectionHeading
          eyebrow="Selected work"
          title="Recent projects I've led"
          size="large"
        />

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2">
          {featured.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
              variant="featured"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Button href="/case-studies">View all projects</Button>
        </div>
      </div>
    </section>
  );
}
