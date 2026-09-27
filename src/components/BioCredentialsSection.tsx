import React from 'react';
import { PROFILE_INFO } from '../data/timelineData';
import { 
  ExternalLink, 
  ShieldCheck, 
  Globe2, 
  Award,
  Layers,
  Terminal,
  FileText
} from 'lucide-react';

export const BioCredentialsSection: React.FC = () => {
  return (
    <div className="mt-14 pt-10 border-t border-zinc-800 space-y-12">
      {/* Narrative Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            BIOGRAPHY & VERIFIED ARTIFACT REGISTRY
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            System Lineage & Professional Pedigree
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-400">
          Source Repository Record: <span className="text-amber-400">Dev-moe-kyawaung</span>
        </div>
      </div>

      {/* Senior Developer Bio & Philosophy Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 border-b border-zinc-800/80 pb-3">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>ARCHITECTURAL STATEMENT // {PROFILE_INFO.name}</span>
          </div>

          <div className="text-zinc-300 text-sm leading-relaxed space-y-3 font-sans">
            <p>
              I am a <strong>Senior Android & Full-Stack Systems Architect</strong> operating at the intersection of reactive client engineering, hardware abstraction layers, and edge-first AI inference. Over the past 4+ years, I have architected and shipped over <strong>43 dedicated code portals</strong> and <strong>38 production live deployments</strong> spanning retail POS, fintech security keystores, and real-time event telemetry.
            </p>
            <p>
              My architectural philosophy centers around <em>calm systems design</em>: isolating failure domains behind reactive coroutine channels, honoring offline-first realities with Write-Ahead Logging (WAL), and treating device constraints not as limitations, but as blueprints for resilience.
            </p>
            <p className="text-zinc-400 font-mono text-xs pt-1">
              "Languages and frameworks fluctuate; clear boundary contracts, deterministic state flow, and anti-fragile failure handling remain timeless."
            </p>
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-zinc-500">Emergency & Voice Dispatch:</span>
              <span className="text-zinc-200">{PROFILE_INFO.phoneNumbers.join(' · ')}</span>
            </div>
            <a 
              href="https://pastebin.com/mQF1iP5P" 
              target="_blank" 
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              Verified Pastebin Raw Bio
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Credentials & Verified Certs Breakdown */}
        <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 border-b border-zinc-800/80 pb-3">
              <Award className="w-4 h-4 text-amber-400" />
              <span>CERTIFICATION PROFILE</span>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Programming Hub:</span>
                <span className="text-amber-300 font-bold">82+ Certificates</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Knowledge Domains:</span>
                <span className="text-zinc-200 font-semibold">9 Categories</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Core Specialty:</span>
                <span className="text-emerald-400 font-semibold">Kotlin & Compose</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Security Audit:</span>
                <span className="text-sky-400 font-semibold">Ethical Hacking / Kali</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">AI Integration:</span>
                <span className="text-purple-400 font-semibold">TFLite & Claude API</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 text-xs font-mono space-y-1">
            <div className="text-zinc-400 text-[11px] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Gravatar Account Verified:
            </div>
            <a 
              href={PROFILE_INFO.gravatarUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline break-all block text-[11px]"
            >
              https://gravatar.com/moekyawaung2026
            </a>
          </div>
        </div>
      </div>

      {/* Featured Production Apps Matrix */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <h3 className="text-base font-bold text-zinc-100 font-mono">
              PRODUCTION APPLICATION SUITE
            </h3>
          </div>
          <span className="text-xs font-mono text-zinc-500">Live Deployments</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROFILE_INFO.appSuiteHighlights.map((app, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-zinc-400 text-[11px] font-semibold">{app.tag}</span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                  </span>
                </div>
                <h4 className="text-sm font-bold text-zinc-100 group-hover:text-emerald-400 transition font-sans">
                  {app.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {app.desc}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <a
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:text-sky-300 flex items-center gap-1"
                >
                  <span>Launch Instance</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-zinc-600">Lovable / GitHub</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social & Portal Mesh Network */}
      <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
            <Globe2 className="w-3.5 h-3.5 text-sky-400" />
            FEDERATED NETWORK & GRAVATAR PORTALS
          </span>
          <span className="text-zinc-500">Verified Web Identities</span>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {PROFILE_INFO.socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 flex items-center gap-1.5 transition text-[11px]"
            >
              <span>{item.label}</span>
              <ExternalLink className="w-2.5 h-2.5 text-zinc-500" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer System Stamp */}
      <footer className="pt-6 border-t border-zinc-900 text-center font-mono text-xs text-zinc-500 space-y-2">
        <div>
          ARCHITECTURAL TIMELINE NARRATIVE · DESIGN AESTHETIC: TECHNICAL, CALM, DOCUMENTARY
        </div>
        <div className="text-[11px] text-zinc-600">
          Curated by Moe Kyaw Aung (မိုးကျော်အောင်) · Mobile & Distributed Systems Architect · Tachileik ↔ Bangkok
        </div>
      </footer>
    </div>
  );
};
