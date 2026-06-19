"use client";

import { useEffect, useRef, useState } from "react";

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export default function ExperienceCard({
  role,
  company,
  period,
  description,
}: Experience) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative pl-8 sm:pl-10">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-[1.6rem] h-[11px] w-[11px] rounded-full border-2 bg-paper transition-colors duration-300 sm:h-[15px] sm:w-[15px] ${
          visible ? "border-accent" : "border-border-strong"
        }`}
      />

      <div
        className={`rounded-md border border-border bg-paper p-6 transition-all duration-500 ease-out hover:border-border-strong sm:p-7 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            {role}
          </h3>
          <span className="text-xs text-ink-faint sm:text-sm">{period}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-accent">{company}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
          {description}
        </p>
      </div>
    </div>
  );
}
