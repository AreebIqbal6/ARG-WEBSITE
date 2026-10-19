import type { Metadata } from 'next';
import AuditsClient from './AuditsClient';

export const metadata: Metadata = {
  title: "Auditing & Verification Scopes | Factory Assessments & Compliance",
  description: "Comprehensive third-party auditing services: factory technical capability reviews, ISO surveillance, C-TPAT supply chain security, and ISO 17025 laboratory audits by ARG REGISTRARS PAKISTAN.",
  alternates: {
    canonical: '/audits',
  },
  openGraph: {
    title: "Auditing & Verification Scopes | ARG REGISTRARS PAKISTAN",
    description: "Third-party auditing services for manufacturing facilities, exporter compliance, and international buyer mandates.",
    url: 'https://argregistrars.com/audits',
    images: [{ url: '/banner.png', width: 1200, height: 630, alt: 'ARG Registrars Auditing Scopes' }],
  },
};

export default function AuditsPage() {
  return <AuditsClient />;
}
