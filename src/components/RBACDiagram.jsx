import React from 'react';
import { Shield, UserCheck, ShieldAlert, FileText, Bell, Search, CheckCircle } from 'lucide-react';

export default function RBACDiagram() {
  return (
    <section id="rbac" className="py-24 bg-[#080c14] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            12 / Governance Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Role-Based Access Control (RBAC)
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed font-sans">
            Jurisdictional governance ensuring officers operate strictly within their legally assigned administrative territories.
          </p>
        </div>

        {/* Autonomous Intelligence Principle Callout */}
        <div className="mb-14 p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <span className="font-mono font-semibold text-cyan-300 uppercase tracking-wider block">
              Automated Analysis Principle
            </span>
            <p className="text-slate-300 leading-relaxed font-sans">
              "The system performs automated analysis; authorized officers focus on reviewing flagged cases and taking appropriate action."
              The engine autonomously compares satellite observations, clusters anomalies, and generates prioritized alerts without an intermediate manual analyst bottleneck.
            </p>
          </div>
        </div>

        {/* Clean RBAC Tree Diagram */}
        <div className="max-w-4xl mx-auto p-8 rounded-xl bg-slate-900/30 border border-slate-800">
          {/* Root: GODACHARI SYSTEM */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-center">
              <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                Platform Root
              </span>
              <span className="text-base font-bold font-mono text-white">
                GODACHARI SYSTEM
              </span>
            </div>
          </div>

          {/* Branches: ADMIN & AUTHORIZED OFFICER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* ADMIN */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2 rounded bg-slate-900 text-indigo-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-mono text-white">ADMIN</h3>
                  <span className="text-xs text-slate-400 font-sans">System Administration</span>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                  <span>Manage Authorized Users & Access Credentials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                  <span>Configure Jurisdictional Regions & Boundaries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                  <span>System Diagnostics & Ingestion Health</span>
                </div>
              </div>
            </div>

            {/* AUTHORIZED OFFICER */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2 rounded bg-slate-900 text-emerald-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-mono text-white">AUTHORIZED OFFICER</h3>
                  <span className="text-xs text-slate-400 font-sans">Jurisdictional Enforcement</span>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-300">
                <span>Scope: Assigned Jurisdictional Region Only</span>
              </div>

              {/* Responsibilities */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs font-mono">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-200">
                  <Bell className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                  <span>Alerts</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-200">
                  <Search className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                  <span>Investigate</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-200">
                  <FileText className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                  <span>Reports</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Box */}
          <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-center font-mono text-xs">
            <span className="text-emerald-400 font-bold block mb-1">
              Field Enforcement: Human Verification & Action
            </span>
            <p className="text-slate-400 font-sans max-w-xl mx-auto text-[11px]">
              Statutory notice issuance, field inspection verification, court-admissible evidence documentation, or formal dismissal of non-violations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
