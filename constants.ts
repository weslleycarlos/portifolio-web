import { Database, Layout, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { Project, SkillCategory, SocialLink } from './types';

export const NAV_LINKS = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Experiência', href: '#experience' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/weslleycarlos',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://br.linkedin.com/in/weslley-carlos-de-morais-78b9b6b1', // Update if a specific URL is provided later
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:wcarlos_col@hotmail.com', // Update with real email if provided
    icon: Mail,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend & Banco de Dados',
    icon: Database,
    skills: [
      { name: 'Oracle APEX' },
      { name: 'PL/SQL' },
      { name: 'REST APIs' },
      { name: 'Node.js' },
      { name: 'Python' },
    ],
  },
  {
    title: 'Frontend (Estudando)',
    icon: Layout,
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML/CSS' },
    ],
  },
  {
    title: 'Ferramentas',
    icon: Terminal,
    skills: [
      { name: 'Git/GitHub' },
      { name: 'VS Code' },
      { name: 'Docker' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Representação Comercial',
    description: 'Sistema que criei para ajudar a organizar pedidos. Foi onde pratiquei bastante full-stack com React, Node e Prisma.',
    technologies: ['Node.js', 'React', 'Prisma', 'PostgreSQL', 'TypeScript'],
    githubUrl: 'https://github.com/weslleycarlos/representacao-comercial',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: '2',
    title: 'Website CPI',
    description: 'Site que desenvolvi para um projeto de casais da igreja. Foquei em deixar tudo leve, bonito e fácil de atualizar.',
    technologies: ['React', 'Tailwind', 'JavaScript'],
    githubUrl: 'https://github.com/weslleycarlos/website-cpi',
    imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: '3',
    title: 'Controle de Presos',
    description: 'Aplicação criada para organizar e acompanhar dados de presos. É um projeto mais simples e direto.',
    technologies: ['Python', 'SQLite', 'Bootstrap'],
    githubUrl: 'https://github.com/weslleycarlos/controle-presos',
    imageUrl: 'https://images.unsplash.com/photo-1543536833-6d65fcc64f66?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: '4',
    title: 'Web Scraper - Diário Oficial',
    description: 'Ferramenta que automatiza a coleta de dados do Diário Oficial dos Municípios do MT.',
    technologies: ['Python', 'Selenium', 'Pandas', 'Data Processing'],
    githubUrl: 'https://github.com/weslleycarlos/web-scraper',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
];
