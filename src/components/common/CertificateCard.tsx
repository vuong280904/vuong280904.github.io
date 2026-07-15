import { ShieldCheck } from "lucide-react";
import type { CertificateItem } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";

/**
 * Fixed-size card for a horizontal scroll-snap shelf (design spec §9).
 * The glow on hover frames only the badge, not the whole card, since the
 * badge artwork is the thing being showcased.
 */
export function CertificateCard({ certificate }: { certificate: CertificateItem }) {
  return (
    <GlassCard className="group flex-shrink-0 w-[220px] h-[260px] snap-start flex flex-col items-center p-6 text-center hover:-translate-y-1.5 hover:shadow-glow-sm transition-all duration-300">
      <div className="relative mb-4">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand-gradient-radial blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        <img
          src={certificate.badgeImage}
          alt={`${certificate.title} badge`}
          className="h-16 w-16 object-contain"
          loading="lazy"
        />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-wide text-ink-soft dark:text-white/50">
        {certificate.issuer}
      </p>
      <h3 className="mt-2 font-display text-sm font-semibold leading-snug">
        {certificate.title}
      </h3>
      <p className="mt-1 text-xs text-ink-soft dark:text-white/50">{certificate.date}</p>
      <a
        href={certificate.credlyUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
      >
        <ShieldCheck size={13} /> Verify
      </a>
    </GlassCard>
  );
}
