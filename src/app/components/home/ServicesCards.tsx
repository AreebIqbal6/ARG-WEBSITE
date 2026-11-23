"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Shield,
    title: "Accredited ISO Certifications",
    desc: "Rigorous third-party certification across ISO 9001, ISO 14001, ISO 45001, and ISO 22000 backed by internationally recognized accreditation bodies.",
    link: "/services",
    tag: "Core Frameworks"
  },
  {
    icon: CheckCircle,
    title: "C-TPAT Supply Chain Security",
    desc: "US Customs and Border Protection compliance verification, 7-point container integrity assessments, and complete multi-tier supplier vulnerability audits.",
    link: "/audits",
    tag: "Customs Tier 3"
  },
  {
    icon: FileCheck,
    title: "On-Site Factory Audits",
    desc: "Objective facility capability evaluations, equipment calibration verification, and worker safety assessments delivered within 10 to 14 business days.",
    link: "/audits",
    tag: "Technical Audits"
  }
];

export default function ServicesCards() {
  return (
    <section className="py-28 relative z-20 bg-slate-50 -mt-10 rounded-t-[3.5rem] border-t border-slate-200 shadow-sm overflow-hidden bg-[#F8FAFC]">
      {/* Background Topic-Relative Faded Photo: Global Supply Chain Security & Logistics */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/supply_chain_security.jpg')] bg-cover bg-center opacity-[0.08] contrast-[1.08] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/75 to-[#F8FAFC]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-sans font-semibold text-[#00873E] mb-3">
            <span className="w-1.5 h-1.5 bg-[#00873E] rounded-full" />
            <span>Core registrar capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Comprehensive Registrar &amp; <br />
            <span className="text-[#00873E]">Audit Operations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.link}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -2 }}
                  className={`bg-white rounded-2xl p-8 md:p-9 group relative overflow-hidden h-full flex flex-col justify-between border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-150 ${index === 1 ? 'md:translate-y-4' : ''}`}
                >
                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00873E] shadow-xs">
                        <Icon size={26} />
                      </div>
                      <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-semibold mb-3 text-slate-900 group-hover:text-[#00873E] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 font-sans text-sm leading-relaxed mb-8 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto">
                    <span className="text-xs font-sans font-medium text-slate-600 group-hover:text-[#00873E] transition-colors">
                      Learn more
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#00873E] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors duration-150">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
