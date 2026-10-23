import React from 'react';
import { Hero } from '../components/Hero';
import { InteractiveSolar3D } from '../components/InteractiveSolar3D';
import { SolarCalculator } from '../components/SolarCalculator';
import { ServicesGrid } from '../components/ServicesGrid';
import { ComplianceHub } from '../components/ComplianceHub';
import { QuoteBuilder } from '../components/QuoteBuilder';
import { Testimonials } from '../components/Testimonials';
import { ServiceAreaMap } from '../components/ServiceAreaMap';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <InteractiveSolar3D />
      <SolarCalculator />
      <ServicesGrid />
      <ComplianceHub />
      <QuoteBuilder />
      <Testimonials />
      <ServiceAreaMap />
    </>
  );
};
