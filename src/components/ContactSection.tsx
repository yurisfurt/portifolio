import React, { useState } from 'react';
import { Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
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
    <section id="contato" className="py-14 border-t border-[#DCE4E1] dark:border-[#344A52] scroll-mt-6">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#243746] dark:text-[#E7E9E6]">
          {t.contact.sectionTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#668B91] dark:text-[#89ABB0] mt-1">
          {t.contact.sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Direct Links (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="p-5 rounded-xl bg-[#FFFFFF] dark:bg-[#2D3B44] border border-[#DCE4E1] dark:border-[#344A52] space-y-3 shadow-xs">
            <div>
              <span className="text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0] uppercase font-semibold">
                {t.contact.emailLabel}
              </span>
              <div className="text-sm font-semibold text-[#243746] dark:text-[#E7E9E6] font-mono mt-0.5 select-all">
                {PERSONAL_INFO.email}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0] uppercase font-semibold">
                {t.contact.phoneLabel}
              </span>
              <div className="text-xs font-semibold text-[#243746] dark:text-[#E7E9E6] font-mono mt-0.5">
                {PERSONAL_INFO.phone}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0] uppercase font-semibold">
                {t.contact.locationLabel}
              </span>
              <div className="text-xs text-[#243746]/80 dark:text-[#E7E9E6]/80 font-mono mt-0.5">
                {PERSONAL_INFO.location}
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="mt-2 w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#F5F3EF] dark:bg-[#202C34] hover:bg-[#DCE4E1]/50 dark:hover:bg-[#344A52] text-[#243746] dark:text-[#E7E9E6] border border-[#DCE4E1] dark:border-[#344A52] rounded-lg text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#668B91] dark:text-[#89ABB0]" /> : <Copy className="w-3.5 h-3.5 text-[#668B91] dark:text-[#89ABB0]" />}
              <span>{copied ? t.contact.emailCopied : t.contact.copyEmail}</span>
            </button>
          </div>

          <div className="p-5 rounded-xl bg-[#FFFFFF] dark:bg-[#2D3B44] border border-[#DCE4E1] dark:border-[#344A52] space-y-2.5 shadow-xs">
            <span className="text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0] uppercase block mb-1 font-semibold">
              {t.contact.socialLabel}
            </span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-1 text-xs text-[#243746] dark:text-[#E7E9E6] hover:text-[#668B91] dark:hover:text-[#89ABB0] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-[#668B91] dark:text-[#89ABB0]" />
                <span className="font-semibold">LinkedIn</span>
              </div>
              <span className="text-[#668B91] dark:text-[#89ABB0] font-mono text-[11px]">/in/yurifurtwaengler</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-1 text-xs text-[#243746] dark:text-[#E7E9E6] hover:text-[#668B91] dark:hover:text-[#89ABB0] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-[#668B91] dark:text-[#89ABB0]" />
                <span className="font-semibold">GitHub</span>
              </div>
              <span className="text-[#668B91] dark:text-[#89ABB0] font-mono text-[11px]">@yurifurtp</span>
            </a>
          </div>
        </div>

        {/* Message Form (3 cols) */}
        <div className="lg:col-span-3 rounded-xl bg-[#FFFFFF] dark:bg-[#2D3B44] border border-[#DCE4E1] dark:border-[#344A52] p-6 shadow-xs">
          <h3 className="text-sm font-bold text-[#243746] dark:text-[#E7E9E6] mb-4">
            {t.contact.formTitle}
          </h3>

          {isSubmitted ? (
            <div className="p-4 rounded-lg bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52] text-xs text-[#243746] dark:text-[#E7E9E6] space-y-1">
              <span className="font-bold block text-[#243746] dark:text-[#E7E9E6]">{t.contact.successTitle}</span>
              <p className="text-[#668B91] dark:text-[#89ABB0]">{t.contact.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#668B91] dark:text-[#89ABB0] mb-1 font-medium">
                    {t.contact.nameField}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3 py-2 rounded-lg bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52] text-[#243746] dark:text-[#E7E9E6] text-xs focus:outline-none focus:border-[#243746] dark:focus:border-[#89ABB0] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#668B91] dark:text-[#89ABB0] mb-1 font-medium">
                    {t.contact.emailField}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3 py-2 rounded-lg bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52] text-[#243746] dark:text-[#E7E9E6] text-xs focus:outline-none focus:border-[#243746] dark:focus:border-[#89ABB0] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#668B91] dark:text-[#89ABB0] mb-1 font-medium">
                  {t.contact.messageField}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3 py-2 rounded-lg bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52] text-[#243746] dark:text-[#E7E9E6] text-xs focus:outline-none focus:border-[#243746] dark:focus:border-[#89ABB0] transition-colors resize-none"
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#243746] hover:bg-[#1a2833] dark:bg-[#E7E9E6] dark:hover:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#202C34] text-xs font-bold rounded-lg transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? t.contact.sendingButton : t.contact.sendButton}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
