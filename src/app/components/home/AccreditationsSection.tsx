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
    id: "iso-17025",
    name: "ISO 17025 Accredited",
    badgeImg: "/certifications/card/iso_17025.png",
    tagline: "Testing & Calibration Laboratories",
    scope: "International standard demonstrating technical competence, precision measurement, and validated laboratory test data.",
    features: ["Physical & Chemical Testing", "Calibration Traceability", "Globally Accepted Reports"]
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    badgeImg: "/certifications/card/iso_9001_2015.png",
    tagline: "Quality Management Systems",
    scope: "Standardized QMS implementation, CAPA defect elimination, and continuous process optimization across factories.",
    features: ["Risk-Based Process Audits", "Zero-Defect Quality Control", "Supplier Evaluation"]
  },
  {
    id: "zdhc",
    name: "ZDHC Gateway & MRSL",
    badgeImg: "/certifications/card/zdhc.png",
    tagline: "Roadmap to Zero Hazardous Chemicals",
    scope: "Elimination of hazardous substances in textile processing, chemical inventory compliance, and wastewater testing.",
    features: ["MRSL Level Conformance", "Wastewater Discharge Testing", "Chemical Management Audits"]
  },
  {
    id: "gots",
    name: "GOTS Certified",
    badgeImg: "/certifications/card/gots.png",
    tagline: "Global Organic Textile Standard",
    scope: "World-leading textile processing standard for organic fibers, integrating environmental and strict social criteria.",
    features: ["Organic Chain of Custody", "Residue & Toxin Screening", "Transaction Verification"]
  },
  {
    id: "grs",
    name: "GRS Standard",
    badgeImg: "/certifications/card/grs.png",
    tagline: "Global Recycled Standard",
    scope: "Verification of recycled material content, chain of custody, chemical restrictions, and responsible manufacturing.",
    features: ["Recycled Input Tracking", "Environmental Management", "Supply Chain Transparency"]
  },
  {
    id: "ppwr",
    name: "EU PPWR Compliance",
    badgeImg: "/certifications/card/ppwr.png",
    tagline: "Packaging & Packaging Waste Regulation",
    scope: "European Union circularity regulations enforcing packaging reduction, recyclability grades, and recycled plastic quotas.",
    features: ["Circularity Assessment", "Design for Recyclability", "Substance Restriction Checks"]
  },
  {
    id: "en-15343",
    name: "EN 15343 Recycled Plastics",
    badgeImg: "/certifications/card/en_15343.png",
    tagline: "Traceability & Recycled Content",
    scope: "European standard specifying procedures needed for traceability of recycled plastics and conformity assessment.",
    features: ["Post-Consumer Traceability", "Recycled Content % Auditing", "Batch Verification"]
  },
  {
    id: "ce-marking",
    name: "CE Marking",
    badgeImg: "/certifications/card/ce_marking.png",
    tagline: "European Conformity",
    scope: "Validation that industrial, PPE, and textile products comply with European safety, health, and environmental directives.",
    features: ["Technical File Documentation", "Essential Safety Assessment", "Declaration of Conformity"]
  }
];

export default function AccreditationsSection() {
  return (
    <section id="accreditations" className="py-28 relative z-20 bg-pqs-dark noise-bg border-t border-b border-pqs-gold/20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-pqs-gold/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute -bottom-20 right-0 w-[600px] h-[600px] bg-[#0A1E35]/80 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-10%" }} 
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-pqs-gold/30 backdrop-blur-md mb-6">
            <ShieldCheck size={16} className="text-pqs-gold" />
            <span className="text-pqs-gold font-montserrat font-bold text-xs tracking-[0.25em] uppercase">
              ACCREDITED COMPLIANCE FRAMEWORKS &bull; GLOBAL STANDARDS
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-white leading-tight tracking-tight mb-6"
          >
            Making Compliance Real Across <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pqs-gold via-[#e8d28a] to-white italic font-normal">
              8 International Standards
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-lg md:text-xl font-light leading-relaxed">
            Precision Quality Services (PQS) bridges factory floor execution with rigorous international accreditation. We prepare, audit, test, and certify your operations for premier global buyers.
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
              className="group relative rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-pqs-gold/50 p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_12px_40px_rgba(200,169,81,0.15)]"
            >
              {/* Top Accent Gradient on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pqs-gold/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

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
                <h3 className="text-xl font-montserrat font-bold text-white group-hover:text-pqs-gold transition-colors mb-1">
                  {cert.name}
                </h3>
                <div className="text-pqs-gold font-lato text-xs font-semibold tracking-wider uppercase mb-3">
                  {cert.tagline}
                </div>

                {/* Scope Description */}
                <p className="text-gray-400 font-lato text-sm leading-relaxed mb-6 font-light">
                  {cert.scope}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <ul className="flex flex-col gap-2">
                  {cert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-lato">
                      <CheckCircle2 size={13} className="text-pqs-gold shrink-0" />
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
          className="mt-16 rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-pqs-gold/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-2xl"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-montserrat font-black text-white mb-2">
              Need Verification or Audit Preparation for Your Facility?
            </h4>
            <p className="text-gray-300 font-lato text-base font-light">
              Our certified auditors and technical consultants review your readiness, manage testing submissions, and align your operations with buyer compliance protocols.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 bg-pqs-gold text-pqs-navy font-montserrat font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:bg-white shadow-[0_0_30px_rgba(200,169,81,0.3)] hover:-translate-y-0.5"
            >
              <span>SCHEDULE AN AUDIT</span>
              <ArrowRight size={15} />
            </Link>

            <a 
              href="https://wa.me/923009260495?text=Hello%20PQS,%20I%20am%20interested%20in%20certification%20and%20audit%20readiness%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white font-montserrat font-bold text-xs tracking-widest px-7 py-4 rounded-full transition-all duration-300 hover:border-pqs-gold hover:bg-pqs-gold/10"
            >
              <span>WHATSAPP INQUIRY</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
