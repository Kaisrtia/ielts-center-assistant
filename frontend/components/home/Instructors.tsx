'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from "../ScrollReveal";
import { ScrollRevealTitle } from "../motion/scroll-reveal-title";

const instructors = [
  { 
    id: 1,
    name: "Giảng viên John Doe", 
    qual: "IELTS 9.0", 
    quote: "Luôn tận tâm vì sự tiến bộ của từng học viên.",
    image: "https://i.pravatar.cc/300?img=11"
  },
  { 
    id: 2,
    name: "Giảng viên Jane Smith", 
    qual: "Cựu giám khảo", 
    quote: "Phương pháp học đi đôi với hành.",
    image: "https://i.pravatar.cc/300?img=5"
  },
  { 
    id: 3,
    name: "Giảng viên David Lee", 
    qual: "Thạc sĩ TESOL", 
    quote: "Biến tiếng Anh thành công cụ đắc lực.",
    image: "https://i.pravatar.cc/300?img=8"
  },
  { 
    id: 4,
    name: "Giảng viên Sarah Trần", 
    qual: "Tiến sĩ Ngôn Ngữ", 
    quote: "Học đúng hướng, đạt điểm cao.",
    image: "https://i.pravatar.cc/300?img=9"
  },
  { 
    id: 5,
    name: "Giảng viên Mark Vu", 
    qual: "IELTS 8.5", 
    quote: "Chinh phục tiếng Anh bằng tư duy logic.",
    image: "https://i.pravatar.cc/300?img=12"
  },
];

export function Instructors() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start in the middle

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % instructors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + instructors.length) % instructors.length);
  };

  const handleDragEnd = (e: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

  const activeInstructor = instructors[currentIndex];

  return (
    <section className="py-12 lg:py-20 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-2 lg:mb-10">
            <div className="mb-0">
              <ScrollRevealTitle text="Đội ngũ Giảng Viên Hàng Đầu" />
            </div>
            
            <div className="hidden md:flex gap-4">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:border-amber-500 hover:text-amber-500 transition-colors bg-white dark:bg-zinc-950 shadow-sm hover:shadow-md"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:border-amber-500 hover:text-amber-500 transition-colors bg-white dark:bg-zinc-950 shadow-sm hover:shadow-md"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-16 mt-2 lg:mt-0">
          {/* 3D Carousel Section */}
          <ScrollReveal delay={0.2} className="w-full lg:w-1/2">
            <div className="relative h-[200px] md:h-[280px] lg:h-[400px] w-full flex items-center justify-center perspective-[1200px]">
              <motion.div 
                className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
              />
              {instructors.map((inst, index) => {
                let diff = index - currentIndex;
                if (diff > instructors.length / 2) diff -= instructors.length;
                if (diff < -instructors.length / 2) diff += instructors.length;

                const isCenter = diff === 0;
                const absDiff = Math.abs(diff);
                
                let zIndex = 40 - absDiff * 10;
                let scale = isCenter ? 1 : Math.max(0.7, 1 - absDiff * 0.15);
                let xOffset = diff * 80; 
                
                let opacity = isCenter ? 1 : Math.max(0, 1 - absDiff * 0.5);
                let blur = isCenter ? 0 : absDiff * 2;
                
                return (
                  <motion.div
                    key={inst.id}
                    className="absolute w-[140px] h-[180px] md:w-[220px] md:h-[280px] lg:w-[260px] lg:h-[340px] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-xl border border-white/20 dark:border-zinc-700/50"
                    initial={false}
                    animate={{
                      x: xOffset,
                      scale: scale,
                      zIndex: zIndex,
                      opacity: opacity,
                      filter: `blur(${blur}px)`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                      mass: 1
                    }}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      pointerEvents: isCenter ? 'auto' : 'none',
                    }}
                  >
                    <img src={inst.image} alt={inst.name} className="w-full h-full object-cover" />
                    
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : -10 }}
                      transition={{ delay: 0.05 }}
                      className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm shadow-lg rounded-full px-2 py-1 md:px-3 md:py-1.5 border border-zinc-200 dark:border-zinc-700 flex flex-col items-center justify-center z-20"
                    >
                      <span className="text-amber-500 font-bold text-xs md:text-sm lg:text-base leading-none">{inst.qual.split(" ")[1] || inst.qual}</span>
                      {inst.qual.split(" ")[0] === "IELTS" && <span className="text-[8px] md:text-[10px] text-zinc-500 font-medium uppercase mt-0.5">IELTS</span>}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Details Section underneath/beside */}
          <ScrollReveal delay={0.05} className="w-full lg:w-1/2">
            <div className="w-full -mt-2 lg:mt-0 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-4 lg:p-10 shadow-sm text-center lg:text-left relative overflow-hidden flex flex-col justify-center min-h-[160px] md:min-h-[220px] lg:min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col items-center lg:items-start relative z-10 w-full"
                >
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-serif text-zinc-900 dark:text-zinc-100 mb-2 lg:mb-3">
                    {activeInstructor.name}
                  </h3>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] md:text-xs lg:text-sm font-semibold mb-3 lg:mb-6 uppercase tracking-wider">
                    {activeInstructor.qual}
                  </div>
                  <p className="text-sm md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 font-light italic leading-relaxed">
                    "{activeInstructor.quote}"
                  </p>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-zinc-500/5 dark:bg-zinc-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
