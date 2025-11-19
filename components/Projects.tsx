import React, { useState } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <SectionWrapper id="projects" className="bg-slate-900/30">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Projetos em <span className="text-accent-400">Destaque</span></h2>
          <p className="text-slate-400 max-w-md">
            Uma seleção de projetos reais que demonstram minha capacidade técnica e evolução.
          </p>
        </div>
        <a 
          href="https://github.com/weslleycarlos" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-500 font-medium transition-colors"
        >
          Ver GitHub Completo <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)] hover:border-accent-500/30"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Links overlay on hover */}
              <div className={`absolute inset-0 z-20 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-slate-950 rounded-full hover:scale-110 transition-transform shadow-lg hover:shadow-accent-400/50"
                  title="Ver Código"
                >
                  <Github size={20} />
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 text-white border border-white/10 rounded-full hover:scale-110 transition-transform shadow-lg hover:shadow-accent-400/20"
                    title="Demo ao Vivo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-accent-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full border border-white/5 group-hover:border-accent-400/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};