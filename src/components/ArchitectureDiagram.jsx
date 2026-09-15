import React from 'react';
import { ArrowDown, Satellite, Cpu, Layers, Database, Server, Globe, Monitor, FileSpreadsheet } from 'lucide-react';

export default function ArchitectureDiagram() {
  const pipelineNodes = [
    {
      id: "node-1",
      title: "Satellite Data Ingestion",
      tech: "Sentinel-2 Surface Reflectance",
      desc: "Calibrated Level-2A surface reflectance optical bands (B4, B8, B11, B12) at 10m-20m spatial resolution.",
      icon: <Satellite className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      id: "node-2",
      title: "Change Detection Service",
      tech: "Multi-Band Spectral Differencing",
      desc: "Pixel-wise differential computation across NDVI, NDBI, and surface reflectance indices.",
      icon: <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: "node-3",
      title: "Geospatial Processing",
      tech: "AOI Clipping & Spatial Clustering",
      desc: "Campus boundary masking, noise filtering, and polygonization into discrete vector change zones.",
      icon: <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    },
    {
      id: "node-4",
      title: "PostGIS Spatial Database",
      tech: "PostgreSQL + PostGIS Extension",
      desc: "Persists vector geometries with GiST spatial indexing, area metrics, and audit records.",
      icon: <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      id: "node-5",
      title: "Node.js / Express Backend",
      tech: "Asynchronous REST Services",
      desc: "Coordinates spatial queries, status transitions, and data delivery to the frontend client.",
      icon: <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: "node-6",
      title: "Web Frontend Client",
      tech: "HTML / CSS / Vanilla JavaScript",
      desc: "Native browser geospatial client featuring split-pane compare and case review tools.",
      icon: <Monitor className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      id: "node-7",
      title: "Investigation / Alerts / Reports",
      tech: "Evidence Dossiers & Export",
      desc: "Persisted determinations (Confirmed / Rejected / Uncertain) and structured summary reports.",
      icon: <FileSpreadsheet className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section id="data-pipeline" className="py-24 bg-slate-50 dark:bg-[#080c14] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            PROTOTYPE DATA PIPELINE
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            End-to-end data flow from Sentinel-2 reflectance ingestion down to authorized investigator decision.
          </p>
        </div>

        {/* Clean, Spacious Pipeline Flow */}
        <div className="max-w-3xl mx-auto space-y-4">
          {pipelineNodes.map((node, index) => (
            <div key={node.id}>
              <div className="p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {node.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                      {node.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      {node.tech}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {node.desc}
                  </p>
                </div>
              </div>

              {index < pipelineNodes.length - 1 && (
                <div className="flex justify-center my-1.5">
                  <ArrowDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
