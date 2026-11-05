import React from 'react';
import { PERSONAL_INFO, EDUCATION, LANGUAGES } from '../data/portfolioData';
import { GraduationCap, MapPin, Languages, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mim" className="py-14 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-6">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Sobre Mim
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Formação em Engenharia de Produção e Técnico em Informática, com atuação em processos industriais, dados e tecnologia.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Text (2 cols) */}
        <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Sou <strong className="text-slate-900 dark:text-white font-semibold">Engenheiro de Produção</strong> com experiência em processos industriais, projetos, análise de dados e melhoria contínua.
          </p>
          <p>
            Minha atuação é focada na <strong className="text-slate-900 dark:text-white font-semibold">integração entre processos, tecnologia e análise</strong> para desenvolver soluções práticas, melhorar a eficiência operacional e apoiar a tomada de decisão.
          </p>
          <p>
            Tenho vivência prática em projetos de implantação e transição de sistemas corporativos (como a implementação do SAP na Intelbras), desenvolvimento de soluções voltadas para operações industriais e construção de ferramentas de análise, acompanhamento e visualização de informações.
          </p>

          {/* Formação Acadêmica */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-slate-400" />
              <span>Formação Acadêmica</span>
            </h3>

            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block sm:inline">
                      {edu.course}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 sm:ml-2">
                      — {edu.institution}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 shrink-0">
                    {edu.period} · {edu.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info Card (1 col) */}
        <div className="rounded-xl bg-slate-50 dark:bg-[#0d1219] border border-slate-200 dark:border-slate-800/80 p-5 space-y-4 text-xs">
          <div>
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">Especialidade</div>
            <div className="font-medium text-slate-900 dark:text-slate-100 mt-0.5">
              Engenharia de Produção & Análise de Dados
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Localização</span>
            </div>
            <div className="font-medium text-slate-900 dark:text-slate-100 mt-0.5">
              {PERSONAL_INFO.location}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1">
              <Languages className="w-3.5 h-3.5 text-slate-400" />
              <span>Idiomas</span>
            </div>
            <div className="space-y-1 mt-1 text-slate-700 dark:text-slate-300">
              {LANGUAGES.map((lang, i) => (
                <div key={i} className="flex justify-between">
                  <span>{lang.language}</span>
                  <span className="font-mono text-slate-400 dark:text-slate-500 text-[11px]">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 text-[11px] font-mono text-slate-500">
            {PERSONAL_INFO.status}
          </div>
        </div>
      </div>
    </section>
  );
};
