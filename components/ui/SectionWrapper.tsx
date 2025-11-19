import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  width?: 'full' | 'constrained';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  children, 
  className = '',
  width = 'constrained'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      <div 
        ref={ref}
        className={`relative z-10 mx-auto px-6 sm:px-8 ${width === 'constrained' ? 'max-w-7xl' : 'w-full'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};