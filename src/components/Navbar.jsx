import React, { useState, useEffect } from 'react';
import { Satellite, Terminal, Menu, X, Cpu, Github } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0f0f13]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo / Header Title Section */}
        <div 
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div>
            <div className="flex items-center gap-1.5 font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              <span>My</span>
              <span className="text-[#4d44b5] group-hover:text-purple-400 transition-colors">Portfolio</span>
              <span className="w-2 h-2 rounded-full bg-[#4d44b5] inline-block animate-pulse"></span>
            </div>
            <p className="text-[11px] font-mono text-[#9e9e9e] tracking-wider uppercase flex items-center gap-1">
              <Terminal className="w-3 h-3 text-[#4d44b5]" />
              CSMJU Computer Science
            </p>
          </div>
        </div>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#14161f]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
          {[
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'certificate', label: 'Certificate' },
            { id: 'otherwork', label: 'Other Works' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                document.getElementById('main-menu-tabs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#4d44b5] text-white shadow-[0_0_15px_rgba(77,68,181,0.5)]'
                  : 'text-[#9e9e9e] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <Satellite className="w-3.5 h-3.5" />
            Intern @ GISTDA Thailand
          </div>
          <a
            href="https://github.com/mongrai555"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile: mongrai555"
            title="github.com/mongrai555"
            className="p-2 rounded-full bg-[#14161f] border border-white/10 text-[#9e9e9e] hover:text-white hover:border-[#4d44b5] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <Button
            variant="purpleGlow" 
            size="sm"
            onClick={() => {
              document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2"
          >
            <Cpu className="w-4 h-4" />
            Contact
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#14161f] border border-white/10 text-white hover:border-[#4d44b5]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#14161f] border-b border-white/10 px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          {[
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'certificate', label: 'Certificate' },
            { id: 'otherwork', label: 'Other Works' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setMobileMenuOpen(false);
                document.getElementById('main-menu-tabs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#4d44b5] text-white'
                  : 'text-[#9e9e9e] hover:bg-white/5 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
