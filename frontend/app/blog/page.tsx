import { Metadata } from "next";
import { getBlogPosts } from "@/data/blog";
import { ScrollRevealTitle } from "@/components/motion/scroll-reveal-title";
import { BlogClientWrapper } from "@/components/blog/BlogClientWrapper";

export const metadata: Metadata = {
  title: "Blog & Tài liệu | IELTS Center",
  description: "Thư viện bài viết, tài liệu học tập và chia sẻ kinh nghiệm luyện thi IELTS từ các chuyên gia.",
};

export default async function BlogPage() {
  // Fetch all posts initially; client wrapper will handle filtering
  const allPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-zinc-950 pt-24">
      
      {/* Header Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-12 md:pt-20 pb-8">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <ScrollRevealTitle text="Tài nguyên & Học thuật" className="mb-6" />
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-sans font-light leading-relaxed">
            Tổng hợp các bí quyết, bài tập mẫu và tài liệu luyện thi IELTS cập nhật mới nhất giúp bạn chinh phục điểm số mục tiêu.
          </p>
        </div>
      </section>

      {/* Blog Grid Section (includes Search, Categories, and Grid managed via local state) */}
      <section className="bg-white dark:bg-zinc-900 py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <BlogClientWrapper initialPosts={allPosts} />
        </div>
      </section>

    </div>
  );
}
