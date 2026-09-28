// LandingPage composing Hero, Features, HowItWorks, and ClinicBanner
import React from 'react';
import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { HowItWorks } from '../components/landing/HowItWorks';
import { ClinicBanner } from '../components/landing/ClinicBanner';

export const LandingPage = () => {
  return (
    <div className="space-y-4">
      <Hero />
      <Features />
      <HowItWorks />
      <ClinicBanner />
    </div>
  );
};
