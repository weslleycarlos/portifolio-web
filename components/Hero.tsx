import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <motion.div 
        style={{ y: y1, opacity: useTransform(scrollY, [0, 300], [1, 0]) }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2, opacity: useTransform(scrollY, [0, 300], [1, 0]) }}
        className="absolute bottom-20 left-[10%] w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-accent-400">Disponível para projetos e freelance</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6"
        >
          Weslley Carlos de Morais
          <br />
          <span className="text-gradient text-3xl md:text-5xl lg:text-6xl block mt-4">Desenvolvedor Full-Stack</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed"
        >
          Criando experiências modernas, escaláveis e funcionais na web.
          <br className="hidden md:block" />
          Focado em entregar soluções ponta a ponta com qualidade e performance.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-950 font-bold rounded-full hover:bg-white transition-all flex items-center justify-center gap-2 group"
          >
            Ver Projetos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            Entrar em Contato
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};