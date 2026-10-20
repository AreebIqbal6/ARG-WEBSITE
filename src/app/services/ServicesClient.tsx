"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Search, Award } from 'lucide-react';
import Link from 'next/link';
import CertificateVerifyModal from '../components/ui/CertificateVerifyModal';

const services = [
  {
    title: "ISO 9001:2015 Quality Management Systems",
    badge: "Accredited QMS Registrar",
    desc: "End-to-end certification and surveillance auditing for ISO 9001:2015. We verify organizational risk management, defect reduction frameworks, standardized operational processes, and customer satisfaction loops.",
    img: "/images/quality_assurance.jpg",
    ctaText: "VIEW QMS AUDIT METHODOLOGY",
    ctaLink: "/audits#four-stage-protocol",
    deliverables: [
      "ISO 9001 gap analysis and readiness auditing",
      "Corrective & Preventive Action (CAPA) tracking loops",
      "Accredited ISO certificate issuance & annual surveillance"
    ]
  },
  {
    title: "ISO 14001:2015 Environmental Management",
    badge: "Accredited EMS Certification",
    desc: "Rigorous verification of environmental safeguards, industrial waste reduction, energy efficiency, and chemical management to fulfill stringent multinational buyer sustainability criteria.",
    img: "/images/environmental_sustainability.jpg",
    ctaText: "ENVIRONMENTAL AUDIT CRITERIA",
    ctaLink: "/audits#four-stage-protocol",
    deliverables: [
      "Environmental impact risk assessment and legal audits",
      "Effluent, emissions, and hazardous waste monitoring",
      "Resource sustainability & energy conservation protocols"
    ]
  },
  {
    title: "ISO 45001:2018 Health & Safety Systems",
    badge: "Occupational Safety Standard",
    desc: "Workplace hazard identification, emergency preparedness, machinery guarding, and employee wellness systems required by global brands and international labor conventions.",
    img: "/images/occupational_safety.jpg",
    ctaText: "WORKPLACE SAFETY PROTOCOL",
    ctaLink: "/audits#four-stage-protocol",
    deliverables: [
      "Occupational hazard & risk mitigation reviews",
      "Factory fire safety & emergency exit inspections",
      "Industrial hygiene and worker protection systems"
    ]
  },
  {
    title: "C-TPAT Supply Chain Security Certification",
    badge: "US Customs & Border Protection",
    desc: "Comprehensive supply chain security audits certifying container security, physical perimeter control, personnel screening, and procedural security for streamlined export into North America.",
    img: "/images/supply_chain_security.jpg",
    ctaText: "C-TPAT SECURITY AUDIT",
    ctaLink: "/audits#four-stage-protocol",
    deliverables: [
      "7-point container inspection validation",
      "Factory physical perimeter & cyber security audits",
      "Supply chain partner security verification"
    ]
  },
  {
    title: "Factory Technical & Quality Audits",
    badge: "Operational Capability",
    desc: "On-site scrutiny of machinery capacity, calibration logs, lab quality control procedures, and inline production defect mapping to prove capability to international buyers.",
    img: "/images/technical_testing_lab.jpg",
    ctaText: "TECHNICAL AUDIT PROTOCOL",
    ctaLink: "/audits#four-stage-protocol",
    deliverables: [
      "Machine capacity and maintenance record verification",
      "In-line defect mapping & statistical process control",
      "Technical audit grading and buyer readiness reports"
    ]
  },
  {
    title: "FSNS, SQF & Global Standards Support",
    badge: "Hygiene & Food Safety",
    desc: "Specialized auditing for food packaging, hygiene-critical consumer goods, and HACCP compliance to guarantee international retail acceptance.",
    img: "/images/logistics_warehouse.jpg",
    ctaText: "HYGIENE & SAFETY PROTOCOLS",
    ctaLink: "/audits#four-stage-protocol",
    deliverables: [
      "HACCP standard alignment & hygiene audits",
      "Packaging safety & contamination barrier verification",
      "Third-party audit documentation readiness"
    ]
  }
];

export default function Services() {
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-800 architect-grid">
      
      {/* HEADER */}
      <section className="relative h-[60vh] min-h-[460px] flex items-end pb-20 pt-36 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 z-0 bg-[url('/images/precision_robotics.jpg')] bg-cover bg-center opacity-[0.06] mix-blend-luminosity scale-105"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/70 to-transparent"></div>
        <div className="emerald-aurora top-1/4 left-1/3 w-[600px] h-[350px] bg-[#00873E]/10" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase border-b border-slate-200 pb-2 max-w-full">
              <span className="text-[#00873E] font-bold">SEC. 03 //</span>
              <span className="text-slate-800 font-semibold">ACCREDITED SCOPES</span>
              <span className="hidden sm:inline text-slate-400">&bull;</span>
              <span className="text-slate-500">ARG REGISTRARS</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 leading-tight tracking-tight mb-4">
              Certification &amp; <br />
              <span className="text-[#00873E]">
                Registrar Services
              </span>
            </h1>
            <p className="text-slate-600 font-sans text-lg max-w-2xl font-light leading-relaxed">
              Accredited ISO certifications, supply chain security, and technical assessments to unlock global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REGISTRY VERIFICATION BANNER */}
      <section className="relative z-30 -mt-10 mb-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-4 text-left">
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

      {/* CONTENT */}
      <section className="py-20 relative z-30">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col justify-between group border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 relative"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-90" 
                    style={{ backgroundImage: `url('${srv.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="inline-block bg-[#00873E] text-white font-mono text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md shadow-sm">
                      {srv.badge}
                    </span>
                  </div>
                </div>

                <div className="p-7 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#00873E] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-600 font-sans text-xs leading-relaxed mb-6 font-light">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <div className="text-[11px] font-sans font-bold text-[#00873E] uppercase tracking-wider mb-3">
                      Core Deliverables
                    </div>
                    <ul className="flex flex-col gap-2 mb-6">
                      {srv.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 font-sans font-light">
                          <CheckCircle2 size={13} className="text-[#00873E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={srv.ctaLink}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-50 hover:bg-[#00873E] text-slate-800 hover:text-white font-sans font-bold text-xs tracking-wider transition-all duration-300 border border-slate-200 hover:border-transparent"
                    >
                      <span>{srv.ctaText}</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
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
    </div>
  );
}
