"use client";
import { motion } from "framer-motion";
import { ScrollRevealTitle } from "@/components/motion/scroll-reveal-title";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const BRANCHES = [
  {
    id: 1,
    name: "Cơ sở 1: Trụ sở chính",
    address: "123 Nguyễn Văn Cừ, Quận 5, TP.HCM",
    hotline: "0909 123 456",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop",
    size: "large" // Takes up more space in grid
  },
  {
    id: 2,
    name: "Cơ sở 2: Gò Vấp",
    address: "45 Quang Trung, Gò Vấp, TP.HCM",
    hotline: "0909 123 457",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    name: "Cơ sở 3: Thủ Đức",
    address: "89 Võ Văn Ngân, Thủ Đức, TP.HCM",
    hotline: "0909 123 458",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    size: "small"
  }
];

export function BranchBentoGrid() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <ScrollRevealTitle text="Mạng lưới Cơ sở" className="text-3xl md:text-5xl font-bold dark:text-white mb-4" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Không gian học tập chuẩn quốc tế, được trang bị đầy đủ công nghệ hiện đại hỗ trợ tối đa cho việc luyện thi IELTS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          {BRANCHES.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl ${branch.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <img 
                src={branch.image} 
                alt={branch.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end h-full">
                <h3 className="text-2xl font-bold text-white mb-2">{branch.name}</h3>
                
                <div className="flex items-start gap-2 text-zinc-300 mb-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base">{branch.address}</p>
                </div>
                
                <div className="flex items-center gap-2 text-zinc-300 mb-6">
                  <Phone className="w-5 h-5 shrink-0" />
                  <p className="text-sm md:text-base">{branch.hotline}</p>
                </div>

                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-xl font-medium transition-colors w-fit border border-white/10"
                >
                  Chỉ đường <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
