import type { Metadata } from 'next';
import ScheduleClient from './ScheduleClient';

export const metadata: Metadata = {
  title: "Schedule An Accredited Audit | Stage 1 Intake Application | ARG Registrars",
  description: "Submit your Stage 1 accredited audit intake application for ISO 9001, ISO 14001, ISO 45001, or C-TPAT with ARG Registrars. Preliminary gap reports dispatched within 48 business hours.",
  alternates: {
    canonical: '/schedule',
  },
  openGraph: {
    title: "Schedule An Accredited Audit | ARG Registrars",
    description: "Stage 1 audit intake application for ISO management certifications and C-TPAT supply chain security audits.",
    url: 'https://argregistrars.com/schedule',
    images: [{ url: '/banner.png', width: 1200, height: 630, alt: 'ARG Registrars Audit Scheduling' }],
  },
};

export default function SchedulePage() {
  return <ScheduleClient />;
}
