import React, { useState } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { SOCIAL_LINKS } from '../constants';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const YOUR_EMAIL = "wcarlos_col@hotmail.com"; 

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Novo contato do Portfólio de ${data.name}`, 
          _template: 'table', 
          _captcha: 'true' 
        })
      });

      if (response.ok) {
        setFormState('success');
      } else {
        console.error('Erro no envio');
        setFormState('error');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      setFormState('error');
    }
  };

  return (
    <SectionWrapper id="contact" width="constrained">
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5 p-8 md:p-12">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Vamos <span className="text-accent-400">Conversar?</span></h2>
              <p className="text-slate-400 text-lg">
                Interessado em trabalhar juntos ou tem alguma dúvida? Sinta-se à vontade para entrar em contato. Estou sempre aberto a discutir novos projetos e oportunidades.
              </p>
            </div>

            <div className="space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all hover:translate-x-1 group"
                >
                  <div className="p-2 bg-slate-950 rounded-lg text-accent-400 group-hover:text-white transition-colors">
                    <link.icon size={20} />
                  </div>
                  <span className="font-medium text-slate-200">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-slate-950/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-400">Obrigado pelo contato. Retornarei em breve.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-6 text-accent-400 hover:text-accent-300 font-medium hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1.5">Nome</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-accent-400 focus:ring-1 focus:ring-accent-400 outline-none transition-all text-white placeholder-slate-600"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1.5">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-accent-400 focus:ring-1 focus:ring-accent-400 outline-none transition-all text-white placeholder-slate-600"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1.5">Mensagem</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-accent-400 focus:ring-1 focus:ring-accent-400 outline-none transition-all text-white placeholder-slate-600 resize-none"
                    placeholder="Olá, gostaria de falar sobre..."
                  />
                </div>

                {formState === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                    <AlertCircle size={16} />
                    <span>Ocorreu um erro ao enviar. Tente novamente.</span>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-accent-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {formState === 'submitting' ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Enviar Mensagem <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};