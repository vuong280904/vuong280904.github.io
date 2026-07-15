import { SECTION_IDS } from "@/constants/theme";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateCard } from "@/components/common/CertificateCard";
import { CERTIFICATES } from "@/data/certificates";

/**
 * Horizontal scroll-snap shelf rather than a wrapped grid (design spec §9)
 * — holds an arbitrary, growing badge count without ever looking sparse.
 */
export function Certificates() {
  return (
    <section id={SECTION_IDS.certificates} className="py-section-mobile md:py-section-tablet lg:py-section">
      <div className="container">
        <SectionHeading eyebrow="Credentials" title="Certificates" />
      </div>

      <div className="mt-10 pl-6 md:pl-[calc((100vw-1240px)/2+1.5rem)] flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {CERTIFICATES.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
        <div className="flex-shrink-0 w-6" aria-hidden />
      </div>
    </section>
  );
}
