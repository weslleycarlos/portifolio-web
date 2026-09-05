import { ArrowDown, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n';
export function Hero() {
  const { t } = useLanguage();
  return <section id="hero" className="hero"><div className="shell">
    <div className="hero-topline"><span className="eyebrow"><span className="status-dot" />{t.hero.label}</span><span className="hero-edition">WESLLEY CARLOS / PORTFOLIO</span></div>
    <div className="hero-grid">
      <div className="hero-main">
        <h1>{t.hero.line1}<br />{t.hero.line2}<br /><em>{t.hero.line3}</em></h1>
        <p className="hero-intro">{t.hero.intro}</p>
        <div className="hero-links"><a href="#projects" className="button button-dark">{t.hero.projects}<ArrowDownRight size={19} aria-hidden="true" /></a><a href="#contact" className="text-link">{t.hero.contact}<ArrowUpRight size={18} aria-hidden="true" /></a></div>
      </div>
      <aside className="profile-note" aria-label="Weslley Carlos">
        <div className="profile-top"><span>WC / DEV</span><ArrowUpRight size={25} aria-hidden="true" /></div>
        <div className="profile-name">Weslley<br />Carlos<span>.</span></div><p className="profile-role">{t.hero.role}</p>
        <dl><div><dt>{t.hero.focusLabel}</dt><dd>{t.hero.focus}</dd></div><div><dt>{t.hero.exploringLabel}</dt><dd>{t.hero.exploring}</dd></div></dl>
        <div className="profile-bottom"><span className="status-dot" />{t.hero.location}<span>FULL-STACK</span></div>
      </aside>
    </div>
    <div className="hero-bottom"><p>{t.hero.note}</p><a href="#projects">{t.hero.scroll}<ArrowDown size={16} aria-hidden="true" /></a></div>
  </div></section>;
}
