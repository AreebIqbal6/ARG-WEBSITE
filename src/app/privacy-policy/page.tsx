"use client";
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } } };

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] pt-44 md:pt-48 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-[#00873E]"></div>
            <h2 className="text-[#00873E] font-montserrat font-bold tracking-[0.25em] uppercase text-xs">LEGAL POLICIES</h2>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-montserrat font-black text-[#06150D] mb-8">
            Privacy Policy
          </motion.h1>
          <motion.div variants={fadeInUp} className="prose prose-lg text-gray-600 font-lato max-w-none">
            <p className="mb-6 font-bold text-sm text-gray-500">Effective Date: October 2026 &bull; argregistrars.com</p>
            
            <h2 className="text-2xl font-montserrat font-bold text-[#06150D] mt-12 mb-4">1. Introduction</h2>
            <p className="mb-6 leading-relaxed">ARG REGISTRARS PAKISTAN (&quot;ARG Registrars&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, handle, safeguard, and maintain confidentiality over all organizational and personal data transmitted when interacting with our registrar, auditing, and certification verification services.</p>

            <h2 className="text-2xl font-montserrat font-bold text-[#06150D] mt-10 mb-4">2. Audit &amp; Certification Confidentiality</h2>
            <p className="mb-6 leading-relaxed">All proprietary manufacturing data, technical files, audit non-conformity records, laboratory reports, and personnel documentation provided to ARG Registrars Pakistan in connection with ISO certification or C-TPAT audits are held in strict commercial confidence in accordance with international conformity assessment standards.</p>

            <h2 className="text-2xl font-montserrat font-bold text-[#06150D] mt-10 mb-4">3. Information We Collect</h2>
            <p className="mb-6 leading-relaxed">We collect organizational details, executive contacts, facility addresses, and operational scopes submitted via our website or direct quotation communications to structure certification audits and deliver registrar credentials.</p>

            <h2 className="text-2xl font-montserrat font-bold text-[#06150D] mt-10 mb-4">4. Sharing Your Information</h2>
            <p className="mb-6 leading-relaxed">We do not sell, rent, or trade client information. Information is disclosed solely to authorized lead auditors, recognized accreditation bodies, and regulatory authorities where legally required for accredited certification validity.</p>

            <h2 className="text-2xl font-montserrat font-bold text-[#06150D] mt-10 mb-4">5. Contact Our Privacy Officer</h2>
            <p className="mb-6 leading-relaxed">For inquiries regarding our data handling or registrar confidentiality policies, please contact <a href="mailto:info@argregistrars.com" className="text-[#00873E] hover:underline font-semibold">info@argregistrars.com</a>.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
