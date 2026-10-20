"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Award, FileCheck2 } from 'lucide-react';
import AuditSpecModal from '../ui/AuditSpecModal';

const springPhysics = { type: "spring", damping: 25, stiffness: 120 };

interface Certification {
  id: string;
  name: string;
  badgeImg: string;
  tagline: string;
  scope: string;
  features: string[];
}

const certifications: Certification[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2026",
    badgeImg: "/certifications/card/iso-9001.png",
    tagline: "Quality Management Systems (QMS)",
    scope: "Standardized quality management frameworks, risk-based operational auditing, defect reduction, and continuous improvement.",
    features: ["Risk-Based Process Audits", "Zero-Defect Quality Controls", "Supplier Verification & Evaluation"]
  },
  {
    id: "iso-14001",
    name: "ISO 14001:2015",
    badgeImg: "/certifications/card/iso-14001.jpg",
    tagline: "Environmental Management Systems (EMS)",
    scope: "Systematic environmental impact mitigation, resource efficiency, regulatory compliance, and carbon footprint accountability.",
    features: ["Waste & Emissions Monitoring", "Resource Optimization", "Environmental Regulatory Audits"]
  },
  {
    id: "iso-45001",
    name: "ISO 45001:2018",
    badgeImg: "/certifications/card/iso-45001.jpg",
    tagline: "Occupational Health & Safety (OH&S)",
    scope: "Proactive hazard identification, workplace risk reduction, employee safety management, and industrial health safeguards.",
    features: ["Hazard Identification & Controls", "Accident Prevention Systems", "Safe Working Environments"]
  },
  {
    id: "ctpat",
    name: "C-TPAT Certified",
    badgeImg: "/certifications/card/ctpat.jpg",
    tagline: "Supply Chain Security Standard",
    scope: "Global supply chain security audits adhering to US Customs and Border Protection standards for expedited trade clearance.",
    features: ["Cargo & Physical Security", "Access Control & Container Integrity", "Supply Chain Risk Assessment"]
  },
  {
    id: "gots",
    name: "GOTS Certified",
    badgeImg: "/certifications/card/gots.png",
    tagline: "Global Organic Textile Standard",
    scope: "World-leading textile processing standard for organic fibers, integrating environmental and strict social compliance criteria.",
    features: ["Organic Chain of Custody", "Residue & Toxin Screening", "Transaction Certificate Verification"]
  },
  {
    id: "grs",
    name: "GRS Standard",
    badgeImg: "/certifications/card/grs.png",
    tagline: "Global Recycled Standard",
    scope: "Third-party certification of recycled material input, chain of custody, chemical restrictions, and responsible manufacturing.",
    features: ["Recycled Input Tracking", "Environmental Management Systems", "Supply Chain Traceability"]
  },
  {
    id: "zdhc",
    name: "ZDHC Gateway & MRSL",
    badgeImg: "/certifications/card/zdhc.png",
    tagline: "Roadmap to Zero Hazardous Chemicals",
    scope: "Elimination of hazardous substances in wet processing, chemical inventory compliance, and discharge water verification.",
    features: ["MRSL Conformance Level 1-3", "Wastewater Discharge Testing", "Chemical Gateway Validation"]
  },
  {
    id: "en-15343",
    name: "EN 15343 Recycled Plastics",
    badgeImg: "/certifications/card/en_15343.png",
    tagline: "Traceability & Recycled Content",
    scope: "European standard specifying procedures needed for traceability of recycled plastics and origin conformity assessment.",
    features: ["Post-Consumer Plastic Audit", "Recycled Content % Verification", "Batch Traceability Protocols"]
  },
  {
    id: "ppwr",
    name: "EU PPWR Compliance",
    badgeImg: "/certifications/card/ppwr.png",
    tagline: "Packaging & Packaging Waste Regulation",
    scope: "European Union circularity regulations enforcing packaging reduction, recyclability grades, and recycled plastic quotas.",
    features: ["Circularity Assessment", "Design for Recyclability Audit", "PFAS & Heavy Metal Screening"]
  },
  {
    id: "technical-audit",
    name: "Technical Audit Compliance",
    badgeImg: "/certifications/card/technical-audit.png",
    tagline: "Factory Floor & Process Capability",
    scope: "Rigorous factory evaluation assessing production machinery, operational capacity, quality assurance protocols, and labor standards.",
    features: ["Machinery & Line Verification", "Quality Control Benchmarks", "Capacity & Traceability Auditing"]
  },
  {
    id: "fsns-sqf",
    name: "FSNS & SQF Benchmarks",
    badgeImg: "/certifications/card/fsns-sqf.png",
    tagline: "Global Safety & Quality Standard",
    scope: "Recognized international safety and quality certification ensuring rigorous standard compliance and buyer trust.",
    features: ["Hygiene & Sanitation Control", "HACCP Principles Integration", "Buyer-Approved Compliance"]
  },
  {
    id: "iso-17025",
    name: "ISO 17025 Accredited",
    badgeImg: "/certifications/card/iso_17025.png",
    tagline: "Testing & Calibration Laboratories",
    scope: "Demonstrated technical competence, precision measurement calibrations, and internationally accepted laboratory validation data.",
    features: ["Physical & Chemical Testing", "Calibration Traceability", "Globally Accepted Reports"]
  },
  {
    id: "ce-marking",
    name: "CE Marking Conformity",
    badgeImg: "/certifications/card/ce_marking.png",
    tagline: "European Health & Safety Directives",
    scope: "Validation that manufactured industrial goods and textiles meet European Union health, safety, and environmental protection requirements.",
    features: ["Technical File Documentation", "Essential Safety Assessment", "EU Declaration of Conformity"]
  }
];

