import { SECTION_IDS } from "@/constants/theme";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/common/SkillBadge";
import { SKILLS, SKILL_CATEGORIES } from "@/data/skills";

/**
 * Loosely-scattered masonry field grouped by mono category labels rather
 * than hard-bordered containers (design spec §7). On small screens this
 * simplifies to a wrapped flex grid via responsive classes.
 */
export function Skills() {
  return (
    <section id={SECTION_IDS.skills} className="py-section-mobile md:py-section-tablet lg:py-section overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="Grouped by area — sized by how often I reach for them, not auto-generated from usage stats."
        />

        <div className="mt-14 flex flex-col gap-12">
          {SKILL_CATEGORIES.map((category) => {
            const items = SKILLS.filter((s) => s.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-soft dark:text-white/40 mb-5">
                  {category}
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {items.map((skill, i) => (
                    <SkillBadge key={skill.id} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
