'use client';






import CTASection from '../../components/CTASection';
import Hero from '../../components/hero';
import BackgroundAnimation from '../../components/background/BackgroundAnimation';
import TechnologySection from '../../components/TechnologySection';
import SeamlessSection from '../../components/SeamlessSection';
import AboutSection from '../../components/AboutSection';
import { LampDemo } from './lamp';
import { SparklesPreview } from './spark';


export default function Home() {


  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <BackgroundAnimation />


        {/* Hero Component */}

        <Hero />

      </section>


      {/* Technology Section as a component */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
      <TechnologySection />

      </section>





      {/* Seamless Section */}
      <SeamlessSection />


      {/* Lamp Demo Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <LampDemo />
      </section>

      {/* Sparkles Preview Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <SparklesPreview />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer is now in layout */}
    </main>
  );
}
