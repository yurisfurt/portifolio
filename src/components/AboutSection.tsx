import React from 'react';
import { Cpu, BarChart3, GitBranch } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const domainIcons = [BarChart3, Cpu, GitBranch];

  return (
    <section id="sobre-mim" className="py-14 border-t border-[#E3DED7] dark:border-[#364C59] scroll-mt-6">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#223747] dark:text-[#F5F2EC]">
          {t.about.sectionTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#5B7382] dark:text-[#9EB3BF] mt-1">
          {t.about.sectionSubtitle}
        </p>

        {/* Concise engineering approach summary (without redundant resume/bio clutter) */}
        <p className="mt-4 text-xs sm:text-sm text-[#223747]/85 dark:text-[#F5F2EC]/85 leading-relaxed">
          {t.about.p2}
        </p>
      </div>

      {/* 3 Core Technical Axes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {t.about.competencyDomains.map((domain, i) => {
          const Icon = domainIcons[i % domainIcons.length];
          return (
            <div
              key={i}
              className="p-5 rounded-xl bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Icon className="w-4 h-4 text-[#D96B27] dark:text-[#F28C38] shrink-0" />
                  <h3 className="font-bold text-xs sm:text-sm text-[#223747] dark:text-[#F5F2EC]">
                    {domain.title}
                  </h3>
                </div>
                <p className="text-xs text-[#223747]/80 dark:text-[#F5F2EC]/80 leading-relaxed mb-4">
                  {domain.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E3DED7]/70 dark:border-[#364C59]/70 text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF] leading-normal">
                {domain.items.join(' · ')}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
