import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my experience, and what I do.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-12">About</h1>
      
      <div className="space-y-12">
        <section>
          <p className="mb-4">
            I'm a full-stack developer focused on building minimal, functional web applications.
          </p>
          <p style={{ color: "hsl(var(--muted-foreground))" }}>
            With experience in both frontend and backend development, I work on projects
            that emphasize simplicity and performance.
          </p>
        </section>

        <section>
          <h2 className="text-sm uppercase tracking-wider mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
            Experience
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-1">Senior Developer</h3>
              <p className="text-sm mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                Company Name · 2022 - Present
              </p>
              <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                Leading development of web applications. Mentoring developers and establishing best practices.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Full Stack Developer</h3>
              <p className="text-sm mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                Another Company · 2020 - 2022
              </p>
              <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                Built and maintained client projects, focusing on performance and user experience.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Junior Developer</h3>
              <p className="text-sm mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                First Company · 2018 - 2020
              </p>
              <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                Started career learning fundamentals and contributing to web projects.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm uppercase tracking-wider mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
            Contact
          </h2>
          <div className="space-y-2">
            <a href="mailto:your.email@example.com" className="block hover:underline">
              your.email@example.com
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="block hover:underline">
              GitHub
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="block hover:underline">
              Twitter
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
