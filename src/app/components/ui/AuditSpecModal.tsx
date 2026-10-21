"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  FileCheck2, 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Download, 
  MessageCircle,
  HelpCircle,
  Layers,
  CalendarCheck
} from 'lucide-react';
import { getAuditSpecsCatalog, getStandardById, type Standard } from '@/data/standards';

export type AuditSpecData = Standard;
export const auditSpecsCatalog = getAuditSpecsCatalog();

interface AuditSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
  standardId: string;
}

export default function AuditSpecModal({
  isOpen,
  onClose,
  standardId
}: AuditSpecModalProps) {
  const [mounted, setMounted] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const data = auditSpecsCatalog[standardId] || auditSpecsCatalog["iso-9001"];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Strict double-lock background scroll prevention on both html and body
  useEffect(() => {
    if (isOpen) {
      const prevHtmlOverflow = document.documentElement.style.overflow;
      const prevBodyOverflow = document.body.style.overflow;

      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      return () => {
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.overflow = prevBodyOverflow;
      };
    }
  }, [isOpen]);

  const handleDownload = () => {
    const content = `=====================================================
ARG REGISTRARS - OFFICIAL AUDIT CRITERIA SPECIFICATION
=====================================================
STANDARD: ${data.code} - ${data.title}
CATEGORY: ${data.category}
VALIDITY: ${data.validity}
TURNAROUND: ${data.turnaround}
IAF SECTOR: ${data.iafSector}
AUDITOR PERSON-DAYS: ${data.personDaysGuide}

STAGE 1 DOCUMENTATION REQUIREMENTS:
${data.stage1Docs.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

STAGE 2 ON-SITE AUDIT CHECKPOINTS:
${data.stage2Audits.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

DELIVERABLES:
${data.deliverables.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

ISSUED BY:
ARG Registrars Bureau Desks
Riyadh, Saudi Arabia: +966 55 800 4287
Faisalabad, Pakistan: +92 314 59101614
Website: https://argregistrars.com
Email: records@argregistrars.com
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ARG-${data.code.replace(/[^a-zA-Z0-9]/g, '_')}-Audit-Specification.txt`;
    a.click();
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden overscroll-none"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onWheel={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-white border border-slate-200/90 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] overflow-hidden z-10 my-auto text-left max-h-[90vh] flex flex-col overscroll-contain"
        >
          {/* Header Bar with Official Certification Badge Picture */}
          <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              {/* Respective Certification Official Badge Image */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-200/90 p-1.5 flex items-center justify-center shrink-0 shadow-xs relative overflow-hidden">
                <Image
                  src={data.badge}
                  alt={`${data.code} Official Badge`}
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-widest text-[#00873E] truncate">
                  {data.category} &bull; {data.iafSector}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-slate-900 tracking-tight truncate">
                  {data.code} &ndash; Audit Specification
                </h3>
                <div className="text-xs text-slate-500 font-sans truncate hidden sm:block">
                  {data.title}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ml-2"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content Body with min-h-0 and internal wheel containment */}
          <div 
            className="p-5 sm:p-6 md:p-8 space-y-6 overflow-y-auto min-h-0 flex-1 overscroll-contain [scrollbar-width:thin] [scrollbar-color:#00873E_#F1F5F9]"
            onWheel={(e) => {
              e.stopPropagation();
            }}
          >
            {/* Respective Certification High-Resolution Industrial Picture Banner */}
            <div className="relative h-32 sm:h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-xs shrink-0">
              <Image
                src={data.heroImage}
                alt={`${data.title} Audit Inspection Environment`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex items-end p-4 sm:p-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-white p-1 border border-white/40 shadow-lg shrink-0 overflow-hidden">
                    <Image
                      src={data.badge}
                      alt={data.code}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-display font-bold text-sm sm:text-lg leading-tight drop-shadow-sm">
                      {data.title}
                    </div>
                    <div className="text-emerald-400 font-mono text-[11px] sm:text-xs font-semibold drop-shadow-sm flex items-center gap-2 mt-0.5">
                      <span>{data.code}</span>
                      <span>&bull;</span>
                      <span className="text-slate-300">Accredited Registrar Scope</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-sans">
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-[#00873E] shrink-0" />
                <div>
                  <div className="text-slate-500 text-[10px] uppercase">Turnaround Time</div>
                  <div className="text-slate-900 font-semibold">{data.turnaround}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <CalendarCheck size={16} className="text-[#00873E] shrink-0" />
                <div>
                  <div className="text-slate-500 text-[10px] uppercase">Validity Cycle</div>
                  <div className="text-slate-900 font-semibold">{data.validity}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Award size={16} className="text-[#00873E] shrink-0" />
                <div>
                  <div className="text-slate-500 text-[10px] uppercase">Registrar Recognition</div>
                  <div className="text-[#00873E] font-semibold">EIAC / IAS Aligned</div>
                </div>
              </div>
            </div>

            {/* Person-Day Formula Note */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs font-sans">
              <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block mb-1">
                Auditor Person-Days Formula:
              </span>
              <p className="text-slate-700 leading-relaxed font-light">
                {data.personDaysGuide}
              </p>
            </div>

            {/* Stage 1 Checklist */}
            <div>
              <div className="flex items-center gap-2 text-sm font-display font-bold text-slate-900 mb-3">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 text-[#00873E] border border-emerald-300 flex items-center justify-center text-xs font-bold">1</span>
                <span>Stage 1: Documentation Pre-Audit Checklist</span>
              </div>
              <div className="space-y-2">
                {data.stage1Docs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans text-slate-700">
                    <CheckCircle2 size={15} className="text-[#00873E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage 2 Checklist */}
            <div>
              <div className="flex items-center gap-2 text-sm font-display font-bold text-slate-900 mb-3">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 text-[#00873E] border border-emerald-300 flex items-center justify-center text-xs font-bold">2</span>
                <span>Stage 2: On-Site Audit &amp; Technical Verification</span>
              </div>
              <div className="space-y-2">
                {data.stage2Audits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans text-slate-700">
                    <CheckCircle2 size={15} className="text-[#00873E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <div className="text-xs font-sans font-bold uppercase tracking-wider text-slate-500 mb-2">
                Certified Deliverables &amp; Artifacts
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {data.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 shrink-0">
            <button
              type="button"
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-sans text-xs tracking-wider transition-all border border-slate-200 shadow-xs cursor-pointer active:scale-95"
            >
              <Download size={14} className="text-[#00873E]" />
              <span>{downloaded ? "Specification Downloaded!" : "Download Criteria Sheet (.TXT)"}</span>
            </button>

            <div className="flex items-center justify-end gap-2.5 w-full sm:w-auto">
              <a
                href="/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#00873E] font-sans text-xs border border-emerald-200 font-medium transition-all"
              >
                <ShieldCheck size={14} />
                <span>Request Scope Audit</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans text-xs transition-all border border-slate-200 cursor-pointer active:scale-95"
              >
                Close Protocol
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
