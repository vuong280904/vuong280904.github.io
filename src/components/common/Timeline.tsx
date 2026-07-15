import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ExperienceItem } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";

/**
 * Vertical timeline whose rail fills with the brand gradient as the user
 * scrolls through it — the gradient literally tracks career progress
 * (design spec §5), rather than being decorative.
 */
export function Timeline({ items }: { items: ExperienceItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative pl-10 md:pl-16">
      {/* Base rail */}
      <div className="absolute left-3 md:left-[15%] top-0 bottom-0 w-[2px] bg-line dark:bg-white/10" />
      {/* Progress-filled rail */}
      <motion.div
        style={{ height: railHeight }}
        className="absolute left-3 md:left-[15%] top-0 w-[2px] bg-brand-gradient"
      />

      <div className="flex flex-col gap-12">
        {items.map((item, i) => (
          <div key={item.id} className="relative">
            <span className="absolute -left-[34px] md:-left-[calc(15%-6px)] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background dark:bg-dark" />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <GlassCard glowBorder className="p-6">
                <p className="font-mono text-xs text-ink-soft dark:text-white/50">
                  {item.dateRange}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  {item.role} · {item.company}
                </h3>
                <p className="mt-2 text-sm text-ink/80 dark:text-white/70">{item.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.achievements.map((a) => (
                    <li key={a} className="text-sm text-ink/70 dark:text-white/60 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-primary">
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-ink/5 dark:bg-white/10 text-ink-soft dark:text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
