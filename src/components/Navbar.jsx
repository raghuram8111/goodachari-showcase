import React, { useState, useEffect } from 'react';
import { Menu, X, Satellite, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Problem', href: '#problem' },
    { name: 'Approach', href: '#approach' },
    { name: 'Prototype', href: '#prototype' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'Demo', href: '#demo' },
    { name: 'Final Vision', href: '#final-vision' },
    { name: 'Future', href: '#future' },
    { name: 'RBAC', href: '#rbac' },
    { name: 'Impact', href: '#impact' },
    { name: 'References', href: '#references' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#080c14]/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/40'
          : 'bg-[#080c14]/80 backdrop-blur-sm border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/40 flex items-center justify-center shadow-inner group-hover:border-cyan-400 transition-colors">
              <Satellite className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-lg font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                  GODACHARI
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                  SIH 2026
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-tight hidden sm:block">
                Land Intelligence & Monitoring
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-md transition-colors font-mono"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#prototype"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 hover:border-emerald-400 rounded transition-all shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Prototype Specs
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 hover:border-cyan-400 rounded transition-all shadow-sm"
            >
              Watch Demo
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Navigation Menu • SIH 2026
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
              Prototype Showcase
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 rounded-md transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3 h-3 text-slate-600" />
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href="#prototype"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 px-3 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium"
            >
              Explore Implemented Prototype
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 px-3 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium"
            >
              Watch Video Demonstration
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
