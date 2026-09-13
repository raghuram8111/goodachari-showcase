import React from 'react';
import { Layers, Database, Server, Monitor, CheckCircle, AlertCircle, Cpu, Satellite, FileText, Bell, Eye } from 'lucide-react';

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
    <section id="prototype" className="py-20 bg-[#0a0e17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-emerald-500"></span>
            <span>03 / Implemented Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            What We Built
          </h2>
          {/* Core Mandated Statement */}
          <div className="mt-4 p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 font-mono text-sm leading-relaxed">
            "Our prototype demonstrates the core technical workflow of satellite-based land-change detection and investigation."
          </div>
        </div>

        {/* Prototype Core Tech Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Frontend */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wide">
                <Monitor className="w-4 h-4" />
                <span>Prototype Frontend</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                Lightweight Native
              </span>
            </div>
            <div className="text-xl font-bold font-mono text-white mb-2">
              HTML + CSS + Vanilla JS
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engineered with zero bloated frontend frameworks for the client prototype. Delivers instant interactive map rendering, split-pane satellite comparison, and direct asynchronous REST API consumption.
            </p>
          </div>

          {/* Backend */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">
                <Server className="w-4 h-4" />
                <span>Prototype Backend</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                Asynchronous API
              </span>
            </div>
            <div className="text-xl font-bold font-mono text-white mb-2">
              Node.js + Express
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Modular REST services managing spatial query dispatching, raster difference threshold parameters, case state transitions, alert streams, and audit trail persistence.
            </p>
          </div>

          {/* Database */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase tracking-wide">
                <Database className="w-4 h-4" />
                <span>Spatial Database</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                GIS Persistence
              </span>
            </div>
            <div className="text-xl font-bold font-mono text-white mb-2">
              PostgreSQL + PostGIS
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Relational data store augmented with the PostGIS spatial engine. Handles polygon geometries, spatial indexes (GiST), intersection queries, and investigation records.
            </p>
          </div>
        </div>

        {/* Implemented Prototype Capabilities Grid */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-mono font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Concrete Capabilities Implemented in the Prototype</span>
            </h3>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              12 Core Modules Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {prototypeFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start gap-3"
              >
                <div className="p-1.5 rounded bg-slate-800/80 border border-slate-700 mt-0.5">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-100 flex items-center gap-2">
                    {feat.title}
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1 rounded">✓</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explicit Prototype Scope Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3 text-xs text-slate-400 font-mono">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-amber-400 font-bold uppercase tracking-wider">
              Prototype Scope Boundary & Disclaimer
            </span>
            <p className="leading-relaxed">
              "The prototype is a proof-of-concept and is not intended to represent the complete government-scale deployment."
              It verifies the fundamental physics and geospatial algorithms of multi-spectral Earth observation change detection on demonstration AOIs before national-scale scale-up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
