"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveHeroAudit from './InteractiveHeroAudit';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-white">
      {/* Background Editorial Auditor Inspection Picture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/auditor_inspection.jpg')] bg-cover bg-center opacity-[0.14] grayscale contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 my-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Institutional Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-sans font-semibold text-slate-700 tracking-wide mb-8 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#00873E]" />
            <span>Accredited International Registrar</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-normal">Saudi Arabia &amp; Pakistan</span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 leading-[1.04] tracking-tight mb-8"
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
            className="text-slate-600 font-sans text-base sm:text-lg md:text-xl max-w-3xl mb-12 font-normal leading-relaxed px-2"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-sans font-semibold text-xs tracking-wider bg-[#00873E] hover:bg-[#059669] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span>SCHEDULE AN AUDIT</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link 
              href="/services" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-sans font-semibold text-xs tracking-wider bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-950 border border-slate-300 shadow-xs transition-all"
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
