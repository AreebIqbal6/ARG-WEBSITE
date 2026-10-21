"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Search, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Building2, 
  Award, 
  Globe, 
  ExternalLink,
  QrCode,
  Check,
  FileCheck2,
  Loader2
} from 'lucide-react';
import { verifyCertificateRecord } from '@/app/actions/certificateActions';
import { VERIFIED_REGISTRY, type CertificateRecord } from '@/data/certificates';

export type { CertificateRecord };

interface CertificateVerifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export default function CertificateVerifyModal({
  isOpen,
  onClose,
  initialQuery = ""
}: CertificateVerifyModalProps) {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState(initialQuery);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [result, setResult] = useState<CertificateRecord | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Sync if initialQuery changes
  React.useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = async (overrideQuery?: string) => {
    const q = (overrideQuery ?? query).trim();
    if (!q) return;
    setSearched(true);
    setSearchError(null);

    const norm = q.toUpperCase();
    if (VERIFIED_REGISTRY[norm]) {
      setResult(VERIFIED_REGISTRY[norm]);
      return;
    }

    setLoading(true);
    try {
      const res = await verifyCertificateRecord(q);
      if (res.success && res.data) {
        setResult(res.data);
      } else {
        setResult(null);
        setSearchError(res.error || `No accredited certificate found matching "${q}".`);
      }
    } catch (err: unknown) {
      setResult(null);
      setSearchError((err as Error)?.message || 'Verification service error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    if (result) {
      navigator.clipboard.writeText(
        `https://argregistrars.com/registry/verify?certId=${result.id}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
          className="relative w-full max-w-2xl bg-white border border-slate-200/90 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] overflow-hidden z-10 my-auto text-left max-h-[88vh] flex flex-col overscroll-contain"
        >
          {/* Header Bar */}
          <div className="p-5 sm:p-6 md:p-8 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00873E]">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 tracking-wide">
                  Official Registrar Certificate Registry
                </h3>
                <p className="text-xs text-slate-600 font-sans">
                  Verify authentic accreditation records for international buyers and customs authorities
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search Bar & Samples */}
          <div 
            className="p-5 sm:p-6 md:p-8 space-y-6 overflow-y-auto min-h-0 flex-1 overscroll-contain"
            onWheel={(e) => e.stopPropagation()}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex flex-col sm:flex-row gap-2.5"
            >
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter Certificate ID (e.g. ARG-9001-KSA-041)"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00873E] focus:outline-none text-slate-900 placeholder-slate-400 font-mono text-xs sm:text-sm tracking-wide transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider border border-emerald-600 hover:shadow-md transition-all shrink-0 text-center justify-center flex items-center gap-2 cursor-pointer"
              >
                {loading && <Loader2 size={14} className="animate-spin" />}
                <span>VERIFY</span>
              </button>
            </form>

            {/* Quick Sample Queries */}
            <div>
              <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Sample Verified Certificates (Click to test):
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.keys(VERIFIED_REGISTRY).map((certKey) => (
                  <button
                    key={certKey}
                    type="button"
                    onClick={() => {
                      setQuery(certKey);
                      handleSearch(certKey);
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#00873E] border border-slate-200 transition-all cursor-pointer"
                  >
                    {certKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Result Display */}
            {searched && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                {result ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl p-6 bg-emerald-50/60 border border-emerald-200/80 space-y-5"
                  >
                    {/* Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-100 border border-emerald-300 text-[#00873E] text-xs font-mono font-semibold uppercase tracking-wider">
                        <CheckCircle2 size={14} />
                        <span>ACTIVE &amp; ACCREDITED CERTIFICATE</span>
                      </div>
                      <span className="font-mono text-xs text-slate-500">
                        REG-ID: <strong className="text-slate-900">{result.id}</strong>
                      </span>
                    </div>

                    {/* Company Details */}
                    <div>
                      <div className="text-xl font-display font-bold text-slate-900 mb-1">
                        {result.companyName}
                      </div>
                      <div className="text-xs text-slate-600 flex items-center gap-1.5 font-sans">
                        <Building2 size={13} className="text-[#00873E]" />
                        <span>{result.city}, {result.country}</span>
                      </div>
                    </div>

                    {/* Standard & Accreditation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-white border border-slate-200 text-xs font-sans">
                      <div>
                        <div className="text-slate-500 uppercase text-[10px] tracking-wider mb-0.5">Certified Standard</div>
                        <div className="text-slate-900 font-semibold">{result.standard}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 uppercase text-[10px] tracking-wider mb-0.5">Accreditation Body</div>
                        <div className="text-[#00873E] font-semibold">{result.accreditationBody}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 uppercase text-[10px] tracking-wider mb-0.5">Issue Date</div>
                        <div className="text-slate-700">{result.issueDate}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 uppercase text-[10px] tracking-wider mb-0.5">Next Surveillance Due</div>
                        <div className="text-[#00873E] font-semibold">{result.nextSurveillance}</div>
                      </div>
                    </div>

                    {/* Certified Scope */}
                    <div>
                      <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Certified Technical Scope:
                      </div>
                      <p className="text-xs text-slate-700 font-sans leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
                        {result.scope}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 text-xs">
                      <div className="font-mono text-[11px] text-slate-400">
                        Security Hash: {result.hash}
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyLink}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-sans text-xs transition-all border border-slate-200 cursor-pointer active:scale-95"
                      >
                        {copied ? <Check size={14} className="text-[#00873E]" /> : <ExternalLink size={14} />}
                        <span>{copied ? "Link Copied" : "Share Verification Record"}</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl p-6 bg-red-50 border border-red-200 text-left space-y-3"
                  >
                    <div className="flex items-center gap-2 text-red-600 font-display font-bold text-sm">
                      <AlertCircle size={18} />
                      <span>Certificate Identifier Not Found</span>
                    </div>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {searchError || (
                        <>No active accredited registrar record matched <code>{query}</code>. Please double-check the ID or try one of the sample identifiers above.</>
                      )}
                    </p>
                    <div className="text-xs font-mono text-[#00873E] font-semibold">
                      records@argregistrars.com &bull; +966 55 800 4287 / +92 314 59101614
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
