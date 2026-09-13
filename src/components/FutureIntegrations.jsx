import React from 'react';
import { Satellite, MapPin, Database, FileCheck, BellRing, ShieldCheck, Cpu, Server, ArrowUpRight } from 'lucide-react';
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
    <section id="future" className="py-20 bg-[#0a0e17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>11 / Technical Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            What Comes Next
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Key enterprise integrations required to transition the validated proof-of-concept into a nationwide, sovereign land intelligence platform.
          </p>
        </div>

        {/* 8 Integrations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FUTURE_INTEGRATIONS.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700">
                    {item.readiness}
                  </span>
                </div>

                <h3 className="text-sm font-bold font-mono text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Phase 2 Initiative</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
