"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: appleEase } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

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
    scope: "Standardized quality management implementation, risk-based operational auditing, defect reduction, and continuous improvement.",
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
    tagline: "Customs-Trade Partnership Against Terrorism",
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
    tagline: "Global Safety & Quality Certification",
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
    <section id="accreditations" className="py-28 relative z-20 bg-[#06150D] noise-bg border-t border-b border-emerald-500/20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#00873E]/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute -bottom-20 right-0 w-[600px] h-[600px] bg-emerald-950/70 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-10%" }} 
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-emerald-500/30 backdrop-blur-md mb-6">
            <ShieldCheck size={16} className="text-[#34D399]" />
            <span className="text-[#34D399] font-montserrat font-bold text-xs tracking-[0.25em] uppercase">
              ACCREDITED CERTIFICATION REGISTRARS &bull; GLOBAL STANDARDS
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-white leading-tight tracking-tight mb-6"
          >
            Accredited Compliance Across <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#10B981] to-white italic font-normal">
              Premier Global Frameworks
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-lg md:text-xl font-light leading-relaxed">
            ARG Registrars Pakistan certifies, audits, and validates organizations against recognized ISO standards and international security frameworks, enabling seamless market entry across Saudi Arabia, Pakistan, the US, and Europe.
          </motion.p>
        </motion.div>

        {/* 8 Certification Grid */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-5%" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,135,62,0.2)]"
            >
              {/* Top Accent Gradient on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#34D399]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

              <div>
                {/* Badge Card Wrapper */}
                <div className="bg-[#FFFFFF] rounded-xl p-3 mb-6 shadow-md border border-gray-100 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <div className="relative w-full h-24">
                    <Image 
                      src={cert.badgeImg} 
                      alt={cert.name} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain p-1" 
                    />
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-montserrat font-bold text-white group-hover:text-[#34D399] transition-colors mb-1">
                  {cert.name}
                </h3>
                <div className="text-[#34D399] font-lato text-xs font-semibold tracking-wider uppercase mb-3">
                  {cert.tagline}
                </div>

                {/* Scope Description */}
                <p className="text-gray-300 font-lato text-sm leading-relaxed mb-6 font-light">
                  {cert.scope}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <ul className="flex flex-col gap-2">
                  {cert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-lato">
                      <CheckCircle2 size={13} className="text-[#34D399] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner Call to Action */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="mt-16 rounded-3xl bg-gradient-to-r from-white/10 via-emerald-950/40 to-white/10 border border-emerald-500/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-2xl"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-montserrat font-black text-white mb-2">
              Ready for ISO Certification or Facility Audits?
            </h4>
            <p className="text-gray-300 font-lato text-base font-light">
              Connect with ARG Registrars Pakistan in Riyadh, KSA or Faisalabad, Pakistan for auditor scheduling, gap evaluations, and official registrar certification.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 bg-[#00873E] text-white font-montserrat font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#059669] shadow-[0_0_30px_rgba(0,135,62,0.4)] hover:-translate-y-0.5"
            >
              <span>SCHEDULE AN AUDIT</span>
              <ArrowRight size={15} />
            </Link>

            <a 
              href="https://wa.me/9231459101614?text=Hello%20ARG%20Registrars,%20I%20am%20interested%20in%20ISO%20certification%20and%20audit%20readiness%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white font-montserrat font-bold text-xs tracking-widest px-7 py-4 rounded-full transition-all duration-300 hover:border-[#34D399] hover:bg-[#00873E]/15"
            >
              <span>WHATSAPP INQUIRY</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
