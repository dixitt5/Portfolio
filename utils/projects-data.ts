export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: string;
  link: string;
  badge?: {
    text: string;
    variant: "winner" | "runner-up";
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "QuickCue",
    description:
      "Browser extension for efficient local prompt management and easy to use injection of prompts",
    tech: ["Motion", "Shadcn", "Browser APIs", "React"],
    year: "2025",
    link: "https://chromewebstore.google.com/detail/Quick%20Cue/pcdhefoofnagnpdmlepnlgkbmgapfijl",
  },
  {
    id: 2,
    title: "Globetrotter",
    description:
      "AI-powered personalized travel planning application. Winner of Odoo Hackathon '25 (₹1,50,000 prize).",
    tech: ["ReactJS", "Gemini API", "NestJS"],
    year: "2025",
    link: "https://github.com/dixitt5/GlobeTrotter",
    badge: {
      text: "Winner",
      variant: "winner",
    },
  },
  {
    id: 3,
    title: "SmartHive",
    description:
      "Blockchain-based decentralized application with 3D visualization. Secured 2nd place in Hack-NU-Thon 4.0.",
    tech: ["Solidity", "Three.js", "Web3.js"],
    year: "2024",
    link: "https://devfolio.co/projects/smarthive-d43a",
    badge: {
      text: "2nd Place",
      variant: "runner-up",
    },
    featured: true,
  },
];
