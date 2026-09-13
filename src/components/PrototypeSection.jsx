import React from 'react';
import { Layers, Database, Server, Monitor, AlertCircle, Cpu, Satellite, FileText, Bell, Eye } from 'lucide-react';

export default function PrototypeSection() {
  const prototypeFeatures = [
    { title: "Sentinel-2 Imagery", desc: "Multi-band 10m-20m optical imagery ingest for baseline and recent pass.", icon: <Satellite className="w-4 h-4 text-emerald-400" /> },
    { title: "Landsat Imagery", desc: "Landsat 8/9 30m calibrated surface reflectance for temporal consistency.", icon: <Satellite className="w-4 h-4 text-emerald-400" /> },
    { title: "Multi-Temporal Comparison", desc: "Pixel-wise co-registered reflectance comparison across timestamps T1 and T2.", icon: <Layers className="w-4 h-4 text-emerald-400" /> },
    { title: "Change Detection", desc: "Spectral difference thresholding detecting altered surface characteristics.", icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
    { title: "AOI Filtering", desc: "Spatial boundary masking confining calculations strictly within target geometries.", icon: <Layers className="w-4 h-4 text-emerald-400" /> },
    { title: "Geospatial Processing", desc: "Vectorization, noise elimination, and polygon geometry extraction.", icon: <Database className="w-4 h-4 text-emerald-400" /> },
    { title: "Rule-Based Classification", desc: "Index delta heuristics categorizing vegetation loss, bare soil, and built-up shifts.", icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
    { title: "Changed-Zone Identification", desc: "Cluster-based centroid and spatial boundary assignment for discrete cases.", icon: <Database className="w-4 h-4 text-emerald-400" /> },
    { title: "High-Resolution Verification", desc: "Contextual inspection using sub-meter Esri world imagery tile services.", icon: <Eye className="w-4 h-4 text-emerald-400" /> },
    { title: "Investigation Workflow", desc: "Interactive triage dashboard allowing case review with evidence auditing.", icon: <Monitor className="w-4 h-4 text-emerald-400" /> },
    { title: "Alerts System", desc: "Automated event generation flagging high-confidence altered zones.", icon: <Bell className="w-4 h-4 text-emerald-400" /> },
    { title: "Case Reports", desc: "Structured spatial summaries documenting detected coordinates and decisions.", icon: <FileText className="w-4 h-4 text-emerald-400" /> },
  ];

  return (
    <section id="prototype" className="py-24 bg-[#0a0e17] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
            03 / Implemented Scope
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            What We Built
          </h2>
          <div className="mt-4 p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 font-mono text-sm leading-relaxed">
            "Our prototype demonstrates the core technical workflow of satellite-based land-change detection and investigation."
          </div>
        </div>

        {/* Prototype Core Tech Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Frontend */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wide mb-3">
              <Monitor className="w-4 h-4" />
              <span>Prototype Frontend</span>
            </div>
            <div className="text-lg font-bold font-mono text-white mb-2">
              HTML + CSS + Vanilla JS
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Lightweight browser client delivering responsive map rendering, dual-pane satellite comparisons, and asynchronous REST API consumption without frontend bloat.
            </p>
          </div>

          {/* Backend */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wide mb-3">
              <Server className="w-4 h-4" />
              <span>Prototype Backend</span>
            </div>
            <div className="text-lg font-bold font-mono text-white mb-2">
              Node.js + Express
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Asynchronous REST services managing spatial query handling, reflectance difference parameters, case state transitions, alert streams, and audit logging.
            </p>
          </div>

          {/* Database */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wide mb-3">
              <Database className="w-4 h-4" />
              <span>Spatial Database</span>
            </div>
            <div className="text-lg font-bold font-mono text-white mb-2">
              PostgreSQL + PostGIS
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Relational persistence with PostGIS spatial extensions. Handles polygon geometries, spatial indexes (GiST), topological intersections, and investigation dossiers.
            </p>
          </div>
        </div>

        {/* Implemented Capabilities Grid - Clean and Uncluttered */}
        <div className="mb-12">
          <h3 className="text-base font-mono font-bold text-white mb-6">
            Implemented Prototype Capabilities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {prototypeFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start gap-3.5"
              >
                <div className="p-2 rounded bg-slate-800 flex-shrink-0 mt-0.5">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-200">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prototype Scope Disclaimer */}
        <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 flex items-start gap-3.5 text-xs text-slate-400">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 font-sans">
            <span className="text-amber-400 font-mono font-semibold uppercase tracking-wider block">
              Prototype Scope Boundary
            </span>
            <p className="leading-relaxed">
              "The prototype is a proof-of-concept and is not intended to represent the complete government-scale deployment." It demonstrates the core remote-sensing physics and spatial workflow on targeted demonstration AOIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
