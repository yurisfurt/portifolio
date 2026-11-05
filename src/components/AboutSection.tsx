import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, MapPin, Languages, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="sobre-mim" className="py-14 border-t border-[#DCE4E1] dark:border-[#344A52] scroll-mt-6">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#243746] dark:text-[#E7E9E6]">
          {t.about.sectionTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#668B91] dark:text-[#89ABB0] mt-1">
          {t.about.sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Text (2 cols) */}
        <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm text-[#243746]/85 dark:text-[#E7E9E6]/85 leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>

          {/* Formação Acadêmica & Credenciais */}
          <div className="pt-6 border-t border-[#DCE4E1] dark:border-[#344A52]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#668B91] dark:text-[#89ABB0] mb-3 flex items-center gap-2 font-semibold">
              <GraduationCap className="w-4 h-4 text-[#668B91] dark:text-[#89ABB0]" />
              <span>{t.about.educationTitle}</span>
            </h3>

            <div className="space-y-3">
              {t.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                  <div>
                    <span className="font-semibold text-[#243746] dark:text-[#E7E9E6] block sm:inline">
                      {edu.course}
                    </span>
                    <span className="text-[#668B91] dark:text-[#89ABB0] sm:ml-2">
                      — {edu.institution}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0] shrink-0">
                    {edu.period} · {edu.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Card (1 col) */}
        <div className="rounded-xl bg-[#FFFFFF] dark:bg-[#2D3B44] border border-[#DCE4E1] dark:border-[#344A52] p-5 space-y-4 text-xs shadow-xs">
          <div>
            <div className="text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0] uppercase">
              {t.about.specialtyLabel}
            </div>
            <div className="font-semibold text-[#243746] dark:text-[#E7E9E6] mt-0.5">
              {t.about.specialtyValue}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0] uppercase flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#668B91] dark:text-[#89ABB0]" />
              <span>{t.about.locationLabel}</span>
            </div>
            <div className="font-semibold text-[#243746] dark:text-[#E7E9E6] mt-0.5">
              {PERSONAL_INFO.location}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0] uppercase flex items-center gap-1">
              <Languages className="w-3.5 h-3.5 text-[#668B91] dark:text-[#89ABB0]" />
              <span>{t.about.languagesLabel}</span>
            </div>
            <div className="space-y-1 mt-1 text-[#243746] dark:text-[#E7E9E6]">
              <div className="flex justify-between">
                <span>{language === 'pt' ? 'Português' : 'Portuguese'}</span>
                <span className="font-mono text-[#668B91] dark:text-[#89ABB0] text-[11px]">{t.about.nativeLevel}</span>
              </div>
              <div className="flex justify-between">
                <span>{language === 'pt' ? 'Inglês' : 'English'}</span>
                <span className="font-mono text-[#668B91] dark:text-[#89ABB0] text-[11px]">{t.about.intermediateLevel}</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#DCE4E1] dark:border-[#344A52] text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0]">
            {t.about.status}
          </div>
        </div>
      </div>
    </section>
  );
};
