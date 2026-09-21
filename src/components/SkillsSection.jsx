import React from 'react';
import { Code2, Layout, Wrench, Laptop, Cpu, Sparkles } from 'lucide-react';

export const SkillsSection = () => {
  // Brand icon map. Keys mirror the Technical Skill list on the printed
  // resume exactly — keep the two in step when either changes.
  const skillIcons = {
    // Programming Languages
    "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
    "Python": "https://cdn.simpleicons.org/python/3776AB",
    "JavaScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
    "Kotlin": "https://cdn.simpleicons.org/kotlin/7F52FF",

    // Web Frontend Frameworks & Backend
    "Vue.js": "https://cdn.simpleicons.org/vuedotjs/4FC08D",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/ffffff",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "React.js": "https://cdn.simpleicons.org/react/61DAFB",
    "HTML": "https://cdn.simpleicons.org/html5/E34F26",
    "CSS": "https://cdn.simpleicons.org/css3/1572B6",
    "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
    "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",

    // Programming Tools
    "Git": "https://cdn.simpleicons.org/git/F05032",
    "GitHub": "https://cdn.simpleicons.org/github/ffffff",
    "API": null, // No brand mark — falls back to the Lucide Sparkles icon
    "Postman": "https://cdn.simpleicons.org/postman/FF6C37",
    "Docker": "https://cdn.simpleicons.org/docker/2496ED",

    // Development Software
    "Android Studio": "https://cdn.simpleicons.org/androidstudio/3DDC84",
    "Visual Studio Code": "https://cdn.simpleicons.org/visualstudiocode/007ACC",
    "Antigravity": null, // Custom Lucide Sparkles icon
    "Oracle VirtualBox": "https://cdn.simpleicons.org/virtualbox/183A61",
    "Arduino IDE": "https://cdn.simpleicons.org/arduino/00878F"
  };

  // The four Technical Skill groups from the resume, in resume order.
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: Code2,
      badge: "Core Logic",
      description: "Fundamental & object-oriented development languages.",
      color: "from-purple-500 to-indigo-600",
      skills: ["C++", "Python", "JavaScript", "Kotlin"]
    },
    {
      id: 2,
      title: "Web Frontend Frameworks & Backend",
      icon: Layout,
      badge: "Web & Data",
      description: "UI engineering, responsive styling, SSR, and the data layer behind it.",
      color: "from-blue-500 to-cyan-600",
      skills: ["Vue.js", "Next.js", "Tailwind CSS", "React.js", "HTML", "CSS", "MongoDB", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Programming Tools",
      icon: Wrench,
      badge: "DevOps",
      description: "Version control, API workflow, and containerization.",
      color: "from-emerald-500 to-teal-600",
      skills: ["Git", "GitHub", "API", "Postman", "Docker"]
    },
    {
      id: 4,
      title: "Development Software",
      icon: Laptop,
      badge: "Tooling",
      description: "Integrated development environments, API, and VM tools.",
      color: "from-[#4d44b5] to-[#7c73e6]",
      skills: [
        "Git", "GitHub", "API", "Postman", "Android Studio",
        "Visual Studio Code", "Antigravity", "Oracle VirtualBox", "Arduino IDE"
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4d44b5]/20 border border-[#4d44b5]/40 text-xs font-mono text-purple-300 mb-2">
            <Cpu className="w-3.5 h-3.5 text-[#4d44b5]" />
            <span>TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Skill Stack & Framework Icons
          </h2>
          <p className="text-[#9e9e9e] text-sm sm:text-base mt-1">
            Categorized technical stack with official brand icons for languages, frameworks, tools, and software.
          </p>
        </div>
        <div className="text-xs font-mono text-[#9e9e9e] bg-[#14161f] px-4 py-2 rounded-xl border border-white/10">
          4 Specialization Domains
        </div>
      </div>

      {/* 4 Category Grid — 2×2, so the wider chip lists never get cramped */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <div
              key={category.id}
              className="rounded-3xl bg-[#14161f] border border-white/10 hover:border-[#4d44b5] transition-all duration-300 p-6 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(77,68,181,0.25)] relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Category Icon Button Header */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                    <CategoryIcon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300 px-3 py-1 rounded-full bg-[#4d44b5]/20 border border-[#4d44b5]/30">
                    {category.badge}
                  </span>
                </div>

                {/* Subtopic Header */}
                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#9e9e9e] mt-1">
                    {category.description}
                  </p>
                </div>

                {/* Skill Chips List with Framework/Tool Brand Icons */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => {
                    const iconUrl = skillIcons[skill];
                    return (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#4d44b5] hover:bg-[#4d44b5]/20 text-xs font-semibold text-gray-200 hover:text-white transition-all duration-200 group/chip hover:shadow-[0_0_12px_rgba(77,68,181,0.3)]"
                      >
                        {/* Render Brand SVG Icon or Fallback Lucide Icon */}
                        {iconUrl ? (
                          <img 
                            src={iconUrl} 
                            alt={skill} 
                            className="w-4 h-4 object-contain group-hover/chip:scale-110 transition-transform" 
                          />
                        ) : (
                          <Sparkles className="w-4 h-4 text-[#4d44b5] group-hover/chip:scale-110 transition-transform" />
                        )}
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Footer Accent */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#9e9e9e]">
                <span>{category.skills.length} Frameworks / Tools</span>
                <span className="text-[#4d44b5] font-bold">CSMJU STACK</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
