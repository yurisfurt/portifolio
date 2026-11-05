import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, RotateCcw, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RastriginSurface3DProps {
  onOpenDetails?: () => void;
}

// Rastrigin function definition: f(x, y) = 20 + (x^2 - 10*cos(2*pi*x)) + (y^2 - 10*cos(2*pi*y))
function rastrigin(x: number, y: number): number {
  const A = 10;
  return 2 * A + (x * x - A * Math.cos(2 * Math.PI * x)) + (y * y - A * Math.cos(2 * Math.PI * y));
}

// Colormap function matching the petrol blue & soft sage/teal palette
function getEditorialColor(z: number, minZ: number, maxZ: number, isDark: boolean): { r: number; g: number; b: number; hex: string } {
  const t = Math.max(0, Math.min(1, (z - minZ) / (maxZ - minZ)));
  let r: number, g: number, b: number;

  if (isDark) {
    // Valleys in deep teal/petrol (#202C34), rising to sage (#89ABB0), then light sand (#E7E9E6)
    if (t < 0.35) {
      const s = t / 0.35;
      r = Math.round(45 + s * (60 - 45));
      g = Math.round(74 + s * (115 - 74));
      b = Math.round(82 + s * (125 - 82));
    } else if (t < 0.7) {
      const s = (t - 0.35) / 0.35;
      r = Math.round(60 + s * (137 - 60));
      g = Math.round(115 + s * (171 - 115));
      b = Math.round(125 + s * (176 - 125));
    } else {
      const s = (t - 0.7) / 0.3;
      r = Math.round(137 + s * (231 - 137));
      g = Math.round(171 + s * (233 - 171));
      b = Math.round(176 + s * (230 - 176));
    }
  } else {
    // Valleys in soft teal (#668B91), mid slopes in petrol (#243746), peaks in warm amber/terracotta
    if (t < 0.35) {
      const s = t / 0.35;
      r = Math.round(102 - s * (102 - 36));
      g = Math.round(139 - s * (139 - 55));
      b = Math.round(145 - s * (145 - 70));
    } else if (t < 0.7) {
      const s = (t - 0.35) / 0.35;
      r = Math.round(36 + s * (140 - 36));
      g = Math.round(55 + s * (100 - 55));
      b = Math.round(70 + s * (80 - 70));
    } else {
      const s = (t - 0.7) / 0.3;
      r = Math.round(140 + s * (80));
      g = Math.round(100 + s * (40));
      b = Math.round(80 - s * (20));
    }
  }

  return { r, g, b, hex: `rgb(${r},${g},${b})` };
}

type AlgorithmType = 'momentum' | 'pso' | 'genetic';

