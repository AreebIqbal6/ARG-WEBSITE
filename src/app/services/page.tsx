"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const services = [
  {
    title: "ISO 17025 Laboratory Testing & Verification",
    badge: "Testing & Calibration Competence",
    desc: "Rigorous testing protocols for physical textile parameters, chemical safety, fiber blend validation, and colorfastness. Testing reports accepted by international regulatory bodies and global retail brands.",
    img: "/microscope.jpg",
    deliverables: [
      "Physical and mechanical textile testing",
      "Chemical residue screening & fiber composition",
      "Accredited calibration and validated test reporting"
    ]
  },
  {
    title: "Chemical & Wastewater Management (ZDHC MRSL)",
    badge: "Roadmap to Zero Hazardous Chemicals",
    desc: "Complete implementation of the ZDHC Manufacturing Restricted Substances List (MRSL), chemical inventory management, and wastewater discharge verification for sustainable dyehouses and wet processing units.",
    img: "/unsplash_2.jpg",
    deliverables: [
      "ZDHC Gateway conformance & chemical inventory audits",
      "Wastewater and sludge testing protocols",
      "Safer chemical alternatives & root-cause substitution"
    ]
  },
  {
    title: "Sustainability & Traceability (GOTS & GRS)",
    badge: "Organic Fibers & Recycled Claim Standard",
    desc: "Comprehensive chain-of-custody advisory for Global Organic Textile Standard (GOTS) and Global Recycled Standard (GRS), ensuring full transparency and compliance from raw fiber to final garments.",
    img: "/threads.jpg",
    deliverables: [
      "Transaction Certificate (TC) documentation guidance",
      "Organic fiber integrity & non-contamination controls",
      "Recycled content mass balance and segregation audits"
    ]
  },
  {
    title: "Circular Plastics & Packaging (PPWR & EN 15343)",
    badge: "EU Circular Economy Compliance",
    desc: "Specialized auditing for post-consumer recycled plastic content and preparation for the European Union's Packaging and Packaging Waste Regulation (PPWR), establishing documented recycled content traceability.",
    img: "/unsplash_4.jpg",
    deliverables: [
      "EN 15343 traceability verification & chain-of-custody",
      "PPWR recyclability grading and reduction assessments",
      "Third-party audit technical file readiness"
    ]
  },
  {
    title: "Quality Management Systems (ISO 9001:2015 & CE)",
    badge: "Factory Performance & European Conformity",
    desc: "End-to-end consulting for ISO 9001:2015 QMS certification and CE marking technical files. We establish Standard Operating Procedures (SOPs), CAPA root-cause defect loops, and supplier audit frameworks.",
    img: "/loom.jpg",
    deliverables: [
      "ISO 9001:2015 gap analysis & internal auditor coaching",
      "CE marking technical documentation & essential safety reviews",
      "Corrective & Preventive Action (CAPA) tracking systems"
    ]
  },
  {
    title: "Factory-Floor Training & Defect Troubleshooting",
    badge: "Operational Excellence",
    desc: "Hands-on, floor-level training for quality inspectors, machine operators, and lab technicians. We teach practical root-cause analysis right at the machines to build sustainable zero-defect cultures.",
    img: "/inspector.jpg",
    deliverables: [
      "Real-time defect mapping and elimination",
      "Standard testing procedure hands-on training",
      "Statistical process control & yield improvement"
    ]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* HEADER */}
      <section className="relative h-[55vh] min-h-[440px] flex items-end pb-20 pt-32 overflow-hidden bg-pqs-dark">
        <div className="absolute inset-0 z-0 bg-[url('/unsplash_0.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-pqs-dark via-pqs-dark/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-pqs-gold"></div>
              <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs">
                WHAT WE DO &bull; MAKING COMPLIANCE REAL
              </h2>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight mb-4">
              Testing &amp; Compliance Services
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-lg max-w-2xl font-light">
              From accredited laboratory verification and ZDHC chemical protocols to GOTS/GRS sustainability standards and ISO 9001 systems.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 relative z-30 overflow-hidden">
        {/* Stamp Watermark */}
        <div className="absolute top-[30%] right-[-15%] w-[800px] h-[800px] opacity-[0.02] pointer-events-none rotate-[25deg] mix-blend-multiply">
           <img src="/stamp.png" alt="PQS Stamp" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="flex flex-col gap-24">
            
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group border border-gray-100">
                    <motion.div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                      style={{ backgroundImage: `url('${service.img}')` }}
                    />
                    <div className="absolute inset-0 bg-pqs-navy/15 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:px-8">
                  <div className="text-pqs-gold font-montserrat font-black text-6xl md:text-8xl opacity-20 mb-[-2rem] ml-[-1rem]">
                    0{index + 1}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pqs-navy/5 text-pqs-navy text-xs font-montserrat font-bold uppercase tracking-wider mb-3">
                    <ShieldCheck size={14} className="text-pqs-gold" />
                    <span>{service.badge}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-black text-pqs-navy mb-4 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 font-lato text-base md:text-lg leading-relaxed mb-6 font-light">
                    {service.desc}
                  </p>

                  <ul className="flex flex-col gap-3 mb-8">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-pqs-navy font-medium font-lato text-sm md:text-base">
                        <CheckCircle2 size={18} className="text-pqs-gold shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-3 text-xs md:text-sm font-bold font-montserrat tracking-widest text-white bg-pqs-navy px-6 py-3.5 rounded-full hover:bg-pqs-gold hover:text-pqs-navy transition-all shadow-md group"
                    >
                      <span>REQUEST QUOTATION</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={`https://wa.me/923009260495?text=Hello%20PQS,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-bold font-montserrat tracking-wider text-pqs-navy hover:text-emerald-600 transition-colors"
                    >
                      <MessageCircle size={17} className="text-emerald-500" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

    </div>
  );
}
