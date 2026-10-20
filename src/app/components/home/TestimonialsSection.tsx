"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import SpotlightCard from '../ui/SpotlightCard';

const endorsements = [
  {
    quote: "ARG Registrars executed our multi-facility C-TPAT supply chain security audit with precision. Their lead auditors verified our 7-point container integrity protocols on-site, enabling Tier-3 green lane customs status with US CBP.",
    author: "Tariq Mansoor",
    role: "VP of Global Logistics & Sourcing",
    company: "Continental Apparel Exporters (Faisalabad & Dubai)",
    scope: "C-TPAT Supply Chain Security",
    rating: 5
  },
  {
    quote: "Switching to ARG Registrars for our ISO 9001 and ISO 14001 Integrated Management System (IMS) reduced our person-days by 30%. The gap analysis was comprehensive, and the preliminary report arrived within 48 hours.",
    author: "Engr. Khalid Al-Otaibi",
    role: "Director of Plant Quality & Safety",
    company: "Al-Riyadh Polymer & Specialty Chemicals (Riyadh, KSA)",
    scope: "ISO 9001:2026 & ISO 14001:2015",
    rating: 5
  },
  {
    quote: "Their factory technical audit provided the exact third-party verification required by our European retail partners. Professional, objective, and deeply knowledgeable on engineering calibration tolerances.",
    author: "Zeeshan Haider",
    role: "Head of Operational Excellence",
    company: "Precision Engineering Components Ltd",
    scope: "Technical Audit & ISO 45001",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 relative z-20 bg-white border-t border-slate-200 overflow-hidden">
      {/* Background Watermarks & Auditor Desk Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle low-opacity auditor desk background photo */}
        <div className="absolute inset-0 bg-[url('/images/lead_auditor_desk.jpg')] bg-cover bg-center opacity-[0.05] grayscale contrast-125 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />

        {/* Enlarged Low-Opacity Accredited Stamp Watermark (Top Left) */}
        <div className="absolute -top-24 -left-28 w-[650px] h-[650px] lg:w-[850px] lg:h-[850px] opacity-[0.04] pointer-events-none -rotate-12 mix-blend-multiply select-none">
          <Image src="/stamp.png" alt="ARG Certification Stamp" fill className="object-contain" priority={false} />
        </div>

        {/* Enlarged Low-Opacity ARG Logo Watermark (Bottom Right) */}
        <div className="absolute -bottom-28 -right-24 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-[0.035] pointer-events-none rotate-12 mix-blend-multiply select-none">
          <Image src="/arg_logo.png" alt="ARG Logo Watermark" fill className="object-contain" priority={false} />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 text-xs font-sans font-semibold text-xs tracking-wider uppercase text-[#00873E] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00873E]" />
            <span>EXECUTIVE STAKEHOLDER REVIEWS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-4">
            Trusted by Industrial Leaders <br />
            <span className="text-[#00873E]">
              Across Regional Corridors
            </span>
          </h2>
          <p className="text-slate-600 font-sans text-sm md:text-base font-light">
            Read direct feedback from corporate operations directors, compliance chiefs, and export heads who rely on ARG Registrars for accredited certifications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {endorsements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <SpotlightCard className="p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Rating Stars & Badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-1 text-[#00873E]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#00873E" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200 uppercase">
                      VERIFIED AUDIT
                    </span>
                  </div>

                  <p className="text-slate-700 font-sans text-xs md:text-sm leading-relaxed font-light mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-slate-900 font-display font-bold text-sm">
                    {item.author}
                  </div>
                  <div className="text-[#00873E] font-sans text-xs font-semibold">
                    {item.role}
                  </div>
                  <div className="text-slate-500 font-sans text-[11px] mt-0.5">
                    {item.company}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-[#00873E] text-[10px] font-mono border border-emerald-200 font-medium">
                    <CheckCircle2 size={11} />
                    <span>Scope: {item.scope}</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
