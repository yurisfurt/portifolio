import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Box,
  Table2,
  CheckCircle2,
  Download,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  BENCHMARK_SUMMARIES,
  SEQUENTIAL_MEDIAN_S,
  BenchmarkConfigSummary,
} from '../data/optimizationRuns';

interface RastriginSurface3DProps {
  onOpenDetails?: () => void;
}

interface PillarLayout {
  summary: BenchmarkConfigSummary;
  gx: number; // X grid coordinate
  gy: number; // Y grid coordinate
  colorTop: string;
  colorLeft: string;
  colorRight: string;
  badgeColor: string;
}

const PILLAR_LAYOUTS: PillarLayout[] = (() => {
  const byKey = new Map(BENCHMARK_SUMMARIES.map((s) => [s.configKey, s]));
  return [
    {
      summary: byKey.get('sequential:1:0')!,
      gx: -1.1,
      gy: -0.95,
      colorTop: '#94A3B8',
      colorLeft: '#64748B',
      colorRight: '#475569',
      badgeColor: '#94A3B8',
    },
    {
      summary: byKey.get('static:2:0')!,
      gx: 0.0,
      gy: -0.32,
      colorTop: '#F5B74C',
      colorLeft: '#D97706',
      colorRight: '#B45309',
      badgeColor: '#F5B74C',
    },
    {
      summary: byKey.get('static:4:0')!,
      gx: 1.1,
      gy: -0.32,
      colorTop: '#F5B74C',
      colorLeft: '#D97706',
      colorRight: '#B45309',
      badgeColor: '#F5B74C',
    },
    {
      summary: byKey.get('tree:2:131072')!,
      gx: 0.0,
      gy: 0.32,
      colorTop: '#60A5FA',
      colorLeft: '#3B82F6',
      colorRight: '#2563EB',
      badgeColor: '#60A5FA',
    },
    {
      summary: byKey.get('tree:4:131072')!,
      gx: 1.1,
      gy: 0.32,
      colorTop: '#60A5FA',
      colorLeft: '#3B82F6',
      colorRight: '#2563EB',
      badgeColor: '#60A5FA',
    },
    {
      summary: byKey.get('tree:2:16384')!,
      gx: 0.0,
      gy: 0.95,
      colorTop: '#2DD4BF',
      colorLeft: '#14B8A6',
      colorRight: '#0D9488',
      badgeColor: '#2DD4BF',
    },
    {
      summary: byKey.get('tree:4:16384')!,
      gx: 1.1,
      gy: 0.95,
      colorTop: '#2DD4BF',
      colorLeft: '#14B8A6',
      colorRight: '#0D9488',
      badgeColor: '#2DD4BF',
    },
  ];
})();

interface ScreenBox {
  configKey: string;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export const RastriginSurface3D: React.FC<RastriginSurface3DProps> = () => {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hitBoxesRef = useRef<ScreenBox[]>([]);

  const [viewMode, setViewMode] = useState<'3d' | 'trials'>('3d');
  const [selectedKey, setSelectedKey] = useState<string>('tree:4:16384');
  const [autoRotate, setAutoRotate] = useState<boolean>(false);

  // Clean isometric-style camera angle where all 7 pillars are clearly separated
  const anglesRef = useRef({ rotX: 30 * (Math.PI / 180), rotZ: -36 * (Math.PI / 180) });
  const isDraggingRef = useRef(false);
  const dragDistanceRef = useRef(0);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  const activeSummary =
    BENCHMARK_SUMMARIES.find((s) => s.configKey === selectedKey) ||
    BENCHMARK_SUMMARIES[BENCHMARK_SUMMARIES.length - 1];

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (width === 0 || height === 0) return;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains('dark');
    const bgColor = isDark ? '#0F1A2A' : '#F7F5F1';
    const floorColor = isDark ? '#152236' : '#ECE8E1';
    const gridLineColor = isDark ? 'rgba(148, 163, 184, 0.18)' : 'rgba(34, 55, 71, 0.12)';
    const refPlaneColor = isDark ? 'rgba(203, 213, 225, 0.35)' : 'rgba(34, 55, 71, 0.30)';
    const labelColor = isDark ? '#E2E8F0' : '#223747';
    const mutedColor = isDark ? '#94A3B8' : '#5B7382';

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    const rotX = anglesRef.current.rotX;
    const rotZ = anglesRef.current.rotZ;
    const scale = Math.min(width, height) * 0.255;

    // Map (x in [-1.5..1.5], y in [-1.35..1.35], gain in [0..2.6]) -> screen coordinates
    const gainToZ = (gain: number) => (gain / 2.6) * 1.45 - 0.55;
    const project = (x: number, y: number, z: number) => {
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);
      const x1 = x * cosZ - y * sinZ;
      const y1 = x * sinZ + y * cosZ;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y1 * cosX - z * sinX;
      const z2 = y1 * sinX + z * cosX;

      return {
        sx: width / 2 + x1 * scale,
        sy: height / 2 + y2 * scale * 0.92 + 12,
        depth: z2,
      };
    };

