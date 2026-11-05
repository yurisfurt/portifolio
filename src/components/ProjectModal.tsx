import React, { useEffect, useState } from 'react';
import { X, Check, Copy, Terminal, FlaskConical, FileCheck } from 'lucide-react';
import { Project } from '../types';
import { RastriginSurface3D } from './RastriginSurface3D';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#243746]/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-3xl my-8 bg-[#FFFFFF] dark:bg-[#2D3B44] text-[#243746] dark:text-[#E7E9E6] rounded-xl border border-[#DCE4E1] dark:border-[#344A52] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#DCE4E1] dark:border-[#344A52]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#668B91] dark:text-[#89ABB0] font-mono">
              <span>{project.categoryLabel}</span>
              <span>·</span>
              {project.provenance === 'cv_confirmado' ? (
                <span className="flex items-center gap-1 text-[#243746] dark:text-[#E7E9E6] font-semibold">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>{t.projects.confirmedDeliverable}</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[#668B91] dark:text-[#89ABB0]">
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>{t.projects.technicalStudy}</span>
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#243746] dark:text-[#E7E9E6] mt-1.5 tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#668B91] dark:text-[#89ABB0] mt-1 font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6] rounded-lg transition-colors shrink-0"
            title={`${t.projects.close} (ESC)`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Specifications */}
          {project.specs && project.specs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-lg bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52]">
              {project.specs.map((spec, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[11px] text-[#668B91] dark:text-[#89ABB0] font-mono">{spec.label}</span>
                  <span className="text-xs font-semibold text-[#243746] dark:text-[#E7E9E6] font-mono mt-0.5">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Interactive 3D Simulation for Rastrigin */}
          {project.id === 'rastrigin-optimization' && (
            <div className="rounded-xl border border-[#DCE4E1] dark:border-[#344A52] overflow-hidden">
              <div className="p-3 bg-[#F5F3EF] dark:bg-[#202C34] border-b border-[#DCE4E1] dark:border-[#344A52] flex items-center justify-between text-xs">
                <span className="font-mono font-medium text-[#243746] dark:text-[#E7E9E6]">
                  {t.projects.interactive3DTitle}
                </span>
                <span className="font-mono text-[#668B91] dark:text-[#89ABB0] text-[11px] font-semibold">
                  {t.projects.interactive3DActive}
                </span>
              </div>
              <div className="p-2 bg-[#F5F3EF] dark:bg-[#202C34]">
                <RastriginSurface3D />
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#668B91] dark:text-[#89ABB0] mb-2 font-semibold">
              {t.projects.overview}
            </h3>
            <p className="text-xs sm:text-sm text-[#243746]/90 dark:text-[#E7E9E6]/90 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52]">
              <h4 className="text-xs font-mono font-semibold text-[#243746] dark:text-[#E7E9E6] uppercase tracking-wider mb-2">
                {t.projects.challenge}
              </h4>
              <p className="text-xs sm:text-sm text-[#243746]/85 dark:text-[#E7E9E6]/85 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52]">
              <h4 className="text-xs font-mono font-semibold text-[#243746] dark:text-[#E7E9E6] uppercase tracking-wider mb-2">
                {t.projects.solution}
              </h4>
              <p className="text-xs sm:text-sm text-[#243746]/85 dark:text-[#E7E9E6]/85 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#668B91] dark:text-[#89ABB0] mb-3 font-semibold">
              {t.projects.methodology}
            </h3>
            <ul className="space-y-2">
              {project.methodology.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#243746]/90 dark:text-[#E7E9E6]/90">
                  <span className="text-[#668B91] dark:text-[#89ABB0] font-mono text-xs mt-0.5">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Snippet if present */}
          {project.codeSnippet && (
            <div className="rounded-lg overflow-hidden border border-[#DCE4E1] dark:border-[#344A52] bg-[#202C34]">
              <div className="flex items-center justify-between px-4 py-2 bg-[#2D3B44] border-b border-[#344A52]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#E7E9E6]">
                  <Terminal className="w-3.5 h-3.5 text-[#89ABB0]" />
                  <span>{project.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-[#E7E9E6] hover:text-[#FFFFFF] rounded bg-[#344A52] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#89ABB0]" /> : <Copy className="w-3.5 h-3.5 text-[#89ABB0]" />}
                  <span>{copied ? t.projects.codeCopied : t.projects.copyCode}</span>
                </button>
              </div>
              <pre className="p-4 text-xs font-mono text-[#E7E9E6] overflow-x-auto leading-relaxed">
                {project.codeSnippet.code}
              </pre>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#668B91] dark:text-[#89ABB0] mb-2 font-semibold">
              {t.projects.techStack}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-[#243746] dark:text-[#E7E9E6] bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52] px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end p-4 border-t border-[#DCE4E1] dark:border-[#344A52]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#243746] dark:text-[#E7E9E6] hover:bg-[#F5F3EF] dark:hover:bg-[#202C34] rounded-lg border border-[#DCE4E1] dark:border-[#344A52] transition-colors"
          >
            {t.projects.close}
          </button>
        </div>
      </div>
    </div>
  );
};
