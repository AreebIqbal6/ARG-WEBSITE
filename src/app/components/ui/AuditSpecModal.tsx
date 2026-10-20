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

export interface AuditSpecData {
  id: string;
  code: string;
  title: string;
  category: string;
  turnaround: string;
  validity: string;
  iafSector: string;
  badge: string;
  heroImage: string;
  stage1Docs: string[];
  stage2Audits: string[];
  personDaysGuide: string;
  deliverables: string[];
}

export const auditSpecsCatalog: Record<string, AuditSpecData> = {
  "iso-9001": {
    id: "iso-9001",
    code: "ISO 9001:2026",
    title: "Quality Management Systems (QMS)",
    category: "Management Conformity",
    turnaround: "10-14 Business Days",
    validity: "3-Year Cycle (Annual Surveillance)",
    iafSector: "IAF Scope Category 04, 14, 17, 29",
    badge: "/certifications/card/iso-9001.png",
    heroImage: "/images/quality_assurance.jpg",
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
      "Official accredited ISO 9001:2026 Certificate with QR Registry validation",
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
    badge: "/certifications/card/iso-14001.jpg",
    heroImage: "/images/environmental_sustainability.jpg",
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
    badge: "/certifications/card/iso-45001.jpg",
    heroImage: "/images/occupational_safety.jpg",
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
    badge: "/certifications/card/ctpat.jpg",
    heroImage: "/images/supply_chain_security.jpg",
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
  },
  "c-tpat": {
    id: "c-tpat",
    code: "C-TPAT Certified",
    title: "Customs-Trade Partnership Against Terrorism",
    category: "US Customs & Border Protection Supply Chain",
    turnaround: "7-10 Business Days",
    validity: "Annual Registrar Security Validation",
    iafSector: "US CBP Minimum Security Criteria (MSC)",
    badge: "/certifications/card/ctpat.jpg",
    heroImage: "/images/supply_chain_security.jpg",
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
  },
  "gots": {
    id: "gots",
    code: "GOTS Certified",
    title: "Global Organic Textile Standard",
    category: "Organic Sustainability",
    turnaround: "10-14 Business Days",
    validity: "Annual Scope Certificate Cycle",
    iafSector: "Organic Fiber & Chemical Processing",
    badge: "/certifications/card/gots.png",
    heroImage: "/images/environmental_sustainability.jpg",
    personDaysGuide: "Based on processing stages (spinning, weaving, wet processing) and facility headcount.",
    stage1Docs: [
      "Organic raw material transaction certificates (TCs) and certified supplier invoices",
      "Organic management plan detailing separation of organic and conventional lots",
      "List of all chemical inputs, dyestuffs, and auxiliaries with toxicological data sheets",
      "Environmental management manual and effluent treatment monitoring protocols"
    ],
    stage2Audits: [
      "Inspection of raw fiber storage, ginning/spinning lines, and contamination barriers",
      "Sampling of wastewater and chemical inventory checks against GOTS restricted list",
      "Social criteria compliance audit including worker interviews, wage records, and working hours",
      "Mass balance calculation and transaction certificate reconciliation across batches"
    ],
    deliverables: [
      "Official GOTS Conformity Assessment Report",
      "Accredited Scope Certificate and Transaction Certificate eligibility",
      "Annual Organic Surveillance Roadmap"
    ]
  },
  "grs": {
    id: "grs",
    code: "GRS Standard",
    title: "Global Recycled Standard",
    category: "Circularity & Recycling",
    turnaround: "10-14 Business Days",
    validity: "Annual Scope Certificate Cycle",
    iafSector: "Recycled Content Chain of Custody",
    badge: "/certifications/card/grs.png",
    heroImage: "/images/precision_robotics.jpg",
    personDaysGuide: "Calculated from recycled material input points and chain-of-custody complexity.",
    stage1Docs: [
      "Reclaimed material supplier declarations and legal compliance permits",
      "Chain of custody procedures adhering to Content Claim Standard (CCS)",
      "Chemical management system records and ZDHC MRSL conformance declarations",
      "Environmental policy, energy usage records, and water consumption metrics"
    ],
    stage2Audits: [
      "On-site material flow inspection from bale opening to finished product packing",
      "Physical verification of post-consumer vs pre-consumer material segregation",
      "Chemical storage review and environmental discharge testing reconciliation",
      "Worker safety, health, and labor standards on-site verification"
    ],
    deliverables: [
      "GRS Verification Assessment Dossier",
      "Accredited Recycled Claim Scope Certificate",
      "Corrective Action and Ongoing Surveillance Report"
    ]
  },
  "zdhc": {
    id: "zdhc",
    code: "ZDHC Gateway & MRSL",
    title: "Roadmap to Zero Discharge of Hazardous Chemicals",
    category: "Chemical Integrity",
    turnaround: "7-12 Business Days",
    validity: "Annual Validation",
    iafSector: "Textile & Leather Wet Processing",
    badge: "/certifications/card/zdhc.png",
    heroImage: "/images/technical_testing_lab.jpg",
    personDaysGuide: "Typically 2 to 3 auditor days focusing on chemical inventory and effluent plant.",
    stage1Docs: [
      "Chemical inventory log with ZDHC Gateway CID numbers and MRSL levels",
      "Safety data sheets (SDS) conforming to GHS standards for 100% of formulations",
      "Effluent treatment plant (ETP) engineering schematics and discharge authorizations",
      "Chemical storage protocols and hazardous waste consignment notes"
    ],
    stage2Audits: [
      "Sampling of raw wastewater, treated effluent, and sludge for ClearStream lab testing",
      "Shopfloor chemical dispensing station inspection and spill containment gates",
      "Interviews with chemical storekeepers, ETP technicians, and safety leads",
      "Cross-check of chemical purchasing invoices against ZDHC Gateway registered products"
    ],
    deliverables: [
      "ZDHC ClearStream Wastewater & Sludge Conformity Report",
      "Chemical Management System Assessment Certificate",
      "InCheck Chemical Inventory Conformance Summary"
    ]
  },
  "en-15343": {
    id: "en-15343",
    code: "EN 15343",
    title: "Recycled Plastics Traceability & Assessment",
    category: "European Plastics Directives",
    turnaround: "10-14 Business Days",
    validity: "Annual Audit Cycle",
    iafSector: "European Polymer Recycling Standards",
    badge: "/certifications/card/en_15343.png",
    heroImage: "/images/precision_robotics.jpg",
    personDaysGuide: "Typically 2 person-days covering recycling lines, extrusion, and mass balance.",
    stage1Docs: [
      "Raw polymer source documentation and origin declarations for recycled inputs",
      "Mass balance accounting system records and batch tracking protocols",
      "Internal quality control manual for mechanical or chemical recycling processes",
      "Testing records for mechanical properties and contamination levels"
    ],
    stage2Audits: [
      "Physical inspection of polymer sorting, washing, compounding, and pelletizing lines",
      "Auditor verification of batch traceability numbers from scrap receipt to finished pellets",
      "Witnessing of melt flow index (MFI), density, and moisture testing procedures",
      "Reconciliation of purchase weight vs production yield and scrap losses"
    ],
    deliverables: [
      "Official EN 15343 Recycled Content Traceability Certificate",
      "Full Polymer Batch Traceability Audit Dossier",
      "EU Market Access Recycled Plastic Compliance Report"
    ]
  },
  "ppwr": {
    id: "ppwr",
    code: "EU PPWR Compliance",
    title: "Packaging & Packaging Waste Regulation",
    category: "EU Circularity Standards",
    turnaround: "7-10 Business Days",
    validity: "Annual EU Market Conformance Review",
    iafSector: "EU Single Market Green Deal Directives",
    badge: "/certifications/card/ppwr.png",
    heroImage: "/images/logistics_warehouse.jpg",
    personDaysGuide: "Typically 1 to 2 person-days focusing on packaging design and material composition.",
    stage1Docs: [
      "Technical packaging specifications, layer compositions, and barrier coatings data",
      "Recyclability assessment documentation based on CEN harmonized standards",
      "Material safety certificates confirming absence of PFAS and heavy metals (<100 ppm)",
      "Recycled plastic content certificates for plastic packaging formats"
    ],
    stage2Audits: [
      "Manufacturing line inspection to verify material bill of materials (BOM)",
      "Screening of adhesives, inks, and labeling materials for recyclability disruption",
      "Testing lab report review for heavy metal concentrations and SVHC compliance",
      "Audit of packaging volume and weight minimization design optimization records"
    ],
    deliverables: [
      "EU PPWR Regulatory Conformity Verification Report",
      "Design for Recyclability (DfR) Grade Assessment Certificate",
      "EU Buyer Technical Compliance Summary"
    ]
  },
  "iso-17025": {
    id: "iso-17025",
    code: "ISO/IEC 17025:2017",
    title: "Testing & Calibration Laboratories Competence",
    category: "Laboratory Accreditation",
    turnaround: "14-20 Business Days",
    validity: "3-Year Cycle with Annual Surveillance",
    iafSector: "ILAC / Laboratory Testing Services",
    badge: "/certifications/card/iso_17025.png",
    heroImage: "/images/technical_testing_lab.jpg",
    personDaysGuide: "Determined by test scopes, calibration parameters, and qualified technical signatories.",
    stage1Docs: [
      "Quality manual adhering to ISO/IEC 17025:2017 management and technical clauses",
      "Method validation dossiers, uncertainty budgets, and standard operating procedures (SOPs)",
      "Equipment calibration certificates with unbroken traceability to national metrology institutes",
      "Proficiency testing (PT) or inter-laboratory comparison (ILC) participation records"
    ],
    stage2Audits: [
      "Live witnessing of representative test and calibration procedures by technical assessors",
      "Evaluation of environmental controls (temperature, humidity, vibration) in testing areas",
      "Interviews with authorized signatories on measurement uncertainty and error analysis",
      "Audit of sample receipt, chain-of-custody, reporting software, and data integrity"
    ],
    deliverables: [
      "Accredited ISO/IEC 17025:2017 Laboratory Competence Certificate",
      "Formal Schedule of Accreditation detailing validated test parameters and ranges",
      "Technical Assessor Evaluation & Measurement Uncertainty Review"
    ]
  },
  "ce-marking": {
    id: "ce-marking",
    code: "CE Marking Conformity",
    title: "European Economic Area Conformity Directives",
    category: "EU Product Directives",
    turnaround: "10-15 Business Days",
    validity: "Directives Conformity Cycle",
    iafSector: "EU Harmonized Technical Legislation",
    badge: "/certifications/card/ce_marking.png",
    heroImage: "/images/precision_robotics.jpg",
    personDaysGuide: "Based on applicable EU directives (e.g., PPE, Machinery, Low Voltage).",
    stage1Docs: [
      "Draft EU Declaration of Conformity (DoC) and list of applied harmonized EN standards",
      "Product technical construction file (TCF) with design drawings and schematics",
      "Risk assessment and reduction analysis adhering to applicable directive Annexes",
      "User manuals, safety warnings, and packaging labeling in required EU languages"
    ],
    stage2Audits: [
      "Verification of factory production control (FPC) to ensure serial production conformity",
      "Review of accredited type-examination testing reports and safety margins",
      "Inspection of serial number marking, CE logo proportion, and traceability tags",
      "Post-market surveillance and customer complaint resolution procedure review"
    ],
    deliverables: [
      "EU CE Technical File Compliance Verification Certificate",
      "Technical Construction File Review Summary Dossier",
      "Authorized Registrar Conformity Sign-Off for EU Customs Export"
    ]
  },
  "technical-audit": {
    id: "technical-audit",
    code: "Technical Audit",
    title: "Factory Technical & Production Capability Review",
    category: "Manufacturing Capacity",
    turnaround: "5-7 Business Days",
    validity: "Annual Buyer Compliance Review",
    iafSector: "Industrial Manufacturing & Supply Chain",
    badge: "/certifications/card/technical-audit.png",
    heroImage: "/images/auditor_inspection.jpg",
    personDaysGuide: "Typically 1 to 2 on-site person-days covering shopfloor machinery and QC labs.",
    stage1Docs: [
      "Factory layout schematics, line machine capacity charts, and maintenance logs",
      "Internal quality assurance flowcharts and raw material acceptance thresholds",
      "Standard operating procedures (SOPs) for defect quarantine and rework tracking",
      "Calibration certificates for key manufacturing sensors, gauges, and load cells"
    ],
    stage2Audits: [
      "Live inspection of production flow from material intake to packaging lines",
      "Machinery preventative maintenance verification and downtime records",
      "Witnessing of in-line and end-of-line quality inspections by QC inspectors",
      "Operator skill matrix review and continuous production line throughput audits"
    ],
    deliverables: [
      "ARG Factory Technical Capability Assessment Dossier",
      "Machinery Reliability & Production Capacity Scorecard",
      "Supplier Vetting Compliance Sign-Off for Buyer Portals"
    ]
  },
  "fsns-sqf": {
    id: "fsns-sqf",
    code: "FSNS & SQF",
    title: "Food Contact & Packaging Safety Systems",
    category: "Hygiene & Food Safety",
    turnaround: "10-14 Business Days",
    validity: "Annual GFSI Benchmarked Cycle",
    iafSector: "Food Contact Materials & Processing",
    badge: "/certifications/card/fsns-sqf.png",
    heroImage: "/images/quality_assurance.jpg",
    personDaysGuide: "Based on HACCP plans, food contact zones, and sanitation complexity.",
    stage1Docs: [
      "HACCP plan, Hazard Analysis, and Critical Control Points (CCP) identification",
      "Good Manufacturing Practice (GMP) manual and sanitation standard operating procedures (SSOPs)",
      "Pest control service logs and building integrity inspection certificates",
      "Allergen control plans and raw material supplier food safety guarantees"
    ],
    stage2Audits: [
      "Inspection of hygienic zoning, hand-washing stations, and air filtration positive pressure",
      "Swab sampling validation and ATP luminescence sanitation testing reviews",
      "Traceability drill execution (one step back, one step forward within 2 hours)",
      "Interviews with food safety team leaders and sanitation technicians"
    ],
    deliverables: [
      "Accredited Food Safety / Hygiene System Audit Certificate",
      "Full HACCP & Sanitation Verification Audit Dossier",
      "GFSI Alignment Verification Report for Export Retailers"
    ]
  },
  "iso-22000": {
    id: "iso-22000",
    code: "ISO 22000:2018",
    title: "Food Safety Management Systems (FSMS)",
    category: "Food Safety & HACCP",
    turnaround: "10-14 Business Days",
    validity: "3-Year Cycle (Annual Surveillance)",
    iafSector: "IAF Scope Category 03 (Food Products, Beverages & Packaging)",
    badge: "/certifications/card/iso-22000.png",
    heroImage: "/images/logistics_warehouse.jpg",
    personDaysGuide: "Based on IAF MD5 complexity tables, food chain category, number of HACCP studies, and production shifts.",
    stage1Docs: [
      "Documented Food Safety Policy and FSMS Scope (Clauses 4.3 & 5.2)",
      "Prerequisite Programs (PRPs) according to ISO/TS 22002 series",
      "Hazard Analysis, CCP Determinations, and Operational PRPs (OPRPs)",
      "Product descriptions, intended use specifications, and verified process flow diagrams"
    ],
    stage2Audits: [
      "On-site inspection of critical control points (CCPs) and critical limits monitoring logs",
      "Physical examination of sanitation, personal hygiene, and pest exclusion barriers",
      "Mock recall and mass-balance traceability exercise verification",
      "Verification of internal audits, management reviews, and food safety team competency records"
    ],
    deliverables: [
      "Accredited ISO 22000:2018 Management System Certificate",
      "Comprehensive FSMS & HACCP Audit Technical Findings Report",
      "Formal CAPA Review and Verification Dossier"
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
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-sans text-xs tracking-wider transition-all border border-slate-200 shadow-xs cursor-pointer"
            >
              <Download size={14} className="text-[#00873E]" />
              <span>{downloaded ? "Specification Downloaded!" : "Download Criteria Sheet (.TXT)"}</span>
            </button>

            <div className="flex items-center justify-end gap-2.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/9231459101614?text=Hello%20ARG%20Registrars,%20I%20have%20a%20technical%20question%20regarding%20${encodeURIComponent(data.code)}%20audit%20requirements.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#00873E] font-sans text-xs border border-emerald-200 font-medium transition-all"
              >
                <MessageCircle size={14} />
                <span>Ask Auditor</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans text-xs transition-all border border-slate-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
