import type { ReactNode } from 'react';
interface SectionWrapperProps { id: string; className?: string; children: ReactNode; }
export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return <section id={id} aria-labelledby={`${id}-title`} className={`section ${className}`}><div className="shell">{children}</div></section>;
}
export function SectionHeading({ id, kicker, title, emphasis }: { id: string; kicker: string; title: string; emphasis: string }) {
  return <div className="section-heading"><p className="section-kicker">{kicker}</p><h2 id={`${id}-title`}>{title}<br /><em>{emphasis}</em></h2></div>;
}
