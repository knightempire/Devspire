'use client';

import { 
  MonitorIcon, 
  SmartphoneIcon, 
  BrainCircuitIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  RocketIcon,
  CodeIcon,
  DatabaseIcon,
  PaletteIcon
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const services = [
  {
    icon: MonitorIcon,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions", 
      "Progressive Web Apps",
      "API Development & Integration"
    ],
    gradient: "from-indigo-500 to-purple-500",
    delay: "0ms"
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    features: [
      "iOS Development",
      "Android Development", 
      "React Native Apps",
      "App Store Optimization"
    ],
    gradient: "from-purple-500 to-cyan-500",
    delay: "200ms"
  },
  {
    icon: BrainCircuitIcon,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions", 
      "AI Chatbots & Assistants"
    ],
    gradient: "from-cyan-500 to-indigo-500",
    delay: "400ms"
  },
  {
    icon: CloudIcon,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services that ensure your applications are secure, reliable, and globally accessible.",
    features: [
      "Cloud Migration",
      "AWS/Azure/GCP Setup",
      "DevOps & CI/CD",
      "Serverless Architecture"
    ],
    gradient: "from-emerald-500 to-teal-500",
    delay: "500ms"
  },
  {
    icon: ShieldCheckIcon,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets from threats and ensure compliance with industry standards.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Solutions",
      "Security Monitoring"
    ],
    gradient: "from-red-500 to-orange-500",
    delay: "600ms"
  },
  {
    icon: CodeIcon,
    title: "Custom Software",
    description: "Tailored software solutions designed specifically for your business needs and operational requirements.",
    features: [
      "Enterprise Applications",
      "Workflow Automation",
      "Legacy System Modernization",
      "Software Integration"
    ],
    gradient: "from-violet-500 to-purple-500",
    delay: "800ms"
  },
  {
    icon: DatabaseIcon,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
    features: [
      "Data Visualization",
      "Business Intelligence",
      "Predictive Analytics",
      "Real-time Dashboards"
    ],
    gradient: "from-blue-500 to-indigo-500",
    delay: "1000ms"
  },
  {
    icon: PaletteIcon,
    title: "UI/UX Design",
    description: "Create stunning, user-friendly interfaces that provide exceptional user experiences and drive engagement.",
    features: [
      "User Experience Design",
      "User Interface Design",
      "Prototyping & Wireframing",
      "Design System Creation"
    ],
    gradient: "from-pink-500 to-rose-500",
    delay: "1100ms"
  },
  {
    icon: RocketIcon,
    title: "Digital Transformation",
    description: "Comprehensive digital transformation strategies to modernize your business processes and technology stack.",
    features: [
      "Strategy Consulting",
      "Process Optimization",
      "Technology Roadmap",
      "Change Management"
    ],
    gradient: "from-amber-500 to-orange-500",
    delay: "1200ms"
  }
];

export default function ServicesGrid() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    
    const handleMouseMove = (e) => {
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, index]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionElement?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    if (sectionElement) {
      sectionElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      observer.disconnect();
      if (sectionElement) {
        sectionElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 relative bg-black/20 overflow-hidden"
    >
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full animate-float-particle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <div 
        className="absolute w-72 h-72 bg-gradient-radial from-purple-500/15 via-blue-500/8 to-transparent rounded-full pointer-events-none transition-all duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 144}px, ${mousePosition.y - 144}px)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            We offer comprehensive digital solutions across multiple domains to help your business thrive in the digital age
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards.has(index);
            
            return (
              <div
                key={service.title}
                data-index={index}
                className={`service-card group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-700 hover:border-white/30 cursor-pointer transform hover:scale-105 hover:rotate-1 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ 
                  transitionDelay: service.delay
                }}
              >
                {/* Enhanced gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-all duration-700`} />
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-lg scale-125`} />
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-0.5 h-0.5 bg-gradient-to-r ${service.gradient} rounded-full animate-micro-float`}
                      style={{
                        left: `${15 + i * 18}%`,
                        top: `${15 + (i % 2) * 50}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Enhanced icon with multiple effects */}
                <div className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 flex items-center justify-center z-10 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white group-hover:animate-pulse" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl opacity-20 group-hover:opacity-70 transition-opacity duration-500 blur-lg scale-150`} />
                </div>

                {/* Enhanced content */}
                <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 relative z-10 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Enhanced features list with staggered animations */}
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-gray-400 text-sm group-hover:text-gray-300 transition-all duration-300 transform group-hover:translate-x-2"
                      style={{ 
                        transitionDelay: `${featureIndex * 100}ms`
                      }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-150 group-hover:animate-pulse transition-all duration-300`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
              </div>
            );
          })}
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
        
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-15px) translateX(8px) rotate(90deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-30px) translateX(-8px) rotate(180deg); 
            opacity: 1;
          }
          75% { 
            transform: translateY(-15px) translateX(8px) rotate(270deg); 
            opacity: 0.8;
          }
        }
        
        @keyframes micro-float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-12px) scale(1.5); 
            opacity: 1;
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in-up { 
          animation: fade-in-up 0.8s ease-out forwards; 
        }
        .animate-float-particle { 
          animation: float-particle infinite linear; 
        }
        .animate-micro-float { 
          animation: micro-float 2s ease-in-out infinite; 
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .animation-delay-200 { animation-delay: 200ms; }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
