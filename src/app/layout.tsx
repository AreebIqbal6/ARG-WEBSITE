import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScrolling from "./components/SmoothScrolling";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// High-authority, precision-engineered geometric display font
const displayFont = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

// Modern, high-trust font for body, navigation and data
const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ARG REGISTRARS PAKISTAN | Accredited ISO Certifications & Audits",
  description: "ARG REGISTRARS PAKISTAN provides accredited ISO management certifications (ISO 9001, ISO 14001, ISO 45001), C-TPAT security audits, technical factory evaluations, and international registrar solutions. Head Office: Riyadh, KSA | Local Office: Faisalabad, Pakistan.",
  icons: {
    icon: '/favicon.png?v=4',
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
        className={`${displayFont.variable} ${sansFont.variable} antialiased font-sans bg-[#030906] text-white selection:bg-[#00873E] selection:text-white flex flex-col min-h-screen`}
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
