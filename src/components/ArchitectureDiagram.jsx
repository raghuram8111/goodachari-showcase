import React from 'react';
import { ArrowDown, Satellite, Cpu, Layers, Database, Server, Globe, Monitor, FileSpreadsheet } from 'lucide-react';

export default function ArchitectureDiagram() {
  const pipelineNodes = [
    {
      id: "node-1",
      tier: "TIER 01 / DATA INGESTION",
      title: "Satellite Data",
      subtitle: "Multi-Spectral Earth Observation",
      tech: "Sentinel-2 (MSI) + Landsat (OLI)",
      icon: <Satellite className="w-5 h-5 text-cyan-400" />,
      color: "cyan",
      payload: "Calibrated L2A Surface Reflectance Bands (B4, B8, B11, B12)",
    },
    {
      id: "node-2",
      tier: "TIER 02 / ANALYTICS ENGINE",
      title: "AI / Change Detection Service",
      subtitle: "Differential Spectral Analysis",
      tech: "Raster Differencing Algorithms",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      color: "emerald",
      payload: "NDVI / NDBI differential matrices & threshold delta masks",
    },
    {
      id: "node-3",
      tier: "TIER 03 / SPATIAL VECTORIZATION",
      title: "Geospatial Processing",
      subtitle: "Vector Polygon Extraction",
      tech: "AOI Clipping, Noise Filtering & Contouring",
      icon: <Layers className="w-5 h-5 text-teal-400" />,
      color: "teal",
      payload: "Discrete vector change geometries with centroid coordinates",
    },
    {
      id: "node-4",
      tier: "TIER 04 / PERSISTENCE ENGINE",
      title: "PostGIS Database",
      subtitle: "Spatial Relational Store",
      tech: "PostgreSQL 15+ & PostGIS 3.x",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      color: "indigo",
      payload: "Spatial tables with GiST indexing, area calculations & audit logs",
    },
    {
      id: "node-5",
      tier: "TIER 05 / APPLICATION BACKEND",
      title: "Node.js / Express Backend",
      subtitle: "Business Logic & Middleware",
      tech: "Node.js Asynchronous Runtime",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      color: "emerald",
      payload: "Case status transitions, query filters, and telemetry pipelines",
    },
    {
      id: "node-6",
      tier: "TIER 06 / SERVICE INTERFACE",
      title: "REST APIs",
      subtitle: "Spatial Data Endpoints",
      tech: "HTTP/JSON & GeoJSON Streaming",
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      color: "cyan",
      payload: "GET /api/changes, POST /api/verify, GET /api/reports",
    },
    {
      id: "node-7",
      tier: "TIER 07 / USER INTERFACE",
      title: "Web Frontend",
      subtitle: "Lightweight Geospatial Client",
      tech: "HTML5, Modern CSS3, Vanilla JavaScript",
      icon: <Monitor className="w-5 h-5 text-cyan-400" />,
      color: "cyan",
      payload: "Interactive map view, dual-pane compare slider, telemetry HUD",
    },
    {
      id: "node-8",
      tier: "TIER 08 / ACTIONABLE DELIVERABLES",
      title: "Investigation / Alerts / Reports",
      subtitle: "Operational Decision Dossiers",
      tech: "Audit Logs & Export Handlers",
      icon: <FileSpreadsheet className="w-5 h-5 text-amber-400" />,
      color: "amber",
      payload: "Confirmed/Rejected states, PDF dossiers, and evidence logs",
    },
  ];

  return (
    <section id="architecture" className="py-20 bg-[#080c14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>06 / Technical Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Prototype Architecture
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Data flows in a clean, sequential pipeline from satellite reflectance acquisition down to authorized investigator review and dossier generation.
          </p>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500/30 via-emerald-500/40 to-amber-500/30 -translate-x-1/2 z-0" />

          <div className="space-y-6 relative z-10">
            {pipelineNodes.map((node, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={node.id} className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Left Column (Even nodes on left, Odd empty on desktop) */}
                    <div className={`md:col-span-5 ${isEven ? 'md:text-right' : 'md:order-last md:text-left'}`}>
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-lg group">
                        <div className={`flex items-center gap-2 mb-1.5 font-mono text-[10px] text-cyan-400 font-bold ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          <span>{node.tier}</span>
                        </div>
                        <h3 className="text-base font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                          {node.title}
                        </h3>
                        <div className="text-xs text-slate-400 font-mono mb-2">
                          {node.subtitle}
                        </div>
                        <div className="text-[11px] font-mono px-2 py-1 rounded bg-slate-950/80 border border-slate-800 text-slate-300 inline-block">
                          {node.tech}
                        </div>
                        <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono italic">
                          Payload: {node.payload}
                        </div>
                      </div>
                    </div>

                    {/* Center Node Icon */}
                    <div className="hidden md:flex md:col-span-2 justify-center">
                      <div className="w-11 h-11 rounded-full bg-slate-950 border-2 border-cyan-500/60 flex items-center justify-center shadow-lg shadow-cyan-500/10 z-10 hover:scale-110 transition-transform">
                        {node.icon}
                      </div>
                    </div>

                    {/* Right Column Spacer / Indicator */}
                    <div className={`hidden md:block md:col-span-5 ${isEven ? 'text-left pl-4' : 'text-right pr-4'}`}>
                      <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                        STEP 0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Down Arrow between nodes on mobile */}
                  {index < pipelineNodes.length - 1 && (
                    <div className="flex md:hidden justify-center my-2">
                      <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture Highlights Footer */}
        <div className="mt-12 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Zero proprietary black-box dependencies: Built entirely with open standards and self-contained spatial computing.</span>
          </div>
          <div className="text-cyan-400">
            PostGIS EPSG:4326 / Spatial Indexing Active
          </div>
        </div>
      </div>
    </section>
  );
}
