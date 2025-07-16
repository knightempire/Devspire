'use client';

import { useState, useEffect, useRef } from 'react';

const technologies = {
  "Frontend": [
    { name: "React", logo: "⚛️", color: "from-blue-400 to-blue-600" },
    { name: "Next.js", logo: "▲", color: "from-gray-400 to-gray-600" },
    { name: "Vue.js", logo: "🟢", color: "from-green-400 to-green-600" },
    { name: "Angular", logo: "🅰️", color: "from-red-400 to-red-600" },
    { name: "TypeScript", logo: "📘", color: "from-blue-500 to-indigo-600" },
    { name: "Tailwind CSS", logo: "🎨", color: "from-cyan-400 to-cyan-600" }
  ],
  "Backend": [
    { name: "Node.js", logo: "🟢", color: "from-green-500 to-green-700" },
    { name: "Python", logo: "🐍", color: "from-yellow-400 to-yellow-600" },
    { name: "Java", logo: "☕", color: "from-orange-400 to-orange-600" },
    { name: "PHP", logo: "🐘", color: "from-purple-400 to-purple-600" },
    { name: "Go", logo: "🔷", color: "from-blue-300 to-blue-500" },
    { name: "Rust", logo: "🦀", color: "from-orange-500 to-red-600" }
  ],
  "Database": [
    { name: "MongoDB", logo: "🍃", color: "from-green-400 to-green-600" },
    { name: "PostgreSQL", logo: "🐘", color: "from-blue-400 to-blue-600" },
    { name: "MySQL", logo: "🐬", color: "from-orange-400 to-orange-600" },
    { name: "Redis", logo: "🔴", color: "from-red-400 to-red-600" },
    { name: "Firebase", logo: "🔥", color: "from-yellow-400 to-orange-500" },
    { name: "Supabase", logo: "⚡", color: "from-green-400 to-blue-500" }
  ],
  "Cloud & DevOps": [
    { name: "AWS", logo: "☁️", color: "from-orange-400 to-orange-600" },
    { name: "Azure", logo: "🌐", color: "from-blue-400 to-blue-600" },
    { name: "Google Cloud", logo: "🌈", color: "from-red-400 to-yellow-400" },
    { name: "Docker", logo: "🐳", color: "from-blue-400 to-blue-600" },
    { name: "Kubernetes", logo: "⚓", color: "from-blue-500 to-purple-600" },
    { name: "Vercel", logo: "▲", color: "from-gray-400 to-gray-600" }
  ],
  "AI & ML": [
    { name: "TensorFlow", logo: "🧠", color: "from-orange-400 to-red-500" },
    { name: "PyTorch", logo: "🔥", color: "from-red-400 to-orange-500" },
    { name: "OpenAI", logo: "🤖", color: "from-green-400 to-blue-500" },
    { name: "Hugging Face", logo: "🤗", color: "from-yellow-400 to-orange-500" },
    { name: "LangChain", logo: "🔗", color: "from-purple-400 to-pink-500" },
    { name: "Pinecone", logo: "🌲", color: "from-green-400 to-green-600" }
  ],
  "Mobile": [
    { name: "React Native", logo: "📱", color: "from-blue-400 to-purple-500" },
    { name: "Flutter", logo: "🐦", color: "from-blue-400 to-cyan-500" },
    { name: "Swift", logo: "🍎", color: "from-orange-400 to-red-500" },
    { name: "Kotlin", logo: "🟣", color: "from-purple-400 to-purple-600" },
    { name: "Expo", logo: "⚡", color: "from-gray-600 to-gray-800" },
    { name: "Ionic", logo: "⚡", color: "from-blue-400 to-indigo-600" }
  ]
};

export default function TechnologiesSection() {
  const [visibleCategories, setVisibleCategories] = useState(new Set());
  const [hoveredTech, setHoveredTech] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCategories(prev => new Set([...prev, index]));
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const categories = sectionElement?.querySelectorAll('.tech-category');
    categories?.forEach((category) => observer.observe(category));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative bg-black/20 overflow-hidden">
      {/* Enhanced background with floating tech icons */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-5 animate-float-tech"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          >
            {['⚛️', '🚀', '🔥', '⚡', '🌟', '💎', '🎯', '🚀'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/10 mb-6 backdrop-blur-lg animate-pulse-slow">
            <span className="text-sm font-medium text-cyan-300">🛠️ Technology Arsenal</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            We leverage cutting-edge technologies and frameworks to build robust, scalable, and future-proof solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => {
            const isVisible = visibleCategories.has(categoryIndex);
            
            return (
              <div
                key={category}
                data-index={categoryIndex}
                className={`tech-category group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-700 hover:border-cyan-400/30 cursor-pointer transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-20 opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${categoryIndex * 150}ms`
                }}
              >
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg scale-110" />
                </div>

                <h3 className="text-2xl font-bold mb-6 flex items-center relative z-10 group-hover:text-white transition-colors duration-300">
                  <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 group-hover:scale-150 group-hover:animate-pulse transition-all duration-300"></span>
                  {category}
                </h3>

                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {techs.map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`group/tech relative overflow-hidden rounded-lg bg-white/5 border border-white/10 p-3 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-2 ${
                        isVisible 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-10 opacity-0'
                      }`}
                      style={{ 
                        transitionDelay: `${(categoryIndex * 150) + (index * 50)}ms`
                      }}
                      onMouseEnter={() => setHoveredTech(`${category}-${index}`)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover/tech:opacity-20 transition-opacity duration-300`} />
                      
                      {/* Pulsing effect for hovered tech */}
                      {hoveredTech === `${category}-${index}` && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-30 animate-pulse blur-sm scale-110`} />
                      )}
                      
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className={`text-xl transition-all duration-300 ${
                          hoveredTech === `${category}-${index}` 
                            ? 'scale-125 animate-bounce' 
                            : 'group-hover/tech:scale-110'
                        }`}>
                          {tech.logo}
                        </span>
                        <span className="text-sm font-medium text-white group-hover/tech:text-white transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/tech:translate-x-full transition-transform duration-700"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-400/20 via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            );
          })}
        </div>

        {/* Enhanced tech showcase bar */}
        <div className="mt-16 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden">
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-gradient-flow opacity-50" />
          
          <h3 className="text-xl font-bold text-center mb-6 relative z-10">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Powering Innovation with Modern Tech
            </span>
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            {Object.values(technologies).flat().slice(0, 12).map((tech, index) => (
              <div
                key={`showcase-${index}`}
                className={`flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} text-white text-sm font-medium transform transition-all duration-500 hover:scale-110 cursor-pointer animate-fade-in-up`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="mr-2">{tech.logo}</span>
                {tech.name}
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
        
        @keyframes float-tech {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.05;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-40px) translateX(-10px) rotate(180deg); 
            opacity: 0.15;
          }
          75% { 
            transform: translateY(-20px) translateX(10px) rotate(270deg); 
            opacity: 0.1;
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
        .animate-float-tech { 
          animation: float-tech infinite linear; 
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-gradient-flow {
          background-size: 200% 100%;
          animation: gradient-flow 10s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animation-delay-300 { animation-delay: 300ms; }
      `}</style>
    </section>
  );
}
