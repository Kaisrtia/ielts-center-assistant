'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  yOffset?: number;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, yOffset = 40, delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef(null);
  
  // We track the element's position relative to the viewport.
  // "start 95%" means the animation starts when the top of the element hits 95% down the viewport.
  // "start 40%" means it finishes when the top of the element hits 40% down the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 40%"] 
  });
  
  // We use the delay to stagger elements in a grid.
  // It shifts the animation window slightly later for elements with a higher delay.
  const start = Math.min(0.9, delay);
  const end = Math.min(1, 0.8 + delay);

  // Directly map scroll progress to opacity and Y position (this creates the 'scrub' effect)
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [yOffset, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}
