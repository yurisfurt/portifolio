import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, RotateCcw, Eye, Code, ChevronRight } from 'lucide-react';

interface RastriginSurface3DProps {
  onOpenDetails?: () => void;
}

// Rastrigin function definition: f(x, y) = 20 + (x^2 - 10*cos(2*pi*x)) + (y^2 - 10*cos(2*pi*y))
function rastrigin(x: number, y: number): number {
  const A = 10;
  return 2 * A + (x * x - A * Math.cos(2 * Math.PI * x)) + (y * y - A * Math.cos(2 * Math.PI * y));
}

// Colormap function matching the visual reference (cyan -> emerald -> yellow -> orange -> salmon)
function getColor(z: number, minZ: number, maxZ: number): { r: number; g: number; b: number; hex: string } {
  const t = Math.max(0, Math.min(1, (z - minZ) / (maxZ - minZ)));
  let r: number, g: number, b: number;
  
  if (t < 0.25) {
    // deep teal to cyan
    const s = t / 0.25;
    r = Math.round(14 + s * (30 - 14));
    g = Math.round(140 + s * (210 - 140));
    b = Math.round(200 + s * (255 - 200));
  } else if (t < 0.5) {
    // cyan to light lime/green
    const s = (t - 0.25) / 0.25;
    r = Math.round(30 + s * (180 - 30));
    g = Math.round(210 + s * (235 - 210));
    b = Math.round(255 - s * (135));
  } else if (t < 0.75) {
    // lime to warm yellow
    const s = (t - 0.5) / 0.25;
    r = Math.round(180 + s * (245 - 180));
    g = Math.round(235 - s * (75));
    b = Math.round(120 - s * (60));
  } else {
    // yellow to coral/orange
    const s = (t - 0.75) / 0.25;
    r = Math.round(245 + s * (10));
    g = Math.round(160 - s * (80));
    b = Math.round(60 + s * (40));
  }
  
  return { r, g, b, hex: `rgb(${r},${g},${b})` };
}

type AlgorithmType = 'momentum' | 'pso' | 'genetic';

