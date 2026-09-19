'use client';
import { CourseSyllabusSection } from "@/data/courses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollRevealTitle } from "@/components/motion/scroll-reveal-title";
import { motion } from "framer-motion";

interface CourseSyllabusProps {
  syllabus: CourseSyllabusSection[];
}

export function CourseSyllabus({ syllabus }: CourseSyllabusProps) {
  if (!syllabus || syllabus.length === 0) return null;

  return (
    <section className="py-12 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <ScrollRevealTitle text="Nội dung khóa học" />
          <ScrollReveal delay={0.1}>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Lộ trình được thiết kế chuyên sâu giúp học viên làm chủ 4 kỹ năng trong bài thi IELTS, rèn luyện phản xạ và tối ưu điểm số.
            </p>
          </ScrollReveal>
        </div>

        <Tabs defaultValue={syllabus[0]?.title.toLowerCase()} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start sm:justify-center h-auto p-1 bg-zinc-100/50 dark:bg-zinc-800/50 mb-8 rounded-xl">
            {syllabus.map((section) => (
              <TabsTrigger
                key={section.title}
                value={section.title.toLowerCase()}
                className="flex-1 sm:flex-none text-base px-6 py-3 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-amber-600 dark:data-[state=active]:text-amber-500 data-[state=active]:shadow-sm transition-all"
              >
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {syllabus.map((section) => (
            <TabsContent key={section.title} value={section.title.toLowerCase()} className="mt-4 focus-visible:outline-none focus-visible:ring-0">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-50/50 dark:bg-zinc-950/50 rounded-2xl p-6 md:p-10 border border-zinc-100 dark:border-zinc-800 shadow-sm"
              >
                <h3 className="text-2xl font-serif font-semibold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center">
                  <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-md text-sm font-sans font-medium mr-3 tracking-wide uppercase">
                    Kỹ năng
                  </span>
                  {section.title}
                </h3>
                
                <ul className="space-y-4">
                  {section.content.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4">
                        <CheckCircle2 className="w-5 h-5 text-amber-500" />
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
