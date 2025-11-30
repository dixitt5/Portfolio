import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { projects } from "@/utils/projects-data";
import { PageHeader, TechChip, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects.",
};

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative flex flex-col justify-between border p-8 h-full transition-colors duration-300 hover:border-foreground ${
        featured ? "md:col-span-2" : ""
      }`}
      style={{
        backgroundColor: "hsl(var(--card))",
        borderColor: "hsl(var(--border))",
      }}
    >
      {/* Header: Number/Year + Arrow */}
      <div className="flex justify-between items-start mb-6">
        <span
          className="font-mono text-sm"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {String(index + 1).padStart(2, "0")} / {project.year}
        </span>
        <ArrowRight
          className="w-6 h-6 transition-all duration-300 group-hover:-rotate-45"
          style={{ color: "hsl(var(--muted-foreground))" }}
        />
      </div>

      {/* Content */}
      <div className={`mb-8 ${featured ? "max-w-2xl" : ""}`}>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:underline decoration-2 underline-offset-4 mb-3">
          {project.title}
        </h3>
        <p
          style={{ color: "hsl(var(--muted-foreground))" }}
          className={`leading-relaxed ${featured ? "max-w-2xl" : ""}`}
        >
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className={`flex flex-wrap gap-2 mt-auto ${project.badge ? "pr-20" : ""}`}>
        {project.tech.map((tech) => (
          <TechChip key={tech}>{tech}</TechChip>
        ))}
      </div>

      {/* Corner Anchor Badge */}
      {project.badge && (
        <Badge variant={project.badge.variant} cornerAnchor>
          {project.badge.text}
        </Badge>
      )}

      {/* Full Card Hit Area */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title} Project`}
      />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      <PageHeader title="Projects." itemCount={projects.length} />

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            featured={project.featured}
          />
        ))}
      </div>
    </div>
  );
}
