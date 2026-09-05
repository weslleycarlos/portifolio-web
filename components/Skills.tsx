import { SectionWrapper, SectionHeading } from './ui/SectionWrapper';
import { SKILLS } from '../constants';
import { useLanguage } from '../i18n';
export function Skills() {
  const { content: { skills: t } } = useLanguage();
  return <SectionWrapper id="skills"><div className="section-intro"><SectionHeading id="skills" kicker={t.kicker} title={t.title} emphasis={t.emphasis} /><p className="section-aside">{t.intro}</p></div>
    <div className="skill-list">{SKILLS.map((skills, index) => <div className="skill-row" key={index}><div><h3>{t.categories[index]}</h3><p>{t.notes[index]}</p></div><ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
  </SectionWrapper>;
}
