import { SectionWrapper, SectionHeading } from './ui/SectionWrapper';
import { useLanguage } from '../i18n';
export function ProfessionalExperience() {
  const { content: { experience: t } } = useLanguage();
  return <SectionWrapper id="experience" className="experience-section">
    <SectionHeading id="experience" kicker={t.kicker} title={t.title} emphasis={t.emphasis} />
    <div className="experience-role"><div><span className="eyebrow">{t.organization}</span><h3>{t.role}</h3></div><p>{t.intro}</p></div>
    <div className="experience-grid"><div><h4>{t.responsibilitiesTitle}</h4><ul className="responsibility-list">{t.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div><h4>{t.systemsTitle}</h4><ol className="systems-list">{t.systems.map((item, index) => <li key={item}><span aria-hidden="true">0{index + 1}</span>{item}</li>)}</ol></div>
    </div><p className="confidentiality">{t.confidentiality}</p>
  </SectionWrapper>;
}
