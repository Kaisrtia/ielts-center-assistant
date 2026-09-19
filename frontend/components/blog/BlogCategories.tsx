"use client";

import { BLOG_CATEGORIES } from "@/data/blog";
import { cn } from "@/lib/utils";

interface BlogCategoriesProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function BlogCategories({ activeCategory, onSelectCategory }: BlogCategoriesProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max px-4">
        {BLOG_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                isActive
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
