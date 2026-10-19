"use client";
import React, { useState } from 'react';
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
  const [query, setQuery] = useState(initialQuery);
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<CertificateRecord | null>(null);
  const [copied, setCopied] = useState(false);

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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#051109] border border-emerald-500/30 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-8 text-left"
        >
          {/* Header Bar */}
          <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#00873E]/20 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#34D399]">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-display font-bold text-white tracking-wide">
                  Official Registrar Certificate Registry
                </h3>
                <p className="text-xs text-gray-400 font-sans">
                  Verify authentic accreditation records for international buyers and customs authorities
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
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
              className="flex gap-2"
            >
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter Certificate ID (e.g. ARG-9001-KSA-041)"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#34D399] focus:outline-none text-white placeholder-gray-500 font-mono text-sm tracking-wide transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider border border-emerald-400/40 hover:shadow-[0_0_20px_rgba(0,135,62,0.4)] transition-all shrink-0"
              >
                VERIFY
              </button>
            </form>

            {/* Quick Sample Queries */}
            <div>
              <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-gray-400 mb-2">
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
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-white/[0.1] text-gray-300 hover:text-[#34D399] border border-white/10 transition-all"
                  >
                    {certKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Result Display */}
            {searched && (
              <div className="mt-6 pt-6 border-t border-white/10">
                {result ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl p-6 bg-emerald-950/20 border border-emerald-500/30 space-y-5"
                  >
                    {/* Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-[#34D399] text-xs font-mono font-semibold uppercase tracking-wider">
                        <CheckCircle2 size={14} />
                        <span>ACTIVE &amp; ACCREDITED CERTIFICATE</span>
                      </div>
                      <span className="font-mono text-xs text-gray-400">
                        REG-ID: <strong className="text-white">{result.id}</strong>
                      </span>
                    </div>

                    {/* Company Details */}
                    <div>
                      <div className="text-xl font-display font-bold text-white mb-1">
                        {result.companyName}
                      </div>
                      <div className="text-xs text-gray-400 flex items-center gap-1.5 font-sans">
                        <Building2 size={13} className="text-[#34D399]" />
                        <span>{result.city}, {result.country}</span>
                      </div>
                    </div>

                    {/* Standard & Accreditation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-sans">
                      <div>
                        <div className="text-gray-400 uppercase text-[10px] tracking-wider mb-0.5">Certified Standard</div>
                        <div className="text-white font-semibold">{result.standard}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 uppercase text-[10px] tracking-wider mb-0.5">Accreditation Body</div>
                        <div className="text-emerald-400 font-semibold">{result.accreditationBody}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 uppercase text-[10px] tracking-wider mb-0.5">Issue Date</div>
                        <div className="text-gray-200">{result.issueDate}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 uppercase text-[10px] tracking-wider mb-0.5">Next Surveillance Due</div>
                        <div className="text-[#34D399] font-semibold">{result.nextSurveillance}</div>
                      </div>
                    </div>

                    {/* Certified Scope */}
                    <div>
                      <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Certified Technical Scope:
                      </div>
                      <p className="text-xs text-gray-300 font-sans leading-relaxed bg-black/40 p-3 rounded-xl border border-white/[0.06]">
                        {result.scope}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06] text-xs">
                      <div className="font-mono text-[11px] text-gray-500">
                        Security Hash: {result.hash}
                      </div>
                      <button
                        onClick={handleCopyLink}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-white font-sans text-xs transition-all"
                      >
                        {copied ? <Check size={14} className="text-[#34D399]" /> : <ExternalLink size={14} />}
                        <span>{copied ? "Link Copied" : "Share Verification Record"}</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl p-6 bg-red-950/20 border border-red-500/30 text-left space-y-3"
                  >
                    <div className="flex items-center gap-2 text-red-400 font-display font-bold text-sm">
                      <AlertCircle size={18} />
                      <span>Certificate Identifier Not Found</span>
                    </div>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      No active accredited registrar record matched <code>{query}</code>. Please double-check the ID or try one of the sample identifiers above. For archived or newly issued certificates within the last 48 hours, contact our registrar records desk:
                    </p>
                    <div className="text-xs font-mono text-[#34D399]">
                      records@argregistrars.com &bull; +966 55 800 4287 / +92 314 59101614
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
