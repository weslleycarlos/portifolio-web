import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Database, LayoutDashboard, ShieldCheck, Server, CheckCircle2, Workflow } from 'lucide-react';

export const ProfessionalExperience: React.FC = () => {
  const experiences = [
    "Desenvolvimento e manutenção de sistemas internos com Oracle APEX",
    "Modelagem de dados (Oracle SQL Developer Data Modeler)",
    "Criação de lógica de negócios PL/SQL, rotinas automatizadas e validações",
    "Uso de JavaScript, HTML e CSS para estender comportamentos dinâmicos do APEX",
    "Integrações via REST API",
    "Criação de dashboards, telas de gestão e fluxos automatizados",
    "Otimização de performance em páginas APEX e consultas SQL"
  ];

  const internalProjects = [
    "Plataforma de gestão estratégica baseada na metodologia OKR",
    "Sistema de acompanhamento de indicadores numéricos",
    "Sistema de gestão de treinamentos operacionais",
    "Diversos módulos de suporte para automação, relatórios e monitoramento"
  ];

  return (
    <SectionWrapper id="experience">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Experiência <span className="text-accent-400">Profissional</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg">
          Atuação no Serviço Público Federal desenvolvendo soluções internas robustas e seguras, 
          focadas na eficiência operacional e gestão de dados utilizando tecnologias Oracle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 - Role & Tech */}
        <div className="glass-card p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-white/[0.07] transition-all duration-300 hover:scale-[1.02] group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-accent-500/10 text-accent-400 group-hover:text-white group-hover:bg-accent-500 transition-colors">
              <Database size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Desenvolvedor Oracle APEX</h3>
              <p className="text-sm text-accent-400 font-medium">Sistemas Internos — Serviço Público Federal</p>
            </div>
          </div>
          
          <ul className="space-y-3">
            {experiences.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-accent-500/70 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck size={14} />
            <span>Ambiente de alta segurança e dados sensíveis.</span>
          </div>
        </div>

        {/* Card 2 - Projects */}
        <div className="glass-card p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-white/[0.07] transition-all duration-300 hover:scale-[1.02] group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:text-white group-hover:bg-emerald-500 transition-colors">
              <LayoutDashboard size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Projetos Internos Realizados</h3>
              <p className="text-sm text-emerald-400 font-medium">Soluções Corporativas</p>
            </div>
          </div>

          <div className="space-y-6">
            {internalProjects.map((project, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 group-hover:bg-emerald-400 transition-colors" />
                <div>
                   <h4 className="text-slate-200 font-medium mb-1 group-hover:text-white transition-colors">{project}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-slate-950/50 border border-white/5">
             <div className="flex items-center gap-3 mb-2">
                <Server className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-semibold text-slate-300">Tech Stack Principal</span>
             </div>
             <div className="flex flex-wrap gap-2">
                {['Oracle APEX', 'PL/SQL', 'SQL', 'JavaScript', 'REST API'].map(tech => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-md bg-slate-800 text-slate-400 border border-white/5">
                    {tech}
                  </span>
                ))}
             </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-slate-500 italic">
            <Workflow size={14} />
            <span>(Sistemas internos: descrições genéricas devido à confidencialidade.)</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
