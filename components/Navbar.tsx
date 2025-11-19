import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollPosition && 
            (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('#hero')}
          >
            <div className="p-2 bg-accent-500/10 rounded-lg border border-accent-500/20 group-hover:bg-accent-500/20 group-hover:border-accent-400/50 transition-all duration-300 group-hover:scale-110">
              <Code2 className="w-6 h-6 text-accent-400 group-hover:text-sky-300 transition-colors duration-300" />
            </div>
            <span className="text-lg font-display font-bold tracking-tight text-slate-100">
              Weslley<span className="text-accent-400 group-hover:text-sky-300 transition-colors duration-300">Carlos</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.filter(link => link.href !== '#contact').map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-accent-400'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="px-5 py-2 text-sm font-semibold text-slate-950 bg-accent-400 rounded-full hover:bg-accent-500 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={toggleMenu}
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left text-lg font-medium ${
                    activeSection === link.href.substring(1)
                      ? 'text-accent-400'
                      : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};