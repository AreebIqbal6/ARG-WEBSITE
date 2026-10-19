"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ClipboardList, ShieldCheck, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const auditStandards = [
  { name: "ISO 9001:2015", badge: "/certifications/card/iso-9001.png", title: "Quality Management Audits", desc: "Rigorous evaluation of operational workflows, defect minimization, risk analysis, and systematic customer satisfaction loops." },
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
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* HEADER */}
      <section className="relative h-[55vh] min-h-[440px] flex items-end pb-20 pt-32 overflow-hidden bg-[#06150D]">
        <div className="absolute inset-0 z-0 bg-[url('/inspector.jpg')] bg-cover bg-center opacity-25 mix-blend-luminosity"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#06150D] via-[#06150D]/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-[#00873E]"></div>
              <h2 className="text-[#34D399] font-montserrat font-bold tracking-[0.25em] uppercase text-xs">
                ARG REGISTRARS &bull; AUDITING &amp; VERIFICATION
              </h2>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight mb-4">
              Quality &amp; Compliance Audits
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-lg max-w-2xl font-light">
              Objective, accredited evaluations of manufacturing facilities, supply chain security, and quality management systems.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 relative z-30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#00873E] font-montserrat font-bold text-xs uppercase tracking-wider mb-6">
                <ShieldCheck size={15} />
                <span>Auditing Expertise</span>
              </div>

              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-montserrat font-black text-[#06150D] mb-8 leading-tight">
                Comprehensive evaluation for international buyer compliance.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg leading-relaxed mb-6 font-light">
                ARG Registrars Pakistan provides certified third-party auditing services designed to scrutinize factory floors, supply chain security lines, environmental controls, and managerial workflows for full compliance with global trade mandates.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="flex flex-col gap-4 mt-8 mb-10">
                {[
                  "ISO 9001, 14001 & 45001 comprehensive management audits",
                  "C-TPAT security audits aligning with US Customs & Border Protection",
                  "Factory capacity, machinery calibration, and technical assessments",
                  "Environmental compliance, waste management, and chemical safeguards",
                  "Accredited registrar certificate issuance upon audit completion"
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 text-[#06150D] font-semibold font-lato text-sm md:text-base">
                    <CheckCircle2 size={19} className="text-[#00873E] shrink-0" /> {item}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-[#00873E] text-white rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:bg-[#059669] shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <span className="relative z-10 font-montserrat font-bold text-xs md:text-sm tracking-widest">REQUEST AN AUDIT</span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <a 
                  href="https://wa.me/9231459101614?text=Hello%20ARG%20Registrars,%20I%20would%20like%20to%20request%20an%20audit%20inquiry."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#06150D] font-montserrat font-bold text-xs md:text-sm tracking-wider px-7 py-4 rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-sm"
                >
                  <MessageCircle size={17} className="text-emerald-500" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2 flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {auditStandards.slice(0, 6).map((std, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-md flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-12 h-12 bg-gray-50 rounded-lg p-1 border border-gray-100 shrink-0">
                        <Image src={std.badge} alt={std.name} fill className="object-contain p-0.5" />
                      </div>
                      <div>
                        <div className="text-[#00873E] font-montserrat font-bold text-xs">{std.name}</div>
                        <h4 className="font-montserrat font-bold text-sm text-[#06150D] leading-tight">{std.title}</h4>
                      </div>
                    </div>
                    <p className="text-gray-500 font-lato text-xs leading-relaxed font-light">{std.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
