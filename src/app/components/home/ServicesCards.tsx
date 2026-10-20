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
    <section className="py-28 relative z-20 bg-slate-50  -mt-10 rounded-t-[3.5rem] border-t border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 text-xs font-sans font-semibold text-xs tracking-wider uppercase text-[#00873E] mb-4">
            <span className="w-1.5 h-1.5 bg-[#00873E]" />
            <span>CORE REGISTRAR CAPABILITIES</span>
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
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className={`bg-white rounded-2xl md:rounded-[2.5rem] p-8 md:p-10 group relative overflow-hidden h-full flex flex-col justify-between border border-slate-200 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(0,135,62,0.12)] hover:border-emerald-500/40 transition-all ${index === 1 ? 'md:translate-y-6' : ''}`}
                >
                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00873E] group-hover:scale-110 transition-transform duration-300 shadow-xs">
                        <Icon size={28} />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-4 text-slate-900 group-hover:text-[#00873E] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 font-sans text-sm leading-relaxed mb-10 font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                    <span className="text-xs font-sans font-semibold tracking-wider text-slate-500 group-hover:text-[#00873E] transition-colors">
                      LEARN MORE
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#00873E] text-slate-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
