export type BenchmarkMethod = 'sequential' | 'static' | 'tree';

export interface OptimizationRunRow {
  method: BenchmarkMethod;
  workers: number;
  chunkSize: number | null;
  configKey: string;
  status: string;
  valid: boolean;
  elapsedS: number;
  timeToSolutionS: number;
  attempts: number;
  evaluationsPerS: number;
  nonce: number;
  digest: string;
  trial: number;
}

export interface BenchmarkConfigSummary {
  configKey: string;
  method: BenchmarkMethod;
  workers: number;
  chunkSize: number | null;
  labelPt: string;
  labelEn: string;
  shortLabelPt: string;
  shortLabelEn: string;
  medianElapsedS: number;
  medianEvalPerS: number;
  gainVsSeq: number;
  timeSavedPct: number;
  validCount: number;
  totalCount: number;
  runs: OptimizationRunRow[];
  isBest?: boolean;
}

// Exact 35 experimental runs loaded from /assets/aistudio/runs_08098b69.csv
export const OPTIMIZATION_RUNS_CSV: OptimizationRunRow[] = [
  // Trial 1
  { method: 'tree', workers: 4, chunkSize: 16384, configKey: 'tree:4:16384', status: 'found', valid: true, elapsedS: 11.654695, timeToSolutionS: 11.610268, attempts: 10721849, evaluationsPerS: 919959.6, nonce: 10723640, digest: '0000035decbf5f0192c33f91f165eb3b11c9d6f7c3079beb9c529efcc5046151', trial: 1 },
  { method: 'static', workers: 2, chunkSize: null, configKey: 'static:2:0', status: 'found', valid: true, elapsedS: 8.756990, timeToSolutionS: 8.731417, attempts: 4532916, evaluationsPerS: 517634.0, nonce: 19048115, digest: '000003715de2a19dccde5d3d1dfd22ceec260faf042ec9edd72e3d6a1ede0942', trial: 1 },
  { method: 'tree', workers: 2, chunkSize: 131072, configKey: 'tree:2:131072', status: 'found', valid: true, elapsedS: 15.766582, timeToSolutionS: 15.741746, attempts: 10720057, evaluationsPerS: 679922.7, nonce: 10723640, digest: '0000035decbf5f0192c33f91f165eb3b11c9d6f7c3079beb9c529efcc5046151', trial: 1 },
  { method: 'tree', workers: 4, chunkSize: 131072, configKey: 'tree:4:131072', status: 'found', valid: true, elapsedS: 9.364846, timeToSolutionS: 9.333850, attempts: 10931257, evaluationsPerS: 1167265.1, nonce: 10723640, digest: '0000035decbf5f0192c33f91f165eb3b11c9d6f7c3079beb9c529efcc5046151', trial: 1 },
  { method: 'static', workers: 4, chunkSize: null, configKey: 'static:4:0', status: 'found', valid: true, elapsedS: 7.679869, timeToSolutionS: 7.647857, attempts: 9055924, evaluationsPerS: 1179176.9, nonce: 19048115, digest: '000003715de2a19dccde5d3d1dfd22ceec260faf042ec9edd72e3d6a1ede0942', trial: 1 },
  { method: 'tree', workers: 2, chunkSize: 16384, configKey: 'tree:2:16384', status: 'found', valid: true, elapsedS: 15.316546, timeToSolutionS: 15.291643, attempts: 10715705, evaluationsPerS: 699616.3, nonce: 10723640, digest: '0000035decbf5f0192c33f91f165eb3b11c9d6f7c3079beb9c529efcc5046151', trial: 1 },
  { method: 'sequential', workers: 1, chunkSize: null, configKey: 'sequential:1:0', status: 'found', valid: true, elapsedS: 25.600950, timeToSolutionS: 25.600942, attempts: 10723641, evaluationsPerS: 418876.7, nonce: 10723640, digest: '0000035decbf5f0192c33f91f165eb3b11c9d6f7c3079beb9c529efcc5046151', trial: 1 },

  // Trial 2
  { method: 'sequential', workers: 1, chunkSize: null, configKey: 'sequential:1:0', status: 'found', valid: true, elapsedS: 4.920312, timeToSolutionS: 4.920304, attempts: 1990219, evaluationsPerS: 404490.4, nonce: 1990218, digest: '0000015caf969e0f318d09bc3a51b5aa6fe912d182a6b5052810688d64faaa1e', trial: 2 },
  { method: 'static', workers: 2, chunkSize: null, configKey: 'static:2:0', status: 'found', valid: true, elapsedS: 2.598496, timeToSolutionS: 2.576235, attempts: 1785848, evaluationsPerS: 687262.1, nonce: 17656055, digest: '000003e734ffeb27abf04bfd598172f360146ea2ff402bd2df8aa98e3d30a4ce', trial: 2 },
  { method: 'tree', workers: 2, chunkSize: 16384, configKey: 'tree:2:16384', status: 'found', valid: true, elapsedS: 3.122096, timeToSolutionS: 3.099828, attempts: 1988171, evaluationsPerS: 636806.5, nonce: 1990218, digest: '0000015caf969e0f318d09bc3a51b5aa6fe912d182a6b5052810688d64faaa1e', trial: 2 },
  { method: 'tree', workers: 2, chunkSize: 131072, configKey: 'tree:2:131072', status: 'found', valid: true, elapsedS: 2.890777, timeToSolutionS: 2.868008, attempts: 1940811, evaluationsPerS: 671380.4, nonce: 1990218, digest: '0000015caf969e0f318d09bc3a51b5aa6fe912d182a6b5052810688d64faaa1e', trial: 2 },
  { method: 'tree', workers: 4, chunkSize: 16384, configKey: 'tree:4:16384', status: 'found', valid: true, elapsedS: 2.252760, timeToSolutionS: 2.212890, attempts: 1985099, evaluationsPerS: 881185.1, nonce: 1990218, digest: '0000015caf969e0f318d09bc3a51b5aa6fe912d182a6b5052810688d64faaa1e', trial: 2 },
  { method: 'static', workers: 4, chunkSize: null, configKey: 'static:4:0', status: 'found', valid: true, elapsedS: 2.384911, timeToSolutionS: 2.354178, attempts: 2381775, evaluationsPerS: 998685.2, nonce: 25764558, digest: '0000024e04485fc2bb77b9254ec01588fca0dda831e747d5b8493f3928305571', trial: 2 },
  { method: 'tree', workers: 4, chunkSize: 131072, configKey: 'tree:4:131072', status: 'found', valid: true, elapsedS: 2.484639, timeToSolutionS: 2.440887, attempts: 1906763, evaluationsPerS: 767420.5, nonce: 1990218, digest: '0000015caf969e0f318d09bc3a51b5aa6fe912d182a6b5052810688d64faaa1e', trial: 2 },

  // Trial 3
  { method: 'tree', workers: 2, chunkSize: 16384, configKey: 'tree:2:16384', status: 'found', valid: true, elapsedS: 10.445800, timeToSolutionS: 10.419424, attempts: 7246060, evaluationsPerS: 693681.7, nonce: 7245803, digest: '000003ef2ed7053f309d67604b921dc86c2fc2c59ae380cfe9f8b5ae01abfd11', trial: 3 },
  { method: 'tree', workers: 4, chunkSize: 131072, configKey: 'tree:4:131072', status: 'found', valid: true, elapsedS: 8.184010, timeToSolutionS: 8.116904, attempts: 7170540, evaluationsPerS: 876164.6, nonce: 7245803, digest: '000003ef2ed7053f309d67604b921dc86c2fc2c59ae380cfe9f8b5ae01abfd11', trial: 3 },
  { method: 'tree', workers: 2, chunkSize: 131072, configKey: 'tree:2:131072', status: 'found', valid: true, elapsedS: 13.020250, timeToSolutionS: 13.000466, attempts: 7194604, evaluationsPerS: 552570.3, nonce: 7245803, digest: '000003ef2ed7053f309d67604b921dc86c2fc2c59ae380cfe9f8b5ae01abfd11', trial: 3 },
  { method: 'tree', workers: 4, chunkSize: 16384, configKey: 'tree:4:16384', status: 'found', valid: true, elapsedS: 6.468161, timeToSolutionS: 6.439606, attempts: 7245548, evaluationsPerS: 1120186.6, nonce: 7245803, digest: '000003ef2ed7053f309d67604b921dc86c2fc2c59ae380cfe9f8b5ae01abfd11', trial: 3 },
  { method: 'static', workers: 4, chunkSize: null, configKey: 'static:4:0', status: 'found', valid: true, elapsedS: 4.835578, timeToSolutionS: 4.808235, attempts: 5724627, evaluationsPerS: 1183855.8, nonce: 18209234, digest: '000001d1c6666ac0b3a250efdbed60787dfee6de408f40a7ae18318b074f9665', trial: 3 },
  { method: 'sequential', workers: 1, chunkSize: null, configKey: 'sequential:1:0', status: 'found', valid: true, elapsedS: 17.025909, timeToSolutionS: 17.025900, attempts: 7245804, evaluationsPerS: 425575.2, nonce: 7245803, digest: '000003ef2ed7053f309d67604b921dc86c2fc2c59ae380cfe9f8b5ae01abfd11', trial: 3 },
  { method: 'static', workers: 2, chunkSize: null, configKey: 'static:2:0', status: 'found', valid: true, elapsedS: 4.763606, timeToSolutionS: 4.739778, attempts: 2859987, evaluationsPerS: 600382.8, nonce: 18209234, digest: '000001d1c6666ac0b3a250efdbed60787dfee6de408f40a7ae18318b074f9665', trial: 3 },

  // Trial 4
  { method: 'static', workers: 4, chunkSize: null, configKey: 'static:4:0', status: 'found', valid: true, elapsedS: 8.465918, timeToSolutionS: 8.437886, attempts: 9847363, evaluationsPerS: 1163177.2, nonce: 2617666, digest: '00000365d36e1d24f1a58cb41e205970a53f3be8db86732b319d8229daecb1d2', trial: 4 },
  { method: 'static', workers: 2, chunkSize: null, configKey: 'static:2:0', status: 'found', valid: true, elapsedS: 6.926745, timeToSolutionS: 6.904924, attempts: 5211203, evaluationsPerS: 752330.7, nonce: 2617666, digest: '00000365d36e1d24f1a58cb41e205970a53f3be8db86732b319d8229daecb1d2', trial: 4 },
  { method: 'tree', workers: 2, chunkSize: 16384, configKey: 'tree:2:16384', status: 'found', valid: true, elapsedS: 3.727227, timeToSolutionS: 3.707431, attempts: 2622019, evaluationsPerS: 703477.1, nonce: 2617666, digest: '00000365d36e1d24f1a58cb41e205970a53f3be8db86732b319d8229daecb1d2', trial: 4 },
  { method: 'tree', workers: 4, chunkSize: 16384, configKey: 'tree:4:16384', status: 'found', valid: true, elapsedS: 2.664961, timeToSolutionS: 2.635898, attempts: 2617155, evaluationsPerS: 982061.3, nonce: 2617666, digest: '00000365d36e1d24f1a58cb41e205970a53f3be8db86732b319d8229daecb1d2', trial: 4 },
  { method: 'tree', workers: 2, chunkSize: 131072, configKey: 'tree:2:131072', status: 'found', valid: true, elapsedS: 4.636313, timeToSolutionS: 4.614020, attempts: 2649667, evaluationsPerS: 571503.0, nonce: 2617666, digest: '00000365d36e1d24f1a58cb41e205970a53f3be8db86732b319d8229daecb1d2', trial: 4 },
  { method: 'sequential', workers: 1, chunkSize: null, configKey: 'sequential:1:0', status: 'found', valid: true, elapsedS: 5.934794, timeToSolutionS: 5.934787, attempts: 2617667, evaluationsPerS: 441071.3, nonce: 2617666, digest: '00000365d36e1d24f1a58cb41e205970a53f3be8db86732b319d8229daecb1d2', trial: 4 },
  { method: 'tree', workers: 4, chunkSize: 131072, configKey: 'tree:4:131072', status: 'found', valid: true, elapsedS: 2.640857, timeToSolutionS: 2.611364, attempts: 2803779, evaluationsPerS: 1061693.0, nonce: 2617666, digest: '00000365d36e1d24f1a58cb41e205970a53f3be8db86732b319d8229daecb1d2', trial: 4 },

  // Trial 5
  { method: 'sequential', workers: 1, chunkSize: null, configKey: 'sequential:1:0', status: 'found', valid: true, elapsedS: 7.986179, timeToSolutionS: 7.986173, attempts: 3272603, evaluationsPerS: 409783.3, nonce: 3272602, digest: '00000213f9a2f468f24d0672626106f93e0afb751324c815f398eacf567ce432', trial: 5 },
  { method: 'tree', workers: 4, chunkSize: 131072, configKey: 'tree:4:131072', status: 'found', valid: true, elapsedS: 3.429191, timeToSolutionS: 3.402473, attempts: 3456667, evaluationsPerS: 1008012.2, nonce: 3272602, digest: '00000213f9a2f468f24d0672626106f93e0afb751324c815f398eacf567ce432', trial: 5 },
  { method: 'static', workers: 4, chunkSize: null, configKey: 'static:4:0', status: 'found', valid: true, elapsedS: 11.611742, timeToSolutionS: 11.578708, attempts: 13092357, evaluationsPerS: 1127510.1, nonce: 12045060, digest: '000001dbb4d7c5ddf582e9c504f5a21d222b3c74e1cc1d3173fe511bf7986489', trial: 5 },
  { method: 'tree', workers: 2, chunkSize: 131072, configKey: 'tree:2:131072', status: 'found', valid: true, elapsedS: 4.761428, timeToSolutionS: 4.739263, attempts: 3344027, evaluationsPerS: 702316.0, nonce: 3272602, digest: '00000213f9a2f468f24d0672626106f93e0afb751324c815f398eacf567ce432', trial: 5 },
  { method: 'static', workers: 2, chunkSize: null, configKey: 'static:2:0', status: 'found', valid: true, elapsedS: 11.057525, timeToSolutionS: 11.028956, attempts: 6502555, evaluationsPerS: 588066.1, nonce: 3272602, digest: '00000213f9a2f468f24d0672626106f93e0afb751324c815f398eacf567ce432', trial: 5 },
  { method: 'tree', workers: 2, chunkSize: 16384, configKey: 'tree:2:16384', status: 'found', valid: true, elapsedS: 4.523246, timeToSolutionS: 4.503513, attempts: 3282075, evaluationsPerS: 725601.8, nonce: 3272602, digest: '00000213f9a2f468f24d0672626106f93e0afb751324c815f398eacf567ce432', trial: 5 },
  { method: 'tree', workers: 4, chunkSize: 16384, configKey: 'tree:4:16384', status: 'found', valid: true, elapsedS: 3.212775, timeToSolutionS: 3.180756, attempts: 3271067, evaluationsPerS: 1018143.7, nonce: 3272602, digest: '00000213f9a2f468f24d0672626106f93e0afb751324c815f398eacf567ce432', trial: 5 },
];

