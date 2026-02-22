import { getAllCaseStudies } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/case-study-card";

export const metadata = {
  title: "Case Studies — Oliver Randell",
  description:
    "Selected work across onboarding, growth, platform rebuilds, and 0→1 delivery.",
};

export default async function CaseStudiesPage() {
  const items = await getAllCaseStudies();

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="text-xs font-medium tracking-[0.16em] text-black/50">
          CASE STUDIES
        </div>
        <h1 className="text-4xl font-medium tracking-tight">My curated work</h1>
        <p className="max-w-prose text-base leading-relaxed text-black/70">
          Selected projects across onboarding, growth, platform rebuilds, and 0→1 delivery.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <CaseStudyCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}