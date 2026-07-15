import { motion } from "framer-motion";
import type { SkillItem } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

const SIZE_MAP: Record<SkillItem["weight"], string> = {
  lg: "w-32 h-32 md:w-36 md:h-36",
  md: "w-28 h-28 md:w-32 md:h-32",
  sm: "w-24 h-24 md:w-28 md:h-28",
};

interface SkillBadgeProps {
  skill: SkillItem;
  index: number;
}

/**
 * Floating technology card — explicitly NOT a progress bar (design spec §7).
 * Idle float animation has a per-card randomized phase/duration so the
 * whole field feels alive without drawing the eye to one spot.
 */
export function SkillBadge({ skill, index }: SkillBadgeProps) {
  const duration = 4 + (index % 4); // 4-7s, deterministic per index
  const delay = (index % 5) * 0.3;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.04 }}
    >
      {/* Separate wrapper for the infinite idle float so it never fights the one-shot entrance transition above. */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <GlassCard
          glowBorder
          className={cn(
            "group flex flex-col items-center justify-center gap-2 p-4 cursor-default",
            SIZE_MAP[skill.weight]
          )}
        >
          <span className="font-display text-sm font-semibold text-center leading-tight group-hover:text-gradient transition-colors">
            {skill.name}
          </span>
          <span className="font-mono text-[10px] text-ink-soft dark:text-white/50 opacity-0 group-hover:opacity-100 transition-opacity text-center">
            {skill.proficiency}
          </span>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
