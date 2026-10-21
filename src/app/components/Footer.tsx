import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ShieldCheck, Globe } from 'lucide-react';
import { getFooterCertLogos } from '@/data/standards';

const footerCertLogos = getFooterCertLogos();

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 pt-24 pb-12 border-t border-slate-200 relative z-30 ">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3.5 mb-5 group">
              <div className="bg-white rounded-xl p-1.5 shadow-sm border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Image src="/arg_logo.png" alt="ARG Registrars Pakistan Logo" width={44} height={44} className="w-9 h-9 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-wider text-slate-900">ARG REGISTRARS</span>
                <span className="font-sans text-[10px] tracking-[0.28em] text-[#00873E] font-bold">PAKISTAN</span>
              </div>
            </Link>
            <div className="text-[#00873E] font-sans italic font-semibold text-xs tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#00873E]" />
              Accredited International Certification Registrars
            </div>
            <p className="text-slate-600 font-sans leading-relaxed text-xs font-light mb-6">
              Delivering accredited ISO management certifications, C-TPAT security compliance, and comprehensive technical factory audits across international supply chains.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600 font-sans font-medium">
              <Globe size={14} className="text-[#00873E]" />
              <span>argregistrars.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base mb-6 text-slate-900 tracking-wide border-b border-slate-200 pb-2">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-slate-600 font-sans text-xs">
              <li><Link href="/" className="hover:text-[#00873E] transition-colors inline-block font-medium">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#00873E] transition-colors inline-block font-medium">About ARG Registrars</Link></li>
              <li><Link href="/services" className="hover:text-[#00873E] transition-colors inline-block font-medium">ISO Certifications</Link></li>
              <li><Link href="/audits" className="hover:text-[#00873E] transition-colors inline-block font-medium">Technical &amp; C-TPAT Audits</Link></li>
              <li><Link href="/contact" className="hover:text-[#00873E] transition-colors inline-block font-medium">Contact &amp; Offices</Link></li>
            </ul>
          </div>

          {/* Standards Scope */}
          <div>
            <h3 className="font-display font-bold text-base mb-6 text-slate-900 tracking-wide border-b border-slate-200 pb-2">
              Accredited Scopes
            </h3>
            <ul className="flex flex-col gap-3 text-slate-600 font-sans text-xs">
              <li><Link href="/#accreditations" className="hover:text-[#00873E] transition-colors font-medium">ISO 9001:2026 (Quality QMS)</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#00873E] transition-colors font-medium">ISO 14001:2015 (Environmental EMS)</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#00873E] transition-colors font-medium">ISO 45001:2018 (Health &amp; Safety)</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#00873E] transition-colors font-medium">C-TPAT Supply Chain Security</Link></li>
              <li><Link href="/#accreditations" className="hover:text-[#00873E] transition-colors font-medium">Technical Audits &amp; SQF Standards</Link></li>
            </ul>
          </div>

          {/* Offices & Contact Details */}
          <div>
            <h3 className="font-display font-bold text-base mb-6 text-slate-900 tracking-wide border-b border-slate-200 pb-2">
              Corporate Offices
            </h3>
            <ul className="flex flex-col gap-4 text-slate-700 font-sans text-xs">
              {/* Head Office */}
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#00873E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-display">Head Office (Riyadh, KSA):</strong>
                  <span className="text-slate-600 leading-relaxed text-[11px]">
                    Riverwalk Hussain Ibn Ali Road, Tawaan, Riyadh KSA.
                  </span>
                  <div className="mt-1">
                    <a href="tel:+966558004287" className="text-[#00873E] hover:underline font-semibold">+966 55 8004287</a>
                  </div>
                </div>
              </li>

              {/* Local Office */}
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#00873E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-display">Local Office (Pakistan):</strong>
                  <span className="text-slate-600 leading-relaxed text-[11px]">
                    Plot No. 2118, Street No. 06, Johan Colony, Block E, Millat Road, Faisalabad.
                  </span>
                  <div className="mt-1">
                    <a href="tel:+9231459101614" className="text-[#00873E] hover:underline font-semibold">+92 314 59101614</a>
                  </div>
                </div>
              </li>

              {/* Corporate Communication */}
              <li className="flex items-center gap-2.5 pt-1 border-t border-slate-200">
                <Mail size={14} className="text-[#00873E] shrink-0" />
                <a href="mailto:info@argregistrars.com" className="hover:text-[#00873E] transition-colors font-medium">
                  info@argregistrars.com
                </a>
              </li>
              
            </ul>
          </div>

        </div>

        {/* Global Certifications & Badges Row */}
        <div className="border-t border-slate-200 pt-8 pb-10">
          <div className="text-center text-xs font-display font-bold tracking-[0.25em] text-[#00873E] uppercase mb-6">
            Accredited Certification Frameworks &bull; Recognized Standards
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 max-w-6xl mx-auto items-center">
            {footerCertLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl p-2.5 flex items-center justify-center shadow-xs hover:shadow-md hover:scale-105 transition-all duration-300 w-full h-[58px]"
              >
                <div className="relative w-full h-9">
                  <Image src={logo.src} alt={logo.name} fill sizes="(max-width: 768px) 50vw, 15vw" className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-sans gap-4">
          <p>&copy; {new Date().getFullYear()} ARG REGISTRARS PAKISTAN. All Rights Reserved. (argregistrars.com)</p>
          <div className="flex gap-6 items-center">
            <Link href="/privacy-policy" className="hover:text-[#00873E] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#00873E] transition-colors">Terms of Service</Link>
            <Link href="/admin/inquiries" className="hover:text-[#00873E] transition-colors font-mono text-[11px]">Registrar Portal</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
