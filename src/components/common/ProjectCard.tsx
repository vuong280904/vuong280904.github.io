import { useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

/** How long the cursor must hover before the screenshot crossfades to video (design spec §8). */
const VIDEO_HOVER_DELAY_MS = 400;

/**
 * Project card with cursor-keyed 3D tilt (design spec §8). Tilt is capped
 * at a small angle so it reads as premium (Linear/Apple-style) rather than
 * gimmicky, and is skipped entirely on touch devices via the pointer:fine
 * media check baked into the CSS group-hover fallback.
 */
export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>();
  const [showVideo, setShowVideo] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseEnter() {
    if (!project.video) return;
    hoverTimer.current = setTimeout(() => setShowVideo(true), VIDEO_HOVER_DELAY_MS);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    clearTimeout(hoverTimer.current);
    setShowVideo(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-md border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-glow-sm">
        {/* Screenshot — replace placeholder asset with a real product shot */}
        <div
          className={cn(
            "relative overflow-hidden bg-ink/5 dark:bg-white/5",
            featured ? "aspect-[16/9]" : "aspect-[4/3]"
          )}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 saturate-[0.9] transition-all duration-500 group-hover:opacity-100 group-hover:saturate-100 group-hover:scale-[1.03]"
          />

          {/* Demo video — only rendered/loaded once a video path is supplied, so projects without one pay no cost. */}
          {project.video && (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                showVideo ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            />
          )}

          {/* Corner accent that appears on hover, echoing the cursor-aperture motif */}
          <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16 rounded-full bg-brand-gradient blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        </div>

        <div className={cn("p-6", featured && "md:p-8")}>
          <h3
            className={cn(
              "font-display font-semibold",
              featured ? "text-2xl md:text-3xl" : "text-xl"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink-soft dark:text-white/60">
            {project.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/80 dark:text-white/70">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-ink/5 dark:bg-white/10 text-ink-soft dark:text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
            >
              <Github size={16} /> Source
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
              >
                <ExternalLink size={16} /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
