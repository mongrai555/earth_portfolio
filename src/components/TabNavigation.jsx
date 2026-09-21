import React from 'react';
import { LayoutGrid, Award, Cpu, Sparkles, FolderGit2 } from 'lucide-react';

export const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: FolderGit2,
      badge: 'Default Menu',
      description: 'Completed Web Projects & Applications'
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: Cpu,
      badge: '4 Categories',
      description: 'Languages, Frameworks, Tools & Software'
    },
    { 
      id: 'certificate', 
      label: 'Certificate', 
      icon: Award,
      badge: 'Certifications',
      description: 'Verified Training & Achievements'
    },
    { 
      id: 'otherwork', 
      label: 'Other works', 
      icon: Sparkles,
      badge: 'Photography',
      description: 'Concert & Event Photography from Instagram'
    },
  ];

  return (
    <div id="main-menu-tabs" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-3 mb-8">
        <h2 className="text-xs font-mono font-bold tracking-widest text-[#4d44b5] uppercase">
          NAVIGATION MENU
        </h2>
        <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
          Explore Portfolio Sections
        </h3>
        <p className="text-[#9e9e9e] text-sm sm:text-base max-w-xl mx-auto">
          Select a category below to switch the interactive workspace view.
        </p>
      </div>

      {/* 4 Interactive Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between group overflow-hidden cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-br from-[#181a28] via-[#14161f] to-[#1a1c2e] border-[#4d44b5] shadow-[0_0_25px_rgba(77,68,181,0.4)] scale-[1.02]'
                  : 'bg-[#14161f]/60 hover:bg-[#181b28] border-white/10 hover:border-white/20 hover:scale-[1.01]'
              }`}
            >
              {/* Glow Highlight Bar for Active state */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d44b5] to-[#7c73e6]" />
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#4d44b5] text-white shadow-[0_0_15px_rgba(77,68,181,0.5)]' 
                      : 'bg-white/5 text-[#9e9e9e] group-hover:text-white group-hover:bg-[#4d44b5]/30'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
                    isActive 
                      ? 'bg-[#4d44b5]/20 border-[#4d44b5] text-purple-300' 
                      : 'bg-white/5 border-white/10 text-[#9e9e9e]'
                  }`}>
                    {tab.badge}
                  </span>
                </div>

                <h4 className={`text-lg font-bold font-display transition-colors ${
                  isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {tab.label}
                </h4>

                <p className="text-xs text-[#9e9e9e] mt-1 line-clamp-2">
                  {tab.description}
                </p>
              </div>

              <div className={`mt-4 pt-3 border-t text-xs font-semibold flex items-center justify-between transition-colors ${
                isActive ? 'border-[#4d44b5]/40 text-[#7c73e6]' : 'border-white/5 text-[#9e9e9e] group-hover:text-white'
              }`}>
                <span>{isActive ? 'Active View' : 'Switch View'}</span>
                <span className="text-base font-extrabold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
