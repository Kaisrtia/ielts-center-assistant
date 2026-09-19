'use client';
import { ScrollReveal } from "../ScrollReveal";
import { ScrollRevealTitle } from "../motion/scroll-reveal-title";
import { courses } from "../../data/courses";
import Link from "next/link";

export function Courses() {
  return (
    <section className="py-12 lg:py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-center mb-6 lg:mb-10">
          <ScrollRevealTitle text="Các Khóa Học IELTS" />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {courses.map((course, i) => (
            <ScrollReveal 
              key={course.slug} 
              delay={i * 0.1} 
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg p-6 lg:p-8 shadow-sm hover:shadow-xl dark:hover:shadow-black/50 hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors uppercase">
                {course.title}
              </h3>
              
              <div className="text-zinc-600 dark:text-zinc-400 mb-6 font-sans text-sm space-y-2 flex-grow">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Mục tiêu</span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">{course.targetScores.output}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Thời lượng</span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">{course.duration}</span>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded font-semibold transition-colors shadow-sm hover:shadow-lg">
                  Đăng Ký Tư Vấn
                </button>
                <Link href={`/courses/${course.slug}`} className="w-full">
                  <button className="w-full py-3 rounded font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors">
                    Xem Chi Tiết
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
