import { SectionWrapper, SectionHeading } from './ui/SectionWrapper';
import { useLanguage } from '../i18n';
export function About() {
  const { content: { about: t } } = useLanguage();
  return <SectionWrapper id="about" className="about-section"><div className="about-grid">
    <div><SectionHeading id="about" kicker={t.kicker} title={t.title} emphasis={t.emphasis} /><div className="personal-note"><span className="note-mark" aria-hidden="true">↳</span><p>{t.note}</p><span>{t.noteLabel}</span></div></div>
    <div className="about-copy"><p className="lead">{t.intro}</p>{t.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p className="signature">Weslley Carlos<span>.</span></p></div>
  </div></SectionWrapper>;
}
