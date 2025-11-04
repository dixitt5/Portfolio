import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects.",
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with cart, checkout, and admin dashboard.",
    year: "2024",
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates.",
    year: "2023",
    link: "https://github.com/yourusername/task-manager",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "Modern blogging platform with MDX support and analytics.",
    year: "2023",
    link: "https://github.com/yourusername/blog",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with forecasts and historical data.",
    year: "2022",
    link: "https://github.com/yourusername/weather",
  },
  {
    id: 5,
    title: "Portfolio Generator",
    description: "Tool to generate customizable portfolio websites from templates.",
    year: "2022",
    link: "https://github.com/yourusername/portfolio-gen",
  },
  {
    id: 6,
    title: "API Monitoring Tool",
    description: "Monitor and analyze API performance with detailed metrics.",
    year: "2021",
    link: "https://github.com/yourusername/api-monitor",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-12">Projects</h1>

      <div className="space-y-12">
        {projects.map((project) => (
          <article key={project.id} className="border-b pb-12" style={{ borderColor: "hsl(var(--border))" }}>
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-medium">{project.title}</h2>
              <span className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                {project.year}
              </span>
            </div>
            <p className="mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              View on GitHub →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
