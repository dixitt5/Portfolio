import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects.",
};

const projects = [
  {
    id: 1,
    title: "QuickCue",
    description:
      "Chrome extension for efficient video navigation using Motion API and Web APIs. Available on Chrome Web Store.",
    tech: "Motion, Web APIs, ShadCn",
    year: "2024",
    link: "https://chromewebstore.google.com/detail/Quick%20Cue/pcdhefoofnagnpdmlepnlgkbmgapfijl",
  },
  {
    id: 2,
    title: "Globetrotter",
    description:
      "AI-powered personalized travel planning application. Winner of Odoo Hackathon '25 (₹1,00,000 prize).",
    tech: "ReactJS, AI personalization",
    year: "2025",
    link: "https://github.com/dixitt5/GlobeTrotter",
  },
  {
    id: 3,
    title: "SmartHive",
    description:
      "Blockchain-based decentralized application with 3D visualization. 2nd place in Hack-NU-Thon 4.0.",
    tech: "Solidity, Truffle, ReactJS, web3.js, Quicknode, Three.js",
    year: "2024",
    link: "https://devfolio.co/projects/smarthive-d43a",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-12">Projects</h1>

      <div className="space-y-12">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border-b pb-12"
            style={{ borderColor: "hsl(var(--border))" }}
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-medium">{project.title}</h2>
              <span
                className="text-sm"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {project.year}
              </span>
            </div>
            <p
              className="mb-2"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {project.description}
            </p>
            <p
              className="text-sm mb-4"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <span className="font-medium">Tech:</span> {project.tech}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              View Project →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
