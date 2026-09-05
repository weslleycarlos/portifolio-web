import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { content } from './content';
export const languages = [
  { code: 'pt-BR', label: 'PT', name: 'Português do Brasil' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
] as const;
export type Locale = typeof languages[number]['code'];
const pt = {
  skip: 'Pular para o conteúdo', menu: 'Abrir menu', closeMenu: 'Fechar menu', navigation: 'Navegação principal', language: 'Idioma',
  nav: ['Início', 'Projetos', 'Sobre', 'Experiência', 'Tecnologias', 'Contato'],
  title: 'Weslley Carlos — Desenvolvimento & dados',
  description: 'Portfólio de Weslley Carlos. Desenvolvimento full-stack, sistemas com Oracle APEX e automação de processos. Conheça meus projetos e minha experiência.',
  hero: {
    label: 'Desenvolvimento full-stack', line1: 'Entre dados,', line2: 'código e', line3: 'vida real.',
    intro: 'Sou Weslley Carlos. Desenvolvo sistemas no serviço público e exploro novas ideias em projetos pessoais.',
    projects: 'Conheça meu trabalho', contact: 'Vamos conversar',
    role: 'Servidor público federal.\nDesenvolvedor por vocação.', location: 'Brasil',
    focusLabel: 'No dia a dia', focus: 'Oracle APEX, dados e processos.',
    exploringLabel: 'Além do expediente', exploring: 'Aplicações web e automações.',
    note: 'Da organização dos dados à experiência de quem usa.', scroll: 'Continue explorando',
  },
};
type Copy = typeof pt;
const translations: Record<Locale, Copy> = {
  'pt-BR': pt,
  en: {
    skip: 'Skip to content', menu: 'Open menu', closeMenu: 'Close menu', navigation: 'Main navigation', language: 'Language',
    nav: ['Home', 'Projects', 'About', 'Experience', 'Technologies', 'Contact'],
    title: 'Weslley Carlos — Development & data',
    description: 'Weslley Carlos’s portfolio. Full-stack development, Oracle APEX systems and process automation. Explore my projects and experience.',
    hero: {
      label: 'Full-stack development', line1: 'Where data,', line2: 'code &', line3: 'life meet.',
      intro: 'I’m Weslley Carlos. I build systems in the public sector and explore new ideas through personal projects.',
      projects: 'Explore my work', contact: 'Let’s talk', role: 'Federal public servant.\nDeveloper at heart.', location: 'Brazil',
      focusLabel: 'At work', focus: 'Oracle APEX, data and processes.', exploringLabel: 'After hours', exploring: 'Web applications and automation.',
      note: 'From organizing data to the experience of using it.', scroll: 'Keep exploring',
    },
  },
  es: {
    skip: 'Saltar al contenido', menu: 'Abrir menú', closeMenu: 'Cerrar menú', navigation: 'Navegación principal', language: 'Idioma',
    nav: ['Inicio', 'Proyectos', 'Sobre mí', 'Experiencia', 'Tecnologías', 'Contacto'],
    title: 'Weslley Carlos — Desarrollo y datos',
    description: 'Portafolio de Weslley Carlos. Desarrollo full-stack, sistemas con Oracle APEX y automatización de procesos. Conoce mis proyectos y experiencia.',
    hero: {
      label: 'Desarrollo full-stack', line1: 'Entre datos,', line2: 'código y', line3: 'vida real.',
      intro: 'Soy Weslley Carlos. Desarrollo sistemas en el sector público y exploro nuevas ideas en proyectos personales.',
      projects: 'Conoce mi trabajo', contact: 'Hablemos', role: 'Servidor público federal.\nDesarrollador por vocación.', location: 'Brasil',
      focusLabel: 'En el día a día', focus: 'Oracle APEX, datos y procesos.', exploringLabel: 'Fuera del trabajo', exploring: 'Aplicaciones web y automatización.',
      note: 'Desde la organización de datos hasta la experiencia de uso.', scroll: 'Sigue explorando',
    },
  },
};
const STORAGE_KEY = 'portfolio-language';
export function normalizeLocale(value: string | null): Locale | null {
  if (!value) return null;
  const language = value.toLowerCase().split('-')[0];
  return language === 'pt' ? 'pt-BR' : language === 'en' || language === 'es' ? language : null;
}
export function initialLocale(): Locale {
  if (typeof window === 'undefined') return 'pt-BR';
  const fromUrl = normalizeLocale(new URL(window.location.href).searchParams.get('lang'));
  if (fromUrl) return fromUrl;
  try {
    const saved = normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
    if (saved) return saved;
  } catch { /* Storage is optional. */ }
  for (const language of navigator.languages ?? [navigator.language]) {
    const supported = normalizeLocale(language);
    if (supported) return supported;
  }
  return 'pt-BR';
}
const LanguageContext = createContext<{ locale: Locale; t: Copy; setLocale: (locale: Locale) => void } | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, updateLocale] = useState<Locale>(initialLocale);
  const t = translations[locale];
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
  }, [locale, t]);
  useEffect(() => {
    const onPopState = () => updateLocale(initialLocale());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  function setLocale(next: Locale) {
    updateLocale(next);
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* Storage is optional. */ }
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(null, '', url);
  }
  return <LanguageContext.Provider value={{ locale, t, setLocale }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage requires LanguageProvider');
  return { ...context, content: content[context.locale] };
}
