"use client";
import { motion } from "framer-motion";
import { ScrollRevealTitle } from "@/components/motion/scroll-reveal-title";
import { Award, BookOpen, GraduationCap } from "lucide-react";

export function FounderIntro() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white dark:bg-zinc-900 overflow-hidden">
      {/* Massive Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h2 className="text-[120px] md:text-[250px] font-black text-zinc-100 dark:text-zinc-900/50 leading-none tracking-tighter">
          IELTS 9.0
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Founder Image (Popping out) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-72 md:w-96 h-[400px] md:h-[500px]"
            >
              {/* Decorative blob behind */}
              <div className="absolute inset-0 bg-amber-200 dark:bg-amber-500/20 rounded-full blur-3xl opacity-50 -z-10 translate-x-4 translate-y-8" />
              
              {/* Placeholder: Replace this with actual transparent PNG */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                alt="Founder Portrait" 
                className="w-full h-full object-cover rounded-2xl md:scale-110 shadow-2xl border-4 border-white dark:border-zinc-800"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold dark:text-zinc-100">Ex-Examiner</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">British Council</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Biography Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <ScrollRevealTitle text="Chuyên Gia Hàng Đầu" className="text-3xl md:text-5xl font-bold dark:text-white" />
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg"
            >
              <p>
                Với hơn 10 năm kinh nghiệm giảng dạy và từng là Cựu giám khảo chấm thi IELTS, thầy David Lee hiểu rõ từng tiêu chí đánh giá khắt khe nhất của kỳ thi.
              </p>
              <p>
                &quot;Sự khác biệt giữa 6.5 và 8.0 không nằm ở việc bạn biết bao nhiêu từ vựng, mà nằm ở tư duy mạch lạc và chiến lược tiếp cận đề thi.&quot;
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-medium dark:text-zinc-200">Thạc sĩ TESOL</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="font-medium dark:text-zinc-200">10,000+ Giờ Dạy</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
