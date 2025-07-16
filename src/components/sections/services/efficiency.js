'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckIcon, RefreshCwIcon, ShieldIcon, UsersIcon } from 'lucide-react';

const efficiencyFeatures = [
  {
    icon: <RefreshCwIcon className="w-5 h-5 text-green-400" />,
    title: "Strategic Sync",
    description: "Remove corners from the avatars and transform the way your team work."
  },
  {
    icon: <ShieldIcon className="w-5 h-5 text-blue-400" />,
    title: "Feedback Loop", 
    description: "Best-in-class design practices to keep your work safe and secure."
  },
  {
    icon: <UsersIcon className="w-5 h-5 text-purple-400" />,
    title: "Enterprise-Ready",
    description: "Built for teams of all sizes. From early-stage startups to global enterprises."
  }
];

export default function EfficiencySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycle through workflow cards
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % 6);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isVisible]);
  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 animate-pulse-glow">
                <span className="text-blue-400 text-sm font-medium">Software Standard</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Improve efficiency &{' '}
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  global coverage
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Open is so simple to use, it&apos;s easy to overlook the wealth of 
                complex technologies packed under the hood that keep Open 
                robust, safe, and blazing fast.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-6">
              {efficiencyFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex items-start gap-4 group transition-all duration-700 hover:translate-x-2 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${0.5 + index * 200}ms`
                  }}
                >
                  <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right mockup */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative z-10">
              {/* Workflow diagram */}
              <div className="grid grid-cols-2 gap-6">
                {/* Top row */}
                <div className="space-y-4">
                  <div 
                    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 transition-all duration-500 ${
                      activeCard === 0 ? 'border-blue-500/50 bg-blue-500/10 scale-105' : ''
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-gray-400 text-sm font-medium mb-2">PROTOTYPE</div>
                      <div className="h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center">
                        <div className={`w-8 h-8 bg-blue-500 rounded-lg transition-all duration-500 ${
                          activeCard === 0 ? 'animate-pulse scale-110' : ''
                        }`}></div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 transition-all duration-500 ${
                      activeCard === 1 ? 'border-purple-500/50 bg-purple-500/10 scale-105' : ''
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-gray-400 text-sm font-medium mb-2">PLAN</div>
                      <div className="h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 flex items-center justify-center">
                        <div className={`grid grid-cols-2 gap-1 transition-all duration-500 ${
                          activeCard === 1 ? 'scale-110' : ''
                        }`}>
                          <div className="w-3 h-3 bg-purple-500 rounded animate-twinkle"></div>
                          <div className="w-3 h-3 bg-pink-500 rounded animate-twinkle" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-3 h-3 bg-indigo-500 rounded animate-twinkle" style={{ animationDelay: '0.4s' }}></div>
                          <div className="w-3 h-3 bg-purple-400 rounded animate-twinkle" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div 
                    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 transition-all duration-500 ${
                      activeCard === 2 ? 'border-green-500/50 bg-green-500/10 scale-105' : ''
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-gray-400 text-sm font-medium mb-2">TRACKING</div>
                      <div className="h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 flex items-center justify-center">
                        <div className={`space-y-1 transition-all duration-500 ${
                          activeCard === 2 ? 'scale-110' : ''
                        }`}>
                          <div className="w-8 h-1 bg-green-500 rounded animate-pulse"></div>
                          <div className="w-6 h-1 bg-emerald-500 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-10 h-1 bg-green-400 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 transition-all duration-500 ${
                      activeCard === 3 ? 'border-orange-500/50 bg-orange-500/10 scale-105' : ''
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-gray-400 text-sm font-medium mb-2">EXECUTE</div>
                      <div className="h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30 flex items-center justify-center">
                        <CheckIcon 
                          className={`w-8 h-8 text-orange-500 transition-all duration-500 ${
                            activeCard === 3 ? 'animate-bounce scale-125' : ''
                          }`} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center connection element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center border-4 border-gray-900 shadow-2xl animate-pulse-glow">
                  <div className="w-6 h-6 bg-white rounded-lg animate-spin-slow"></div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div 
                  className={`bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 transition-all duration-500 ${
                    activeCard === 4 ? 'border-yellow-500/50 bg-yellow-500/10 scale-105' : ''
                  }`}
                >
                  <div className="text-center">
                    <div className="text-gray-400 text-sm font-medium mb-2">NOTIFICATIONS</div>
                    <div className="h-12 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-lg border border-yellow-500/30 flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className={`w-2 h-2 bg-yellow-500 rounded-full ${
                          activeCard === 4 ? 'animate-ping' : ''
                        }`}></div>
                        <div className={`w-2 h-2 bg-amber-500 rounded-full ${
                          activeCard === 4 ? 'animate-ping' : ''
                        }`} style={{ animationDelay: '0.2s' }}></div>
                        <div className={`w-2 h-2 bg-orange-500 rounded-full ${
                          activeCard === 4 ? 'animate-ping' : ''
                        }`} style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className={`bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 transition-all duration-500 ${
                    activeCard === 5 ? 'border-cyan-500/50 bg-cyan-500/10 scale-105' : ''
                  }`}
                >
                  <div className="text-center">
                    <div className="text-gray-400 text-sm font-medium mb-2">PROJECTS</div>
                    <div className="h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 flex items-center justify-center">
                      <div className={`grid grid-cols-3 gap-1 transition-all duration-500 ${
                        activeCard === 5 ? 'scale-110' : ''
                      }`}>
                        <div className="w-2 h-2 bg-cyan-500 rounded animate-twinkle"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded animate-twinkle" style={{ animationDelay: '0.3s' }}></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded animate-twinkle" style={{ animationDelay: '0.6s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8">
                        <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8">
                        <animate attributeName="stop-opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>
                  <path 
                    d="M25 25 L50 50 L75 25 M25 75 L50 50 L75 75" 
                    stroke="url(#animatedGradient)" 
                    strokeWidth="0.8" 
                    strokeDasharray="4,2"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>

            {/* Enhanced background glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
