'use client';





import CTASection from '../components/CTASection';
import Hero from '../components/hero';
import BackgroundAnimation from '../components/background/BackgroundAnimation';
import Ballpit from '../components/background/Ballpit';
import TechnologySection from '../components/TechnologySection';
import Images from '../components/ui/images';
import { Particles } from '../components/ui/particles';
import Services from '../components/ourServices';

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
      <TechnologySection />



      {/* Services Section */}
      <Services />


      {/* Seamless Section */}
      <section id="seamless" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Seamless</span> Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Effortlessly connect your digital ecosystem with our robust integration solutions. We ensure your platforms, tools, and workflows work together in harmony for maximum efficiency and innovation.
            </p>
          </div>
          <div className="w-full relative mt-12">
            <Images.connect className="w-full h-auto" />
            <Particles
              className="absolute inset-0"
              quantity={150}
              ease={80}
              color="#e4e4e7"
              refresh
            />
          </div>
        </div>
      </section>


                
      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">DevSpire</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We are passionate about creating digital experiences that inspire and transform. Our team combines creativity with technical expertise to deliver solutions that exceed expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <span className="text-lg">Cutting-edge Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                  <span className="text-lg">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
                  <span className="text-lg">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">100+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">50+</div>
                    <div className="text-gray-300">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">5+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer is now in layout */}
    </main>
  );
}
