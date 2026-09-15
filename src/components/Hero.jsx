import React from 'react';
import { ArrowRight, Play, Satellite, Database, MapPin } from 'lucide-react';
import { TEAM_INFO } from '../data/showcaseData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-geo-grid border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Hero Information (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Team Identity Hierarchy */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium">
              <span className="font-bold text-cyan-600 dark:text-cyan-400">{TEAM_INFO.teamName}</span>
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600"></span>
              <span className="text-slate-600 dark:text-slate-400 font-semibold">{TEAM_INFO.teamLabel}</span>
            </div>

            {/* Project Title & Showcase Subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-mono leading-tight">
                {TEAM_INFO.projectTitle}
              </h1>
              <div className="text-sm sm:text-base font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide uppercase">
                {TEAM_INFO.subtitle}
              </div>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-2xl border-l-2 border-emerald-500/60 pl-4 py-0.5">
              "{TEAM_INFO.description}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 font-mono">
              <a
                href="#nbkrist-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 text-sm font-semibold transition-colors shadow-sm"
              >
                <span>Explore Prototype</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-sm font-medium transition-colors shadow-sm"
              >
                <Play className="w-4 h-4 text-cyan-600 dark:text-cyan-400 fill-current" />
                <span>Watch Demo</span>
              </a>
            </div>
          </div>

          {/* Compact Current Prototype Indicator (Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm dark:shadow-lg space-y-5 transition-colors">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    CURRENT PROTOTYPE
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 font-medium">
                  Implemented
                </span>
              </div>

              <div className="space-y-3 font-mono">
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-start gap-3">
                  <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 mt-0.5">
                    <Satellite className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      Sentinel-2 Surface Reflectance
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-sans">
                      Multi-temporal optical 10m-20m surface reflectance bands
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-start gap-3">
                  <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      NBKRIST Campus AOI
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-sans">
                      Real-world evaluation boundary & change localization
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-start gap-3">
                  <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      PostgreSQL + PostGIS
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-sans">
                      Spatial database persistence & GiST spatial indexing
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
