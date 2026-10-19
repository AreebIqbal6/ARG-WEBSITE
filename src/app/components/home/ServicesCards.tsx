"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Layers, BookOpen } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: ShieldCheck,
    title: "ISO Management Certifications",
    desc: "Accredited third-party certification and surveillance auditing for ISO 9001 (Quality), ISO 14001 (Environmental), and ISO 45001 (Health & Safety) to guarantee buyer trust.",
    link: "/services",
    tag: "Accredited Scope"
  },
  {
    icon: Layers,
    title: "C-TPAT Supply Chain Audits",
    desc: "Comprehensive supply chain vulnerability assessments aligning with US Customs & Border Protection criteria for expedited shipping and zero-delay border transit.",
    link: "/audits",
    tag: "Export Security"
  },
  {
    icon: BookOpen,
    title: "Factory Technical Assessments",
    desc: "In-depth evaluations of manufacturing floor capacity, machinery calibration, QC lab procedures, and worker welfare standards demanded by global retail brands.",
    link: "/audits",
    tag: "Technical Rigor"
  }
];

export default function ServicesCards() {
  return (
    <section className="py-28 relative z-20 bg-[#030906] architect-grid -mt-10 rounded-t-[3.5rem] border-t border-white/[0.08] shadow-[0_-25px_60px_rgba(0,0,0,0.8)]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 text-xs font-mono tracking-widest uppercase text-[#34D399] mb-4">
            <span className="w-1.5 h-1.5 bg-[#34D399]" />
            <span>CORE REGISTRAR CAPABILITIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
            Comprehensive Registrar &amp; <br />
            <span className="text-[#34D399]">Audit Operations</span>
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
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`glass-card rounded-[2.5rem] p-8 md:p-10 group relative overflow-hidden h-full flex flex-col justify-between ${index === 1 ? 'md:translate-y-8' : ''}`}
                >
                  {/* Glowing radial orb */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00873E]/15 rounded-full blur-3xl group-hover:bg-[#00873E]/30 transition-colors duration-700 pointer-events-none mix-blend-screen" />

                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl glass-panel border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(0,135,62,0.2)]">
                        <Icon size={28} className="text-[#34D399]" />
                      </div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full glass-pill text-gray-300 border border-white/10">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-[#34D399] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-sans text-sm leading-relaxed mb-10 font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] pt-6 mt-auto">
                    <span className="text-xs font-sans font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">
                      LEARN MORE
                    </span>
                    <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:bg-[#00873E] group-hover:border-transparent transition-all duration-500">
                      <ArrowUpRight size={16} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
