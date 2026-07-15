import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CursorAperture } from "@/components/common/CursorAperture";
import { TypingText } from "@/components/common/TypingText";
import { FloatingBlobs } from "@/components/common/FloatingBlobs";
import { EASE, SECTION_IDS } from "@/constants/theme";
import { FULL_NAME, ROLE_TITLE, LOCATION, HERO_TAGLINES } from "@/data/socials";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE.entrance } },
};

/**
 * Full-viewport thesis statement (design spec §3). Content sits at ~46%
 * from top rather than dead-center, per the spec's "optically centered"
 * rationale. Word-by-word stagger on load completes under ~1.4s.
 */
export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <CursorAperture size={800} opacity={0.3} />
      <FloatingBlobs />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container flex flex-col items-center text-center pt-16"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.08em] text-primary mb-6"
        >
          {ROLE_TITLE} — {LOCATION}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-bold text-[clamp(3.5rem,8vw,7rem)] leading-[1.02] tracking-[-0.02em] max-w-4xl"
        >
          {FULL_NAME.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-gradient">
            {FULL_NAME.split(" ").slice(-1)}
          </span>
        </motion.h1>

        <motion.div variants={item} className="mt-6">
          <TypingText phrases={HERO_TAGLINES} />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-ink-soft dark:text-white/60"
        >
          Final-year software engineering student building real-world
          applications across web, mobile, and AI.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="default" variant="primary">
            <a href={`#${SECTION_IDS.projects}`}>View Projects</a>
          </Button>
          <Button asChild size="default" variant="outline">
            <a href={`#${SECTION_IDS.contact}`}>Get in Touch</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft dark:text-white/40 [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-ink-soft dark:text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
