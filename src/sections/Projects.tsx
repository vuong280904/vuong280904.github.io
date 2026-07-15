import { motion } from "framer-motion";
import { SECTION_IDS, EASE } from "@/constants/theme";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/common/ProjectCard";
import { FEATURED_PROJECT, SECONDARY_PROJECTS } from "@/data/projects";

/**
 * Three-tier hierarchy per design spec §8: one full-width hero project,
 * then an equal-weight grid for the rest — visual weight mirrors
 * importance instead of a uniform grid.
 */
export function Projects() {
  return (
    <section id={SECTION_IDS.projects} className="py-section-mobile md:py-section-tablet lg:py-section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          description="Four projects spanning mobile, web, and applied machine learning."
        />

        <div className="mt-12 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE.entrance }}
          >
            <ProjectCard project={FEATURED_PROJECT} featured />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SECONDARY_PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE.entrance }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
