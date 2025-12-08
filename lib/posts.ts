export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author?: string;
  readingTime?: string;
  externalUrl?: string;
}

export const posts: Post[] = [
  {
    slug: "quick-cue",
    title: "Quick Cue",
    description: "How I built Quick Cue for better prompt management in browser",
    date: "2025-04-11",
    tags: ["browser apis", "motion", "react"],
    externalUrl: "https://blog.incubyte.co/blog/quick-cue-chrome-extension/",
    readingTime: "3 min read",
    author: "Dixit Tilaji",
  },
  {
    slug: "using-firebase-cloud-functions",
    title: "Exporting Firestore Data as excel using cloud functions",
    description: "Me playing with firebase cloud functions",
    date: "2024-05-07",
    tags: ["firebase", "react", "cloud functions"],
    externalUrl: "https://blog.incubyte.co/blog/using-firebase-cloud-functions",
    readingTime: "10 min read",
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

