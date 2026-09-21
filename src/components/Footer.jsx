import React from 'react';
import { Code2, Satellite, Terminal, Github, Mail, Phone, Instagram, Globe, ArrowUp, Cpu, Heart } from 'lucide-react';
import { Button } from './ui/button';

export const Footer = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact-footer" className="relative pt-20 pb-12 border-t border-white/10 bg-[#0c0d12] overflow-hidden">
      {/* Background Subtle Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <span className="text-[20vw] font-black font-display text-white">
          CSMJU
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Row: Branding & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#4d44b5] to-[#7c73e6] flex items-center justify-center shadow-[0_0_15px_rgba(77,68,181,0.5)]">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                Natdanai Puwong <span className="text-[#4d44b5]">(Earth)</span>
              </h3>
            </div>

            <p className="text-[#9e9e9e] text-sm leading-relaxed max-w-md">
              Programmer specializing in Full-Stack Web Development, API design, and secure application engineering. Computer Science student at Maejo University.
            </p>

            {/* CSMJU Required Footer Text (from portfolio.md line 66) */}
            <div className="p-4 rounded-2xl bg-[#14161f] border border-[#4d44b5]/30 inline-block space-y-1">
              <p className="text-xs font-mono font-bold text-purple-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#4d44b5]" />
                CSMJU สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
              </p>
              <p className="text-[11px] text-[#9e9e9e]">
                Department of Computer Science, Maejo University
              </p>
              <p className="text-[11px] text-emerald-300 font-mono flex items-center gap-2 pt-1">
                <Satellite className="w-3.5 h-3.5" />
                Programmer Internship @ GISTDA Thailand
              </p>
            </div>

            {/* Direct contact, straight from the resume */}
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="tel:+66815180195"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#14161f] border border-white/10 text-xs font-mono text-[#9e9e9e] hover:border-[#4d44b5] hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#4d44b5]" />
                081 518 0195
              </a>
              <a
                href="mailto:natdanai.puwong@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#14161f] border border-white/10 text-xs font-mono text-[#9e9e9e] hover:border-[#4d44b5] hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#4d44b5]" />
                natdanai.puwong@gmail.com
              </a>
              <a
                href="https://www.instagram.com/exrth.official/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#14161f] border border-white/10 text-xs font-mono text-[#9e9e9e] hover:border-[#4d44b5] hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#4d44b5]" />
                @exrth.official
              </a>
              <a
                href="https://github.com/mongrai555"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#14161f] border border-white/10 text-xs font-mono text-[#9e9e9e] hover:border-[#4d44b5] hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#4d44b5]" />
                github.com/mongrai555
              </a>
            </div>
          </div>

          {/* Quick Links & Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#4d44b5] uppercase tracking-wider">
              Navigation Menu
            </h4>
            <ul className="space-y-2 text-sm text-[#9e9e9e]">
              {['Projects', 'Skills', 'Certificate', 'Other works'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => {
                      setActiveTab(tab.toLowerCase().replace(' ', ''));
                      document.getElementById('main-menu-tabs')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#4d44b5]">›</span> {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#4d44b5] uppercase tracking-wider">
              Connect & Deployments
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#9e9e9e]">
              <a href="https://github.com/mongrai555" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors font-semibold">
                <Github className="w-3.5 h-3.5" />
                GitHub: @mongrai555
              </a>
              <a href="https://ramyonfrontend.vercel.app/" target="_blank" rel="noreferrer" className="block hover:text-white transition-colors">
                • Ramyon Onnie: ramyonfrontend.vercel.app
              </a>
              <a href="https://handlang.vercel.app/" target="_blank" rel="noreferrer" className="block hover:text-white transition-colors">
                • Hand Lang: handlang.vercel.app
              </a>
              <a href="https://dog-mju-front.vercel.app/" target="_blank" rel="noreferrer" className="block hover:text-white transition-colors">
                • Dog MJU: dog-mju-front.vercel.app
              </a>
              <a href="https://e-learning-op2p.vercel.app/" target="_blank" rel="noreferrer" className="block hover:text-white transition-colors">
                • E-Learning: e-learning-op2p.vercel.app
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row: Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9e9e9e]">
          <p>
            © {new Date().getFullYear()} Natdanai Puwong (Earth). CSMJU Computer Science, Maejo University.
          </p>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border-white/20 hover:border-[#4d44b5]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#4d44b5]" />
          </Button>
        </div>

      </div>
    </footer>
  );
};
