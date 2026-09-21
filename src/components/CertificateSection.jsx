import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Calendar, Building2, Sparkles, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

export const CertificateSection = () => {
  const certificates = [
    {
      id: 1,
      title: "ความมั่นคงปลอดภัยไซเบอร์ ระดับพื้นฐาน (Cybersecurity Foundation Course)",
      issuer: "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (NCSA)",
      date: "28 ส.ค. 2569",
      credentialId: "5731284114NP",
      category: "Cybersecurity",
      image: "/ncsa_cybersecurity_foundation.png",
      fit: "contain",
      description: "หลักสูตรอบรมด้านความมั่นคงปลอดภัยไซเบอร์ระดับพื้นฐาน ผ่านระบบ NCSA e-Learning จำนวน 21 ชั่วโมง ครอบคลุมกฎหมายไซเบอร์ การประเมินและบริหารความเสี่ยง ภัยคุกคามทางไซเบอร์ และการรับมือเหตุการณ์ด้านความมั่นคงปลอดภัยสำหรับหน่วยงานโครงสร้างพื้นฐานสำคัญทางสารสนเทศ",
      skills: ["Cybersecurity Fundamentals", "Risk Management", "Cyber Threats", "Incident Response", "PDPA & Cyber Law"],
      verified: true
    },
    {
      id: 6,
      title: "เกียรติบัตรนักศึกษาช่วยจัดกิจกรรมหลักสูตรสาขาวิชาวิทยาการคอมพิวเตอร์ (สัปดาห์วิทยาศาสตร์แห่งชาติ ๒๕๖๗)",
      issuer: "คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้",
      date: "18 - 20 ส.ค. 2567",
      credentialId: "—",
      category: "Academic Activity",
      image: "/sciweek_comsci.jpg",
      fit: "contain",
      description: "เกียรติบัตรมอบให้ในฐานะนักศึกษาช่วยจัดกิจกรรมของหลักสูตรสาขาวิชาวิทยาการคอมพิวเตอร์ ด้วยความทุ่มเทและเสียสละรับผิดชอบอย่างดีเยี่ยม เนื่องในงานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ประจำปี ๒๕๖๗ ระหว่างวันที่ ๑๘ - ๒๐ สิงหาคม ๒๕๖๗ จัดโดยคณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ ร่วมกับสมาคมวิทยาศาสตร์แห่งประเทศไทย ในพระบรมราชูปถัมภ์",
      skills: ["Event Staff", "Activity Coordination", "Teamwork", "Public Communication", "Responsibility"],
      verified: true
    },
    {
      id: 7,
      title: "เกียรติบัตรนักศึกษาช่วยจัดการแข่งขัน E-Sports (สัปดาห์วิทยาศาสตร์แห่งชาติ ๒๕๖๗)",
      issuer: "คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้",
      date: "18 - 20 ส.ค. 2567",
      credentialId: "—",
      category: "Event Organizing",
      image: "/sciweek_esport.jpg",
      fit: "contain",
      description: "เกียรติบัตรมอบให้ในฐานะนักศึกษาช่วยจัดการแข่งขัน E-Sports ด้วยความทุ่มเทและเสียสละรับผิดชอบในการจัดงานอย่างดีเยี่ยม เนื่องในงานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ประจำปี ๒๕๖๗ ระหว่างวันที่ ๑๘ - ๒๐ สิงหาคม ๒๕๖๗ จัดโดยคณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ ครอบคลุมการวางระบบการแข่งขัน จัดการสายการแข่งขัน ดูแลอุปกรณ์และเครือข่าย รวมถึงประสานงานผู้เข้าแข่งขันตลอดงาน",
      skills: ["E-Sports Tournament Ops", "Bracket Management", "Network & Hardware Setup", "Live Event Support", "Team Coordination"],
      verified: true
    },
    {
      id: 5,
      title: "LCCE: LINK Certified Network Cabling for Engineering",
      issuer: "LINK (Interlink) Training Workshop",
      date: "Training Workshop",
      credentialId: "—",
      category: "Network Engineering",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      description: "Hands-on training workshop in structured network cabling for engineering: copper and fibre termination, patch panel and rack build-out, cable management standards, and certification testing of installed links.",
      skills: ["Structured Cabling", "Fibre & Copper Termination", "Patch Panel Build", "Link Certification Testing", "Cable Standards"],
      verified: true
    }
  ];

  const [selectedCert, setSelectedCert] = useState(certificates[0]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4d44b5]/20 border border-[#4d44b5]/40 text-xs font-mono text-purple-300 mb-2">
            <Award className="w-3.5 h-3.5 text-[#4d44b5]" />
            <span>CERTIFICATIONS & RECOGNITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Certificates & Accomplishments
          </h2>
          <p className="text-[#9e9e9e] text-sm sm:text-base mt-1">
            Credentials in cybersecurity, network cabling engineering, and university event organizing at Maejo University.
          </p>
        </div>
        <div className="text-xs font-mono text-[#9e9e9e] bg-[#14161f] px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#4d44b5]" />
          <span>Verified Credentials</span>
        </div>
      </div>

      {/* Main Split Layout: Left Cards list, Right Detailed Panel (As specified in portfolio.md line 51) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Certificate Selector List (5 Columns) */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs font-mono text-[#9e9e9e] uppercase tracking-wider mb-2">
            Select Certificate to Inspect:
          </p>

          {certificates.map((cert) => {
            const isSelected = selectedCert.id === cert.id;
            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 items-center group ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#1a1d2d] to-[#14161f] border-[#4d44b5] shadow-[0_0_20px_rgba(77,68,181,0.3)] scale-[1.02]'
                    : 'bg-[#14161f]/60 hover:bg-[#181b28] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className={`w-full h-full ${cert.fit === 'contain' ? 'object-contain bg-white p-1' : 'object-cover'}`}
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#4d44b5]/40 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white drop-shadow-md" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono text-[#4d44b5] font-bold uppercase tracking-widest block">
                    {cert.category}
                  </span>
                  <h4 className={`text-sm font-bold truncate transition-colors ${
                    isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#9e9e9e] truncate mt-0.5">
                    {cert.issuer}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-[#9e9e9e]">{cert.date}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Description Panel (7 Columns) */}
        <div className="lg:col-span-7 rounded-3xl bg-[#14161f] border border-[#4d44b5]/50 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4d44b5]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Certificate Image Banner */}
          <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-white/10">
            <img 
              src={selectedCert.image} 
              alt={selectedCert.title} 
              className={`w-full h-full ${selectedCert.fit === 'contain' ? 'object-contain bg-white' : 'object-cover'}`}
            />
            {selectedCert.fit !== 'contain' && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-transparent to-transparent" />
            )}
            
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#4d44b5] text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
              <ShieldCheck className="w-4 h-4" />
              Verified Certificate
            </div>
          </div>

          {/* Detailed Information */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7c73e6]">
                {selectedCert.category}
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">
                {selectedCert.title}
              </h3>
            </div>

            {/* Meta Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-black/30 border border-white/5 text-xs font-mono">
              <div>
                <span className="text-[#9e9e9e] block text-[10px]">ISSUING ORGANIZATION:</span>
                <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-[#4d44b5]" />
                  {selectedCert.issuer}
                </span>
              </div>
              <div>
                <span className="text-[#9e9e9e] block text-[10px]">ISSUED DATE:</span>
                <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-[#4d44b5]" />
                  {selectedCert.date}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#9e9e9e] block text-[10px]">CREDENTIAL ID:</span>
                <span className="text-[#4d44b5] font-bold mt-0.5 block truncate">
                  {selectedCert.credentialId}
                </span>
              </div>
            </div>

            {/* Narrative Description (As required by portfolio.md line 51) */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#9e9e9e] uppercase tracking-wider font-bold">
                Credential Overview & Curriculum Description:
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                {selectedCert.description}
              </p>
            </div>

            {/* Skills Validated */}
            <div>
              <h4 className="text-xs font-mono text-[#9e9e9e] uppercase tracking-wider font-bold mb-2">
                Competencies & Skills Validated:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#4d44b5]/20 border border-[#4d44b5]/40 text-xs font-mono text-purple-200"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
