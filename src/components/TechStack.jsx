import React from 'react';
import { Layers, Database, Server, Monitor, Satellite, Eye } from 'lucide-react';
import { TECH_STACK } from '../data/showcaseData';

export default function TechStack() {
  const getLayerIcon = (layer) => {
    switch (layer) {
      case 'Frontend': return <Monitor className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Backend': return <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Imagery': return <Satellite className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Geospatial Processing': return <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'High-Resolution Verification': return <Eye className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default: return <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="architecture" className="py-24 bg-white dark:bg-[#0a0e17] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            TECHNICAL ARCHITECTURE
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            Built on open standards, spatial relational databases, and multi-temporal Sentinel-2 surface reflectance remote sensing data.
          </p>
        </div>

        {/* 6 Core Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((layer) => (
            <div
              key={layer.layer}
              className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {getLayerIcon(layer.layer)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                      {layer.layer}
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                      {layer.category}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed font-sans">
                  {layer.description}
                </p>

                <div className="space-y-2.5">
                  {layer.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60"
                    >
                      <div className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-sans leading-relaxed">
                        {item.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
