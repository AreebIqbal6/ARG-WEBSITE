import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Accredited ISO Certification Services | ISO 9001, 14001, 45001 & C-TPAT",
  description: "Explore accredited ISO registrar services from ARG REGISTRARS PAKISTAN: ISO 9001 Quality Management, ISO 14001 Environmental, ISO 45001 Occupational Safety, and C-TPAT Supply Chain Security.",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Accredited ISO Certification Services | ARG REGISTRARS PAKISTAN",
    description: "End-to-end ISO 9001, 14001, 45001, and C-TPAT supply chain audits by certified lead auditors in Saudi Arabia and Pakistan.",
    url: 'https://argregistrars.com/services',
    images: [{ url: '/banner.png', width: 1200, height: 630, alt: 'ARG Registrars Certification Services' }],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
