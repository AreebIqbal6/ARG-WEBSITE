"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

const springTransition: any = { type: "spring", damping: 26, stiffness: 120 };

const heroCertPills = [
  { name: "ISO 9001:2015", label: "Quality QMS", icon: "/certifications/card/iso-9001.png" },
  { name: "ISO 14001", label: "Environmental", icon: "/certifications/card/iso-14001.jpg" },
  { name: "C-TPAT", label: "Supply Security", icon: "/certifications/card/ctpat.jpg" },
  { name: "ISO 45001", label: "Safety OH&S", icon: "/certifications/card/iso-45001.jpg" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden architect-grid noise-overlay">
      {/* Dynamic Aurora Ambient Glows */}
      <div className="emerald-aurora top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#00873E]/20" />
      <div className="emerald-aurora -top-20 -left-20 w-[600px] h-[600px] bg-emerald-900/30" />
      <div className="emerald-aurora -bottom-20 -right-20 w-[550px] h-[550px] bg-[#059669]/25" />

      {/* Floating Geometric Ring Line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-15%] right-[-5%] w-[850px] h-[850px] rounded-full border border-emerald-500/10"
        />
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[950px] h-[950px] rounded-full border border-white/[0.04]"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 my-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Top Tagline Pill */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-panel border border-emerald-400/25 mb-8 shadow-[0_0_20px_rgba(0,135,62,0.2)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#34D399] animate-pulse" />
            <span className="font-sans font-bold tracking-[0.25em] text-[11px] md:text-xs text-gray-200 uppercase">
              ARG REGISTRARS PAKISTAN &bull; ACCREDITED REGISTRAR
            </span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[1.06] tracking-tight mb-8"
          >
            Audited Rigor. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F59B] via-[#34D399] to-white">
              Certified Globally.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300 font-sans text-base sm:text-lg md:text-xl max-w-3xl mb-12 font-light leading-relaxed"
          >
            Empowering industrial leaders, textile manufacturers, and international exporters with accredited <strong className="text-white font-semibold">ISO 9001</strong>, <strong className="text-white font-semibold">ISO 14001</strong>, <strong className="text-white font-semibold">ISO 45001</strong>, and <strong className="text-white font-semibold">C-TPAT</strong> supply chain certifications across Saudi Arabia and Pakistan.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-bold text-xs tracking-widest bg-gradient-to-r from-[#00873E] to-[#059669] text-white hover:shadow-[0_0_35px_rgba(0,135,62,0.7)] hover:scale-105 transition-all duration-300 border border-emerald-400/40"
            >
              <span>SCHEDULE AN AUDIT</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link 
              href="/#accreditations" 
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-sans font-semibold text-xs tracking-wider glass-panel text-gray-200 hover:text-white hover:border-emerald-400/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <ShieldCheck size={16} className="text-[#34D399]" />
              <span>EXPLORE ACCREDITED SCOPES</span>
            </Link>
          </motion.div>

          {/* Floating Glass Badges Row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
          >
            {heroCertPills.map((pill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={springTransition}
                className="glass-panel rounded-2xl p-4 flex items-center gap-3.5 border border-white/10 hover:border-emerald-400/30 transition-all text-left"
              >
                <div className="relative w-10 h-10 bg-white rounded-xl p-1 shrink-0 flex items-center justify-center shadow-md">
                  <Image src={pill.icon} alt={pill.name} fill className="object-contain p-0.5" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white leading-tight">{pill.name}</div>
                  <div className="text-[11px] font-sans text-[#34D399] tracking-wide">{pill.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Corporate Hubs Footer Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-8 text-xs text-gray-400 font-sans border-t border-white/[0.08] pt-6 w-full max-w-3xl"
          >
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#34D399]" />
              <span><strong className="text-gray-200">Head Office:</strong> Riyadh, Kingdom of Saudi Arabia</span>
            </div>
            <div className="hidden sm:block text-gray-700">&bull;</div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#34D399]" />
              <span><strong className="text-gray-200">Local Office:</strong> Faisalabad, Pakistan</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
