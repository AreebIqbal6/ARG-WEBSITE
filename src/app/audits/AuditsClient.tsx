"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const auditStandards = [
  { name: "ISO 9001:2015", badge: "/certifications/card/iso-9001.png", title: "Quality Management Audits", desc: "Rigorous evaluation of operational workflows, defect minimization, risk analysis, and customer satisfaction loops." },
  { name: "ISO 14001:2015", badge: "/certifications/card/iso-14001.jpg", title: "Environmental Management Audits", desc: "Assessment of ecological impacts, waste treatment compliance, resource conservation, and environmental legal obligations." },
  { name: "ISO 45001:2018", badge: "/certifications/card/iso-45001.jpg", title: "Occupational Safety Audits", desc: "Workplace hazard prevention, emergency response protocols, industrial hygiene, and worker wellness safeguards." },
  { name: "C-TPAT Certified", badge: "/certifications/card/ctpat.jpg", title: "Supply Chain Security Audits", desc: "End-to-end security audits according to US Customs criteria, covering container integrity, physical perimeter security, and logistics." },
  { name: "Technical Audit", badge: "/certifications/card/technical-audit.png", title: "Factory Capability Reviews", desc: "In-depth machinery inspection, labor practices, quality control room protocols, and overall factory manufacturing capacity." },
  { name: "FSNS & SQF", badge: "/certifications/card/fsns-sqf.png", title: "Hygiene & Food Safety Standards", desc: "Comprehensive auditing for food contact materials, sanitation practices, traceability, and global safety standards." },
  { name: "ISO 17025", badge: "/certifications/card/iso_17025.png", title: "Laboratory Competence Audits", desc: "Scrutiny of testing methodologies, environmental controls, equipment calibration curves, and measurement uncertainty." },
  { name: "CE Marking", badge: "/certifications/card/ce_marking.png", title: "European Conformity Directives", desc: "Technical file scrutiny, risk mitigation records, and safety conformity declarations for European export compliance." }
];

export default function Audits() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030906] architect-grid noise-overlay">
      
      {/* HEADER */}
      <section className="relative h-[60vh] min-h-[460px] flex items-end pb-20 pt-36 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/images/auditor_inspection.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity scale-105"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#030906] via-[#030906]/80 to-transparent"></div>
        <div className="emerald-aurora top-1/4 left-1/3 w-[600px] h-[350px] bg-[#00873E]/20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-[#34D399] font-sans font-bold text-xs uppercase tracking-wider mb-6">
              <ShieldCheck size={14} />
              <span>ARG REGISTRARS &bull; AUDITING &amp; VERIFICATION</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight tracking-tight mb-4">
              Quality &amp; Compliance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F59B] via-[#34D399] to-white">
                Audits
              </span>
            </h1>
            <p className="text-gray-300 font-sans text-lg max-w-2xl font-light leading-relaxed">
              Objective, accredited evaluations of manufacturing facilities, supply chain security, and quality management systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-28 relative z-30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-[#34D399] font-sans font-bold text-xs uppercase tracking-wider mb-6 border border-emerald-500/20">
                <ShieldCheck size={14} />
                <span>Auditing Expertise</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-8 leading-tight">
                Comprehensive evaluation for international buyer compliance.
              </h2>
              <p className="text-gray-300 font-sans text-base md:text-lg leading-relaxed mb-6 font-light">
                ARG Registrars Pakistan provides certified third-party auditing services designed to scrutinize factory floors, supply chain security lines, environmental controls, and managerial workflows for full compliance with global trade mandates.
              </p>
              
              <div className="flex flex-col gap-3.5 mt-8 mb-10">
                {[
                  "ISO 9001, 14001 & 45001 comprehensive management audits",
                  "C-TPAT security audits aligning with US Customs & Border Protection",
                  "Factory capacity, machinery calibration, and technical assessments",
                  "Environmental compliance, waste management, and chemical safeguards",
                  "Accredited registrar certificate issuance upon audit completion"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl glass-panel text-gray-200 font-sans text-xs md:text-sm">
                    <CheckCircle2 size={16} className="text-[#34D399] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-bold text-xs tracking-widest bg-gradient-to-r from-[#00873E] to-[#059669] text-white hover:shadow-[0_0_30px_rgba(0,135,62,0.6)] hover:scale-105 transition-all duration-300 border border-emerald-400/40">
                  <span>REQUEST AN AUDIT</span>
                  <ArrowUpRight size={16} />
                </Link>

                <a 
                  href="https://wa.me/9231459101614?text=Hello%20ARG%20Registrars,%20I%20would%20like%20to%20request%20an%20audit%20inquiry."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 glass-panel text-white font-sans font-semibold text-xs tracking-wider px-7 py-4 rounded-full hover:border-emerald-400/40 hover:bg-white/[0.08] transition-all"
                >
                  <MessageCircle size={16} className="text-[#34D399]" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {auditStandards.slice(0, 6).map((std, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 rounded-3xl flex flex-col justify-between border border-white/[0.08]"
                  >
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="relative w-12 h-12 bg-white rounded-xl p-1 shrink-0 shadow-md">
                        <Image src={std.badge} alt={std.name} fill className="object-contain p-0.5" />
                      </div>
                      <div>
                        <div className="text-[#34D399] font-sans font-bold text-[11px] uppercase tracking-wider">{std.name}</div>
                        <h4 className="font-display font-bold text-sm text-white leading-tight">{std.title}</h4>
                      </div>
                    </div>
                    <p className="text-gray-400 font-sans text-xs leading-relaxed font-light">{std.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
