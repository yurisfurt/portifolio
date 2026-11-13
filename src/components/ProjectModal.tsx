import React, { useEffect, useState } from 'react';
import { X, Check, Copy, Terminal, FlaskConical, FileCheck, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { RastriginSurface3D } from './RastriginSurface3D';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (!project.codeSnippet) return;
    navigator.clipboard.writeText(project.codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1B2933]/75 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-3xl my-6 bg-[#FFFFFF] dark:bg-[#283B47] text-[#223747] dark:text-[#F5F2EC] rounded-2xl border border-[#E3DED7] dark:border-[#364C59] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#E3DED7] dark:border-[#364C59]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#5B7382] dark:text-[#9EB3BF] font-mono">
              <span>{project.categoryLabel}</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-[#D96B27] dark:text-[#F28C38] font-semibold">
                <FileCheck className="w-3.5 h-3.5" />
                <span>{project.provenanceLabel || t.projects.confirmedDeliverable}</span>
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#223747] dark:text-[#F5F2EC] mt-1.5 tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5B7382] dark:text-[#9EB3BF] mt-1 font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#5B7382] hover:text-[#223747] dark:text-[#9EB3BF] dark:hover:text-[#F5F2EC] rounded-lg border border-[#E3DED7] dark:border-[#364C59] transition-colors shrink-0"
            title={`${t.projects.close} (ESC)`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[78vh] overflow-y-auto">
          {/* Specifications */}
          {project.specs && project.specs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-lg bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59]">
              {project.specs.map((spec, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[11px] text-[#5B7382] dark:text-[#9EB3BF] font-mono">{spec.label}</span>
                  <span className="text-xs font-semibold text-[#223747] dark:text-[#F5F2EC] font-mono mt-0.5">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Real High-Resolution Dashboard for Defesa Civil */}
          {project.id === 'defesa-civil-dashboard' && (
            <div className="rounded-xl border border-[#E3DED7] dark:border-[#364C59] overflow-hidden bg-[#F7F5F1] dark:bg-[#1B2933]">
              <div className="p-3 bg-[#FFFFFF] dark:bg-[#283B47] border-b border-[#E3DED7] dark:border-[#364C59] flex items-center justify-between text-xs">
                <span className="font-mono font-medium text-[#223747] dark:text-[#F5F2EC]">
                  {language === 'pt' ? 'Painel Oficial em Produção · Defesa Civil de SC' : 'Official Portal in Production · Santa Catarina Civil Defense'}
                </span>
                <span className="font-mono text-[#E5A94C] dark:text-[#E8B665] text-[11px] font-semibold">
                  Eng. Yuri Furtwaengler (Apoio Técnico)
                </span>
              </div>
              <div className="p-2 sm:p-4 bg-[#1B2933]/5 dark:bg-black/30">
                <img
                  src="./assets/aistudio/image_89f17629.png"
                  alt="Central de Dados Programa Defesa Civil na Escola"
                  className="w-full h-auto rounded-lg border border-[#E3DED7] dark:border-[#364C59] shadow-sm"
                />
              </div>
            </div>
          )}

          {/* Overview, Parameters & Interactive 3D for Computational Optimization */}
          {project.id === 'rastrigin-optimization' && (
            <div className="space-y-4">
              {/* Overview Benchmark Card */}
              <div className="rounded-xl border border-[#E3DED7] dark:border-[#364C59] overflow-hidden bg-[#0E1A2A]">
                <div className="p-3 bg-[#F7F5F1] dark:bg-[#283B47] border-b border-[#E3DED7] dark:border-[#364C59] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="font-mono font-medium text-[#223747] dark:text-[#F5F2EC]">
                    {t.projects.benchmarkGraphTitle}
                  </span>
                  <span className="font-mono text-[#0F766E] dark:text-[#2DD4BF] text-[11px] font-bold">
                    2,49× · 59,8% {language === 'pt' ? 'menos tempo' : 'faster'} (4 proc)
                  </span>
                </div>
                <div className="p-2 sm:p-4 flex justify-center bg-[#0E1A2A]">
                  <img
                    src="./assets/aistudio/overview_337417fc.png"
                    alt="Smart Heuristic — Dividir o trabalho. Medir o resultado."
                    className="w-full h-auto max-h-[400px] object-contain rounded-lg border border-[#283B47]"
                  />
                </div>
                <div className="px-4 py-2.5 bg-[#F7F5F1] dark:bg-[#283B47] border-t border-[#E3DED7] dark:border-[#364C59] text-xs font-mono text-[#5B7382] dark:text-[#9EB3BF]">
                  {t.projects.benchmarkGraphSubtitle}
                </div>
              </div>

              {/* Parameters & 3D Measured Configs Photo Card */}
              <div className="rounded-xl border border-[#E3DED7] dark:border-[#364C59] overflow-hidden bg-[#0E1A2A]">
                <div className="p-3 bg-[#F7F5F1] dark:bg-[#283B47] border-b border-[#E3DED7] dark:border-[#364C59] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="font-mono font-medium text-[#223747] dark:text-[#F5F2EC]">
                    {language === 'pt'
                      ? 'Parâmetros: Efeito do Número de Processos & TREE (Configurações Medidas)'
                      : 'Parameters: Process Count Effect & TREE (Measured Configurations)'}
                  </span>
                  <span className="font-mono text-[#D96B27] dark:text-[#F28C38] text-[11px] font-bold">
                    {language === 'pt' ? 'Blocos 16.384 vs 131.072 · 35/35 Validadas' : 'Blocks 16,384 vs 131,072 · 35/35 Validated'}
                  </span>
                </div>
                <div className="p-2 sm:p-4 flex justify-center bg-[#0E1A2A]">
                  <img
                    src="./assets/aistudio/parameters_6dd0d8cb.png"
                    alt="Efeito do número de processos e TREE configurações medidas em 3D"
                    className="w-full h-auto max-h-[380px] object-contain rounded-lg border border-[#283B47]"
                  />
                </div>
                <div className="px-4 py-2.5 bg-[#F7F5F1] dark:bg-[#283B47] border-t border-[#E3DED7] dark:border-[#364C59] text-xs font-mono text-[#5B7382] dark:text-[#9EB3BF]">
                  {language === 'pt'
                    ? 'Ganho = mediana sequencial / mediana da configuração. Comparação entre Divisão fixa e TREE (blocos 16.384 e 131.072).'
                    : 'Gain = sequential median / configuration median. Comparison between Fixed split and TREE (blocks 16,384 and 131,072).'}
                </div>
              </div>

              {/* Interactive 3D Simulation */}
              <div className="rounded-xl border border-[#E3DED7] dark:border-[#364C59] overflow-hidden">
                <div className="p-3 bg-[#F7F5F1] dark:bg-[#1B2933] border-b border-[#E3DED7] dark:border-[#364C59] flex items-center justify-between text-xs">
                  <span className="font-mono font-medium text-[#223747] dark:text-[#F5F2EC]">
                    {t.projects.interactive3DTitle}
                  </span>
                  <span className="font-mono text-[#D96B27] dark:text-[#F28C38] text-[11px] font-semibold">
                    {t.projects.interactive3DActive}
                  </span>
                </div>
                <div className="p-2 bg-[#F7F5F1] dark:bg-[#1B2933]">
                  <RastriginSurface3D />
                </div>
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#D96B27] dark:text-[#F28C38] mb-2 font-semibold">
              {t.projects.overview}
            </h3>
            <p className="text-xs sm:text-sm text-[#223747]/90 dark:text-[#F5F2EC]/90 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59]">
              <h4 className="text-xs font-mono font-semibold text-[#223747] dark:text-[#F5F2EC] uppercase tracking-wider mb-2">
                {t.projects.challenge}
              </h4>
              <p className="text-xs sm:text-sm text-[#223747]/85 dark:text-[#F5F2EC]/85 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59]">
              <h4 className="text-xs font-mono font-semibold text-[#223747] dark:text-[#F5F2EC] uppercase tracking-wider mb-2">
                {t.projects.solution}
              </h4>
              <p className="text-xs sm:text-sm text-[#223747]/85 dark:text-[#F5F2EC]/85 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#D96B27] dark:text-[#F28C38] mb-3 font-semibold">
              {t.projects.methodology}
            </h3>
            <ul className="space-y-2">
              {project.methodology.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#223747]/90 dark:text-[#F5F2EC]/90">
                  <span className="text-[#D96B27] dark:text-[#F28C38] font-mono text-xs mt-0.5">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Snippet if present */}
          {project.codeSnippet && (
            <div className="rounded-lg overflow-hidden border border-[#E3DED7] dark:border-[#364C59] bg-[#1B2933]">
              <div className="flex items-center justify-between px-4 py-2 bg-[#283B47] border-b border-[#364C59]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F5F2EC]">
                  <Terminal className="w-3.5 h-3.5 text-[#E5A94C]" />
                  <span>{project.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-[#F5F2EC] hover:text-[#FFFFFF] rounded bg-[#364C59] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#E8B665]" /> : <Copy className="w-3.5 h-3.5 text-[#9EB3BF]" />}
                  <span>{copied ? t.projects.codeCopied : t.projects.copyCode}</span>
                </button>
              </div>
              <pre className="p-4 text-xs font-mono text-[#F5F2EC] overflow-x-auto leading-relaxed">
                {project.codeSnippet.code}
              </pre>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#D96B27] dark:text-[#F28C38] mb-2 font-semibold">
              {t.projects.techStack}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-[#223747] dark:text-[#F5F2EC] bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end p-4 border-t border-[#E3DED7] dark:border-[#364C59]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#223747] dark:text-[#F5F2EC] hover:bg-[#F7F5F1] dark:hover:bg-[#1B2933] rounded-lg border border-[#E3DED7] dark:border-[#364C59] transition-colors"
          >
            {t.projects.close}
          </button>
        </div>
      </div>
    </div>
  );
};
