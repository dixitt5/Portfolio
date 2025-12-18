import { skills } from "@/utils/about-data";
import { BentoCard, SectionTitle, TechChip } from "@/components/ui";

export function SkillsSection() {
  return (
    <div className="col-span-1 md:col-span-12">
      <BentoCard>
        <SectionTitle>Core Technologies</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {skills.languages.map((skill) => (
            <TechChip key={skill}>{skill}</TechChip>
          ))}
          {skills.frameworks.map((skill) => (
            <TechChip key={skill}>{skill}</TechChip>
          ))}
        </div>
      </BentoCard>
    </div>
  );
}
