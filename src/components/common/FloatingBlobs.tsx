import { motion } from "framer-motion";

/**
 * Ambient background blobs used behind the Hero and Contact sections
 * (design spec §3, §11). Purely decorative — aria-hidden — and paired
 * with a low-opacity noise texture (in globals.css `.noise`) so the
 * gradient reads as light through glass rather than a flat digital blur.
 */
export function FloatingBlobs() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        className="absolute top-1/4 left-1/4 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-[380px] w-[380px] rounded-full bg-accent/25 blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="noise absolute inset-0" />
    </div>
  );
}
