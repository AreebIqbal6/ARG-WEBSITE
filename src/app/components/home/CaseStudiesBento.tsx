"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Globe2, Building2, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SpotlightCard from '../ui/SpotlightCard';

export default function CaseStudiesBento() {
  return (
    <section className="py-28 relative z-20 bg-slate-50 border-t border-slate-200 architect-grid">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 text-xs font-mono tracking-widest uppercase text-[#00873E] font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00873E]" />
            <span>PROVEN ACCREDITATION TRACK RECORD</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight mb-4">
            Auditing Impact &amp; <br />
            <span className="text-[#00873E]">
              Enterprise Trust Metrics
            </span>
          </h2>
          <p className="text-slate-600 font-sans text-sm md:text-base font-light">
            Real outcomes delivered for multinational exporters, industrial conglomerates, and manufacturing leaders across Saudi Arabia, Pakistan, and GCC territories.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Main Highlight - C-TPAT Supply Chain Case Study */}
          <div className="md:col-span-2 lg:col-span-2">
            <SpotlightCard className="p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#00873E] font-semibold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                    CASE STUDY &bull; SUPPLY CHAIN
                  </span>
                  <span className="text-slate-500 font-sans text-xs">Tier-3 US Trade</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
                  Textile &amp; Apparel Export Cluster
                </h3>
                <p className="text-slate-600 font-sans text-sm font-light leading-relaxed mb-6">
                  Successfully implemented C-TPAT 7-point security protocols across 14 manufacturing facilities, eliminating border inspection delays at US ports of entry and saving an estimated $1.2M in annual demurrage penalties.
                </p>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 mb-6">
                  <div>
                    <div className="text-3xl font-display font-black text-[#00873E]">100%</div>
                    <div className="text-slate-500 font-sans text-xs">Customs Clearance Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-black text-slate-900">0 Days</div>
                    <div className="text-slate-500 font-sans text-xs">Port Clearance Delays</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-sans text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#00873E]" />
                  <span>Certified under US CBP Mandate</span>
                </span>
                <Link href="/audits" className="text-[#00873E] hover:text-emerald-700 inline-flex items-center gap-1 font-semibold">
                  <span>View Scope</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: Metric - Total Audited Facilities */}
          <div className="md:col-span-1 lg:col-span-1">
            <SpotlightCard className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00873E] mb-6">
                  <Building2 size={24} />
                </div>
                <div className="text-4xl lg:text-5xl font-display font-black text-slate-900 mb-2">500+</div>
                <div className="text-sm font-display font-bold text-[#00873E] uppercase tracking-wider mb-2">Facilities Certified</div>
                <p className="text-slate-600 font-sans text-xs leading-relaxed font-light">
                  Independent assessments executed across industrial manufacturing, automotive parts, polymers, and food packaging.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                AUDIT REGISTRY ID: ARG-PK-GCC
              </div>
            </SpotlightCard>
          </div>

          {/* Card 3: Metric - Acceptance Rate */}
          <div className="md:col-span-1 lg:col-span-1">
            <SpotlightCard className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00873E] mb-6">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-4xl lg:text-5xl font-display font-black text-slate-900 mb-2">99.8%</div>
                <div className="text-sm font-display font-bold text-[#00873E] uppercase tracking-wider mb-2">Buyer Acceptance</div>
                <p className="text-slate-600 font-sans text-xs leading-relaxed font-light">
                  Uncompromised recognition from European, American, and Gulf tier-1 retail brands and regulatory ministries.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                GLOBAL AUDIT ACCREDITATION
              </div>
            </SpotlightCard>
          </div>

          {/* Card 4: Case Study 2 - ISO 14001 Environmental Audit */}
          <div className="md:col-span-2 lg:col-span-2">
            <SpotlightCard className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#00873E] font-semibold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                    CASE STUDY &bull; ISO 14001:2015
                  </span>
                  <span className="text-slate-500 font-sans text-xs">Chemicals &amp; Plastics</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-2">
                  Zero-Liquid Discharge &amp; Waste Audit
                </h3>
                <p className="text-slate-600 font-sans text-xs md:text-sm font-light leading-relaxed mb-4">
                  Conducted comprehensive EMS surveillance on industrial wastewater treatment and hazardous material safeguards, qualifying the client for EU circular economy import exemptions.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-sans text-slate-600">
                <span className="text-[#00873E] font-mono font-medium">Turnaround: 12 Person-Days</span>
                <Link href="/services" className="text-slate-500 hover:text-slate-900 inline-flex items-center gap-1">
                  <span>Explore Standard</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 5: Regional Hubs Presence */}
          <div className="md:col-span-1 lg:col-span-2">
            <SpotlightCard className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-3 text-xs font-mono text-[#00873E] font-bold">
                  <Globe2 size={16} />
                  <span>DUAL CORPORATE REGISTRAR HUBS</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                  Riyadh, KSA &amp; Faisalabad, Pakistan
                </h3>
                <p className="text-slate-600 font-sans text-xs leading-relaxed font-light mb-4">
                  Direct regional presence enabling rapid deployment of qualified lead auditors within 24 hours anywhere in the GCC and Pakistan manufacturing corridors.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-100 text-[11px] font-sans">
                <span className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200">Riyadh: +966 55 8004287</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200">Pakistan: +92 314 59101614</span>
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
