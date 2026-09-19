'use client';
import { ScrollReveal } from "../ScrollReveal";
import { ScrollRevealTitle } from "../motion/scroll-reveal-title";
import { BlogCard } from "../blog/BlogCard";
import { MOCK_BLOG_POSTS } from "@/data/blog";

export function BlogPreview() {
  const articles = MOCK_BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-12 lg:py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-center mb-6 lg:mb-10">
          <ScrollRevealTitle text="Bài Viết Mới Nhất" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.15} className="h-full">
              <BlogCard post={article} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
