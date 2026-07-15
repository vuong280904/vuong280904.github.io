import type { SkillItem } from "@/types";

/**
 * Sourced directly from the "Technologies and Tools I use" badges on
 * https://github.com/vuong280904 (July 2026). `weight` and `proficiency`
 * are authored manually per the design spec (§7) — adjust freely, this
 * is not meant to be auto-generated from usage stats.
 */
export const SKILLS: SkillItem[] = [
  { id: "java", name: "Java", category: "Languages", weight: "lg", proficiency: "Daily driver" },
  { id: "js", name: "JavaScript", category: "Languages", weight: "lg", proficiency: "Daily driver" },
  { id: "ts", name: "TypeScript", category: "Languages", weight: "lg", proficiency: "Daily driver" },
  { id: "python", name: "Python", category: "Languages", weight: "lg", proficiency: "Daily driver" },
  { id: "dart", name: "Dart", category: "Languages", weight: "md", proficiency: "Comfortable" },
  { id: "c", name: "C", category: "Languages", weight: "sm", proficiency: "Comfortable" },
  { id: "cpp", name: "C++", category: "Languages", weight: "sm", proficiency: "Comfortable" },
  { id: "kotlin", name: "Kotlin", category: "Languages", weight: "sm", proficiency: "Familiar" },
  { id: "php", name: "PHP", category: "Languages", weight: "sm", proficiency: "Familiar" },

  { id: "html", name: "HTML5", category: "Frontend", weight: "md", proficiency: "Daily driver" },
  { id: "react", name: "React", category: "Frontend", weight: "lg", proficiency: "Daily driver" },
  { id: "nextjs", name: "Next.js", category: "Frontend", weight: "md", proficiency: "Comfortable" },

  { id: "nodejs", name: "Node.js", category: "Backend", weight: "lg", proficiency: "Daily driver" },
  { id: "express", name: "Express.js", category: "Backend", weight: "md", proficiency: "Comfortable" },
  { id: "nestjs", name: "NestJS", category: "Backend", weight: "sm", proficiency: "Familiar" },
  { id: "flask", name: "Flask", category: "Backend", weight: "md", proficiency: "Comfortable" },
  { id: "laravel", name: "Laravel", category: "Backend", weight: "sm", proficiency: "Familiar" },

  { id: "flutter", name: "Flutter", category: "Mobile", weight: "lg", proficiency: "Comfortable" },
  { id: "reactnative", name: "React Native", category: "Mobile", weight: "md", proficiency: "Comfortable" },

  { id: "pandas", name: "Pandas", category: "AI & Data", weight: "md", proficiency: "Comfortable" },
  { id: "numpy", name: "NumPy", category: "AI & Data", weight: "md", proficiency: "Comfortable" },
  { id: "tensorflow", name: "TensorFlow", category: "AI & Data", weight: "sm", proficiency: "Familiar" },
  { id: "keras", name: "Keras", category: "AI & Data", weight: "sm", proficiency: "Familiar" },

  { id: "mysql", name: "MySQL", category: "Infra & Tools", weight: "md", proficiency: "Comfortable" },
  { id: "mongodb", name: "MongoDB", category: "Infra & Tools", weight: "md", proficiency: "Comfortable" },
  { id: "sqlite", name: "SQLite", category: "Infra & Tools", weight: "sm", proficiency: "Comfortable" },
  { id: "firebase", name: "Firebase", category: "Infra & Tools", weight: "md", proficiency: "Comfortable" },
  { id: "aws", name: "AWS", category: "Infra & Tools", weight: "sm", proficiency: "Familiar" },
  { id: "git", name: "Git", category: "Infra & Tools", weight: "lg", proficiency: "Daily driver" },
  { id: "figma", name: "Figma", category: "Infra & Tools", weight: "sm", proficiency: "Familiar" },
];

export const SKILL_CATEGORIES = [
  "Languages",
  "Frontend",
  "Backend",
  "Mobile",
  "AI & Data",
  "Infra & Tools",
] as const;
