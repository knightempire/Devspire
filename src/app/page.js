'use client';





import CTASection from '../components/CTASection';
import Hero from '../components/hero';
import BackgroundAnimation from '../components/background/BackgroundAnimation';
import Ballpit from '../components/background/Ballpit';
import TechnologySection from '../components/TechnologySection';
import Images from '../components/ui/images';
import { Particles } from '../components/ui/particles';


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
      <section id="services" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to elevate your business to the next level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Services */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-glow">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-300 mb-6">
                Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Custom Web Applications</li>
                <li>• E-commerce Solutions</li>
                <li>• Progressive Web Apps</li>
                <li>• API Development</li>
              </ul>
            </div>

            {/* Mobile App Services */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-glow" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM8 4h4v10H8V4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
              <p className="text-gray-300 mb-6">
                Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• iOS Development</li>
                <li>• Android Development</li>
                <li>• React Native Apps</li>
                <li>• App Store Optimization</li>
              </ul>
            </div>

            {/* AI Services */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-glow" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• AI Chatbots</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


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