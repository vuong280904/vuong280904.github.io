import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/routes";
import { SECTION_IDS } from "@/constants/theme";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

/**
 * Fixed nav that shrinks + gains a glass background after 80px of scroll,
 * with a gradient underline that slides between links to the active
 * section (design spec §2).
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(Object.values(SECTION_IDS));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "pt-3" : "pt-6"
        )}
      >
        <div
          className={cn(
            "container flex items-center justify-between transition-all duration-300 rounded-md",
            scrolled &&
              "glass mx-auto max-w-[1000px] px-4 py-2 shadow-sm"
          )}
        >
          <Logo />

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === `#${activeId}`;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-ink/80 dark:text-white/80 hover:text-ink dark:hover:text-white transition-colors py-1"
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-brand-gradient rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm" variant="outline">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <button
            className="md:hidden flex h-10 w-10 items-center justify-center text-ink dark:text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile full-height overlay menu (design spec §15) */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-dark text-white md:hidden"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-display text-2xl font-medium"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </motion.div>
    </>
  );
}
