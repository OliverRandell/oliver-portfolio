import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";

export async function generateStaticParams() {
  const items = await getAllCaseStudies();
  return items.map((i) => ({
    slug: i.slug,
  }));
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
    <div className="flex items-start justify-between gap-4 border-b border-black/10 py-3 text-sm">
      <div className="text-black/50">{label}</div>
      <div className="text-right text-black/80">{value}</div>
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

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="text-xs font-medium tracking-[0.16em] text-black/50">
          CASE STUDY
        </div>

        <h1 className="text-4xl font-medium tracking-tight">
          {frontmatter.title}
        </h1>

        <p className="max-w-prose text-base leading-relaxed text-black/70">
          {frontmatter.summary}
        </p>

        <Link
          href="/case-studies"
          className="inline-block text-sm font-medium text-black/70 hover:text-black"
        >
          ← Back to case studies
        </Link>
      </div>

      {/* Layout */}
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Main content */}
        <article className="prose prose-neutral max-w-none prose-headings:tracking-tight prose-a:text-black">
          {mdx}
        </article>

        {/* Sidebar */}
        <aside className="h-fit rounded-2xl border border-black/10 p-5">
          <div className="text-sm font-medium tracking-tight">
            Project Info
          </div>

          <div className="mt-3">
            {frontmatter.brand && (
              <InfoRow label="Brand" value={frontmatter.brand} />
            )}

            {frontmatter.role && (
              <InfoRow label="Role" value={frontmatter.role} />
            )}

            <InfoRow label="Year" value={frontmatter.year} />

            {frontmatter.tools.length > 0 && (
              <InfoRow
                label="Tools"
                value={frontmatter.tools.join(", ")}
              />
            )}
          </div>

          {frontmatter.links?.website && (
            <Link
              href={frontmatter.links.website}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Visit website →
            </Link>
          )}
        </aside>
      </div>
    </div>
  );
}