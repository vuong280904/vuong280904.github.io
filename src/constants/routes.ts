import { SECTION_IDS } from "./theme";

/** Single-page scroll navigation — every entry maps to an in-page section id. */
export const NAV_LINKS = [
  { label: "About", href: `#${SECTION_IDS.about}` },
  { label: "Experience", href: `#${SECTION_IDS.experience}` },
  { label: "Skills", href: `#${SECTION_IDS.skills}` },
  { label: "Projects", href: `#${SECTION_IDS.projects}` },
  { label: "Certificates", href: `#${SECTION_IDS.certificates}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
] as const;
