import { motion } from "framer-motion";

/**
 * Animated wordmark. Replace the inline SVG below with the real logo file
 * once supplied — kept as SVG (not an <img>) so the gradient stays a
 * live CSS/SVG gradient rather than a flattened raster.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#hero"
      aria-label="Bui Thanh Vuong — home"
      className={className}
    >
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="36" y2="36">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="55%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="10" fill="url(#logo-gradient)" />
        <text
          x="18"
          y="24"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="700"
          fontSize="16"
          fill="white"
        >
          V
        </text>
      </motion.svg>
    </a>
  );
}
