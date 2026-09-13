import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Satellite, ChevronDown, ChevronRight, Layers, Globe, Shield, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();
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
      icon: <Layers className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />,
      items: [
        { name: 'What We Built', href: '#prototype', desc: 'Core proof-of-concept stack & scope' },
        { name: 'NBKRIST Campus Demo', href: '#nbkrist-demo', desc: 'Real-world campus AOI evaluation' },
        { name: 'Prototype Workflow', href: '#workflow', desc: '9-step pipeline & decision states' },
        { name: 'Technology Stack', href: '#tech-stack', desc: 'HTML, Node.js, PostGIS, Sentinel-2' },
        { name: 'System Architecture', href: '#architecture', desc: 'Data flow from satellite to reports' },
        { name: 'Inside the Prototype', href: '#screenshots', desc: 'Gallery of prototype views' },
        { name: 'Demo Video', href: '#demo', desc: 'Video demonstration walkthrough' },
      ],
    },
    {
      id: 'vision',
      label: 'Vision & Roadmap',
      icon: <Globe className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />,
      items: [
        { name: 'The Problem', href: '#problem', desc: 'Why land monitoring needs intelligence' },
        { name: 'Final Solution Concept', href: '#approach', desc: 'Target end-to-end concept' },
        { name: 'Prototype vs Final', href: '#final-vision', desc: 'Side-by-side strategic comparison' },
        { name: 'Government Workflow', href: '#final-workflow', desc: 'Automated 12-tier pipeline' },
        { name: 'Future Integrations', href: '#future', desc: 'Target: Official Indian EO, Cadastral, Land Records' },
      ],
    },
    {
      id: 'governance',
      label: 'Governance & Impact',
      icon: <Shield className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />,
      items: [
        { name: 'RBAC Model', href: '#rbac', desc: 'Admin & Authorized Officer roles' },
        { name: 'Potential Impact', href: '#impact', desc: 'Engineered operational benefits' },
        { name: 'References & Standards', href: '#references', desc: 'Copernicus Sentinel-2, PostGIS docs' },
      ],
    },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#080c14]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-lg'
          : 'bg-white/90 dark:bg-[#080c14]/90 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-800/50'
      }`}
    >
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Name - GOODACHARI (Team Name) */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
              <Satellite className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-base font-bold tracking-wider text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  GOODACHARI
                </span>
                <span className="text-[10px] font-mono font-medium uppercase px-1.5 py-0.2 rounded bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700/50">
                  SIH 2026 Team
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-tight hidden sm:block">
                AI-Powered Land Intelligence
              </span>
            </div>
          </a>

          {/* Grouped Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 font-mono">
            <a
              href="#hero"
              className="px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded transition-colors"
            >
              Overview
            </a>

            {menuGroups.map((group) => {
              const isOpen = activeDropdown === group.id;
              return (
                <div key={group.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(group.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded transition-colors ${
                      isOpen
                        ? 'text-cyan-600 dark:text-cyan-300 bg-slate-100 dark:bg-slate-800'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : 'text-slate-400 dark:text-slate-500'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Panel */}
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-2 z-50">
                      <div className="px-2.5 py-1 mb-1 flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                        {group.icon}
                        <span>{group.label}</span>
                      </div>
                      <div className="space-y-0.5">
                        {group.items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                          >
                            <div className="text-xs font-semibold text-slate-900 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                              <span>{item.name}</span>
                              <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight font-sans">
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

          {/* Quick CTA Actions & Light/Dark Mode Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              href="#prototype"
              className="hidden sm:inline-block px-3 py-1.5 text-xs font-mono font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/40 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 border border-emerald-300 dark:border-emerald-500/30 rounded transition-colors"
            >
              Prototype Specs
            </a>
            <a
              href="#demo"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-medium text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/40 hover:bg-cyan-200 dark:hover:bg-cyan-900/50 border border-cyan-300 dark:border-cyan-500/30 rounded transition-colors"
            >
              Watch Demo
              <ChevronRight className="w-3 h-3" />
            </a>

            {/* Mobile menu toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2 rounded text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-500" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0a0f1d] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 rounded"
          >
            Overview
          </a>

          {menuGroups.map((group) => (
            <div key={group.id} className="space-y-1">
              <div className="px-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                {group.icon}
                <span>{group.label}</span>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-1.5 rounded bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href="#prototype"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 px-3 rounded bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono"
            >
              Explore Implemented Prototype
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 px-3 rounded bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono"
            >
              Watch Video Demonstration
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
