'use client';
import { Badge } from "@/components/ui/badge";
import { CourseTargetScores } from "@/data/courses";
import { MoveRight, Star } from "lucide-react";
import { motion } from "framer-motion";

interface CourseHeroProps {
  title: string;
  targetScores: CourseTargetScores;
  duration: string;
  audience: string;
}

export function CourseHero({ title, targetScores, duration, audience }: CourseHeroProps) {
  return (
    <section className="relative overflow-hidden bg-transparent pt-20 pb-10 md:pt-28 md:pb-16 border-b border-zinc-100 dark:border-zinc-900">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-zinc-500/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-400">
              Đầu vào: {targetScores.input}
            </Badge>
            <Badge variant="default" className="px-3 py-1 text-sm font-medium bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900">
              Đầu ra: {targetScores.output}
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              {duration}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 dark:text-zinc-50 tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-sans font-light leading-relaxed"
          >
            {audience}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-4 font-sans"
          >
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded font-semibold group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-amber-500/30 text-lg flex items-center justify-center w-full sm:w-auto">
              Đăng ký tư vấn
              <MoveRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-lg w-full sm:w-auto">
              Kiểm tra trình độ
            </button>
            <button className="px-8 py-4 rounded font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-lg w-full sm:w-auto">
              Xem lịch khai giảng
            </button>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="pt-8 flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400"
          >
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
              <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
              <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
              <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
              <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
            </div>
            <span className="ml-2 font-medium">Hàng trăm học viên đạt điểm mục tiêu</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
