import React, { useEffect, useState } from 'react';
import { X, Check, Copy, Terminal, CheckCircle2, FlaskConical, FileCheck } from 'lucide-react';
import { Project } from '../types';
import { RastriginSurface3D } from './RastriginSurface3D';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#0d1219] text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>{project.categoryLabel}</span>
              <span>·</span>
              {project.provenance === 'cv_confirmado' ? (
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Realização comprovada</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>Estudo técnico</span>
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg transition-colors shrink-0"
            title="Fechar (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Specifications */}
          {project.specs && project.specs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-lg bg-slate-50 dark:bg-[#070b10] border border-slate-200 dark:border-slate-800">
              {project.specs.map((spec, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">{spec.label}</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono mt-0.5">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Preserved Interactive 3D Simulation for Rastrigin */}
          {project.id === 'rastrigin-optimization' && (
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-mono font-medium text-slate-700 dark:text-slate-300">
                  Simulação Interativa 3D (Arraste para rotacionar)
                </span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 text-[11px]">
                  Controles ativos
                </span>
              </div>
              <div className="p-2 bg-[#090e15]">
                <RastriginSurface3D />
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Visão Geral
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-[#070b10] border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Contexto & Desafio
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-[#070b10] border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Solução Implementada
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Metodologia & Etapas
            </h3>
            <ul className="space-y-2">
              {project.methodology.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-slate-400 dark:text-slate-500 font-mono text-xs mt-0.5">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Snippet if present */}
          {project.codeSnippet && (
            <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#070b10]">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-slate-400" />
                  <span>{project.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                {project.codeSnippet.code}
              </pre>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Tecnologias & Metodologias
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end p-4 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
