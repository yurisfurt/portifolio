import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contato" className="py-14 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-6">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Contato
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Canais diretos para contato, colaborações técnicas ou oportunidades.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Direct Links (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0d1219] border border-slate-200 dark:border-slate-800/80 space-y-3">
            <div>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">E-mail</span>
              <div className="text-sm font-semibold text-slate-900 dark:text-white font-mono mt-0.5 select-all">
                {PERSONAL_INFO.email}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">Telefone</span>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono mt-0.5">
                {PERSONAL_INFO.phone}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">Localização</span>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
                {PERSONAL_INFO.location}
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="mt-2 w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-medium transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'E-mail copiado' : 'Copiar e-mail'}</span>
            </button>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0d1219] border border-slate-200 dark:border-slate-800/80 space-y-2.5">
            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase block mb-1">
              Perfis Profissionais
            </span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-1 text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-slate-400" />
                <span>LinkedIn</span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">/in/yurifurtwaengler</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-1 text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">@yurifurtp</span>
            </a>
          </div>
        </div>

        {/* Minimal Message Form (3 cols) */}
        <div className="lg:col-span-3 rounded-xl bg-white dark:bg-[#0d1219] border border-slate-200 dark:border-slate-800/80 p-6 shadow-xs">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
            Enviar uma Mensagem
          </h3>

          {isSubmitted ? (
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-semibold block text-slate-900 dark:text-white">Mensagem enviada com sucesso.</span>
              <p className="text-slate-500 dark:text-slate-400">Obrigado pelo contato! Retornarei em breve no seu e-mail.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">Nome</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-[#070b10] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-slate-400 dark:focus:border-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">E-mail</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-[#070b10] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-slate-400 dark:focus:border-slate-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">Mensagem</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva seu projeto ou mensagem..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-[#070b10] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-slate-400 dark:focus:border-slate-600 transition-colors resize-none"
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded-lg transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar mensagem'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
