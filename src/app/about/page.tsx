import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Us | Accredited International ISO Registrar & Auditing Body",
  description: "Learn about ARG REGISTRARS PAKISTAN — accredited ISO certification and C-TPAT auditing body with regional operations in Riyadh (Kingdom of Saudi Arabia) and Faisalabad (Pakistan).",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Us | ARG REGISTRARS PAKISTAN",
    description: "Accredited ISO registrar body providing certified conformity assessments and C-TPAT audits across Saudi Arabia and Pakistan.",
    url: 'https://argregistrars.com/about',
    images: [{ url: '/banner.png', width: 1200, height: 630, alt: 'About ARG Registrars Pakistan' }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
