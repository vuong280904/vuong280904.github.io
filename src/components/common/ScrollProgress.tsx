import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/** Thin gradient bar pinned to the very top of the viewport (spec §13). */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand-gradient z-[60] origin-left"
      style={{ scaleX: progress }}
      transition={{ duration: 0.1 }}
    />
  );
}
