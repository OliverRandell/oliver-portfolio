import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getAllCaseStudiesSorted } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "A working record of products I've helped build — from enterprise SaaS rebuilds to self-initiated apps shipped solo.",
};

export default function CaseStudiesPage() {
  const studies = getAllCaseStudiesSorted();

  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <SectionHeading
            eyebrow="Case studies"
            title="A working record of products I've helped build."
            description="Some of this is enterprise SaaS work delivered with large cross-functional teams. Some of it is things I designed and shipped myself, end to end. I think both are worth showing — they test different muscles."
          />

          <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2">
            {studies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
