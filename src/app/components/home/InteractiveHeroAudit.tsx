"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Award, FileCheck2, Info } from 'lucide-react';
import AuditSpecModal from '../ui/AuditSpecModal';

interface StandardDetail {
  id: string;
  code: string;
  title: string;
  badge: string;
  category: string;
  turnaround: string;
  validity: string;
  scopeSummary: string;
  keyCheckpoints: string[];
}

const standards: StandardDetail[] = [
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    title: "Quality Management Systems (QMS)",
    badge: "/certifications/card/iso-9001.png",
    category: "Management Conformity",
    turnaround: "10-14 Business Days",
    validity: "3-Year Cycle with Annual Surveillance",
    scopeSummary: "Demonstrates organizational ability to consistently provide defect-free products and services fulfilling international buyer regulatory standards.",
    keyCheckpoints: [
      "Risk-based organizational process audit",
      "Corrective & Preventive Action (CAPA) tracking",
      "Customer satisfaction & continuous improvement metrics"
    ]
  },
  {
    id: "iso-14001",
    code: "ISO 14001:2015",
    title: "Environmental Management Systems (EMS)",
    badge: "/certifications/card/iso-14001.jpg",
    category: "Environmental Sustainability",
    turnaround: "12-16 Business Days",
    validity: "3-Year Cycle with Annual Surveillance",
    scopeSummary: "Rigorous verification of ecological safeguards, effluent discharge controls, chemical management, and corporate carbon reduction frameworks.",
    keyCheckpoints: [
      "Hazardous waste & legal compliance monitoring",
      "Industrial emissions and water conservation audits",
      "Emergency chemical spill preparedness"
    ]
  },
  {
    id: "iso-45001",
    code: "ISO 45001:2018",
    title: "Occupational Health & Safety (OH&S)",
    badge: "/certifications/card/iso-45001.jpg",
    category: "Workplace Safety",
    turnaround: "10-14 Business Days",
    validity: "3-Year Cycle with Annual Surveillance",
    scopeSummary: "Comprehensive evaluation of factory health & safety infrastructure, machinery safeguards, and worker wellness protocols.",
    keyCheckpoints: [
      "Workplace hazard prevention & fire safety audits",
      "Personal Protective Equipment (PPE) compliance",
      "Occupational health risk mitigation protocols"
    ]
  },
  {
    id: "ctpat",
    code: "C-TPAT Certified",
    title: "Customs-Trade Partnership Against Terrorism",
    badge: "/certifications/card/ctpat.jpg",
    category: "US Customs Security",
    turnaround: "7-10 Business Days",
    validity: "Annual Partner Validation",
    scopeSummary: "Full-spectrum supply chain security assessment required by US Customs & Border Protection for expedited North American cargo clearance.",
    keyCheckpoints: [
      "7-point container security & seal verification",
      "Factory perimeter access & surveillance audits",
      "Supply chain partner vetting & background checks"
    ]
  }
];

export default function InteractiveHeroAudit() {
  const [activeTab, setActiveTab] = useState<string>("iso-9001");
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const activeStandard = standards.find(s => s.id === activeTab) || standards[0];

  return (
    <div className="w-full max-w-5xl mx-auto mt-14">
      {/* Console Header Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl glass-panel border border-white/10 bg-[#06150D]/70 backdrop-blur-xl mb-6">
        {standards.map((s) => {
          const isActive = activeTab === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-display font-semibold transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? "text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] border border-emerald-400/40 -z-10 shadow-[0_0_20px_rgba(0,135,62,0.4)]"
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                />
              )}
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#34D399] animate-pulse' : 'bg-gray-500'}`} />
              <span>{s.code}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Console Panel */}
      <div className="relative glass-card rounded-[2.5rem] p-6 md:p-10 border border-emerald-500/20 shadow-2xl overflow-hidden">
        {/* Subtle Ambient Radial Light */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStandard.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row gap-8 items-center justify-between"
          >
            {/* Left Info Column */}
            <div className="lg:w-7/12 text-left">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider text-[#34D399] bg-[#00873E]/20 border border-emerald-500/30">
                  <ShieldCheck size={12} />
                  <span>{activeStandard.category}</span>
                </span>
                <span className="text-gray-400 font-mono text-xs">
                  ID: {activeStandard.code}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                {activeStandard.title}
              </h3>

              <p className="text-gray-300 font-sans text-sm md:text-base font-light leading-relaxed mb-6">
                {activeStandard.scopeSummary}
              </p>

              {/* Checkpoints */}
              <div className="space-y-2.5 mb-6">
                {activeStandard.keyCheckpoints.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-gray-200 font-sans">
                    <CheckCircle2 size={16} className="text-[#34D399] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Meta Tags Bar */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08] text-xs font-sans text-gray-300">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#34D399]" />
                  <span>Turnaround: <strong className="text-white">{activeStandard.turnaround}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award size={14} className="text-[#34D399]" />
                  <span>Accreditation: <strong className="text-white">{activeStandard.validity}</strong></span>
                </div>
              </div>
            </div>

            {/* Right Badge Preview & Action */}
            <div className="lg:w-5/12 w-full flex flex-col items-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl p-6 glass-panel border border-white/15 flex items-center justify-center group mb-6 shadow-2xl bg-white/[0.02]">
                <div className="relative w-full h-full">
                  <Image
                    src={activeStandard.badge}
                    alt={`${activeStandard.title} Official Badge`}
                    fill
                    className="object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                <button
                  type="button"
                  onClick={() => setIsSpecModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white text-xs font-display font-bold tracking-wider hover:shadow-[0_0_20px_rgba(0,135,62,0.5)] transition-all border border-emerald-400/40 cursor-pointer"
                >
                  <FileCheck2 size={15} />
                  <span>VIEW SPECIFICATION</span>
                </button>
                <Link
                  href="/audits#four-stage-protocol"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl glass-panel text-gray-300 hover:text-white text-xs font-sans font-medium hover:border-emerald-400/30 transition-all"
                >
                  <span>Audit Roadmap</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Audit Specification Modal */}
      <AuditSpecModal
        isOpen={isSpecModalOpen}
        onClose={() => setIsSpecModalOpen(false)}
        standardId={activeStandard.id}
      />
    </div>
  );
}
