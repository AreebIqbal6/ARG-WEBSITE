"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Award, MapPin, Phone, Mail, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const officeLocations = [
  {
    type: "Corporate Head Office",
    city: "Riyadh, Kingdom of Saudi Arabia",
    address: "Riverwalk Hussain Ibn Ali Road, Tawaan, Riyadh KSA.",
    phone: "+966 55 8004287",
    email: "info@argregistrars.com",
    role: "International registrar operations, GCC compliance oversight, and global buyer affiliations."
  },
  {
    type: "Local Operations Office",
    city: "Faisalabad, Pakistan",
    address: "Plot No. 2118, Street No. 06, Johan Colony, Block E, Millat Road, Faisalabad.",
    phone: "+92 314 59101614",
    email: "contact@argregistrars.com",
    role: "Factory floor auditing, ISO 9001/14001/45001 implementation, C-TPAT verification, and certification delivery."
  }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-800 architect-grid">
      
      {/* HEADER */}
      <section className="relative h-[60vh] min-h-[460px] flex items-end pb-20 pt-36 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 z-0 bg-[url('/images/corporate_headquarters.jpg')] bg-cover bg-center opacity-[0.06] mix-blend-luminosity scale-105"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/70 to-transparent"></div>
        <div className="emerald-aurora top-1/4 left-1/3 w-[600px] h-[350px] bg-[#00873E]/10" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase border-b border-slate-200 pb-2 max-w-full">
              <span className="text-[#00873E] font-bold">SEC. 02 //</span>
              <span className="text-slate-800 font-semibold">INSTITUTIONAL PROFILE</span>
              <span className="hidden sm:inline text-slate-400">&bull;</span>
              <span className="text-slate-500">ARG REGISTRARS</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 leading-tight tracking-tight mb-4">
              Certified Rigor. <br />
              <span className="text-[#00873E]">
                Global Trust.
              </span>
            </h1>
            <p className="text-slate-600 font-sans text-lg max-w-2xl font-light leading-relaxed">
              Delivering accredited ISO management certifications, C-TPAT security audits, and factory technical assessments across international supply chains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-28 relative z-30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase text-[#00873E] font-bold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00873E]" />
                <span>REGISTRAR PHILOSOPHY &amp; GOVERNANCE</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-8 leading-tight">
                Empowering businesses with recognized international accreditation.
              </h2>

              <p className="text-slate-600 font-sans text-base md:text-lg leading-relaxed mb-6 font-light">
                ARG Registrars Pakistan is a premier certification, auditing, and registrar body providing accredited conformity assessments. With deep technical competence in industrial manufacturing, textiles, plastics, and global exports, we evaluate and certify organizational management systems.
              </p>

              <p className="text-slate-600 font-sans text-base md:text-lg leading-relaxed mb-10 font-light">
                From our dual administrative hubs in Riyadh, KSA and Faisalabad, Pakistan, our qualified lead auditors conduct objective evaluations that fulfill buyer mandates and satisfy international regulatory standards.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-xs tracking-wider bg-gradient-to-r from-[#00873E] to-[#059669] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <span>VIEW ACCREDITED SCOPES</span>
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 bg-white text-slate-800 font-sans font-semibold text-xs tracking-wider px-8 py-4 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-all"
                >
                  <span>VIEW ACCREDITED SCOPES</span>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-slate-200 group shadow-xl">
                  <Image 
                    src="/images/corporate_headquarters.jpg" 
                    alt="Corporate registrar oversight" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-slate-200 translate-y-10 group shadow-xl">
                  <Image 
                    src="/images/lead_auditor_desk.jpg" 
                    alt="Auditing and conformity evaluation desk" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </motion.div>
              </div>
            </div>

          </div>

          {/* Regional Network Cards */}
          <div className="mt-36 pt-16 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#00873E] font-sans font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
                <MapPin size={14} />
                <span>Regional Network</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-4">
                Our Corporate Offices
              </h3>
              <p className="text-slate-600 font-sans text-sm font-light">
                Direct regional presence enabling rapid on-site audits, lead auditor deployment, and cross-border certification issuing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {officeLocations.map((office, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-8 flex flex-col justify-between border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40"
                >
                  <div>
                    <span className="text-[#00873E] font-sans font-bold text-xs uppercase tracking-wider block mb-1">
                      {office.type}
                    </span>
                    <h4 className="text-2xl font-display font-black text-slate-900 mb-3">
                      {office.city}
                    </h4>
                    <p className="text-slate-600 font-sans text-sm leading-relaxed mb-6 font-light">
                      {office.role}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-5 flex flex-col gap-3 text-xs font-sans text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={15} className="text-[#00873E] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone size={15} className="text-[#00873E] shrink-0" />
                      <span><strong>Telephone:</strong> <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-900 hover:text-[#00873E] font-semibold">{office.phone}</a></span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail size={15} className="text-[#00873E] shrink-0" />
                      <span><strong>Email:</strong> <a href={`mailto:${office.email}`} className="text-slate-900 hover:text-[#00873E] font-semibold">{office.email}</a></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
