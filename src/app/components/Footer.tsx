import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, MessageCircle, ShieldCheck, Globe } from 'lucide-react';

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
    <footer className="bg-[#020604] text-white pt-24 pb-12 border-t border-white/[0.08] relative z-30 architect-grid">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3.5 mb-5 group">
              <div className="bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Image src="/arg_logo.png" alt="ARG Registrars Pakistan Logo" width={44} height={44} className="w-9 h-9 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-wider text-white">ARG REGISTRARS</span>
                <span className="font-sans text-[10px] tracking-[0.28em] text-[#34D399] font-bold">PAKISTAN</span>
              </div>
            </Link>
            <div className="text-[#34D399] font-sans italic font-medium text-xs tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#00873E]" />
              Accredited International Certification Registrars
            </div>
            <p className="text-gray-400 font-sans leading-relaxed text-xs font-light mb-6">
              Delivering accredited ISO management certifications, C-TPAT security compliance, and comprehensive technical factory audits across international supply chains.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-sans">
              <Globe size={14} className="text-[#34D399]" />
              <span>argregistrars.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400 font-sans text-xs">
              <li><Link href="/" className="hover:text-[#34D399] transition-colors inline-block">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#34D399] transition-colors inline-block">About ARG Registrars</Link></li>
              <li><Link href="/services" className="hover:text-[#34D399] transition-colors inline-block">ISO Certifications</Link></li>
              <li><Link href="/audits" className="hover:text-[#34D399] transition-colors inline-block">Technical &amp; C-TPAT Audits</Link></li>
              <li><Link href="/contact" className="hover:text-[#34D399] transition-colors inline-block">Contact &amp; Offices</Link></li>
            </ul>
          </div>

          {/* Standards Scope */}
          <div>
            <h3 className="font-display font-bold text-base mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Accredited Scopes
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400 font-sans text-xs">
              <li><Link href="/#accreditations" className="hover:text-[#34D399] transition-colors">ISO 9001:2015 (Quality QMS)</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#34D399] transition-colors">ISO 14001:2015 (Environmental EMS)</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#34D399] transition-colors">ISO 45001:2018 (Health &amp; Safety)</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#34D399] transition-colors">C-TPAT Supply Chain Security</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#34D399] transition-colors">Technical Audits &amp; SQF Standards</Link></li>
            </ul>
          </div>

          {/* Offices & Contact Details */}
          <div>
            <h3 className="font-display font-bold text-base mb-6 text-white tracking-wide border-b border-white/10 pb-2">
              Corporate Offices
            </h3>
            <ul className="flex flex-col gap-4 text-gray-300 font-sans text-xs">
              {/* Head Office */}
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#34D399] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">Head Office (Riyadh, KSA):</strong>
                  <span className="text-gray-400 leading-relaxed text-[11px]">
                    Riverwalk Hussain Ibn Ali Road, Tawaan, Riyadh KSA.
                  </span>
                  <div className="mt-1">
                    <a href="tel:+966558004287" className="text-[#34D399] hover:underline font-semibold">+966 55 8004287</a>
                  </div>
                </div>
              </li>

              {/* Local Office */}
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#34D399] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">Local Office (Pakistan):</strong>
                  <span className="text-gray-400 leading-relaxed text-[11px]">
                    Plot No. 2118, Street No. 06, Johan Colony, Block E, Millat Road, Faisalabad.
                  </span>
                  <div className="mt-1">
                    <a href="tel:+9231459101614" className="text-[#34D399] hover:underline font-semibold">+92 314 59101614</a>
                  </div>
                </div>
              </li>

              {/* Email & WhatsApp */}
              <li className="flex items-center gap-2.5 pt-1 border-t border-white/10">
                <Mail size={14} className="text-[#34D399] shrink-0" />
                <a href="mailto:info@argregistrars.com" className="hover:text-[#34D399] transition-colors">
                  info@argregistrars.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={14} className="text-[#25D366] shrink-0" />
                <a href="https://wa.me/9231459101614" target="_blank" rel="noopener noreferrer" className="hover:text-[#34D399] transition-colors font-semibold">
                  WhatsApp: +92 314 59101614
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Certifications & Badges Row */}
        <div className="border-t border-white/[0.08] pt-8 pb-10">
          <div className="text-center text-xs font-display font-bold tracking-[0.25em] text-[#34D399] uppercase mb-6">
            Accredited Certification Frameworks &bull; Recognized Standards
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 max-w-5xl mx-auto items-center">
            {footerCertLogos.map((logo, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-2.5 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-9">
                  <Image src={logo.src} alt={logo.name} fill sizes="12vw" className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-sans gap-4">
          <p>&copy; {new Date().getFullYear()} ARG REGISTRARS PAKISTAN. All Rights Reserved. (argregistrars.com)</p>
          <div className="flex gap-6 items-center">
            <Link href="/privacy-policy" className="hover:text-[#34D399] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#34D399] transition-colors">Terms of Service</Link>
            <Link href="/admin/inquiries" className="hover:text-[#34D399] transition-colors font-mono text-[11px]">Registrar Portal</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
