import { useEffect, useMemo, useState } from "react";
import BlogUpdatesIcon from "@/assets/blog-updates.svg?react";
import BlogProductIcon from "@/assets/blog-product.svg?react";
import BlogSearchIcon from "@/assets/blog-search.svg?react";
import {
  AUTHORS,
  CATEGORIES,
  CATEGORY_GRADIENTS,
  POSTS,
  formatLongDate,
  formatShortDate,
  groupByMonth,
  type BlogCategory
} from "@/data/blog";

const SearchIcon = () => (
  <BlogSearchIcon
    className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400"
    aria-hidden="true"
  />
);

const CategoryIcon = ({
  category,
  className = "h-4 w-4 sm:h-[18px] sm:w-[18px]"
}: {
  category: BlogCategory | "All";
  className?: string;
}) => {
  switch (category) {
    case "Updates":
      return <BlogUpdatesIcon className={className} aria-hidden="true" />;
    case "Product":
      return <BlogProductIcon className={className} aria-hidden="true" />;
    default:
      return null;
  }
};

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("All");

  useEffect(() => {
    document.title = "Blog | Hovrlay";
  }, []);

  const featuredPost = useMemo(() => POSTS.find((p) => p.featured) ?? POSTS[0], []);

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return POSTS.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesQuery = !query || post.title.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [search, activeCategory]);

  const groupedPosts = useMemo(() => groupByMonth(filteredPosts), [filteredPosts]);

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col px-5 md:px-8 py-8 sm:py-10 md:py-12 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 md:gap-16">
        <header className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold section-title-gradient leading-[1.15] pb-1">
            Blog
          </h1>
          <p className="text-lg leading-snug tracking-tight text-muted-foreground lg:text-2xl lg:leading-snug">
            Learn more about Hovrlay and get product updates
          </p>
        </header>

        {featuredPost && (
          <section className="w-full">
            <article className="group relative">
              <a href={`/blog/${featuredPost.slug}`} className="block">
                <div className="relative block aspect-[4/3] overflow-hidden rounded-[2rem] transition-all duration-500 sm:aspect-[16/10] lg:aspect-[2/1]">
                  <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                    <img
                      alt={featuredPost.title}
                      loading="lazy"
                      decoding="async"
                      src={featuredPost.image}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className="absolute inset-0 rounded-[2rem] bg-black/60"
                    style={{
                      WebkitMaskImage: "linear-gradient(to right, black 0%, black 20%, transparent 100%)",
                      maskImage: "linear-gradient(to right, black 0%, black 20%, transparent 100%)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)"
                    }}
                  />
                  <div className="relative grid h-full w-full grid-rows-10 px-8 py-4 md:w-[50%] md:px-12 md:py-6">
                    <div className="row-span-2 flex flex-wrap items-center gap-3 text-[11px] text-gray-200 sm:gap-4 sm:text-sm md:gap-5 md:text-xs">
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                        <span className="rounded-full bg-gray-300/30 px-2 py-1 text-[11px] font-medium text-white sm:px-2 sm:text-sm md:px-3 md:py-1 md:text-xs">
                          {featuredPost.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <time className="text-[11px] md:text-[10px]">{formatLongDate(featuredPost.date)}</time>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <span className="text-[11px] md:text-[10px]">{featuredPost.readMinutes} min read</span>
                      </div>
                    </div>
                    <div className="row-span-5 mt-4 flex flex-col space-y-5 md:mt-0 md:space-y-7">
                      <h3 className="text-xl leading-tight font-semibold text-white lg:text-3xl xl:text-4xl">
                        {featuredPost.title}
                      </h3>
                    </div>
                    <div className="row-span-3 flex items-center">
                      <div className="inline-flex cursor-pointer items-center gap-1 rounded-2xl bg-white px-4 py-2 font-medium text-black shadow-lg transition-all duration-300 group-hover:bg-gray-100 group-hover:shadow-xl sm:gap-1.5 sm:px-3 sm:py-1.5 md:gap-2 md:px-4 md:py-2 lg:gap-3 lg:px-6 lg:py-3">
                        <span className="text-[11px] sm:text-sm md:text-xs lg:text-base">Read Full Article</span>
                        <svg
                          className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          </section>
        )}

        <section className="w-full">
          <div className="mb-8">
            <div className="relative mb-6 hidden md:block">
              <SearchIcon />
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search for posts"
                className="w-full rounded-full border border-transparent bg-white py-3 pr-4 pl-12 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:ring-0 focus:outline-none md:text-sm"
              />
            </div>
            <div className="relative z-10 flex flex-wrap gap-2">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center justify-center gap-1 rounded-full px-3 py-2 text-sm font-medium shadow-sm transition-all duration-200 sm:gap-2 sm:px-4 ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    }`}
                  >
                    {category !== "All" && (
                      <span className={isActive ? "text-white" : "text-gray-500"}>
                        <CategoryIcon category={category} />
                      </span>
                    )}
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative">
            {groupedPosts.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-400">No posts found.</p>
            ) : (
              groupedPosts.map((group, groupIdx) => (
                <div key={group.label} className="mb-10">
                  <h2 className="text-left text-[11px] font-bold tracking-[0.5em] text-gray-400 uppercase lg:text-[13px]">
                    {group.label}
                  </h2>
                  <div>
                    {group.posts.map((post, idx) => {
                      const isLastInGroup = idx === group.posts.length - 1;
                      const isLastGroup = groupIdx === groupedPosts.length - 1;
                      const isVeryLast = isLastGroup && isLastInGroup;
                      return (
                        <article key={post.slug} className="group">
                          <a
                            href={`/blog/${post.slug}`}
                            className="flex items-start gap-4 pt-4 sm:gap-6"
                          >
                            <div className="flex flex-col items-center">
                              <div
                                className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-80 sm:h-14 sm:w-14"
                                style={{ background: CATEGORY_GRADIENTS[post.category] }}
                              >
                                <CategoryIcon
                                  category={post.category}
                                  className="h-5 w-5 text-white sm:h-6 sm:w-6"
                                />
                              </div>
                              {!isVeryLast && (
                                <div className="mt-2 -mb-4 h-16 w-[1.5px] rounded-full bg-gray-300 sm:h-20" />
                              )}
                            </div>
                            <div className="flex flex-1 flex-col">
                              <h3 className="mb-2 text-base leading-tight text-foreground transition-colors sm:text-lg lg:text-xl">
                                {post.title}
                              </h3>
                              <div className="flex items-center gap-3 text-sm text-gray-400 lg:gap-4">
                                <div className="flex items-center gap-2">
                                  <img
                                    src={AUTHORS[post.author].avatar}
                                    alt={AUTHORS[post.author].name}
                                    className="h-6 w-6 rounded-full object-cover"
                                  />
                                  <span className="text-foreground">{AUTHORS[post.author].name}</span>
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                  <time>{formatShortDate(post.date)}</time>
                                </div>
                              </div>
                            </div>
                          </a>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
