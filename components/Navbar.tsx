import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { languages, useLanguage } from '../i18n';
const sections = ['hero', 'projects', 'about', 'experience', 'skills', 'contact'];
export function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const updateActive = () => {
      let current = 'hero';
      sections.forEach(id => { if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 180) current = id; });
      setActive(current);
    };
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, []);
  useEffect(() => {
    if (!open) return;
    const focusFrame = window.requestAnimationFrame(() => headerRef.current?.querySelector<HTMLAnchorElement>('.main-nav a')?.focus());
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); } };
    const onPointer = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) setOpen(false); };
    const onResize = () => { if (window.innerWidth > 1000) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    window.addEventListener('resize', onResize);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);
  return <header className="site-header" ref={headerRef} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false); }}>
    <div className="shell header-inner">
      <a href="#hero" className="wordmark" aria-label="Weslley Carlos" onClick={() => setOpen(false)}>wc<span>.</span></a>
      <nav id="main-navigation" aria-label={t.navigation} className={`main-nav ${open ? 'is-open' : ''}`}>
        {sections.slice(1).map((id, i) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{t.nav[i + 1]}{id === 'contact' && <ArrowUpRight size={15} aria-hidden="true" />}</a>)}
      </nav>
      <div className="header-actions">
        <div className="language-switch" role="group" aria-label={t.language}>{languages.map(language => <button key={language.code} type="button" lang={language.code} aria-label={language.name} aria-pressed={locale === language.code} onClick={() => setLocale(language.code)}>{language.label}</button>)}</div>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? t.closeMenu : t.menu} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
    </div>
  </header>;
}
