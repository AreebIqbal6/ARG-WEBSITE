import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { STANDARDS_CATALOG, getStandardById } from '@/data/standards';
import StandardDetailClient from './StandardDetailClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return STANDARDS_CATALOG.map((s) => ({
    id: s.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const standard = getStandardById(id);

  if (!standard) {
    return {
      title: 'Standard Not Found | ARG Registrars',
    };
  }

  return {
    title: `${standard.code} Certification & Audit Scope | ARG Registrars`,
    description: standard.scopeSummary,
    alternates: {
      canonical: `/standards/${standard.id}`,
    },
    openGraph: {
      title: `${standard.code} Accredited Audit Scope | ARG Registrars`,
      description: standard.scopeSummary,
      url: `https://argregistrars.com/standards/${standard.id}`,
      images: [{ url: standard.badgeImg, width: 400, height: 400, alt: standard.name }],
    },
  };
}

export default async function StandardDetailPage({ params }: PageProps) {
  const { id } = await params;
  const standard = getStandardById(id);

  if (!standard) {
    notFound();
  }

  return <StandardDetailClient standard={standard} />;
}
