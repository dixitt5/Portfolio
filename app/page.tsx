import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-4">Dixit Tilaji</h1>
      <p
        className="text-lg mb-12"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        Full-stack developer. Building minimal, functional web applications.
      </p>

      <div className="space-y-12">
        <section>
          <h2
            className="text-sm uppercase tracking-wider mb-4"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Navigation
          </h2>
          <div className="space-y-2">
            <Link href="/about" className="block hover:underline">
              About
            </Link>
            <Link href="/projects" className="block hover:underline">
              Projects
            </Link>
            <Link href="/blog" className="block hover:underline">
              Blog
            </Link>
            <Link href="/games" className="block hover:underline">
              Games
            </Link>
          </div>
        </section>

        <section>
          <h2
            className="text-sm uppercase tracking-wider mb-4"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Contact
          </h2>
          <div className="space-y-2">
            <a
              href="mailto:your.email@example.com"
              className="block hover:underline"
            >
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              Twitter
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
