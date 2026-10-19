import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScrolling from "./components/SmoothScrolling";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Inter({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ARG REGISTRARS PAKISTAN | Global ISO Certifications & Audits",
  description: "ARG REGISTRARS PAKISTAN provides accredited ISO management certifications (ISO 9001, ISO 14001, ISO 45001), C-TPAT security audits, technical factory evaluations, and international registrar solutions. Head Office: Riyadh, KSA | Local Office: Faisalabad, Pakistan.",
  icons: {
    icon: '/favicon.png?v=3',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased font-sans flex flex-col min-h-screen selection:bg-emerald-500 selection:text-white`}
      >
        <SmoothScrolling>
          <Header />
          <main id="page-wrapper" className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScrolling>
      </body>
    </html>
  );
}
