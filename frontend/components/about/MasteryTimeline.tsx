"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ScrollRevealTitle } from "@/components/motion/scroll-reveal-title";
import { Target, Zap, Trophy } from "lucide-react";

const STAGES = [
  {
    title: "Giai đoạn 1: Foundation (Nền Tảng)",
    description: "Tái cấu trúc tư duy ngôn ngữ. Xóa bỏ những rào cản ngữ pháp và phát âm kinh điển của Học viên Việt Nam.",
    icon: Target,
    color: "bg-blue-500",
  },
  {
    title: "Giai đoạn 2: Acceleration (Tăng Tốc)",
    description: "Làm quen với cấu trúc đề thi thật. Áp dụng chiến lược làm bài tối ưu thời gian cho từng kỹ năng riêng biệt.",
    icon: Zap,
    color: "bg-amber-500",
  },
  {
    title: "Giai đoạn 3: Mastery (Thực Chiến)",
    description: "Luyện đề cường độ cao trong môi trường phòng thi mô phỏng. Sửa lỗi 1-1 để nâng band điểm vượt kỳ vọng.",
    icon: Trophy,
    color: "bg-emerald-500",
  }
];

export function MasteryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollRevealTitle text="Hệ thống Mastery 3 Giai đoạn" className="text-3xl md:text-5xl font-bold dark:text-white mb-6" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Lộ trình độc quyền được thiết kế dựa trên khoa học thần kinh và kinh nghiệm thực chiến từ Cựu giám khảo.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 rounded-full" />
          
          {/* Animated Glowing Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.5)] -translate-x-1/2 rounded-full"
          />

          <div className="space-y-24 relative z-10">
            {STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = stage.icon;
              
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Half */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                  >
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{stage.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">{stage.description}</p>
                  </motion.div>

                  {/* Icon Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className={`w-16 h-16 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-100 dark:border-zinc-800 shadow-xl flex items-center justify-center z-20 relative`}
                    >
                      <Icon className="w-7 h-7 text-amber-500" />
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
