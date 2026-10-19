"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Layers, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function ServicesCards() {
  return (
    <section className="py-24 relative z-20 bg-[#06150D] noise-bg -mt-8 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.6)]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-10%" }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <Link href="/services">
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-3xl saturate-200 border border-white/10 rounded-[2rem] p-8 md:p-10 group transition-all duration-500 ease-out relative overflow-hidden h-full cursor-pointer hover:shadow-2xl hover:shadow-[#00873E]/20 hover:border-emerald-500/40"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00873E]/15 rounded-full blur-3xl group-hover:bg-[#00873E]/35 transition-colors duration-700 pointer-events-none mix-blend-screen"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <ShieldCheck size={28} className="text-[#34D399]" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-4 text-white">ISO Certifications</h3>
              <p className="text-gray-300 font-lato mb-12 leading-relaxed text-sm">
                Accredited certification for ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Health &amp; Safety). Rigorous registrar validation.
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#00873E] group-hover:border-transparent transition-all duration-500">
                <ArrowRight size={18} className="group-hover:text-white transition-colors text-white" />
              </div>
            </motion.div>
          </Link>

          {/* Card 2 */}
          <Link href="/audits">
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-3xl saturate-200 border border-white/10 rounded-[2rem] p-8 md:p-10 group transition-all duration-500 ease-out relative overflow-hidden h-full md:translate-y-10 cursor-pointer hover:shadow-2xl hover:shadow-[#00873E]/20 hover:border-emerald-500/40"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00873E]/15 rounded-full blur-3xl group-hover:bg-[#00873E]/35 transition-colors duration-700 pointer-events-none mix-blend-screen"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <Layers size={28} className="text-[#34D399]" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-4 text-white">Security &amp; C-TPAT</h3>
              <p className="text-gray-300 font-lato mb-12 leading-relaxed text-sm">
                Supply chain risk mitigation and C-TPAT verification according to US Customs and global security standards for seamless cross-border shipping.
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#00873E] group-hover:border-transparent transition-all duration-500">
                <ArrowRight size={18} className="group-hover:text-white transition-colors text-white" />
              </div>
            </motion.div>
          </Link>

          {/* Card 3 */}
          <Link href="/audits">
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-3xl saturate-200 border border-white/10 rounded-[2rem] p-8 md:p-10 group transition-all duration-500 ease-out relative overflow-hidden h-full cursor-pointer hover:shadow-2xl hover:shadow-[#00873E]/20 hover:border-emerald-500/40"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00873E]/15 rounded-full blur-3xl group-hover:bg-[#00873E]/35 transition-colors duration-700 pointer-events-none mix-blend-screen"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <BookOpen size={28} className="text-[#34D399]" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-4 text-white">Technical Audits</h3>
              <p className="text-gray-300 font-lato mb-12 leading-relaxed text-sm">
                In-depth technical evaluations of manufacturing capacity, machinery calibration, QC laboratory procedures, and buyer code compliance.
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#00873E] group-hover:border-transparent transition-all duration-500">
                <ArrowRight size={18} className="group-hover:text-white transition-colors text-white" />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
