"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, SearchCheck, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SpotlightCard from '../ui/SpotlightCard';

const steps = [
  {
    step: "01",
    title: "Application & Gap Analysis",
    subtitle: "Documentation & Readiness",
    desc: "Initial submission of facility scope, employee headcounts, and existing manuals. Lead auditors execute a rigorous gap evaluation to identify non-conformities before formal deployment.",
    icon: ClipboardCheck,
    tag: "Stage 01 Protocol",
    duration: "Day 1 - 3"
  },
  {
    step: "02",
    title: "On-Site Facility Evaluation",
    subtitle: "Lead Auditor Deployment",
    desc: "Qualified lead auditors inspect operational floors, machinery calibrations, risk registers, and worker safety practices across manufacturing and logistics facilities.",
    icon: SearchCheck,
    tag: "Stage 02 Audit",
    duration: "Day 4 - 8"
  },
  {
    step: "03",
    title: "CAPA Closure & Committee Review",
    subtitle: "Conformity Validation",
    desc: "Technical review of Corrective and Preventive Actions (CAPA). Evidence is independently scrutinized by our regional technical governance committee in Riyadh & Pakistan.",
    icon: ShieldCheck,
    tag: "Quality Governance",
    duration: "Day 9 - 12"
  },
  {
    step: "04",
    title: "Accredited Certificate Delivery",
    subtitle: "International Registry Entry",
    desc: "Official ISO / C-TPAT certificate issuance with unique verifiable serial numbers, QR verification, and inclusion in international buyer compliance registries.",
    icon: Award,
    tag: "Certified Status",
    duration: "Day 13 - 14"
  }
];

export default function AuditJourney() {
  return (
    <section className="py-28 relative z-20 overflow-hidden bg-white border-t border-slate-200 architect-grid">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2.5 text-xs font-mono tracking-widest uppercase text-[#00873E] font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00873E]" />
            <span>AUDITING METHODOLOGY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight mb-4">
            The 4-Stage Accredited <br />
            <span className="text-[#00873E]">
              Certification Roadmap
            </span>
          </h2>
          <p className="text-slate-600 font-sans text-sm md:text-base font-light">
            A transparent, audit-ready framework designed for rapid execution and 100% compliance acceptance by international buyers and regulatory bodies.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SpotlightCard className="p-8 h-full flex flex-col justify-between group">
                  <div>
                    {/* Top Step Number & Tag */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                      <span className="text-3xl font-display font-black text-[#00873E]">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                        {item.duration}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 text-[#00873E] group-hover:scale-110 group-hover:bg-[#00873E] group-hover:text-white transition-all duration-300">
                      <Icon size={22} />
                    </div>

                    <span className="text-[#00873E] text-[11px] font-sans font-bold uppercase tracking-wider block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 font-sans text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00873E]" />
                    <span>{item.subtitle}</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-slate-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200 shadow-sm max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 border border-emerald-300 flex items-center justify-center text-[#00873E] shrink-0">
              <Award size={20} />
            </div>
            <div>
              <div className="text-slate-900 font-display font-bold text-sm">48-Hour Preliminary Gap Report Guarantee</div>
              <div className="text-slate-600 font-sans text-xs">Initial documentation reviews dispatched within 48 business hours of receipt.</div>
            </div>
          </div>
          <Link
            href="/audits#four-stage-protocol"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-display font-bold text-xs tracking-wider transition-colors shrink-0 border border-slate-200 shadow-sm"
          >
            <span>VIEW AUDIT METHODOLOGY</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
