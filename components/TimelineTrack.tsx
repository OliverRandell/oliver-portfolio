"use client";

import { useEffect, useRef, useState } from "react";
import ExperienceCard, { type Experience } from "./ExperienceCard";

export default function TimelineTrack({ items }: { items: Experience[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height + viewportH * 0.5;
      const scrolled = viewportH * 0.5 - rect.top;
      const next = Math.min(1, Math.max(0, scrolled / total));
      setProgress(next);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <span
        aria-hidden="true"
        className="absolute left-[5px] top-[1.85rem] bottom-[1.85rem] w-px bg-border sm:left-[7px]"
      />
      <span
        aria-hidden="true"
        className="absolute left-[5px] top-[1.85rem] w-px bg-accent transition-[height] duration-150 ease-out sm:left-[7px]"
        style={{ height: `calc(${progress * 100}% - 3.7rem)` }}
      />

      <div className="flex flex-col gap-10">
        {items.map((item) => (
          <ExperienceCard key={item.role + item.company} {...item} />
        ))}
      </div>
    </div>
  );
}
