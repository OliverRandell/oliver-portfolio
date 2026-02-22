import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Container from "@/components/container";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";

export async function generateStaticParams() {
  const items = await getAllCaseStudies();
  return items.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter } = await getCaseStudyBySlug(slug);

  return {
    title: `${frontmatter.title} — Oliver Randell`,
    description: frontmatter.summary,
  };
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-neutral-200 py-3 text-sm">
      <div className="shrink-0 text-neutral-500">{label}</div>
      <div className="text-right text-neutral-800">{value}</div>
    </div>
  );
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { frontmatter, content } = await getCaseStudyBySlug(slug);

  const { content: mdx } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  });

  const tools = Array.isArray(frontmatter.tools) ? frontmatter.tools : [];

  return (
    <Container className="py-12">
      <div className="space-y-10">
        {/* Header */}
        <header className="space-y-5">
          <div className="text-xs font-medium tracking-[0.16em] text-neutral-500">
            CASE STUDY
          </div>

          <div className="space-y-3">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              {frontmatter.title}
            </h1>

            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-neutral-600">
              {frontmatter.summary}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              ← Back to case studies
            </Link>
          </div>

          <div className="pt-2">
            <div className="h-px w-full bg-neutral-200" />
          </div>
        </header>

        {/* Layout */}
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Main content */}
          <article
            className={[
              "prose prose-neutral max-w-none",
              "prose-headings:font-heading prose-headings:tracking-tight",
              "prose-p:leading-relaxed",
              "prose-a:text-neutral-900 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-neutral-700",
              "prose-strong:text-neutral-900",
            ].join(" ")}
          >
            {mdx}
          </article>

          {/* Sidebar */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="text-sm font-semibold tracking-tight text-neutral-900">
                Project Info
              </div>

              <div className="mt-4">
                {frontmatter.brand && (
                  <InfoRow label="Brand" value={frontmatter.brand} />
                )}
                {frontmatter.role && (
                  <InfoRow label="Role" value={frontmatter.role} />
                )}
                <InfoRow label="Year" value={frontmatter.year} />

                {tools.length > 0 && (
                  <InfoRow label="Tools" value={tools.join(", ")} />
                )}
              </div>

              {frontmatter.links?.website && (
                <Link
                  href={frontmatter.links.website}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  Visit website →
                </Link>
              )}
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}