"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowUpRight,
  FileCheck2,
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AuditSpecModal from '../ui/AuditSpecModal';

interface StandardAuditData {
  id: string;
  code: string;
  title: string;
  category: string;
  badge: string;
  scopeSummary: string;
  turnaround: string;
  validity: string;
  keyCheckpoints: string[];
}

const standards: StandardAuditData[] = [
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    title: "Quality Management Systems (QMS)",
    category: "Management Conformity",
    badge: "/certifications/card/iso-9001.jpg",
    scopeSummary: "Demonstrates organizational ability to consistently provide defect-free products and services fulfilling international buyer regulatory standards.",
    turnaround: "10–14 Business Days",
    validity: "3-Year Cycle with Annual Surveillance",
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
    category: "Ecological Compliance",
    badge: "/certifications/card/iso-14001.jpg",
    scopeSummary: "Establishes institutional frameworks for systematic resource efficiency, chemical waste reduction, and compliance with statutory environmental mandates.",
    turnaround: "12–16 Business Days",
    validity: "3-Year Cycle with Annual Surveillance",
    keyCheckpoints: [
      "Effluent, air emission & hazardous waste assessment",
      "Legal register verification & spill mitigation readiness",
      "Sustainable energy consumption & carbon reduction tracking"
    ]
  },
  {
    id: "iso-45001",
    code: "ISO 45001:2018",
    title: "Occupational Health & Safety (OH&S)",
    category: "Industrial Safety",
    badge: "/certifications/card/iso-45001.jpg",
    scopeSummary: "Proactively identifies factory floor hazards, eliminates workplace physical risks, and ensures rigorous worker occupational health compliance.",
    turnaround: "10–14 Business Days",
    validity: "3-Year Cycle with Annual Surveillance",
    keyCheckpoints: [
      "Workplace hazard identification & risk remediation (HIRA)",
      "Emergency response protocols, fire drills & exit verification",
      "Worker health screening, PPE conformity & safety committees"
    ]
  },
  {
    id: "c-tpat",
    code: "C-TPAT Certified",
    title: "Customs Trade Partnership Against Terrorism",
    category: "Supply Chain Security",
    badge: "/certifications/card/c-tpat.jpg",
    scopeSummary: "Rigorous 12-point US Customs security evaluation enabling expedited Tier-2/Tier-3 green lane cargo processing at US import ports.",
    turnaround: "14–21 Business Days",
    validity: "Annual Verification & Threat Re-assessment",
    keyCheckpoints: [
      "Container & trailer 7-point physical security inspection",
      "Biometric access control, CCTV coverage & fencing integrity",
      "Subcontractor screening & international supply chain mapping"
    ]
  }
];

export default function InteractiveHeroAudit() {
  const [activeTab, setActiveTab] = useState<string>("iso-9001");
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);

  const activeStandard = standards.find((s) => s.id === activeTab) || standards[0];

  return (
    <div className="w-full max-w-5xl mx-auto mt-14">
      {/* Console Header Tabs */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-slate-100/90 border border-slate-200/90 mb-6 shadow-xs">
        {standards.map((s) => {
          const isActive = activeTab === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`relative px-3 sm:px-5 py-2.5 rounded-xl text-xs md:text-sm font-display font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-center cursor-pointer ${
                isActive
                  ? "text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/80"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] border border-emerald-500/40 -z-10 shadow-[0_4px_16px_rgba(0,135,62,0.3)]"
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                />
              )}
              <span className={`w-1.5 h-1.5 ${isActive ? 'bg-white' : 'bg-slate-400'}`} />
              <span>{s.code}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Console Panel */}
      <div className="relative bg-white rounded-2xl md:rounded-[2.5rem] p-5 sm:p-7 md:p-10 border border-slate-200/90 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.08)] overflow-hidden">
        {/* Subtle Ambient Radial Light */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

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
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00873E] bg-emerald-50 border border-emerald-200">
                  <ShieldCheck size={12} />
                  <span>{activeStandard.category}</span>
                </span>
                <span className="text-slate-400 font-mono text-xs">
                  ID: {activeStandard.code}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
                {activeStandard.title}
              </h3>

              <p className="text-slate-600 font-sans text-sm md:text-base font-light leading-relaxed mb-6">
                {activeStandard.scopeSummary}
              </p>

              {/* Checkpoints */}
              <div className="space-y-2.5 mb-6">
                {activeStandard.keyCheckpoints.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-700 font-sans">
                    <CheckCircle2 size={16} className="text-[#00873E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Meta Tags Bar */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 text-xs font-sans text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#00873E]" />
                  <span>Turnaround: <strong className="text-slate-900 font-semibold">{activeStandard.turnaround}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award size={14} className="text-[#00873E]" />
                  <span>Accreditation: <strong className="text-slate-900 font-semibold">{activeStandard.validity}</strong></span>
                </div>
              </div>
            </div>

            {/* Right Badge Preview & Action */}
            <div className="lg:w-5/12 w-full flex flex-col items-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl p-6 bg-slate-50 border border-slate-200/80 flex items-center justify-center group mb-6 shadow-sm">
                <div className="relative w-full h-full">
                  <Image
                    src={activeStandard.badge}
                    alt={`${activeStandard.title} Official Badge`}
                    fill
                    className="object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                <button
                  type="button"
                  onClick={() => setIsSpecModalOpen(true)}
                  className="flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white text-xs font-display font-bold tracking-wider hover:shadow-[0_4px_16px_rgba(0,135,62,0.35)] transition-all border border-emerald-500/30 cursor-pointer"
                >
                  <FileCheck2 size={15} />
                  <span>VIEW SPECIFICATION</span>
                </button>
                <Link
                  href="/audits#four-stage-protocol"
                  className="flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-sans font-medium border border-slate-200 transition-all"
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
