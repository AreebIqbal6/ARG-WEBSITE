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
    <section className="py-32 bg-white relative z-30 overflow-hidden  border-t border-slate-200">
      {/* Background Glow */}
      

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Copy */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-2.5 text-xs font-sans font-semibold text-xs tracking-wider uppercase text-[#00873E] mb-6"
            >
              <span className="w-1.5 h-1.5 bg-[#00873E]" />
              <span>THE ARG REGISTRARS ADVANTAGE</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-[1.08]"
            >
              Uncompromising rigor. <br />
              <span className="text-[#00873E]">
                Global market access.
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-600 font-sans text-base md:text-lg mb-10 leading-relaxed font-light"
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
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-500/40 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#00873E]" size={18} />
                  </div>
                  <span className="font-sans font-semibold text-sm md:text-base text-slate-800">{text}</span>
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
              className="relative w-full aspect-square rounded-[3rem] overflow-hidden border-2 border-slate-200 shadow-xl group bg-slate-100"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2.5s] ease-out group-hover:scale-105 opacity-90"
                style={{ backgroundImage: "url('/images/auditor_inspection.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
              
              {/* Floating Light Stats Bar */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 rounded-2xl p-6 flex justify-between items-center border border-slate-200 shadow-2xl backdrop-blur-2xl"
              >
                <div>
                  <div className="text-[#00873E] font-black text-3xl md:text-4xl font-display">100%</div>
                  <div className="text-slate-600 font-sans font-bold text-xs uppercase tracking-widest mt-1">Accredited Rigor</div>
                </div>
                <div className="w-[1px] h-12 bg-slate-200"></div>
                <div>
                  <div className="text-slate-900 font-black text-3xl md:text-4xl font-display">KSA &bull; PK</div>
                  <div className="text-[#00873E] font-sans font-bold text-xs uppercase tracking-widest mt-1">Dual Hubs</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
