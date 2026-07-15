import type { Project } from "@/types";

/**
 * Sourced from https://github.com/vuong280904 (July 2026).
 * Two repos (bookClub, SpamEmail) have enough file structure to describe
 * confidently; simulationWater and Vpan ship only default/empty READMEs,
 * so their copy below is a conservative, structure-based best guess —
 * replace with your own description before shipping.
 */
export const PROJECTS: Project[] = [

  {
    id: "vpan",
    title: "VPan",
    tagline: "Mobile app with a dedicated API layer",
    description:
      "An Expo / React Native mobile app paired with a custom API and server layer, built with file-based routing and a typed client-server boundary.",
    role: "Solo developer",
    tags: ["TypeScript", "React Native", "Expo", "Node.js"],
    tier: "featured",
    githubUrl: "https://github.com/vuong280904/Vpan",
    image: "/assets/images/projects/vpan-placeholder.png",
    video: "/assets/video/demo-vpan-v2.mp4",
  },
  {
    id: "spamemail",
    title: "SpamEmail",
    tagline: "ML-powered spam classifier with a live dashboard",
    description:
      "A Naive Bayes spam-detection model trained on labeled email/NLP datasets, served through a Flask backend with a browser dashboard for testing messages in real time.",
    role: "Solo developer",
    tags: ["Python", "Flask", "scikit-learn", "NLP"],
    tier: "secondary",
    githubUrl: "https://github.com/vuong280904/SpamEmail",
    image: "/assets/images/projects/spamemail-placeholder.png",
    
  },
    {
    id: "bookclub",
    title: "BookClub",
    tagline: "Cross-platform book marketplace app",
    description:
      "A Flutter application for browsing, listing, and organizing books, built to run natively across Android, iOS, web, and desktop from a single codebase.",
    role: "Solo developer",
    tags: ["Flutter", "Dart", "C++", "CMake"],
    tier: "secondary",
    githubUrl: "https://github.com/vuong280904/bookClub",
    image: "/assets/images/projects/bookclub-placeholder.png",
  },
  {
    id: "simulationwater",
    title: "SimulationWater",
    tagline: "Browser-based water/fluid motion simulation",
    description:
      "An interactive, front-end simulation exploring fluid or wave motion rendered directly in the browser with HTML/Canvas.",
    role: "Solo developer",
    tags: ["HTML", "Canvas", "JavaScript"],
    tier: "secondary",
    githubUrl: "https://github.com/vuong280904/simulationWater",
    image: "/assets/images/projects/simulationwater-placeholder.png",
    video: "/assets/video/water17.mp4",
  },
];

/** The single hero project rendered full-width at the top of the Projects section. */
export const FEATURED_PROJECT = PROJECTS.find((p) => p.tier === "featured")!;

/** The remaining projects rendered in the smaller, equal-weight grid below it. */
export const SECONDARY_PROJECTS = PROJECTS.filter((p) => p.tier === "secondary");
