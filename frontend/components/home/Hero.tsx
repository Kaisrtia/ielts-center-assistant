'use client';
import { motion } from 'framer-motion';
import { ScrollReveal } from "../ScrollReveal";
export function Hero() {

  return (
    <div className="max-w-7xl mx-auto px-8 pt-24 pb-12 lg:pt-32 lg:pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center space-y-5 lg:space-y-8"
      >
        <h1 className="text-6xl md:text-7xl font-medium leading-[1.1] text-zinc-900 dark:text-zinc-100">
          Kaisrtia English Center<br />
          <span className="italic text-zinc-500 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-500">Giáo dục tận tâm.</span>
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Phương pháp giảng dạy độc quyền, nghiêm ngặt giúp bạn làm chủ tiếng Anh. Đạt điểm số IELTS mục tiêu cùng đội ngũ Giảng viên hàng đầu.
        </p>
        <div className="flex gap-4 justify-center pt-4 font-sans">
          <button className="bg-amber-500 hover:bg-amber-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/30 text-white px-8 py-4 rounded font-semibold transition-all duration-300 text-lg shadow-sm">
            Đăng Ký Tư Vấn
          </button>
          <button className="px-8 py-4 rounded font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500">
            Khám Phá Phương Pháp
          </button>
        </div>
      </motion.div>

    </div>
  );
}
