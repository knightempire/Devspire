'use client';

import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import BackgroundAnimation from '../../../components/background/BackgroundAnimation';

export default function ServicesHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <BackgroundAnimation />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      {/* Mouse-following gradient */}
      <div 
        className="fixed top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full pointer-events-none z-0 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
          opacity: 0.6
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Animated badge */}
        <div className={`transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="group inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/10 mb-8 backdrop-blur-lg hover:border-white/20 transition-all duration-300 hover:scale-105">
            <SparklesIcon className="w-4 h-4 text-indigo-400 mr-2 animate-pulse" />
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
              ✨ Premium Digital Solutions & Innovation
            </span>
          </div>
        </div>
        
        {/* Enhanced main heading with staggered animations */}
        <div className="mb-8 leading-tight">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <span className="inline-block hover:scale-110 transition-transform duration-500">
              Services We{' '}
            </span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 transition-all duration-700 animate-gradient-shift">
              Provide
            </span>
          </h1>
        </div>
        
        {/* Enhanced description with typewriter effect */}
        <p className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          From cutting-edge web development to AI-powered solutions, we deliver 
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold"> comprehensive digital services </span>
          that transform your business vision into reality.
        </p>
        
        {/* Enhanced CTA buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Explore Our Services
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2 duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
          </button>
          
          <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold text-lg border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-110 hover:border-white/40 relative overflow-hidden">
            <span className="relative z-10">Get Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Enhanced Stats with hover animations */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {[
            { number: '500+', label: 'Projects Delivered', gradient: 'from-indigo-400 to-purple-400', delay: '0ms' },
            { number: '98%', label: 'Client Satisfaction', gradient: 'from-purple-400 to-cyan-400', delay: '200ms' },
            { number: '24/7', label: 'Support Available', gradient: 'from-cyan-400 to-indigo-400', delay: '400ms' },
            { number: '5★', label: 'Average Rating', gradient: 'from-indigo-400 to-purple-400', delay: '600ms' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group text-center transform transition-all duration-500 hover:scale-125 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: stat.delay }}
            >
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:animate-pulse transition-all duration-300 mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
              <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Scroll indicator with animation */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/60 transition-colors duration-300">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-30px) translateX(10px) rotate(90deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-60px) translateX(-10px) rotate(180deg); 
            opacity: 1;
          }
          75% { 
            transform: translateY(-30px) translateX(10px) rotate(270deg); 
            opacity: 0.8;
          }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float-particle { 
          animation: float-particle infinite linear; 
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
