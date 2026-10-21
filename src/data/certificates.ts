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

// Built-in verified registry fallback for offline/development and rapid client lookup
export const VERIFIED_REGISTRY: Record<string, CertificateRecord> = {
  "ARG-9001-KSA-041": {
    id: "ARG-9001-KSA-041",
    companyName: "Arabian Polymer & Chemical Industries Ltd.",
    country: "Saudi Arabia",
    city: "Riyadh Industrial City 2",
    standard: "ISO 9001:2026 (Quality Management Systems)",
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
