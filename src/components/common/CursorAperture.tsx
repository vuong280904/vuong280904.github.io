import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface CursorApertureProps {
  /** Large + slow in Hero/Contact, small + subtle elsewhere — spec §0, §13. */
  size?: number;
  opacity?: number;
}

/**
 * The site's signature element: a soft radial gradient that follows the
 * cursor with spring physics. One component instantiated per section so
 * each can tune its own size/opacity while sharing identical motion feel.
 * No-ops gracefully on touch devices (see useMousePosition).
 */
export function CursorAperture({ size = 700, opacity = 0.35 }: CursorApertureProps) {
  const { position, isFinePointer } = useMousePosition();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 60 });
  const springY = useSpring(y, { damping: 30, stiffness: 60 });

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position, x, y]);

  if (!isFinePointer) {
    // Static, calmer fallback for touch devices — see design spec §15.
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <div
          className="rounded-full bg-brand-gradient-radial blur-[100px]"
          style={{ width: size * 0.7, height: size * 0.7, opacity: opacity * 0.6 }}
        />
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 rounded-full bg-brand-gradient-radial blur-[110px] -z-10"
      style={{
        width: size,
        height: size,
        opacity,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
