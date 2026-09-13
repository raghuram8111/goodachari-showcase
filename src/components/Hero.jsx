import React from 'react';
import { ArrowRight, Play, Satellite } from 'lucide-react';
import { PROJECT_INFO } from '../data/showcaseData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-geo-grid border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Information (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Simple Event Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-mono">
              <Satellite className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PROJECT_INFO.eventBadge}</span>
            </div>

            {/* Project Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-mono">
                {PROJECT_INFO.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-slate-300">
                {PROJECT_INFO.title}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg text-cyan-300/90 font-mono leading-relaxed border-l-2 border-cyan-500/50 pl-4 py-0.5">
              "{PROJECT_INFO.tagline}"
            </p>

            {/* Supporting Explanation */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-sans">
              {PROJECT_INFO.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono">
              <a
                href="#prototype"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Explore Prototype</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-medium transition-colors"
              >
                <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                <span>Watch Demo</span>
              </a>

              <a
                href="#final-vision"
                className="text-xs text-slate-400 hover:text-cyan-300 underline underline-offset-4 transition-colors ml-1"
              >
                Prototype vs Final Matrix →
              </a>
            </div>
          </div>

          {/* Clean Engineering Overview Card (Right 5 cols) - Serious, Informative, No Sci-Fi Clutter */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  System Scope & Data Architecture
                </span>
                <span className="font-mono text-[11px] text-cyan-400">
                  SIH 2026 Dossier
                </span>
              </div>

              {/* Block 1: CURRENT PROTOTYPE */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wide">
                      Current Prototype
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
                    Working Implementation
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Prototype Satellite Data</span>
                    <span className="text-slate-100 font-medium">Sentinel-2 & Landsat Surface Reflectance</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/60 text-[11px]">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Spatial Extent</span>
                      <span className="text-slate-200">Demonstration AOI</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Spatial Engine</span>
                      <span className="text-slate-200">PostgreSQL + PostGIS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 2: FINAL VISION */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wide">
                      Final Vision
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60 text-cyan-300">
                    Government Target
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Target Satellite Sources</span>
                    <span className="text-slate-100 font-medium">Official Indian Earth Observation (ISRO / Bhuvan)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/60 text-[11px]">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Key Integrations</span>
                      <span className="text-slate-200">Cadastral & Land Records</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Monitoring Scale</span>
                      <span className="text-slate-200">Statewide Continuous</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed border-t border-slate-800/80 pt-3">
                Demonstrating automated satellite change detection, geospatial filtering, and decision workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
