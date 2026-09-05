import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n';
export function Footer() {
  const { content: { footer: t } } = useLanguage();
  return <footer className="site-footer"><div className="shell footer-top"><a href="#hero" className="footer-name">Weslley Carlos<span>.</span></a><span>{t.role}</span><a href="#hero" className="text-link">{t.back}<ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Weslley Carlos de Morais</span><span>{t.rights}</span></div></footer>;
}
