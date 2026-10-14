import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const footerCertLogos = [
  { name: "ISO 17025", src: "/certifications/card/iso_17025.png" },
  { name: "ISO 9001:2015", src: "/certifications/card/iso_9001_2015.png" },
  { name: "ZDHC", src: "/certifications/card/zdhc.png" },
  { name: "GOTS", src: "/certifications/card/gots.png" },
  { name: "GRS", src: "/certifications/card/grs.png" },
  { name: "PPWR", src: "/certifications/card/ppwr.png" },
  { name: "EN 15343", src: "/certifications/card/en_15343.png" },
  { name: "CE Marking", src: "/certifications/card/ce_marking.png" }
];

export default function Footer() {
  return (
    <footer className="bg-pqs-dark text-white pt-20 pb-12 border-t-[4px] border-pqs-gold relative z-30">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo_transparent_v2.png" alt="PQS Logo" width={220} height={40} className="h-auto" />
            </Link>
            <div className="text-pqs-gold font-montserrat italic font-medium text-sm tracking-wider mb-6">
              Making Compliance Real
            </div>
            <p className="text-gray-400 font-lato leading-relaxed text-sm font-light mb-6">
              Precision Quality Services (PQS) delivers accredited laboratory testing coordination, ISO management certifications, sustainability audits, and factory floor quality systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400 font-lato text-sm">
              <li><Link href="/" className="hover:text-pqs-gold transition-colors inline-block">Home</Link></li>
              <li><Link href="/about" className="hover:text-pqs-gold transition-colors inline-block">About PQS</Link></li>
              <li><Link href="/services" className="hover:text-pqs-gold transition-colors inline-block">Testing &amp; Services</Link></li>
              <li><Link href="/audits" className="hover:text-pqs-gold transition-colors inline-block">Quality Audits</Link></li>
              <li><Link href="/contact" className="hover:text-pqs-gold transition-colors inline-block">Contact &amp; Inquiries</Link></li>
            </ul>
          </div>

          {/* Services & Standards */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Compliance Scope
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400 font-lato text-sm">
              <li><Link href="/#accreditations" className="hover:text-pqs-gold transition-colors">ISO 17025 Lab Testing</Link></li>
              <li><Link href="/#accreditations" className="hover:text-pqs-gold transition-colors">ZDHC Chemical Management</Link></li>
              <li><Link href="/#accreditations" className="hover:text-pqs-gold transition-colors">GOTS &amp; GRS Organic/Recycled</Link></li>
              <li><Link href="/#accreditations" className="hover:text-pqs-gold transition-colors">PPWR &amp; EN 15343 Plastics</Link></li>
              <li><Link href="/#accreditations" className="hover:text-pqs-gold transition-colors">ISO 9001:2015 &amp; CE Marking</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Contact Desk
            </h3>
            <ul className="flex flex-col gap-3.5 text-gray-300 font-lato text-sm">
              <li className="flex items-start gap-3">
                <Phone size={17} className="text-pqs-gold shrink-0 mt-0.5" />
                <div>
                  <a href="tel:03112226714" className="hover:text-pqs-gold transition-colors">0311-2226714</a> &bull; <a href="tel:03322673373" className="hover:text-pqs-gold transition-colors">0332-2673373</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={17} className="text-[#25D366] shrink-0" />
                <a href="https://wa.me/923009260495" target="_blank" rel="noopener noreferrer" className="hover:text-pqs-gold transition-colors">
                  WhatsApp: 0300-9260495
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={17} className="text-pqs-gold shrink-0 mt-0.5" />
                <a href="mailto:precisionqualityserviceslabs@gmail.com" className="hover:text-pqs-gold transition-colors break-all">
                  precisionqualityserviceslabs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-pqs-gold shrink-0 mt-0.5" />
                <span className="text-gray-400 text-xs leading-relaxed">
                  R-332/9, Dastagir, F.B Area, Karachi, 75950, Pakistan.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Certifications Row */}
        <div className="border-t border-white/10 pt-8 pb-10">
          <div className="text-center text-xs font-montserrat font-bold tracking-[0.2em] text-gray-400 uppercase mb-5">
            Accredited Compliance Frameworks &bull; Recognized Standards
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-4xl mx-auto items-center">
            {footerCertLogos.map((logo, idx) => (
              <div key={idx} className="bg-white rounded-lg p-1.5 flex items-center justify-center shadow-sm">
                <div className="relative w-full h-8">
                  <Image src={logo.src} alt={logo.name} fill sizes="12vw" className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-gray-800/80 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-lato gap-4">
          <p>&copy; {new Date().getFullYear()} Precision Quality Services (PQS). All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-pqs-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-pqs-gold transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
