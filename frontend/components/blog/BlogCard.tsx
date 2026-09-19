import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
  priority?: boolean;
}

export function BlogCard({ post, priority = false }: BlogCardProps) {
  // Format the date (e.g., 2024-03-15 to March 15, 2024 or local string)
  const formattedDate = new Date(post.publishDate).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/20 dark:hover:shadow-none transition-all duration-300">
        
        {/* Cover Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-white/90 text-zinc-900 hover:bg-white border-transparent backdrop-blur-sm shadow-sm dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:bg-zinc-900 font-medium">
              {post.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3 font-sans">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={post.publishDate}>{formattedDate}</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold font-serif text-zinc-900 dark:text-zinc-100 mb-3 line-clamp-2 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              By {post.author}
            </span>
            <span className="text-sm font-semibold text-amber-600 dark:text-amber-500 group-hover:translate-x-1 transition-transform">
              Đọc tiếp &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
