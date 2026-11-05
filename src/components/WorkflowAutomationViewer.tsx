import React, { useState } from 'react';
import { Play, CheckCircle2, AlertCircle, Database, Bell, ArrowRight, Code2, RefreshCw, FileText } from 'lucide-react';

interface WorkflowAutomationViewerProps {
  onOpenDetails?: () => void;
}

interface WorkflowNode {
  id: string;
  label: string;
  type: string;
  icon: 'webhook' | 'code' | 'filter' | 'db' | 'alert';
  status: 'idle' | 'running' | 'success';
  duration: string;
  details: string;
}

export const WorkflowAutomationViewer: React.FC<WorkflowAutomationViewerProps> = ({ onOpenDetails }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [selectedPayload, setSelectedPayload] = useState<'input' | 'transformed' | 'output'>('transformed');

  const nodes: WorkflowNode[] = [
    {
      id: 'n1',
      label: 'Webhook Trigger',
      type: 'POST /v1/telemetria',
      icon: 'webhook',
      status: activeStep >= 0 ? (activeStep === 0 && isRunning ? 'running' : 'success') : 'idle',
      duration: '18ms',
      details: 'Recebe payloads JSON assíncronos com validação HMAC de assinatura.'
    },
    {
      id: 'n2',
      label: 'Tratamento & Schema',
      type: 'Python / Pandas Sanitizer',
      icon: 'code',
      status: activeStep >= 1 ? (activeStep === 1 && isRunning ? 'running' : 'success') : 'idle',
      duration: '85ms',
      details: 'Tipagem de campos, remoção de nulos e normalização de timestamps ISO.'
    },
    {
      id: 'n3',
      label: 'Regras de Negócio',
      type: 'Classificação Operacional',
      icon: 'filter',
      status: activeStep >= 2 ? (activeStep === 2 && isRunning ? 'running' : 'success') : 'idle',
      duration: '42ms',
      details: 'Verificação de desvios no takt time e checagem de limites de controle estatístico (CEP).'
    },
    {
      id: 'n4',
      label: 'PostgreSQL DW',
      type: 'Upsert Transacional',
      icon: 'db',
      status: activeStep >= 3 ? (activeStep === 3 && isRunning ? 'running' : 'success') : 'idle',
      duration: '64ms',
      details: 'Gravação idempotente com chave primária composta e atualização de índices.'
    },
    {
      id: 'n5',
      label: 'Notificação & BI',
      type: 'Alert Dispatcher',
      icon: 'alert',
      status: activeStep >= 4 ? (activeStep === 4 && isRunning ? 'running' : 'success') : 'idle',
      duration: '31ms',
      details: 'Disparo de alerta no canal corporativo e trigger de webhook para atualização do Power BI.'
    }
  ];

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 4) {
          clearInterval(stepInterval);
          setIsRunning(false);
          return 4;
        }
        return prev + 1;
      });
    }, 450);
  };

  const samplePayloads = {
    input: {
      timestamp: '2026-11-05T14:22:10.450Z',
      sensor_id: 'CNC-FLEX-04',
      batch_code: 'LOT-9921',
      cycle_time_sec: 48.6,
      oee_instant: 0.892,
      temperature_c: 64.2,
      reject_count: 0
    },
    transformed: {
      event_id: 'evt_9921_04b',
      processed_at: '2026-11-05T14:22:10.535Z',
      machine_unit: 'CNC-FLEX-04',
      metrics: {
        takt_variance_pct: -3.2,
        status: 'OPERATING_OPTIMAL',
        alert_required: false
      },
      audit: {
        hash: 'e48a19b2fc',
        latency_ms: 85
      }
    },
    output: {
      db_status: 'COMMITTED',
      rows_affected: 1,
      webhook_delivered: true,
      execution_time_total_ms: 240,
      notification: 'Dispatched to #operacoes-alertas'
    }
  };

  return (
    <div className="relative rounded-2xl bg-[#0d131c] dark:bg-[#0d131c] border border-slate-800/80 p-5 text-slate-100 overflow-hidden shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-teal-400 font-mono font-medium">
            <span>n8n Engine</span>
            <span className="text-slate-600">·</span>
            <span>ETL Assíncrono</span>
            <span className="text-slate-600">·</span>
            <span>Alta Disponibilidade</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Pipeline de Automação & Ingestão de Dados
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Orquestração orientada a eventos para integração de chão de fábrica e relatórios
          </p>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunSimulation}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-500 hover:bg-teal-400 disabled:opacity-50 text-slate-950 text-xs font-semibold rounded-lg transition-colors shadow-sm"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Processando...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Simular Execução</span>
              </>
            )}
          </button>

          {onOpenDetails && (
            <button
              onClick={onOpenDetails}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Arquitetura</span>
            </button>
          )}
        </div>
      </div>

      {/* Visual Workflow Canvas */}
      <div className="my-5 p-4 rounded-xl bg-[#090e15] border border-slate-800/80">
        <div className="text-[11px] font-mono text-slate-400 mb-3 flex items-center justify-between">
          <span>FLUXO DE NÓS (WORKFLOW GRAPH)</span>
          <span className="text-teal-400">
            {activeStep === 4 ? 'Status: 100% Concluído (240ms)' : isRunning ? 'Executando nós...' : 'Aguardando gatilho'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {nodes.map((node, index) => {
            const isStepActive = activeStep === index;
            const isPassed = activeStep > index;

            return (
              <div
                key={node.id}
                className={`relative p-3.5 rounded-xl border transition-all ${
                  isStepActive
                    ? 'bg-teal-950/40 border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.25)]'
                    : isPassed
                    ? 'bg-slate-900/90 border-teal-500/50'
                    : 'bg-slate-900/50 border-slate-800/80 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-semibold text-slate-400">
                    Nó 0{index + 1}
                  </span>
                  {isPassed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  ) : isStepActive ? (
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                  )}
                </div>

                <div className="text-sm font-semibold text-slate-200 truncate">{node.label}</div>
                <div className="text-[11px] text-teal-400/90 font-mono mt-0.5 truncate">{node.type}</div>
                <div className="text-[10px] text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {node.details}
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Latência</span>
                  <span className="text-slate-300 font-semibold">{node.duration}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* JSON Payload Inspector */}
      <div className="rounded-xl bg-[#090e15] border border-slate-800/80 p-4">
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-mono font-medium text-slate-300">Inspetor de Dados Transacionais</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSelectedPayload('input')}
              className={`px-2 py-0.5 text-[11px] rounded font-mono transition-colors ${
                selectedPayload === 'input' ? 'bg-slate-800 text-teal-300 border border-teal-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Payload Entrada
            </button>
            <button
              onClick={() => setSelectedPayload('transformed')}
              className={`px-2 py-0.5 text-[11px] rounded font-mono transition-colors ${
                selectedPayload === 'transformed' ? 'bg-slate-800 text-teal-300 border border-teal-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Tratado (Pandas)
            </button>
            <button
              onClick={() => setSelectedPayload('output')}
              className={`px-2 py-0.5 text-[11px] rounded font-mono transition-colors ${
                selectedPayload === 'output' ? 'bg-slate-800 text-teal-300 border border-teal-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Resposta DW
            </button>
          </div>
        </div>

        <pre className="p-3 bg-black/50 rounded-lg text-[11px] font-mono text-teal-300/90 overflow-x-auto leading-relaxed border border-slate-900">
          {JSON.stringify(samplePayloads[selectedPayload], null, 2)}
        </pre>
      </div>
    </div>
  );
};
