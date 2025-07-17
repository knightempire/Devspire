'use client';


import CTASection from '../../components/CTASection';
import Hero from '../../components/hero';
import BackgroundAnimation from '../../components/background/BackgroundAnimation';
import TechnologySection from '../../components/TechnologySection';
import SeamlessSection from '../../components/SeamlessSection';
import AboutSection from '../../components/AboutSection';
import { LampDemo } from './lamp';
import { SparklesPreview } from './spark';
import {SpotlightNewDemo} from './spotlightnew';
import { SpotlightPreview } from './splotlight';
import { PointerHighlightDemo } from './pointerhighkight';

import MagicBento from '../../components/ui/MagicBento';
import DarkVeil from '../../components/background/darkveli';
import RippleGrid from '../../components/background/ripplegrid';
import MacbookScrollDemo from './mac';

import Iridescence from '../../components/background/Iridescence';

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


      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
 <MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>

        <PointerHighlightDemo />
 
      </section>


      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <DarkVeil

  />
</div>

<div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
  <Iridescence
    color={[1, 1, 1]}
    mouseReact={false}
    amplitude={0.1}
    speed={1.0}
  />
</div>


<div style={{position: 'relative', height: '500px', overflow: 'hidden'}}>
  <RippleGrid
    enableRainbow={false}
    gridColor="#ffffff"
    rippleIntensity={0.05}
    gridSize={10}
    gridThickness={15}
    mouseInteraction={true}
    mouseInteractionRadius={1.2}
    opacity={0.8}
  />
</div>

<MacbookScrollDemo />

      {/* Seamless Section */}
      <SpotlightNewDemo
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, 1.00) 0, hsla(0, 0%, 100%, 1.00) 80%, hsla(210, 100%, 55%, 1.00) 95%, hsla(210, 100%, 45%, 0) 100%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, 1.00) 0, hsla(0, 0%, 100%, 1.00) 80%, hsla(210, 100%, 55%, 1.00) 98%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, 1.00) 0, hsla(0, 0%, 100%, 1.00) 80%, hsla(210, 100%, 45%, 1.00) 98%, transparent 100%)"
        width={900}
        duration={5}
      />

      <SpotlightPreview />
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
