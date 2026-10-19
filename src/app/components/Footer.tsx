import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Globe } from 'lucide-react';

const footerCertLogos = [
  { name: "ISO 9001 Quality Management", src: "/certifications/card/iso-9001.png" },
  { name: "ISO 14001 Environmental Management", src: "/certifications/card/iso-14001.jpg" },
  { name: "ISO 45001 Health & Safety", src: "/certifications/card/iso-45001.jpg" },
  { name: "C-TPAT Supply Chain Security", src: "/certifications/card/ctpat.jpg" },
  { name: "Technical Audit Certified", src: "/certifications/card/technical-audit.png" },
  { name: "FSNS Quality Standards", src: "/certifications/card/fsns-sqf.png" },
  { name: "ISO 17025 Laboratory Testing", src: "/certifications/card/iso_17025.png" },
  { name: "CE Marking Conformity", src: "/certifications/card/ce_marking.png" }
];

export default function Footer() {
  return (
    <footer className="bg-[#040E08] text-white pt-20 pb-12 border-t-[4px] border-[#00873E] relative z-30">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3.5 mb-5 group">
              <div className="bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center shrink-0">
                <Image src="/arg_logo.png" alt="ARG Registrars Pakistan Logo" width={48} height={48} className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-black text-lg tracking-wider text-white">ARG REGISTRARS</span>
                <span className="font-montserrat text-xs tracking-[0.25em] text-[#34D399] font-bold">PAKISTAN</span>
              </div>
            </Link>
            <div className="text-[#34D399] font-montserrat italic font-medium text-xs tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#00873E]" />
              Accredited Global Certification &amp; Auditing Registrars
            </div>
            <p className="text-gray-400 font-lato leading-relaxed text-xs font-light mb-6">
              ARG Registrars Pakistan provides accredited ISO management certifications, C-TPAT security compliance, comprehensive technical audits, and international registrar verification across global manufacturing and supply chains.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-montserrat">
              <Globe size={14} className="text-[#00873E]" />
              <span>argregistrars.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-base mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400 font-lato text-sm">
              <li><Link href="/" className="hover:text-[#34D399] transition-colors inline-block">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#34D399] transition-colors inline-block">About ARG Registrars</Link></li>
              <li><Link href="/services" className="hover:text-[#34D399] transition-colors inline-block">ISO Certifications</Link></li>
              <li><Link href="/audits" className="hover:text-[#34D399] transition-colors inline-block">Technical &amp; C-TPAT Audits</Link></li>
              <li><Link href="/contact" className="hover:text-[#34D399] transition-colors inline-block">Contact &amp; Offices</Link></li>
            </ul>
          </div>

          {/* Standards Scope */}
          <div>
            <h3 className="font-montserrat font-bold text-base mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Accredited Scopes
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400 font-lato text-sm">
              <li><Link href="/#accreditations" className="hover:text-[#34D399] transition-colors">ISO 9001:2015 (Quality QMS)</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#34D399] transition-colors">ISO 14001 (Environmental EMS)</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#34D399] transition-colors">ISO 45001 (Occupational OHSMS)</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#34D399] transition-colors">C-TPAT Supply Chain Security</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#34D399] transition-colors">Technical Audits &amp; SQF Standards</Link></li>
            </ul>
          </div>

          {/* Offices & Contact Details */}
          <div>
            <h3 className="font-montserrat font-bold text-base mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Corporate Offices
            </h3>
            <ul className="flex flex-col gap-4 text-gray-300 font-lato text-xs">
              {/* Head Office */}
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#34D399] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-montserrat">Head Office (Riyadh, KSA):</strong>
                  <span className="text-gray-400 leading-relaxed">
                    Riverwalk Hussain Ibn Ali Road, Tawaan, Riyadh KSA.
                  </span>
                  <div className="mt-1">
                    <a href="tel:+966558004287" className="text-[#34D399] hover:underline">+966 55 8004287</a>
                  </div>
                </div>
              </li>

              {/* Local Office */}
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#34D399] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-montserrat">Local Office (Pakistan):</strong>
                  <span className="text-gray-400 leading-relaxed">
                    Plot No. 2118, Street No. 06, Johan Colony, Block E, Millat Road, Faisalabad, Pakistan.
                  </span>
                  <div className="mt-1">
                    <a href="tel:+9231459101614" className="text-[#34D399] hover:underline">+92 314 59101614</a>
                  </div>
                </div>
              </li>

              {/* Email & WhatsApp */}
              <li className="flex items-center gap-2.5 pt-1 border-t border-white/10">
                <Mail size={15} className="text-[#34D399] shrink-0" />
                <a href="mailto:info@argregistrars.com" className="hover:text-[#34D399] transition-colors">
                  info@argregistrars.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={15} className="text-[#25D366] shrink-0" />
                <a href="https://wa.me/9231459101614" target="_blank" rel="noopener noreferrer" className="hover:text-[#34D399] transition-colors">
                  WhatsApp: +92 314 59101614
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Certifications & Badges Row */}
        <div className="border-t border-white/10 pt-8 pb-10">
          <div className="text-center text-xs font-montserrat font-bold tracking-[0.2em] text-[#34D399] uppercase mb-6">
            Accredited Certification Frameworks &bull; International Standards
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 max-w-5xl mx-auto items-center">
            {footerCertLogos.map((logo, idx) => (
              <div key={idx} className="bg-white rounded-xl p-2 flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-10">
                  <Image src={logo.src} alt={logo.name} fill sizes="12vw" className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-gray-800/80 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs font-lato gap-4">
          <p>&copy; {new Date().getFullYear()} ARG REGISTRARS PAKISTAN. All Rights Reserved. (argregistrars.com)</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#34D399] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#34D399] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
