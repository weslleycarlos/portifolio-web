import { ArrowUpRight } from 'lucide-react';
import { SectionWrapper, SectionHeading } from './ui/SectionWrapper';
import { PROJECTS, SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../i18n';
export function Projects() {
  const { content: { projects: t } } = useLanguage();
  return <SectionWrapper id="projects" className="projects-section">
    <div className="section-intro"><SectionHeading id="projects" kicker={t.kicker} title={t.title} emphasis={t.emphasis} /><div className="section-aside"><p>{t.intro}</p><a href={SOCIAL_LINKS[0].url} target="_blank" rel="noopener noreferrer" className="text-link">{t.all}<ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
    <div className="project-list">{PROJECTS.map((project, index) => {
      const item = t.items[index];
      return <article key={project.id} className={`project-row ${index === 0 ? 'project-featured' : ''}`}>
        <span className="project-number" aria-hidden="true">0{index + 1}</span>
        <div className="project-copy"><div className="project-category">{item.category}{project.featured && <span className="featured-label">{t.featured}</span>}</div><h3><a href={project.githubUrl} target="_blank" rel="noopener noreferrer">{item.title}</a></h3><p>{item.description}</p></div>
        <div className="project-details"><ul className="tech-list" aria-label={item.category}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${t.source}: ${item.title}`}>{t.source}<span><ArrowUpRight size={22} aria-hidden="true" /></span></a></div>
      </article>;
    })}</div>
  </SectionWrapper>;
}
