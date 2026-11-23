"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShieldCheck, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CertificateVerifyModal from './ui/CertificateVerifyModal';

export default function Header() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

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

  // Sleek, minimal dedicated header for administrative routes (No public links, no CTA buttons)
  if (isAdmin) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 px-4 lg:px-8 shadow-xs">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white rounded-xl p-1 border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
              <Image src="/arg_logo.png" alt="ARG Registrars" width={32} height={32} className="w-7 h-7 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm tracking-wider text-slate-900">ARG REGISTRARS</span>
              <span className="font-mono text-[9px] tracking-wider text-[#00873E] font-bold uppercase">ADMINISTRATIVE DESK</span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-sans font-semibold text-xs border border-slate-200 transition-all shadow-xs"
          >
            <span>&larr; Return to Public Website</span>
          </Link>
        </div>
      </header>
    );
  }

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
            <div className="bg-white rounded-xl p-1 shadow-xs border border-slate-200 flex items-center justify-center shrink-0">
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
              <span className="font-display font-bold text-sm md:text-base tracking-tight text-slate-900 leading-tight">
                ARG REGISTRARS
              </span>
              <span className="font-sans text-[9px] tracking-[0.24em] uppercase font-semibold text-[#00873E] leading-tight">
                PAKISTAN
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 font-sans font-medium text-xs tracking-normal text-slate-600">
            <Link href="/" className="hover:text-[#00873E] transition-colors duration-200 relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00873E] transition-all duration-200 group-hover:w-full rounded-full"></span>
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
                className="flex items-center gap-1.5 hover:text-[#00873E] transition-colors duration-200 relative group cursor-pointer"
                onClick={() => setServicesDropdownOpen(false)}
              >
                <span>Services</span>
                <ChevronDown size={13} className={`transition-transform duration-200 text-[#00873E] ${servicesDropdownOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00873E] transition-all duration-200 group-hover:w-full rounded-full"></span>
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
                
                <div className="rounded-2xl p-2.5 flex flex-col gap-1 shadow-lg border border-slate-200 bg-white/98 backdrop-blur-xl">
                  <Link 
                    href="/services" 
                    onClick={() => setServicesDropdownOpen(false)} 
                    className="text-slate-700 hover:text-[#00873E] hover:bg-emerald-50/80 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors block cursor-pointer"
                  >
                    All Certification Services
                  </Link>
                  <Link 
                    href="/services#iso-systems" 
                    onClick={() => setServicesDropdownOpen(false)} 
                    className="text-slate-700 hover:text-[#00873E] hover:bg-emerald-50/80 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors block cursor-pointer"
                  >
                    ISO 9001 / 14001 / 45001
                  </Link>
                  <Link 
                    href="/services#ctpat-security" 
                    onClick={() => setServicesDropdownOpen(false)} 
                    className="text-slate-700 hover:text-[#00873E] hover:bg-emerald-50/80 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors block cursor-pointer"
                  >
                    C-TPAT Supply Chain Audits
                  </Link>
                  <Link 
                    href="/services#technical-audits" 
                    onClick={() => setServicesDropdownOpen(false)} 
                    className="text-slate-700 hover:text-[#00873E] hover:bg-emerald-50/80 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors block cursor-pointer"
                  >
                    Factory Technical Evaluations
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/audits" className="hover:text-[#00873E] transition-colors duration-200 relative group py-2">
              Audits
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00873E] transition-all duration-200 group-hover:w-full rounded-full"></span>
            </Link>
            <Link href="/about" className="hover:text-[#00873E] transition-colors duration-200 relative group py-2">
              About us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00873E] transition-all duration-200 group-hover:w-full rounded-full"></span>
            </Link>
            <Link href="/contact" className="hover:text-[#00873E] transition-colors duration-200 relative group py-2">
              Offices &amp; Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00873E] transition-all duration-200 group-hover:w-full rounded-full"></span>
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsVerifyOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium font-sans text-xs transition-colors duration-150 text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <ShieldCheck size={14} className="text-[#00873E]" />
              <span>Verify certificate</span>
            </button>

            <Link 
              href="/schedule" 
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold font-sans text-xs transition-colors duration-150 bg-[#00873E] hover:bg-[#007536] text-white shadow-xs active:scale-[0.98]"
            >
              <span>Get quote</span>
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
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed top-[80px] left-0 right-0 bottom-0 bg-white border-t border-slate-200 text-slate-800 flex flex-col items-center justify-start py-8 px-6 gap-5 font-sans z-50 overflow-y-auto shadow-xl"
          >
            <Link href="/" className="text-base font-medium text-slate-900 hover:text-[#00873E] transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-base font-medium text-slate-900 hover:text-[#00873E] transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/audits" className="text-base font-medium text-slate-900 hover:text-[#00873E] transition-colors" onClick={() => setMobileMenuOpen(false)}>Audits</Link>
            <Link href="/about" className="text-base font-medium text-slate-900 hover:text-[#00873E] transition-colors" onClick={() => setMobileMenuOpen(false)}>About us</Link>
            <Link href="/contact" className="text-base font-medium text-slate-900 hover:text-[#00873E] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <div className="flex flex-col gap-2.5 w-full max-w-xs mt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsVerifyOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 cursor-pointer shadow-xs active:scale-[0.98]"
              >
                <ShieldCheck size={15} className="text-[#00873E]" />
                <span>Verify certificate</span>
              </button>
              <Link 
                href="/schedule" 
                className="w-full text-center px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors bg-[#00873E] text-white hover:bg-[#007536] shadow-xs active:scale-[0.98]" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule an audit
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
