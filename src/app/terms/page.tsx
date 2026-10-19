"use client";
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } } };

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] pt-40 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-[#00873E]"></div>
            <h2 className="text-[#00873E] font-montserrat font-bold tracking-[0.25em] uppercase text-xs">REGISTRAR TERMS</h2>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-montserrat font-black text-[#06150D] mb-8">
            Terms &amp; Conditions
          </motion.h1>
          <motion.div variants={fadeInUp} className="prose prose-lg text-gray-600 font-lato max-w-none">
            <p className="mb-6 font-bold text-sm text-gray-500">Last Updated: October 2026 &bull; argregistrars.com</p>
            
            <h2 className="text-2xl font-montserrat font-bold text-[#06150D] mt-12 mb-4">1. Agreement to Terms</h2>
            <p className="mb-6 leading-relaxed">By accessing the ARG REGISTRARS PAKISTAN website (argregistrars.com), you agree to comply with these terms, registrar rules, and all applicable international trade regulations.</p>

            <h2 className="text-2xl font-montserrat font-bold text-[#06150D] mt-10 mb-4">2. Audit Scheduling &amp; Certification Validity</h2>
            <p className="mb-6 leading-relaxed">Audit quotes, Stage 1 / Stage 2 scheduling, and certificate issuance are governed by formal client service agreements, applicable ISO standards, accreditation mandates, and successful completion of on-site/remote audit non-conformity resolutions.</p>

            <h2 className="text-2xl font-montserrat font-bold text-[#06150D] mt-10 mb-4">3. Use of Registrar Certification Marks</h2>
            <p className="mb-6 leading-relaxed">Accredited ISO and ARG Registrars certification seals may only be utilized on commercial marketing materials, letterheads, and websites in strict accordance with the ARG Registrars Mark Guidelines, and solely during the valid term of certified status.</p>

            <h2 className="text-2xl font-montserrat font-bold text-[#06150D] mt-10 mb-4">4. Intellectual Property</h2>
            <p className="mb-6 leading-relaxed">All logos, branding, copy, and certification badges displayed on this website are protected under international trademark and intellectual property legislation.</p>

            <h2 className="text-2xl font-montserrat font-bold text-[#06150D] mt-10 mb-4">5. Contact Information</h2>
            <p className="mb-6 leading-relaxed">For formal certification agreements or inquiries, contact ARG Registrars Pakistan via <a href="mailto:info@argregistrars.com" className="text-[#00873E] hover:underline font-semibold">info@argregistrars.com</a>.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
