import React from 'react';
import { Satellite, RefreshCw, Cpu, MapPin, Database, FileCheck, AlertTriangle, LayoutDashboard, Shield, UserCheck, FileText } from 'lucide-react';

export default function FinalSystemWorkflow() {
  const workflowNodes = [
    {
      num: "01",
      title: "Target: Official / Authorized Indian EO Sources",
      desc: "Integration with sovereign Indian Earth observation repositories providing regular high-revisit coverage for nationwide deployment.",
      icon: <Satellite className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      num: "02",
      title: "Continuous Multi-Temporal Monitoring",
      desc: "Automated ingestion pipeline triggered on every scheduled satellite overpass without manual invocation.",
      icon: <RefreshCw className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      num: "03",
      title: "Automatic Change Detection",
      desc: "Distributed cloud-native raster differencing algorithms detecting altered pixel clusters across full district swathes.",
      icon: <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      num: "04",
      title: "Parcel Identification",
      desc: "Spatial intersection with digitized revenue cadastral GIS boundary layers, pinpointing affected survey numbers.",
      icon: <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      num: "05",
      title: "Land Records / Cadastral Data",
      desc: "Automated lookup against official land registries (Bhulekh / RoR / Bhoomi) to retrieve legal status and parcel type.",
      icon: <Database className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      num: "06",
      title: "Landholder & Land-Use Information",
      desc: "Associates detected parcels with authorized land classification (agricultural, wetland, forest, residential).",
      icon: <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      num: "07",
      title: "Approval / Zoning Verification",
      desc: "Cross-checks detected ground footprints against approved building plans, master plan bylaws, and environmental buffers.",
      icon: <FileCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      num: "08",
      title: "Risk / Suspicion Assessment",
      desc: "Multi-parameter heuristic engine scores likelihood of encroachment, illegal conversion, or unapproved development.",
      icon: <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    },
    {
      num: "09",
      title: "Authority Dashboard",
      desc: "Unified operational portal aggregating prioritized anomalies by urgency, geographic zone, and statutory risk category.",
      icon: <LayoutDashboard className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      num: "10",
      title: "Regional Assignment / RBAC",
      desc: "Dispatches alerts strictly to jurisdictional authorities (District Collector, Sub-Divisional Magistrate, Tehsildar, Ward Officer).",
      icon: <Shield className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      num: "11",
      title: "Human Verification",
      desc: "Jurisdictional officer reviews satellite timeline, cadastral metadata, and dispatches field teams where required.",
      icon: <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      num: "12",
      title: "Action / Statutory Report",
      desc: "Generation of formal notice exhibits, eviction proceedings, stoppage orders, or penalty issuance with audit logs.",
      icon: <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <section id="final-workflow" className="py-24 bg-slate-50 dark:bg-[#080c14] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            10 / Target Enterprise Scale
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            Final System Workflow
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            Proposed 12-tier architecture for the comprehensive government-scale land monitoring system, connecting sovereign Earth observation with jurisdictional revenue administration.
          </p>
        </div>

        {/* Operational Note */}
        <div className="mb-12 p-4 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-sans space-y-1 shadow-sm">
          <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-mono font-semibold">
            <Shield className="w-4 h-4" />
            <span>Automated Analysis (No Manual Analyst Layer)</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            In our proposed government deployment, the system executes all multi-temporal comparisons, cadastral overlays, and suspicion scoring automatically. There is no manual 'analyst' layer. Regional <strong>Authorized Officers</strong> receive high-confidence flagged anomalies directly within their jurisdiction for verification and action.
          </p>
        </div>

        {/* 12-Node Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflowNodes.map((node) => (
            <div
              key={node.num}
              className="p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                    Phase {node.num}
                  </span>
                  <div className="p-1.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {node.icon}
                  </div>
                </div>

                <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white mb-2">
                  {node.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {node.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
