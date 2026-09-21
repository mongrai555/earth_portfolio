import React from 'react';
import { ExternalLink, Github, Globe, Shield, Sparkles, Layers } from 'lucide-react';
import { Button } from './ui/button';

const GITHUB_PROFILE = 'https://github.com/mongrai555';

/** Repo path on github.com/mongrai555 → full URL. */
const repo = (name) => `${GITHUB_PROFILE}/${name}`;

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "รามยอนออนนี่ QR Table Ordering System",
      subtitle: "ramyonfrontend.vercel.app",
      url: "https://ramyonfrontend.vercel.app/",
      category: "Course Project · Full-Stack Restaurant System",
      description: "Korean food ordering system via QR code (course project \"Korea_food\"). Each table has its own code — diners scan it to open that table's menu, reorder freely through the meal, and settle once at the counter. Backed by a separate REST API with a staff login for order management.",
      tags: ["Course Project", "Next.js", "React", "Tailwind CSS", "REST API", "MongoDB"],
      repos: [
        { label: "Frontend", url: repo("ramyon_frontend") },
        { label: "Backend", url: repo("ramyon-backend") },
      ],
      image: "/ramyon_preview.png",
      fallbackImage: "https://s0.wp.com/mshots/v1/https%3A%2F%2Framyonfrontend.vercel.app%3Fw%3D1200%26h%3D800",
      badge: "Live Web App",
      color: "from-red-600 to-orange-600",
    },
    {
      id: 2,
      title: "Hand Language Learning Web App",
      subtitle: "handlang.vercel.app",
      url: "https://handlang.vercel.app/",
      category: "AI & Web Application",
      description: "Interactive sign language educational web application designed to bridge communication gaps. Features real-time visual recognition concepts and structured lesson modules.",
      tags: ["React", "Next.js", "Tailwind CSS", "Vercel", "Accessibility"],
      repos: [
        { label: "Frontend", url: repo("handlang_front") },
        { label: "Backend", url: repo("hand_lang_back") },
      ],
      image: "/handlang_preview.png",
      fallbackImage: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fhandlang.vercel.app%3Fw%3D1200%26h%3D800",
      badge: "Live Web App",
      color: "from-purple-600 to-indigo-600",
    },
    {
      id: 3,
      title: "Dog MJU Campus Location System",
      subtitle: "dog-mju-front.vercel.app",
      url: "https://dog-mju-front.vercel.app/",
      category: "Course Project · Community Platform",
      description: "Dog location system for the Maejo University campus — not a live tracking system. Community members report and look up where campus dogs have been seen, alongside registration and care records for the CSMJU community.",
      tags: ["Course Project", "React.js", "Tailwind CSS", "Vercel", "REST API"],
      repos: [
        { label: "Frontend", url: repo("dogMJU_front") },
        { label: "Backend", url: repo("dogMJU_back") },
      ],
      image: "/dog_mju_preview.png",
      fallbackImage: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fdog-mju-front.vercel.app%3Fw%3D1200%26h%3D800",
      badge: "Live Web App",
      color: "from-blue-600 to-purple-600",
    },
    {
      id: 4,
      title: "E-Learning OP2P Platform",
      subtitle: "e-learning-op2p.vercel.app",
      url: "https://e-learning-op2p.vercel.app/",
      category: "EdTech & Learning System",
      description: "Peer-to-Peer online learning management system enabling students to share course materials, video lectures, and complete interactive skill quizzes.",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Vercel", "E-Learning"],
      repos: [{ label: "Repository", url: repo("E-learning") }],
      image: "/elearning_preview.png",
      fallbackImage: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fe-learning-op2p.vercel.app%3Fw%3D1200%26h%3D800",
      badge: "Live Web App",
      color: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4d44b5]/20 border border-[#4d44b5]/40 text-xs font-mono text-purple-300 mb-2">
            <Layers className="w-3.5 h-3.5 text-[#4d44b5]" />
            <span>DEFAULT MENU</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Featured Web Projects
          </h2>
          <p className="text-[#9e9e9e] text-sm sm:text-base mt-1">
            Completed web applications deployed on Vercel platform.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <div className="text-xs font-mono text-[#9e9e9e] bg-[#14161f] px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>4 Deployed Production Apps</span>
          </div>
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#9e9e9e] bg-[#14161f] px-4 py-2 rounded-xl border border-white/10 hover:border-[#4d44b5]/60 hover:text-white transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4 text-[#4d44b5]" />
            <span>@mongrai555</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl bg-[#14161f] border border-white/10 hover:border-[#4d44b5] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_0_30px_rgba(77,68,181,0.3)]"
          >
            <div>
              {/* Image Preview Container */}
              <div className="relative h-56 w-full overflow-hidden bg-black/60 group/img border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src = project.fallbackImage;
                  }}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-[#14161f]/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#4d44b5] text-[10px] font-mono font-bold text-white shadow-lg flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.badge}
                </div>

                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 px-2.5 py-1 rounded-lg bg-black/80 border border-[#4d44b5]/40 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#9e9e9e] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#4d44b5]" />
                  {project.subtitle}
                </p>
                <p className="text-xs text-[#9e9e9e] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions: the deployed app, then its source on GitHub */}
            <div className="p-6 pt-0 space-y-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#4d44b5]/20 hover:bg-[#4d44b5] border border-[#4d44b5]/40 text-white font-semibold text-xs transition-all duration-300 group/btn shadow-md"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex gap-2">
                {project.repos.map((r) => (
                  <a
                    key={r.url}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-[#9e9e9e] hover:text-white font-mono text-[11px] transition-all duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{r.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
