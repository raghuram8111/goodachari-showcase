import React from 'react';
import { Zap, Users, FileSearch, Clock, Globe2, Maximize, GitMerge, ShieldCheck } from 'lucide-react';
import { IMPACT_POINTS } from '../data/showcaseData';

export default function ImpactSection() {
  const getImpactIcon = (title) => {
    switch (title) {
      case 'Faster Land-Change Identification': return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'Reduced Manual Monitoring Effort': return <Users className="w-5 h-5 text-emerald-400" />;
      case 'Evidence-Assisted Investigation': return <FileSearch className="w-5 h-5 text-indigo-400" />;
      case 'Earlier Identification of Suspicious Work': return <Clock className="w-5 h-5 text-amber-400" />;
      case 'Better Use of Earth Observation': return <Globe2 className="w-5 h-5 text-teal-400" />;
      case 'Scalable Monitoring Architecture': return <Maximize className="w-5 h-5 text-cyan-400" />;
      case 'Improved Verification Coordination': return <GitMerge className="w-5 h-5 text-emerald-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="impact" className="py-20 bg-[#0a0e17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>13 / Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Potential Impact
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Tangible operational improvements enabled by replacing speculative manual surveillance with data-driven satellite intelligence.
          </p>
        </div>

        {/* Realistic Grounding Note */}
        <div className="mb-10 p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              Engineering Feasibility Grounding
            </span>
            <p className="text-xs font-mono text-slate-300 leading-relaxed">
              We present verifiable systemic advantages based on actual spatial automation workflows. In accordance with rigorous scientific evaluation, we avoid unsubstantiated marketing percentages.
            </p>
          </div>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {IMPACT_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center mb-4">
                  {getImpactIcon(item.title)}
                </div>
                <h3 className="text-sm font-bold font-mono text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                Systemic Benefit
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