export const RastriginSurface3D: React.FC<RastriginSurface3DProps> = ({ onOpenDetails }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('momentum');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'3d' | 'convergence'>('3d');
  
  // Camera rotation angles
  const anglesRef = useRef({ rotX: 55 * (Math.PI / 180), rotZ: -35 * (Math.PI / 180) });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  // Precomputed simulated trajectories for each algorithm
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

  // Animation loop for step progression
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev >= maxSteps ? 0 : prev + 1));
    }, 450);
    return () => clearInterval(interval);
  }, [isPlaying, maxSteps]);

  // Main 3D Canvas Rendering
  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI
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

    // Deep dark backdrop container
    const isDark = document.documentElement.classList.contains('dark');
    ctx.fillStyle = isDark ? '#0b1017' : '#f8fafc';
    ctx.fillRect(0, 0, width, height);

    // Grid resolution
    const N = 28;
    const range = 2.4;
    const step = (range * 2) / N;

    const rotX = anglesRef.current.rotX;
    const rotZ = anglesRef.current.rotZ;

    // 3D projection function
    const project = (x: number, y: number, z: number) => {
      // Rotation around Z
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);
      const x1 = x * cosZ - y * sinZ;
      const y1 = x * sinZ + y * cosZ;

      // Rotation around X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y1 * cosX - (z * 0.038) * sinX;
      const z2 = y1 * sinX + (z * 0.038) * cosX;

      // Scale & translation to screen
      const scale = Math.min(width, height) * 0.17;
      const sx = width / 2 + x1 * scale;
      const sy = height / 2 + y2 * scale - 10;
      return { sx, sy, depth: z2 };
    };

    // Calculate grid and quad polygons
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

    // Sort by depth (Painter's algorithm: draw farthest first)
    quads.sort((a, b) => a.depth - b.depth);

    // Draw shaded surface polygons
    for (const quad of quads) {
      const color = getColor(quad.avgZ, minZ, maxZ);
      ctx.beginPath();
      ctx.moveTo(quad.p1.sx, quad.p1.sy);
      ctx.lineTo(quad.p2.sx, quad.p2.sy);
      ctx.lineTo(quad.p3.sx, quad.p3.sy);
      ctx.lineTo(quad.p4.sx, quad.p4.sy);
      ctx.closePath();

      // Shaded fill with slight transparency
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.88)`;
      ctx.fill();

      // Wireframe contour lines
      ctx.lineWidth = 0.55;
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
      ctx.stroke();
    }

    // Draw the Optimization Trajectory
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
      ctx.strokeStyle = '#090d12';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      // Inner highlight line for high contrast
      ctx.lineWidth = 2.0;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Draw intermediate path nodes
      visiblePoints.forEach((pt, idx) => {
        const p = project(pt.x, pt.y, pt.z);
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, idx === 0 ? 4.5 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = idx === 0 ? '#10b981' : '#090d12';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
      });

      // Draw current active head position (the red search head as in the mockup!)
      const currentPoint = visiblePoints[visiblePoints.length - 1];
      const headProj = project(currentPoint.x, currentPoint.y, currentPoint.z);

      // Red active marker
      ctx.beginPath();
      ctx.arc(headProj.sx, headProj.sy, 6.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ef4444';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Direction vector arrow if moving
      if (visiblePoints.length > 1) {
        const prevPoint = visiblePoints[visiblePoints.length - 2];
        const prevProj = project(prevPoint.x, prevPoint.y, prevPoint.z);
        const dx = headProj.sx - prevProj.sx;
        const dy = headProj.sy - prevProj.sy;
        const len = Math.sqrt(dx * dx + dy * dy);
        if (len > 2) {
          const arrowLen = 14;
          const tox = headProj.sx + (dx / len) * arrowLen;
          const toy = headProj.sy + (dy / len) * arrowLen;

          ctx.beginPath();
          ctx.moveTo(headProj.sx, headProj.sy);
          ctx.lineTo(tox, toy);
          ctx.lineWidth = 2.5;
          ctx.strokeStyle = '#ef4444';
          ctx.stroke();
        }
      }
    }

    ctx.restore();
  }, [algorithm, currentStep, activeTrajectory]);

  // Handle Canvas mouse drag to rotate 3D view
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
    <div className="relative rounded-2xl bg-[#0d131c] dark:bg-[#0d131c] border border-slate-800/80 p-5 text-slate-100 overflow-hidden shadow-xl">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono font-medium">
            <span>Rastrigin Test Function</span>
            <span className="text-slate-600">·</span>
            <span>f(0, 0) = 0</span>
            <span className="text-slate-600">·</span>
            <span className="hidden sm:inline">2D Global Minimum</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Simulador de Otimização Multimodal
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Arraste com o mouse para rotacionar a superfície tridimensional 360°
          </p>
        </div>

        {/* Algorithm Segmented Selector */}
        <div className="flex items-center gap-1 p-1 bg-slate-900/90 rounded-lg border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => { setAlgorithm('momentum'); setCurrentStep(0); }}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              algorithm === 'momentum' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Gradiente c/ Momentum
          </button>
          <button
            onClick={() => { setAlgorithm('pso'); setCurrentStep(0); }}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              algorithm === 'pso' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Particle Swarm (PSO)
          </button>
          <button
            onClick={() => { setAlgorithm('genetic'); setCurrentStep(0); }}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              algorithm === 'genetic' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Genético (AG)
          </button>
        </div>
      </div>

      {/* Main View Area: 3D Surface or Convergence Curve */}
      <div className="relative my-4 aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#090e15] border border-slate-800/80">
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
            {/* Overlay hint */}
            <div className="absolute bottom-3 left-3 pointer-events-none px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md text-[11px] text-slate-300 border border-white/10 font-mono">
              Rotacionar: Clique e arraste
            </div>
            
            {/* Live step metrics badge */}
            <div className="absolute top-3 right-3 px-3 py-2 bg-slate-950/80 backdrop-blur-md rounded-lg border border-slate-800 text-right">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Custo f(x, y)</div>
              <div className="text-base font-bold text-emerald-400 font-mono tabular-nums">
                {currentVal}
              </div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                Iteração {currentStep}/{maxSteps}
              </div>
            </div>
          </>
        ) : (
          /* Convergence Curve Chart View */
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-emerald-400">Curva de Convergência da Função Objetivo</div>
              <p className="text-xs text-slate-400 mt-1">Evolução do erro até o mínimo global f(0,0)=0</p>
            </div>
            <div className="relative h-48 w-full border-b border-l border-slate-700 flex items-end px-2 pb-1 gap-2">
              {activeTrajectory.map((pt, i) => {
                const heightPct = Math.max(4, Math.min(100, (pt.z / activeTrajectory[0].z) * 100));
                const isCurrent = i === currentStep;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                    <div
                      style={{ height: `${heightPct}%` }}
                      className={`w-full rounded-t transition-all ${
                        isCurrent
                          ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                          : i < currentStep
                          ? 'bg-emerald-600/60'
                          : 'bg-slate-800'
                      }`}
                    />
                    <span className="text-[9px] font-mono text-slate-500">{i}</span>
                    <div className="absolute -top-7 opacity-0 group-hover:opacity-100 bg-slate-900 border border-slate-700 text-[10px] font-mono px-1.5 py-0.5 rounded whitespace-nowrap z-10 transition-opacity">
                      {pt.z.toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between text-xs text-slate-400 font-mono pt-2">
              <span>Iteração 0: {initialVal}</span>
              <span className="text-emerald-400 font-semibold">Mínimo alcançado: {activeTrajectory[maxSteps].z.toFixed(4)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        {/* Playback Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold rounded-lg transition-colors shadow-sm"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pausar' : 'Executar'}</span>
          </button>

          <button
            onClick={() => {
              setCurrentStep(0);
              setIsPlaying(false);
            }}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg transition-colors"
            title="Reiniciar Simulação"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Step slider */}
          <div className="hidden sm:flex items-center gap-2 ml-2">
            <span className="text-[11px] text-slate-400 font-mono">Passo:</span>
            <input
              type="range"
              min="0"
              max={maxSteps}
              value={currentStep}
              onChange={(e) => {
                setCurrentStep(Number(e.target.value));
                setIsPlaying(false);
              }}
              className="w-24 sm:w-32 accent-emerald-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <span className="text-[11px] font-mono text-slate-300 w-8 tabular-nums">
              {currentStep}/{maxSteps}
            </span>
          </div>
        </div>

        {/* View toggle & details modal trigger */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-0.5 bg-slate-900 rounded-lg border border-slate-800">
            <button
              onClick={() => setViewMode('3d')}
              className={`px-2.5 py-1 text-xs rounded transition-colors ${
                viewMode === '3d' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Superfície 3D
            </button>
            <button
              onClick={() => setViewMode('convergence')}
              className={`px-2.5 py-1 text-xs rounded transition-colors ${
                viewMode === 'convergence' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Convergência
            </button>
          </div>

          {onOpenDetails && (
            <button
              onClick={onOpenDetails}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              <Code className="w-3.5 h-3.5 text-emerald-400" />
              <span>Código & Estudo</span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
