"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollRevealTitle } from "@/components/motion/scroll-reveal-title";

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax for the background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-zinc-950/60 dark:bg-zinc-950/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
          alt="Classroom"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <ScrollRevealTitle 
          text="Kiến Tạo Tương Lai" 
          className="text-4xl md:text-6xl font-bold text-white mb-6" 
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-zinc-200 font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Sứ mệnh của chúng tôi là trang bị cho Học viên những kỹ năng ngôn ngữ vững chắc nhất, mở ra cánh cửa thành công trên toàn cầu thông qua Phương pháp giảng dạy chuyên sâu và tận tâm.
        </motion.p>
      </div>
    </section>
  );
}
