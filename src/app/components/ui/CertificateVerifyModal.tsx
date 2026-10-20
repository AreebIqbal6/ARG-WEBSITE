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
  FileCheck2
} from 'lucide-react';

export interface CertificateRecord {
  id: string;
  companyName: string;
  country: string;
  city: string;
  standard: string;
  accreditationBody: string;
  status: "ACTIVE" | "PENDING_SURVEILLANCE" | "EXPIRED";
  issueDate: string;
  expiryDate: string;
  nextSurveillance: string;
  scope: string;
  hash: string;
}

const mockRegistry: Record<string, CertificateRecord> = {
  "ARG-9001-KSA-041": {
    id: "ARG-9001-KSA-041",
    companyName: "Arabian Polymer & Chemical Industries Ltd.",
    country: "Saudi Arabia",
    city: "Riyadh Industrial City 2",
    standard: "ISO 9001:2015 (Quality Management Systems)",
    accreditationBody: "EIAC (Emirates International Accreditation Centre)",
    status: "ACTIVE",
    issueDate: "14 January 2024",
    expiryDate: "13 January 2027",
    nextSurveillance: "October 2026",
    scope: "Design, compounding, and automated manufacturing of industrial polymer films, masterbatches, and heavy-gauge barrier packaging.",
    hash: "0x8fa3e...b412e"
  },
  "ARG-14001-PK-882": {
    id: "ARG-14001-PK-882",
    companyName: "Crescent Fine Fabrics & Apparel Mills",
    country: "Pakistan",
    city: "Faisalabad Industrial Area",
    standard: "ISO 14001:2015 (Environmental Management Systems)",
    accreditationBody: "IAS (International Accreditation Service, USA)",
    status: "ACTIVE",
    issueDate: "20 May 2024",
    expiryDate: "19 May 2027",
    nextSurveillance: "November 2026",
    scope: "Dyeing, weaving, finishing, and biological effluent treatment in zero-liquid-discharge apparel manufacturing for global retail export.",
    hash: "0x3c99a...710fd"
  },
  "ARG-45001-PK-319": {
    id: "ARG-45001-PK-319",
    companyName: "Pak-Gulf Heavy Fabrication & Pressure Vessels",
    country: "Pakistan",
    city: "Karachi Port Qasim Hub",
    standard: "ISO 45001:2018 (Occupational Health & Safety)",
    accreditationBody: "EIAC / IAF MLA Signatory",
    status: "ACTIVE",
    issueDate: "03 February 2024",
    expiryDate: "02 February 2027",
    nextSurveillance: "December 2026",
    scope: "Structural steel fabrication, specialized welding, and heavy machinery vessel assembly adhering to international occupational safety norms.",
    hash: "0x91d24...cc510"
  },
  "ARG-CTPAT-USA-109": {
    id: "ARG-CTPAT-USA-109",
    companyName: "Apex Global Intermodal & Freight Logistics",
    country: "Saudi Arabia",
    city: "Jeddah Islamic Port Corridor",
    standard: "C-TPAT Tier 2 Security Criteria (US CBP Aligned)",
    accreditationBody: "ARG Independent Security Registrar Validation",
    status: "ACTIVE",
    issueDate: "11 August 2024",
    expiryDate: "10 August 2027",
    nextSurveillance: "August 2026",
    scope: "7-point container inspection, electronic GPS bolt-sealing, secure yard marshalling, and supply chain security for North American marine cargo.",
    hash: "0x14e8b...29ef8"
  }
};

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
  const [result, setResult] = useState<CertificateRecord | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Sync if initialQuery changes
  React.useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (overrideQuery?: string) => {
    const q = (overrideQuery ?? query).trim().toUpperCase();
    setSearched(true);
    if (mockRegistry[q]) {
      setResult(mockRegistry[q]);
    } else {
      setResult(null);
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

  if (!isOpen || !mounted) return null;

  return createPortal(
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white border border-slate-200/90 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] overflow-hidden z-10 my-auto text-left max-h-[88vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-6 md:p-8 border-b border-slate-200 flex items-center justify-between bg-slate-50">
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
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search Bar & Samples */}
          <div className="p-6 md:p-8 space-y-6">
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
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider border border-emerald-600 hover:shadow-md transition-all shrink-0 text-center justify-center flex items-center cursor-pointer"
              >
                VERIFY
              </button>
            </form>

            {/* Quick Sample Queries */}
            <div>
              <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Sample Verified Certificates (Click to test):
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.keys(mockRegistry).map((certKey) => (
                  <button
                    key={certKey}
                    type="button"
                    onClick={() => {
                      setQuery(certKey);
                      handleSearch(certKey);
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#00873E] border border-slate-200 transition-all"
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
                        onClick={handleCopyLink}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-sans text-xs transition-all border border-slate-200"
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
                      No active accredited registrar record matched <code>{query}</code>. Please double-check the ID or try one of the sample identifiers above. For archived or newly issued certificates within the last 48 hours, contact our registrar records desk:
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
