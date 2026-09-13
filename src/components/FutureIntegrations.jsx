import React from 'react';
import { Satellite, MapPin, Database, FileCheck, BellRing, ShieldCheck, Cpu, Server } from 'lucide-react';
import { FUTURE_INTEGRATIONS } from '../data/showcaseData';

export default function FutureIntegrations() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Satellite': return <Satellite className="w-5 h-5 text-cyan-400" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-teal-400" />;
      case 'BellRing': return <BellRing className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-rose-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      default: return <Satellite className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="future" className="py-24 bg-[#0a0e17] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            11 / Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            What Comes Next
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed font-sans">
            Key integrations required to transition the validated proof-of-concept into a nationwide land intelligence platform.
          </p>
        </div>

        {/* 8 Integrations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FUTURE_INTEGRATIONS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {item.readiness}
                  </span>
                </div>

                <h3 className="text-sm font-bold font-mono text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
