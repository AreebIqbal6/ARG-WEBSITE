"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const services = [
  {
    title: "ISO 9001:2015 Quality Management Systems",
    badge: "Accredited QMS Registrar",
    desc: "End-to-end certification and surveillance auditing for ISO 9001:2015. We verify organizational risk management, defect reduction frameworks, standardized operational processes, and continuous customer satisfaction loops.",
    img: "/loom.jpg",
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
    img: "/unsplash_2.jpg",
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
    img: "/inspector.jpg",
    deliverables: [
      "Occupational hazard & risk mitigation reviews",
      "Factory fire safety & emergency exit inspections",
      "Industrial hygiene and worker protection systems"
    ]
  },
  {
    title: "C-TPAT Supply Chain Security Certification",
    badge: "US Customs & Border Protection Alignment",
    desc: "Comprehensive supply chain security audits certifying container security, physical perimeter control, personnel screening, and procedural security for streamlined export into North America.",
    img: "/unsplash_0.jpg",
    deliverables: [
      "7-point container inspection validation",
      "Factory physical perimeter & cyber security audits",
      "Supply chain partner security verification"
    ]
  },
  {
    title: "Factory Technical & Quality Audits",
    badge: "Operational Capability Benchmarking",
    desc: "On-site scrutiny of machinery capacity, calibration logs, lab quality control procedures, and inline production defect mapping to prove capability to international buyers.",
    img: "/microscope.jpg",
    deliverables: [
      "Machine capacity and maintenance record verification",
      "In-line defect mapping & statistical process control",
      "Technical audit grading and buyer readiness reports"
    ]
  },
  {
    title: "FSNS, SQF & Global Standards Support",
    badge: "Hygiene & Food Safety Verification",
    desc: "Specialized auditing for food packaging, hygiene-critical consumer goods, and HACCP compliance to guarantee international retail acceptance.",
    img: "/unsplash_4.jpg",
    deliverables: [
      "HACCP standard alignment & hygiene audits",
      "Packaging safety & contamination barrier verification",
      "Third-party audit documentation readiness"
    ]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* HEADER */}
      <section className="relative h-[55vh] min-h-[440px] flex items-end pb-20 pt-32 overflow-hidden bg-[#06150D]">
        <div className="absolute inset-0 z-0 bg-[url('/unsplash_0.jpg')] bg-cover bg-center opacity-25 mix-blend-luminosity"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#06150D] via-[#06150D]/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-[#00873E]"></div>
              <h2 className="text-[#34D399] font-montserrat font-bold tracking-[0.25em] uppercase text-xs">
                WHAT WE DO &bull; ARG REGISTRARS PAKISTAN
              </h2>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight mb-4">
              Certification &amp; Audit Services
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-lg max-w-2xl font-light">
              Accredited ISO certifications, supply chain security, and technical assessments to unlock global markets.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 relative z-30">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-5%" }}
                variants={fadeInUp}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                    style={{ backgroundImage: `url('${srv.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-[#00873E] text-white font-montserrat text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-1">
                      {srv.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-[#06150D] mb-3 leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-gray-600 font-lato text-sm leading-relaxed mb-6 font-light">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <div className="text-xs font-montserrat font-bold text-[#00873E] uppercase tracking-wider mb-3">
                      Core Deliverables
                    </div>
                    <ul className="flex flex-col gap-2 mb-6">
                      {srv.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-700 font-lato">
                          <CheckCircle2 size={14} className="text-[#00873E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gray-50 hover:bg-[#00873E] text-[#06150D] hover:text-white font-montserrat font-bold text-xs tracking-wider transition-all duration-300 border border-gray-200 hover:border-transparent"
                    >
                      <span>INQUIRE ABOUT THIS SERVICE</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom WhatsApp CTA */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-[#06150D] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-500/30">
            <div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-black mb-2">
                Need a Custom Scope or Multiple ISO Standard Certifications?
              </h3>
              <p className="text-gray-300 font-lato text-sm max-w-xl font-light">
                Speak directly with an ARG Registrars lead auditor to structure combined audits, gap analysis, and tailored surveillance timelines.
              </p>
            </div>
            <a
              href="https://wa.me/9231459101614?text=Hello%20ARG%20Registrars,%20I%20would%20like%20to%20discuss%20a%20certification%20scope."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-montserrat font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all shrink-0 shadow-lg"
            >
              <MessageCircle size={18} />
              <span>WHATSAPP TECHNICAL DESK</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
