import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type CaseStudyFrontmatter = {
  title: string;
  slug: string;
  year: number;
  summary: string;
  brand: string;
  role: string;
  tags: string[];
  tools: string[];
  coverImage?: string;
  links?: {
    website?: string;
    appStore?: string;
    googlePlay?: string;
  };
};

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "case-studies");

export async function getAllCaseStudies(): Promise<CaseStudyFrontmatter[]> {
  const files = await fs.readdir(CONTENT_DIR);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

  const items = await Promise.all(
    mdxFiles.map(async (filename) => {
      const fullPath = path.join(CONTENT_DIR, filename);
      const raw = await fs.readFile(fullPath, "utf8");
      const { data } = matter(raw);

      // Minimal runtime validation (fail fast if a field is missing)
      const fm = data as Partial<CaseStudyFrontmatter>;
      console.log("Frontmatter for", filename, fm);
      if (!fm.title || !fm.slug || !fm.year || !fm.summary) {
        throw new Error(
          `Missing required frontmatter in ${filename}. Required: title, slug, year, summary.`
        );
      }

      return {
        title: fm.title,
        slug: fm.slug,
        year: Number(fm.year),
        summary: fm.summary,
        brand: fm.brand ?? "",
        role: fm.role ?? "",
        tags: Array.isArray(fm.tags) ? fm.tags : [],
        tools: Array.isArray(fm.tools) ? fm.tools : [],
        coverImage: fm.coverImage,
        links: fm.links,
      } satisfies CaseStudyFrontmatter;
    })
  );

  return items.sort((a, b) => b.year - a.year);
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<{ frontmatter: CaseStudyFrontmatter; content: string }> {
  const files = await fs.readdir(CONTENT_DIR);
  const mdxFile = files.find((f) => f.endsWith(".mdx"));

  // Find file by inspecting frontmatter (simple + reliable)
  for (const filename of files.filter((f) => f.endsWith(".mdx"))) {
    const fullPath = path.join(CONTENT_DIR, filename);
    const raw = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(raw);
    if ((data as any).slug === slug) {
      const fm = data as Partial<CaseStudyFrontmatter>;
      if (!fm.title || !fm.slug || !fm.year || !fm.summary) {
        throw new Error(
          `Missing required frontmatter in ${filename}. Required: title, slug, year, summary.`
        );
      }

      return {
        frontmatter: {
          title: fm.title,
          slug: fm.slug,
          year: Number(fm.year),
          summary: fm.summary,
          brand: fm.brand ?? "",
          role: fm.role ?? "",
          tags: Array.isArray(fm.tags) ? fm.tags : [],
          tools: Array.isArray(fm.tools) ? fm.tools : [],
          coverImage: fm.coverImage,
          links: fm.links,
        },
        content,
      };
    }
  }

  throw new Error(`Case study not found for slug: ${slug} (${mdxFile ?? "no mdx"})`);
}