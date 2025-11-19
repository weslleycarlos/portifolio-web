import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {year} Desenvolvido com <span className="text-accent-400">React</span> & <span className="text-accent-400">Tailwind</span>.
          <br className="sm:hidden" /> Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};