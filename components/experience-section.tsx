import { experience } from "@/utils/about-data";
import { SectionTitle } from "@/components/ui";
import { ExperienceTimeline } from "@/components/experience-timeline";

export function ExperienceSection() {
  return (
    <div className="col-span-1 mt-4 md:col-span-12 md:mt-0">
      <SectionTitle>Experience</SectionTitle>
      <ExperienceTimeline experiences={experience} />
    </div>
  );
}
