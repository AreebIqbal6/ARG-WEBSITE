"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import InteractiveHeroAudit from './InteractiveHeroAudit';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-start md:justify-center pt-28 sm:pt-36 md:pt-44 pb-16 md:pb-24 bg-white">
      {/* Background Editorial Auditor Inspection Picture */}
      <div className="absolute top-0 left-0 right-0 h-[600px] sm:h-[800px] lg:h-[1000px] z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/auditor_inspection.jpg')] bg-cover bg-center opacity-[0.35] contrast-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Institutional Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-sans font-semibold text-slate-700 tracking-wide mb-6 sm:mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#00873E]" />
            <span>Accredited International Registrar</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-normal">Saudi Arabia &amp; Pakistan</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 leading-[1.04] tracking-tight mb-6 sm:mb-8">
            Audited Rigor. <br />
            <span className="text-[#00873E]">
              Certified Globally.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 font-sans text-base sm:text-lg md:text-xl max-w-3xl mb-8 sm:mb-12 font-normal leading-relaxed px-2">
            Empowering industrial leaders, textile manufacturers, and international exporters with accredited <strong className="text-slate-900 font-semibold">ISO 9001</strong>, <strong className="text-slate-900 font-semibold">ISO 14001</strong>, <strong className="text-slate-900 font-semibold">ISO 45001</strong>, and <strong className="text-slate-900 font-semibold">C-TPAT</strong> supply chain certifications across Saudi Arabia and Pakistan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 mb-10 sm:mb-16 w-full sm:w-auto">
            <Link 
              href="/schedule" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-sans font-semibold text-xs tracking-normal bg-[#00873E] hover:bg-[#007536] text-white shadow-xs active:scale-[0.98] transition-colors duration-150"
            >
              <span>Schedule an audit</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link 
              href="/services" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sans font-medium text-xs tracking-normal bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-xs active:scale-[0.98] transition-colors duration-150"
            >
              <ShieldCheck size={15} className="text-[#00873E]" />
              <span>Explore accredited scopes</span>
            </Link>
          </div>

          {/* Interactive Registrar Verification Console */}
          <div className="w-full">
            <InteractiveHeroAudit />
          </div>

        </div>
      </div>
    </section>
  );
}
