import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import { SectionWrapper, SectionHeading } from './ui/SectionWrapper';
import { EMAIL, SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../i18n';
import { submitContact } from '../lib/contact';
export function Contact() {
  const { content: { contact: t } } = useLanguage();
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const request = useRef<AbortController | null>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => () => request.current?.abort(), []);
  useEffect(() => { if (state === 'success') successRef.current?.focus(); }, [state]);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (fields.get('website')) return;
    const data = { name: String(fields.get('name') ?? '').trim(), email: String(fields.get('email') ?? '').trim(), message: String(fields.get('message') ?? '').trim() };
    if (!data.name || !data.email || !data.message) { setState('error'); return; }
    const controller = new AbortController();
    request.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    setState('submitting');
    try { await submitContact(data, controller.signal); setState('success'); }
    catch { setState('error'); }
    finally { window.clearTimeout(timeout); request.current = null; }
  }
  return <SectionWrapper id="contact" className="contact-section"><div className="contact-grid">
    <div><SectionHeading id="contact" kicker={t.kicker} title={t.title} emphasis={t.emphasis} /><p className="contact-intro">{t.intro}</p>
      <div className="direct-contact"><span>{t.emailLabel}</span><a href={`mailto:${EMAIL}`}>{EMAIL}<ArrowUpRight size={20} aria-hidden="true" /></a></div>
      <div className="social-links">{SOCIAL_LINKS.filter(link => !link.url.startsWith('mailto:')).map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-link"><link.icon size={17} aria-hidden="true" />{link.name}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</div>
    </div>
    <div className="contact-form-panel">{state === 'success' ? <div className="form-success" ref={successRef} tabIndex={-1} role="status"><Check size={36} aria-hidden="true" /><h3>{t.successTitle}</h3><p>{t.success}</p><button type="button" className="button button-dark" onClick={() => { setState('idle'); window.requestAnimationFrame(() => nameRef.current?.focus()); }}>{t.again}<ArrowUpRight size={18} aria-hidden="true" /></button></div> :
      <form onSubmit={handleSubmit} aria-busy={state === 'submitting'}>
        <div className="form-row"><label htmlFor="contact-name">{t.name}</label><input ref={nameRef} id="contact-name" name="name" autoComplete="name" required maxLength={120} placeholder={t.namePlaceholder} disabled={state === 'submitting'} /></div>
        <div className="form-row"><label htmlFor="contact-email">{t.email}</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder={t.emailPlaceholder} disabled={state === 'submitting'} /></div>
        <div className="form-row"><label htmlFor="contact-message">{t.message}</label><textarea id="contact-message" name="message" required rows={3} maxLength={5000} placeholder={t.messagePlaceholder} disabled={state === 'submitting'} /></div>
        <div hidden aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
        {state === 'error' && <p className="form-error" role="alert">{t.error}</p>}
        <button type="submit" className="button button-dark submit-button" disabled={state === 'submitting'}>{state === 'submitting' ? <>{t.submitting}<Loader2 className="loading-icon" size={18} aria-hidden="true" /></> : <>{t.submit}<ArrowUpRight size={19} aria-hidden="true" /></>}</button>
        <p className="form-service">{t.service}</p>
      </form>}
    </div>
  </div></SectionWrapper>;
}
