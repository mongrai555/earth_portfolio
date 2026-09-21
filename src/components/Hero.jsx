import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code2, Terminal, ArrowRight, Fingerprint, Satellite, Phone, Mail, Instagram, Github } from 'lucide-react';
import { Button } from './ui/button';
import { OrbitalHeroSection } from './ui/orbital-hero-section';

/** True while the viewport is narrow. Drives the art/copy layout swap below. */
function useNarrow(query = '(max-width: 1023px)') {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener('change', sync);
    return () => m.removeEventListener('change', sync);
  }, [query]);
  return narrow;
}

export const Hero = ({ setActiveTab }) => {
  const narrow = useNarrow();
  // Motion values for real-time physics drag tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Dynamic Bezier Curve path calculation for realistic lanyard strap physics
  const pathD = useTransform([x, y], ([latestX, latestY]) => {
    const startX = 180;  // Fixed top anchor X
    const startY = -40;  // Fixed top anchor Y
    const endX = 180 + latestX; // Follows draggable card X
    const endY = 125 + latestY; // Follows draggable card clip Y

    // Control points for organic string bending and sagging physics
    const cp1X = startX + latestX * 0.15;
    const cp1Y = startY + (endY - startY) * 0.45;
    const cp2X = startX + latestX * 0.85;
    const cp2Y = startY + (endY - startY) * 0.85;

    return `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
  });

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-black">
      {/* Orbital background: the Sun runs toward Hercules and the planets chase
          it, so every track is a helix. Sits behind the copy as a layer of its
          own rather than wrapping it, which keeps the grid below untouched. */}
      <div className="absolute inset-0 z-0">
        <OrbitalHeroSection
          // Sun pushed off to the quiet side so the coils never sit under the
          // headline; on a narrow screen the halves stack instead, art low.
          focus={narrow ? [0.5, 0.88] : [0.76, 0.34]}
          scrim={narrow ? 'top' : 'left'}
          scrimStrength={narrow ? 0.94 : 0.9}
          viewRadius={narrow ? 2.2 : 3.2}
          lead={narrow ? 0.05 : 0.12}
          // A phone has no room to stand the art beside the copy, so there it
          // drops back to a quiet texture.
          glow={narrow ? 0.45 : 0.95}
          starCount={narrow ? 700 : 1400}
        />
      </div>

      {/* Brand wash: keeps the portfolio's purple in a frame that is otherwise
          black, without lifting the blacks the scrim is relying on. */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#4d44b5]/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & Intro */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Top Badges: identity, then where he is working right now */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14161f] border border-white/10 text-xs font-mono text-[#9e9e9e]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4d44b5] animate-ping" />
              <span className="text-white font-semibold">Natdanai Puwong (Earth)</span>
              <span className="text-[#9e9e9e]">| CSMJU Computer Science</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
              <Satellite className="w-3.5 h-3.5" />
              <span className="font-semibold">Internship @ GISTDA Thailand</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.05]">
              Natdanai Puwong <br />
              <span className="text-[#4d44b5] font-black">(Earth)</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#9e9e9e] font-sans">นายณัฐดนัย ปู่วงษ์</p>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-1 w-12 bg-[#4d44b5] rounded-full" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white/90 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-[#4d44b5]" />
                <span className="bg-gradient-to-r from-white via-gray-200 to-[#7c73e6] bg-clip-text text-transparent">
                  Programmer
                </span>
              </h2>
            </div>
          </div>

          {/* About me — the self-introduction from the resume, sitting directly
              under the name so it is the first thing read after it. */}
          <div className="max-w-2xl border-l-2 border-[#4d44b5]/60 pl-5 space-y-3">
            <p className="text-[#9e9e9e] text-base sm:text-lg leading-relaxed font-sans">
              I'm <span className="text-white font-semibold">Natdanai Puwong</span>, a Computer
              Science student at Maejo University's Faculty of Science. I'm interested in{' '}
              <span className="text-white font-semibold">artificial intelligence</span> and{' '}
              <span className="text-white font-semibold">cybersecurity</span>. I'm sociable and
              friendly — I might seem a bit quiet at first glance, but I enjoy talking to people.
            </p>
            <p className="text-[#9e9e9e] text-base sm:text-lg leading-relaxed font-sans">
              I'm currently doing my programmer internship at{' '}
              <span className="text-emerald-300 font-semibold">GISTDA Thailand</span>, learning
              new skills in software development and programming techniques relevant to today's
              world. I want to be a part of creating results that help develop various projects.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg border-y border-white/10 py-4">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white font-display">2.91</p>
              <p className="text-xs text-[#9e9e9e] uppercase font-mono">GPA · CSMJU</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#4d44b5] font-display">GISTDA</p>
              <p className="text-xs text-[#9e9e9e] uppercase font-mono">Programmer Intern</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white font-display">4 Web</p>
              <p className="text-xs text-[#9e9e9e] uppercase font-mono">Live Projects</p>
            </div>
          </div>

          {/* Direct contact rail, straight from the resume */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href="tel:+66815180195"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14161f] border border-white/10 text-xs font-mono text-[#9e9e9e] hover:border-[#4d44b5] hover:text-white transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#4d44b5]" />
              081 518 0195
            </a>
            <a
              href="mailto:natdanai.puwong@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14161f] border border-white/10 text-xs font-mono text-[#9e9e9e] hover:border-[#4d44b5] hover:text-white transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#4d44b5]" />
              natdanai.puwong@gmail.com
            </a>
            <a
              href="https://www.instagram.com/exrth.official/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14161f] border border-white/10 text-xs font-mono text-[#9e9e9e] hover:border-[#4d44b5] hover:text-white transition-all"
            >
              <Instagram className="w-3.5 h-3.5 text-[#4d44b5]" />
              @exrth.official
            </a>
            <a
              href="https://github.com/mongrai555"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14161f] border border-white/10 text-xs font-mono text-[#9e9e9e] hover:border-[#4d44b5] hover:text-white transition-all"
            >
              <Github className="w-3.5 h-3.5 text-[#4d44b5]" />
              github.com/mongrai555
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button 
              variant="purpleGlow"
              size="lg"
              onClick={() => {
                setActiveTab('projects');
                document.getElementById('main-menu-tabs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setActiveTab('skills');
                document.getElementById('main-menu-tabs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2"
            >
              <Terminal className="w-5 h-5 text-[#4d44b5]" />
              <span>View Technical Skills</span>
            </Button>
          </div>
        </motion.div>

        {/* Right Column: TikTok Style 3D Physics Lanyard Card Container */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-12 min-h-[580px]">
          
          {/* Lanyard Mounting Stage */}
          <motion.div 
            initial={{ y: -600, opacity: 0, rotateZ: -15 }}
            animate={{ y: 0, opacity: 1, rotateZ: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 13, mass: 1.3, delay: 0.2 }}
            className="relative w-[360px] flex flex-col items-center justify-center"
          >
            {/* Woven Lanyard Strap SVG Path */}
            <svg className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0 overflow-visible">
              <defs>
                <linearGradient id="blackLanyardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#09090b" />
                  <stop offset="40%" stopColor="#18181b" />
                  <stop offset="100%" stopColor="#27272a" />
                </linearGradient>
                <filter id="blackLanyardGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Ambient Glow behind ribbon */}
              <motion.path
                d={pathD}
                stroke="#4d44b5"
                strokeWidth="28"
                strokeLinecap="round"
                fill="none"
                opacity="0.4"
                filter="url(#blackLanyardGlow)"
              />

              {/* Dark Outer Casing Border */}
              <motion.path
                d={pathD}
                stroke="#000000"
                strokeWidth="22"
                strokeLinecap="round"
                fill="none"
              />

              {/* Main Black Woven Fabric Strap */}
              <motion.path
                id="lanyardStrapPath"
                d={pathD}
                stroke="url(#blackLanyardGrad)"
                strokeWidth="16"
                strokeLinecap="round"
                fill="none"
              />

              {/* Printed "CSMJU" Text Along the Strap */}
              <text
                fill="#ffffff"
                fontSize="9"
                fontWeight="800"
                letterSpacing="3"
                className="uppercase select-none font-mono"
              >
                <textPath href="#lanyardStrapPath" startOffset="0%" method="stretch" spacing="auto">
                  CSMJU • CSMJU • CSMJU • CSMJU • CSMJU
                </textPath>
              </text>
            </svg>

            {/* Draggable TikTok Style ID Card & Carabiner Latch Assembly */}
            <motion.div
              style={{ x, y }}
              drag
              dragSnapToOrigin={true}
              dragElastic={0.5}
              dragConstraints={{ left: -140, right: 140, top: -50, bottom: 220 }}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
              animate={{ rotateZ: [-1.5, 1.5, -1.5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              whileHover={{ scale: 1.02, cursor: "grab" }}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              className="z-10 flex flex-col items-center relative select-none cursor-grab active:cursor-grabbing pt-28"
            >
              {/* Black Metallic Carabiner / Snap Hook Clip (TikTok style) */}
              <div className="z-20 w-8 h-10 border-4 border-zinc-700 bg-zinc-900 rounded-b-xl shadow-2xl flex flex-col items-center justify-between -mb-3 relative">
                <div className="w-5 h-1.5 bg-zinc-600 rounded-sm mt-0.5" />
                <div className="w-2 h-4 border-r-2 border-zinc-400" />
              </div>

              {/* Swivel Carabiner Hook Loop entering Card Hole */}
              <div className="z-20 w-5 h-7 rounded-b-full border-4 border-zinc-800 bg-zinc-950 shadow-inner -mb-4 relative" />

              {/* TikTok Style ID Badge Card (Matching @david.webdeveloper video) */}
              <div className="w-80 sm:w-88 rounded-[2.5rem] p-6 bg-gradient-to-b from-[#f8f9fa] via-[#e9ecef] to-[#f1f3f5] text-zinc-900 border-4 border-white/80 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(77,68,181,0.35)] relative overflow-hidden flex flex-col items-center text-center group">
                
                {/* Lanyard Punched Hole at Top */}
                <div className="w-10 h-3.5 bg-zinc-900 rounded-full mx-auto mb-3 border-2 border-zinc-700 shadow-inner flex items-center justify-center">
                  <div className="w-6 h-1 bg-[#4d44b5] rounded-full" />
                </div>

                {/* Verification Shield Pill */}
                <div className="absolute top-5 right-5 flex items-center gap-1 bg-black/10 border border-black/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-zinc-800 font-bold">
                  <Fingerprint className="w-3 h-3 text-[#4d44b5]" />
                  VERIFIED
                </div>

                {/* Large Circular Portrait Photo (As seen in TikTok video) */}
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto my-1 group-hover:scale-105 transition-transform duration-300 bg-zinc-200">
                  <img 
                    src="/unnamed.jpg" 
                    alt="Natdanai Puwong" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Handwritten "Hello!" Text Overlapping Photo Bottom */}
                <h3 className="font-handwritten text-5xl sm:text-6xl font-extrabold text-zinc-900 -mt-7 relative z-10 drop-shadow-md select-none tracking-tight">
                  Hello!
                </h3>

                {/* Handwritten "My name is" Subtext */}
                <p className="font-handwritten text-2xl sm:text-3xl text-zinc-700 mt-1 select-none font-bold">
                  My name is
                </p>

                {/* Solid Black Badge at Bottom with Handwritten Name */}
                <div className="mt-2 w-full max-w-[240px] bg-zinc-950 text-white px-6 py-2.5 rounded-2xl shadow-xl border border-zinc-800 flex flex-col items-center justify-center">
                  <span className="font-handwritten text-4xl sm:text-5xl font-extrabold text-white tracking-wide leading-none">
                    Natdanai!
                  </span>
                  <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest mt-1 font-semibold">
                    "Earth" • CSMJU
                  </span>
                </div>

                {/* Bottom Footer Info */}
                <div className="mt-4 pt-3 border-t border-zinc-300/80 w-full flex items-center justify-between text-[11px] font-mono text-zinc-600">
                  <span>CSMJU Computer Science</span>
                  <span className="font-bold text-[#4d44b5]">#PROGRAMMER</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
