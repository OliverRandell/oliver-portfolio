export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  /** ISO date — only used for sort order on the Case Studies index page. */
  date: string;
  /** Controls whether this appears in the Home page's featured pair.
   *  Keep exactly two set to true at a time. */
  featured: boolean;
  summary: string;
  tools: string[];
  skills?: string[];
  websiteUrl?: string;
  // Full write-up — all optional. Sections that are undefined simply don't
  // render on the detail page, so a case study can ship with just a summary
  // and grow into a full write-up later without any template changes.
  role?: string[];
  challenge?: string[];
  approach?: string[];
  outcome?: string[];
  reflection?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sesimi-saas-platform-rebuild",
    title: "Sesimi — SaaS Platform Rebuild",
    client: "Sesimi",
    year: "2024",
    date: "2024-02-01",
    featured: true,
    summary:
      "Led the end-to-end rebuild of Sesimi's core SaaS platform, enhancing UX, onboarding and scalability for enterprise clients such as Toyota, Volkswagen and Quest Hotels. Delivered a measurable uplift in engagement and zero client churn during migration.",
    tools: ["Mixpanel", "Intercom", "Linear", "Agile frameworks", "Miro", "Trello"],
    skills: ["Product Strategy", "Platform Migration", "Cross-functional Leadership", "Enterprise UX"],
    // TODO(Oliver): paste your full write-up — Role / Challenge / Approach /
    // Outcome / Reflection — and I'll slot it in. This is your strongest
    // case study for B2B SaaS / fintech-style roles, worth fleshing out first.
  },
  {
    slug: "onboarding-workflow-sesimi",
    title: "Onboarding Workflow (Sesimi)",
    client: "Sesimi",
    year: "2024",
    date: "2024-11-01",
    featured: false,
    summary:
      "Redesigned Sesimi's user onboarding strategy to be scalable, intelligent and personalised — reducing support load, increasing engagement and improving retention through AI-optimised content and guided product interactions.",
    tools: ["Intercom", "Miro", "Notion", "Mixpanel", "Figma"],
    skills: ["Onboarding Design", "Retention", "Experimentation"],
    // TODO(Oliver): paste your full write-up here.
  },
  {
    slug: "candella-app-launch",
    title: "Candella App Launch",
    client: "Candella",
    year: "2025",
    date: "2025-03-01",
    featured: true,
    summary:
      "Designed, built and launched Candella, a mobile-first platform connecting users with local sustainable businesses across Victoria. Delivered an MVP across iOS, Android and Web using no-code tools, securing 30+ brand partnerships and validating real demand.",
    tools: ["Adalo", "Figma", "Notion", "Canva", "Instagram"],
    skills: ["Product Strategy", "UX/UI Design", "No-Code Development", "Brand Building", "Go-to-Market"],
    role: [
      "Defined product vision, brand identity and tone of voice",
      "Led UX design, UI development and platform build in Adalo",
      "Managed App Store and Google Play submissions",
      "Built early user research and roadmap prioritisation processes",
      "Recruited interns and a co-founder to lead marketing and partnerships",
    ],
    challenge: [
      "The climate crisis often feels overwhelming — a tangle of systemic issues far beyond individual control. Like many others, I was frustrated by the constant bad news, the slow pace of government action and the feeling that living sustainably was only accessible to the privileged.",
      "I wanted to find better ways to shop, but I didn't know where to start. I realised there was a gap: everyday people wanted to make better choices, but the path forward was hidden behind complexity, greenwashing and inertia.",
      "The idea for Candella was born from a simple insight: when I first moved to Melbourne, I discovered that shopping at local markets wasn't just better for the planet — it was cheaper, more joyful and radically less wasteful. Why wasn't this experience easier for more people to access?",
      "Candella set out to bridge that gap, connecting users with truly sustainable businesses without the guilt, overwhelm or endless browser searches.",
    ],
    approach: [
      "I started with quick market research, surveying behaviours and needs across the conscious consumer space, then developed a lean product strategy focused on building momentum as quickly as possible. I created the Candella brand identity, mission and tone of voice, aligning everything around accessibility, optimism and authenticity.",
      "As the sole product designer and builder, I led the UX and UI design of the first Candella platform. To expedite time to market, I built the MVP using Adalo, a no-code tool that allowed me to launch simultaneously across iOS, Android and Web with geolocation capabilities. While I initially dreamed of a more sophisticated app, I made a conscious product decision: proof of concept and real-world user feedback mattered more than perfect features.",
      "As we grew, I brought in a co-founder with complementary skills in business development and sustainability verification, and recruited social media interns and partners to build grassroots awareness.",
    ],
    outcome: [
      "Launched Candella MVP across iOS, Android and Web using no-code tools.",
      "150+ sustainable businesses listed across Victoria.",
      "Positive feedback from early adopters praising accessibility and mission clarity.",
      "Secured 30+ brand partnerships, including notable names like Zero Co.",
      "Validated the need for a coalition loyalty program based on user feedback.",
    ],
    reflection: [
      "Building Candella taught me the art of launching lean without compromising heart. It reminded me that successful product work isn't about building every feature upfront — it's about starting conversations, validating real needs and empowering users to join a bigger movement.",
      "It also reinforced the power of collaboration: bringing on partners who believed in the mission allowed us to grow faster and think bigger.",
    ],
  },
  {
    slug: "upcycle-circular-commerce",
    title: "Upcycle — Circular Commerce for Everyday Australians",
    client: "Upcycle",
    year: "2024",
    date: "2024-06-01",
    featured: false,
    summary:
      "Designed and delivered a purpose-built mobile app for Upcycle, a social enterprise helping Australians easily donate or rehome second-hand furniture. Developed in Adalo with a simplified messaging system and dual-user flows — live on iOS and Android within three months, now supported by government sustainability funding.",
    tools: ["Adalo", "Figma", "Miro", "Notion", "Google Sheets (inventory logic)"],
    skills: ["Product Strategy", "UX Design", "No-Code Development"],
    // TODO(Oliver): paste your full write-up here.
  },
];

export function getAllCaseStudiesSorted(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
