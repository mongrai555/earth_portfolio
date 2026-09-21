import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TabNavigation } from './components/TabNavigation';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificateSection } from './components/CertificateSection';
import { OtherWorksSection } from './components/OtherWorksSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-[#0f0f13] text-white selection:bg-[#4d44b5] selection:text-white font-sans antialiased">
      {/* Top Fixed Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hero Section with 3D Hanging ID Tag */}
      <Hero setActiveTab={setActiveTab} />

      {/* Main Tab Navigation Controls */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic Tab Workspace Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[600px]">
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'skills' && <SkillsSection />}
        {activeTab === 'certificate' && <CertificateSection />}
        {activeTab === 'otherwork' && <OtherWorksSection />}
      </main>

      {/* Footer with CSMJU Branding */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
