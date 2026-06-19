export default function SkillPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border-strong px-4 py-1.5 text-xs font-medium text-ink/75">
      {children}
    </span>
  );
}
