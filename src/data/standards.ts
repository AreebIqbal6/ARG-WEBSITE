/**
 * Centralized Accredited Standards Catalog
 * Master Single Source of Truth for ARG Registrars
 * 
 * Synchronizes:
 * - Home Accreditations Showcase (AccreditationsSection.tsx)
 * - Audits Directory (AuditsClient.tsx)
 * - Interactive Hero Audit Console (InteractiveHeroAudit.tsx)
 * - Audit Specifications Modal (AuditSpecModal.tsx)
 * - Footer Certification Badges (Footer.tsx)
 */

export interface Standard {
  id: string;
  aliases?: string[];
  code: string;
  name: string;
  title: string;
  auditTitle: string;
  tagline: string;
  category: string;
  badge: string;
  badgeImg: string;
  heroImage: string;
  scope: string;
  scopeSummary: string;
  desc: string;
  turnaround: string;
  validity: string;
  iafSector: string;
  personDaysGuide: string;
  features: string[];
  keyCheckpoints: string[];
  stage1Docs: string[];
  stage2Audits: string[];
  deliverables: string[];
  isHeroFeatured?: boolean;
  footerName: string;
}

export const STANDARDS_CATALOG: Standard[] = [
  {
    id: "iso-9001",
    code: "ISO 9001:2026",
    name: "ISO 9001:2026",
    title: "Quality Management Systems (QMS)",
    auditTitle: "Quality Management Audits",
    tagline: "Quality Management Systems (QMS)",
    category: "Management Conformity",
    badge: "/certifications/card/iso-9001.png",
    badgeImg: "/certifications/card/iso-9001.png",
    heroImage: "/images/quality_assurance.jpg",
    scope: "Standardized quality management frameworks, risk-based operational auditing, defect reduction, and continuous improvement.",
    scopeSummary: "Demonstrates organizational ability to consistently provide defect-free products and services fulfilling international buyer regulatory standards.",
    desc: "Rigorous evaluation of operational workflows, defect minimization, risk analysis, and customer satisfaction loops.",
    turnaround: "10-14 Business Days",
    validity: "3-Year Cycle (Annual Surveillance)",
    iafSector: "IAF Scope Category 04, 14, 17, 29",
    personDaysGuide: "Based on IAF MD5 complexity tables (typically 2 to 4 on-site person-days for facilities with 50-150 personnel).",
    features: [
      "Risk-Based Process Audits",
      "Zero-Defect Quality Controls",
      "Supplier Verification & Evaluation"
    ],
    keyCheckpoints: [
      "Risk-based organizational process audit",
      "Corrective & Preventive Action (CAPA) tracking",
      "Customer satisfaction & continuous improvement metrics"
    ],
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
    ],
    isHeroFeatured: true,
    footerName: "ISO 9001:2026 Quality Management"
  },
  {
    id: "iso-14001",
    code: "ISO 14001:2015",
    name: "ISO 14001:2015",
    title: "Environmental Management Systems (EMS)",
    auditTitle: "Environmental Management Audits",
    tagline: "Environmental Management Systems (EMS)",
    category: "Environmental Sustainability",
    badge: "/certifications/card/iso-14001.jpg",
    badgeImg: "/certifications/card/iso-14001.jpg",
    heroImage: "/images/environmental_sustainability.jpg",
    scope: "Systematic environmental impact mitigation, resource efficiency, regulatory compliance, and carbon footprint accountability.",
    scopeSummary: "Establishes institutional frameworks for systematic resource efficiency, chemical waste reduction, and compliance with statutory environmental mandates.",
    desc: "Assessment of ecological impacts, waste treatment compliance, resource conservation, and environmental legal obligations.",
    turnaround: "12-16 Business Days",
    validity: "3-Year Cycle (Annual Surveillance)",
    iafSector: "IAF Scope Category 04, 09, 14",
    personDaysGuide: "Determined by facility environmental aspects, chemical usage, and effluent complexity (approx. 2.5 to 5 person-days).",
    features: [
      "Waste & Emissions Monitoring",
      "Resource Optimization",
      "Environmental Regulatory Audits"
    ],
    keyCheckpoints: [
      "Effluent, air emission & hazardous waste assessment",
      "Legal register verification & spill mitigation readiness",
      "Sustainable energy consumption & carbon reduction tracking"
    ],
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
    ],
    isHeroFeatured: true,
    footerName: "ISO 14001:2015 Environmental EMS"
  },
  {
    id: "iso-45001",
    code: "ISO 45001:2018",
    name: "ISO 45001:2018",
    title: "Occupational Health & Safety (OH&S)",
    auditTitle: "Occupational Safety Audits",
    tagline: "Occupational Health & Safety (OH&S)",
    category: "Workplace Safety & Worker Wellness",
    badge: "/certifications/card/iso-45001.jpg",
    badgeImg: "/certifications/card/iso-45001.jpg",
    heroImage: "/images/occupational_safety.jpg",
    scope: "Proactive hazard identification, workplace risk reduction, employee safety management, and industrial health safeguards.",
    scopeSummary: "Proactively identifies factory floor hazards, eliminates workplace physical risks, and ensures rigorous worker occupational health compliance.",
    desc: "Workplace hazard prevention, emergency response protocols, industrial hygiene, and worker wellness safeguards.",
    turnaround: "10-14 Business Days",
    validity: "3-Year Cycle (Annual Surveillance)",
    iafSector: "IAF Scope Category 04, 14, 17, 28",
    personDaysGuide: "Calculated from hazardous work exposure, shifts, and total active workforce.",
    features: [
      "Hazard Identification & Controls",
      "Accident Prevention Systems",
      "Safe Working Environments"
    ],
    keyCheckpoints: [
      "Workplace hazard identification & risk remediation (HIRA)",
      "Emergency response protocols, fire drills & exit verification",
      "Worker health screening, PPE conformity & safety committees"
    ],
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
    ],
    isHeroFeatured: true,
    footerName: "ISO 45001:2018 Health & Safety"
  },
  {
    id: "ctpat",
    aliases: ["c-tpat"],
    code: "C-TPAT Certified",
    name: "C-TPAT Certified",
    title: "Supply Chain Security Standard",
    auditTitle: "Supply Chain Security Audits",
    tagline: "Supply Chain Security Standard",
    category: "Supply Chain Security",
    badge: "/certifications/card/ctpat.jpg",
    badgeImg: "/certifications/card/ctpat.jpg",
    heroImage: "/images/supply_chain_security.jpg",
    scope: "Global supply chain security audits adhering to US Customs and Border Protection standards for expedited trade clearance.",
    scopeSummary: "Rigorous 12-point US Customs security evaluation enabling expedited Tier-2/Tier-3 green lane cargo processing at US import ports.",
    desc: "End-to-end security audits according to US Customs criteria, covering container integrity, physical perimeter security, and logistics.",
    turnaround: "7-10 Business Days",
    validity: "Annual Registrar Security Validation",
    iafSector: "US CBP Minimum Security Criteria (MSC)",
    personDaysGuide: "Typically 1 to 2 on-site person-days focusing on perimeter, logistics, and container loading.",
    features: [
      "Cargo & Physical Security",
      "Access Control & Container Integrity",
      "Supply Chain Risk Assessment"
    ],
    keyCheckpoints: [
      "Container & trailer 7-point physical security inspection",
      "Biometric access control, CCTV coverage & fencing integrity",
      "Subcontractor screening & international supply chain mapping"
    ],
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
    ],
    isHeroFeatured: true,
    footerName: "C-TPAT Supply Chain Security"
  },
  {
    id: "gots",
    code: "GOTS Certified",
    name: "GOTS Certified",
    title: "Global Organic Textile Standard",
    auditTitle: "Organic Textile Standard",
    tagline: "Global Organic Textile Standard",
    category: "Organic Sustainability",
    badge: "/certifications/card/gots.png",
    badgeImg: "/certifications/card/gots.png",
    heroImage: "/images/environmental_sustainability.jpg",
    scope: "World-leading textile processing standard for organic fibers, integrating environmental and strict social compliance criteria.",
    scopeSummary: "World-leading organic fiber processing verification enforcing strict toxicological limits, chain-of-custody tracking, and social accountability.",
    desc: "Third-party inspection of organic fiber chain of custody, chemical inputs, and environmental management.",
    turnaround: "10-14 Business Days",
    validity: "Annual Scope Certificate Cycle",
    iafSector: "Organic Fiber & Chemical Processing",
    personDaysGuide: "Based on processing stages (spinning, weaving, wet processing) and facility headcount.",
    features: [
      "Organic Chain of Custody",
      "Residue & Toxin Screening",
      "Transaction Certificate Verification"
    ],
    keyCheckpoints: [
      "Organic raw material transaction certificate verification",
      "Restricted chemical screening & residue testing gates",
      "Wastewater treatment & worker environmental safeguards"
    ],
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
    ],
    isHeroFeatured: true,
    footerName: "GOTS Organic Textile Standard"
  },
  {
    id: "grs",
    code: "GRS Standard",
    name: "GRS Standard",
    title: "Global Recycled Standard",
    auditTitle: "Recycled Content Verification",
    tagline: "Global Recycled Standard",
    category: "Circularity & Recycling",
    badge: "/certifications/card/grs.png",
    badgeImg: "/certifications/card/grs.png",
    heroImage: "/images/precision_robotics.jpg",
    scope: "Third-party certification of recycled material input, chain of custody, chemical restrictions, and responsible manufacturing.",
    scopeSummary: "Accredited tracking of recycled content percentages across supply chains, chemical management, and environmental production practices.",
    desc: "Accredited tracking of recycled content % in manufacturing, environmental criteria, and chemical restrictions.",
    turnaround: "10-14 Business Days",
    validity: "Annual Scope Certificate Cycle",
    iafSector: "Recycled Content Chain of Custody",
    personDaysGuide: "Calculated from recycled material input points and chain-of-custody complexity.",
    features: [
      "Recycled Input Tracking",
      "Environmental Management Systems",
      "Supply Chain Traceability"
    ],
    keyCheckpoints: [
      "Post-consumer & pre-consumer recycled input mass balancing",
      "Chemical management audit against ZDHC MRSL limits",
      "Chain of custody documentation & traceability review"
    ],
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
    ],
    isHeroFeatured: true,
    footerName: "GRS Global Recycled Standard"
  },
  {
    id: "zdhc",
    code: "ZDHC Gateway & MRSL",
    name: "ZDHC Gateway & MRSL",
    title: "Roadmap to Zero Hazardous Chemicals",
    auditTitle: "Hazardous Chemical Verification",
    tagline: "Roadmap to Zero Hazardous Chemicals",
    category: "Chemical Integrity",
    badge: "/certifications/card/zdhc.png",
    badgeImg: "/certifications/card/zdhc.png",
    heroImage: "/images/technical_testing_lab.jpg",
    scope: "Elimination of hazardous substances in wet processing, chemical inventory compliance, and discharge water verification.",
    scopeSummary: "Comprehensive wet processing chemical audit, Zero Discharge roadmap verification, and ClearStream effluent compliance testing.",
    desc: "Wastewater discharge conformance and input chemical management aligned with the Zero Discharge roadmap.",
    turnaround: "7-12 Business Days",
    validity: "Annual Validation",
    iafSector: "Textile & Leather Wet Processing",
    personDaysGuide: "Typically 2 to 3 auditor days focusing on chemical inventory and effluent plant.",
    features: [
      "MRSL Conformance Level 1-3",
      "Wastewater Discharge Testing",
      "Chemical Gateway Validation"
    ],
    keyCheckpoints: [
      "Chemical inventory conformance on ZDHC Gateway",
      "ClearStream wastewater and sludge laboratory verification",
      "Secondary containment and worker safety chemical controls"
    ],
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
    ],
    footerName: "ZDHC Zero Discharge of Chemicals"
  },
  {
    id: "en-15343",
    code: "EN 15343",
    name: "EN 15343 Recycled Plastics",
    title: "Recycled Plastics Traceability & Assessment",
    auditTitle: "Recycled Plastics Traceability",
    tagline: "Traceability & Recycled Content",
    category: "European Plastics Directives",
    badge: "/certifications/card/en_15343.png",
    badgeImg: "/certifications/card/en_15343.png",
    heroImage: "/images/precision_robotics.jpg",
    scope: "European standard specifying procedures needed for traceability of recycled plastics and origin conformity assessment.",
    scopeSummary: "European compliance audits verifying procedures for post-consumer recycled plastic origin and batch traceability.",
    desc: "European compliance audits verifying procedures for post-consumer recycled plastic origin and batch traceability.",
    turnaround: "10-14 Business Days",
    validity: "Annual Audit Cycle",
    iafSector: "European Polymer Recycling Standards",
    personDaysGuide: "Typically 2 person-days covering recycling lines, extrusion, and mass balance.",
    features: [
      "Post-Consumer Plastic Audit",
      "Recycled Content % Verification",
      "Batch Traceability Protocols"
    ],
    keyCheckpoints: [
      "Mass balance accounting across extrusion lines",
      "Scrap source declaration & origin certification",
      "Melt flow index (MFI) and polymer density verification"
    ],
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
    ],
    footerName: "EN 15343 Recycled Plastics"
  },
  {
    id: "ppwr",
    code: "EU PPWR Compliance",
    name: "EU PPWR Compliance",
    title: "Packaging & Packaging Waste Regulation",
    auditTitle: "Packaging Waste Regulations",
    tagline: "Packaging & Packaging Waste Regulation",
    category: "EU Circularity Standards",
    badge: "/certifications/card/ppwr.png",
    badgeImg: "/certifications/card/ppwr.png",
    heroImage: "/images/logistics_warehouse.jpg",
    scope: "European Union circularity regulations enforcing packaging reduction, recyclability grades, and recycled plastic quotas.",
    scopeSummary: "Circularity and recyclability evaluation adhering to European Union packaging reduction mandates.",
    desc: "Circularity and recyclability evaluation adhering to European Union packaging reduction mandates.",
    turnaround: "7-10 Business Days",
    validity: "Annual EU Market Conformance Review",
    iafSector: "EU Single Market Green Deal Directives",
    personDaysGuide: "Typically 1 to 2 person-days focusing on packaging design and material composition.",
    features: [
      "Circularity Assessment",
      "Design for Recyclability Audit",
      "PFAS & Heavy Metal Screening"
    ],
    keyCheckpoints: [
      "Design for Recyclability (DfR) grading",
      "Heavy metal & PFAS non-intentionally added substance checks",
      "Packaging minimization and reuse compliance"
    ],
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
    ],
    footerName: "EU PPWR Packaging Compliance"
  },
  {
    id: "technical-audit",
    code: "Technical Audit",
    name: "Technical Audit Compliance",
    title: "Factory Floor & Process Capability",
    auditTitle: "Factory Capability Reviews",
    tagline: "Factory Floor & Process Capability",
    category: "Manufacturing Capacity",
    badge: "/certifications/card/technical-audit.png",
    badgeImg: "/certifications/card/technical-audit.png",
    heroImage: "/images/auditor_inspection.jpg",
    scope: "Rigorous factory evaluation assessing production machinery, operational capacity, quality assurance protocols, and labor standards.",
    scopeSummary: "In-depth machinery inspection, labor practices, quality control room protocols, and overall factory manufacturing capacity.",
    desc: "In-depth machinery inspection, labor practices, quality control room protocols, and overall factory manufacturing capacity.",
    turnaround: "5-7 Business Days",
    validity: "Annual Buyer Compliance Review",
    iafSector: "Industrial Manufacturing & Supply Chain",
    personDaysGuide: "Typically 1 to 2 on-site person-days covering shopfloor machinery and QC labs.",
    features: [
      "Machinery & Line Verification",
      "Quality Control Benchmarks",
      "Capacity & Traceability Auditing"
    ],
    keyCheckpoints: [
      "Machine preventative maintenance verification",
      "In-line defect quarantine and corrective workflows",
      "Operator skill matrix and manufacturing throughput records"
    ],
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
    ],
    footerName: "Technical Audit Certified"
  },
  {
    id: "fsns-sqf",
    code: "FSNS & SQF",
    name: "FSNS & SQF Benchmarks",
    title: "Global Safety & Quality Standard",
    auditTitle: "Hygiene & Food Safety Standards",
    tagline: "Global Safety & Quality Standard",
    category: "Hygiene & Food Safety",
    badge: "/certifications/card/fsns-sqf.png",
    badgeImg: "/certifications/card/fsns-sqf.png",
    heroImage: "/images/quality_assurance.jpg",
    scope: "Recognized international safety and quality certification ensuring rigorous standard compliance and buyer trust.",
    scopeSummary: "Comprehensive auditing for food contact materials, sanitation practices, traceability, and global safety standards.",
    desc: "Comprehensive auditing for food contact materials, sanitation practices, traceability, and global safety standards.",
    turnaround: "10-14 Business Days",
    validity: "Annual GFSI Benchmarked Cycle",
    iafSector: "Food Contact Materials & Processing",
    personDaysGuide: "Based on HACCP plans, food contact zones, and sanitation complexity.",
    features: [
      "Hygiene & Sanitation Control",
      "HACCP Principles Integration",
      "Buyer-Approved Compliance"
    ],
    keyCheckpoints: [
      "Hygienic zoning and air filtration controls",
      "ATP surface swab verification and sanitation logs",
      "Traceability drill completion within 2 hours"
    ],
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
    ],
    footerName: "FSNS Quality Standards"
  },
  {
    id: "iso-17025",
    code: "ISO/IEC 17025:2017",
    name: "ISO 17025 Accredited",
    title: "Testing & Calibration Laboratories Competence",
    auditTitle: "Laboratory Competence Audits",
    tagline: "Testing & Calibration Laboratories",
    category: "Laboratory Accreditation",
    badge: "/certifications/card/iso_17025.png",
    badgeImg: "/certifications/card/iso_17025.png",
    heroImage: "/images/technical_testing_lab.jpg",
    scope: "Demonstrated technical competence, precision measurement calibrations, and internationally accepted laboratory validation data.",
    scopeSummary: "Scrutiny of testing methodologies, environmental controls, equipment calibration curves, and measurement uncertainty.",
    desc: "Scrutiny of testing methodologies, environmental controls, equipment calibration curves, and measurement uncertainty.",
    turnaround: "14-20 Business Days",
    validity: "3-Year Cycle with Annual Surveillance",
    iafSector: "ILAC / Laboratory Testing Services",
    personDaysGuide: "Determined by test scopes, calibration parameters, and qualified technical signatories.",
    features: [
      "Physical & Chemical Testing",
      "Calibration Traceability",
      "Globally Accepted Reports"
    ],
    keyCheckpoints: [
      "Method validation dossiers & uncertainty budgets",
      "Calibration traceability to national metrology institutes",
      "Proficiency testing (PT) program participation"
    ],
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
    ],
    footerName: "ISO 17025 Laboratory Testing"
  },
  {
    id: "ce-marking",
    code: "CE Marking Conformity",
    name: "CE Marking Conformity",
    title: "European Health & Safety Directives",
    auditTitle: "European Conformity Directives",
    tagline: "European Health & Safety Directives",
    category: "EU Product Directives",
    badge: "/certifications/card/ce_marking.png",
    badgeImg: "/certifications/card/ce_marking.png",
    heroImage: "/images/precision_robotics.jpg",
    scope: "Validation that manufactured industrial goods and textiles meet European Union health, safety, and environmental protection requirements.",
    scopeSummary: "Technical file scrutiny, risk mitigation records, and safety conformity declarations for European export compliance.",
    desc: "Technical file scrutiny, risk mitigation records, and safety conformity declarations for European export compliance.",
    turnaround: "10-15 Business Days",
    validity: "Directives Conformity Cycle",
    iafSector: "EU Harmonized Technical Legislation",
    personDaysGuide: "Based on applicable EU directives (e.g., PPE, Machinery, Low Voltage).",
    features: [
      "Technical File Documentation",
      "Essential Safety Assessment",
      "EU Declaration of Conformity"
    ],
    keyCheckpoints: [
      "Harmonized standard compliance matrices",
      "Technical Construction File (TCF) verification",
      "Factory Production Control (FPC) serial conformity"
    ],
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
    ],
    footerName: "CE Marking Conformity"
  },
  {
    id: "iso-22000",
    code: "ISO 22000:2018",
    name: "ISO 22000:2018",
    title: "Food Safety Management Systems (FSMS)",
    auditTitle: "Food Safety Audits",
    tagline: "Food Safety Management Systems (FSMS)",
    category: "Food Safety & HACCP",
    badge: "/certifications/card/iso-22000.png",
    badgeImg: "/certifications/card/iso-22000.png",
    heroImage: "/images/logistics_warehouse.jpg",
    scope: "Interactive communication, prerequisite programs (PRPs), and HACCP hazard controls across the entire global food and packaging supply chain.",
    scopeSummary: "Comprehensive evaluation of prerequisite programs (PRPs), critical control points (CCPs), and farm-to-fork food chain safety.",
    desc: "Comprehensive evaluation of prerequisite programs (PRPs), critical control points (CCPs), and farm-to-fork food chain safety.",
    turnaround: "10-14 Business Days",
    validity: "3-Year Cycle (Annual Surveillance)",
    iafSector: "IAF Scope Category 03 (Food Products, Beverages & Packaging)",
    personDaysGuide: "Based on IAF MD5 complexity tables, food chain category, number of HACCP studies, and production shifts.",
    features: [
      "HACCP Principles Integration",
      "Critical Control Point (CCP) Auditing",
      "Farm-to-Fork Traceability"
    ],
    keyCheckpoints: [
      "Prerequisite Programs (PRPs) according to ISO/TS 22002 series",
      "Critical Control Point (CCP) and OPRP monitoring records",
      "Mock recall and mass-balance traceability exercises"
    ],
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
    ],
    footerName: "ISO 22000:2018 Food Safety"
  }
];

