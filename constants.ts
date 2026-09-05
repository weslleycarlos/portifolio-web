import { Github, Linkedin, Mail } from 'lucide-react';
import type { Project, SocialLink } from './types';
export const EMAIL = 'wcarlos_col@hotmail.com';
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/weslleycarlos', icon: Github },
  { name: 'LinkedIn', url: 'https://br.linkedin.com/in/weslley-carlos-de-morais-78b9b6b1', icon: Linkedin },
  { name: 'Email', url: `mailto:${EMAIL}`, icon: Mail },
];
export const SKILLS = [
  ['Oracle APEX', 'PL/SQL', 'PostgreSQL', 'REST APIs', 'Node.js', 'Python'],
  ['React', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'],
  ['Git / GitHub', 'VS Code', 'Docker'],
];
export const PROJECTS: Project[] = [
  { id: 'sales', technologies: ['React', 'Node.js', 'Prisma', 'PostgreSQL', 'TypeScript'], githubUrl: 'https://github.com/weslleycarlos/representacao-comercial', featured: true },
  { id: 'cpi', technologies: ['React', 'Tailwind CSS', 'JavaScript'], githubUrl: 'https://github.com/weslleycarlos/website-cpi', featured: true },
  { id: 'records', technologies: ['Python', 'SQLite', 'Bootstrap'], githubUrl: 'https://github.com/weslleycarlos/controle-presos' },
  { id: 'scraper', technologies: ['Python', 'Selenium', 'Pandas'], githubUrl: 'https://github.com/weslleycarlos/web-scraper' },
];
