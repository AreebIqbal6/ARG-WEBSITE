"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function SplitInfoSection() {
  return (
    <section className="py-32 bg-[#fafafa] relative z-30 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 right-[-10%] w-[700px] h-[700px] opacity-[0.03] pointer-events-none rotate-12 mix-blend-multiply">
        <Image src="/arg_logo.png" alt="ARG Registrars Watermark" width={700} height={700} className="w-full h-full object-contain" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873E] font-montserrat font-bold text-xs uppercase tracking-wider mb-4">
              <ShieldCheck size={14} />
              <span>THE ARG REGISTRARS ADVANTAGE</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-[#06150D] mb-8 tracking-tight leading-[1.1]">
              Uncompromising rigor. Global market access.
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg mb-10 leading-relaxed font-light">
              ARG Registrars Pakistan bridges enterprise management systems with rigorous global accreditation. With established presence in Riyadh, KSA and Faisalabad, Pakistan, we deliver auditing and registrar credentials trusted by multinational retailers and regulators.
            </motion.p>

            <motion.div variants={staggerContainer} className="flex flex-col gap-4">
              {[
                "Recognized ISO 9001, ISO 14001 & ISO 45001 certification registers",
                "C-TPAT supply chain security audits for expedited export transit",
                "Comprehensive technical factory evaluations and quality benchmarking",
                "Dual corporate hubs in Riyadh, KSA and Faisalabad, Pakistan"
              ].map((text, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ x: 8 }} className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-[0_8px_25px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#00873E]" size={20} />
                  </div>
                  <span className="font-montserrat font-semibold text-sm md:text-base text-[#06150D]">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 w-full relative"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}
          >
            <div className="relative w-full aspect-square rounded-[3rem] bg-gray-200 overflow-hidden shadow-2xl group border-4 border-white">
              <motion.div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                style={{ backgroundImage: "url('/inspector.jpg')" }}
              />
              <div className="absolute inset-0 bg-[#06150D]/30 mix-blend-multiply"></div>
              
              {/* Floating Glass Stats */}
              <motion.div 
                variants={fadeInUp} 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-3xl saturate-200 border border-white/80 shadow-2xl rounded-2xl p-6 flex justify-between items-center"
              >
                <div>
                  <div className="text-[#00873E] font-black text-3xl md:text-4xl font-montserrat">100%</div>
                  <div className="text-gray-800 font-lato font-bold text-xs uppercase tracking-widest mt-1">Accredited Rigor</div>
                </div>
                <div className="w-[1px] h-12 bg-gray-300"></div>
                <div>
                  <div className="text-[#06150D] font-black text-3xl md:text-4xl font-montserrat">KSA &bull; PK</div>
                  <div className="text-gray-800 font-lato font-bold text-xs uppercase tracking-widest mt-1">Corporate Hubs</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
