import { Database, Layout, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { Project, SkillCategory, SocialLink } from './types';

export const NAV_LINKS = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
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
    url: 'https://linkedin.com', // Update if a specific URL is provided later
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:weslley@example.com', // Update with real email if provided
    icon: Mail,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: Terminal,
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'Express', level: 75 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'Banco de Dados & Ferramentas',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 70 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Representação Comercial',
    description: 'Sistema completo de gestão para representantes comerciais, incluindo pedidos, clientes e produtos.',
    technologies: ['Node.js', 'React', 'Prisma', 'PostgreSQL', 'TypeScript'],
    githubUrl: 'https://github.com/weslleycarlos/representacao-comercial',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    featured: true,
  },
  {
    id: '2',
    title: 'Website CPI',
    description: 'Website institucional moderno para um projeto de igreja focado em casais.',
    technologies: ['React', 'Tailwind', 'JavaScript'],
    githubUrl: 'https://github.com/weslleycarlos/website-cpi',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    featured: true,
  },
  {
    id: '3',
    title: 'Controle de Presos',
    description: 'Sistema simples para gerenciamento e acompanhamento básico de presos.',
    technologies: ['Python', 'SQLite', 'Bootstrap'],
    githubUrl: 'https://github.com/weslleycarlos/controle-presos',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    featured: false,
  },
  {
    id: '4',
    title: 'Web Scraper - Diário Oficial',
    description: 'Web Scraper para coletar e processar dados do Diário Oficial dos Municípios do Mato Grosso.',
    technologies: ['Python', 'Selenium', 'Pandas', 'Data Processing'],
    githubUrl: 'https://github.com/weslleycarlos/web-scraper',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    featured: false,
  },
];