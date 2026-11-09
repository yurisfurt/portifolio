import React from 'react';
import { Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TopControlsProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const TopControls: React.FC<TopControlsProps> = ({ isDark, onToggleTheme }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      aria-label="Controles de Idioma e Tema"
      className="fixed top-3.5 right-4 sm:top-5 sm:right-6 z-50 inline-flex items-center gap-1 p-1 bg-[#FFFFFF]/95 dark:bg-[#283B47]/95 backdrop-blur-md rounded-lg border border-[#E3DED7] dark:border-[#364C59] shadow-xs text-xs font-mono transition-all"
    >
      {/* Language Segmented Control (PT / EN) */}
      <div className="flex items-center gap-0.5">
        <button
          type="button"
          onClick={() => setLanguage('pt')}
          className={`px-2 py-1 rounded text-[11px] font-bold transition-colors ${
            language === 'pt'
              ? 'bg-[#E67E67] text-white dark:bg-[#F08F79] dark:text-[#1B2933] shadow-2xs'
              : 'text-[#5B7382] hover:text-[#223747] dark:text-[#9EB3BF] dark:hover:text-[#F5F2EC]'
          }`}
          title="Português (Brasil)"
        >
          PT
        </button>

        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 rounded text-[11px] font-bold transition-colors ${
            language === 'en'
              ? 'bg-[#E67E67] text-white dark:bg-[#F08F79] dark:text-[#1B2933] shadow-2xs'
              : 'text-[#5B7382] hover:text-[#223747] dark:text-[#9EB3BF] dark:hover:text-[#F5F2EC]'
          }`}
          title="English"
        >
          EN
        </button>
      </div>

      {/* Hairline Divider */}
      <div className="w-px h-4 bg-[#E3DED7] dark:bg-[#364C59] mx-1" aria-hidden="true" />

      {/* Light / Dark Theme Button */}
      <button
        type="button"
        onClick={onToggleTheme}
        className="p-1.5 rounded text-[#5B7382] hover:text-[#223747] dark:text-[#9EB3BF] dark:hover:text-[#F5F2EC] transition-colors"
        title={isDark ? t.nav.themeLight : t.nav.themeDark}
        aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
      >
        {isDark ? (
          <Sun className="w-3.5 h-3.5 text-[#E8B665]" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-[#223747]" />
        )}
      </button>
    </div>
  );
};
