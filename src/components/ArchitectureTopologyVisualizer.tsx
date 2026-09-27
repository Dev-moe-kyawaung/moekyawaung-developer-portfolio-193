import React, { useState } from 'react';
import { 
  Network, 
  Smartphone, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Wifi, 
  WifiOff, 
  Sparkles,
  HardDrive
} from 'lucide-react';

type SimulationState = 'healthy' | 'offline' | 'agentic';

interface TopologyNode {
  id: string;
  name: string;
  sub: string;
  type: 'client' | 'storage' | 'network' | 'cloud' | 'hardware' | 'agent';
  status: string;
  specs: string;
  latency: string;
}

export const ArchitectureTopologyVisualizer: React.FC = () => {
  const [simState, setSimState] = useState<SimulationState>('healthy');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('wal');

  const nodes: TopologyNode[] = [
    {
      id: 'client',
      name: 'Declarative Client Layer',
      sub: 'Jetpack Compose / React 19',
      type: 'client',
      status: '60 FPS Steady State',
      specs: 'Unidirectional Data Flow (UDF) · StateFlow State Hoisting',
      latency: '16.6ms frame budget'
    },
    {
      id: 'wal',
      name: 'Write-Ahead Log (WAL)',
      sub: 'Room DB / SQLite Cache',
      type: 'storage',
      status: simState === 'offline' ? 'Queueing Mutations (142 queued)' : 'WAL Active & Committed',
      specs: 'ACID Transactions · Vector Clocks · Offline-First Engine',
      latency: '4ms local disk write'
    },
    {
      id: 'circuit',
      name: 'Circuit Breaker & Sync Queue',
      sub: 'Kotlin Coroutines Channels',
      type: 'network',
      status: simState === 'offline' ? 'Tripped (Isolated Network Drop)' : 'Closed (Healthy Mesh)',
      specs: 'Exponential Backoff · Idempotent UUID Replay Buffers',
      latency: simState === 'offline' ? 'Circuit Open (0 egress)' : '24ms transport dispatch'
    },
    {
      id: 'cloud',
      name: 'Distributed Cloud Mesh',
      sub: 'Firebase / Claude API / Redis',
      type: 'cloud',
      status: simState === 'offline' ? 'Unreachable (Safe Fallback)' : 'Pub/Sub Streaming Online',
      specs: 'Multi-Region Ingestion · Delta Broadcasting · SSE Handlers',
      latency: simState === 'offline' ? 'N/A' : '48ms cloud roundtrip'
    },
    {
      id: 'tee',
      name: 'Hardware Enclave & Peripherals',
      sub: 'StrongBox TEE + ESC/POS',
      type: 'hardware',
      status: 'Hardware Channel Sealed',
      specs: 'AES-256-GCM Nonce Signing · Non-blocking Thermal Buffer',
      latency: '2ms hardware bus'
    },
    {
      id: 'agent',
      name: 'Claude 3.7 Agentic Auditor',
      sub: 'AST Analyzer & Self-Healer',
      type: 'agent',
      status: simState === 'agentic' ? 'Rebalancing Topology & Telemetry' : 'Standby Telemetry Observer',
      specs: 'Proactive PR Gen · Automated Schema Migration Verifier',
      latency: 'Sub-second AST audit'
    }
  ];

  const activeNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 lg:p-6 mb-10 shadow-2xl relative">
      {/* Visualizer Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Network className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold font-mono text-zinc-100 flex items-center gap-2">
              INTERACTIVE SYSTEM TOPOLOGY & PACKET FLOW
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800 hidden sm:inline">
              LIVE DISPATCH SIMULATOR
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-mono mt-0.5">
            Real-time visual abstraction of Moe Kyaw Aung's client-to-cloud resilience topology
          </p>
        </div>

        {/* State Simulation Buttons */}
        <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-1 text-xs font-mono">
          <button
            onClick={() => setSimState('healthy')}
            className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition cursor-pointer ${
              simState === 'healthy'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Wifi className="w-3.5 h-3.5 text-emerald-400" />
            <span>Normal Connected</span>
          </button>

          <button
            onClick={() => setSimState('offline')}
            className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition cursor-pointer ${
              simState === 'offline'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <WifiOff className="w-3.5 h-3.5 text-rose-400" />
            <span>Offline Border Drop</span>
          </button>

          <button
            onClick={() => setSimState('agentic')}
            className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition cursor-pointer ${
              simState === 'agentic'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Agentic Healing</span>
          </button>
        </div>
      </div>

      {/* Interactive Topology Graph Pipeline */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {nodes.map((node) => {
          const isSelected = selectedNodeId === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-300 relative group flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-zinc-900 border-emerald-400 ring-2 ring-emerald-500/20 shadow-xl'
                  : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80'
              }`}
            >
              {/* Type Icon Header */}
              <div className="flex items-center justify-between mb-2">
                <div className={`p-1.5 rounded-lg border ${
                  node.type === 'client' ? 'text-sky-400 bg-sky-950/40 border-sky-800' :
                  node.type === 'storage' ? 'text-emerald-400 bg-emerald-950/40 border-emerald-800' :
                  node.type === 'network' ? 'text-amber-400 bg-amber-950/40 border-amber-800' :
                  node.type === 'cloud' ? 'text-indigo-400 bg-indigo-950/40 border-indigo-800' :
                  node.type === 'hardware' ? 'text-rose-400 bg-rose-950/40 border-rose-800' :
                  'text-purple-400 bg-purple-950/40 border-purple-800'
                }`}>
                  {node.type === 'client' && <Smartphone className="w-4 h-4" />}
                  {node.type === 'storage' && <HardDrive className="w-4 h-4" />}
                  {node.type === 'network' && <Activity className="w-4 h-4" />}
                  {node.type === 'cloud' && <Cloud className="w-4 h-4" />}
                  {node.type === 'hardware' && <ShieldCheck className="w-4 h-4" />}
                  {node.type === 'agent' && <Cpu className="w-4 h-4" />}
                </div>

                <span className={`w-2 h-2 rounded-full ${
                  simState === 'offline' && (node.type === 'cloud' || node.type === 'network')
                    ? 'bg-rose-500 animate-ping'
                    : simState === 'agentic' && node.type === 'agent'
                    ? 'bg-purple-400 animate-ping'
                    : 'bg-emerald-400'
                }`} />
              </div>

              <div>
                <h4 className="text-xs font-bold text-zinc-200 line-clamp-1">{node.name}</h4>
                <p className="text-[10px] font-mono text-zinc-500 line-clamp-1 mt-0.5">{node.sub}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-zinc-800/80 text-[10px] font-mono flex items-center justify-between">
                <span className="text-zinc-500">Latency:</span>
                <span className="text-zinc-300 font-semibold">{node.latency.split(' ')[0]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Telemetry Detail Inspector for Selected Node */}
      <div className="mt-5 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 font-mono text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold uppercase tracking-wide">
              NODE INSPECTOR // {activeNode.name}
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400 text-[11px]">{activeNode.sub}</span>
          </div>
          <div className="text-[11px] text-amber-400 bg-amber-950/30 border border-amber-800/50 px-2 py-0.5 rounded">
            Active Status: {activeNode.status}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300">
          <div>
            <span className="text-zinc-500 text-[11px] block mb-0.5">Architectural Specification:</span>
            <p className="text-zinc-200 font-sans text-xs leading-relaxed">{activeNode.specs}</p>
          </div>
          <div>
            <span className="text-zinc-500 text-[11px] block mb-0.5">Execution & I/O Telemetry:</span>
            <p className="text-zinc-200 font-sans text-xs leading-relaxed">
              Operational benchmark: <strong className="text-emerald-400 font-mono">{activeNode.latency}</strong> under peak concurrency.
              {simState === 'offline' && activeNode.id === 'wal' && (
                <span className="text-amber-400 block mt-1 font-mono">
                  → Write-Ahead Log has absorbed network outage safely with zero client stall.
                </span>
              )}
              {simState === 'agentic' && (
                <span className="text-purple-300 block mt-1 font-mono">
                  → Claude 3.7 dynamic analyzer actively verifying data invariants across nodes.
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
