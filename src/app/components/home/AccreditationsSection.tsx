"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Award, FileCheck2 } from 'lucide-react';
import AuditSpecModal from '../ui/AuditSpecModal';
import { getAccreditationStandards } from '@/data/standards';

const springPhysics = { type: "spring", damping: 25, stiffness: 120 };

const certifications = getAccreditationStandards();

export default function AccreditationsSection() {
  const [specModalId, setSpecModalId] = useState<string | null>(null);

  return (
    <section id="accreditations" className="py-28 relative z-20 bg-slate-50 border-t border-b border-slate-200 overflow-hidden bg-[#F8FAFC]">
      {/* Background Topic-Relative Faded Photo: Quality Assurance & Metrology */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/quality_assurance.jpg')] bg-cover bg-center opacity-[0.09] contrast-[1.08] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/75 to-[#F8FAFC]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 text-xs font-sans font-semibold text-[#00873E] mb-3">
            <span className="w-1.5 h-1.5 bg-[#00873E] rounded-full" />
            <span>Recognized global conformity</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight tracking-tight mb-6">
            Accredited Registrar Scopes &amp; <br className="hidden md:block" />
            <span className="text-[#00873E]">
              International Standards
            </span>
          </h2>

          <p className="text-slate-600 font-sans text-base md:text-lg font-light leading-relaxed">
            ARG Registrars Pakistan certifies, audits, and validates organizations against premier ISO standards, US C-TPAT security criteria, and factory technical benchmarks.
          </p>
        </div>

        {/* 8 Bento-Style Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-150"
            >
              {/* Shimmer line top */}
              

              <div>
                {/* Top Status & Badge Cradle */}
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-slate-50 rounded-xl p-2 shadow-xs border border-slate-200 flex items-center justify-center shrink-0 w-14 h-14 overflow-hidden" style={{ width: '56px', height: '56px', overflow: 'hidden' }}>
                    <Image 
                      src={cert.badgeImg} 
                      alt={cert.name} 
                      width={44}
                      height={44}
                      className="w-9 h-9 object-contain max-w-full max-h-full" 
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-sans font-medium bg-emerald-50 border border-emerald-200/80 text-[#00873E]">
                    <span className="w-1.5 h-1.5 bg-[#00873E] rounded-full" />
                    Verified
                  </span>
                </div>

                {/* Title & Scope */}
                <h3 className="text-lg font-display font-semibold text-slate-900 group-hover:text-[#00873E] transition-colors mb-1">
                  {cert.name}
                </h3>
                <div className="text-[#00873E] font-sans text-xs font-medium mb-3">
                  {cert.tagline}
                </div>
                <p className="text-slate-600 font-sans text-xs leading-relaxed mb-6 font-normal">
                  {cert.scope}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <ul className="flex flex-col gap-2 mb-4">
                  {cert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-700 font-sans">
                      <CheckCircle2 size={13} className="text-[#00873E] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View Specification Button & Direct Page Link */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSpecModalId(cert.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-sans font-medium text-xs border border-slate-200 transition-colors cursor-pointer active:scale-[0.98]"
                  >
                    <FileCheck2 size={14} className="text-[#00873E]" />
                    <span>View specification</span>
                  </button>
                  <Link
                    href={`/standards/${cert.id}`}
                    className="inline-flex items-center justify-center px-2.5 py-2 rounded-lg bg-slate-50 hover:bg-[#00873E] text-slate-600 hover:text-white font-sans font-medium text-xs border border-slate-200 hover:border-emerald-600 transition-colors active:scale-[0.98]"
                    title={`View dedicated ${cert.name} scope page`}
                  >
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div 
          className="mt-16 rounded-2xl bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200 shadow-sm relative overflow-hidden"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-2">
              Ready to Certify Your Organization or Supply Chain?
            </h4>
            <p className="text-slate-600 font-sans text-sm font-normal leading-relaxed">
              Submit your facility details for Stage 1 gap evaluation or contact our dual registrar desks in Riyadh, KSA and Faisalabad, Pakistan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link 
              href="/schedule" 
              className="inline-flex items-center justify-center gap-2 bg-[#00873E] hover:bg-[#007536] text-white font-sans font-semibold text-xs px-6 py-3.5 rounded-xl transition-colors duration-150 active:scale-[0.98] shadow-xs w-full sm:w-auto"
            >
              <span>Schedule an audit</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-sans font-medium text-xs px-6 py-3.5 rounded-xl transition-colors duration-150 border border-slate-200 shadow-xs active:scale-[0.98] w-full sm:w-auto"
            >
              <span>Contact registrar desk</span>
            </Link>
          </div>
        </div>

        {/* Specification Modal for Selected Certification */}
        <AuditSpecModal
          isOpen={!!specModalId}
          onClose={() => setSpecModalId(null)}
          standardId={specModalId || "iso-9001"}
        />

      </div>
    </section>
  );
}
