import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on web development, programming, and technology.",
};

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <p style={{ color: "hsl(var(--muted-foreground))" }}>
        Coming soon. Articles about web development and lessons learned.
      </p>
    </div>
  );
}
