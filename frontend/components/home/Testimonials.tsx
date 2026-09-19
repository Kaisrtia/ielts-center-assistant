'use client';
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ScrollRevealTitle } from "../motion/scroll-reveal-title";
import Image from "next/image";
import { X } from "lucide-react";

const TESTIMONIAL_IMAGES = [
  "/images/testimonials/testimonial_student_1_1787921080080.png",
  "/images/testimonials/testimonial_student_2_1787921095019.png",
  "/images/testimonials/testimonial_student_3_1787921109412.png",
  "/images/testimonials/testimonial_student_4_1787921120856.png"
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 lg:py-16 bg-transparent text-zinc-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8 lg:mb-12">
          <ScrollRevealTitle text="Cảm Nhận Học Viên" />
        </div>

        {/* Rectangle Frame */}
        <div className="bg-[#fafafa] dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 shadow-sm">
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {TESTIMONIAL_IMAGES.map((src, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0 pl-4 md:pl-6"
                >
                  <div 
                    className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image
                      src={src}
                      alt={`Testimonial ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl aspect-[3/4] sm:aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Focused Testimonial"
              fill
              className="object-contain bg-zinc-950/50"
            />
          </div>
        </div>
      )}
    </section>
  );
}
