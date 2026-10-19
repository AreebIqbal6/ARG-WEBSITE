"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, MapPin, Globe } from 'lucide-react';
import Image from 'next/image';

const features = [
  "Accredited ISO 9001, ISO 14001 & ISO 45001 certification registers",
  "C-TPAT supply chain security audits for expedited North American export",
  "Technical factory audits verifying machine capacity and lab precision",
  "Dual corporate presence in Riyadh, Saudi Arabia and Faisalabad, Pakistan"
];

export default function SplitInfoSection() {
  return (
    <section className="py-32 bg-[#040D07] relative z-30 overflow-hidden architect-grid border-t border-white/[0.08]">
      {/* Background Glow */}
      <div className="emerald-aurora top-1/2 right-10 -translate-y-1/2 w-[700px] h-[500px] bg-[#00873E]/15" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Copy */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-[#34D399] font-sans font-bold text-xs uppercase tracking-wider mb-6"
            >
              <ShieldCheck size={14} />
              <span>THE ARG REGISTRARS ADVANTAGE</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-8 tracking-tight leading-[1.08]"
            >
              Uncompromising rigor. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F59B] via-[#34D399] to-white italic">
                Global market access.
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 font-sans text-base md:text-lg mb-10 leading-relaxed font-light"
            >
              ARG Registrars Pakistan pairs deep technical industry acumen with international accreditation standards. With active corporate hubs in Riyadh, KSA and Faisalabad, Pakistan, we deliver verification and registrar credentials trusted by multinational buyers and government regulators.
            </motion.p>

            <div className="flex flex-col gap-4">
              {features.map((text, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  whileHover={{ x: 6 }} 
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#34D399]" size={18} />
                  </div>
                  <span className="font-sans font-medium text-sm md:text-base text-gray-100">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual Image with Glass Stats */}
          <div className="lg:w-1/2 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative w-full aspect-square rounded-[3rem] overflow-hidden glass-panel border-2 border-white/15 shadow-2xl group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2.5s] ease-out group-hover:scale-105 opacity-80"
                style={{ backgroundImage: "url('/inspector.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030906] via-[#030906]/40 to-transparent"></div>
              
              {/* Floating Glass Stats Bar */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 glass-panel rounded-2xl p-6 flex justify-between items-center border border-white/20 shadow-2xl bg-[#06150D]/85 backdrop-blur-2xl"
              >
                <div>
                  <div className="text-[#00F59B] font-black text-3xl md:text-4xl font-display">100%</div>
                  <div className="text-gray-300 font-sans font-bold text-xs uppercase tracking-widest mt-1">Accredited Rigor</div>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div>
                  <div className="text-white font-black text-3xl md:text-4xl font-display">KSA &bull; PK</div>
                  <div className="text-[#34D399] font-sans font-bold text-xs uppercase tracking-widest mt-1">Dual Hubs</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
