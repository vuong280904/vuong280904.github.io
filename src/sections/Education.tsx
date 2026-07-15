import { motion } from "framer-motion";
import { SECTION_IDS, EASE } from "@/constants/theme";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { EDUCATION } from "@/data/education";

/**
 * Deliberately quieter than Experience (design spec §6): flat cards,
 * no timeline rail, no gradient — the restraint signals "already
 * established credential," not an unfolding narrative.
 */
export function Education() {
  return (
    <section id={SECTION_IDS.education} className="py-section-mobile md:py-section-tablet lg:py-section">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE.entrance }}
            >
              <GlassCard className="p-6">
                <p className="font-mono text-xs text-ink-soft dark:text-white/50">
                  {edu.dateRange}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">
                  {edu.institution}
                </h3>
                <p className="mt-1 text-sm text-ink/80 dark:text-white/70">{edu.degree}</p>
                <p className="mt-3 text-sm text-ink-soft dark:text-white/50">{edu.focus}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
