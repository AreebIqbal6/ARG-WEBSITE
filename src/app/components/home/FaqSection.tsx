"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface FaqItem {
  question: string;
  category: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    category: "Audit Procedures",
    question: "What is the operational difference between a Stage 1 and Stage 2 ISO audit?",
    answer: "A Stage 1 audit focuses on documentation readiness and scoping — lead auditors review your existing management manuals, policies, legal registers, and internal audit records to verify your facility is prepared. A Stage 2 audit is an extensive on-site evaluation where auditors interview staff, inspect machinery, check calibration logs, and observe active operational processes to verify actual implementation."
  },
  {
    category: "Timelines & Delivery",
    question: "How long does the complete ISO certification lifecycle take?",
    answer: "From formal application submission to official certificate issuance, a standard ISO 9001, 14001, or 45001 certification audit typically takes between 10 to 14 business days. Preliminary documentation gap reports are dispatched within 48 business hours of receiving your facility manuals."
  },
  {
    category: "Supply Chain Security",
    question: "Is C-TPAT certification mandatory for exporting to the United States?",
    answer: "While C-TPAT (Customs-Trade Partnership Against Terrorism) is technically voluntary with US CBP, major North American importers, retail conglomerates, and department stores mandate C-TPAT compliance as a strict condition of business. Certified suppliers enjoy expedited cargo processing, drastically fewer customs exams, and priority clearance."
  },
  {
    category: "Integrated Audits",
    question: "Can we combine ISO 9001, ISO 14001, and ISO 45001 into a single Integrated Audit?",
    answer: "Yes. ARG Registrars Pakistan specializes in Integrated Management System (IMS) audits. Combining Quality, Environmental, and Occupational Safety audits significantly reduces auditor person-days on-site, minimizes operational disruption to your factory staff, and reduces total certification expenditure by up to 35%."
  },
  {
    category: "Surveillance & Validity",
    question: "How long is an accredited ISO certificate valid, and how is it maintained?",
    answer: "Accredited ISO certificates are valid for a three-year cycle. Maintenance requires successful completion of mandatory annual surveillance audits (at Month 12 and Month 24) to confirm ongoing adherence before a recertification audit occurs in the 36th month."
  },
  {
    category: "Authenticity Verification",
    question: "How can buyers or customs authorities verify the validity of our ARG certificate?",
    answer: "Every certificate issued by ARG Registrars carries a unique serialized registrar ID and an encrypted QR code. International buyers and customs authorities can instantly verify status through our direct registrar registry desk or by emailing verification@argregistrars.com."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-28 relative z-20 bg-[#030906] architect-grid border-t border-white/[0.08]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-[#34D399] font-sans font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-500/20">
            <HelpCircle size={14} />
            <span>KNOWLEDGE BASE &bull; REGISTRAR INQUIRIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight mb-4">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F59B] via-[#34D399] to-white">
              Audit &amp; Certification Questions
            </span>
          </h2>
          <p className="text-gray-300 font-sans text-sm md:text-base font-light">
            Clear, transparent technical guidelines regarding ISO management conformity, C-TPAT security standards, and lead auditor deployments.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-emerald-500/30"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-[11px] font-mono text-[#34D399] uppercase tracking-wider">
                      {faq.category}
                    </span>
                    <span className="text-base md:text-lg font-display font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full glass-panel border border-white/10 flex items-center justify-center shrink-0 text-white transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#00873E]/30 text-[#34D399]' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-300 font-sans text-sm md:text-base font-light leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl glass-panel border border-white/10 bg-[#06150D]/80">
            <span className="text-gray-300 font-sans text-xs md:text-sm">
              Have a specific standard or regulatory requirement not listed here?
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider border border-emerald-400/30 hover:scale-105 transition-all"
            >
              <span>CONSULT AN AUDITOR</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
