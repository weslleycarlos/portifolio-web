import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}