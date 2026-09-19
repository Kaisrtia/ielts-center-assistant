'use client';
import { ScrollReveal } from "../ScrollReveal";
import { AnimatedNumber } from "../motion/animated-number";
import { ScrollRevealTitle } from "../motion/scroll-reveal-title";

export function Stats() {
  const stats = [
    { value: 98, suffix: "%", label: "Tỷ Lệ Đạt Target", icon: "📈" },
    { value: 15000, suffix: "+", label: "Học Viên Xuất Sắc", icon: "🎓" },
    { value: 25, suffix: "+", label: "Năm Kinh Nghiệm", icon: "🏛️" },
  ];

  return (
    <section className="bg-white dark:bg-zinc-900 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-8">
      <div className="flex justify-center mb-8 lg:mb-12">
        <ScrollRevealTitle text="Chương trình đào tạo chất lượng cao" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.15} className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-100 dark:border-zinc-800 flex flex-col items-center text-center group hover:shadow-xl dark:hover:shadow-black/50 hover:-translate-y-2 transition-all duration-500">
            <div className="text-4xl mb-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">{item.icon}</div>
            <div className="text-4xl font-semibold mb-2 text-amber-500 group-hover:text-amber-600 transition-colors flex items-center justify-center">
              <AnimatedNumber value={item.value} />
              {item.suffix}
            </div>
            <div className="text-sm font-sans font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">{item.label}</div>
          </ScrollReveal>
        ))}
      </div>
      </div>
    </section>
  );
}
