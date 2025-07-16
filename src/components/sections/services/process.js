'use client';

import { 
  UserSearchIcon, 
  LightbulbIcon, 
  CodeIcon, 
  TestTubeIcon, 
  RocketIcon, 
  HeadphonesIcon 
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const processSteps = [
  {
    icon: UserSearchIcon,
    title: "Discovery & Research",
    description: "We start by understanding your business, goals, and challenges through comprehensive research and stakeholder interviews.",
    features: [
      "Business Analysis",
      "Market Research", 
      "Competitor Analysis",
      "User Research"
    ],
    gradient: "from-blue-500 to-indigo-500",
    step: "01"
  },
  {
    icon: LightbulbIcon,
    title: "Strategy & Planning",
    description: "Based on our findings, we develop a comprehensive strategy and project roadmap tailored to your specific needs.",
    features: [
      "Technical Strategy",
      "Project Roadmap",
      "Resource Planning",
      "Risk Assessment"
    ],
    gradient: "from-indigo-500 to-purple-500",
    step: "02"
  },
  {
    icon: CodeIcon,
    title: "Design & Development",
    description: "Our expert team brings your vision to life with cutting-edge design and development practices.",
    features: [
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Database Design"
    ],
    gradient: "from-purple-500 to-pink-500",
    step: "03"
  },
  {
    icon: TestTubeIcon,
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your solution meets the highest standards of quality, performance, and security.",
    features: [
      "Automated Testing",
      "Manual Testing",
      "Performance Testing",
      "Security Auditing"
    ],
    gradient: "from-pink-500 to-red-500",
    step: "04"
  },
  {
    icon: RocketIcon,
    title: "Launch & Deployment",
    description: "We handle the complete deployment process, ensuring a smooth transition from development to production.",
    features: [
      "Production Deployment",
      "Performance Monitoring",
      "Launch Strategy",
      "Go-Live Support"
    ],
    gradient: "from-red-500 to-orange-500",
    step: "05"
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    description: "Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure optimal performance.",
    features: [
      "24/7 Monitoring",
      "Regular Updates",
      "Performance Optimization",
      "Technical Support"
    ],
    gradient: "from-orange-500 to-yellow-500",
    step: "06"
  }
];

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleSteps(prev => new Set([...prev, index]));
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const steps = sectionElement?.querySelectorAll('.process-step');
    steps?.forEach((step) => observer.observe(step));

    // Auto-progress active step
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % processSteps.length);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 min-h-screen w-full overflow-hidden bg-gradient-to-br  via-black to-gray-900 text-white" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-400/40 to-red-500/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-white/10 mb-6 backdrop-blur-lg animate-pulse-slow">
            <span className="text-sm font-medium text-orange-300">⚡ Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient-shift">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            We follow a proven methodology that ensures successful project delivery from concept to launch and beyond
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isVisible = visibleSteps.has(index);
            const isActive = activeStep === index;
            
            return (
              <div
                key={step.title}
                data-index={index}
                className={`process-step group relative transform transition-all duration-1000 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                } ${isActive ? 'scale-105' : ''}`}
                style={{ 
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className={`relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border transition-all duration-700 p-8 ${
                  isActive 
                    ? 'border-orange-400/50 bg-white/10 shadow-2xl shadow-orange-500/20' 
                    : 'border-white/10 hover:border-white/30'
                } hover:scale-105`}>
                  
                  {/* Animated step number */}
                  <div className={`absolute top-4 right-4 text-6xl font-bold transition-all duration-500 ${
                    isActive ? 'opacity-30 text-orange-400' : 'opacity-10'
                  }`}>
                    {step.step}
                  </div>
                  
                  {/* Enhanced gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} transition-opacity duration-700 ${
                    isActive ? 'opacity-15' : 'opacity-0 group-hover:opacity-10'
                  }`} />
                  
                  {/* Pulsing border for active step */}
                  {isActive && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.gradient} opacity-30 animate-pulse blur-sm scale-105`} />
                  )}
                  
                  {/* Enhanced icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-xl mb-6 flex items-center justify-center z-10 transition-all duration-500 ${
                    isActive 
                      ? 'scale-125 rotate-12 shadow-lg' 
                      : 'group-hover:scale-110 group-hover:rotate-6'
                  }`}>
                    <IconComponent className={`w-8 h-8 text-white transition-all duration-300 ${isActive ? 'animate-pulse' : ''}`} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-xl opacity-30 blur-lg scale-150 transition-opacity duration-500 ${
                      isActive ? 'opacity-70' : 'group-hover:opacity-50'
                    }`} />
                  </div>

                  {/* Enhanced content */}
                  <h3 className={`text-2xl font-bold mb-4 relative z-10 transition-all duration-300 ${
                    isActive ? 'text-white' : 'group-hover:text-white'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-gray-300 mb-6 relative z-10 leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-gray-200' : 'group-hover:text-gray-200'
                  }`}>
                    {step.description}
                  </p>

                  {/* Enhanced features */}
                  <div className="grid grid-cols-2 gap-2 relative z-10">
                    {step.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className={`flex items-center text-gray-400 text-sm transition-all duration-300 ${
                          isActive 
                            ? 'text-gray-300 transform translate-x-2' 
                            : 'group-hover:text-gray-300'
                        }`}
                        style={{ 
                          transitionDelay: `${featureIndex * 100}ms`
                        }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full mr-2 transition-all duration-300 ${
                          isActive 
                            ? 'scale-150 animate-pulse' 
                            : 'group-hover:scale-125'
                        }`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Shine effect */}
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}`}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Process Flow Visualization */}
        <div className="mt-20 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden animate-fade-in-up animation-delay-1000">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 animate-gradient-flow" />
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-8 relative z-10">
            From Idea to <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient-shift">
              Reality
            </span>
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex items-center group">
                <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-lg flex items-center justify-center text-white font-bold text-sm transition-all duration-500 cursor-pointer ${
                  activeStep === index 
                    ? 'scale-125 shadow-lg animate-bounce' 
                    : 'hover:scale-110'
                }`}>
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden sm:block relative mx-2">
                    <div className="w-8 h-px bg-gradient-to-r from-white/20 to-white/5" />
                    <div 
                      className="absolute top-0 left-0 h-px bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-1000"
                      style={{ 
                        width: activeStep > index ? '100%' : '0%',
                        transitionDelay: `${index * 300}ms`
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-flow {
          0% { background-position: -200% 0%; }
          100% { background-position: 200% 0%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-fade-in-up { 
          animation: fade-in-up 0.8s ease-out forwards; 
        }
        .animate-twinkle { 
          animation: twinkle infinite ease-in-out; 
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-gradient-flow {
          background-size: 200% 100%;
          animation: gradient-flow 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </section>
  );
}
