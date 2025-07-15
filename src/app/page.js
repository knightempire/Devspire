

'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from './../components/navbar';
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-6">
          <Navbar />
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            Inspiring Digital
            <span className="gradient-text block">Innovation</span>
          </h1>
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Transform your ideas into powerful digital solutions with our cutting-edge web services, mobile apps, and AI technologies.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">
              Get Started
            </button>
            <button className="glass px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all">
              View Our Work
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 border border-indigo-500 rounded-lg animate-float opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border border-purple-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 border border-cyan-500 rounded-lg animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      </section>

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
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Ideas?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s work together to bring your vision to life with innovative digital solutions
          </p>
          <button className="btn-primary px-12 py-4 rounded-full text-white font-semibold text-lg">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
