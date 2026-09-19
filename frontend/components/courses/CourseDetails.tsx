import { BookOpenCheck, Target, Users, CheckCircle2, Sparkles, MonitorPlay, Users2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollRevealTitle } from "@/components/motion/scroll-reveal-title";
import { CourseTuition } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseDetailsProps {
  testing: string[];
  audience: string;
  tuition: CourseTuition;
}

export function CourseDetails({ testing, audience, tuition }: CourseDetailsProps) {
  return (
    <section className="py-12 lg:py-16 bg-[#fafafa] dark:bg-zinc-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Target Audience (Col 1) */}
          <ScrollReveal className="lg:col-span-1 h-full">
            <div className="h-full rounded-[2rem] p-8 lg:p-10 bg-white dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 shadow-xl shadow-zinc-200/20 dark:shadow-none border border-zinc-200 dark:border-zinc-800 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute -right-12 -top-12 opacity-[0.03] dark:opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                <Target className="w-48 h-48" />
              </div>
              
              <div>
                <div className="inline-flex items-center justify-center p-3.5 bg-amber-50 dark:bg-amber-500/10 rounded-2xl mb-8">
                  <Users className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">Đối tượng phù hợp</h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
                  {audience}
                </p>
              </div>
              
              <div className="mt-12">
                <div className="w-full h-1 bg-gradient-to-r from-amber-500/50 to-transparent rounded-full" />
              </div>
            </div>
          </ScrollReveal>

          {/* Testing & Homework (Col 2 & 3) */}
          <ScrollReveal delay={0.1} className="lg:col-span-2 h-full">
            <div className="h-full rounded-[2rem] p-8 lg:p-10 bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/20 dark:shadow-none relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="inline-flex items-center justify-center p-3.5 bg-blue-50 dark:bg-blue-500/10 rounded-2xl">
                  <BookOpenCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-100">Bài tập & Kiểm tra</h3>
              </div>
              
              <ul className="space-y-6">
                {testing.map((item, index) => (
                  <li key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed font-medium group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Tuition Section */}
        <ScrollReveal delay={0.2} className="mt-12 mb-4">
          <div className="flex flex-col items-center text-center mb-10 lg:mb-12">
            <ScrollRevealTitle text="Học phí đầu tư" className="mb-4" />
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg mt-2">Chọn hình thức học phù hợp với nhu cầu và thời gian của bạn.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
            {/* Offline */}
            <div className="rounded-3xl p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-full mb-6">
                <Users2 className="w-8 h-8 text-zinc-600 dark:text-zinc-400" />
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">Đại Trà Offline</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 font-medium">Học trực tiếp tại trung tâm</p>
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{tuition.offline}</div>
            </div>

            {/* Online */}
            <div className="rounded-3xl p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
                <MonitorPlay className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">Đại Trà Online</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 font-medium">Học trực tuyến tương tác</p>
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{tuition.online}</div>
            </div>

            {/* Small Group */}
            <div className="rounded-3xl p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-full mb-6">
                <Target className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">Kèm Nhóm Nhỏ</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 font-medium">Sát sao từng học viên</p>
              
              {tuition.smallGroup === "KHÔNG CÓ" ? (
                <div className="text-2xl font-bold text-zinc-500 dark:text-zinc-600 mb-2 italic py-1">{tuition.smallGroup}</div>
              ) : (
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{tuition.smallGroup}</div>
              )}
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-semibold shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300 text-lg">
              Đăng kí tư vấn
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
