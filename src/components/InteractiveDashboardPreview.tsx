import React, { useState } from 'react';
import { TrendingUp, BarChart3, Filter, ArrowUpRight, Layers, Download, CheckCircle2 } from 'lucide-react';

interface InteractiveDashboardPreviewProps {
  onOpenDetails?: () => void;
}

type Period = '7d' | '30d' | 'trimestre';

export const InteractiveDashboardPreview: React.FC<InteractiveDashboardPreviewProps> = ({ onOpenDetails }) => {
  const [period, setPeriod] = useState<Period>('30d');
  const [activeMetric, setActiveMetric] = useState<'receita' | 'eficiencia' | 'pedidos'>('receita');

  const periodData = {
    '7d': {
      revenue: 'R$ 14.280,00',
      revenueChange: '+8.4%',
      efficiency: '96.1%',
      efficiencyChange: '+1.8%',
      orders: '284 un',
      ordersChange: '+12%',
      chartPoints: [32, 45, 58, 51, 68, 72, 85],
      categories: [
        { name: 'Linha A (Alta Precisão)', value: 42, color: 'bg-emerald-500' },
        { name: 'Linha B (Série Padrão)', value: 33, color: 'bg-teal-500' },
        { name: 'Linha C (Customizados)', value: 25, color: 'bg-cyan-500' }
      ]
    },
    '30d': {
      revenue: 'R$ 54.820,00',
      revenueChange: '+14.2%',
      efficiency: '94.8%',
      efficiencyChange: '+3.1%',
      orders: '1.140 un',
      ordersChange: '+18.5%',
      chartPoints: [40, 48, 52, 65, 59, 78, 88],
      categories: [
        { name: 'Linha A (Alta Precisão)', value: 46, color: 'bg-emerald-500' },
        { name: 'Linha B (Série Padrão)', value: 31, color: 'bg-teal-500' },
        { name: 'Linha C (Customizados)', value: 23, color: 'bg-cyan-500' }
      ]
    },
    'trimestre': {
      revenue: 'R$ 168.450,00',
      revenueChange: '+22.0%',
      efficiency: '93.5%',
      efficiencyChange: '+4.5%',
      orders: '3.420 un',
      ordersChange: '+16.2%',
      chartPoints: [35, 50, 62, 70, 81, 92, 98],
      categories: [
        { name: 'Linha A (Alta Precisão)', value: 48, color: 'bg-emerald-500' },
        { name: 'Linha B (Série Padrão)', value: 30, color: 'bg-teal-500' },
        { name: 'Linha C (Customizados)', value: 22, color: 'bg-cyan-500' }
      ]
    }
  };

  const current = periodData[period];

  return (
    <div className="relative rounded-2xl bg-[#0d131c] dark:bg-[#0d131c] border border-slate-800/80 p-5 text-slate-100 overflow-hidden shadow-xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono font-medium">
            <span>Power BI & Data Warehouse</span>
            <span className="text-slate-600">·</span>
            <span>Visão Executiva</span>
            <span className="text-slate-600">·</span>
            <span>KPIs em Tempo Real</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Painel de Controle de Performance Operacional
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Métricas consolidadas com drill-down por célula de produção e lucratividade
          </p>
        </div>

        {/* Period Selector Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setPeriod('7d')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              period === '7d' ? 'bg-slate-800 text-emerald-400 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            7 Dias
          </button>
          <button
            onClick={() => setPeriod('30d')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              period === '30d' ? 'bg-slate-800 text-emerald-400 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            30 Dias
          </button>
          <button
            onClick={() => setPeriod('trimestre')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              period === 'trimestre' ? 'bg-slate-800 text-emerald-400 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Trimestre
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
        {/* Metric 1 */}
        <div
          onClick={() => setActiveMetric('receita')}
          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
            activeMetric === 'receita'
              ? 'bg-slate-900/90 border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Receita Operacional</span>
            <span className="text-emerald-400 font-mono text-[11px] font-semibold">{current.revenueChange}</span>
          </div>
          <div className="text-xl font-bold text-white font-mono mt-1.5 tabular-nums">
            {current.revenue}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Margem líquida estimada 34.8%</div>
        </div>

        {/* Metric 2 */}
        <div
          onClick={() => setActiveMetric('eficiencia')}
          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
            activeMetric === 'eficiencia'
              ? 'bg-slate-900/90 border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Eficiência Geral (OEE)</span>
            <span className="text-emerald-400 font-mono text-[11px] font-semibold">{current.efficiencyChange}</span>
          </div>
          <div className="text-xl font-bold text-white font-mono mt-1.5 tabular-nums">
            {current.efficiency}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Meta corporativa: &gt; 92.0%</div>
        </div>

        {/* Metric 3 */}
        <div
          onClick={() => setActiveMetric('pedidos')}
          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
            activeMetric === 'pedidos'
              ? 'bg-slate-900/90 border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Volume Produzido</span>
            <span className="text-emerald-400 font-mono text-[11px] font-semibold">{current.ordersChange}</span>
          </div>
          <div className="text-xl font-bold text-white font-mono mt-1.5 tabular-nums">
            {current.orders}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Lead time médio: 1.4 dias</div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="p-4 rounded-xl bg-[#090e15] border border-slate-800/80 mb-4">
        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">
              Tendência de {activeMetric === 'receita' ? 'Faturamento' : activeMetric === 'eficiencia' ? 'OEE Operacional' : 'Throughput de Itens'}
            </span>
            <span className="text-slate-500 font-mono">· Curva Real vs Meta</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 font-medium">
            Em conformidade com SLA
          </span>
        </div>

        {/* SVG Curve Chart */}
        <div className="h-40 w-full relative flex items-end">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 700 160" preserveAspectRatio="none">
            {/* Gridlines */}
            <line x1="0" y1="40" x2="700" y2="40" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="0" y1="80" x2="700" y2="80" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="0" y1="120" x2="700" y2="120" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />

            {/* Target line */}
            <line x1="0" y1="50" x2="700" y2="50" stroke="#059669" strokeDasharray="6 4" strokeWidth="1.5" opacity="0.6" />

            {/* Gradient Area Fill */}
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Curve path */}
            {(() => {
              const pts = current.chartPoints;
              const stepX = 700 / (pts.length - 1);
              const pathD = pts
                .map((val, idx) => {
                  const x = idx * stepX;
                  const y = 150 - (val / 100) * 120;
                  return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
                })
                .join(' ');

              const areaD = `${pathD} L 700 160 L 0 160 Z`;

              return (
                <>
                  <path d={areaD} fill="url(#chartGradient)" />
                  <path d={pathD} fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  {pts.map((val, idx) => {
                    const x = idx * stepX;
                    const y = 150 - (val / 100) * 120;
                    return (
                      <circle key={idx} cx={x} cy={y} r="4" fill="#0d131c" stroke="#10b981" strokeWidth="2.5" />
                    );
                  })}
                </>
              );
            })()}
          </svg>
        </div>

        <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-800/60 mt-2">
          <span>Semana 01</span>
          <span>Semana 02</span>
          <span>Semana 03</span>
          <span>Semana 04</span>
        </div>
      </div>

      {/* Category breakdown bar */}
      <div className="p-3.5 rounded-xl bg-[#090e15] border border-slate-800/80">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-medium text-slate-300">Distribuição por Célula Produtiva</span>
          <span className="text-[11px] font-mono text-slate-400">100% Capacidade Alocada</span>
        </div>
        <div className="w-full h-2.5 bg-slate-800 rounded-full flex overflow-hidden gap-0.5">
          {current.categories.map((cat, i) => (
            <div key={i} style={{ width: `${cat.value}%` }} className={`${cat.color} h-full transition-all`} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-2.5 text-[11px] text-slate-400">
          {current.categories.map((cat, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${cat.color}`} />
              <span>{cat.name}</span>
              <span className="font-mono font-semibold text-slate-200">({cat.value}%)</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer trigger */}
      {onOpenDetails && (
        <div className="flex justify-end pt-3">
          <button
            onClick={onOpenDetails}
            className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <span>Ver Arquitetura e Modelagem Dimensional</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
