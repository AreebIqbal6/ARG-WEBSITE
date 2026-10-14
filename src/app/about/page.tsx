"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const team = [
  {
    name: "Syed Kashif Iqbal",
    role: "Business & Marketing Manager",
    phone: "0311-2226714",
    whatsapp: "0300-9260495",
    email: "kashifiqbalsyed3@gmail.com",
    focus: "Strategic partnerships, international buyer audit coordination, and compliance consulting."
  },
  {
    name: "Syed Muhammad Areeb Iqbal",
    role: "Business Development Officer",
    phone: "0332-2673373",
    whatsapp: "0332-2673373",
    email: "areeb.jpg@gmail.com",
    focus: "Client onboarding, laboratory testing scopes, regulatory standard assessments, and operational follow-ups."
  }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* HEADER */}
      <section className="relative h-[55vh] min-h-[440px] flex items-end pb-20 pt-32 overflow-hidden bg-pqs-dark">
        <div className="absolute inset-0 z-0 bg-[url('/unsplash_3.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-pqs-dark via-pqs-dark/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-pqs-gold"></div>
              <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs">
                WHO WE ARE &bull; PRECISION QUALITY SERVICES
              </h2>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight mb-4">
              Making Compliance Real.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-lg max-w-2xl font-light">
              Bridging the gap between factory-floor operations and international certification standards.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 relative z-30 overflow-hidden">
        {/* Stamp Watermark */}
        <div className="absolute top-[20%] left-[-20%] w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none -rotate-12 mix-blend-multiply">
           <img src="/stamp.png" alt="PQS Stamp" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pqs-navy/5 text-pqs-navy font-montserrat font-bold text-xs uppercase tracking-wider mb-6">
                <Award size={15} className="text-pqs-gold" />
                <span>Our Philosophy</span>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-montserrat font-black text-pqs-navy mb-8 leading-tight">
                Rooted in the real challenges of the factory floor.
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg leading-relaxed mb-6 font-light">
                Precision Quality Services (PQS) is a specialized quality compliance, laboratory testing coordination, and technical consultancy firm. We help textile manufacturers, chemical process houses, and packaging producers align with global standards.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-gray-600 font-lato text-lg leading-relaxed mb-10 font-light">
                We avoid boardroom theory. Our experts dive directly into the machinery, materials, laboratory results, and compliance metrics to establish reliable zero-defect systems that endure.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-pqs-navy text-white rounded-full px-8 py-4 overflow-hidden transition-all duration-500 hover:bg-pqs-gold hover:text-pqs-navy shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <span className="relative z-10 font-montserrat font-bold text-xs md:text-sm tracking-widest">CONNECT WITH US</span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <a 
                  href="https://wa.me/923009260495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white border border-gray-200 text-pqs-navy font-montserrat font-bold text-xs md:text-sm tracking-wider px-8 py-4 rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-sm"
                >
                  <span>WHATSAPP DESK</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <motion.div variants={fadeInUp} className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-[url('/unsplash_0.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-1000"></div>
                </motion.div>
                <motion.div variants={fadeInUp} className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl translate-y-12">
                  <div className="w-full h-full bg-[url('/microscope.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-1000"></div>
                </motion.div>
              </div>
            </motion.div>

          </div>

          {/* Key Management / Leadership */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-5%" }} 
            variants={staggerContainer} 
            className="mt-32 pt-16 border-t border-gray-200"
          >
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pqs-navy/5 text-pqs-navy font-montserrat font-bold text-xs uppercase tracking-wider mb-4">
                <Users size={15} className="text-pqs-gold" />
                <span>Executive Leadership</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-montserrat font-black text-pqs-navy mb-4">
                Dedicated Compliance Experts
              </h3>
              <p className="text-gray-600 font-lato text-base font-light">
                Direct access to our senior leadership ensuring personal accountability and rapid turnaround.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {team.map((member, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-pqs-gold/40 transition-all duration-300"
                >
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-montserrat font-black text-pqs-navy mb-1 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      {member.name}
                    </h4>
                    <div className="text-pqs-gold font-montserrat font-bold text-xs uppercase tracking-wider mb-4">{member.role}</div>
                    <p className="text-gray-600 font-lato text-sm leading-relaxed mb-6 font-light">{member.focus}</p>
                  </div>

                  <div className="border-t border-gray-100 pt-5 flex flex-col gap-2 text-xs font-lato text-gray-700">
                    <div><strong>Direct:</strong> <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="text-pqs-navy hover:text-pqs-gold font-semibold">{member.phone}</a></div>
                    <div><strong>WhatsApp:</strong> <a href={`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, '').replace(/^0/, '92')}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-semibold">{member.whatsapp}</a></div>
                    <div><strong>Email:</strong> <a href={`mailto:${member.email}`} className="text-pqs-navy hover:text-pqs-gold font-semibold">{member.email}</a></div>
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
