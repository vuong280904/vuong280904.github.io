export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  tags: string[];
  tier: "featured" | "secondary" | "archive";
  githubUrl: string;
  liveUrl?: string;
  /** Path under /src/assets/images — replace placeholder with a real screenshot. */
  image: string;
  /** Optional short demo clip (mp4) under /public/assets/videos — crossfades in on hover if present. */
  video?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  summary: string;
  achievements: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  dateRange: string;
  focus: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Mobile" | "AI & Data" | "Infra & Tools";
  weight: "lg" | "md" | "sm";
  proficiency: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  /** Credly (or other) badge verification link — placeholder until supplied. */
  credlyUrl: string;
  badgeImage: string;
}

export interface CompetitionItem {
  id: string;
  name: string;
  placement: string;
  organizer: string;
  date: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "instagram" | "email" | "linkedin";
}
