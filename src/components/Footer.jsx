import React from 'react';
import { Satellite, ArrowUp } from 'lucide-react';
import { PROJECT_INFO } from '../data/showcaseData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-800/80 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center">
                <Satellite className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-base font-bold text-white tracking-wider">
                {PROJECT_INFO.name}
              </span>
              <span className="text-[10px] text-slate-500 ml-1">
                SIH 2026 Showcase
              </span>
            </div>

            <div className="text-xs text-slate-300 font-medium">
              {PROJECT_INFO.title}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md font-sans">
              A prototype and technical showcase for Smart India Hackathon 2026. Transforming multi-temporal satellite imagery into actionable land-change intelligence.
            </p>
          </div>

          {/* Prototype Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Prototype Modules
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#prototype" className="hover:text-cyan-400 transition-colors">Core Prototype Stack</a></li>
              <li><a href="#workflow" className="hover:text-cyan-400 transition-colors">9-Step Workflow</a></li>
              <li><a href="#tech-stack" className="hover:text-cyan-400 transition-colors">Architecture Tiers</a></li>
              <li><a href="#screenshots" className="hover:text-cyan-400 transition-colors">Screenshot Gallery</a></li>
              <li><a href="#demo" className="hover:text-cyan-400 transition-colors">Demo Video Player</a></li>
            </ul>
          </div>

          {/* Vision & Governance */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Vision & Governance
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#approach" className="hover:text-cyan-400 transition-colors">Final Solution Concept</a></li>
              <li><a href="#final-vision" className="hover:text-cyan-400 transition-colors">Prototype vs Final Matrix</a></li>
              <li><a href="#final-workflow" className="hover:text-cyan-400 transition-colors">Government Workflow</a></li>
              <li><a href="#future" className="hover:text-cyan-400 transition-colors">Future Integrations</a></li>
              <li><a href="#rbac" className="hover:text-cyan-400 transition-colors">Role-Based Access Control</a></li>
              <li><a href="#references" className="hover:text-cyan-400 transition-colors">Documentation & Standards</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Team Godachari • SIH 2026 Prototype Showcase
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
