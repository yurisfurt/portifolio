import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const filteredCategories =
    selectedCategory === 'todos'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="competencias" className="py-14 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Competências
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Tecnologias e metodologias agrupadas por aplicação prática.
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setSelectedCategory('todos')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'todos'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            Todas
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-xl bg-white dark:bg-[#0d1219] border border-slate-200 dark:border-slate-800/80 p-5 shadow-xs"
          >
            <div className="pb-3 border-b border-slate-100 dark:border-slate-800/80">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {category.description}
              </p>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800/60 mt-2">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="py-3 first:pt-2 last:pb-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-medium text-slate-900 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    {skill.tools.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 px-1.5 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
