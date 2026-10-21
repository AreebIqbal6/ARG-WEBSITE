"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Search, Award, FileCheck2, ShieldAlert, Cpu } from 'lucide-react';
import Link from 'next/link';
import CertificateVerifyModal from '../components/ui/CertificateVerifyModal';
import AuditSpecModal from '../components/ui/AuditSpecModal';

interface ServiceItem {
  id: string;
  standardId: string;
  title: string;
  badge: string;
  desc: string;
  img: string;
  deliverables: string[];
}

const isoServices: ServiceItem[] = [
  {
    id: "iso-9001",
    standardId: "iso-9001",
    title: "ISO 9001:2026 Quality Management Systems",
    badge: "Accredited QMS Registrar",
    desc: "End-to-end certification and surveillance auditing for ISO 9001:2026. We verify organizational risk management, defect reduction frameworks, standardized operational processes, and customer satisfaction loops.",
    img: "/images/quality_assurance.jpg",
    deliverables: [
      "ISO 9001:2026 gap analysis and readiness auditing",
      "Corrective & Preventive Action (CAPA) tracking loops",
      "Accredited ISO certificate issuance & annual surveillance"
    ]
  },
  {
    id: "iso-14001",
    standardId: "iso-14001",
    title: "ISO 14001:2015 Environmental Management",
    badge: "Accredited EMS Certification",
    desc: "Rigorous verification of environmental safeguards, industrial waste reduction, energy efficiency, and chemical management to fulfill stringent multinational buyer sustainability criteria.",
    img: "/images/environmental_sustainability.jpg",
    deliverables: [
      "Environmental impact risk assessment and legal audits",
      "Effluent, emissions, and hazardous waste monitoring",
      "Resource sustainability & energy conservation protocols"
    ]
  },
  {
    id: "iso-45001",
    standardId: "iso-45001",
    title: "ISO 45001:2018 Health & Safety Systems",
    badge: "Occupational Safety Standard",
    desc: "Workplace hazard identification, emergency preparedness, machinery guarding, and employee wellness systems required by global brands and international labor conventions.",
    img: "/images/occupational_safety.jpg",
    deliverables: [
      "Occupational hazard & risk mitigation reviews",
      "Factory fire safety & emergency exit inspections",
      "Industrial hygiene and worker protection systems"
    ]
  }
];

const ctpatServices: ServiceItem[] = [
  {
    id: "ctpat",
    standardId: "ctpat",
    title: "C-TPAT Supply Chain Security Certification",
    badge: "US Customs & Border Protection",
    desc: "Comprehensive supply chain security audits certifying container security, physical perimeter control, personnel screening, and procedural security for streamlined Tier-2/Tier-3 export clearance into North America.",
    img: "/images/supply_chain_security.jpg",
    deliverables: [
      "7-point container inspection validation & high-security seal verification",
      "Factory physical perimeter, biometric access & CCTV archive audit",
      "Tier-2 business partner risk assessment & supply chain mapping"
    ]
  }
];

const technicalServices: ServiceItem[] = [
  {
    id: "technical-audit",
    standardId: "technical-audit",
    title: "Factory Technical & Quality Audits",
    badge: "Operational Capability",
    desc: "On-site scrutiny of machinery capacity, calibration logs, lab quality control procedures, and inline production defect mapping to prove factory manufacturing capability to international retail buyers.",
    img: "/images/technical_testing_lab.jpg",
    deliverables: [
      "Machine capacity and maintenance record verification",
      "In-line defect mapping & statistical process control (SPC)",
      "Technical audit grading and buyer vendor portal readiness reports"
    ]
  },
  {
    id: "fsns-sqf",
    standardId: "fsns-sqf",
    title: "FSNS, SQF & Global Food Packaging Standards",
    badge: "Hygiene & Food Safety",
    desc: "Specialized auditing for food contact packaging, hygiene-critical consumer goods, and GFSI-benchmarked HACCP compliance to guarantee international retail and export market acceptance.",
    img: "/images/logistics_warehouse.jpg",
    deliverables: [
      "HACCP standard alignment & hygiene sanitation audits",
      "Packaging safety & contamination barrier verification",
      "Third-party audit documentation readiness for buyer onboarding"
    ]
  }
];

