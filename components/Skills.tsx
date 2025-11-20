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
            className="glass-card rounded-2xl p-6 hover:bg-white/[0.07] transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <category.icon className="w-6 h-6 text-accent-400" />
            </div>
            
            <h3 className="text-xl font-bold mb-6">{category.title}</h3>
            
            <div className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};