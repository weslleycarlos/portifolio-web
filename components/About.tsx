import React, { useRef } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Code2, Coffee, BookOpen, Globe } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect: Move image slightly faster/slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <SectionWrapper id="about">
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Servidor Público & <span className="text-accent-400">Desenvolvedor Full-Stack</span>
            </h2>
            <div className="w-20 h-1 bg-accent-500/50 rounded-full mb-8" />
            
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Olá! Sou <span className="text-slate-200 font-medium">Weslley Carlos</span>, brasileiro e servidor público federal. Minha trajetória na tecnologia nasceu da vontade de otimizar processos e criar soluções que fazem a diferença no dia a dia.
              </p>
              <p>
                Como desenvolvedor full-stack em início de carreira, estou focado em construir aplicações robustas e escaláveis. Minha experiência no serviço público me trouxe organização e disciplina, qualidades que aplico diretamente no meu código.
              </p>
              <p>
                Atualmente, dedico meus estudos e projetos às tecnologias <span className="text-accent-400 font-medium">Python, TypeScript, React, Node.js e PostgreSQL</span>, buscando sempre entregar soluções de ponta a ponta.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Code2, label: "Código Limpo" },
              { icon: BookOpen, label: "Aprendizado Contínuo" },
              { icon: Globe, label: "Soluções Completas" },
              { icon: Coffee, label: "Foco e Dedicação" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <item.icon className="w-5 h-5 text-accent-400" />
                <span className="font-medium text-sm text-slate-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual/Image with Parallax */}
        <motion.div style={{ y }} className="relative mx-auto lg:ml-auto w-full max-w-md aspect-square">
            {/* Floating Shapes Decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full animate-pulse-slow blur-2xl" />
            
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 glass-card p-2 group">
                <div className="h-full w-full bg-slate-900/80 rounded-xl overflow-hidden relative">
                   <img 
                     src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" 
                     alt="Coding workspace" 
                     className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-105 group-hover:scale-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                   
                   <div className="absolute bottom-6 left-6 right-6">
                     <div className="bg-slate-950/50 backdrop-blur-md p-4 rounded-xl border border-white/10">
                       <div className="flex items-center justify-between mb-2">
                         <span className="text-xs font-mono text-accent-400">perfil.ts</span>
                         <div className="flex gap-1">
                           <div className="w-2 h-2 rounded-full bg-red-500" />
                           <div className="w-2 h-2 rounded-full bg-yellow-500" />
                           <div className="w-2 h-2 rounded-full bg-green-500" />
                         </div>
                       </div>
                       <p className="font-mono text-xs text-slate-400">
                         <span className="text-purple-400">const</span> <span className="text-blue-400">dev</span> = &#123;<br/>
                         &nbsp;&nbsp;nome: <span className="text-green-400">"Weslley"</span>,<br/>
                         &nbsp;&nbsp;foco: <span className="text-green-400">"Full-Stack"</span>,<br/>
                         &nbsp;&nbsp;país: <span className="text-green-400">"Brasil"</span><br/>
                         &#125;;
                       </p>
                     </div>
                   </div>
                </div>
            </div>
            
            {/* Decorative floating element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-800 rounded-2xl border border-white/10 shadow-xl flex items-center justify-center animate-float z-20">
              <span className="text-4xl">🇧🇷</span>
            </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};