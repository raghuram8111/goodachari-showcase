import React from 'react';
import { Layers, Database, Server, Monitor, Satellite, CheckSquare, Eye, ShieldCheck } from 'lucide-react';
import { TECH_STACK } from '../data/showcaseData';

export default function TechStack() {
  const getLayerIcon = (layer) => {
    switch (layer) {
      case 'Frontend': return <Monitor className="w-5 h-5 text-cyan-400" />;
      case 'Backend': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Earth Observation': return <Satellite className="w-5 h-5 text-amber-400" />;
      case 'Geospatial Processing': return <Layers className="w-5 h-5 text-teal-400" />;
      case 'Verification Layer': return <Eye className="w-5 h-5 text-rose-400" />;
      default: return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="tech-stack" className="py-20 bg-[#0a0e17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>05 / Engineering Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Technology Stack
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Organized strictly by architectural tier. Built on proven open standards, spatial database extensions, and multi-spectral satellite remote sensing data.
          </p>
        </div>

        {/* Mandated Explicit Notice */}
        <div className="mb-10 p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              Implementation Integrity Clause
            </span>
            <p className="text-xs font-mono text-slate-300 leading-relaxed">
              "The technology stack shown here represents the current proof-of-concept implementation."
              We do not claim theoretical or aspirational technologies that are not actively running within our working prototype codebase.
            </p>
          </div>
        </div>

        {/* Technology Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((layer) => (
            <div
              key={layer.layer}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/60">
                      {getLayerIcon(layer.layer)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold font-mono text-white">
                        {layer.layer}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">
                        {layer.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {layer.description}
                </p>

                {/* Items in this tier */}
                <div className="space-y-2.5">
                  {layer.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60"
                    >
                      <div className="flex items-center justify-between font-mono text-xs font-semibold text-slate-200">
                        <span>{item.name}</span>
                        <CheckSquare className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 ml-2" />
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 font-mono leading-tight">
                        {item.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier indicator footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Verified in Prototype</span>
                <span className="text-cyan-400 font-bold">100% Executable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
