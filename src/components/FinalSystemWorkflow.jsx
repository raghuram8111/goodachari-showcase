import React from 'react';
import { ArrowDown, Satellite, Cpu, MapPin, Database, FileCheck, AlertTriangle, UserCheck, FileText } from 'lucide-react';
import { FINAL_SYSTEM_WORKFLOW_STEPS } from '../data/showcaseData';

export default function FinalSystemWorkflow() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Satellite': return <Satellite className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default: return <Satellite className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="final-workflow" className="py-24 bg-slate-50 dark:bg-[#080c14] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            FINAL SYSTEM VISION
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            Proposed 8-stage automated governance workflow connecting sovereign Earth observation data with jurisdictional revenue administration.
          </p>
        </div>

        {/* Note on Future Target */}
        <div className="mb-10 p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 text-xs font-mono text-cyan-900 dark:text-cyan-200 max-w-3xl">
          All future capabilities shown below are proposed targets. They are not implemented in the current prototype.
        </div>

        {/* 8-Step Flow Pipeline */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FINAL_SYSTEM_WORKFLOW_STEPS.map((node, index) => (
            <div key={node.step}>
              <div className="p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {getIcon(node.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 font-bold">
                      STAGE {String(node.step).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                      {node.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {node.desc}
                  </p>
                </div>
              </div>

              {index < FINAL_SYSTEM_WORKFLOW_STEPS.length - 1 && (
                <div className="flex justify-center my-1.5">
                  <ArrowDown className="w-4 h-4 text-slate-400 dark:text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
