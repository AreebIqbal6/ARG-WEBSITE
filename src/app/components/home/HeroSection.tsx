"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: appleEase } } };

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#06150D]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 bg-[url('/unsplash_0.jpg')] bg-cover bg-center opacity-25 mix-blend-luminosity scale-105"></div>
      <div className="absolute inset-0 z-10 hero-overlay"></div>
      
      {/* Ambient Emerald Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00873E]/20 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-emerald-950/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Animated abstract geometric shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }} transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border border-emerald-500/15 opacity-60"
        />
        <motion.div 
          animate={{ rotate: -360 }} transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-30%] left-[-15%] w-[1000px] h-[1000px] rounded-full border border-white/5 opacity-50"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 my-auto">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }} 
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          
          {/* Top Tagline Pill */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/5 border border-emerald-500/30 backdrop-blur-md mb-8">
            <ShieldCheck size={16} className="text-[#34D399]" />
            <h2 className="font-montserrat font-bold tracking-[0.22em] text-xs md:text-sm text-gray-200 uppercase">
              ARG REGISTRARS PAKISTAN &bull; ACCREDITED CERTIFICATIONS
            </h2>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-black text-white leading-[1.06] tracking-tight mb-8"
          >
            Accredited Audits &amp; <br />
            <motion.span 
              initial={{ opacity: 0, filter: "blur(10px)" }} 
              animate={{ opacity: 1, filter: "blur(0px)" }} 
              transition={{ delay: 0.4, duration: 1.1 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#10B981] to-white italic font-normal inline-block"
            >
              Global Certifications
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-base sm:text-lg md:text-2xl max-w-3xl mb-10 font-light leading-relaxed">
            International Registrar conformity for <strong className="text-white font-medium">ISO 9001 (Quality)</strong>, <strong className="text-white font-medium">ISO 14001 (Environmental)</strong>, <strong className="text-white font-medium">ISO 45001 (Health &amp; Safety)</strong>, <strong className="text-white font-medium">C-TPAT Supply Chain Security</strong>, and comprehensive Technical Factory Audits.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 bg-[#00873E] text-white font-montserrat font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#059669] shadow-[0_0_30px_rgba(0,135,62,0.4)] hover:-translate-y-0.5"
            >
              <span>REQUEST AN AUDIT</span>
              <ArrowRight size={15} />
            </Link>

            <Link 
              href="/#accreditations" 
              className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-montserrat font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:border-[#34D399] hover:bg-[#00873E]/20"
            >
              <span>EXPLORE ALL STANDARDS</span>
            </Link>
          </motion.div>

          {/* Global Presence Banner */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300 font-montserrat border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#34D399]" />
              <span><strong>Head Office:</strong> Riyadh, Kingdom of Saudi Arabia</span>
            </div>
            <div className="hidden sm:block text-gray-600">&bull;</div>
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#34D399]" />
              <span><strong>Local Office:</strong> Faisalabad, Pakistan</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