export default function AccreditationsSection() {
  const [specModalId, setSpecModalId] = useState<string | null>(null);

  return (
    <section id="accreditations" className="py-28 relative z-20 bg-slate-50 border-t border-b border-slate-200 overflow-hidden bg-[#F8FAFC]">
      {/* Background Watermarks & Inspection Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle low-opacity facility inspection background photo */}
        <div className="absolute inset-0 bg-[url('/images/quality_assurance.jpg')] bg-cover bg-center opacity-[0.06] grayscale contrast-125 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/70 to-slate-50" />

        {/* Enlarged Low-Opacity Official ARG Logo Watermark (Top Right) */}
        <div className="absolute -top-16 -right-20 w-[700px] h-[700px] lg:w-[950px] lg:h-[950px] opacity-[0.045] pointer-events-none rotate-6 mix-blend-multiply select-none">
          <Image src="/arg_logo.png" alt="ARG Registrars Official Logo Watermark" fill className="object-contain" priority={false} />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-2.5 text-xs font-sans font-semibold text-xs tracking-wider uppercase text-[#00873E] mb-4"
          >
            <span className="w-1.5 h-1.5 bg-[#00873E]" />
            <span>RECOGNIZED GLOBAL CONFORMITY</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight tracking-tight mb-6"
          >
            Accredited Registrar Scopes &amp; <br className="hidden md:block" />
            <span className="text-[#00873E]">
              International Standards
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600 font-sans text-base md:text-lg font-light leading-relaxed"
          >
            ARG Registrars Pakistan certifies, audits, and validates organizations against premier ISO standards, US C-TPAT security criteria, and factory technical benchmarks.
          </motion.p>
        </div>

        {/* 8 Bento-Style Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all"
            >
              {/* Shimmer line top */}
              

              <div>
                {/* Top Status & Badge Cradle */}
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-slate-50 rounded-2xl p-2.5 shadow-xs border border-slate-200 flex items-center justify-center shrink-0 w-16 h-16 group-hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-full">
                      <Image 
                        src={cert.badgeImg} 
                        alt={cert.name} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-sans font-semibold text-[10px] tracking-wider uppercase bg-emerald-50 border border-emerald-200/80 text-[#00873E]">
                    <span className="w-1.5 h-1.5 bg-[#00873E]" />
                    VERIFIED
                  </span>
                </div>

                {/* Title & Scope */}
                <h3 className="text-lg font-display font-semibold text-slate-900 group-hover:text-[#00873E] transition-colors mb-1">
                  {cert.name}
                </h3>
                <div className="text-[#00873E] font-sans text-xs font-semibold tracking-wide uppercase mb-3">
                  {cert.tagline}
                </div>
                <p className="text-slate-600 font-sans text-xs leading-relaxed mb-6 font-light">
                  {cert.scope}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <ul className="flex flex-col gap-2 mb-4">
                  {cert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-700 font-sans">
                      <CheckCircle2 size={13} className="text-[#00873E] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View Specification Button */}
                <button
                  type="button"
                  onClick={() => setSpecModalId(cert.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-[#00873E] font-display font-semibold text-xs border border-slate-200 hover:border-emerald-300 transition-all cursor-pointer active:scale-[0.98] group/btn"
                >
                  <FileCheck2 size={14} className="text-[#00873E] group-hover/btn:scale-110 transition-transform" />
                  <span>VIEW SPECIFICATION</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-3xl bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200 shadow-md relative overflow-hidden"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-display font-black text-slate-900 mb-2">
              Ready to Certify Your Organization or Supply Chain?
            </h4>
            <p className="text-slate-600 font-sans text-sm font-light leading-relaxed">
              Contact our registrar desks in Riyadh, KSA or Faisalabad, Pakistan for auditor deployment, certification timelines, and official registrar issuance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,135,62,0.4)] hover:-translate-y-0.5 border border-emerald-500/30 w-full sm:w-auto"
            >
              <span>EXPLORE ACCREDITED SCOPES</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 font-sans font-semibold text-xs tracking-wider px-7 py-4 rounded-xl transition-all duration-300 border border-slate-200 shadow-sm w-full sm:w-auto"
            >
              <span>REQUEST AUDIT QUOTATION</span>
            </Link>
          </div>
        </motion.div>

        {/* Specification Modal for Selected Certification */}
        <AuditSpecModal
          isOpen={!!specModalId}
          onClose={() => setSpecModalId(null)}
          standardId={specModalId || "iso-9001"}
        />

      </div>
    </section>
  );
}
