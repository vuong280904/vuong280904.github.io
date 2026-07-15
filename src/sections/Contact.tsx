import { motion } from "framer-motion";
import { Github, Instagram, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { SECTION_IDS, EASE } from "@/constants/theme";
import { CursorAperture } from "@/components/common/CursorAperture";
import { ContactForm } from "@/components/common/ContactForm";
import { SOCIAL_LINKS, CONTACT_EMAIL } from "@/data/socials";
import type { SocialLink } from "@/types";

const ICONS: Record<SocialLink["icon"], typeof Github> = {
  github: Github,
  instagram: Instagram,
  email: Mail,
  linkedin: Mail,
};

/**
 * The one section that flips to dark regardless of site-wide theme,
 * bookending the Hero with the same cursor aperture (design spec §11).
 */
export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — the mailto link below still works.
    }
  }

  return (
    <section
      id={SECTION_IDS.contact}
      className="relative overflow-hidden bg-dark text-white py-section-mobile md:py-section-tablet lg:py-section"
    >
      <CursorAperture size={900} opacity={0.28} />

      <div className="container relative flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: EASE.entrance }}
          className="font-mono text-xs uppercase tracking-[0.08em] text-primary mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE.entrance, delay: 0.05 }}
          className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]"
        >
          Let's build something.
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: EASE.entrance, delay: 0.15 }}
          onClick={handleCopyEmail}
          className="mt-10 inline-flex items-center gap-3 rounded-sm bg-brand-gradient px-10 py-5 font-mono text-base md:text-lg shadow-glow hover:shadow-glow transition-shadow"
        >
          {CONTACT_EMAIL}
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </motion.button>

        <div className="mt-14 flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon === "email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 hover:border-transparent hover:bg-brand-gradient hover:-translate-y-1 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <div className="mt-16 w-full max-w-md">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-white/40 mb-4">
            Or send a message directly
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
