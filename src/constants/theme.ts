/**
 * Design tokens mirrored from the approved UI/UX specification.
 * These are the single source of truth for the brand system — do not
 * introduce new colors or fonts outside of what's defined here.
 */
export const COLORS = {
  primary: "#F472B6",
  secondary: "#FDBA74",
  accent: "#C084FC",
  background: "#FCFCFD",
  dark: "#0F1117",
} as const;

export const FONTS = {
  display: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const BRAND_GRADIENT =
  "linear-gradient(135deg, #F472B6 0%, #FDBA74 55%, #C084FC 100%)";

export const EASE = {
  entrance: [0.22, 1, 0.36, 1] as const,
  hover: "easeOut" as const,
};

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  education: "education",
  experience: "experience",
  skills: "skills",
  projects: "projects",
  certificates: "certificates",
  competitions: "competitions",
  contact: "contact",
} as const;
