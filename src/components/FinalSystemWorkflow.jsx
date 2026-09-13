import React from 'react';
import { Satellite, RefreshCw, Cpu, MapPin, Database, FileCheck, AlertTriangle, LayoutDashboard, Shield, UserCheck, FileText } from 'lucide-react';

export default function FinalSystemWorkflow() {
  const workflowNodes = [
    {
      num: "01",
      title: "Official Indian EO Data Sources",
      desc: "ISRO / Bhuvan platforms, Cartosat, and sovereign Earth observation repositories providing regular high-revisit coverage.",
      icon: <Satellite className="w-4 h-4 text-cyan-400" />,
      tag: "Sovereign EO",
    },
    {
      num: "02",
      title: "Continuous Multi-Temporal Monitoring",
      desc: "Automated ingestion pipeline automatically triggered on every scheduled satellite overpass without manual invocation.",
      icon: <RefreshCw className="w-4 h-4 text-cyan-400" />,
      tag: "Automated Ingest",
    },
    {
      num: "03",
      title: "Automatic Change Detection",
      desc: "Distributed cloud-native raster differencing algorithms detecting altered pixel clusters across full district swathes.",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      tag: "Distributed Engine",
    },
    {
      num: "04",
      title: "Parcel Identification",
      desc: "Spatial intersection with digitized revenue cadastral GIS boundary layers, pinpointing affected survey numbers.",
      icon: <MapPin className="w-4 h-4 text-cyan-400" />,
      tag: "Cadastral Overlay",
    },
    {
      num: "05",
      title: "Land Records / Cadastral Data",
      desc: "Automated lookup against official land registries (Bhulekh / RoR / Bhoomi) to retrieve legal status and parcel type.",
      icon: <Database className="w-4 h-4 text-cyan-400" />,
      tag: "Registry Integration",
    },
    {
      num: "06",
      title: "Landholder & Land-Use Information",
      desc: "Associates detected parcels with authorized land classification (agricultural, wetland, forest, residential).",
      icon: <FileText className="w-4 h-4 text-cyan-400" />,
      tag: "Title Metadata",
    },
    {
      num: "07",
      title: "Approval / Zoning Verification",
      desc: "Cross-checks detected ground footprints against approved building plans, master plan bylaws, and environmental buffers.",
      icon: <FileCheck className="w-4 h-4 text-cyan-400" />,
      tag: "Bylaw Compliance",
    },
    {
      num: "08",
      title: "Risk / Suspicion Assessment",
      desc: "Multi-parameter heuristic engine scores likelihood of encroachment, illegal conversion, or unapproved development.",
      icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
      tag: "AI Scoring",
    },
    {
      num: "09",
      title: "Authority Dashboard",
      desc: "Unified operational portal aggregating prioritized anomalies by urgency, geographic zone, and statutory risk category.",
      icon: <LayoutDashboard className="w-4 h-4 text-cyan-400" />,
      tag: "Executive HUD",
    },
    {
      num: "10",
      title: "Regional Assignment / RBAC",
      desc: "Dispatches alerts strictly to jurisdictional authorities (District Collector, Sub-Divisional Magistrate, Tehsildar, Ward Officer).",
      icon: <Shield className="w-4 h-4 text-indigo-400" />,
      tag: "Strict RBAC",
    },
    {
      num: "11",
      title: "Human Verification",
      desc: "Jurisdictional officer reviews satellite timeline, cadastral metadata, and dispatches field teams where required.",
      icon: <UserCheck className="w-4 h-4 text-emerald-400" />,
      tag: "Officer Audit",
    },
    {
      num: "12",
      title: "Action / Statutory Report",
      desc: "Generation of formal notice exhibits, eviction proceedings, stoppage orders, or penalty issuance with audit logs.",
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      tag: "Enforcement",
    },
  ];

  return (
    <section id="final-workflow" className="py-20 bg-[#080c14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>10 / Target Enterprise Scale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Final System Workflow
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Proposed 12-tier architecture for the comprehensive government-scale land monitoring system, connecting sovereign Earth observation with jurisdictional revenue administration.
          </p>
        </div>

        {/* Operational Clarification Note */}
        <div className="mb-10 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <Shield className="w-4 h-4" />
            <span>AUTOMATED ANALYSIS ARCHITECTURE (NO INTERMEDIATE ANALYST BOTTLENECK)</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            In our proposed government deployment, <strong>the system executes all multi-temporal comparisons, cadastral overlays, and suspicion scoring automatically.</strong> There is no manual 'analyst' layer. Regional <strong>Authorized Officers</strong> receive high-confidence flagged anomalies directly within their jurisdiction for decisive verification and action.
          </p>
        </div>

        {/* 12-Node Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflowNodes.map((node, idx) => (
            <div
              key={node.num}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    PHASE {node.num}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700/60">
                    {node.icon}
                  </div>
                </div>

                <h3 className="text-sm font-bold font-mono text-white mb-1.5">
                  {node.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {node.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-400">{node.tag}</span>
                <span className="text-cyan-400 font-semibold">Stage {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
