"use client";
import React, { useActionState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { sendEmail } from '../actions/sendEmail';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  return (
    <div className="flex flex-col min-h-screen bg-pqs-dark noise-bg">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-pqs-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-pqs-navy/50 rounded-full blur-[100px]"></div>
      </div>

      <section className="relative z-10 pt-40 pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-20">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-pqs-gold"></div>
              <h2 className="text-pqs-gold font-montserrat font-bold tracking-[0.3em] uppercase text-xs">GET IN TOUCH</h2>
              <div className="h-[2px] w-12 bg-pqs-gold"></div>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight mb-6">
              Let's Discuss Your Quality Goals.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-400 font-lato text-lg">
              Reach out to us to discover how PQS can elevate your textile manufacturing process.
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-stretch gap-12 max-w-6xl mx-auto">
            
            {/* INFO PANEL */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:w-1/3 flex flex-col gap-6">
              <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-3xl saturate-200 border border-white/20 p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-pqs-gold/20 flex items-center justify-center mb-6">
                  <Phone className="text-pqs-gold" size={20} />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 font-lato leading-relaxed">
                  <a href="tel:03112226714" className="hover:text-pqs-gold transition-colors">0311-2226714</a><br />
                  <a href="tel:03322673373" className="hover:text-pqs-gold transition-colors">0332-2673373</a><br />
                  <a href="https://wa.me/923009260495" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 mt-1">
                    WhatsApp: 0300-9260495
                  </a>
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-3xl saturate-200 border border-white/20 p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-pqs-gold/20 flex items-center justify-center mb-6">
                  <Mail className="text-pqs-gold" size={20} />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 font-lato break-all">
                  <a href="mailto:precisionqualityserviceslabs@gmail.com" className="hover:text-pqs-gold transition-colors">
                    precisionqualityserviceslabs@gmail.com
                  </a>
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-3xl saturate-200 border border-white/20 p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-pqs-gold/20 flex items-center justify-center mb-6">
                  <MapPin className="text-pqs-gold" size={20} />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300 font-lato leading-relaxed">
                  R-332/9, Dastagir, F.B Area,<br />Karachi, 75950, Pakistan.
                </p>
              </motion.div>
            </motion.div>

            {/* FORM PANEL */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:w-2/3 flex flex-col">
              <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-3xl saturate-200 border border-white/20 p-10 md:p-14 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-between">
                {state?.success ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12 h-full">
                    <CheckCircle2 className="text-pqs-gold w-20 h-20 mb-6" />
                    <h3 className="text-3xl font-montserrat font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-400 font-lato text-lg">Thank you for reaching out. We will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form action={formAction} className="flex flex-col justify-between flex-1 gap-6 md:gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-montserrat font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                        <input name="firstName" required type="text" className="bg-white/5 border-b-2 border-white/10 focus:border-pqs-gold text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-lato" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-montserrat font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                        <input name="lastName" required type="text" className="bg-white/5 border-b-2 border-white/10 focus:border-pqs-gold text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-lato" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-montserrat font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
                      <input name="email" required type="email" className="bg-white/5 border-b-2 border-white/10 focus:border-pqs-gold text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-lato" />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-xs font-montserrat font-bold tracking-widest text-gray-400 uppercase">Your Message</label>
                      <textarea name="message" required className="bg-white/5 border-b-2 border-white/10 focus:border-pqs-gold text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-lato resize-none flex-1 min-h-[160px]"></textarea>
                    </div>

                    {state?.error && (
                      <p className="text-red-400 text-sm font-lato">{state.error}</p>
                    )}

                    <div className="mt-2">
                      <button disabled={isPending} type="submit" className="group relative inline-flex items-center justify-center gap-4 bg-pqs-gold text-pqs-navy rounded-full px-10 py-5 overflow-hidden transition-all duration-500 hover:bg-white shadow-xl w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed">
                        <span className="relative z-10 font-montserrat font-bold text-sm tracking-widest">
                          {isPending ? 'SENDING...' : 'SEND MESSAGE'}
                        </span>
                        {!isPending && (
                          <div className="relative z-10 w-8 h-8 rounded-full bg-pqs-navy/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <ArrowRight size={16} className="text-pqs-navy group-hover:translate-x-1 transition-transform" />
                          </div>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
