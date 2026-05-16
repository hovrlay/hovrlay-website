import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POSTS, getPostBySlug } from "@/utils/blog";
import BlogPost from "@/views/BlogPost";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = `${post.title} | Hovrlay`;
  const description = post.description ?? "Read this post on the Hovrlay blog.";
  const url = `https://hovrlay.com/blog/${slug}`;
  const imageUrl = post.image ? `https://hovrlay.com${post.image}` : "https://hovrlay.com/social-previews/twitter.jpg";

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <BlogPost slug={slug} />;
}
