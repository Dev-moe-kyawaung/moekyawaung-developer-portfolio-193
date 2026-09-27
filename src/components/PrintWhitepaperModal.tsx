import React from 'react';
import { ARCHITECTURE_TIMELINE, PROFILE_INFO } from '../data/timelineData';
import { X, Printer, Download, CheckCircle, Shield } from 'lucide-react';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintWhitepaperModal: React.FC<PrintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950 sticky top-0 z-10 print:hidden">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold font-mono text-zinc-100">
              EXECUTIVE ARCHITECTURAL DOSSIER (WHITE PAPER)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-700/60 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Paper */}
        <div id="printable-dossier" className="p-8 sm:p-10 bg-white text-zinc-900 font-sans print:p-0">
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-5 mb-6 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                OFFICIAL SYSTEM ARCHITECTURE AUDIT REPORT // 2022-2026
              </div>
              <h1 className="text-2xl font-black tracking-tight text-zinc-950 mt-1">
                {PROFILE_INFO.name}
              </h1>
              <div className="text-xs font-mono text-zinc-700 mt-1">
                {PROFILE_INFO.role} · {PROFILE_INFO.location}
              </div>
            </div>

            <div className="text-xs font-mono text-right text-zinc-600 space-y-0.5">
              <div>Gravatar Verified: <strong className="text-zinc-900">moekyawaung2026</strong></div>
              <div>GitHub Master: <strong className="text-zinc-900">Dev-moe-kyawaung</strong></div>
              <div>Audit Date: <strong>Q1 2026 Verified</strong></div>
            </div>
          </div>

          {/* Core Summary */}
          <div className="mb-6 space-y-2 text-xs leading-relaxed text-zinc-800">
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-zinc-900 border-b border-zinc-300 pb-1">
              Architectural Executive Summary
            </h2>
            <p>
              Over 4 years of rigorous systems architecture spanning 43 repositories and 38 production live deployments. Demonstrates mastery over reactive unidirectional client state (Jetpack Compose, Clean Architecture), resilient Write-Ahead Logging (WAL) offline engines, hardware peripheral abstractions (ESC/POS thermal drivers), zero-trust Android Keystore TEE enclaves, and autonomous AI telemetry pipelines (Claude API & quantized TFLite).
            </p>
          </div>

          {/* Key Metric Deliberations Table */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Verified Telemetry & Impact Shift (2022 → 2026)
            </h2>
            <table className="w-full text-xs font-mono border border-zinc-300">
              <thead className="bg-zinc-100 border-b border-zinc-300 text-zinc-700">
                <tr>
                  <th className="p-2 text-left">Metric Indicator</th>
                  <th className="p-2 text-left">Legacy Monolith</th>
                  <th className="p-2 text-left">Evolved Production</th>
                  <th className="p-2 text-right">Net Optimization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="p-2 font-medium">Activity Max Line Count</td>
                  <td className="p-2 text-zinc-500">2,400 LOC</td>
                  <td className="p-2 font-bold text-zinc-900">180 LOC</td>
                  <td className="p-2 text-right font-bold text-emerald-700">-92.5% LOC reduction</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Unit Test Suite Coverage</td>
                  <td className="p-2 text-zinc-500">8%</td>
                  <td className="p-2 font-bold text-zinc-900">84%</td>
                  <td className="p-2 text-right font-bold text-emerald-700">+76% Deterministic Safety</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">ANR (App Not Responding) Rate</td>
                  <td className="p-2 text-zinc-500">1.4%</td>
                  <td className="p-2 font-bold text-zinc-900">0.02%</td>
                  <td className="p-2 text-right font-bold text-emerald-700">-98.5% Stability Jump</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Offline Sync Durability</td>
                  <td className="p-2 text-zinc-500">72% (Data Drops)</td>
                  <td className="p-2 font-bold text-zinc-900">99.8% (Zero Loss)</td>
                  <td className="p-2 text-right font-bold text-emerald-700">+27.8% Reconnect Reliability</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Clean Gradle Build Duration</td>
                  <td className="p-2 text-zinc-500">11m 40s</td>
                  <td className="p-2 font-bold text-zinc-900">1m 35s</td>
                  <td className="p-2 text-right font-bold text-emerald-700">-86.4% Multi-module Cache</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Mean Time To Resolve (MTTR)</td>
                  <td className="p-2 text-zinc-500">36 hours</td>
                  <td className="p-2 font-bold text-zinc-900">22 minutes</td>
                  <td className="p-2 text-right font-bold text-emerald-700">-98.9% Autonomous Agentic Fix</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Architecture Milestones Index */}
          <div className="mb-6 space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Chronological Architecture Decision Records
            </h2>
            <div className="space-y-2 text-xs">
              {ARCHITECTURE_TIMELINE.map(m => (
                <div key={m.id} className="p-2 border border-zinc-200 rounded">
                  <div className="flex justify-between font-mono text-[11px] text-zinc-600 mb-0.5">
                    <span className="font-bold text-zinc-900">[{m.tag}] {m.year} {m.quarter}</span>
                    <span>Commit: {m.commitHash}</span>
                  </div>
                  <div className="font-semibold text-zinc-950">{m.title}</div>
                  <div className="text-zinc-600 mt-0.5">{m.narrativeRecord}</div>
                  <div className="font-mono text-[10px] text-zinc-500 mt-1">Stack: {m.stack.join(' · ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Verification Stamp */}
          <div className="p-4 bg-zinc-50 border border-zinc-300 rounded flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="font-bold text-zinc-900">Programming Hub Official Accreditation</div>
                <div className="text-zinc-600">82+ Certificates across 9 Domains (Programming, Mobile, Databases, AI, Security)</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-emerald-700 font-bold">
              <CheckCircle className="w-4 h-4" /> Authenticated
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
