"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Users, MapPin, Phone, Mail, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

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
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* HEADER */}
      <section className="relative h-[55vh] min-h-[440px] flex items-end pb-20 pt-32 overflow-hidden bg-[#06150D]">
        <div className="absolute inset-0 z-0 bg-[url('/unsplash_3.jpg')] bg-cover bg-center opacity-25 mix-blend-luminosity"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#06150D] via-[#06150D]/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-[#00873E]"></div>
              <h2 className="text-[#34D399] font-montserrat font-bold tracking-[0.25em] uppercase text-xs">
                WHO WE ARE &bull; ARG REGISTRARS PAKISTAN
              </h2>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight mb-4">
              Certified Rigor. Global Trust.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-lg max-w-2xl font-light">
              Delivering accredited ISO management certifications, C-TPAT security audits, and factory technical assessments across international supply chains.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 relative z-30 overflow-hidden">
        {/* Stamp Watermark */}
        <div className="absolute top-[20%] left-[-15%] w-[800px] h-[800px] opacity-[0.03] pointer-events-none -rotate-12 mix-blend-multiply">
           <Image src="/arg_logo.png" alt="ARG Watermark" width={800} height={800} className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#00873E] font-montserrat font-bold text-xs uppercase tracking-wider mb-6">
                <Award size={15} className="text-[#00873E]" />
                <span>Our Registrar Philosophy</span>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-montserrat font-black text-[#06150D] mb-8 leading-tight">
                Empowering businesses with recognized international accreditation.
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg leading-relaxed mb-6 font-light">
                ARG Registrars Pakistan is a premier certification, auditing, and registrar body providing accredited conformity assessments. With deep technical competence in industrial manufacturing, textiles, plastics, and global exports, we evaluate and certify organizational management systems.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg leading-relaxed mb-10 font-light">
                From our dual administrative hubs in Riyadh, KSA and Faisalabad, Pakistan, our qualified lead auditors conduct objective evaluations that fulfill buyer mandates and satisfy international regulatory standards.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-[#00873E] text-white rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:bg-[#059669] shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <span className="relative z-10 font-montserrat font-bold text-xs md:text-sm tracking-widest">SCHEDULE AN AUDIT</span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <a 
                  href="https://wa.me/9231459101614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white border border-gray-200 text-[#06150D] font-montserrat font-bold text-xs md:text-sm tracking-wider px-8 py-4 rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-sm"
                >
                  <span>WHATSAPP DESK</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <motion.div variants={fadeInUp} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group border-2 border-white">
                  <Image 
                    src="/unsplash_0.jpg" 
                    alt="Factory quality inspection" 
                    fill 
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                </motion.div>
                <motion.div variants={fadeInUp} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl translate-y-12 group border-2 border-white">
                  <Image 
                    src="/microscope.jpg" 
                    alt="Auditing and testing verification" 
                    fill 
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                </motion.div>
              </div>
            </motion.div>

          </div>

          {/* Corporate Hubs & Operational Locations */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-5%" }} 
            variants={staggerContainer} 
            className="mt-32 pt-16 border-t border-gray-200"
          >
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#00873E] font-montserrat font-bold text-xs uppercase tracking-wider mb-4">
                <MapPin size={15} />
                <span>Regional Network</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-montserrat font-black text-[#06150D] mb-4">
                Our Corporate Offices
              </h3>
              <p className="text-gray-600 font-lato text-base font-light">
                Direct regional presence enabling rapid on-site audits, lead auditor deployment, and cross-border certification issuing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {officeLocations.map((office, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div>
                    <span className="text-[#00873E] font-montserrat font-bold text-xs uppercase tracking-wider block mb-1">
                      {office.type}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-montserrat font-black text-[#06150D] mb-3 tracking-tight">
                      {office.city}
                    </h4>
                    <p className="text-gray-600 font-lato text-sm leading-relaxed mb-6 font-light">
                      {office.role}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-5 flex flex-col gap-2.5 text-xs font-lato text-gray-700">
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-[#00873E] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-[#00873E] shrink-0" />
                      <span><strong>Telephone:</strong> <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-[#06150D] hover:text-[#00873E] font-semibold">{office.phone}</a></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-[#00873E] shrink-0" />
                      <span><strong>Email:</strong> <a href={`mailto:${office.email}`} className="text-[#06150D] hover:text-[#00873E] font-semibold">{office.email}</a></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
