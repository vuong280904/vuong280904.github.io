import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/constants/theme";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * The recurring "mono eyebrow + Space Grotesk title" pattern used at the
 * top of every section (design spec §1.2). One-shot reveal on scroll-into-view.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto", className)}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: EASE.entrance }}
        className="font-mono text-xs uppercase tracking-[0.08em] text-primary mb-3"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: EASE.entrance, delay: 0.05 }}
        className="font-display font-bold text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.01em]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE.entrance, delay: 0.1 }}
          className={cn(
            "mt-4 text-ink-soft dark:text-white/60 max-w-xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
