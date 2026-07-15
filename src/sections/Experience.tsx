import { SECTION_IDS } from "@/constants/theme";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/common/Timeline";
import { EXPERIENCE } from "@/data/experience";

export function Experience() {
  return (
    <section id={SECTION_IDS.experience} className="py-section-mobile md:py-section-tablet lg:py-section">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="A timeline of roles and the outcomes attached to them."
        />
        <div className="mt-12">
          <Timeline items={EXPERIENCE} />
        </div>
      </div>
    </section>
  );
}
