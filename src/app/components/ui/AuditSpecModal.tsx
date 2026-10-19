"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export interface AuditSpecData {
  id: string;
  code: string;
  title: string;
  category: string;
  turnaround: string;
  validity: string;
  iafSector: string;
  stage1Docs: string[];
  stage2Audits: string[];
  personDaysGuide: string;
  deliverables: string[];
}

export const auditSpecsCatalog: Record<string, AuditSpecData> = {
  "iso-9001": {
    id: "iso-9001",
    code: "ISO 9001:2015",
    title: "Quality Management Systems (QMS)",
    category: "Management Conformity",
    turnaround: "10-14 Business Days",
    validity: "3-Year Cycle (Annual Surveillance)",
    iafSector: "IAF Scope Category 04, 14, 17, 29",
    personDaysGuide: "Based on IAF MD5 complexity tables (typically 2 to 4 on-site person-days for facilities with 50-150 personnel).",
    stage1Docs: [
      "Documented Quality Policy, Objectives, and Organizational Scope (Clause 4.3 & 5.2)",
      "Process Interaction Maps & Risk Register (Clause 6.1)",
      "Competency & Training Qualification Records (Clause 7.2)",
      "Minimum 1 full cycle of Internal Audit records and Management Review meeting minutes"
    ],
    stage2Audits: [
      "Physical verification of shop-floor operating procedures and traceability records",
      "Machinery calibration logs and incoming raw material QC inspection gates",
      "Interviews with management, supervisory leads, and shopfloor operators",
      "Non-conformance handling and Corrective/Preventive Action (CAPA) verification"
    ],
    deliverables: [
      "Official accredited ISO 9001:2015 Certificate with QR Registry validation",
      "Executive Lead Auditor Evaluation & Findings Summary Report",
      "3-Year Surveillance Cycle Schedule and Milestones"
    ]
  },
  "iso-14001": {
    id: "iso-14001",
    code: "ISO 14001:2015",
    title: "Environmental Management Systems (EMS)",
    category: "Environmental Sustainability",
    turnaround: "12-16 Business Days",
    validity: "3-Year Cycle (Annual Surveillance)",
    iafSector: "IAF Scope Category 04, 09, 14",
    personDaysGuide: "Determined by facility environmental aspects, chemical usage, and effluent complexity (approx. 2.5 to 5 person-days).",
    stage1Docs: [
      "Environmental Aspects and Impacts Register across normal, abnormal, and emergency states",
      "Legal Compliance Register (Environmental Protection Agency approvals, municipal permits)",
      "Chemical storage safety data sheets (MSDS) and hazardous waste containment protocols",
      "Completed internal environmental audit reports and regulatory conformity reviews"
    ],
    stage2Audits: [
      "On-site inspection of chemical storage, secondary containment, and spill response kits",
      "Industrial effluent treatment plant (ETP) operation, testing logs, and discharge permits",
      "Air emission monitoring, scrubber maintenance, and stack testing records",
      "Emergency evacuation drill records and hazardous substance operator safety interviews"
    ],
    deliverables: [
      "Accredited ISO 14001:2015 Certificate recognized worldwide by retail brands and regulators",
      "Full Environmental Gap and Compliance Audit Report",
      "Annual Ecological Surveillance Roadmap"
    ]
  },
  "iso-45001": {
    id: "iso-45001",
    code: "ISO 45001:2018",
    title: "Occupational Health & Safety (OH&S)",
    category: "Workplace Safety & Worker Wellness",
    turnaround: "10-14 Business Days",
    validity: "3-Year Cycle (Annual Surveillance)",
    iafSector: "IAF Scope Category 04, 14, 17, 28",
    personDaysGuide: "Calculated from hazardous work exposure, shifts, and total active workforce.",
    stage1Docs: [
      "Occupational Health & Safety Policy and Hazard Identification & Risk Assessment (HIRA)",
      "Worker consultation and participation framework documentation (Clause 5.4)",
      "Emergency response procedures, fire safety NOCs, and structural fitness certificates",
      "Incident investigation reports, near-miss registers, and medical surveillance records"
    ],
    stage2Audits: [
      "Physical inspection of machinery guarding, electrical panels, and emergency fire exits",
      "Personal Protective Equipment (PPE) distribution, usage, and training compliance",
      "Auditor interviews with worker safety representatives and first-aid response teams",
      "Contractor safety management, permit-to-work systems, and boiler inspection logs"
    ],
    deliverables: [
      "Internationally recognized accredited ISO 45001:2018 Certificate",
      "Technical OH&S Risk and Workplace Safety Evaluation Dossier",
      "Accredited Registrar Annual Surveillance Timeline"
    ]
  },
  "ctpat": {
    id: "ctpat",
    code: "C-TPAT Certified",
    title: "Customs-Trade Partnership Against Terrorism",
    category: "US Customs & Border Protection Supply Chain",
    turnaround: "7-10 Business Days",
    validity: "Annual Registrar Security Validation",
    iafSector: "US CBP Minimum Security Criteria (MSC)",
    personDaysGuide: "Typically 1 to 2 on-site person-days focusing on perimeter, logistics, and container loading.",
    stage1Docs: [
      "Supply Chain Security Profile addressing all 12 MSC criteria categories",
      "Business Partner Security Verification questionnaires and Tier-2 supplier vetting records",
      "Container & trailer 7-point inspection written procedures and high-security seal logbooks",
      "Information technology security policies, firewall logs, and user access revocations"
    ],
    stage2Audits: [
      "Perimeter fencing, lighting, CCTV coverage, and 30-day recorded video archive inspection",
      "Guard post visitor logs, employee ID card badge systems, and vehicle access controls",
      "Live witnessing of 7-point container inspection and ISO 17712 compliant bolt-seal application",
      "Pre-employment background check verification files for security-sensitive personnel"
    ],
    deliverables: [
      "Official ARG C-TPAT Security Assessment Verification Certificate",
      "Comprehensive Security Risk Matrix & Vulnerability Assessment Report",
      "Corrective Action Plan for US Buyer Vendor Portal Compliance"
    ]
  }
};

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
  const [downloaded, setDownloaded] = useState(false);
  const data = auditSpecsCatalog[standardId] || auditSpecsCatalog["iso-9001"];

  const handleDownload = () => {
    // Generate text/markdown spec sheet download
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
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#051109] border border-emerald-500/30 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-8 text-left max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#00873E]/20 to-transparent shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#34D399]">
                <FileCheck2 size={22} />
              </div>
              <div>
                <div className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#34D399]">
                  {data.category} &bull; {data.iafSector}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-wide">
                  {data.code} &ndash; Audit Specification
                </h3>
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

          {/* Scrollable Content Body */}
          <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-xs font-sans">
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-[#34D399] shrink-0" />
                <div>
                  <div className="text-gray-400 text-[10px] uppercase">Turnaround Time</div>
                  <div className="text-white font-semibold">{data.turnaround}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <CalendarCheck size={16} className="text-[#34D399] shrink-0" />
                <div>
                  <div className="text-gray-400 text-[10px] uppercase">Validity Cycle</div>
                  <div className="text-white font-semibold">{data.validity}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Award size={16} className="text-[#34D399] shrink-0" />
                <div>
                  <div className="text-gray-400 text-[10px] uppercase">Registrar Recognition</div>
                  <div className="text-[#34D399] font-semibold">EIAC / IAS Aligned</div>
                </div>
              </div>
            </div>

            {/* Person-Day Formula Note */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs font-sans">
              <span className="font-bold text-white uppercase tracking-wider text-[11px] block mb-1">
                Auditor Person-Days Formula:
              </span>
              <p className="text-gray-300 leading-relaxed font-light">
                {data.personDaysGuide}
              </p>
            </div>

            {/* Stage 1 Checklist */}
            <div>
              <div className="flex items-center gap-2 text-sm font-display font-bold text-white mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#00873E]/30 text-[#34D399] border border-emerald-400/30 flex items-center justify-center text-xs">1</span>
                <span>Stage 1: Documentation Pre-Audit Checklist</span>
              </div>
              <div className="space-y-2">
                {data.stage1Docs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-sans text-gray-200">
                    <CheckCircle2 size={15} className="text-[#34D399] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage 2 Checklist */}
            <div>
              <div className="flex items-center gap-2 text-sm font-display font-bold text-white mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#00873E]/30 text-[#34D399] border border-emerald-400/30 flex items-center justify-center text-xs">2</span>
                <span>Stage 2: On-Site Audit &amp; Technical Verification</span>
              </div>
              <div className="space-y-2">
                {data.stage2Audits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-sans text-gray-200">
                    <CheckCircle2 size={15} className="text-[#34D399] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <div className="text-xs font-sans font-bold uppercase tracking-wider text-gray-400 mb-2">
                Certified Deliverables &amp; Artifacts
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {data.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-sans text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#030906] shrink-0">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white font-sans text-xs tracking-wider transition-all border border-white/10"
            >
              <Download size={14} className="text-[#34D399]" />
              <span>{downloaded ? "Specification Downloaded!" : "Download Criteria Sheet (.TXT)"}</span>
            </button>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/9231459101614?text=Hello%20ARG%20Registrars,%20I%20have%20a%20technical%20question%20regarding%20${encodeURIComponent(data.code)}%20audit%20requirements.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00873E]/20 hover:bg-[#00873E]/40 text-[#34D399] font-sans text-xs border border-emerald-500/30 transition-all"
              >
                <MessageCircle size={14} />
                <span>Ask Auditor</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-gray-300 hover:text-white font-sans text-xs transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
