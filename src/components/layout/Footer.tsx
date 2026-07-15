import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FULL_NAME } from "@/data/socials";
import { NAV_LINKS } from "@/constants/routes";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/70 border-t border-white/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 py-10">
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-semibold text-white">{FULL_NAME}</p>
          <p className="font-mono text-xs mt-1">© {year} — All rights reserved.</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-xs text-white/40">designed &amp; built by {FULL_NAME}</p>
      </div>

      <BackToTop />
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href="#hero"
      aria-label="Back to top"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
      transition={{ duration: 0.25 }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full glass text-white shadow-glow-sm hover:-translate-y-1 transition-transform"
    >
      <ArrowUp size={18} />
    </motion.a>
  );
}
