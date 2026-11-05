import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mim" className="py-14 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-6">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Sobre Mim
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Formação em Engenharia de Produção, raciocínio quantitativo e desenvolvimento de ferramentas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Text (2 cols) */}
        <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Minha trajetória une a visão sistêmica da <strong className="text-slate-900 dark:text-white font-semibold">Engenharia de Produção</strong> ao desenvolvimento de <strong className="text-slate-900 dark:text-white font-semibold">ferramentas computacionais e análise de dados</strong> para resolução de gargalos operacionais.
          </p>
          <p>
            Com foco em processos industriais e tomada de decisão fundamentada em dados, atuo desde a modelagem matemática de problemas não-lineares até a implementação de rotinas automatizadas com n8n e construção de painéis analíticos com Power BI e SQL.
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Acredito no pragmatismo técnico: o valor de algoritmos e pipelines está diretamente ligado à clareza que trazem para os fluxos de trabalho e à eliminação de retrabalhos operacionais diários.
          </p>
        </div>

        {/* Quiet Info Box (1 col) */}
        <div className="rounded-xl bg-slate-50 dark:bg-[#0d1219] border border-slate-200 dark:border-slate-800/80 p-5 space-y-4 text-xs">
          <div>
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">Especialidade</div>
            <div className="font-medium text-slate-900 dark:text-slate-100 mt-0.5">Engenharia, Dados & Otimização</div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">Áreas de Interesse</div>
            <div className="font-medium text-slate-900 dark:text-slate-100 mt-0.5">Pesquisa Operacional, Automação & BI</div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">Localização</div>
            <div className="font-medium text-slate-900 dark:text-slate-100 mt-0.5">{PERSONAL_INFO.location} · Remoto / Híbrido</div>
          </div>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 text-[11px] font-mono text-slate-500">
            {PERSONAL_INFO.status}
          </div>
        </div>
      </div>
    </section>
  );
};
