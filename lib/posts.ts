export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author?: string;
}

export const posts: Post[] = [
  {
    slug: "comprehensive",
    title: "Comprehensive Guide to Modern Web Development",
    description:
      "A comprehensive blog post showcasing all Prose UI components including typography, code blocks, callouts, images, tables, and mathematical formulas.",
    date: "2024-11-09",
    tags: ["web development", "react", "nextjs", "tutorial"],
    author: "Dixit Tilaji",
  },
];

export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

