"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, FileCheck2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AuditJourney from '../components/home/AuditJourney';
import AuditSpecModal from '../components/ui/AuditSpecModal';
import { getAuditStandards } from '@/data/standards';

const auditStandards = getAuditStandards();

export default function Audits() {
  const [specModalId, setSpecModalId] = useState<string | null>(null);
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-800 ">
      
      {/* HEADER */}
      <section className="relative pt-40 sm:pt-44 md:pt-48 pb-20 md:pb-24 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 z-0 bg-[url('/images/auditor_inspection.jpg')] bg-cover bg-center opacity-[0.35] contrast-105"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/65 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 text-[11px] sm:text-xs font-sans font-semibold text-xs tracking-wider uppercase border-b border-slate-200 pb-2 max-w-full">
              <span className="text-[#00873E] font-bold">ON-SITE AUDIT EVALUATIONS</span>
              <span className="hidden sm:inline text-slate-400">&bull;</span>
              <span className="text-slate-500">ARG REGISTRARS</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-tight tracking-tight mb-4">
              Quality &amp; Compliance <br />
              <span className="text-[#00873E]">
                Audits
              </span>
            </h1>
            <p className="text-slate-600 font-sans text-lg max-w-2xl font-light leading-relaxed">
              Objective, accredited evaluations of manufacturing facilities, supply chain security, and quality management systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-28 relative z-30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase text-[#00873E] font-bold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00873E]" />
                <span>AUDITING EXPERTISE &bull; FACTORY SCRUTINY</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-8 leading-tight">
                Comprehensive evaluation for international buyer compliance.
              </h2>
              <p className="text-slate-600 font-sans text-base md:text-lg leading-relaxed mb-6 font-light">
                ARG Registrars Pakistan provides certified third-party auditing services designed to scrutinize factory floors, supply chain security lines, environmental controls, and managerial workflows for full compliance with global trade mandates.
              </p>
              
              <div className="flex flex-col gap-3.5 mt-8 mb-10">
                {[
                  "ISO 9001, 14001 & 45001 comprehensive management audits",
                  "C-TPAT security audits aligning with US Customs & Border Protection",
                  "Factory capacity, machinery calibration, and technical assessments",
                  "Environmental compliance, waste management, and chemical safeguards",
                  "Accredited registrar certificate issuance upon audit completion"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-sans text-xs md:text-sm">
                    <CheckCircle2 size={16} className="text-[#00873E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-xs tracking-wider bg-gradient-to-r from-[#00873E] to-[#059669] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <span>COMPARE ISO SCOPES</span>
                  <ArrowUpRight size={16} />
                </Link>

                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2.5 bg-white text-slate-800 font-sans font-semibold text-xs tracking-wider px-7 py-4 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-all"
                >
                  <ShieldCheck size={16} className="text-[#00873E]" />
                  <span>Request Audit Schedule</span>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-h-[640px] overflow-y-auto pr-1">
                {auditStandards.map((std, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-5 rounded-3xl flex flex-col justify-between border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40"
                  >
                    <div>
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="relative w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl p-1 shrink-0 shadow-sm">
                          <Image src={std.badge} alt={std.name} fill className="object-contain p-0.5" />
                        </div>
                        <div>
                          <div className="text-[#00873E] font-sans font-bold text-[11px] uppercase tracking-wider">{std.name}</div>
                          <h4 className="font-display font-bold text-sm text-slate-900 leading-tight">{std.title}</h4>
                        </div>
                      </div>
                      <p className="text-slate-600 font-sans text-xs leading-relaxed font-light mb-4">{std.desc}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSpecModalId(std.id)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-[#00873E] font-display font-semibold text-[11px] border border-slate-200 hover:border-emerald-300 transition-all cursor-pointer active:scale-[0.98] group/btn mt-auto"
                    >
                      <FileCheck2 size={13} className="text-[#00873E] group-hover/btn:scale-110 transition-transform" />
                      <span>VIEW SPECIFICATION</span>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-STAGE ACCREDITED CERTIFICATION ROADMAP */}
      <AuditJourney />

      {/* Specification Modal */}
      <AuditSpecModal
        isOpen={!!specModalId}
        onClose={() => setSpecModalId(null)}
        standardId={specModalId || "iso-9001"}
      />

    </div>
  );
}
