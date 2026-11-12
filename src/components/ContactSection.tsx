import React, { useState } from 'react';
import { Github, Linkedin, Copy, Check, ExternalLink, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-14 border-t border-[#E3DED7] dark:border-[#364C59] scroll-mt-6">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#223747] dark:text-[#F5F2EC]">
          {t.contact.sectionTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#5B7382] dark:text-[#9EB3BF] mt-1">
          {t.contact.sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Card 1: Direct Contact & Location */}
        <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] space-y-5 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Mail className="w-4 h-4 text-[#D96B27] dark:text-[#F28C38]" />
                <span className="text-[11px] font-mono text-[#D96B27] dark:text-[#F28C38] uppercase font-bold tracking-wider">
                  {t.contact.emailLabel}
                </span>
              </div>
              <div className="text-base font-semibold text-[#223747] dark:text-[#F5F2EC] font-mono select-all break-all">
                {PERSONAL_INFO.email}
              </div>
            </div>

            <div className="pt-2 border-t border-[#E3DED7]/60 dark:border-[#364C59]/60">
              <div className="flex items-center gap-2 mb-1.5">
                <MapPin className="w-4 h-4 text-[#5B7382] dark:text-[#9EB3BF]" />
                <span className="text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF] uppercase font-semibold">
                  {t.contact.locationLabel}
                </span>
              </div>
              <div className="text-sm text-[#223747]/85 dark:text-[#F5F2EC]/85 font-mono">
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F7F5F1] dark:bg-[#1B2933] hover:bg-[#E3DED7] dark:hover:bg-[#364C59] text-[#223747] dark:text-[#F5F2EC] border border-[#E3DED7] dark:border-[#364C59] rounded-xl text-xs font-semibold transition-colors shadow-2xs group"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#E5A94C] dark:text-[#E8B665]" />
                <span className="text-[#E5A94C] dark:text-[#E8B665]">{t.contact.emailCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#5B7382] dark:text-[#9EB3BF] group-hover:text-[#D96B27] dark:group-hover:text-[#F28C38] transition-colors" />
                <span>{t.contact.copyEmail}</span>
              </>
            )}
          </button>
        </div>

        {/* Card 2: Professional Networks (LinkedIn & GitHub) */}
        <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] space-y-4 shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono text-[#D96B27] dark:text-[#F28C38] uppercase font-bold tracking-wider block mb-3">
              {t.contact.socialLabel}
            </span>

            <div className="space-y-3">
              {/* LinkedIn Link Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#F7F5F1]/60 dark:bg-[#1B2933]/60 hover:bg-[#F7F5F1] dark:hover:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] transition-all hover:border-[#D96B27] dark:hover:border-[#F28C38]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4 text-[#5B7382] group-hover:text-[#D96B27] dark:text-[#9EB3BF] dark:group-hover:text-[#F28C38] transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-[#223747] dark:text-[#F5F2EC] group-hover:text-[#D96B27] dark:group-hover:text-[#F28C38] transition-colors">
                      LinkedIn
                    </span>
                    <span className="block text-[11px] text-[#5B7382] dark:text-[#9EB3BF] font-mono truncate">
                      /in/yuri-siqueira-furtwaengler-8a1667134
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#5B7382] dark:text-[#9EB3BF] group-hover:text-[#D96B27] dark:group-hover:text-[#F28C38] shrink-0 ml-2 transition-colors" />
              </a>

              {/* GitHub Link Card */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#F7F5F1]/60 dark:bg-[#1B2933]/60 hover:bg-[#F7F5F1] dark:hover:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] transition-all hover:border-[#D96B27] dark:hover:border-[#F28C38]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4 text-[#5B7382] group-hover:text-[#D96B27] dark:text-[#9EB3BF] dark:group-hover:text-[#F28C38] transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-[#223747] dark:text-[#F5F2EC] group-hover:text-[#D96B27] dark:group-hover:text-[#F28C38] transition-colors">
                      GitHub
                    </span>
                    <span className="block text-[11px] text-[#5B7382] dark:text-[#9EB3BF] font-mono truncate">
                      @yurisfurt
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#5B7382] dark:text-[#9EB3BF] group-hover:text-[#D96B27] dark:group-hover:text-[#F28C38] shrink-0 ml-2 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
