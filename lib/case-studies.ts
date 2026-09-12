import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  /** ISO date — only used for sort order on the Case Studies index page. */
  date: string;
  /** Controls whether this appears in the Home page's featured pair.
   * Keep exactly two set to true at a time. */
  featured: boolean;
  summary: string;
  role?: string;
  duration?: string;
  team?: string;
  skills: string[];
  tools: string[];
  websiteUrl?: string;
  metrics: CaseStudyMetric[];
  /** Markdown body after the frontmatter. */
  content: string;
};

const caseStudiesDirectory = path.join(
  process.cwd(),
  "content",
  "case-studies",
);

function requiredString(value: unknown, field: string, fileName: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Missing or invalid "${field}" in ${fileName}`);
  }

  return value;
}

function optionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() !== ""
    ? value
    : undefined;
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function metricsArray(value: unknown): CaseStudyMetric[] {
  if (!Array.isArray(value)) return [];

  return value.filter(
    (metric): metric is CaseStudyMetric =>
      typeof metric === "object" &&
      metric !== null &&
      typeof (metric as CaseStudyMetric).value === "string" &&
      typeof (metric as CaseStudyMetric).label === "string",
  );
}

function readCaseStudy(fileName: string): CaseStudy {
  const fullPath = path.join(caseStudiesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: requiredString(data.slug, "slug", fileName),
    title: requiredString(data.title, "title", fileName),
    client: requiredString(data.client, "client", fileName),
    year: requiredString(data.year, "year", fileName),
    date: requiredString(data.date, "date", fileName),
    featured: data.featured === true,
    summary: requiredString(data.summary, "summary", fileName),
    role: optionalString(data.role),
    duration: optionalString(data.duration),
    team: optionalString(data.team),
    skills: stringArray(data.skills),
    tools: stringArray(data.tools),
    websiteUrl: optionalString(data.websiteUrl),
    metrics: metricsArray(data.metrics),
    content: content.trim(),
  };
}

export function getAllCaseStudiesSorted(): CaseStudy[] {
  return fs
    .readdirSync(caseStudiesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readCaseStudy)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudiesSorted().filter((caseStudy) => caseStudy.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getAllCaseStudiesSorted().find(
    (caseStudy) => caseStudy.slug === slug,
  );
}

export function getCaseStudySlugs(): string[] {
  return getAllCaseStudiesSorted().map((caseStudy) => caseStudy.slug);
}
