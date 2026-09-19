'use client';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sparkles, Star, Lightbulb } from 'lucide-react';

interface ScrollRevealTitleProps {
  text: string;
  className?: string;
}

export function ScrollRevealTitle({ text, className }: ScrollRevealTitleProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { 
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1
      }
    },
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 120,
        delay: i * 0.02 + 0.05 // custom delay based on character absolute index
      }
    })
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 1 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut", delay: 0.2 } // Changed to easeInOut so the drawing process is visible
    }
  };

  const starVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", damping: 10, stiffness: 120, delay: 0.4 } // Sped up stars
    }
  };

  const paths = [
    // Variant 1: Wide zigzag
    "M 30 80 L 150 30 L 280 90 L 420 30 L 540 80",
    // Variant 2: Erratic zigzag
    "M 20 60 L 100 90 L 250 40 L 380 95 L 540 50",
    // Variant 3: Tight zigzag
    "M 40 85 L 100 50 L 160 85 L 220 50 L 280 85 L 340 50 L 400 85 L 460 50 L 520 85"
  ];

  // Deterministically select a path based on the text so it stays consistent between server/client (no hydration errors)
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  const pathIndex = Math.abs(hash) % paths.length;
  const selectedPath = paths[pathIndex];

  return (
    <motion.div 
      className={cn("relative z-0 inline-block", className)} // Added z-0 to create stacking context so path doesn't hide behind section backgrounds
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-10%" }}
      variants={containerVariants}
    >
      {/* Exact Background brush stroke from user reference */}
      <div className="absolute inset-0 -z-10 w-[120%] h-[150%] -left-[10%] -top-[25%] pointer-events-none flex items-center justify-center overflow-visible">
        <svg viewBox="0 0 567 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-orange-200 dark:text-amber-400/40">
          <g opacity="0.5">
            <motion.path 
              d={selectedPath}
              stroke="currentColor" 
              strokeWidth="24" 
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
            />
          </g>
        </svg>
      </div>

      {/* Little sparkle icons */}
      <motion.div className="absolute -left-6 bottom-4 text-amber-500" variants={starVariants}>
        <Sparkles size={24} strokeWidth={1.5} />
      </motion.div>
      <motion.div className="absolute -right-8 top-0 text-amber-400" variants={starVariants}>
        <Star size={32} strokeWidth={1.5} fill="currentColor" />
      </motion.div>
      <motion.div className="absolute right-4 -top-6 text-yellow-500" variants={starVariants}>
        <Lightbulb size={20} strokeWidth={2} />
      </motion.div>

      {/* Words and characters fade in one by one independently */}
      <h3 className="relative z-10 text-4xl md:text-5xl font-serif font-bold leading-tight py-4 px-6">
        {words.map((word, wordIndex) => {
          const chars = word.split("");
          return (
            <span key={wordIndex} className="inline-block mr-[0.25em]">
              {chars.map((char, charIndex) => {
                // Calculate absolute index for perfect sequential stagger
                let previousChars = 0;
                for (let i = 0; i < wordIndex; i++) {
                  previousChars += words[i].length;
                }
                const absoluteIndex = previousChars + charIndex;
                
                return (
                  <motion.span 
                    key={charIndex} 
                    className="inline-block"
                    variants={charVariants}
                    custom={absoluteIndex}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </h3>
    </motion.div>
  );
}
