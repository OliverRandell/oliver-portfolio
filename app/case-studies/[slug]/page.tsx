import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Button from "@/components/ui/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import {
  getCaseStudyBySlug,
  getAllCaseStudiesSorted,
  getCaseStudySlugs,
} from "@/lib/case-studies";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
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

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  const related = getAllCaseStudiesSorted()
    .filter((study) => study.slug !== caseStudy.slug)
    .slice(0, 2);

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
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-muted">
            {caseStudy.summary}
          </p>

          {caseStudy.metrics.length > 0 && (
            <dl className="mt-10 grid border-y border-border sm:grid-cols-3">
              {caseStudy.metrics.map((metric, index) => (
                <div
                  key={`${metric.value}-${metric.label}`}
                  className={`py-5 ${
                    index > 0
                      ? "border-t border-border sm:border-l sm:border-t-0 sm:pl-6"
                      : ""
                  }`}
                >
                  <dt className="font-serif text-2xl font-medium text-ink">
                    {metric.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.08em] text-ink-faint">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_20rem]">
            <div className="lg:order-1">
              {caseStudy.content ? (
                <article className="[&>:first-child]:mt-0">
                  <ReactMarkdown
                    components={{
                      h2: ({ children }) => (
                        <h2 className="mt-10 font-serif text-2xl font-medium text-ink">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="mt-8 font-serif text-xl font-medium text-ink">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="mt-4 text-base leading-relaxed text-ink-muted">
                          {children}
                        </p>
                      ),
                      img: ({ src, alt }) => (
                        // Case-study screenshots may be wide desktop captures or
                        // tall mobile screens. Constraining height keeps both
                        // useful without allowing portrait images to dominate.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={src}
                          alt={alt ?? ""}
                          loading="lazy"
                          className="mx-auto mt-7 max-h-[42rem] w-auto max-w-full rounded-xl border border-border object-contain shadow-sm"
                        />
                      ),
                      ul: ({ children }) => (
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-muted marker:text-accent">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-ink-muted marker:text-accent">
                          {children}
                        </ol>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="mt-6 border-l-2 border-accent pl-5 [&_p]:mt-0 [&_p]:font-serif [&_p]:text-xl [&_p]:font-medium [&_p]:leading-relaxed [&_p]:text-ink">
                          {children}
                        </blockquote>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-ink">
                          {children}
                        </strong>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target={href?.startsWith("http") ? "_blank" : undefined}
                          rel={href?.startsWith("http") ? "noreferrer" : undefined}
                          className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-dark"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {caseStudy.content}
                  </ReactMarkdown>
                </article>
              ) : (
                <div className="rounded-md border border-dashed border-border-strong p-6 text-sm text-ink-faint">
                  The full write-up for this case study is coming soon.
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
                {caseStudy.role && (
                  <div>
                    <dt className="text-ink-faint">Role</dt>
                    <dd className="mt-0.5 text-ink">{caseStudy.role}</dd>
                  </div>
                )}
                {caseStudy.duration && (
                  <div>
                    <dt className="text-ink-faint">Duration</dt>
                    <dd className="mt-0.5 text-ink">{caseStudy.duration}</dd>
                  </div>
                )}
                {caseStudy.team && (
                  <div>
                    <dt className="text-ink-faint">Team</dt>
                    <dd className="mt-0.5 text-ink">{caseStudy.team}</dd>
                  </div>
                )}
                {caseStudy.skills.length > 0 && (
                  <div>
                    <dt className="text-ink-faint">Skills</dt>
                    <dd className="mt-0.5 text-ink">
                      {caseStudy.skills.join(" · ")}
                    </dd>
                  </div>
                )}
                {caseStudy.tools.length > 0 && (
                  <div>
                    <dt className="text-ink-faint">Tools</dt>
                    <dd className="mt-0.5 text-ink">
                      {caseStudy.tools.join(", ")}
                    </dd>
                  </div>
                )}
              </dl>
              {caseStudy.websiteUrl && (
                <div className="mt-6">
                  <Button
                    href={caseStudy.websiteUrl}
                    className="w-full justify-center"
                  >
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
              {related.map((study) => (
                <CaseStudyCard key={study.slug} caseStudy={study} />
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
