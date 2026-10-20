"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveHeroAudit from './InteractiveHeroAudit';

const highlights = [
  { name: "ISO 9001", label: "Quality QMS", icon: "/certifications/card/iso-9001.jpg" },
  { name: "C-TPAT", label: "Supply Chain", icon: "/certifications/card/c-tpat.jpg" },
  { name: "ISO 14001", label: "Environmental EMS", icon: "/certifications/card/iso-14001.jpg" },
  { name: "ISO 45001", label: "Safety OH&S", icon: "/certifications/card/iso-45001.jpg" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden architect-grid bg-white">
      {/* Background Faded Picture */}
      <div className="absolute inset-0 z-0 bg-[url('/images/auditor_inspection.jpg')] bg-cover bg-center opacity-[0.06] mix-blend-luminosity scale-105 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

      {/* Dynamic Aurora Ambient Glows */}
      <div className="emerald-aurora top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#00873E]/10" />
      <div className="emerald-aurora -top-20 -left-20 w-[600px] h-[600px] bg-emerald-500/10" />
      <div className="emerald-aurora -bottom-20 -right-20 w-[550px] h-[550px] bg-[#059669]/10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 my-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Architectural Registrar Metadata Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-6 md:mb-8 text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase border-b border-slate-200 pb-2 text-center max-w-full"
          >
            <span className="text-[#00873E] font-bold">SEC. 01 //</span>
            <span className="text-slate-800 font-semibold">ACCREDITED REGISTRAR BODY</span>
            <span className="hidden sm:inline text-slate-300">&bull;</span>
            <span className="text-slate-500">RIYADH &bull; FAISALABAD</span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-8"
          >
            Audited Rigor. <br />
            <span className="text-[#00873E]">
              Certified Globally.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-600 font-sans text-base sm:text-lg md:text-xl max-w-3xl mb-12 font-light leading-relaxed px-2"
          >
            Empowering industrial leaders, textile manufacturers, and international exporters with accredited <strong className="text-slate-900 font-semibold">ISO 9001</strong>, <strong className="text-slate-900 font-semibold">ISO 14001</strong>, <strong className="text-slate-900 font-semibold">ISO 45001</strong>, and <strong className="text-slate-900 font-semibold">C-TPAT</strong> supply chain certifications across Saudi Arabia and Pakistan.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-16 w-full sm:w-auto"
          >
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-xs tracking-wider bg-gradient-to-r from-[#00873E] to-[#059669] text-white hover:shadow-[0_4px_25px_rgba(0,135,62,0.4)] hover:-translate-y-0.5 transition-all border border-emerald-500/30"
            >
              <span>SCHEDULE AN AUDIT</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link 
              href="/services" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-sans font-semibold text-xs tracking-wider bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-950 border border-slate-200 hover:border-slate-300 shadow-xs transition-all"
            >
              <ShieldCheck size={15} className="text-[#00873E]" />
              <span>EXPLORE ACCREDITED SCOPES</span>
            </Link>
          </motion.div>

          {/* Interactive Registrar Verification Console */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <InteractiveHeroAudit />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
