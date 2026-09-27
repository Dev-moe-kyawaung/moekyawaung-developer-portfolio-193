import React, { useState } from 'react';
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

interface Postmortem {
  id: string;
  incidentCode: string;
  date: string;
  severity: 'P1 - Critical' | 'P2 - High' | 'P3 - Moderate';
  title: string;
  system: string;
  symptom: string;
  rootCause: string;
  remediation: string;
  architecturalFix: string;
  deltaResult: string;
}

const POSTMORTEMS_DATA: Postmortem[] = [
  {
    id: 'pm-polling-drop',
    incidentCode: 'INC-2023-084',
    date: 'March 14, 2023',
    severity: 'P1 - Critical',
    title: 'Cellular Flapping & 12-Second Polling Cascade',
    system: 'PulseSync Android / Mobile Field Terminal',
    symptom: 'Field technicians in border zones experienced 72% sync failure rate and high battery drain caused by tight HTTP polling loops.',
    rootCause: 'Naive TimerTask polling every 12s caused cellular radio awake locks (WakeLocks). Cellular state flapping triggered concurrent duplicate requests, overflowing server connections.',
    remediation: 'Immediately deployed server-side request throttling and converted client to backoff jitter.',
    architecturalFix: 'Engineered Write-Ahead Logging (WAL) in local Room SQLite, shifting to Push notifications via FCM + WebSocket delta streaming. Sync runs only upon guaranteed local commit.',
    deltaResult: 'Sync success climbed to 99.8%; mobile radio power draw decreased by 64%; server API calls dropped by 97.7%.'
  },
  {
    id: 'pm-printer-overflow',
    incidentCode: 'INC-2023-219',
    date: 'November 28, 2023',
    severity: 'P1 - Critical',
    title: 'POS Ultimate ESC/POS Thermal Buffer Overflow During Black Friday Bursts',
    system: 'POS Ultimate Pro Max / Hardware Peripheral Module',
    symptom: 'During rapid split-tender transactions, the cash register Android tablet threw Application Not Responding (ANR) and frozen checkout screens.',
    rootCause: 'Thermal receipt printer USB serial write was invoked directly on the Android Main Dispatcher. When printer paper jammed, the write blocked the UI thread indefinitely.',
    remediation: 'Restarted hardware daemon and installed emergency paper sensor safeguards.',
    architecturalFix: 'Created dedicated isolated Gradle module `:core:hardware:printer` with a Kotlin Coroutine Channel queue. UI posts print receipts to non-blocking memory queue; hardware worker runs on `Dispatchers.IO` with 2.5s circuit breaker timeout.',
    deltaResult: 'ANRs eliminated completely (0.00%); checkout transaction speed surged from 3.8s down to 0.9s per customer.'
  },
  {
    id: 'pm-tflite-deadzone',
    incidentCode: 'INC-2024-102',
    date: 'May 09, 2024',
    severity: 'P2 - High',
    title: 'Cross-Border Bilingual Translation Latency Stall',
    system: 'Lens Lite / MoekyawTranslator AI Hybrid',
    symptom: 'Users navigating mountainous crossing points between Tachileik and Mae Sai suffered 1,400ms+ latency and frequent network timeout errors.',
    rootCause: 'Text translation relied purely on cloud LLM inference endpoints. Cloud handshake took over 1.2s on weak 2G/3G border cells.',
    remediation: 'Configured local caching for top 5,000 frequent merchant vocabulary strings.',
    architecturalFix: 'Quantized INT8 on-device TensorFlow Lite model integrated into Android NDK C++ runtime for sub-40ms local inference, reserving Claude API for nuanced grammatical refinement upon stable 4G/WiFi reconnect.',
    deltaResult: 'Instant offline preview rendered in 42ms; cloud token expenditure reduced by 77.4%; user retention jumped 116%.'
  }
];

export const ArchitecturePostmortems: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(POSTMORTEMS_DATA[0].id);

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 lg:p-6 mb-10 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold font-mono text-zinc-100 flex items-center gap-2">
              ARCHITECTURAL POSTMORTEMS & INCIDENT ARCHIVES
            </h3>
          </div>
          <p className="text-xs text-zinc-400 font-mono mt-0.5">
            Transparent retrospective studies: Root causes, architectural fixes, and telemetry deltas
          </p>
        </div>

        <span className="text-xs font-mono text-zinc-500">
          Anti-Fragility Culture · Zero Blame Policy
        </span>
      </div>

      <div className="space-y-4">
        {POSTMORTEMS_DATA.map((pm) => {
          const isExpanded = expandedId === pm.id;

          return (
            <div
              key={pm.id}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isExpanded ? 'bg-zinc-900/50 border-amber-500/40' : 'bg-zinc-900/20 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Header Bar */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : pm.id)}
                className="w-full p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-800/60 text-amber-400 shrink-0">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="text-amber-400 font-semibold">{pm.incidentCode}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400">{pm.date}</span>
                      <span className="text-zinc-600 hidden sm:inline">•</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950/40 text-rose-300 border border-rose-800 hidden sm:inline">
                        {pm.severity}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-zinc-100 mt-0.5 font-sans">
                      {pm.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 shrink-0">
                  <span className="hidden md:inline text-zinc-500">{pm.system}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-zinc-800/80 space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-850">
                      <span className="text-rose-400 font-semibold text-[11px] block mb-1">
                        SYMPTOM & BLAST RADIUS
                      </span>
                      <p className="text-zinc-300 font-sans text-xs leading-relaxed">{pm.symptom}</p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-850">
                      <span className="text-amber-400 font-semibold text-[11px] block mb-1">
                        ROOT CAUSE ANALYSIS (RCA)
                      </span>
                      <p className="text-zinc-300 font-sans text-xs leading-relaxed">{pm.rootCause}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-900/40 space-y-2">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs">
                      <ShieldCheck className="w-4 h-4" />
                      LONG-TERM ARCHITECTURAL RE-ENGINEERING
                    </div>
                    <p className="text-zinc-200 font-sans text-xs leading-relaxed">
                      {pm.architecturalFix}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-black border border-zinc-800 flex items-center justify-between flex-wrap gap-2 text-zinc-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-zinc-400 font-semibold">VERIFIED TELEMETRY DELTA:</span>
                    </div>
                    <span className="text-emerald-300 font-semibold">{pm.deltaResult}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
