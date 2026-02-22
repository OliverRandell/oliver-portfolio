import Container from "@/components/container";
import { CaseStudyCard } from "@/components/case-study-card";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata = {
  title: "Case Studies — Oliver Randell",
  description:
    "Selected work across onboarding, growth, platform rebuilds, and 0→1 delivery.",
};

export default async function CaseStudiesPage() {
  const items = await getAllCaseStudies();

  return (
    <Container className="py-12">
      <div className="space-y-10">
        <header className="space-y-4">
          <div className="text-xs font-medium tracking-[0.16em] text-neutral-500">
            CASE STUDIES
          </div>

          <div className="space-y-3">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              My curated work
            </h1>

            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-neutral-600">
              Selected projects across onboarding, growth, platform rebuilds, and 0→1 delivery.
            </p>
          </div>

          <div className="pt-2">
            <div className="h-px w-full bg-neutral-200" />
          </div>
        </header>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-neutral-700">
            <p className="font-medium text-neutral-900">No case studies yet.</p>
            <p className="mt-2 text-sm text-neutral-600">
              Add MDX files in <code className="rounded bg-neutral-100 px-1 py-0.5">src/content/case-studies</code>{" "}
              with the required frontmatter fields.
            </p>
          </div>
        ) : (
          <section className="grid gap-6 md:gap-8 md:grid-cols-2">
            {items.map((item) => (
              <CaseStudyCard key={item.slug} item={item} />
            ))}
          </section>
        )}
      </div>
    </Container>
  );
}