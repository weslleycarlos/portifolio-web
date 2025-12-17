import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { SKILL_CATEGORIES } from '../constants';

export const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Habilidades <span className="text-accent-400">& Tecnologias</span></h2>
        <p className="text-slate-400 text-lg">
          Tecnologias que uso no dia a dia e que realmente fazem parte dos meus projetos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="glass-card rounded-2xl p-6 hover:bg-white/[0.07] transition-colors duration-300 group h-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                <category.icon className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-accent-500/30 hover:bg-accent-500/5 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};