function computeMedian(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

const CONFIG_DEFINITIONS: Array<{
  configKey: string;
  method: BenchmarkMethod;
  workers: number;
  chunkSize: number | null;
  labelPt: string;
  labelEn: string;
  shortLabelPt: string;
  shortLabelEn: string;
  isBest?: boolean;
}> = [
  {
    configKey: 'sequential:1:0',
    method: 'sequential',
    workers: 1,
    chunkSize: null,
    labelPt: 'Sequencial · 1 processo',
    labelEn: 'Sequential · 1 process',
    shortLabelPt: 'Seq (1p)',
    shortLabelEn: 'Seq (1p)',
  },
  {
    configKey: 'static:2:0',
    method: 'static',
    workers: 2,
    chunkSize: null,
    labelPt: 'Divisão fixa · 2 processos',
    labelEn: 'Fixed split · 2 processes',
    shortLabelPt: 'Fixa 2p',
    shortLabelEn: 'Fixed 2p',
  },
  {
    configKey: 'static:4:0',
    method: 'static',
    workers: 4,
    chunkSize: null,
    labelPt: 'Divisão fixa · 4 processos',
    labelEn: 'Fixed split · 4 processes',
    shortLabelPt: 'Fixa 4p',
    shortLabelEn: 'Fixed 4p',
  },
  {
    configKey: 'tree:2:131072',
    method: 'tree',
    workers: 2,
    chunkSize: 131072,
    labelPt: 'TREE · 2 proc · bloco 131.072',
    labelEn: 'TREE · 2 proc · block 131,072',
    shortLabelPt: 'TREE 2p (131k)',
    shortLabelEn: 'TREE 2p (131k)',
  },
  {
    configKey: 'tree:2:16384',
    method: 'tree',
    workers: 2,
    chunkSize: 16384,
    labelPt: 'TREE · 2 proc · bloco 16.384',
    labelEn: 'TREE · 2 proc · block 16,384',
    shortLabelPt: 'TREE 2p (16k)',
    shortLabelEn: 'TREE 2p (16k)',
  },
  {
    configKey: 'tree:4:131072',
    method: 'tree',
    workers: 4,
    chunkSize: 131072,
    labelPt: 'TREE · 4 proc · bloco 131.072',
    labelEn: 'TREE · 4 proc · block 131,072',
    shortLabelPt: 'TREE 4p (131k)',
    shortLabelEn: 'TREE 4p (131k)',
  },
  {
    configKey: 'tree:4:16384',
    method: 'tree',
    workers: 4,
    chunkSize: 16384,
    labelPt: 'TREE · 4 proc · bloco 16.384',
    labelEn: 'TREE · 4 proc · block 16,384',
    shortLabelPt: 'TREE 4p (16k)',
    shortLabelEn: 'TREE 4p (16k)',
    isBest: true,
  },
];

const sequentialRuns = OPTIMIZATION_RUNS_CSV.filter((r) => r.configKey === 'sequential:1:0');
export const SEQUENTIAL_MEDIAN_S = computeMedian(sequentialRuns.map((r) => r.elapsedS));

export const BENCHMARK_SUMMARIES: BenchmarkConfigSummary[] = CONFIG_DEFINITIONS.map((def) => {
  const runs = OPTIMIZATION_RUNS_CSV.filter((r) => r.configKey === def.configKey).sort(
    (a, b) => a.trial - b.trial
  );
  const medianElapsedS = computeMedian(runs.map((r) => r.elapsedS));
  const medianEvalPerS = computeMedian(runs.map((r) => r.evaluationsPerS));
  const gainVsSeq = SEQUENTIAL_MEDIAN_S / medianElapsedS;
  const timeSavedPct = ((SEQUENTIAL_MEDIAN_S - medianElapsedS) / SEQUENTIAL_MEDIAN_S) * 100;

  return {
    ...def,
    medianElapsedS,
    medianEvalPerS,
    gainVsSeq,
    timeSavedPct,
    validCount: runs.filter((r) => r.valid).length,
    totalCount: runs.length,
    runs,
  };
});