    const zFloor = gainToZ(0);
    const zRef = gainToZ(1.0);
    const zMax = gainToZ(2.5);

    // 1. Draw solid 3D platform floor
    const xMin = -1.55;
    const xMax = 1.55;
    const yMin = -1.35;
    const yMax = 1.35;
    const floorCorners = [
      project(xMin, yMin, zFloor),
      project(xMax, yMin, zFloor),
      project(xMax, yMax, zFloor),
      project(xMin, yMax, zFloor),
    ];
    ctx.beginPath();
    ctx.moveTo(floorCorners[0].sx, floorCorners[0].sy);
    floorCorners.slice(1).forEach((p) => ctx.lineTo(p.sx, p.sy));
    ctx.closePath();
    ctx.fillStyle = floorColor;
    ctx.fill();
    ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.3)' : 'rgba(34, 55, 71, 0.22)';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Floor gridlines along X (processes) and Y (methods)
    [-1.1, 0.0, 1.1].forEach((gx) => {
      const a = project(gx, yMin, zFloor);
      const b = project(gx, yMax, zFloor);
      ctx.beginPath();
      ctx.moveTo(a.sx, a.sy);
      ctx.lineTo(b.sx, b.sy);
      ctx.strokeStyle = gridLineColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    [-0.95, -0.32, 0.32, 0.95].forEach((gy) => {
      const a = project(xMin, gy, zFloor);
      const b = project(xMax, gy, zFloor);
      ctx.beginPath();
      ctx.moveTo(a.sx, a.sy);
      ctx.lineTo(b.sx, b.sy);
      ctx.strokeStyle = gridLineColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Subtle 1.0x Sequential Reference Frame at Z = 1.0
    const refPts = [
      project(xMin, yMin, zRef),
      project(xMax, yMin, zRef),
      project(xMax, yMax, zRef),
      project(xMin, yMax, zRef),
    ];
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([5, 4]);
    ctx.moveTo(refPts[0].sx, refPts[0].sy);
    refPts.slice(1).forEach((p) => ctx.lineTo(p.sx, p.sy));
    ctx.closePath();
    ctx.strokeStyle = refPlaneColor;
    ctx.lineWidth = 1.1;
    ctx.stroke();
    ctx.restore();

    // Vertical Z scale ruler on back corner
    const zAxisBase = project(xMin, yMax, zFloor);
    const zAxisTop = project(xMin, yMax, zMax);
    ctx.beginPath();
    ctx.moveTo(zAxisBase.sx, zAxisBase.sy);
    ctx.lineTo(zAxisTop.sx, zAxisTop.sy);
    ctx.strokeStyle = isDark ? 'rgba(148,163,184,0.45)' : 'rgba(34,55,71,0.35)';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    [0, 1.0, 2.0, 2.5].forEach((tick) => {
      const pt = project(xMin, yMax, gainToZ(tick));
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = tick === 1.0 ? labelColor : mutedColor;
      ctx.textAlign = 'right';
      ctx.fillText(`${tick.toFixed(1).replace('.', ',')}×`, pt.sx - 6, pt.sy + 3);
    });

    // 2. Collect and depth-sort all 7 3D columns (Painter's algorithm)
    const halfW = 0.21;
    const halfD = 0.17;

    const pillarsWithDepth = PILLAR_LAYOUTS.map((pillar) => {
      const center = project(pillar.gx, pillar.gy, gainToZ(pillar.summary.gainVsSeq / 2));
      return { pillar, depth: center.depth };
    }).sort((a, b) => a.depth - b.depth);

    const newHitBoxes: ScreenBox[] = [];

    pillarsWithDepth.forEach(({ pillar }) => {
      const { gx, gy, summary } = pillar;
      const isSelected = summary.configKey === selectedKey;
      const zTop = gainToZ(summary.gainVsSeq);

      // 8 vertices of the 3D column
      const b0 = project(gx - halfW, gy - halfD, zFloor);
      const b1 = project(gx + halfW, gy - halfD, zFloor);
      const b2 = project(gx + halfW, gy + halfD, zFloor);
      const b3 = project(gx - halfW, gy + halfD, zFloor);

      const t0 = project(gx - halfW, gy - halfD, zTop);
      const t1 = project(gx + halfW, gy - halfD, zTop);
      const t2 = project(gx + halfW, gy + halfD, zTop);
      const t3 = project(gx - halfW, gy + halfD, zTop);

      // Record hit box for click selection
      const allPts = [b0, b1, b2, b3, t0, t1, t2, t3];
      newHitBoxes.push({
        configKey: summary.configKey,
        minX: Math.min(...allPts.map((p) => p.sx)) - 6,
        maxX: Math.max(...allPts.map((p) => p.sx)) + 6,
        minY: Math.min(...allPts.map((p) => p.sy)) - 18,
        maxY: Math.max(...allPts.map((p) => p.sy)) + 6,
      });

      // Compute visible side faces by face center depth
      const faces = [
        {
          pts: [b0, b1, t1, t0],
          color: pillar.colorLeft,
          depth: (b0.depth + b1.depth + t1.depth + t0.depth) / 4,
        },
        {
          pts: [b1, b2, t2, t1],
          color: pillar.colorRight,
          depth: (b1.depth + b2.depth + t2.depth + t1.depth) / 4,
        },
        {
          pts: [b2, b3, t3, t2],
          color: pillar.colorLeft,
          depth: (b2.depth + b3.depth + t3.depth + t2.depth) / 4,
        },
        {
          pts: [b3, b0, t0, t3],
          color: pillar.colorRight,
          depth: (b3.depth + b0.depth + t0.depth + t3.depth) / 4,
        },
        {
          pts: [t0, t1, t2, t3],
          color: pillar.colorTop,
          depth: (t0.depth + t1.depth + t2.depth + t3.depth) / 4 + 0.05,
        },
      ].sort((a, b) => a.depth - b.depth);

      const alpha = isSelected ? 1.0 : 0.78;
      faces.forEach((f) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(f.pts[0].sx, f.pts[0].sy);
        f.pts.slice(1).forEach((p) => ctx.lineTo(p.sx, p.sy));
        ctx.closePath();
        ctx.fillStyle = f.color;
        ctx.fill();
        ctx.strokeStyle = isSelected
          ? isDark
            ? '#FFFFFF'
            : '#223747'
          : isDark
          ? 'rgba(15, 26, 42, 0.55)'
          : 'rgba(255, 255, 255, 0.55)';
        ctx.lineWidth = isSelected ? 1.6 : 0.8;
        ctx.stroke();
        ctx.restore();
      });

      // Clean floating label directly above the column cap
      const capCenter = project(gx, gy, zTop);
      const pillText = `${summary.gainVsSeq.toFixed(2).replace('.', ',')}×`;

      ctx.save();
      ctx.font = `${isSelected ? '800' : '700'} 11px "JetBrains Mono", monospace`;
      const textWidth = ctx.measureText(pillText).width;
      const pillW = textWidth + 10;
      const pillH = 18;
      const px = capCenter.sx - pillW / 2;
      const py = capCenter.sy - 24;

      ctx.fillStyle = isSelected
        ? '#D96B27'
        : isDark
        ? 'rgba(15, 26, 42, 0.88)'
        : 'rgba(255, 255, 255, 0.92)';
      ctx.beginPath();
      ctx.roundRect(px, py, pillW, pillH, 4);
      ctx.fill();

      ctx.strokeStyle = isSelected ? '#FFFFFF' : pillar.badgeColor;
      ctx.lineWidth = isSelected ? 1.4 : 1;
      ctx.stroke();

      ctx.fillStyle = isSelected ? '#FFFFFF' : labelColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(pillText, capCenter.sx, py + pillH / 2 + 0.5);
      ctx.restore();
    });

    hitBoxesRef.current = newHitBoxes;

    // 3. Clear floor axis labels so the viewer reads X (Processos) and Y (Estratégia) effortlessly
    ctx.font = '600 10px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';

    const xLabels = [
      { gx: -1.1, label: isPt ? '1 proc' : '1 proc' },
      { gx: 0.0, label: isPt ? '2 proc' : '2 proc' },
      { gx: 1.1, label: isPt ? '4 proc' : '4 proc' },
    ];
    xLabels.forEach((item) => {
      const p = project(item.gx, -1.55, zFloor);
      ctx.fillStyle = labelColor;
      ctx.fillText(item.label, p.sx, p.sy + 4);
    });

    const yLabels = [
      { gy: -0.95, label: isPt ? 'Sequencial' : 'Sequential', col: '#94A3B8' },
      { gy: -0.32, label: isPt ? 'Div. Fixa' : 'Fixed Split', col: '#F5B74C' },
      { gy: 0.32, label: 'TREE · 131k', col: '#60A5FA' },
      { gy: 0.95, label: 'TREE · 16k', col: '#2DD4BF' },
    ];
    ctx.textAlign = 'left';
    yLabels.forEach((item) => {
      const p = project(1.68, item.gy, zFloor);
      ctx.fillStyle = isDark ? item.col : labelColor;
      ctx.fillText(item.label, p.sx + 4, p.sy + 3);
    });

    ctx.restore();
  }, [isPt, selectedKey]);

  useEffect(() => {
    if (!autoRotate || viewMode !== '3d') return;
    const id = setInterval(() => {
      if (!isDraggingRef.current) {
        anglesRef.current.rotZ += 0.006;
        renderCanvas();
      }
    }, 40);
    return () => clearInterval(id);
  }, [autoRotate, viewMode, renderCanvas]);

  useEffect(() => {
    if (viewMode === '3d') {
      renderCanvas();
    }
  }, [viewMode, renderCanvas]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    dragDistanceRef.current = 0;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    dragDistanceRef.current += Math.abs(dx) + Math.abs(dy);
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    anglesRef.current.rotZ += dx * 0.009;
    anglesRef.current.rotX = Math.max(
      0.16,
      Math.min(Math.PI / 2 - 0.08, anglesRef.current.rotX + dy * 0.009)
    );
    renderCanvas();
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const wasClick = dragDistanceRef.current < 5;
    isDraggingRef.current = false;

    if (wasClick && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      // Search in reverse (front-most painted pillar first)
      for (let i = hitBoxesRef.current.length - 1; i >= 0; i--) {
        const box = hitBoxesRef.current[i];
        if (cx >= box.minX && cx <= box.maxX && cy >= box.minY && cy <= box.maxY) {
          setSelectedKey(box.configKey);
          break;
        }
      }
    }
  };

  const setPresetAngle = (preset: 'iso' | 'front' | 'side') => {
    setAutoRotate(false);
    if (preset === 'iso') {
      anglesRef.current = { rotX: 30 * (Math.PI / 180), rotZ: -36 * (Math.PI / 180) };
    } else if (preset === 'front') {
      anglesRef.current = { rotX: 16 * (Math.PI / 180), rotZ: -8 * (Math.PI / 180) };
    } else {
      anglesRef.current = { rotX: 20 * (Math.PI / 180), rotZ: -80 * (Math.PI / 180) };
    }
    renderCanvas();
  };

  return (
    <div className="relative rounded-xl bg-[#FFFFFF] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] p-4 text-[#223747] dark:text-[#F5F2EC] overflow-hidden">
      {/* Header + Quick Configuration Selector */}
      <div className="flex flex-col gap-3 pb-3 border-b border-[#E3DED7] dark:border-[#364C59]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 text-[11px] text-[#D96B27] dark:text-[#F28C38] font-mono font-semibold">
              <span>SMART HEURISTIC · 35 RUNS (runs.csv)</span>
              <span>·</span>
              <span>35/35 {isPt ? 'válidas' : 'valid'}</span>
            </div>
            <h4 className="text-base font-bold text-[#223747] dark:text-[#F5F2EC] mt-0.5">
              {isPt
                ? 'Comparativo 3D: Ganho por Estratégia e Processos'
                : '3D Comparison: Speedup Gain by Strategy & Processes'}
            </h4>
            <p className="text-[11px] text-[#5B7382] dark:text-[#9EB3BF] mt-0.5">
              {isPt
                ? 'Clique em qualquer coluna 3D ou botão abaixo para ver os resultados reais dos 5 desafios'
                : 'Click any 3D pillar or config button below to inspect the real 5-trial CSV metrics'}
            </p>
          </div>

          {/* Preset Camera Angles */}
          {viewMode === '3d' && (
            <div className="flex items-center gap-1 p-0.5 bg-[#F7F5F1] dark:bg-[#283B47] rounded-lg border border-[#E3DED7] dark:border-[#364C59] self-start text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setPresetAngle('iso')}
                className="px-2 py-1 rounded hover:bg-[#FFFFFF] dark:hover:bg-[#364C59] text-[#223747] dark:text-[#F5F2EC] transition-colors"
              >
                {isPt ? 'Vista 3D' : '3D View'}
              </button>
              <button
                type="button"
                onClick={() => setPresetAngle('front')}
                className="px-2 py-1 rounded hover:bg-[#FFFFFF] dark:hover:bg-[#364C59] text-[#5B7382] dark:text-[#9EB3BF] transition-colors"
              >
                {isPt ? 'Processos' : 'Processes'}
              </button>
              <button
                type="button"
                onClick={() => setPresetAngle('side')}
                className="px-2 py-1 rounded hover:bg-[#FFFFFF] dark:hover:bg-[#364C59] text-[#5B7382] dark:text-[#9EB3BF] transition-colors"
              >
                {isPt ? 'Estratégias' : 'Strategies'}
              </button>
            </div>
          )}
        </div>

        {/* 7 Direct Configuration Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {BENCHMARK_SUMMARIES.map((cfg) => {
            const active = cfg.configKey === selectedKey;
            return (
              <button
                key={cfg.configKey}
                type="button"
                onClick={() => setSelectedKey(cfg.configKey)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all border ${
                  active
                    ? 'bg-[#D96B27] dark:bg-[#F28C38] text-white dark:text-[#1B2933] border-[#D96B27] dark:border-[#F28C38] font-bold shadow-xs'
                    : 'bg-[#F7F5F1] dark:bg-[#283B47] text-[#223747] dark:text-[#F5F2EC] border-[#E3DED7] dark:border-[#364C59] hover:border-[#D96B27]'
                }`}
              >
                {isPt ? cfg.shortLabelPt : cfg.shortLabelEn} · {cfg.gainVsSeq.toFixed(2).replace('.', ',')}×
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Viewport: 3D Pillars OR Real CSV Trials Breakdown */}
      <div className="relative my-3 aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg overflow-hidden bg-[#F7F5F1] dark:bg-[#0F1A2A] border border-[#E3DED7] dark:border-[#364C59]">
        {viewMode === '3d' ? (
          <>
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => {
                isDraggingRef.current = false;
              }}
              className="w-full h-full cursor-grab active:cursor-grabbing block"
            />

            {/* Top-right Selected Configuration KPI Card */}
            <div className="absolute top-2.5 right-2.5 px-3 py-2 bg-[#FFFFFF]/92 dark:bg-[#1B2933]/92 backdrop-blur-xs rounded-lg border border-[#E3DED7] dark:border-[#364C59] text-right shadow-xs">
              <div className="text-[10px] text-[#5B7382] dark:text-[#9EB3BF] font-mono font-semibold">
                {isPt ? activeSummary.labelPt : activeSummary.labelEn}
              </div>
              <div className="flex items-baseline justify-end gap-2 mt-0.5">
                <span className="text-xl font-extrabold text-[#D96B27] dark:text-[#2DD4BF] font-mono tabular-nums">
                  {activeSummary.gainVsSeq.toFixed(2).replace('.', ',')}×
                </span>
                <span className="text-xs font-mono font-semibold text-[#223747] dark:text-[#F5F2EC]">
                  {activeSummary.medianElapsedS.toFixed(2).replace('.', ',')} s
                </span>
              </div>
              <div className="text-[10px] font-mono text-[#5B7382] dark:text-[#9EB3BF] mt-0.5">
                {activeSummary.method === 'sequential'
                  ? isPt
                    ? 'Linha base (1,00×)'
                    : 'Baseline (1.00×)'
                  : `${activeSummary.timeSavedPct.toFixed(1).replace('.', ',')}% ${
                      isPt ? 'menos tempo' : 'faster'
                    } · ${Math.round(activeSummary.medianEvalPerS / 1000)}k aval/s`}
              </div>
            </div>

            {/* Bottom-left Legend */}
            <div className="absolute bottom-2.5 left-2.5 pointer-events-none px-2.5 py-1.5 bg-[#FFFFFF]/90 dark:bg-[#1B2933]/90 backdrop-blur-xs rounded-lg border border-[#E3DED7] dark:border-[#364C59] text-[10px] font-mono flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#2DD4BF] inline-block" /> TREE 16k
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#60A5FA] inline-block" /> TREE 131k
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#F5B74C] inline-block" /> {isPt ? 'Div. Fixa' : 'Fixed'}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#94A3B8] inline-block" /> Seq (1×)
              </span>
            </div>
          </>
        ) : (
          /* Tab 2: Exact 5 Trials from runs_08098b69.csv */
          <div className="p-4 sm:p-5 h-full flex flex-col justify-between bg-[#0F1A2A] text-[#F5F2EC] overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#283B47]">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#2DD4BF]">
                  {isPt ? 'Dados Reais · 5 Desafios (runs.csv)' : 'Measured Data · 5 Challenges (runs.csv)'}
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {isPt ? activeSummary.labelPt : activeSummary.labelEn} —{' '}
                  <span className="text-[#2DD4BF] font-mono">
                    {activeSummary.medianElapsedS.toFixed(2).replace('.', ',')} s
                  </span>{' '}
                  ({activeSummary.gainVsSeq.toFixed(2).replace('.', ',')}×)
                </div>
              </div>

              <a
                href="/assets/aistudio/runs_08098b69.csv"
                download="runs.csv"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#1B2933] hover:bg-[#283B47] border border-[#364C59] text-[11px] font-mono text-[#2DD4BF] self-start"
              >
                <Download className="w-3.5 h-3.5" />
                <span>runs.csv (35 linhas)</span>
              </a>
            </div>

            <div className="overflow-x-auto my-2">
              <table className="w-full text-left font-mono text-[11px] border-collapse">
                <thead>
                  <tr className="text-[#94A3B8] border-b border-[#283B47]">
                    <th className="py-1.5 pr-3">{isPt ? 'Desafio' : 'Trial'}</th>
                    <th className="py-1.5 pr-3">{isPt ? 'Tempo (s)' : 'Elapsed (s)'}</th>
                    <th className="py-1.5 pr-3">{isPt ? 'Tentativas' : 'Attempts'}</th>
                    <th className="py-1.5 pr-3">{isPt ? 'Taxa (aval/s)' : 'Rate (eval/s)'}</th>
                    <th className="py-1.5 pr-3">Nonce</th>
                    <th className="py-1.5 text-right">{isPt ? 'Status' : 'Status'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#283B47]/60">
                  {activeSummary.runs.map((run) => {
                    const isMedian = Math.abs(run.elapsedS - activeSummary.medianElapsedS) < 0.001;
                    return (
                      <tr
                        key={`${run.configKey}-${run.trial}`}
                        className={isMedian ? 'bg-[#2DD4BF]/10 text-white font-semibold' : 'text-[#CBD5E1]'}
                      >
                        <td className="py-2 pr-3">
                          #{run.trial}{' '}
                          {isMedian && (
                            <span className="ml-1 text-[9px] px-1 py-0.5 rounded bg-[#2DD4BF]/20 text-[#2DD4BF]">
                              {isPt ? 'MEDIANA' : 'MEDIAN'}
                            </span>
                          )}
                        </td>
                        <td className="py-2 pr-3">{run.elapsedS.toFixed(3).replace('.', ',')} s</td>
                        <td className="py-2 pr-3">{run.attempts.toLocaleString('pt-BR')}</td>
                        <td className="py-2 pr-3">{Math.round(run.evaluationsPerS).toLocaleString('pt-BR')}/s</td>
                        <td className="py-2 pr-3 text-[#94A3B8]">{run.nonce.toLocaleString('pt-BR')}</td>
                        <td className="py-2 text-right">
                          <span className="inline-flex items-center gap-1 text-[#2DD4BF]">
                            <CheckCircle2 className="w-3 h-3" />
                            {run.valid ? 'OK' : 'ERR'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="pt-2 border-t border-[#283B47] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#94A3B8]">
              <span>
                {isPt ? 'Referência Sequencial (1 proc):' : 'Sequential Baseline (1 proc):'}{' '}
                <strong className="text-white">{SEQUENTIAL_MEDIAN_S.toFixed(2).replace('.', ',')} s</strong>
              </span>
              <span>
                {isPt
                  ? '35/35 buscas validadas · SHA-256 prefixo alvo'
                  : '35/35 validated searches · SHA-256 prefix target'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#D96B27] hover:bg-[#C25A1A] dark:bg-[#F28C38] dark:hover:bg-[#FF9D4D] text-white dark:text-[#1B2933] text-xs font-bold rounded-lg transition-colors shadow-xs"
          >
            {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{autoRotate ? (isPt ? 'Pausar giro' : 'Pause orbit') : (isPt ? 'Girar 3D' : 'Orbit 3D')}</span>
          </button>

          <button
            type="button"
            onClick={() => setPresetAngle('iso')}
            className="p-1.5 text-[#5B7382] hover:text-[#223747] dark:text-[#9EB3BF] dark:hover:text-[#F5F2EC] bg-[#F7F5F1] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] rounded-lg transition-colors"
            title={isPt ? 'Resetar ângulo' : 'Reset angle'}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3D Pillars / CSV Trials Switch */}
        <div className="flex items-center p-0.5 bg-[#F7F5F1] dark:bg-[#283B47] rounded-lg border border-[#E3DED7] dark:border-[#364C59]">
          <button
            type="button"
            onClick={() => setViewMode('3d')}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded transition-colors ${
              viewMode === '3d'
                ? 'bg-[#FFFFFF] dark:bg-[#364C59] text-[#223747] dark:text-[#F5F2EC] font-semibold shadow-xs'
                : 'text-[#5B7382] dark:text-[#9EB3BF]'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>{isPt ? 'Colunas 3D' : '3D Columns'}</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('trials')}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded transition-colors ${
              viewMode === 'trials'
                ? 'bg-[#FFFFFF] dark:bg-[#364C59] text-[#223747] dark:text-[#F5F2EC] font-semibold shadow-xs'
                : 'text-[#5B7382] dark:text-[#9EB3BF]'
            }`}
          >
            <Table2 className="w-3.5 h-3.5" />
            <span>{isPt ? 'Desafios (CSV)' : 'Trials (CSV)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
