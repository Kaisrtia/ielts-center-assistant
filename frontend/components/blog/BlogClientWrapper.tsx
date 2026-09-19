"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { BlogCategories } from "@/components/blog/BlogCategories";

interface BlogClientWrapperProps {
  initialPosts: BlogPost[];
}

export function BlogClientWrapper({ initialPosts }: BlogClientWrapperProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery = !query.trim() || 
        post.title.toLowerCase().includes(query.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      
      return matchesCategory && matchesQuery;
    });
  }, [initialPosts, query, category]);

  return (
    <>
      <div className="mb-10">
        <BlogSearch value={query} onChange={setQuery} />
      </div>

      <div className="mb-12">
        <BlogCategories activeCategory={category} onSelectCategory={setCategory} />
      </div>

      <div className="w-full">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="animate-in fade-in slide-in-from-bottom-8" 
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
              >
                <BlogCard post={post} priority={index < 3} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 border-dashed">
            <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100 mb-3">Không tìm thấy bài viết nào</h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Vui lòng thử nghiệm với từ khóa hoặc danh mục khác.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
