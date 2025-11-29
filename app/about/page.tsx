import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  skills,
  achievements,
  openSourceContributions,
  experience,
  education,
  contact,
} from "@/utils/about-data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my experience, and what I do.",
};

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border p-6 md:p-8 h-full ${className}`}
      style={{
        backgroundColor: "hsl(var(--card))",
        borderColor: "hsl(var(--border))",
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-sm font-bold uppercase tracking-wider mb-6 block"
      style={{ color: "hsl(var(--muted-foreground))" }}
    >
      {children}
    </span>
  );
}

function SkillChip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="px-2.5 py-1 text-xs font-medium font-mono border rounded-sm"
      style={{
        backgroundColor: "hsl(var(--accent))",
        borderColor: "hsl(var(--border))",
      }}
    >
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      {/* Header */}
      <header className="mb-12 md:mb-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-4">
          About Me.
        </h1>
        <p
          className="text-xl md:text-2xl font-medium tracking-tight"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Software Craftsperson specializing in scalable web applications.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
        {/* Row 1: Bio (8 cols) + Contact (4 cols) */}
        <div className="col-span-1 md:col-span-8">
          <BentoCard>
            <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight">
              I craft robust software solutions with a focus on clean code,
              test-driven development, and seamless user experiences. Currently
              working in cross-functional teams and building scalable applications
              using React, Next.js, Node.js, NestJS, and AWS.
            </p>
            <p
              className="text-lg md:text-xl mt-6 leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              I believe every code written should tell a story.
            </p>
          </BentoCard>
        </div>

        <div className="col-span-1 md:col-span-4">
          <BentoCard className="flex flex-col justify-between">
            <div>
              <SectionTitle>Connect</SectionTitle>
              <ul className="space-y-4">
                <li>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold hover:underline flex items-center group"
                  >
                    GitHub
                    <ArrowRight
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold hover:underline flex items-center group"
                  >
                    LinkedIn
                    <ArrowRight
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={contact.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold hover:underline flex items-center group"
                  >
                    Medium
                    <ArrowRight
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-lg font-bold hover:underline flex items-center group"
                  >
                    Email
                    <ArrowRight
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </BentoCard>
        </div>

        {/* Row 2: Skills (Full Width) */}
        <div className="col-span-1 md:col-span-12">
          <BentoCard>
            <SectionTitle>Core Technologies</SectionTitle>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
              {skills.frameworks.map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* Row 3: Achievements (6 cols) + Open Source (6 cols) */}
        <div className="col-span-1 md:col-span-6">
          <BentoCard>
            <SectionTitle>Achievements</SectionTitle>
            <ul className="space-y-6">
              {achievements.map((achievement, index) => (
                <li key={index}>
                  <h3 className="text-lg font-bold mb-1">{achievement.title}</h3>
                  <p style={{ color: "hsl(var(--muted-foreground))" }}>
                    {achievement.description}
                  </p>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>

        <div className="col-span-1 md:col-span-6">
          <BentoCard>
            <SectionTitle>Open Source</SectionTitle>
            <p
              className="text-sm mb-6"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              $4,500+ earned through open-source bounties
            </p>
            <ul className="space-y-6">
              {openSourceContributions.map((contribution, index) => (
                <li key={index}>
                  <h3 className="text-lg font-bold mb-1">
                    {contribution.project}
                  </h3>
                  <p
                    className="text-sm mb-2"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {contribution.description}
                  </p>
                  <div className="space-y-1">
                    {contribution.prs.map((pr, prIndex) => (
                      <a
                        key={prIndex}
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm py-1 group"
                      >
                        <CheckCircle2 
                                        className="w-4 h-4 flex-shrink-0 transition-colors"
                                        style={{ color: "hsl(var(--muted-foreground))" }}
                                      />
                        <span className="group-hover:underline">{pr.title}</span>
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>

        {/* Row 4: Experience (9 cols) + Education (3 cols) */}
        <div className="col-span-1 md:col-span-9">
          <BentoCard>
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-10">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4"
                >
                  <div className="md:col-span-1">
                    <p
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {job.period}
                    </p>
                  </div>
                  <div className="md:col-span-3 relative">
                    <div
                      className="hidden md:block absolute -left-4 top-1 bottom-0 w-px"
                      style={{ backgroundColor: "hsl(var(--border))" }}
                    />
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <p
                      className="text-lg font-medium mb-2"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {job.company}
                    </p>
                    <ul
                      className="list-disc list-outside ml-4 space-y-1.5 leading-relaxed"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {job.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>

        <div className="col-span-1 md:col-span-3">
          <BentoCard>
            <SectionTitle>Education</SectionTitle>
            <div>
              <h3 className="text-lg font-bold mb-1">{education.degree}</h3>
              <p
                className="mb-1"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {education.institution}
              </p>
              <p
                className="text-sm mb-4"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {education.period}
              </p>
              <p
                className="text-sm"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                CGPA: {education.cgpa}
              </p>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}
