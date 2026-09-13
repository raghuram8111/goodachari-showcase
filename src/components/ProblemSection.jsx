import React from 'react';
import { Building2, Trees, FileWarning, ShieldAlert, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { PROBLEM_POINTS, MANUAL_VS_AUTOMATED } from '../data/showcaseData';

export default function ProblemSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'Trees': return <Trees className="w-5 h-5 text-emerald-400" />;
      case 'FileWarning': return <FileWarning className="w-5 h-5 text-rose-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-cyan-400" />;
      default: return <AlertTriangle className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="problem" className="py-20 bg-[#0a0e17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>01 / Challenge Definition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Why Land Monitoring Needs Intelligence
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Land parcels across expanding urban fringes, ecological corridors, and government holdings undergo rapid, unscheduled physical alterations that frequently outpace conventional manual enforcement capacity.
          </p>
        </div>

        {/* Change Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {PROBLEM_POINTS.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/40">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2 font-mono">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Traditional vs Automated Comparison Callout */}
        <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              Surveillance Methodology Contrast
            </span>
            <span className="text-[11px] font-mono text-cyan-400">
              Transforming Reactive Patrols into Directed Action
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Traditional Monitoring */}
            <div className="p-6 space-y-3 bg-rose-950/5">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>Traditional Manual Monitoring</span>
              </div>
              <p className="text-xs text-slate-400">
                Traditional monitoring requires substantial manual field effort across vast geographical terrains:
              </p>
              <ul className="space-y-2.5 pt-1">
                {MANUAL_VS_AUTOMATED.traditional.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-rose-400 font-mono font-bold text-[11px] mt-0.5">✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proposed Automated Intelligence */}
            <div className="p-6 space-y-3 bg-emerald-950/5">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Proposed Godachari Intelligence System</span>
              </div>
              <p className="text-xs text-slate-400">
                Uses multi-temporal Earth observation data and automated analysis to pinpoint suspicious changes:
              </p>
              <ul className="space-y-2.5 pt-1">
                {MANUAL_VS_AUTOMATED.automated.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="text-emerald-400 font-mono font-bold text-[11px] mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
