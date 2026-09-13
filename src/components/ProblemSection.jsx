import React from 'react';
import { Building2, Trees, FileWarning, ShieldAlert, AlertTriangle, CheckCircle2 } from 'lucide-react';
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
    <section id="problem" className="py-24 bg-[#0a0e17] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            01 / Challenge Definition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Why Land Monitoring Needs Intelligence
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed font-sans">
            Land parcels across expanding urban fringes, eco-sensitive corridors, and government holdings undergo rapid physical alterations that traditional manual patrolling cannot catch in time.
          </p>
        </div>

        {/* Change Types Grid - Spacious and Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROBLEM_POINTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-5">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-base font-semibold text-white mb-2 font-mono">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Traditional vs Automated Comparison - Clean, Uncluttered */}
        <div className="rounded-xl bg-slate-900/40 border border-slate-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
              Operational Comparison
            </span>
            <span className="text-xs font-mono text-cyan-400">
              Manual Patrols vs Automated EO Intelligence
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Traditional Monitoring */}
            <div className="p-8 space-y-4">
              <div className="text-sm font-mono font-bold text-rose-400 flex items-center gap-2">
                <span>Traditional Manual Monitoring</span>
              </div>
              <ul className="space-y-3 pt-1">
                {MANUAL_VS_AUTOMATED.traditional.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-300 leading-relaxed font-sans">
                    <span className="text-rose-400 font-mono font-bold mt-0.5">✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proposed Automated Intelligence */}
            <div className="p-8 space-y-4">
              <div className="text-sm font-mono font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Proposed Godachari System</span>
              </div>
              <ul className="space-y-3 pt-1">
                {MANUAL_VS_AUTOMATED.automated.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-200 leading-relaxed font-sans">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">✓</span>
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
