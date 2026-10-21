"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  FileCheck2, 
  Download, 
  ShieldCheck, 
  Clock, 
  Layers, 
  ArrowRight, 
  Phone, 
  Mail, 
  Building2, 
  ArrowLeft,
  CalendarCheck,
  Check
} from 'lucide-react';
import { Standard, STANDARDS_CATALOG } from '@/data/standards';

interface Props {
  standard: Standard;
}

export default function StandardDetailClient({ standard }: Props) {
  const [downloaded, setDownloaded] = useState(false);

  // Filter related standards from the same category or overall catalog
  const relatedStandards = STANDARDS_CATALOG.filter(
    (s) => s.id !== standard.id && (s.category === standard.category || s.isHeroFeatured)
  ).slice(0, 3);

  const handleDownload = () => {
    const content = `=====================================================
ARG REGISTRARS - OFFICIAL AUDIT CRITERIA SPECIFICATION
=====================================================
STANDARD: ${standard.code} - ${standard.title}
CATEGORY: ${standard.category}
VALIDITY: ${standard.validity}
TURNAROUND: ${standard.turnaround}
IAF SECTOR: ${standard.iafSector}
AUDITOR PERSON-DAYS: ${standard.personDaysGuide}

SCOPE & PURPOSE:
${standard.scopeSummary}

STAGE 1 DOCUMENTATION REQUIREMENTS:
${standard.stage1Docs.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

STAGE 2 ON-SITE AUDIT CHECKPOINTS:
${standard.stage2Audits.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

DELIVERABLES:
${standard.deliverables.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

ISSUED BY:
ARG Registrars Bureau Desks
Riyadh, Saudi Arabia: +966 55 800 4287
Faisalabad, Pakistan: +92 314 59101614
Website: https://argregistrars.com
Email: records@argregistrars.com
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ARG-${standard.code.replace(/[^a-zA-Z0-9]/g, '_')}-Audit-Specification.txt`;
    a.click();
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-800">
      
      {/* Top Breadcrumb & Hero */}
      <section className="relative pt-40 sm:pt-44 md:pt-48 pb-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.25] contrast-105" style={{ backgroundImage: `url('${standard.heroImage}')` }} />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/80 to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-sans text-slate-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-[#00873E] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#00873E] transition-colors">Services &amp; Scopes</Link>
            <span>/</span>
            <span className="text-[#00873E] font-semibold">{standard.code}</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 max-w-6xl">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white border border-slate-200 p-2 shadow-lg shrink-0 flex items-center justify-center">
                <Image 
                  src={standard.badgeImg} 
                  alt={standard.name} 
                  width={96} 
                  height={96} 
                  className="object-contain p-1"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00873E] font-mono text-[11px] font-bold uppercase tracking-wider mb-2 border border-emerald-200">
                  <ShieldCheck size={13} />
                  <span>{standard.category}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                  {standard.code}
                </h1>
                <p className="text-slate-600 font-sans text-base sm:text-lg mt-1 font-light max-w-2xl">
                  {standard.title}
                </p>
              </div>
            </div>

            {/* Top Quick Actions */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0 w-full lg:w-auto">
              <Link
                href={`/schedule?standard=${encodeURIComponent(standard.id)}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <CalendarCheck size={15} />
                <span>SCHEDULE AUDIT</span>
              </Link>
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-sans font-semibold text-xs border border-slate-200 shadow-xs transition-all w-full sm:w-auto cursor-pointer"
              >
                {downloaded ? <Check size={15} className="text-[#00873E]" /> : <Download size={15} className="text-[#00873E]" />}
                <span>{downloaded ? "SPEC DOWNLOADED" : "DOWNLOAD SPEC (.TXT)"}</span>
              </button>
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-6xl">
            <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200">
              <div className="text-[11px] font-mono text-[#00873E] font-bold uppercase">Accredited Turnaround</div>
              <div className="text-base font-display font-bold text-slate-900 mt-1">{standard.turnaround}</div>
            </div>
            <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200">
              <div className="text-[11px] font-mono text-[#00873E] font-bold uppercase">Certificate Validity</div>
              <div className="text-base font-display font-bold text-slate-900 mt-1">{standard.validity}</div>
            </div>
            <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200">
              <div className="text-[11px] font-mono text-[#00873E] font-bold uppercase">IAF Sector Scope</div>
              <div className="text-base font-display font-bold text-slate-900 mt-1 truncate" title={standard.iafSector}>
                {standard.iafSector}
              </div>
            </div>
            <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200">
              <div className="text-[11px] font-mono text-[#00873E] font-bold uppercase">Audit Governance</div>
              <div className="text-base font-display font-bold text-slate-900 mt-1">Dual-Desk Certified</div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Primary Content Column */}
            <div className="lg:w-2/3 flex flex-col gap-12">
              
              {/* Scope & Purpose */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="text-xs font-mono font-bold text-[#00873E] uppercase tracking-wider mb-2">
                  Official Standard Scope
                </div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                  Audit Framework &amp; Compliance Purpose
                </h2>
                <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed font-light mb-6">
                  {standard.scopeSummary}
                </p>

                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3">
                  <ShieldCheck size={20} className="text-[#00873E] shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed">
                    <strong>Person-Day Calculation:</strong> {standard.personDaysGuide}
                  </p>
                </div>
              </div>

              {/* Stage 1 Documentation Requirements */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#00873E] uppercase tracking-wider block">
                      Phase 01 Protocol
                    </span>
                    <h3 className="text-2xl font-display font-bold text-slate-900">
                      Stage 1 Documentation Checklists
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 bg-slate-50 px-3 py-1 rounded-md border border-slate-200">
                    Mandatory Desk Review
                  </span>
                </div>
                <p className="text-slate-600 font-sans text-xs sm:text-sm font-light mb-6">
                  Prior to lead auditor deployment on-site, the client must submit the following verified documentation for preliminary gap analysis:
                </p>

                <div className="space-y-3">
                  {standard.stage1Docs.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-sans font-light">
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 text-[#00873E] font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage 2 On-Site Verification Checkpoints */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#00873E] uppercase tracking-wider block">
                      Phase 02 Verification
                    </span>
                    <h3 className="text-2xl font-display font-bold text-slate-900">
                      Stage 2 On-Site Audit Checkpoints
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 bg-slate-50 px-3 py-1 rounded-md border border-slate-200">
                    Facility Floor Audit
                  </span>
                </div>
                <p className="text-slate-600 font-sans text-xs sm:text-sm font-light mb-6">
                  Qualified lead auditors inspect operational floors, machinery calibrations, risk registers, and worker safety practices across manufacturing and logistics facilities:
                </p>

                <div className="space-y-3">
                  {standard.stage2Audits.map((chk, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-sans font-light">
                      <CheckCircle2 size={18} className="text-[#00873E] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Audit Deliverables */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="text-xs font-mono font-bold text-[#00873E] uppercase tracking-wider mb-2">
                  Official Registry Issuance
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
                  Accredited Certification Deliverables
                </h3>

                <ul className="space-y-3.5">
                  {standard.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-sans font-light">
                      <FileCheck2 size={17} className="text-[#00873E] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:w-1/3 flex flex-col gap-8">
              
              {/* Application Callout Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-xl">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 font-bold">
                  Accredited Registrar Bureau
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  Schedule Your {standard.code} Audit
                </h3>
                <p className="text-slate-300 font-sans text-xs leading-relaxed mb-6 font-light">
                  Submit facility headcounts, multi-site structures, and desired deployment dates. Preliminary gap analysis reports dispatched within 48 business hours.
                </p>

                <Link
                  href={`/schedule?standard=${encodeURIComponent(standard.id)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider shadow-md hover:shadow-lg transition-all mb-3"
                >
                  <span>SUBMIT AUDIT APPLICATION</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href={`/contact?standard=${encodeURIComponent(standard.id)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-sans font-semibold text-xs border border-slate-700 transition-all"
                >
                  <Mail size={14} className="text-emerald-400" />
                  <span>General Inquiry / Call Desk</span>
                </Link>
              </div>

              {/* Regional Desks */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <div className="text-xs font-mono font-bold text-[#00873E] uppercase tracking-wider mb-4">
                  Lead Auditor Deployment Hubs
                </div>

                <div className="space-y-4 text-xs font-sans text-slate-600">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-display font-bold text-slate-900 text-sm">Riyadh Registrar Desk (KSA)</div>
                    <div className="text-slate-500 mt-0.5">Tawaan, Riyadh, Saudi Arabia</div>
                    <a href="tel:+966558004287" className="inline-flex items-center gap-1.5 text-[#00873E] font-semibold mt-2">
                      <Phone size={12} />
                      <span>+966 55 8004287</span>
                    </a>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-display font-bold text-slate-900 text-sm">Faisalabad Operations (Pakistan)</div>
                    <div className="text-slate-500 mt-0.5">Johan Colony, Millat Road, Faisalabad</div>
                    <a href="tel:+9231459101614" className="inline-flex items-center gap-1.5 text-[#00873E] font-semibold mt-2">
                      <Phone size={12} />
                      <span>+92 314 59101614</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Related Standards */}
              {relatedStandards.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                  <div className="text-xs font-mono font-bold text-[#00873E] uppercase tracking-wider mb-4">
                    Complementary Standards
                  </div>
                  <div className="space-y-3">
                    {relatedStandards.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/standards/${rel.id}`}
                        className="group flex items-center gap-3 p-3 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all"
                      >
                        <div className="relative w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1 shrink-0">
                          <Image src={rel.badgeImg} alt={rel.name} fill className="object-contain p-0.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-display font-bold text-slate-900 group-hover:text-[#00873E] truncate">
                            {rel.code}
                          </div>
                          <div className="text-[11px] font-sans text-slate-500 truncate">
                            {rel.tagline}
                          </div>
                        </div>
                        <ArrowRight size={13} className="text-slate-400 group-hover:text-[#00873E] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