export default function Services() {
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [specModalId, setSpecModalId] = useState<string | null>(null);

  const renderServiceCard = (srv: ServiceItem, idx: number) => (
    <motion.div
      key={srv.id}
      id={srv.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl overflow-hidden flex flex-col justify-between group border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 relative scroll-mt-36"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-90" 
          style={{ backgroundImage: `url('${srv.img}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
          <span className="inline-block bg-[#00873E] text-white font-mono text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md shadow-sm">
            {srv.badge}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#00873E] transition-colors">
            {srv.title}
          </h3>
          <p className="text-slate-600 font-sans text-xs md:text-sm leading-relaxed mb-6 font-light">
            {srv.desc}
          </p>
        </div>

        <div className="border-t border-slate-100 pt-5">
          <div className="text-[11px] font-sans font-bold text-[#00873E] uppercase tracking-wider mb-3">
            Core Audit Deliverables
          </div>
          <ul className="flex flex-col gap-2 mb-6">
            {srv.deliverables.map((item, dIdx) => (
              <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 font-sans font-light">
                <CheckCircle2 size={13} className="text-[#00873E] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={() => setSpecModalId(srv.standardId)}
              className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-[#00873E] font-sans font-semibold text-xs tracking-wider transition-all duration-300 border border-slate-200 hover:border-emerald-300 cursor-pointer active:scale-95"
            >
              <FileCheck2 size={14} className="text-[#00873E]" />
              <span>VIEW SPECIFICATION</span>
            </button>
            <Link
              href={`/contact?scope=${encodeURIComponent(srv.standardId)}`}
              className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#00873E] hover:bg-[#059669] text-white font-sans font-semibold text-xs tracking-wider transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
            >
              <span>Request Quote</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-800 ">
      
      {/* HEADER */}
      <section className="relative pt-40 sm:pt-44 md:pt-48 pb-24 md:pb-28 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 z-0 bg-[url('/images/precision_robotics.jpg')] bg-cover bg-center opacity-[0.35] contrast-105"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/65 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 text-[11px] sm:text-xs font-sans font-semibold text-xs tracking-wider uppercase border-b border-slate-200 pb-2 max-w-full">
              <span className="text-[#00873E] font-bold">ACCREDITED CERTIFICATION SCOPES</span>
              <span className="hidden sm:inline text-slate-400">&bull;</span>
              <span className="text-slate-500">ARG REGISTRARS</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-tight tracking-tight mb-4">
              Certification &amp; <br />
              <span className="text-[#00873E]">
                Auditing Services
              </span>
            </h1>
            <p className="text-slate-600 font-sans text-lg max-w-2xl font-light leading-relaxed">
              Accredited ISO certifications, supply chain security, and technical assessments to unlock global markets.
            </p>
          </motion.div>

          {/* Quick Registry Verification Callout */}
          <div className="mt-12 p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00873E] shrink-0">
                <Award size={24} />
              </div>
              <div>
                <div className="text-slate-900 font-display font-bold text-base md:text-lg">
                  Official Accredited Registrar Certificate Registry
                </div>
                <div className="text-slate-600 font-sans text-xs md:text-sm">
                  Validate client certificates, active validity status, and accredited scope in real-time.
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsVerifyOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer shrink-0"
            >
              <Search size={15} />
              <span>SEARCH CERTIFICATE REGISTRY</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: ISO MANAGEMENT SYSTEMS */}
      <section id="iso-systems" className="py-20 relative z-30 scroll-mt-24 border-b border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#00873E] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00873E]" />
              <span>CATEGORY 01 &bull; ISO MANAGEMENT CONFORMITY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">
              ISO Management Systems Certification
            </h2>
            <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed font-light">
              Full registrar certification for Quality (ISO 9001:2026), Environmental Sustainability (ISO 14001:2015), and Occupational Health &amp; Safety (ISO 45001:2018).
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isoServices.map((srv, idx) => renderServiceCard(srv, idx))}
          </div>
        </div>
      </section>

      {/* SECTION 2: C-TPAT SUPPLY CHAIN SECURITY */}
      <section id="ctpat-security" className="py-20 relative z-30 scroll-mt-24 bg-white border-b border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#00873E] mb-3">
              <ShieldAlert size={14} className="text-[#00873E]" />
              <span>CATEGORY 02 &bull; US CUSTOMS &amp; BORDER PROTECTION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">
              C-TPAT Supply Chain Security Audits
            </h2>
            <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed font-light">
              Rigorous audits aligning with US Customs Minimum Security Criteria (MSC), ensuring 7-point container integrity, physical facility hardening, and expedited green-lane clearance for US and North American exports.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {ctpatServices.map((srv, idx) => renderServiceCard(srv, idx))}

            {/* C-TPAT Highlights Card */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-[#00873E] uppercase tracking-wider mb-2">
                  Key Verification Highlights
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 mb-4">
                  What C-TPAT Tier 2/3 Compliance Delivers:
                </h4>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-sans">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#00873E] shrink-0 mt-0.5" />
                    <span><strong>Expedited US Customs Clearance:</strong> Reduces cargo exam frequency by up to 80% at US ports of entry.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#00873E] shrink-0 mt-0.5" />
                    <span><strong>Front-of-the-Line Processing:</strong> Priority unloading during security alerts and international supply chain disruptions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#00873E] shrink-0 mt-0.5" />
                    <span><strong>Global Buyer Vendor Portals:</strong> Fulfills mandatory supply chain security criteria required by Walmart, Target, Home Depot, and Costco.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSpecModalId("ctpat")}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-sans font-semibold text-xs border border-slate-200 shadow-xs cursor-pointer"
                >
                  <FileCheck2 size={15} className="text-[#00873E]" />
                  <span>Inspect Security Criteria Sheet</span>
                </button>
                <Link
                  href="/contact?standard=ctpat"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00873E] hover:bg-[#059669] text-white font-sans font-semibold text-xs shadow-xs"
                >
                  <span>Schedule C-TPAT Audit</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FACTORY TECHNICAL EVALUATIONS & QUALITY AUDITS */}
      <section id="technical-audits" className="py-20 relative z-30 scroll-mt-24 border-b border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#00873E] mb-3">
              <Cpu size={14} className="text-[#00873E]" />
              <span>CATEGORY 03 &bull; FACTORY TECHNICAL &amp; HYGIENE EVALUATIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">
              Factory Technical Evaluations &amp; Quality Audits
            </h2>
            <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed font-light">
              Comprehensive factory floor scrutiny evaluating production line machinery, maintenance curves, inline quality controls, and international hygiene/food packaging benchmarks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalServices.map((srv, idx) => renderServiceCard(srv, idx))}
          </div>

          {/* Bottom Proposal CTA */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-white text-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-black mb-2 text-slate-900">
                Need Multi-Site or Integrated Standard Auditing?
              </h3>
              <p className="text-slate-600 font-sans text-sm max-w-xl font-light">
                Speak directly with an ARG Registrars lead auditor to structure combined audits, gap analysis, and tailored surveillance timelines.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00873E] hover:bg-[#059669] text-white font-sans font-bold text-xs tracking-widest px-8 py-4 rounded-xl transition-all shrink-0 shadow-md hover:scale-105"
            >
              <span>REQUEST TECHNICAL AUDIT PROPOSAL</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Official Certificate Verification Modal */}
      <CertificateVerifyModal
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
      />

      {/* Interactive Audit Specification Modal */}
      {specModalId && (
        <AuditSpecModal
          isOpen={Boolean(specModalId)}
          onClose={() => setSpecModalId(null)}
          standardId={specModalId}
        />
      )}
    </div>
  );
}
