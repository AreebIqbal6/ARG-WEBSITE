import { Metadata } from 'next';
import InquiriesClient from './InquiriesClient';

export const metadata: Metadata = {
  title: 'Audit Inquiries & Replies Inbox | ARG Registrars Admin',
  description: 'Internal administrative dashboard for reviewing and managing client audit inquiries and certification requests.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function InquiriesPage() {
  return <InquiriesClient />;
}
