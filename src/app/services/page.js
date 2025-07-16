'use client';

import ServicesHero from '../../components/sections/services/hero.js';
import ServicesGrid from '../../components/sections/services/grid.js';
import ProcessSection from '../../components/sections/services/process.js';
import TechnologiesSection from '../../components/sections/services/technologies-simple.js';
import FeaturesSection from '../../components/sections/services/features.js';
import PowerfulFeaturesSection from '../../components/sections/services/powerful-features.js';
import EfficiencySection from '../../components/sections/services/efficiency.js';
import TestimonialsSection from '../../components/sections/services/testimonials.js';
import CTASection from '../../components/CTASection.js';
export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <FeaturesSection />
      <PowerfulFeaturesSection />
      <TechnologiesSection />
      <EfficiencySection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </main>
  );
}
