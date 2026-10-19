"use client";
import React from 'react';
import HeroSection from './components/home/HeroSection';
import AccreditationsSection from './components/home/AccreditationsSection';
import AuditJourney from './components/home/AuditJourney';
import ServicesCards from './components/home/ServicesCards';
import CaseStudiesBento from './components/home/CaseStudiesBento';
import SplitInfoSection from './components/home/SplitInfoSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import FaqSection from './components/home/FaqSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AccreditationsSection />
      <AuditJourney />
      <ServicesCards />
      <CaseStudiesBento />
      <SplitInfoSection />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}
