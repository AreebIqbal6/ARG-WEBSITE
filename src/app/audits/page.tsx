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
  { name: "ISO 17025", badge: "/certifications/card/iso_17025.png", title: "Laboratory Competence Audits", desc: "Inspection of testing methods, environmental controls, equipment calibration, and measurement uncertainty." },
  { name: "ISO 9001:2015", badge: "/certifications/card/iso_9001_2015.png", title: "QMS Compliance Reviews", desc: "Comprehensive assessment of quality management systems, management reviews, and continuous improvement cycles." },
  { name: "ZDHC Gateway", badge: "/certifications/card/zdhc.png", title: "Chemical & Wastewater Audits", desc: "On-site chemical storage verification, MRSL conformance, and wastewater discharge protocol sampling." },
  { name: "GOTS & GRS", badge: "/certifications/card/gots.png", title: "Sustainability Chain of Custody", desc: "Traceability of organic and recycled fiber inputs from raw material receipt through shipping." },
  { name: "PPWR & EN 15343", badge: "/certifications/card/ppwr.png", title: "Circularity & Recycled Plastic", desc: "Assessment of packaging recyclability, mass-balance accounting, and conformity under EU directives." },
  { name: "CE Marking", badge: "/certifications/card/ce_marking.png", title: "European Conformity Reviews", desc: "Technical file scrutiny, risk assessment documentation, and safety conformity declarations." }
];

export default function Audits() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* HEADER */}
      <section className="relative h-[55vh] min-h-[440px] flex items-end pb-20 pt-32 overflow-hidden bg-pqs-dark">
        <div className="absolute inset-0 z-0 bg-[url('/inspector.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-pqs-dark via-pqs-dark/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-pqs-gold"></div>
              <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs">
                FACILITY &bull; QUALITY &bull; SOCIAL COMPLIANCE
              </h2>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight mb-4">
              Quality &amp; Compliance Audits
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-lg max-w-2xl font-light">
              Objective, rigorous evaluation of manufacturing facilities, laboratories, and supply chains for international standards.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 relative z-30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pqs-navy/5 text-pqs-navy font-montserrat font-bold text-xs uppercase tracking-wider mb-6">
                <ShieldCheck size={15} className="text-pqs-gold" />
                <span>Auditing Expertise</span>
              </div>

              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-montserrat font-black text-pqs-navy mb-8 leading-tight">
                Comprehensive evaluation for international buyer compliance.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg leading-relaxed mb-6 font-light">
                Our Quality Audits provide an objective, deep-dive assessment of your production lines, quality control labs, chemical inventories, and environmental safeguards to ensure you meet high-stringency buyer codes.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="flex flex-col gap-4 mt-8 mb-10">
                {[
                  "Factory capacity and technical capability assessments",
                  "In-line inspections and Final Random Inspections (FRI)",
                  "ISO 17025 laboratory quality system readiness checks",
                  "Chemical management and ZDHC MRSL conformance verification",
                  "Traceability audits for GOTS, GRS, PPWR, and EN 15343"
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 text-pqs-navy font-semibold font-lato text-sm md:text-base">
                    <CheckCircle2 size={19} className="text-pqs-gold shrink-0" /> {item}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-pqs-navy text-white rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:bg-pqs-gold hover:text-pqs-navy shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <span className="relative z-10 font-montserrat font-bold text-xs md:text-sm tracking-widest">REQUEST AN AUDIT</span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <a 
                  href="https://wa.me/923009260495?text=Hello%20PQS,%20I%20would%20like%20to%20request%20an%20audit%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-pqs-navy font-montserrat font-bold text-xs md:text-sm tracking-wider px-7 py-4 rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-sm"
                >
                  <MessageCircle size={17} className="text-emerald-500" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2 flex items-center justify-center">
              <motion.div variants={fadeInUp} className="w-full bg-white border border-gray-200 p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-pqs-navy/5 flex items-center justify-center mb-6">
                  <ClipboardList size={32} className="text-pqs-gold" />
                </div>
                <h3 className="text-2xl md:text-3xl font-montserrat font-black text-pqs-navy mb-4">
                  Actionable Audit Reports &amp; CAPA
                </h3>
                <p className="text-gray-600 font-lato text-base leading-relaxed mb-6 font-light">
                  Every audit produces an exhaustive, data-backed technical report detailing compliance scores, risk matrices, and prioritized Corrective &amp; Preventive Action Plans (CAPA) that factory teams can execute immediately.
                </p>
                <div className="border-t border-gray-100 pt-6 flex flex-col gap-3 text-xs font-lato text-gray-700">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Clear photographic evidence and quantitative test metrics</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Root cause classification (Man, Machine, Method, Material)</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Follow-up verification and closing audit validation</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Audit Standards Grid */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-5%" }} 
            variants={staggerContainer} 
            className="mt-28 pt-16 border-t border-gray-200"
          >
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h3 className="text-3xl font-montserrat font-black text-pqs-navy mb-3">
                Standards We Audit Against
              </h3>
              <p className="text-gray-600 font-lato text-sm font-light">
                Tailored audit protocols covering global regulatory frameworks and retailer requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {auditStandards.map((std, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
                >
                  <div className="bg-gray-50 rounded-xl p-3 mb-5 border border-gray-100 flex items-center justify-center">
                    <div className="relative w-full h-16">
                      <Image src={std.badge} alt={std.name} fill sizes="30vw" className="object-contain" />
                    </div>
                  </div>
                  <h4 className="text-lg font-montserrat font-bold text-pqs-navy mb-2">{std.title}</h4>
                  <p className="text-gray-600 font-lato text-xs leading-relaxed font-light">{std.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
