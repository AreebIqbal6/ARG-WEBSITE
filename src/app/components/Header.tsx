"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CertificateVerifyModal from './ui/CertificateVerifyModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 rounded-full px-5 md:px-7 py-3 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.1)]' 
            : 'bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-[0_4px_25px_-4px_rgba(15,23,42,0.06)]'
        }`}>
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="bg-white rounded-xl p-1 shadow-sm border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/arg_logo.png" 
                alt="ARG Registrars Pakistan Logo" 
                width={36} 
                height={36} 
                className="object-contain w-8 h-8"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm md:text-base tracking-wider text-slate-900 leading-tight">
                ARG REGISTRARS
              </span>
              <span className="font-sans text-[9px] tracking-[0.28em] uppercase font-bold text-[#00873E] leading-tight">
                PAKISTAN
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-sans font-semibold text-xs tracking-wider text-slate-600">
            <Link href="/" className="hover:text-[#00873E] transition-colors duration-300 relative group py-2">
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00873E] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            
            <div 
              className="group relative flex items-center py-2"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                setServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setServicesDropdownOpen(false);
                }, 200);
              }}
            >
              <Link 
                href="/services" 
                className="flex items-center gap-1.5 hover:text-[#00873E] transition-colors duration-300 relative group cursor-pointer"
                onClick={() => setServicesDropdownOpen(false)}
              >
                <span>SERVICES</span>
                <ChevronDown size={13} className={`transition-transform duration-300 text-[#00873E] ${servicesDropdownOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00873E] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              
              {/* Dropdown menu with hover bridge */}
              <div 
                className={`absolute top-full left-0 pt-2 w-72 z-[60] transition-all duration-200 ${
                  servicesDropdownOpen 
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto' 
                    : 'opacity-0 invisible translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto'
                }`}
              >
                {/* Invisible hover bridge connecting trigger to dropdown */}
                <div className="absolute -top-2 left-0 right-0 h-3 pointer-events-auto" />
                
                <div className="rounded-2xl p-2.5 flex flex-col gap-1 shadow-[0_20px_45px_rgba(15,23,42,0.15)] border border-slate-200 bg-white/98 backdrop-blur-xl">
                  <Link 
                    href="/services" 
                    onClick={() => setServicesDropdownOpen(false)} 
                    className="text-slate-700 hover:text-[#00873E] hover:bg-emerald-50/80 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all block cursor-pointer"
                  >
                    All Certification Services
                  </Link>
                  <Link 
                    href="/services#iso-systems" 
                    onClick={() => setServicesDropdownOpen(false)} 
                    className="text-slate-700 hover:text-[#00873E] hover:bg-emerald-50/80 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all block cursor-pointer"
                  >
                    ISO 9001 / 14001 / 45001
                  </Link>
                  <Link 
                    href="/services#ctpat-security" 
                    onClick={() => setServicesDropdownOpen(false)} 
                    className="text-slate-700 hover:text-[#00873E] hover:bg-emerald-50/80 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all block cursor-pointer"
                  >
                    C-TPAT Supply Chain Audits
                  </Link>
                  <Link 
                    href="/services#technical-audits" 
                    onClick={() => setServicesDropdownOpen(false)} 
                    className="text-slate-700 hover:text-[#00873E] hover:bg-emerald-50/80 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all block cursor-pointer"
                  >
                    Factory Technical Evaluations
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/audits" className="hover:text-[#00873E] transition-colors duration-300 relative group py-2">
              AUDITS
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00873E] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link href="/about" className="hover:text-[#00873E] transition-colors duration-300 relative group py-2">
              ABOUT US
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00873E] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link href="/contact" className="hover:text-[#00873E] transition-colors duration-300 relative group py-2">
              OFFICES &amp; CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00873E] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsVerifyOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold font-sans text-xs tracking-wider transition-all duration-300 text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 cursor-pointer shadow-xs"
            >
              <ShieldCheck size={14} className="text-[#00873E]" />
              <span>VERIFY CERTIFICATE</span>
            </button>

            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold font-sans text-xs tracking-wider transition-all duration-300 bg-gradient-to-r from-[#00873E] to-[#059669] text-white hover:shadow-[0_4px_20px_rgba(0,135,62,0.4)] hover:scale-105"
            >
              <span>GET QUOTE</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-800 hover:text-[#00873E] transition-colors relative z-50 cursor-pointer" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed top-[80px] left-0 right-0 bottom-0 bg-white border-t border-slate-200 text-slate-800 flex flex-col items-center justify-start py-8 px-6 gap-6 font-sans z-50 overflow-y-auto shadow-2xl"
          >
            <Link href="/" className="text-base font-bold tracking-widest text-slate-900 hover:text-[#00873E] transition-colors" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            <Link href="/services" className="text-base font-bold tracking-widest text-slate-900 hover:text-[#00873E] transition-colors" onClick={() => setMobileMenuOpen(false)}>SERVICES</Link>
            <Link href="/audits" className="text-base font-bold tracking-widest text-slate-900 hover:text-[#00873E] transition-colors" onClick={() => setMobileMenuOpen(false)}>AUDITS</Link>
            <Link href="/about" className="text-base font-bold tracking-widest text-slate-900 hover:text-[#00873E] transition-colors" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
            <Link href="/contact" className="text-base font-bold tracking-widest text-slate-900 hover:text-[#00873E] transition-colors" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            <div className="flex flex-col gap-3 w-full max-w-xs mt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsVerifyOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 cursor-pointer"
              >
                <ShieldCheck size={15} className="text-[#00873E]" />
                <span>VERIFY CERTIFICATE</span>
              </button>
              <Link 
                href="/contact" 
                className="w-full text-center px-7 py-3 rounded-xl font-bold text-xs tracking-widest transition-all bg-[#00873E] text-white hover:bg-[#059669] shadow-[0_4px_16px_rgba(0,135,62,0.3)]" 
                onClick={() => setMobileMenuOpen(false)}
              >
                REQUEST AN AUDIT
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Official Certificate Verification Modal */}
      <CertificateVerifyModal
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
      />
    </header>
  );
}
