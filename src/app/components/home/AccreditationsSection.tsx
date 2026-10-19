"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

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
    name: "ISO 9001:2015",
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
  return (
    <section id="accreditations" className="py-32 relative z-20 bg-[#040D07] border-t border-b border-white/[0.08] overflow-hidden architect-grid">
      {/* Aurora Glows */}
      <div className="emerald-aurora top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#00873E]/15" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 mb-6"
          >
            <ShieldCheck size={14} className="text-[#34D399]" />
            <span className="text-[#34D399] font-sans font-bold text-xs tracking-[0.25em] uppercase">
              RECOGNIZED GLOBAL CONFORMITY
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight tracking-tight mb-6"
          >
            Accredited Registrar Scopes &amp; <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F59B] via-[#34D399] to-white italic font-normal">
              International Standards
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 font-sans text-base md:text-lg font-light leading-relaxed"
          >
            ARG Registrars Pakistan certifies, audits, and validates organizations against premier ISO standards, US C-TPAT security criteria, and factory technical benchmarks.
          </motion.p>
        </div>

        {/* 8 Bento-Style Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Shimmer line top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#34D399] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Top Status & Badge Cradle */}
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-white rounded-2xl p-2.5 shadow-lg border border-gray-100 flex items-center justify-center shrink-0 w-16 h-16 group-hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-full">
                      <Image 
                        src={cert.badgeImg} 
                        alt={cert.name} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 text-[#34D399]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
                    Verified
                  </span>
                </div>

                {/* Title & Scope */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-[#34D399] transition-colors mb-1">
                  {cert.name}
                </h3>
                <div className="text-[#34D399] font-sans text-xs font-semibold tracking-wide uppercase mb-3">
                  {cert.tagline}
                </div>
                <p className="text-gray-300 font-sans text-xs leading-relaxed mb-6 font-light">
                  {cert.scope}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="border-t border-white/[0.08] pt-4 mt-auto">
                <ul className="flex flex-col gap-2">
                  {cert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] text-gray-300 font-sans">
                      <CheckCircle2 size={13} className="text-[#34D399] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
          className="mt-16 rounded-3xl glass-panel p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-500/30 relative overflow-hidden"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-display font-black text-white mb-2">
              Ready to Certify Your Organization or Supply Chain?
            </h4>
            <p className="text-gray-300 font-sans text-sm font-light leading-relaxed">
              Contact our registrar desks in Riyadh, KSA or Faisalabad, Pakistan for auditor deployment, certification timelines, and official registrar issuance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,135,62,0.6)] hover:scale-105 border border-emerald-400/40"
            >
              <span>SCHEDULE AUDIT</span>
              <ArrowUpRight size={15} />
            </Link>

            <a 
              href="https://wa.me/9231459101614?text=Hello%20ARG%20Registrars,%20I%20am%20interested%20in%20ISO%20certification." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 glass-panel text-white font-sans font-semibold text-xs tracking-wider px-7 py-4 rounded-full transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.08]"
            >
              <span>WHATSAPP INQUIRY</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
