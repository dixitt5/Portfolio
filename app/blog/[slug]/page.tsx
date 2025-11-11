import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

const posts = getAllPosts();

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let MDXContent;
  try {
    MDXContent = (await import(`@/content/posts/${slug}.mdx`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <article className=" max-w-none">
        <MDXContent />
      </article>
    </div>
  );
}