/**
 * Helper Accessors
 */
export function getAllStandards(): Standard[] {
  return STANDARDS_CATALOG;
}

export function getStandardById(id: string): Standard | undefined {
  const normalized = id.toLowerCase().trim();
  return STANDARDS_CATALOG.find(
    (s) => s.id === normalized || (s.aliases && s.aliases.includes(normalized))
  );
}

export function getFeaturedHeroStandards(): Standard[] {
  return STANDARDS_CATALOG.filter((s) => s.isHeroFeatured);
}

export function getFooterCertLogos(): { name: string; src: string; id: string }[] {
  return STANDARDS_CATALOG.map((s) => ({
    id: s.id,
    name: s.footerName,
    src: s.badgeImg
  }));
}

export function getAuditStandards(): { id: string; name: string; badge: string; title: string; desc: string }[] {
  return STANDARDS_CATALOG.map((s) => ({
    id: s.id,
    name: s.name,
    badge: s.badgeImg,
    title: s.auditTitle,
    desc: s.desc
  }));
}

export function getAccreditationStandards(): { id: string; name: string; badgeImg: string; tagline: string; scope: string; features: string[] }[] {
  return STANDARDS_CATALOG.map((s) => ({
    id: s.id,
    name: s.name,
    badgeImg: s.badgeImg,
    tagline: s.tagline,
    scope: s.scope,
    features: s.features
  }));
}

export function getAuditSpecsCatalog(): Record<string, Standard> {
  const map: Record<string, Standard> = {};
  for (const s of STANDARDS_CATALOG) {
    map[s.id] = s;
    if (s.aliases) {
      for (const alias of s.aliases) {
        map[alias] = s;
      }
    }
  }
  return map;
}
