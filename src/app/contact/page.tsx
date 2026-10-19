import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact & Regional Offices | Riyadh (KSA) & Faisalabad (Pakistan)",
  description: "Connect with ARG REGISTRARS PAKISTAN lead auditors. Schedule an ISO certification audit, inquire about C-TPAT verification, or visit our regional offices in Riyadh and Faisalabad.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact & Regional Offices | ARG REGISTRARS PAKISTAN",
    description: "Inquire about accredited ISO management certifications, C-TPAT audits, or schedule an on-site facility evaluation.",
    url: 'https://argregistrars.com/contact',
    images: [{ url: '/banner.png', width: 1200, height: 630, alt: 'Contact ARG Registrars Pakistan' }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
