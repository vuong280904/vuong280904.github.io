import { motion } from "framer-motion";
import { SECTION_IDS, EASE } from "@/constants/theme";
import { GlassCard } from "@/components/ui/GlassCard";

const BEATS = [
  {
    eyebrow: "Origin",
    text: "Curiosity about how software actually works led from tinkering with small scripts to building full applications — the moment a program did something real for the first time is what kept me building.",
  },
  {
    eyebrow: "Craft",
    text: "Today that means shipping across the stack: mobile apps in Flutter and React Native, web backends in Node and Flask, and applied AI/ML work like spam classification with Naive Bayes models.",
  },
  {
    eyebrow: "Direction",
    text: "As a final-year software engineering student, the next step is applying that same end-to-end range on a team, on problems with real users and real constraints.",
  },
];

/**
 * Storytelling About section (design spec §4): three short narrative beats
 * instead of a resume paragraph, in an asymmetric 60/40 layout so it never
 * reads as a centered template bio.
 */
export function About() {
  return (
    <section id={SECTION_IDS.about} className="py-section-mobile md:py-section-tablet lg:py-section">
      <div className="container grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 flex flex-col gap-10">
          {BEATS.map((beat, i) => (
            <motion.div
              key={beat.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.15, ease: EASE.entrance }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-primary mb-2">
                {beat.eyebrow}
              </p>
              <p className="text-lg leading-relaxed text-ink/85 dark:text-white/80 max-w-xl">
                {beat.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE.entrance }}
            className="relative rounded-lg overflow-hidden border border-white/20 dark:border-white/10 aspect-[4/5]"
          >
            {/* Replace with a real portrait photo */}
            <img
              src="/assets/images/profile.jpg"
              alt="Portrait of Bui Thanh Vuong"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-gradient opacity-10" />
          </motion.div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <GlassCard className="p-4 text-center">
              <p className="font-display text-2xl font-bold text-gradient">4+</p>
              <p className="font-mono text-[11px] text-ink-soft dark:text-white/50 mt-1">
                Shipped projects
              </p>
            </GlassCard>
            <GlassCard className="p-4 text-center">
              <p className="font-display text-2xl font-bold text-gradient">Final Year</p>
              <p className="font-mono text-[11px] text-ink-soft dark:text-white/50 mt-1">
                Software Engineering
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
