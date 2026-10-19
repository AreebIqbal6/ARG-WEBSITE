"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import InteractiveHeroAudit from './InteractiveHeroAudit';

const springTransition: any = { type: "spring", damping: 26, stiffness: 120 };

const heroCertPills = [
  { name: "ISO 9001:2015", label: "Quality QMS", icon: "/certifications/card/iso-9001.png" },
  { name: "ISO 14001", label: "Environmental", icon: "/certifications/card/iso-14001.jpg" },
  { name: "C-TPAT", label: "Supply Security", icon: "/certifications/card/ctpat.jpg" },
  { name: "ISO 45001", label: "Safety OH&S", icon: "/certifications/card/iso-45001.jpg" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden architect-grid noise-overlay">
      {/* Background Faded Picture */}
      <div className="absolute inset-0 z-0 bg-[url('/images/auditor_inspection.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity scale-105 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#030906] via-[#030906]/75 to-[#030906]/90 pointer-events-none" />

      {/* Dynamic Aurora Ambient Glows */}
      <div className="emerald-aurora top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#00873E]/15" />
      <div className="emerald-aurora -top-20 -left-20 w-[600px] h-[600px] bg-emerald-900/20" />
      <div className="emerald-aurora -bottom-20 -right-20 w-[550px] h-[550px] bg-[#059669]/15" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 my-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Architectural Registrar Metadata Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8 text-xs font-mono tracking-widest uppercase border-b border-white/10 pb-2"
          >
            <span className="text-[#34D399] font-bold">SEC. 01 //</span>
            <span className="text-gray-200">ACCREDITED REGISTRAR BODY</span>
            <span className="text-gray-600">&bull;</span>
            <span className="text-gray-400">RIYADH &bull; FAISALABAD</span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[1.05] tracking-tight mb-8"
          >
            Audited Rigor. <br />
            <span className="text-[#34D399]">
              Certified Globally.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300 font-sans text-base sm:text-lg md:text-xl max-w-3xl mb-12 font-light leading-relaxed"
          >
            Empowering industrial leaders, textile manufacturers, and international exporters with accredited <strong className="text-white font-semibold">ISO 9001</strong>, <strong className="text-white font-semibold">ISO 14001</strong>, <strong className="text-white font-semibold">ISO 45001</strong>, and <strong className="text-white font-semibold">C-TPAT</strong> supply chain certifications across Saudi Arabia and Pakistan.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-xs tracking-wider bg-gradient-to-r from-[#00873E] to-[#059669] text-white hover:shadow-[0_0_30px_rgba(0,135,62,0.5)] hover:-translate-y-0.5 transition-all border border-emerald-400/40"
            >
              <span>SCHEDULE AN AUDIT</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-sans font-semibold text-xs tracking-wider glass-panel text-gray-200 hover:text-white hover:border-emerald-400/40 hover:bg-white/[0.06] transition-all"
            >
              <ShieldCheck size={15} className="text-[#34D399]" />
              <span>EXPLORE ACCREDITED SCOPES</span>
            </Link>
          </motion.div>

          {/* Interactive Registrar Verification Console */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-full"
          >
            <InteractiveHeroAudit />
          </motion.div>

          {/* Corporate Hubs Footer Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-8 text-xs text-gray-400 font-sans border-t border-white/[0.08] pt-6 w-full max-w-3xl"
          >
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#34D399]" />
              <span><strong className="text-gray-200">Head Office:</strong> Riyadh, Kingdom of Saudi Arabia</span>
            </div>
            <div className="hidden sm:block text-gray-700">&bull;</div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#34D399]" />
              <span><strong className="text-gray-200">Local Office:</strong> Faisalabad, Pakistan</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
