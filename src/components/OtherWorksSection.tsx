import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OtherWorkItem } from '../types';
import {
  Code2,
  Terminal,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
  X,
  Layers
} from 'lucide-react';

export const OtherWorksSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [inspectItem, setInspectItem] = useState<{
    item: OtherWorkItem;
    activeImage: string;
    caption: string;
  } | null>(null);

  const items = t.otherWorksList || t.snippetList || [];
  const featuredItems = items.filter((item) => item.isTradeHighlight);
  const smallScripts = items.filter((item) => !item.isTradeHighlight);

  const handleCopy = (code?: string, id?: string) => {
    if (!code || !id) return;
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderCard = (item: OtherWorkItem) => {
    const isExpanded = expandedId === item.id;
    const isCopied = copiedId === item.id;
    const isTrade = Boolean(item.isTradeHighlight);
    const hasCode = Boolean(item.codeSnippet);

    return (
      <div
        key={item.id}
        className={`rounded-xl transition-all border ${
          isTrade
            ? 'bg-[#FFFFFF] dark:bg-[#283B47] border-[#D96B27]/55 dark:border-[#F28C38]/55 shadow-sm'
            : 'bg-[#F7F5F1]/70 dark:bg-[#22323D]/70 border-[#E3DED7] dark:border-[#364C59]/80 hover:border-[#D96B27]/35 dark:hover:border-[#F28C38]/35'
        }`}
      >
        {/* Row Summary */}
        <div
          className={`flex flex-col md:flex-row md:items-center justify-between ${
            isTrade ? 'p-4 sm:p-5 gap-4' : 'p-3 sm:p-3.5 gap-3'
          }`}
        >
          {/* Left: Thumbnail & Info */}
          <div className={`flex items-start min-w-0 flex-1 ${isTrade ? 'gap-4' : 'gap-3'}`}>
            {/* Clickable Thumbnail */}
            {item.imageSrc ? (
              <button
                type="button"
                onClick={() =>
                  setInspectItem({
                    item,
                    activeImage: item.imageSrc!,
                    caption: item.imageCaption || item.title
                  })
                }
                className={`group/thumb relative shrink-0 rounded-lg overflow-hidden border border-[#E3DED7] dark:border-[#364C59] bg-[#F7F5F1] dark:bg-[#1B2933] cursor-pointer ${
                  isTrade ? 'w-24 h-18 sm:w-28 sm:h-20' : 'w-16 h-12 sm:w-18 sm:h-14'
                }`}
                title={language === 'pt' ? 'Clique para ampliar captura' : 'Click to enlarge screenshot'}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/thumb:scale-110"
                  loading="lazy"
                />
                {item.gallery && item.gallery.length > 1 && (
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-[#1B2933]/85 text-[9px] font-mono font-bold text-white border border-white/15">
                    {item.gallery.length} {language === 'pt' ? 'telas' : 'views'}
                  </span>
                )}
                <div className="absolute inset-0 bg-[#223747]/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="w-3.5 h-3.5 text-white drop-shadow" />
                </div>
              </button>
            ) : (
              <div
                className={`shrink-0 rounded-lg border border-[#E3DED7] dark:border-[#364C59] bg-[#F7F5F1] dark:bg-[#1B2933] flex items-center justify-center text-[#5B7382] dark:text-[#9EB3BF] ${
                  isTrade ? 'w-24 h-18 sm:w-28 sm:h-20' : 'w-16 h-12 sm:w-18 sm:h-14'
                }`}
              >
                <Code2 className="w-4 h-4 opacity-60" />
              </div>
            )}

            {/* Text Details */}
            <div className="min-w-0 flex-1 space-y-1">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#5B7382] dark:text-[#9EB3BF]">
                  {item.categoryBadge}
                </span>

                {isTrade && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#D96B27]/12 dark:bg-[#F28C38]/20 text-[#D96B27] dark:text-[#F28C38] border border-[#D96B27]/35 dark:border-[#F28C38]/40">
                    <Sparkles className="w-3 h-3 text-[#D96B27] dark:text-[#F28C38]" />
                    <span>{item.statusLabel || t.otherWorks.statusReady}</span>
                  </span>
                )}
              </div>

              {/* Title */}
              <h5
                className={`text-[#223747] dark:text-[#F5F2EC] tracking-tight truncate ${
                  isTrade ? 'text-sm sm:text-base font-bold' : 'text-[13px] sm:text-sm font-semibold'
                }`}
              >
                {item.title}
              </h5>

              {/* Short Description */}
              <p
                className={`text-xs text-[#223747]/80 dark:text-[#F5F2EC]/80 leading-relaxed ${
                  isTrade ? 'line-clamp-2' : 'line-clamp-1 text-[#5B7382] dark:text-[#9EB3BF]'
                }`}
              >
                {item.description}
              </p>

              {/* Tags line */}
              <div className="pt-0.5 flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-[#5B7382] dark:text-[#9EB3BF]">
                {item.tags.map((tag: string, idx: number) => (
                  <span key={idx}>
                    {tag}
                    {idx < item.tags.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:self-center shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#E3DED7] dark:border-[#364C59]">
            <button
              type="button"
              onClick={() =>
                setInspectItem({
                  item,
                  activeImage: item.imageSrc || '',
                  caption: item.imageCaption || item.title
                })
              }
              className={`rounded-lg font-semibold font-mono transition-colors border ${
                isTrade
                  ? 'px-3.5 py-1.5 text-xs text-white dark:text-[#1B2933] bg-[#D96B27] dark:bg-[#F28C38] hover:bg-[#C25A1A] dark:hover:bg-[#FF9D4D] border-[#D96B27] dark:border-[#F28C38]'
                  : 'px-2.5 py-1 text-[11px] text-[#223747] dark:text-[#F5F2EC] bg-[#FFFFFF] dark:bg-[#1B2933] hover:bg-[#D96B27] hover:text-white dark:hover:bg-[#F28C38] dark:hover:text-[#1B2933] border-[#E3DED7] dark:border-[#364C59]'
              }`}
            >
              <span>{hasCode ? t.otherWorks.viewDetails : t.projects.viewProject}</span>
            </button>

            <button
              type="button"
              onClick={() => toggleExpand(item.id)}
              className={`rounded-lg text-[#5B7382] dark:text-[#9EB3BF] hover:text-[#223747] dark:hover:text-[#F5F2EC] border border-[#E3DED7] dark:border-[#364C59] transition-colors ${
                isTrade ? 'p-1.5 bg-[#F7F5F1] dark:bg-[#1B2933]' : 'p-1 bg-[#FFFFFF] dark:bg-[#1B2933]'
              }`}
              title={isExpanded ? t.otherWorks.hideDetails : t.otherWorks.viewCode}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* In-Place Expanded Code & Highlights */}
        {isExpanded && (
          <div className="p-4 sm:p-5 pt-0 border-t border-[#E3DED7] dark:border-[#364C59] bg-[#F7F5F1]/50 dark:bg-[#1B2933]/40 space-y-4">
            {item.metrics && item.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4">
                {item.metrics.map((m: { label: string; value: string }, idx: number) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59]"
                  >
                    <span className="block text-[10px] font-mono text-[#5B7382] dark:text-[#9EB3BF]">
                      {m.label}
                    </span>
                    <span className="block text-xs font-mono font-bold text-[#223747] dark:text-[#F5F2EC] mt-0.5">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Gallery Strip when multiple screens exist */}
            {item.gallery && item.gallery.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#5B7382] dark:text-[#9EB3BF]">
                    {language === 'pt' ? 'Telas da Aplicação' : 'Application Screens'}
                  </span>
                  <span className="text-[10px] font-mono text-[#5B7382] dark:text-[#9EB3BF]">
                    {language === 'pt' ? 'Clique para ampliar' : 'Click to enlarge'}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {item.gallery.map((screen, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        setInspectItem({
                          item,
                          activeImage: screen.src,
                          caption: screen.caption
                        })
                      }
                      className="group/scr text-left rounded-lg overflow-hidden border border-[#E3DED7] dark:border-[#364C59] bg-[#FFFFFF] dark:bg-[#283B47] hover:border-[#D96B27] dark:hover:border-[#F28C38] transition-colors"
                    >
                      <div className="aspect-video overflow-hidden bg-[#1B2933]">
                        <img
                          src={screen.src}
                          alt={screen.label}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/scr:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <span className="block px-2 py-1 text-[10px] font-mono font-semibold text-[#223747] dark:text-[#F5F2EC] truncate">
                        {screen.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Compact Strategy Evolution Summary */}
            {item.strategySummary && (
              <div className="rounded-lg p-3.5 bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] space-y-2.5">
                <div>
                  <h6 className="text-xs font-bold text-[#223747] dark:text-[#F5F2EC]">
                    {item.strategySummary.title}
                  </h6>
                  {item.strategySummary.subtitle && (
                    <p className="text-[11px] text-[#5B7382] dark:text-[#9EB3BF] mt-0.5">
                      {item.strategySummary.subtitle}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                  {item.strategySummary.groups.map((grp, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59]/80 space-y-1"
                    >
                      <span className="inline-block text-[10px] font-mono font-bold text-[#D96B27] dark:text-[#F28C38]">
                        {grp.range}
                      </span>
                      <p className="text-[11px] font-bold text-[#223747] dark:text-[#F5F2EC] leading-tight">
                        {grp.name}
                      </p>
                      <p className="text-[10px] text-[#5B7382] dark:text-[#9EB3BF] leading-relaxed">
                        {grp.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.codeSnippet && (
              <div className="rounded-lg overflow-hidden border border-[#E3DED7] dark:border-[#364C59] bg-[#1B2933] text-[#F5F2EC]">
                <div className="flex items-center justify-between px-3 py-1.5 bg-[#283B47] border-b border-[#364C59]">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#F5F2EC] truncate">
                    <Terminal className="w-3.5 h-3.5 text-[#D96B27] dark:text-[#F28C38] shrink-0" />
                    <span className="truncate">{item.codeSnippet.filename}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.codeSnippet?.code, item.id)}
                    className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono text-[#F5F2EC] hover:text-white rounded bg-[#364C59] hover:bg-[#435c6b] transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-[#F28C38]" />
                        <span>{t.otherWorks.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#9EB3BF]" />
                        <span>{t.otherWorks.copyCode}</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-3 text-[11px] font-mono leading-relaxed overflow-x-auto max-h-48 text-[#F5F2EC]">
                  <code>{item.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {!item.gallery?.length && (
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {item.imageSrc && (
                  <button
                    type="button"
                    onClick={() =>
                      setInspectItem({
                        item,
                        activeImage: item.imageSrc!,
                        caption: item.imageCaption || item.title
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D96B27] dark:text-[#F28C38] hover:underline"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>
                      {language === 'pt' ? 'Ver captura:' : 'View screenshot:'}{' '}
                      {item.imageCaption || (language === 'pt' ? 'Principal' : 'Primary')}
                    </span>
                  </button>
                )}
                {item.secondaryImageSrc && (
                  <button
                    type="button"
                    onClick={() =>
                      setInspectItem({
                        item,
                        activeImage: item.secondaryImageSrc!,
                        caption: item.secondaryImageCaption || (language === 'pt' ? 'Secundária' : 'Secondary')
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D96B27] dark:text-[#F28C38] hover:underline"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>
                      {language === 'pt' ? 'Ver captura:' : 'View screenshot:'}{' '}
                      {item.secondaryImageCaption || (language === 'pt' ? 'Complementar' : 'Secondary')}
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="pt-12 border-t border-[#E3DED7] dark:border-[#364C59]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D96B27] dark:bg-[#F28C38]" />
            <h4 className="text-lg font-bold tracking-tight text-[#223747] dark:text-[#F5F2EC]">
              {t.otherWorks.sectionTitle}
            </h4>
          </div>
          <p className="text-xs text-[#5B7382] dark:text-[#9EB3BF] mt-1 max-w-2xl leading-relaxed">
            {t.otherWorks.sectionSubtitle}
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF]">
          {items.length}{' '}
          {language === 'pt'
            ? items.length === 1
              ? 'utilitário'
              : 'registros'
            : items.length === 1
            ? 'utility'
            : 'items'}
        </span>
      </div>

      {/* Featured Utility Highlight (App Trade Controller) */}
      {featuredItems.length > 0 && (
        <div className="space-y-3 mb-5">{featuredItems.map(renderCard)}</div>
      )}

      {/* Compact List for Small Scripts & Utilities */}
      {smallScripts.length > 0 && (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 px-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#5B7382] dark:text-[#9EB3BF]">
              {language === 'pt' ? 'Scripts & Utilitários Menores' : 'Smaller Scripts & Utilities'}
            </span>
            <span className="h-px flex-1 bg-[#E3DED7] dark:bg-[#364C59]/70" />
          </div>
          {smallScripts.map(renderCard)}
        </div>
      )}

      {/* Lightbox / Modal for Full Screenshot & Code Inspection */}
      {inspectItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1B2933]/80 backdrop-blur-xs"
          onClick={() => setInspectItem(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFFFFF] dark:bg-[#283B47] rounded-2xl border border-[#E3DED7] dark:border-[#364C59] shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E3DED7] dark:border-[#364C59] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-semibold uppercase text-[#5B7382] dark:text-[#9EB3BF]">
                  {inspectItem.item.categoryBadge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#223747] dark:text-[#F5F2EC]">
                  {inspectItem.item.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectItem(null)}
                className="p-1.5 text-[#5B7382] hover:text-[#223747] dark:text-[#9EB3BF] dark:hover:text-[#F5F2EC] rounded-lg border border-[#E3DED7] dark:border-[#364C59] transition-colors"
                title={t.otherWorks.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              {inspectItem.item.gallery && inspectItem.item.gallery.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2 pb-1">
                  {inspectItem.item.gallery.map((screen, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        setInspectItem({
                          ...inspectItem,
                          activeImage: screen.src,
                          caption: screen.caption
                        })
                      }
                      className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-colors ${
                        inspectItem.activeImage === screen.src
                          ? 'bg-[#D96B27] text-white dark:bg-[#F28C38] dark:text-[#1B2933]'
                          : 'bg-[#F7F5F1] dark:bg-[#1B2933] text-[#5B7382] dark:text-[#9EB3BF] hover:text-[#223747] dark:hover:text-[#F5F2EC]'
                      }`}
                    >
                      {screen.label}
                    </button>
                  ))}
                </div>
              ) : (
                inspectItem.item.secondaryImageSrc && (
                  <div className="flex items-center gap-2 pb-2">
                    <button
                      type="button"
                      onClick={() =>
                        setInspectItem({
                          ...inspectItem,
                          activeImage: inspectItem.item.imageSrc!,
                          caption: inspectItem.item.imageCaption || (language === 'pt' ? 'Principal' : 'Primary')
                        })
                      }
                      className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors ${
                        inspectItem.activeImage === inspectItem.item.imageSrc
                          ? 'bg-[#D96B27] text-white dark:bg-[#F28C38] dark:text-[#1B2933]'
                          : 'bg-[#F7F5F1] dark:bg-[#1B2933] text-[#5B7382] dark:text-[#9EB3BF]'
                      }`}
                    >
                      {language === 'pt' ? '1. Principal' : '1. Primary'}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setInspectItem({
                          ...inspectItem,
                          activeImage: inspectItem.item.secondaryImageSrc!,
                          caption:
                            inspectItem.item.secondaryImageCaption ||
                            (language === 'pt' ? 'Complementar' : 'Secondary')
                        })
                      }
                      className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors ${
                        inspectItem.activeImage === inspectItem.item.secondaryImageSrc
                          ? 'bg-[#D96B27] text-white dark:bg-[#F28C38] dark:text-[#1B2933]'
                          : 'bg-[#F7F5F1] dark:bg-[#1B2933] text-[#5B7382] dark:text-[#9EB3BF]'
                      }`}
                    >
                      {language === 'pt' ? '2. Complementar' : '2. Secondary'}
                    </button>
                  </div>
                )
              )}

              {inspectItem.activeImage && (
                <div className="rounded-xl overflow-hidden border border-[#E3DED7] dark:border-[#364C59] bg-[#1B2933] flex justify-center p-2 sm:p-3">
                  <img
                    src={inspectItem.activeImage}
                    alt={inspectItem.caption}
                    className="max-h-[58vh] w-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
              )}

              <div className="p-3 rounded-lg bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] flex items-center justify-between gap-3 text-xs font-mono">
                <span className="text-[#223747] dark:text-[#F5F2EC] font-semibold">
                  {inspectItem.caption}
                </span>
                <span className="text-[#5B7382] dark:text-[#9EB3BF] shrink-0">
                  {language === 'pt' ? 'Registro autoral' : 'Project record'}
                </span>
              </div>

              {inspectItem.item.metrics && inspectItem.item.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {inspectItem.item.metrics.map((m: { label: string; value: string }, idx: number) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59]"
                    >
                      <span className="block text-[10px] font-mono text-[#5B7382] dark:text-[#9EB3BF]">
                        {m.label}
                      </span>
                      <span className="block text-xs font-mono font-bold text-[#223747] dark:text-[#F5F2EC] mt-0.5">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {inspectItem.item.strategySummary && (
                <div className="rounded-xl p-4 bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-[#223747] dark:text-[#F5F2EC]">
                      {inspectItem.item.strategySummary.title}
                    </h4>
                    {inspectItem.item.strategySummary.subtitle && (
                      <p className="text-[11px] text-[#5B7382] dark:text-[#9EB3BF] mt-0.5">
                        {inspectItem.item.strategySummary.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {inspectItem.item.strategySummary.groups.map((grp, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] space-y-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-[#223747] dark:text-[#F5F2EC]">
                            {grp.name}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-[#D96B27] dark:text-[#F28C38]">
                            {grp.range}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5B7382] dark:text-[#9EB3BF] leading-relaxed">
                          {grp.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {inspectItem.item.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-[#E3DED7] dark:border-[#364C59] bg-[#1B2933] text-[#F5F2EC]">
                  <div className="flex items-center justify-between px-4 py-2 bg-[#283B47] border-b border-[#364C59]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#F5F2EC]">
                      <Terminal className="w-3.5 h-3.5 text-[#D96B27] dark:text-[#F28C38]" />
                      <span>{inspectItem.item.codeSnippet.filename}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(inspectItem.item.codeSnippet?.code, inspectItem.item.id)
                      }
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-semibold rounded bg-[#364C59] hover:bg-[#435c6b] text-[#F5F2EC] hover:text-white transition-colors"
                    >
                      {copiedId === inspectItem.item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#F28C38]" />
                          <span>{t.otherWorks.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#9EB3BF]" />
                          <span>{t.otherWorks.copyCode}</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-[#F5F2EC] overflow-x-auto leading-relaxed max-h-60">
                    <code>{inspectItem.item.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#E3DED7] dark:border-[#364C59] flex items-center justify-end">
              <button
                type="button"
                onClick={() => setInspectItem(null)}
                className="px-4 py-2 text-xs font-bold rounded-lg bg-[#F7F5F1] dark:bg-[#1B2933] text-[#223747] dark:text-[#F5F2EC] border border-[#E3DED7] dark:border-[#364C59] hover:bg-[#E3DED7] dark:hover:bg-[#364C59] transition-colors"
              >
                {t.otherWorks.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
