import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Satellite, ChevronDown, ChevronRight, Layers, Globe, Shield } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const menuGroups = [
    {
      id: 'prototype',
      label: 'Current Prototype',
      icon: <Layers className="w-3.5 h-3.5 text-emerald-400" />,
      items: [
        { name: 'What We Built', href: '#prototype', desc: 'Core proof-of-concept stack & scope' },
        { name: 'Prototype Workflow', href: '#workflow', desc: '9-step pipeline & decision states' },
        { name: 'Technology Stack', href: '#tech-stack', desc: 'Layers: HTML, Node, PostGIS' },
        { name: 'System Architecture', href: '#architecture', desc: 'Data flow from satellite to reports' },
        { name: 'Inside the Prototype', href: '#screenshots', desc: 'Gallery of prototype views' },
        { name: 'Demo Video', href: '#demo', desc: 'Video demonstration walkthrough' },
      ],
    },
    {
      id: 'vision',
      label: 'Vision & Roadmap',
      icon: <Globe className="w-3.5 h-3.5 text-cyan-400" />,
      items: [
        { name: 'The Problem', href: '#problem', desc: 'Why land monitoring needs intelligence' },
        { name: 'Final Solution Concept', href: '#approach', desc: 'Target end-to-end concept' },
        { name: 'Prototype vs Final', href: '#final-vision', desc: 'Side-by-side strategic comparison' },
        { name: 'Government Workflow', href: '#final-workflow', desc: 'Automated 12-tier pipeline' },
        { name: 'Future Integrations', href: '#future', desc: 'Indian EO, Cadastral, Land Records' },
      ],
    },
    {
      id: 'governance',
      label: 'Governance & Impact',
      icon: <Shield className="w-3.5 h-3.5 text-indigo-400" />,
      items: [
        { name: 'RBAC Model', href: '#rbac', desc: 'Admin & Authorized Officer roles' },
        { name: 'Potential Impact', href: '#impact', desc: 'Engineered operational benefits' },
        { name: 'References & Standards', href: '#references', desc: 'Copernicus, Landsat, PostGIS docs' },
      ],
    },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#080c14]/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/40'
          : 'bg-[#080c14]/85 backdrop-blur-sm border-b border-slate-800/60'
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
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                  SIH 2026
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-tight hidden md:block">
                Land Intelligence & Monitoring
              </p>
            </div>
          </a>

          {/* Grouped Desktop Navigation (Clean on Laptops & Desktops) */}
          <nav className="hidden lg:flex items-center space-x-1 font-mono">
            {/* Direct Overview Link */}
            <a
              href="#hero"
              className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-md transition-colors"
            >
              Overview
            </a>

            {/* Dropdown Groups */}
            {menuGroups.map((group) => {
              const isOpen = activeDropdown === group.id;
              return (
                <div key={group.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(group.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                      isOpen
                        ? 'text-cyan-300 bg-slate-800/90'
                        : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-cyan-400' : 'text-slate-500'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Panel */}
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-slate-950 border border-slate-800 shadow-2xl p-2 z-50 animate-fade-in">
                      <div className="px-2.5 py-1.5 border-b border-slate-800/80 mb-1 flex items-center gap-1.5 text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        {group.icon}
                        <span>{group.label}</span>
                      </div>
                      <div className="space-y-0.5">
                        {group.items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-2 rounded-lg hover:bg-slate-900 transition-colors group"
                          >
                            <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                              <span>{item.name}</span>
                              <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5 leading-tight font-sans">
                              {item.desc}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden sm:flex items-center gap-2">
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
          <div className="flex lg:hidden">
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

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Site Index • SIH 2026
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
              Prototype Showcase
            </span>
          </div>

          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-mono text-slate-200 bg-slate-900 rounded-md"
          >
            Overview
          </a>

          {menuGroups.map((group) => (
            <div key={group.id} className="space-y-1">
              <div className="px-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                {group.icon}
                <span>{group.label}</span>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-md bg-slate-900/60 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
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
