import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, MapPin, Languages, Cpu, BarChart3, GitBranch } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const domainIcons = [BarChart3, Cpu, GitBranch];

  return (
    <section id="sobre-mim" className="py-14 border-t border-[#E3DED7] dark:border-[#364C59] scroll-mt-6">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#223747] dark:text-[#F5F2EC]">
          {t.about.sectionTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#5B7382] dark:text-[#9EB3BF] mt-1">
          {t.about.sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column: Story, Education Summary & Merged Competencies (2 cols) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Narrative Profile */}
          <div className="space-y-4 text-xs sm:text-sm text-[#223747]/85 dark:text-[#F5F2EC]/85 leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          {/* Formação Acadêmica Apresentativa */}
          <div className="pt-6 border-t border-[#E3DED7] dark:border-[#364C59]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#D96B27] dark:text-[#F28C38] mb-3 flex items-center gap-2 font-semibold">
              <GraduationCap className="w-4 h-4 text-[#D96B27] dark:text-[#F28C38]" />
              <span>{t.about.educationTitle}</span>
            </h3>

            <p className="text-xs text-[#5B7382] dark:text-[#9EB3BF] mb-4">
              {t.about.educationSummary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.educationItems.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59]"
                >
                  <span className="font-bold text-xs sm:text-sm text-[#223747] dark:text-[#F5F2EC] block">
                    {edu.course}
                  </span>
                  <span className="text-xs font-mono text-[#E5A94C] dark:text-[#E8B665] block mt-0.5 font-semibold">
                    {edu.institution}
                  </span>
                  <p className="text-xs text-[#223747]/80 dark:text-[#F5F2EC]/80 mt-2 leading-relaxed">
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Competências Mescladas e Minimalistas (3 Core Technical Axes) */}
          <div className="pt-6 border-t border-[#E3DED7] dark:border-[#364C59]">
            <div className="mb-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#D96B27] dark:text-[#F28C38] font-semibold">
                {t.about.skillsTitle}
              </h3>
              <p className="text-xs text-[#5B7382] dark:text-[#9EB3BF] mt-0.5">
                {t.about.skillsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.about.competencyDomains.map((domain, i) => {
                const Icon = domainIcons[i % domainIcons.length];
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-[#D96B27] dark:text-[#F28C38]" />
                        <h4 className="font-bold text-xs sm:text-sm text-[#223747] dark:text-[#F5F2EC]">
                          {domain.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#223747]/80 dark:text-[#F5F2EC]/80 leading-relaxed mb-3">
                        {domain.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E3DED7]/70 dark:border-[#364C59]/70 text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF] leading-normal">
                      {domain.items.join(' · ')}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clean Unboxed Stack Ribbon */}
            <div className="mt-5 p-3 rounded-lg bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-mono text-[#D96B27] dark:text-[#F28C38] text-[11px] font-semibold uppercase">
                {t.about.stackLabel}:
              </span>
              <span className="font-mono text-xs text-[#223747] dark:text-[#F5F2EC]">
                Python · SQL · n8n · PostgreSQL · NumPy / SciPy · Dashboards & BI · Git · Pesquisa Operacional
              </span>
            </div>
          </div>
        </div>

        {/* Side Column: Professional Profile Card (1 col) */}
        <div>
          <div className="rounded-xl bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] p-5 space-y-4 text-xs shadow-xs sticky top-8">
            {/* Yuri Profile Snapshot */}
            <div className="flex items-center gap-3 pb-4 border-b border-[#E3DED7] dark:border-[#364C59]">
              <img
                src="/assets/aistudio/foto_linda_d96a6bf9.jpg"
                alt={PERSONAL_INFO.shortName}
                className="w-12 h-12 rounded-xl object-cover border border-[#E3DED7] dark:border-[#364C59] shadow-2xs"
              />
              <div className="min-w-0">
                <span className="block font-bold text-sm text-[#223747] dark:text-[#F5F2EC] truncate">
                  {PERSONAL_INFO.shortName}
                </span>
                <span className="block text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF] truncate">
                  {PERSONAL_INFO.shortRole}
                </span>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF] uppercase">
                {t.about.specialtyLabel}
              </div>
              <div className="font-semibold text-[#223747] dark:text-[#F5F2EC] mt-0.5">
                {t.about.specialtyValue}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF] uppercase flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D96B27] dark:text-[#F28C38]" />
                <span>{t.about.locationLabel}</span>
              </div>
              <div className="font-semibold text-[#223747] dark:text-[#F5F2EC] mt-0.5">
                {PERSONAL_INFO.location}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF] uppercase flex items-center gap-1">
                <Languages className="w-3.5 h-3.5 text-[#E5A94C] dark:text-[#E8B665]" />
                <span>{t.about.languagesLabel}</span>
              </div>
              <div className="space-y-1.5 mt-1.5 text-[#223747] dark:text-[#F5F2EC]">
                <div className="flex justify-between items-center">
                  <span>{language === 'pt' ? 'Português' : 'Portuguese'}</span>
                  <span className="font-mono text-[#5B7382] dark:text-[#9EB3BF] text-[11px]">
                    {t.about.nativeLevel}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'pt' ? 'Inglês' : 'English'}</span>
                  <span className="font-mono text-[#5B7382] dark:text-[#9EB3BF] text-[11px]">
                    {t.about.intermediateLevel}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E3DED7] dark:border-[#364C59] text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF] leading-relaxed">
              {t.about.status}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
