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
      {/* Background Watermarks & Headquarters Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle low-opacity corporate bureau background photo */}
        <div className="absolute inset-0 bg-[url('/images/corporate_headquarters.jpg')] bg-cover bg-center opacity-[0.08] contrast-[1.08] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white" />

        {/* Enlarged Low-Opacity Official ARG Logo Watermark (Top Right) */}
        <div className="absolute -top-20 -right-20 w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] opacity-[0.045] pointer-events-none rotate-6 mix-blend-multiply select-none">
          <Image src="/arg_logo.png" alt="ARG Registrars Official Logo Watermark" fill className="object-contain" priority={false} />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Copy */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-2 text-xs font-sans font-semibold text-[#00873E] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00873E]" />
              <span>The ARG Registrars advantage</span>
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
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
                  whileHover={{ x: 2 }} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-colors duration-150"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#00873E]" size={16} />
                  </div>
                  <span className="font-sans font-medium text-sm md:text-base text-slate-800">{text}</span>
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
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.02] opacity-90"
                style={{ backgroundImage: "url('/images/auditor_inspection.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
              
              {/* Grounded Light Stats Bar */}
              <div 
                className="absolute bottom-6 left-6 right-6 bg-white/95 rounded-xl p-5 flex justify-between items-center border border-slate-200/90 shadow-lg backdrop-blur-md"
              >
                <div>
                  <div className="text-[#00873E] font-bold text-3xl md:text-4xl font-display">100%</div>
                  <div className="text-slate-600 font-sans font-medium text-xs mt-1">Accredited rigor</div>
                </div>
                <div className="w-[1px] h-10 bg-slate-200"></div>
                <div>
                  <div className="text-slate-900 font-bold text-3xl md:text-4xl font-display">KSA &bull; PK</div>
                  <div className="text-[#00873E] font-sans font-medium text-xs mt-1">Dual hubs</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
