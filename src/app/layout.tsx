import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScrolling from "./components/SmoothScrolling";

// High-precision architectural display typeface
const displayFont = Geist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Swiss modernist typeface for high-trust body, navigation and editorial content
const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Tabular monospace for technical standard clauses, dates, and certificate serials
const monoFont = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

import StickyMobileCta from "./components/StickyMobileCta";

export const metadata: Metadata = {
  metadataBase: new URL('https://argregistrars.com'),
  title: {
    default: "ARG REGISTRARS PAKISTAN | Accredited ISO Certifications & Audits",
    template: "%s | ARG REGISTRARS PAKISTAN"
  },
  description: "ARG REGISTRARS PAKISTAN delivers accredited ISO management certifications (ISO 9001, ISO 14001, ISO 45001), C-TPAT security audits, technical factory evaluations, and international registrar solutions. Head Office: Riyadh, KSA | Local Office: Faisalabad, Pakistan.",
  keywords: [
    "ISO 9001 certification Pakistan",
    "ISO 14001 certification Riyadh",
    "ISO 45001 safety audit",
    "C-TPAT supply chain security audit",
    "accredited registrar Pakistan",
    "factory technical audit Faisalabad",
    "ISO audit Riyadh KSA",
    "ARG Registrars"
  ],
  authors: [{ name: "ARG REGISTRARS" }],
  creator: "ARG REGISTRARS",
  publisher: "ARG REGISTRARS",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ARG REGISTRARS PAKISTAN | Accredited ISO Certifications & Audits",
    description: "Accredited ISO 9001, 14001, 45001 certifications, C-TPAT audits, and technical evaluations across Saudi Arabia & Pakistan.",
    url: 'https://argregistrars.com',
    siteName: 'ARG REGISTRARS PAKISTAN',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'ARG REGISTRARS PAKISTAN Official Accredited Registrar Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ARG REGISTRARS PAKISTAN | Accredited ISO Certifications & Audits",
    description: "Accredited ISO certifications, C-TPAT supply chain security, and factory audits across GCC & Pakistan.",
    images: ['/banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png?v=4',
    shortcut: '/favicon.png?v=4',
    apple: '/favicon.png?v=4',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://argregistrars.com/#organization",
      "name": "ARG REGISTRARS PAKISTAN",
      "url": "https://argregistrars.com",
      "logo": "https://argregistrars.com/logo.png",
      "email": "info@argregistrars.com",
      "description": "Accredited ISO management certifications (ISO 9001, 14001, 45001), C-TPAT audits, and international registrar solutions.",
      "sameAs": [
        "https://argregistrars.com"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://argregistrars.com/#riyadh-office",
      "name": "ARG Registrars - Corporate Head Office",
      "parentOrganization": { "@id": "https://argregistrars.com/#organization" },
      "telephone": "+966558004287",
      "email": "info@argregistrars.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Riverwalk Hussain Ibn Ali Road, Tawaan",
        "addressLocality": "Riyadh",
        "addressCountry": "SA"
      },
      "priceRange": "$$"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://argregistrars.com/#pakistan-office",
      "name": "ARG Registrars - Local Operations Office",
      "parentOrganization": { "@id": "https://argregistrars.com/#organization" },
      "telephone": "+9231459101614",
      "email": "contact@argregistrars.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 2118, Street No. 06, Johan Colony, Block E, Millat Road",
        "addressLocality": "Faisalabad",
        "addressCountry": "PK"
      },
      "priceRange": "$$"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} antialiased font-sans bg-slate-50 text-slate-900 selection:bg-[#00873E] selection:text-white flex flex-col min-h-screen`}
      >
        <SmoothScrolling>
          <Header />
          <main id="page-wrapper" className="flex-grow">{children}</main>
          <Footer />
          <StickyMobileCta />
        </SmoothScrolling>
      </body>
    </html>
  );
}
