"use client";
import React, { useActionState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { sendEmail } from '../actions/sendEmail';

const appleEase: any = [0.16, 1, 0.3, 1];
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  return (
    <div className="flex flex-col min-h-screen bg-[#06150D] noise-bg">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#00873E]/15 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-950/60 rounded-full blur-[110px]"></div>
      </div>

      <section className="relative z-10 pt-40 pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-20">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-[#00873E]"></div>
              <h2 className="text-[#34D399] font-montserrat font-bold tracking-[0.25em] uppercase text-xs">
                ARG REGISTRARS &bull; CONTACT &amp; OFFICES
              </h2>
              <div className="h-[2px] w-10 bg-[#00873E]"></div>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight tracking-tight mb-6">
              Connect With Our Registrars.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 font-lato text-lg font-light">
              Inquire about accredited ISO management certifications, C-TPAT audits, or schedule an on-site facility evaluation.
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-stretch gap-12 max-w-6xl mx-auto">
            
            {/* INFO PANEL */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:w-1/3 flex flex-col gap-6">
              {/* Head Office */}
              <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-3xl saturate-200 border border-emerald-500/20 p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-[#00873E]/20 flex items-center justify-center mb-5">
                  <MapPin className="text-[#34D399]" size={22} />
                </div>
                <span className="text-[#34D399] text-xs font-montserrat font-bold uppercase tracking-wider block mb-1">Corporate Head Office</span>
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">Riyadh, KSA</h3>
                <p className="text-gray-300 font-lato text-sm leading-relaxed mb-4">
                  Riverwalk Hussain Ibn Ali Road, Tawaan, Riyadh KSA.
                </p>
                <div className="pt-2 border-t border-white/10 text-xs">
                  <span className="text-gray-400">Phone: </span>
                  <a href="tel:+966558004287" className="text-white hover:text-[#34D399] font-semibold transition-colors">+966 55 8004287</a>
                </div>
              </motion.div>

              {/* Local Office */}
              <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-3xl saturate-200 border border-emerald-500/20 p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-[#00873E]/20 flex items-center justify-center mb-5">
                  <MapPin className="text-[#34D399]" size={22} />
                </div>
                <span className="text-[#34D399] text-xs font-montserrat font-bold uppercase tracking-wider block mb-1">Local Operations Office</span>
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">Faisalabad, Pakistan</h3>
                <p className="text-gray-300 font-lato text-sm leading-relaxed mb-4">
                  Plot No. 2118, Street No. 06, Johan Colony, Block E, Millat Road, Faisalabad.
                </p>
                <div className="pt-2 border-t border-white/10 text-xs flex flex-col gap-1.5">
                  <div>
                    <span className="text-gray-400">Phone: </span>
                    <a href="tel:+9231459101614" className="text-white hover:text-[#34D399] font-semibold transition-colors">+92 314 59101614</a>
                  </div>
                  <div>
                    <a href="https://wa.me/9231459101614" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline flex items-center gap-1.5 font-semibold">
                      <MessageCircle size={14} />
                      WhatsApp: +92 314 59101614
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-3xl saturate-200 border border-emerald-500/20 p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-[#00873E]/20 flex items-center justify-center mb-5">
                  <Mail className="text-[#34D399]" size={22} />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">Official Email</h3>
                <p className="text-gray-300 font-lato text-sm break-all leading-relaxed">
                  <a href="mailto:info@argregistrars.com" className="hover:text-[#34D399] transition-colors block font-semibold text-white">
                    info@argregistrars.com
                  </a>
                  <a href="mailto:contact@argregistrars.com" className="hover:text-[#34D399] transition-colors block text-gray-400 mt-1">
                    contact@argregistrars.com
                  </a>
                </p>
              </motion.div>
            </motion.div>

            {/* FORM PANEL */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:w-2/3 flex flex-col">
              <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-3xl saturate-200 border border-emerald-500/20 p-10 md:p-14 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-between shadow-2xl">
                {state?.success ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12 h-full">
                    <CheckCircle2 className="text-[#34D399] w-20 h-20 mb-6" />
                    <h3 className="text-3xl font-montserrat font-bold text-white mb-4">Inquiry Received!</h3>
                    <p className="text-gray-300 font-lato text-base">Thank you for reaching out to ARG Registrars Pakistan. Our compliance team will review your scope and respond shortly.</p>
                  </motion.div>
                ) : (
                  <form action={formAction} className="flex flex-col justify-between flex-1 gap-6 md:gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-montserrat font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                        <input name="firstName" required type="text" className="bg-white/5 border-b-2 border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-lato" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-montserrat font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                        <input name="lastName" required type="text" className="bg-white/5 border-b-2 border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-lato" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-montserrat font-bold tracking-widest text-gray-400 uppercase">Company / Organization</label>
                        <input name="company" type="text" placeholder="Your Facility / Firm" className="bg-white/5 border-b-2 border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-lato placeholder:text-gray-600" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-montserrat font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
                        <input name="email" required type="email" className="bg-white/5 border-b-2 border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-lato" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-xs font-montserrat font-bold tracking-widest text-gray-400 uppercase">Certification Scope or Audit Message</label>
                      <textarea name="message" required placeholder="Specify standard(s): ISO 9001, ISO 14001, ISO 45001, C-TPAT, Technical Audit, etc." className="bg-white/5 border-b-2 border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-lato resize-none flex-1 min-h-[140px] placeholder:text-gray-600"></textarea>
                    </div>

                    {state?.error && (
                      <p className="text-red-400 text-sm font-lato">{state.error}</p>
                    )}

                    <div className="mt-2">
                      <button disabled={isPending} type="submit" className="group relative inline-flex items-center justify-center gap-4 bg-[#00873E] text-white rounded-full px-10 py-5 overflow-hidden transition-all duration-500 hover:bg-[#059669] shadow-xl w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed">
                        <span className="relative z-10 font-montserrat font-bold text-sm tracking-widest">
                          {isPending ? 'TRANSMITTING...' : 'SUBMIT AUDIT REQUEST'}
                        </span>
                        {!isPending && (
                          <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
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
