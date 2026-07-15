import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds the gradient-tinted border used on hover states across the site. */
  glowBorder?: boolean;
}

/**
 * The shared glassmorphism surface used by Project, Certificate, and
 * Skill cards (design spec §1.1, §8). Kept as one primitive so every
 * glass surface in the app shares identical blur/opacity/radius values.
 */
const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glowBorder = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-md border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-sm transition-all duration-300 ease-out",
        glowBorder &&
          "hover:border-primary/40 hover:shadow-glow-sm hover:-translate-y-1.5",
        className
      )}
      {...props}
    />
  )
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
