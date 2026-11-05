import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = t.skillCategories;

  const filteredCategories =
    selectedCategory === 'todos'
      ? categories
      : categories.filter((c) => c.id === selectedCategory);

  return (
    <section id="competencias" className="py-14 border-t border-[#DCE4E1] dark:border-[#344A52] scroll-mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#243746] dark:text-[#E7E9E6]">
            {t.skills.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#668B91] dark:text-[#89ABB0] mt-1">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-[#FFFFFF] dark:bg-[#2D3B44] rounded-lg border border-[#DCE4E1] dark:border-[#344A52] shadow-2xs">
          <button
            onClick={() => setSelectedCategory('todos')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'todos'
                ? 'bg-[#243746] text-[#FFFFFF] dark:bg-[#E7E9E6] dark:text-[#202C34] shadow-xs font-semibold'
                : 'text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6]'
            }`}
          >
            {t.skills.filterAll}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#243746] text-[#FFFFFF] dark:bg-[#E7E9E6] dark:text-[#202C34] shadow-xs font-semibold'
                  : 'text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6]'
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
            className="rounded-xl bg-[#FFFFFF] dark:bg-[#2D3B44] border border-[#DCE4E1] dark:border-[#344A52] p-5 shadow-xs"
          >
            <div className="pb-3 border-b border-[#DCE4E1]/80 dark:border-[#344A52]">
              <h3 className="text-sm font-bold text-[#243746] dark:text-[#E7E9E6]">
                {category.title}
              </h3>
              <p className="text-xs text-[#668B91] dark:text-[#89ABB0] mt-0.5">
                {category.description}
              </p>
            </div>

            <div className="divide-y divide-[#DCE4E1]/60 dark:divide-[#344A52]/60 mt-2">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="py-3 first:pt-2 last:pb-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-semibold text-[#243746] dark:text-[#E7E9E6]">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0]">
                        {skill.level}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#243746]/80 dark:text-[#E7E9E6]/80 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    {skill.tools.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-[#668B91] dark:text-[#89ABB0] bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52] px-1.5 py-0.5 rounded"
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
