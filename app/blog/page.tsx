import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { PageHeader, TechChip } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my thoughts on web development, programming, and technology.",
};

const posts = getAllPosts();

function formatDate(dateString: string): string {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
    .toUpperCase();
}

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      <PageHeader title="Ramblings." />

      {/* Editorial List */}
      <div className="flex flex-col">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group py-10 border-b grid grid-cols-1 md:grid-cols-12 gap-6 items-start transition-colors"
            style={{ borderColor: "hsl(var(--border))" }}
          >
            {/* Date Column - 3 cols */}
            <div className="md:col-span-3 flex flex-col gap-2">
              <time
                dateTime={post.date}
                className="font-mono text-sm"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {formatDate(post.date)}
              </time>
              {post.readingTime && (
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  {post.readingTime}
                </span>
              )}
            </div>

            {/* Content Column - 8 cols */}
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:underline decoration-2 underline-offset-4">
                {post.title}
              </h2>
              <p
                className="leading-relaxed mb-6 max-w-2xl"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <TechChip key={tag}>{tag}</TechChip>
                ))}
              </div>
            </div>

            {/* Arrow Column - 1 col */}
            <div className="hidden md:flex md:col-span-1 justify-end">
              <ArrowRight
                className="w-6 h-6 transition-all duration-300 group-hover:-rotate-45"
                style={{ color: "hsl(var(--muted-foreground))" }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
