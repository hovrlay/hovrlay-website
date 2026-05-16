import type { Metadata } from "next";
import Blog from "@/views/Blog";

export const metadata: Metadata = {
  title: "Blog | Hovrlay",
  description: "Learn more about Hovrlay and get product updates.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Hovrlay",
    description: "Learn more about Hovrlay and get product updates.",
    url: "https://hovrlay.com/blog",
  },
};

export default function BlogPage() {
  return <Blog />;
}
