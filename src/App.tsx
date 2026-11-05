import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProjectCatalog } from './components/ProjectCatalog';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { SectionId, Project } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Menu, ArrowRight } from 'lucide-react';

function PortfolioContent() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<SectionId>('inicio');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
    }
    // Default: light mode as requested
    return false;
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Theme synchronization and persistence
  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#202C34] text-[#E7E9E6] antialiased selection:bg-[#89ABB0]/20 selection:text-[#E7E9E6]';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#F5F3EF] text-[#243746] antialiased selection:bg-[#668B91]/20 selection:text-[#243746]';
    }
  }, [isDark]);

  // Scroll spy for active section
  useEffect(() => {
    const sectionIds: SectionId[] = ['inicio', 'projetos', 'competencias', 'sobre-mim', 'contato'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F5F3EF] dark:bg-[#202C34] text-[#243746] dark:text-[#E7E9E6] transition-colors">
      {/* Structural Sidebar Integrated into Left Edge */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      {/* Main Content Area */}
      <main
        className={`flex-1 transition-all duration-300 ease-in-out min-w-0
          ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}
          px-6 sm:px-12 lg:px-16 py-8 sm:py-12
        `}
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Mobile-Only Header Bar */}
          <div className="md:hidden flex items-center justify-between pb-5 mb-6 border-b border-[#DCE4E1] dark:border-[#344A52]">
            <span className="text-sm font-bold tracking-tight text-[#243746] dark:text-[#E7E9E6]">
              {PERSONAL_INFO.shortName}
            </span>
            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-1.5 text-[#243746] dark:text-[#E7E9E6] rounded-md border border-[#DCE4E1] dark:border-[#344A52] bg-[#FFFFFF] dark:bg-[#2D3B44]"
              title="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* SECTION 1: INÍCIO (Editorial Minimal Hero) */}
          <section id="inicio" className="pt-6 sm:pt-14 pb-16 scroll-mt-20">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#243746] dark:text-[#E7E9E6] tracking-tight leading-[1.12]">
                {t.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#668B91] dark:text-[#89ABB0] leading-relaxed">
                {t.hero.subheadline}
              </p>

              {/* Single Primary Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleNavigate('projetos')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#243746] hover:bg-[#1a2833] dark:bg-[#E7E9E6] dark:hover:bg-[#FFFFFF] text-white dark:text-[#202C34] text-xs font-bold rounded-lg transition-colors shadow-xs"
                >
                  <span>{t.hero.ctaProjects}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 2: PROJETOS (Portfolio Cards Grid) */}
          <section id="projetos" className="py-12 border-t border-[#DCE4E1] dark:border-[#344A52] scroll-mt-6">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#243746] dark:text-[#E7E9E6]">
                {t.projects.sectionTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#668B91] dark:text-[#89ABB0] mt-1">
                {t.projects.sectionSubtitle}
              </p>
            </div>

            <ProjectCatalog onSelectProject={(project) => setSelectedProject(project)} />
          </section>

          {/* SECTION 3: COMPETÊNCIAS */}
          <SkillsSection />

          {/* SECTION 4: SOBRE MIM (With Integrated Background, No Timeline) */}
          <AboutSection />

          {/* SECTION 5: CONTATO */}
          <ContactSection />

          {/* Clean Editorial Footer */}
          <footer className="py-10 mt-14 border-t border-[#DCE4E1] dark:border-[#344A52] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#668B91] dark:text-[#89ABB0]">
            <div>
              {PERSONAL_INFO.shortName} · {t.footer.role}
            </div>
            <div>
              <a href="#inicio" className="hover:text-[#243746] dark:hover:text-[#E7E9E6] transition-colors">
                {t.footer.backToTop}
              </a>
            </div>
          </footer>
        </div>
      </main>

      {/* Case Study Modal with Embedded Rastrigin 3D */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
