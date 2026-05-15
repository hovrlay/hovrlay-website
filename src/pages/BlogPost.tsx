import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { BlogPostSidebar } from "@/components/BlogPostSidebar";
import { AUTHORS, POSTS, formatLongDate, getBlogBody, getPostBySlug } from "@/utils/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);
  const Body = getBlogBody(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    if (post) {
      document.title = `${post.title} | Hovrlay`;
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const author = AUTHORS[post.author];
  const otherPosts = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col px-5 md:px-8 py-8 sm:py-10 md:py-12 mt-16">
      <article className="w-full">
        <header className="mt-4 mb-8 tracking-tighter lg:mt-16">
          <div className="w-full">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-medium tracking-tight text-white">
                {post.category}
              </span>
            </div>
            <h1 className="mb-4 text-4xl leading-tight font-bold tracking-tighter text-foreground">
              {post.title}
            </h1>
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span>{formatLongDate(post.date)}</span>
              <span>-</span>
              <span>{post.readMinutes} min read</span>
              <span>-</span>
              <div className="flex items-center gap-2">
                <img
                  src={author.avatar}
                  alt={author.name}
                  width={24}
                  height={24}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="font-normal">{author.name}</span>
              </div>
            </div>
            {post.description && (
              <p className="text-sm leading-relaxed font-light text-gray-700">{post.description}</p>
            )}
          </div>
        </header>

        {post.image && (
          <div className="mt-8 mb-8 aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-[2/1]">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}

        {Body && (
          <div className="mt-10 grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(240px,30%)] lg:gap-x-12 xl:gap-x-16">
            <div className="min-w-0">
              <Body />
            </div>
            {post.sections && post.sections.length > 0 && (
              <BlogPostSidebar sections={post.sections} />
            )}
          </div>
        )}
      </article>

      {otherPosts.length > 0 && (
        <section className="mt-28 sm:mt-28 md:mt-32 lg:mt-36 pb-20">
          <div className="mb-12 text-left">
            <h2 className="font-light text-gray-400 lg:text-lg">Other posts</h2>
            <p className="mt-2 text-2xl text-black lg:text-3xl">Check out more of our stories.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((other) => (
              <article key={other.slug} className="group">
                <Link to={`/blog/${other.slug}`}>
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 transition-shadow hover:shadow-md">
                    {other.image && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={other.image}
                          alt={other.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 text-xs text-gray-400">
                        {formatLongDate(other.date)} - {other.readMinutes} min read
                      </div>
                      <h3 className="mb-3 line-clamp-2 text-xl leading-tight font-semibold text-gray-900">
                        {other.title}
                      </h3>
                      {other.description && (
                        <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-600">
                          {other.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full border border-gray-100 bg-white px-2.5 py-0.5 text-xs font-light text-gray-400 shadow-sm">
                          {other.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
