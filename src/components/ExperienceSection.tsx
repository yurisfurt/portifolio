import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-14 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-6">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Experiência Profissional
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Histórico focado em eficiência de processos, análise de dados e desenvolvimento de ferramentas.
        </p>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-8">
            {/* Minimal Timeline Point */}
            <div className="absolute left-3 top-2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 ring-4 ring-white dark:ring-[#0a0e14]" />

            <div className="rounded-xl bg-white dark:bg-[#0d1219] border border-slate-200 dark:border-slate-800/80 p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-slate-100 dark:border-slate-800/60">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 dark:text-slate-500 shrink-0">
                  <span>{exp.period}</span> · <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                {exp.description}
              </p>

              <ul className="mt-3 space-y-1.5">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="text-slate-400 dark:text-slate-500 font-mono">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                {exp.skills.map((s, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 px-1.5 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
