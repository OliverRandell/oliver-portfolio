import SectionHeading from "./ui/SectionHeading";
import TimelineTrack from "./TimelineTrack";
import type { Experience } from "./ExperienceCard";

const experience: Experience[] = [
  {
    role: "Senior Producer",
    company: "Inlight",
    period: "2025 — Present",
    description:
      "Leading delivery across complex, multi-stakeholder digital products spanning public health, aged care and automotive — including a national quit-smoking platform for Cancer Council Victoria and a full platform rebuild for NDIS marketplace MyCareSpace. Running discovery, coordinating cross-functional teams, and owning client relationships from pitch through to post-launch.",
  },
  {
    role: "Senior Product Manager",
    company: "Sesimi",
    period: "2020 — 2025",
    description:
      "Led the end-to-end rebuild of a SaaS content platform used by Toyota, Volkswagen and Quest Hotels, directing a cross-functional team of twelve across five product areas. Migrated thousands of users to the new platform with zero churn of high-value accounts, and introduced AI-assisted onboarding that measurably lifted engagement.",
  },
  {
    role: "Freelance Frontend Developer",
    company: "Icon Agency · W3 Digital · Metronome · Technium",
    period: "2018 — 2020",
    description:
      "Built scalable, reusable UI components in React and Vue.js across a run of agency engagements, including a fully accessible single-page application for the blind community, built to WCAG 2.0 standards.",
  },
  {
    role: "Product Manager · Frontend Developer",
    company: "ID Digital",
    period: "2015 — 2018",
    description:
      "Started out building and shipping client work as a frontend developer, then grew into leading projects and client accounts — introducing Agile delivery practices as the team's Scrum Master along the way.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-(--container-content) px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <SectionHeading
          eyebrow="Experience"
          title="Fifteen years moving between engineering and product."
          description="A career spent shifting between writing the code, designing the interface, and deciding what to build in the first place — which turns out to be useful experience for the part where you have to lead all three."
        />

        <div className="mt-14 sm:mt-16">
          <TimelineTrack items={experience} />
        </div>
      </div>
    </section>
  );
}
