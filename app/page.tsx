import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-4">Dixit Tilaji</h1>
      <p
        className="text-lg mb-12"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        Software Craftsperson at Incubyte. Building scalable web applications
        with React, Next.js, and Node.js.
      </p>

      <div className="space-y-12">
        <section>
          <h2
            className="text-xl tracking-wider mb-4"
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
            className="text-xl tracking-wider mb-4"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Contact
          </h2>
          <div className="space-y-2">
            <a
              href="mailto:tilajidixit@gmail.com"
              className="block hover:underline"
            >
              Email
            </a>
            <a
              href="https://github.com/dixitt5"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dixit5/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@tilajidixit"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              Medium
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
