import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import {
  caseStudies,
  getCaseStudyBySlug,
  getAllCaseStudiesSorted,
} from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};
  return {
    title: caseStudy.title,
    description: caseStudy.summary,
  };
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-[15px] leading-relaxed text-ink-muted">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  const related = getAllCaseStudiesSorted()
    .filter((cs) => cs.slug !== caseStudy.slug)
    .slice(0, 2);

  const hasFullWriteUp =
    caseStudy.challenge || caseStudy.approach || caseStudy.outcome;

  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-(--container-content) px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-ink-faint transition-colors hover:text-ink"
          >
            ← All case studies
          </Link>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Case study
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            {caseStudy.title}
          </h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_20rem]">
            <div className="space-y-10 lg:order-1">
              <Prose paragraphs={[caseStudy.summary]} />

              {caseStudy.role && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-ink">
                    My role
                  </h2>
                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-muted">
                    {caseStudy.role.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudy.challenge && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-ink">
                    The challenge
                  </h2>
                  <div className="mt-4">
                    <Prose paragraphs={caseStudy.challenge} />
                  </div>
                </div>
              )}

              {caseStudy.approach && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-ink">
                    The approach
                  </h2>
                  <div className="mt-4">
                    <Prose paragraphs={caseStudy.approach} />
                  </div>
                </div>
              )}

              {caseStudy.outcome && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-ink">
                    The outcome
                  </h2>
                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-muted">
                    {caseStudy.outcome.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudy.reflection && (
                <div>
                  <h2 className="font-serif text-2xl font-medium text-ink">
                    Upon reflection
                  </h2>
                  <div className="mt-4">
                    <Prose paragraphs={caseStudy.reflection} />
                  </div>
                </div>
              )}

              {!hasFullWriteUp && (
                <div className="rounded-md border border-dashed border-border-strong p-6 text-sm text-ink-faint">
                  The full write-up for this one — role, challenge, approach
                  and outcome — is coming soon.
                </div>
              )}
            </div>

            <aside className="h-fit rounded-md border border-border bg-surface p-6 lg:order-2 lg:sticky lg:top-24">
              <h2 className="font-serif text-xl font-medium text-ink">
                Project info
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-ink-faint">Client</dt>
                  <dd className="mt-0.5 text-ink">{caseStudy.client}</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Year</dt>
                  <dd className="mt-0.5 text-ink">{caseStudy.year}</dd>
                </div>
                {caseStudy.skills && (
                  <div>
                    <dt className="text-ink-faint">Skills</dt>
                    <dd className="mt-0.5 text-ink">
                      {caseStudy.skills.join(" · ")}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-ink-faint">Tools</dt>
                  <dd className="mt-0.5 text-ink">
                    {caseStudy.tools.join(", ")}
                  </dd>
                </div>
              </dl>
              {caseStudy.websiteUrl && (
                <div className="mt-6">
                  <Button href={caseStudy.websiteUrl} className="w-full justify-center">
                    Visit website
                  </Button>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-(--container-content) px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Related
            </p>
            <h2 className="mt-3 font-serif text-2xl font-medium text-ink sm:text-3xl">
              Other case studies
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((cs) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </main>
  );
}
