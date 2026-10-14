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
});

const bodyFont = Inter({
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precision Quality Services (PQS) | Making Compliance Real",
  description: "Accredited ISO 17025 laboratory verification, sustainability certifications (GOTS, GRS, ZDHC, PPWR, EN 15343), quality audits, and technical consultancy.",
  icons: {
    icon: '/favicon.png?v=2',
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
        className={`${headingFont.variable} ${bodyFont.variable} antialiased font-sans flex flex-col min-h-screen`}
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
