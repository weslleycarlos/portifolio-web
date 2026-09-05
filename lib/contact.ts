import { EMAIL } from '../constants';
export interface ContactMessage { name: string; email: string; message: string; }
export async function submitContact(data: ContactMessage, signal: AbortSignal): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
    method: 'POST', signal,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: data.name.trim(), email: data.email.trim(), message: data.message.trim(),
      _subject: `Portfólio — ${data.name.trim()}`, _template: 'table', _replyto: data.email.trim(), _captcha: 'false',
    }),
  });
  if (!response.ok) throw new Error('Contact request failed');
  const result: unknown = await response.json();
  if (!result || typeof result !== 'object' || !('success' in result) || (result.success !== true && result.success !== 'true')) {
    throw new Error('Contact service did not confirm delivery');
  }
}