export const RastriginSurface3D: React.FC<RastriginSurface3DProps> = ({ onOpenDetails }) => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('momentum');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'3d' | 'convergence'>('3d');

  // Camera angles
  const anglesRef = useRef({ rotX: 55 * (Math.PI / 180), rotZ: -35 * (Math.PI / 180) });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  // Precomputed simulated trajectories
  const trajectories = useRef<{ [key in AlgorithmType]: { x: number; y: number; z: number }[] }>({
    momentum: [
      { x: 2.1, y: 1.8, z: rastrigin(2.1, 1.8) },
      { x: 1.95, y: 1.62, z: rastrigin(1.95, 1.62) },
      { x: 1.72, y: 1.45, z: rastrigin(1.72, 1.45) },
      { x: 1.48, y: 1.25, z: rastrigin(1.48, 1.25) },
      { x: 1.15, y: 1.05, z: rastrigin(1.15, 1.05) },
      { x: 0.98, y: 0.88, z: rastrigin(0.98, 0.88) },
      { x: 0.75, y: 0.65, z: rastrigin(0.75, 0.65) },
      { x: 0.52, y: 0.45, z: rastrigin(0.52, 0.45) },
      { x: 0.32, y: 0.28, z: rastrigin(0.32, 0.28) },
      { x: 0.18, y: 0.15, z: rastrigin(0.18, 0.15) },
      { x: 0.08, y: 0.06, z: rastrigin(0.08, 0.06) },
      { x: 0.02, y: 0.01, z: rastrigin(0.02, 0.01) },
      { x: 0.00, y: 0.00, z: rastrigin(0.00, 0.00) },
    ],
    pso: [
      { x: -2.3, y: 1.9, z: rastrigin(-2.3, 1.9) },
      { x: -1.85, y: 1.4, z: rastrigin(-1.85, 1.4) },
      { x: -1.3, y: 0.95, z: rastrigin(-1.3, 0.95) },
      { x: -0.88, y: 0.55, z: rastrigin(-0.88, 0.55) },
      { x: -0.45, y: 0.25, z: rastrigin(-0.45, 0.25) },
      { x: -0.2, y: 0.1, z: rastrigin(-0.2, 0.1) },
      { x: -0.05, y: 0.02, z: rastrigin(-0.05, 0.02) },
      { x: 0.0, y: 0.0, z: rastrigin(0.0, 0.0) },
    ],
    genetic: [
      { x: 1.8, y: -2.2, z: rastrigin(1.8, -2.2) },
      { x: 1.4, y: -1.6, z: rastrigin(1.4, -1.6) },
      { x: 1.1, y: -1.0, z: rastrigin(1.1, -1.0) },
      { x: 0.65, y: -0.6, z: rastrigin(0.65, -0.6) },
      { x: 0.35, y: -0.3, z: rastrigin(0.35, -0.3) },
      { x: 0.15, y: -0.1, z: rastrigin(0.15, -0.1) },
      { x: 0.03, y: -0.02, z: rastrigin(0.03, -0.02) },
      { x: 0.0, y: 0.0, z: rastrigin(0.0, 0.0) },
    ]
  });

  const activeTrajectory = trajectories.current[algorithm];
  const maxSteps = activeTrajectory.length - 1;

  // Step progression animation loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev >= maxSteps ? 0 : prev + 1));
    }, 450);
    return () => clearInterval(interval);
  }, [isPlaying, maxSteps]);

  // Main 3D Canvas rendering
  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains('dark');
    // Subtle backdrop matching palette
    ctx.fillStyle = isDark ? '#202C34' : '#F5F3EF';
    ctx.fillRect(0, 0, width, height);

    const N = 26;
    const range = 2.4;
    const step = (range * 2) / N;

    const rotX = anglesRef.current.rotX;
    const rotZ = anglesRef.current.rotZ;

    // 3D projection
    const project = (x: number, y: number, z: number) => {
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);
      const x1 = x * cosZ - y * sinZ;
      const y1 = x * sinZ + y * cosZ;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y1 * cosX - (z * 0.038) * sinX;
      const z2 = y1 * sinX + (z * 0.038) * cosX;

      const scale = Math.min(width, height) * 0.17;
      const sx = width / 2 + x1 * scale;
      const sy = height / 2 + y2 * scale - 10;
      return { sx, sy, depth: z2 };
    };

    const minZ = 0;
    const maxZ = 65;
    interface Quad {
      p1: { sx: number; sy: number; depth: number };
      p2: { sx: number; sy: number; depth: number };
      p3: { sx: number; sy: number; depth: number };
      p4: { sx: number; sy: number; depth: number };
      avgZ: number;
      depth: number;
    }

    const quads: Quad[] = [];

    for (let i = 0; i < N; i++) {
      const x1 = -range + i * step;
      const x2 = -range + (i + 1) * step;

      for (let j = 0; j < N; j++) {
        const y1 = -range + j * step;
        const y2 = -range + (j + 1) * step;

        const z11 = rastrigin(x1, y1);
        const z12 = rastrigin(x1, y2);
        const z22 = rastrigin(x2, y2);
        const z21 = rastrigin(x2, y1);

        const p1 = project(x1, y1, z11);
        const p2 = project(x1, y2, z12);
        const p3 = project(x2, y2, z22);
        const p4 = project(x2, y1, z21);

        const avgDepth = (p1.depth + p2.depth + p3.depth + p4.depth) / 4;
        const avgZ = (z11 + z12 + z22 + z21) / 4;

        quads.push({ p1, p2, p3, p4, avgZ, depth: avgDepth });
      }
    }

    // Sort by depth (Painter's algorithm)
    quads.sort((a, b) => a.depth - b.depth);

    // Draw shaded surface polygons
    for (const quad of quads) {
      const color = getEditorialColor(quad.avgZ, minZ, maxZ, isDark);
      ctx.beginPath();
      ctx.moveTo(quad.p1.sx, quad.p1.sy);
      ctx.lineTo(quad.p2.sx, quad.p2.sy);
      ctx.lineTo(quad.p3.sx, quad.p3.sy);
      ctx.lineTo(quad.p4.sx, quad.p4.sy);
      ctx.closePath();

      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${isDark ? 0.9 : 0.82})`;
      ctx.fill();

      ctx.lineWidth = 0.5;
      ctx.strokeStyle = isDark ? 'rgba(231, 233, 230, 0.12)' : 'rgba(36, 55, 70, 0.15)';
      ctx.stroke();
    }

    // Draw trajectory path
    const visiblePoints = activeTrajectory.slice(0, currentStep + 1);
    if (visiblePoints.length > 0) {
      ctx.beginPath();
      visiblePoints.forEach((pt, idx) => {
        const p = project(pt.x, pt.y, pt.z);
        if (idx === 0) {
          ctx.moveTo(p.sx, p.sy);
        } else {
          ctx.lineTo(p.sx, p.sy);
        }
      });
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = isDark ? '#E7E9E6' : '#243746';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      // Nodes
      visiblePoints.forEach((pt, idx) => {
        const p = project(pt.x, pt.y, pt.z);
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, idx === 0 ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = idx === 0 ? '#668B91' : isDark ? '#E7E9E6' : '#243746';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = isDark ? '#202C34' : '#FFFFFF';
        ctx.stroke();
      });

      // Active search head marker
      const currentPoint = visiblePoints[visiblePoints.length - 1];
      const headProj = project(currentPoint.x, currentPoint.y, currentPoint.z);

      ctx.beginPath();
      ctx.arc(headProj.sx, headProj.sy, 6, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#89ABB0' : '#243746';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();
    }

    ctx.restore();
  }, [algorithm, currentStep, activeTrajectory]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    anglesRef.current.rotZ += dx * 0.008;
    anglesRef.current.rotX = Math.max(0.2, Math.min(Math.PI / 2 - 0.1, anglesRef.current.rotX + dy * 0.008));
    renderCanvas();
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    renderCanvas();
  }, [renderCanvas]);

  const currentVal = activeTrajectory[currentStep]?.z.toFixed(4) || '0.0000';
  const initialVal = activeTrajectory[0].z.toFixed(2);

  return (
    <div className="relative rounded-xl bg-[#FFFFFF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52] p-4 text-[#243746] dark:text-[#E7E9E6] overflow-hidden">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#DCE4E1] dark:border-[#344A52]">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#668B91] dark:text-[#89ABB0] font-mono">
            <span>{t.rastrigin.badge}</span>
            <span>·</span>
            <span>{t.rastrigin.minimum}</span>
          </div>
          <h4 className="text-base font-bold text-[#243746] dark:text-[#E7E9E6] mt-0.5">
            {t.rastrigin.title}
          </h4>
          <p className="text-[11px] text-[#668B91] dark:text-[#89ABB0] mt-0.5">
            {t.rastrigin.instruction}
          </p>
        </div>

        {/* Algorithm Segmented Selector */}
        <div className="flex items-center gap-1 p-0.5 bg-[#F5F3EF] dark:bg-[#2D3B44] rounded-lg border border-[#DCE4E1] dark:border-[#344A52] self-start sm:self-auto">
          <button
            onClick={() => { setAlgorithm('momentum'); setCurrentStep(0); }}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              algorithm === 'momentum'
                ? 'bg-[#FFFFFF] dark:bg-[#344A52] text-[#243746] dark:text-[#E7E9E6] shadow-xs font-semibold'
                : 'text-[#668B91] dark:text-[#89ABB0] hover:text-[#243746] dark:hover:text-[#E7E9E6]'
            }`}
          >
            {t.rastrigin.algoMomentum}
          </button>
          <button
            onClick={() => { setAlgorithm('pso'); setCurrentStep(0); }}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              algorithm === 'pso'
                ? 'bg-[#FFFFFF] dark:bg-[#344A52] text-[#243746] dark:text-[#E7E9E6] shadow-xs font-semibold'
                : 'text-[#668B91] dark:text-[#89ABB0] hover:text-[#243746] dark:hover:text-[#E7E9E6]'
            }`}
          >
            {t.rastrigin.algoPso}
          </button>
          <button
            onClick={() => { setAlgorithm('genetic'); setCurrentStep(0); }}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              algorithm === 'genetic'
                ? 'bg-[#FFFFFF] dark:bg-[#344A52] text-[#243746] dark:text-[#E7E9E6] shadow-xs font-semibold'
                : 'text-[#668B91] dark:text-[#89ABB0] hover:text-[#243746] dark:hover:text-[#E7E9E6]'
            }`}
          >
            {t.rastrigin.algoGenetic}
          </button>
        </div>
      </div>

      {/* Main View Area */}
      <div className="relative my-3 aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg overflow-hidden bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52]">
        {viewMode === '3d' ? (
          <>
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="w-full h-full cursor-grab active:cursor-grabbing block"
            />
            <div className="absolute bottom-2.5 left-2.5 pointer-events-none px-2 py-0.5 bg-[#FFFFFF]/85 dark:bg-[#2D3B44]/85 backdrop-blur-xs rounded text-[10px] text-[#243746] dark:text-[#E7E9E6] border border-[#DCE4E1] dark:border-[#344A52] font-mono">
              {t.rastrigin.rotateHint}
            </div>

            <div className="absolute top-2.5 right-2.5 px-2.5 py-1.5 bg-[#FFFFFF]/90 dark:bg-[#2D3B44]/90 backdrop-blur-xs rounded-lg border border-[#DCE4E1] dark:border-[#344A52] text-right">
              <div className="text-[9px] text-[#668B91] dark:text-[#89ABB0] uppercase tracking-wider font-mono">
                {t.rastrigin.costLabel}
              </div>
              <div className="text-sm font-bold text-[#243746] dark:text-[#E7E9E6] font-mono tabular-nums">
                {currentVal}
              </div>
              <div className="text-[9px] text-[#668B91] dark:text-[#89ABB0] font-mono mt-0.5">
                {t.rastrigin.iterationLabel} {currentStep}/{maxSteps}
              </div>
            </div>
          </>
        ) : (
          /* Convergence Curve View */
          <div className="p-5 h-full flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#243746] dark:text-[#E7E9E6] font-semibold">
                {t.rastrigin.convergenceTitle}
              </div>
              <p className="text-[11px] text-[#668B91] dark:text-[#89ABB0] mt-0.5">
                {t.rastrigin.convergenceSubtitle}
              </p>
            </div>
            <div className="relative h-44 w-full border-b border-l border-[#DCE4E1] dark:border-[#344A52] flex items-end px-2 pb-1 gap-1.5">
              {activeTrajectory.map((pt, i) => {
                const heightPct = Math.max(4, Math.min(100, (pt.z / activeTrajectory[0].z) * 100));
                const isCurrent = i === currentStep;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                    <div
                      style={{ height: `${heightPct}%` }}
                      className={`w-full rounded-t transition-all ${
                        isCurrent
                          ? 'bg-[#243746] dark:bg-[#89ABB0]'
                          : i < currentStep
                          ? 'bg-[#668B91] dark:bg-[#344A52]'
                          : 'bg-[#DCE4E1] dark:bg-[#2D3B44]'
                      }`}
                    />
                    <span className="text-[8px] font-mono text-[#668B91] dark:text-[#89ABB0]">{i}</span>
                    <div className="absolute -top-6 opacity-0 group-hover:opacity-100 bg-[#243746] dark:bg-[#202C34] text-[#E7E9E6] text-[9px] font-mono px-1 py-0.5 rounded whitespace-nowrap z-10 transition-opacity">
                      {pt.z.toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between text-[11px] text-[#668B91] dark:text-[#89ABB0] font-mono pt-1">
              <span>{t.rastrigin.iterationLabel} 0: {initialVal}</span>
              <span className="text-[#243746] dark:text-[#E7E9E6] font-semibold">
                {t.rastrigin.minReached}: {activeTrajectory[maxSteps].z.toFixed(4)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#243746] hover:bg-[#1a2833] dark:bg-[#89ABB0] dark:hover:bg-[#72979c] text-white dark:text-[#202C34] text-xs font-semibold rounded-lg transition-colors shadow-xs"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? t.rastrigin.pause : t.rastrigin.play}</span>
          </button>

          <button
            onClick={() => {
              setCurrentStep(0);
              setIsPlaying(false);
            }}
            className="p-1.5 text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6] bg-[#F5F3EF] dark:bg-[#2D3B44] border border-[#DCE4E1] dark:border-[#344A52] rounded-lg transition-colors"
            title={t.rastrigin.reset}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <div className="hidden sm:flex items-center gap-2 ml-1 text-xs">
            <span className="text-[11px] text-[#668B91] dark:text-[#89ABB0] font-mono">{t.rastrigin.step}:</span>
            <input
              type="range"
              min="0"
              max={maxSteps}
              value={currentStep}
              onChange={(e) => {
                setCurrentStep(Number(e.target.value));
                setIsPlaying(false);
              }}
              className="w-24 sm:w-28 accent-[#243746] dark:accent-[#89ABB0] h-1.5 bg-[#DCE4E1] dark:bg-[#344A52] rounded-lg cursor-pointer"
            />
            <span className="text-[11px] font-mono text-[#243746] dark:text-[#E7E9E6] tabular-nums">
              {currentStep}/{maxSteps}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center p-0.5 bg-[#F5F3EF] dark:bg-[#2D3B44] rounded-lg border border-[#DCE4E1] dark:border-[#344A52]">
            <button
              onClick={() => setViewMode('3d')}
              className={`px-2.5 py-1 text-xs rounded transition-colors ${
                viewMode === '3d'
                  ? 'bg-[#FFFFFF] dark:bg-[#344A52] text-[#243746] dark:text-[#E7E9E6] font-medium shadow-xs'
                  : 'text-[#668B91] dark:text-[#89ABB0]'
              }`}
            >
              {t.rastrigin.surface3dView}
            </button>
            <button
              onClick={() => setViewMode('convergence')}
              className={`px-2.5 py-1 text-xs rounded transition-colors ${
                viewMode === 'convergence'
                  ? 'bg-[#FFFFFF] dark:bg-[#344A52] text-[#243746] dark:text-[#E7E9E6] font-medium shadow-xs'
                  : 'text-[#668B91] dark:text-[#89ABB0]'
              }`}
            >
              {t.rastrigin.convergenceView}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
