import React from 'react';
import { Shield, UserCheck, ShieldAlert, FileText, Bell, Search, CheckCircle } from 'lucide-react';

export default function RBACDiagram() {
  return (
    <section id="rbac" className="py-20 bg-[#080c14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>12 / Administrative Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Role-Based Access Control (RBAC)
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Compartmentalized jurisdictional governance ensuring officers operate strictly within their legally assigned revenue districts and wards.
          </p>
        </div>

        {/* Required Governance Principle Callout */}
        <div className="mb-12 p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              Autonomous Intelligence Principle
            </span>
            <p className="text-xs font-mono text-slate-300 leading-relaxed">
              "The system performs automated analysis; authorized officers focus on reviewing flagged cases and taking appropriate action."
              <br />
              <span className="text-slate-400 mt-1 block">
                No manual 'Analyst' tier is required: the geospatial engine autonomously ingests, compares, clusters, and indexes anomalies. Human officers intervene solely for statutory verification and field escalation.
              </span>
            </p>
          </div>
        </div>

        {/* Visual RBAC Tree Diagram */}
        <div className="max-w-4xl mx-auto p-6 md:p-10 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl relative">
          {/* Root: GODACHARI SYSTEM */}
          <div className="flex justify-center mb-6">
            <div className="px-6 py-3 rounded-xl bg-slate-900 border-2 border-cyan-500/60 shadow-lg shadow-cyan-500/10 text-center">
              <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
                CORE INTELLIGENCE PLATFORM
              </div>
              <div className="text-base font-extrabold font-mono text-white">
                GODACHARI SYSTEM
              </div>
            </div>
          </div>

          {/* Fork connecting line */}
          <div className="relative flex justify-center mb-6">
            <div className="w-[70%] h-6 border-t-2 border-x-2 border-slate-700/80 rounded-t-lg"></div>
          </div>

          {/* Level 1: ADMIN & AUTHORIZED OFFICER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* ADMIN */}
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-indigo-950/80 border border-indigo-700/60 text-indigo-300">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-mono text-white">ADMIN</h3>
                      <span className="text-[10px] font-mono text-indigo-400">System Administration</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                    System Level
                  </span>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    <span>Manage Authorized Users & Credentials</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    <span>Manage Jurisdictional Regions & Boundaries</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    <span>System Health & Pipeline Diagnostics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AUTHORIZED OFFICER */}
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-300">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-mono text-white">AUTHORIZED OFFICER</h3>
                      <span className="text-[10px] font-mono text-emerald-400">Jurisdictional Authority</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Field / Collectorate
                  </span>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Scope: Assigned Jurisdictional Region Only</span>
                  </div>
                </div>

                {/* Sub-branches for Officer Actions */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                    Assigned Region Responsibilities:
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 text-cyan-300 flex flex-col items-center gap-1">
                      <Bell className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Alerts</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 text-cyan-300 flex flex-col items-center gap-1">
                      <Search className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Investigations</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 text-cyan-300 flex flex-col items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Reports</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action arrow to Human Verification */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-emerald-400 font-semibold">
                <span>Direct Outcome:</span>
                <span className="flex items-center gap-1">
                  Human Verification & Action ↓
                </span>
              </div>
            </div>
          </div>

          {/* Terminal Box: Human Verification & Legal Action */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-center font-mono">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
              Decisive Field Resolution: Human Verification & Legal Action
            </span>
            <p className="text-[11px] text-slate-300 mt-1 max-w-xl mx-auto">
              Statutory notice issuance, field inspection verification, court-admissible evidence documentation, or formal dismissal of non-violations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
