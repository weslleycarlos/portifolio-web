import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './i18n';
function Portfolio() {
  const { t } = useLanguage();
  return <><a className="skip-link" href="#main">{t.skip}</a><Navbar /><main id="main" tabIndex={-1}><Hero /><Projects /><About /><ProfessionalExperience /><Skills /><Contact /></main><Footer /></>;
}
export default function App() { return <LanguageProvider><Portfolio /></LanguageProvider>; }
