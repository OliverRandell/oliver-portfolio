import Link from "next/link";
import type { CaseStudyFrontmatter } from "@/lib/case-studies";

export function CaseStudyCard({ item }: { item: CaseStudyFrontmatter }) {
  return (
    <Link
      href={`/case-studies/${item.slug}`}
      className="group block rounded-2xl border border-black/10 bg-white transition hover:border-black/20"
    >
      <div className="aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-neutral-100">
        {/* Placeholder for cover image (we’ll swap to next/image later) */}
        <div className="h-full w-full" />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-medium tracking-tight group-hover:opacity-90">
            {item.title}
          </h2>
          <div className="text-xs text-black/50">{item.year}</div>
        </div>

        <p className="text-sm leading-relaxed text-black/70">{item.summary}</p>

        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {item.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}