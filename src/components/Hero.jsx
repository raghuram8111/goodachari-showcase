import React from 'react';
import { ArrowRight, Play, Satellite, CheckCircle, Globe } from 'lucide-react';
import { TEAM_INFO } from '../data/showcaseData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-geo-grid border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Information (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Team Identity Hierarchy */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-semibold">
                <Satellite className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{TEAM_INFO.teamName}</span>
                <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                <span className="text-slate-600 dark:text-slate-400 font-normal">{TEAM_INFO.teamLabel}</span>
              </div>
            </div>

            {/* Project Title & Showcase Subtitle */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-mono leading-tight">
                {TEAM_INFO.projectTitle}
              </h1>
              <div className="text-sm font-mono text-emerald-700 dark:text-emerald-400 font-medium uppercase tracking-wider">
                {TEAM_INFO.subtitle}
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-cyan-300/90 font-mono leading-relaxed border-l-2 border-cyan-500/60 pl-4 py-0.5">
              "{TEAM_INFO.tagline}"
            </p>

            {/* Supporting Explanation */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-sans">
              {TEAM_INFO.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono">
              <a
                href="#prototype"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                <span>Explore Prototype</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-medium transition-colors"
              >
                <Play className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 fill-current" />
                <span>Watch Demo</span>
              </a>

              <a
                href="#nbkrist-demo"
                className="text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 underline underline-offset-4 transition-colors ml-1"
              >
                NBKRIST Campus AOI Demo →
              </a>
            </div>
          </div>

          {/* Right-Side Architecture Card (Right 5 cols) - Mandatory Summary */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-md dark:shadow-xl space-y-6 transition-colors">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <span className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
                  System Architecture & Data Scope
                </span>
                <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 font-bold">
                  SIH 2026
                </span>
              </div>

              {/* Block 1: CURRENT PROTOTYPE */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                      CURRENT PROTOTYPE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300">
                    Implemented Baseline
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-2 text-xs font-mono">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-900 dark:text-slate-100 font-medium">Sentinel-2 Surface Reflectance</span>
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Multi-temporal optical 10m-20m bands</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-1 border-t border-slate-200 dark:border-slate-800/60">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-900 dark:text-slate-100 font-medium">NBKRIST Campus AOI</span>
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Demonstrated campus evaluation boundary</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-1 border-t border-slate-200 dark:border-slate-800/60">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-900 dark:text-slate-100 font-medium">PostgreSQL + PostGIS</span>
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Spatial database persistence & GiST indexing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 2: FINAL VISION */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    <span className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide">
                      FINAL VISION
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-300">
                    Future Target
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-2 text-xs font-mono">
                  <div className="flex items-start gap-2">
                    <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-900 dark:text-slate-100 font-medium">Target: Official / Authorized Indian Earth Observation Sources</span>
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Sovereign remote sensing data infrastructure</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-1 border-t border-slate-200 dark:border-slate-800/60">
                    <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-900 dark:text-slate-100 font-medium">Parcel & Land Records Integration</span>
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Cadastral boundaries, RoR / Bhulekh & zoning bylaws</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-1 border-t border-slate-200 dark:border-slate-800/60">
                    <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-900 dark:text-slate-100 font-medium">Continuous Large-Scale Monitoring</span>
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Automated statewide pipelines & regional RBAC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
