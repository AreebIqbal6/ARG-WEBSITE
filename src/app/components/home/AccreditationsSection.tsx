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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-2.5 text-xs font-sans font-semibold text-xs tracking-wider uppercase text-[#00873E] mb-4"
          >
            <span className="w-1.5 h-1.5 bg-[#00873E]" />
            <span>RECOGNIZED GLOBAL CONFORMITY</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight tracking-tight mb-6"
          >
            Accredited Registrar Scopes &amp; <br className="hidden md:block" />
            <span className="text-[#00873E]">
              International Standards
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600 font-sans text-base md:text-lg font-light leading-relaxed"
          >
            ARG Registrars Pakistan certifies, audits, and validates organizations against premier ISO standards, US C-TPAT security criteria, and factory technical benchmarks.
          </motion.p>
        </div>

        {/* 8 Bento-Style Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all"
            >
              {/* Shimmer line top */}
              

              <div>
                {/* Top Status & Badge Cradle */}
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-slate-50 rounded-2xl p-2.5 shadow-xs border border-slate-200 flex items-center justify-center shrink-0 w-16 h-16 group-hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-full">
                      <Image 
                        src={cert.badgeImg} 
                        alt={cert.name} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-sans font-semibold text-[10px] tracking-wider uppercase bg-emerald-50 border border-emerald-200/80 text-[#00873E]">
                    <span className="w-1.5 h-1.5 bg-[#00873E]" />
                    VERIFIED
                  </span>
                </div>

                {/* Title & Scope */}
                <h3 className="text-lg font-display font-semibold text-slate-900 group-hover:text-[#00873E] transition-colors mb-1">
                  {cert.name}
                </h3>
                <div className="text-[#00873E] font-sans text-xs font-semibold tracking-wide uppercase mb-3">
                  {cert.tagline}
                </div>
                <p className="text-slate-600 font-sans text-xs leading-relaxed mb-6 font-light">
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

                {/* View Specification Button */}
                <button
                  type="button"
                  onClick={() => setSpecModalId(cert.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-[#00873E] font-display font-semibold text-xs border border-slate-200 hover:border-emerald-300 transition-all cursor-pointer active:scale-[0.98] group/btn"
                >
                  <FileCheck2 size={14} className="text-[#00873E] group-hover/btn:scale-110 transition-transform" />
                  <span>VIEW SPECIFICATION</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-3xl bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200 shadow-md relative overflow-hidden"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-display font-black text-slate-900 mb-2">
              Ready to Certify Your Organization or Supply Chain?
            </h4>
            <p className="text-slate-600 font-sans text-sm font-light leading-relaxed">
              Contact our registrar desks in Riyadh, KSA or Faisalabad, Pakistan for auditor deployment, certification timelines, and official registrar issuance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,135,62,0.4)] hover:-translate-y-0.5 border border-emerald-500/30 w-full sm:w-auto"
            >
              <span>REQUEST AUDIT QUOTATION</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 font-sans font-semibold text-xs tracking-wider px-7 py-4 rounded-xl transition-all duration-300 border border-slate-200 shadow-sm w-full sm:w-auto"
            >
              <span>EXPLORE ACCREDITED SCOPES</span>
            </Link>
          </div>
        </motion.div>

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
