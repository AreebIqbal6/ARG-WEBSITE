"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: appleEase } } };

const heroLogos = [
  { name: "ISO 17025", src: "/certifications/card/iso_17025.png" },
  { name: "ISO 9001:2015", src: "/certifications/card/iso_9001_2015.png" },
  { name: "ZDHC", src: "/certifications/card/zdhc.png" },
  { name: "GOTS", src: "/certifications/card/gots.png" },
  { name: "GRS", src: "/certifications/card/grs.png" },
  { name: "PPWR", src: "/certifications/card/ppwr.png" },
  { name: "EN 15343", src: "/certifications/card/en_15343.png" },
  { name: "CE Marking", src: "/certifications/card/ce_marking.png" }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-pqs-dark">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 bg-[url('/unsplash_0.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity scale-105"></div>
      <div className="absolute inset-0 z-10 hero-overlay"></div>
      
      {/* Animated abstract geometric shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border border-pqs-gold/15 opacity-50"
        />
        <motion.div 
          animate={{ rotate: -360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
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
          <motion.div variants={fadeInUp} className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-pqs-gold/30 backdrop-blur-md mb-8">
            <div className="h-[2px] w-8 bg-pqs-gold"></div>
            <h2 className="font-montserrat font-bold tracking-[0.2em] text-xs md:text-sm italic text-white">
              Making Compliance Real
            </h2>
            <div className="h-[2px] w-8 bg-pqs-gold"></div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-black text-white leading-[1.08] tracking-tight mb-8"
          >
            Laboratory Testing &amp; <br />
            <motion.span 
              initial={{ opacity: 0, filter: "blur(10px)" }} 
              animate={{ opacity: 1, filter: "blur(0px)" }} 
              transition={{ delay: 0.5, duration: 1.2 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pqs-gold via-[#e8d28a] to-white italic font-light inline-block"
            >
              Certified Compliance
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-base sm:text-lg md:text-2xl max-w-3xl mb-10 font-light leading-relaxed">
            Accredited <strong className="text-white font-medium">ISO 17025</strong> testing protocols, sustainability certifications (<strong className="text-white font-medium">GOTS, GRS, ZDHC, PPWR, EN 15343</strong>), and factory-floor quality management tailored for international supply chains.
          </motion.p>
        </motion.div>
      </div>

      {/* Trust Badges Bar directly in Hero */}
      <div className="relative z-20 border-t border-white/10 bg-black/30 backdrop-blur-md pt-4 pb-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-3 text-gray-400 font-montserrat text-[11px] tracking-[0.2em] uppercase font-bold text-center">
            <ShieldCheck size={14} className="text-pqs-gold shrink-0" />
            <span>Accredited Standards &bull; Global Frameworks</span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 items-center justify-items-center max-w-5xl mx-auto">
            {heroLogos.map((item, idx) => (
              <div 
                key={idx} 
                className="w-full bg-white rounded-lg p-1.5 flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-300 border border-gray-100"
                title={item.name}
              >
                <div className="relative w-full h-8">
                  <Image 
                    src={item.src} 
                    alt={item.name} 
                    fill 
                    sizes="(max-width: 768px) 25vw, 12vw"
                    className="object-contain" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
