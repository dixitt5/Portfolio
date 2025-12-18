import { HeroSection } from "@/components/hero-section";
import { AboutHeader } from "@/components/about-header";
import { BioAndContact } from "@/components/bio-and-contact";
import { SkillsSection } from "@/components/skills-section";
import { AchievementsSection } from "@/components/achievements-section";
import { OpenSourceSection } from "@/components/opensource-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <AboutHeader />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
          <BioAndContact />
          <SkillsSection />
          <AchievementsSection />
          <OpenSourceSection />
          <ExperienceSection />
          <EducationSection />
        </div>
      </div>
    </div>
  );
}
