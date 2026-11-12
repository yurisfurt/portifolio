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
  Layers,
  ArrowRight
} from 'lucide-react';

export const OtherWorksSection: React.FC = () => {
  const { t } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [inspectItem, setInspectItem] = useState<{
    item: OtherWorkItem;
    activeImage: string;
    caption: string;
  } | null>(null);

  const items = t.otherWorksList || t.snippetList || [];

  const handleCopy = (code?: string, id?: string) => {
    if (!code || !id) return;
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
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
          {items.length} {items.length === 1 ? 'utilitário' : 'registros'}
        </span>
      </div>

      {/* Compact List Layout */}
      <div className="space-y-3">
        {items.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const isCopied = copiedId === item.id;
          const isTrade = item.isTradeHighlight;

          return (
            <div
              key={item.id}
              className={`rounded-xl transition-all border ${
                isTrade
                  ? 'bg-[#FFFFFF] dark:bg-[#283B47] border-[#E5A94C]/60 dark:border-[#E8B665]/60 shadow-xs'
                  : 'bg-[#FFFFFF] dark:bg-[#283B47] border-[#E3DED7] dark:border-[#364C59] hover:border-[#D96B27]/40 dark:hover:border-[#F28C38]/40'
              }`}
            >
              {/* Row Summary */}
              <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                {/* Left: Thumbnail & Info */}
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  {/* Clickable Compact Thumbnail */}
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
                      className="group/thumb relative shrink-0 w-20 h-16 sm:w-24 sm:h-18 rounded-lg overflow-hidden border border-[#E3DED7] dark:border-[#364C59] bg-[#F7F5F1] dark:bg-[#1B2933] cursor-pointer"
                      title="Clique para ampliar captura real"
                    >
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/thumb:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#223747]/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                        <ExternalLink className="w-3.5 h-3.5 text-white drop-shadow" />
                      </div>
                    </button>
                  ) : (
                    <div className="shrink-0 w-20 h-16 sm:w-24 sm:h-18 rounded-lg border border-[#E3DED7] dark:border-[#364C59] bg-[#F7F5F1] dark:bg-[#1B2933] flex items-center justify-center text-[#5B7382] dark:text-[#9EB3BF]">
                      <Code2 className="w-5 h-5 opacity-60" />
                    </div>
                  )}

                  {/* Text Details */}
                  <div className="min-w-0 flex-1 space-y-1">
                    {/* Badges row */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#5B7382] dark:text-[#9EB3BF]">
                        {item.categoryBadge}
                      </span>

                      {/* Trade Highlight Badge in Amber */}
                      {isTrade && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#E5A94C]/15 dark:bg-[#E8B665]/20 text-[#B87A1E] dark:text-[#E8B665] border border-[#E5A94C]/40 dark:border-[#E8B665]/40">
                          <Sparkles className="w-3 h-3 text-[#E5A94C] dark:text-[#E8B665]" />
                          <span>{item.statusLabel || t.otherWorks.statusReady}</span>
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h5 className="text-sm sm:text-base font-bold text-[#223747] dark:text-[#F5F2EC] tracking-tight truncate">
                      {item.title}
                    </h5>

                    {/* Short Practical Description */}
                    <p className="text-xs text-[#223747]/80 dark:text-[#F5F2EC]/80 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags line */}
                    <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-[#5B7382] dark:text-[#9EB3BF]">
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
                  {/* View image & code modal */}
                  <button
                    type="button"
                    onClick={() =>
                      setInspectItem({
                        item,
                        activeImage: item.imageSrc || '',
                        caption: item.imageCaption || item.title
                      })
                    }
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold font-mono text-[#223747] dark:text-[#F5F2EC] bg-[#F7F5F1] dark:bg-[#1B2933] hover:bg-[#D96B27] hover:text-white dark:hover:bg-[#F28C38] dark:hover:text-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] transition-colors"
                  >
                    <span>{t.otherWorks.viewDetails}</span>
                  </button>

                  {/* Expand / Collapse In-Place */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className="p-1.5 rounded-lg text-[#5B7382] dark:text-[#9EB3BF] hover:text-[#223747] dark:hover:text-[#F5F2EC] bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] transition-colors"
                    title={isExpanded ? t.otherWorks.hideDetails : t.otherWorks.viewCode}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* In-Place Expanded Code & Highlights */}
              {isExpanded && (
                <div className="p-4 sm:p-5 pt-0 border-t border-[#E3DED7] dark:border-[#364C59] bg-[#F7F5F1]/50 dark:bg-[#1B2933]/40 space-y-4">
                  {/* Metrics Ribbon if present */}
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

                  {/* Source Code Box */}
                  {item.codeSnippet && (
                    <div className="rounded-lg overflow-hidden border border-[#E3DED7] dark:border-[#364C59] bg-[#1B2933] text-[#F5F2EC]">
                      <div className="flex items-center justify-between px-3 py-1.5 bg-[#283B47] border-b border-[#364C59]">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#F5F2EC] truncate">
                          <Terminal className="w-3.5 h-3.5 text-[#E5A94C] shrink-0" />
                          <span className="truncate">{item.codeSnippet.filename}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(item.codeSnippet?.code, item.id)}
                          className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono text-[#F5F2EC] hover:text-white rounded bg-[#364C59] hover:bg-[#435c6b] transition-colors"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3 text-[#E8B665]" />
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

                  {/* Thumbnails row to view attached screens */}
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
                        <span>Ver captura: {item.imageCaption || 'Principal'}</span>
                      </button>
                    )}
                    {item.secondaryImageSrc && (
                      <button
                        type="button"
                        onClick={() =>
                          setInspectItem({
                            item,
                            activeImage: item.secondaryImageSrc!,
                            caption: item.secondaryImageCaption || 'Código Backend'
                          })
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E5A94C] dark:text-[#E8B665] hover:underline"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Ver captura: {item.secondaryImageCaption || 'Backend'}</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

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
              {/* Image Tabs if there are multiple images */}
              {inspectItem.item.secondaryImageSrc && (
                <div className="flex items-center gap-2 pb-2">
                  <button
                    type="button"
                    onClick={() =>
                      setInspectItem({
                        ...inspectItem,
                        activeImage: inspectItem.item.imageSrc!,
                        caption: inspectItem.item.imageCaption || 'Interface Principal'
                      })
                    }
                    className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors ${
                      inspectItem.activeImage === inspectItem.item.imageSrc
                        ? 'bg-[#D96B27] text-white dark:bg-[#F28C38] dark:text-[#1B2933]'
                        : 'bg-[#F7F5F1] dark:bg-[#1B2933] text-[#5B7382] dark:text-[#9EB3BF]'
                    }`}
                  >
                    1. Interface de Operação
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setInspectItem({
                        ...inspectItem,
                        activeImage: inspectItem.item.secondaryImageSrc!,
                        caption: inspectItem.item.secondaryImageCaption || 'Backend / Código'
                      })
                    }
                    className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors ${
                      inspectItem.activeImage === inspectItem.item.secondaryImageSrc
                        ? 'bg-[#D96B27] text-white dark:bg-[#F28C38] dark:text-[#1B2933]'
                        : 'bg-[#F7F5F1] dark:bg-[#1B2933] text-[#5B7382] dark:text-[#9EB3BF]'
                    }`}
                  >
                    2. Código & Roteamento CCXT
                  </button>
                </div>
              )}

              {/* Main Full Screenshot */}
              <div className="rounded-xl overflow-hidden border border-[#E3DED7] dark:border-[#364C59] bg-[#1B2933] flex justify-center p-2 sm:p-3">
                <img
                  src={inspectItem.activeImage}
                  alt={inspectItem.caption}
                  className="max-h-[58vh] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>

              <div className="p-3 rounded-lg bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] flex items-center justify-between text-xs font-mono">
                <span className="text-[#223747] dark:text-[#F5F2EC] font-semibold">
                  {inspectItem.caption}
                </span>
                <span className="text-[#5B7382] dark:text-[#9EB3BF]">
                  Registro autoral
                </span>
              </div>

              {/* Full Code snippet if available */}
              {inspectItem.item.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-[#E3DED7] dark:border-[#364C59] bg-[#1B2933] text-[#F5F2EC]">
                  <div className="flex items-center justify-between px-4 py-2 bg-[#283B47] border-b border-[#364C59]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#F5F2EC]">
                      <Terminal className="w-3.5 h-3.5 text-[#E5A94C]" />
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
                          <Check className="w-3.5 h-3.5 text-[#E8B665]" />
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
