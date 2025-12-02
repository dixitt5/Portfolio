import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import {
  skills,
  achievements,
  openSourceContributions,
  experience,
  education,
  contact,
} from "@/utils/about-data";
import { BentoCard, SectionTitle, TechChip } from "@/components/ui";
import { ExperienceTimeline } from "@/components/experience-timeline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my experience, and what I do.",
};

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
              working in cross-functional teams and building scalable
              applications.
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
                <TechChip key={skill}>{skill}</TechChip>
              ))}
              {skills.frameworks.map((skill) => (
                <TechChip key={skill}>{skill}</TechChip>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* Row 3: Achievements (6 cols) + Open Source (6 cols) */}
        <div className="col-span-1 md:col-span-6">
          {/* Achievements - Ledger Style */}
          <SectionTitle>Achievements</SectionTitle>
          <div
            className="border"
            style={{
              borderColor: "hsl(var(--foreground))",
              borderWidth: "1px",
            }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr_auto_auto] items-center"
                style={{
                  borderBottom:
                    index < achievements.length - 1
                      ? "1px solid hsl(var(--foreground))"
                      : "none",
                }}
              >
                {/* Index */}
                <div
                  className="p-3 font-mono text-2xl font-bold self-stretch flex items-center"
                  style={{
                    borderRight: "1px solid hsl(var(--foreground))",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Event + Project */}
                <div className="p-3">
                  <div className="font-bold text-sm uppercase tracking-tight">
                    {achievement.event}
                  </div>
                  <div
                    className="font-mono text-xs"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {achievement.project}
                  </div>
                </div>

                {/* Rank Badge */}
                <div
                  className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider self-center"
                  style={{
                    backgroundColor: "hsl(var(--foreground))",
                    color: "hsl(var(--background))",
                  }}
                >
                  {achievement.rank}
                </div>

                {/* Prize */}
                <div
                  className="p-3 font-mono text-sm font-bold text-right min-w-[80px]"
                  style={{
                    borderLeft: "1px solid hsl(var(--foreground))",
                  }}
                >
                  {achievement.prize || "—"}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-6">
          {/* Open Source - Terminal Output Style */}
          <SectionTitle>Open Source</SectionTitle>
          <div
            className="border"
            style={{
              borderColor: "hsl(var(--foreground))",
              borderWidth: "1px",
            }}
          >
            {/* Stats Header - 70/30 split */}
            <div
              className="grid grid-cols-[2fr_1fr]"
              style={{ borderBottom: "1px solid hsl(var(--foreground))" }}
            >
              {/* PR Count - Hero Number (wider) */}
              <div
                className="p-4"
                style={{ borderRight: "1px solid hsl(var(--foreground))" }}
              >
                <div
                  className="font-mono text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  PRS_MERGED
                </div>
                <div className="font-black text-5xl md:text-6xl tracking-tighter">
                  {openSourceContributions.reduce(
                    (acc, contribution) => acc + contribution.prs.length,
                    0
                  )}{" "}
                  +
                </div>
              </div>

              {/* Bounties - Secondary (narrower) */}
              <div className="p-4">
                <div
                  className="font-mono text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  EARNED
                </div>
                <div
                  className="font-mono text-lg md:text-xl font-bold tracking-tight"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  $4.5k+
                </div>
              </div>
            </div>

            {/* PR List - File Tree Style */}
            <div className="p-4 font-mono text-xs space-y-3">
              {openSourceContributions.map((contribution, index) => (
                <div key={index}>
                  {/* Repo Path */}
                  <div
                    className="font-bold"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {contribution.path}
                  </div>
                  {/* PRs with tree structure */}
                  <div className="mt-1">
                    {contribution.prs.map((pr, prIndex) => {
                      const isLast = prIndex === contribution.prs.length - 1;
                      return (
                        <div key={prIndex} className="flex items-center">
                          {/* Tree connector */}
                          <span
                            className="select-none w-6 shrink-0"
                            style={{ color: "hsl(var(--muted-foreground))" }}
                          >
                            {isLast ? "└─" : "├─"}
                          </span>
                          {/* Tag + Description */}
                          <Link
                            href={pr.link}
                            target="_blank"
                            className="flex items-center gap-2"
                          >
                            <span
                              className="px-1 font-bold text-[10px] leading-none py-0.5"
                              style={{
                                backgroundColor: "hsl(var(--foreground))",
                                color: "hsl(var(--background))",
                              }}
                            >
                              {pr.type}
                            </span>
                            <span style={{ color: "hsl(var(--foreground))" }}>
                              {pr.title.replace(`${pr.type}: `, "")}
                            </span>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 4: Experience (Full Width) */}
        <div className="col-span-1 md:col-span-12">
          <SectionTitle>Experience</SectionTitle>
          <ExperienceTimeline experiences={experience} />
        </div>

        {/* Row 5: Education - Brutalist data grid */}
        <div className="col-span-1 md:col-span-12">
          <SectionTitle>Education</SectionTitle>
          <div
            className="border grid grid-cols-1 md:grid-cols-[200px_1fr]"
            style={{
              borderColor: "hsl(var(--foreground))",
              borderWidth: "1px",
            }}
          >
            {/* Left Column: Metadata */}
            <div
              className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider"
              style={{
                borderRight: "1px solid hsl(var(--foreground))",
              }}
            >
              <div className="font-bold mb-2">{education.period}</div>
              <div
                className="mb-1"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                CGPA: {education.cgpa}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="p-4 md:p-5">
              <h3 className="text-base md:text-lg font-bold uppercase tracking-tight mb-2">
                {education.degree}
              </h3>
              <p
                className="font-mono text-xs"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                → {education.institution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
