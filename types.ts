import type { LucideIcon } from 'lucide-react';
export interface Project {
  id: string;
  technologies: string[];
  githubUrl: string;
  featured?: boolean;
}
export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
