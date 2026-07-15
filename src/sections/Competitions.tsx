import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SECTION_IDS, EASE } from "@/constants/theme";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { COMPETITIONS } from "@/data/competitions";

export function Competitions() {
  return (
    <section id={SECTION_IDS.competitions} className="py-section-mobile md:py-section-tablet lg:py-section">
      <div className="container">
        <SectionHeading eyebrow="Beyond the Classroom" title="Competitions" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETITIONS.map((comp, i) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE.entrance }}
            >
              <GlassCard glowBorder className="p-6 h-full flex flex-col">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-brand-gradient text-white w-fit">
                  <Trophy size={12} /> {comp.placement}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{comp.name}</h3>
                <p className="mt-1 text-xs text-ink-soft dark:text-white/50">
                  {comp.organizer} · {comp.date}
                </p>
                <p className="mt-3 text-sm text-ink/80 dark:text-white/70">{comp.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
