'use client';

import Image from 'next/image';

import { StarIcon, QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b167?w=150&h=150&fit=crop&crop=face",
    content: "DevSpire transformed our outdated system into a modern, scalable platform. Their expertise in AI integration helped us automate 70% of our manual processes. Outstanding work!",
    rating: 5,
    project: "AI-Powered Business Platform",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Michael Chen", 
    role: "CTO, InnovateLabs",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The mobile app DevSpire developed for us exceeded all expectations. The user experience is phenomenal, and we saw a 300% increase in user engagement within the first month.",
    rating: 5,
    project: "Mobile App Development",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, EcoSolutions",
    company: "EcoSolutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Working with DevSpire was a game-changer for our startup. They delivered a comprehensive web platform that perfectly captures our vision. Professional, timely, and innovative.",
    rating: 5,
    project: "E-commerce Platform",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "David Thompson",
    role: "Director of IT, FinanceGro",
    company: "FinanceGro",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    content: "DevSpire's cloud migration services saved us thousands in operational costs. Their DevOps expertise ensured zero downtime during the transition. Highly recommended!",
    rating: 5,
    project: "Cloud Migration & DevOps",
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "Lisa Wang",
    role: "Product Manager, DataViz Co.",
    company: "DataViz Co.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    content: "The data analytics dashboard DevSpire built for us provides incredible insights. The real-time visualizations help us make better business decisions every day.",
    rating: 5,
    project: "Data Analytics Platform",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    name: "Robert Kim",
    role: "VP Engineering, SecureNet",
    company: "SecureNet",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "DevSpire's cybersecurity audit identified critical vulnerabilities we missed. Their comprehensive security solutions gave us peace of mind and regulatory compliance.",
    rating: 5,
    project: "Cybersecurity Audit",
    gradient: "from-red-500 to-pink-500"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with DevSpire
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-gray-400 text-sm mt-2">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-gray-400 text-sm mt-2">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-gray-400 text-sm mt-2">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-gray-400 text-sm mt-2">Support Available</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <QuoteIcon className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Project */}
              <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${testimonial.gradient} bg-opacity-20 text-xs font-medium mb-4`}>
                {testimonial.project}
              </div>

              {/* Author */}
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white/10">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Let&apos;s discuss how we can help transform your business with our proven expertise and innovative solutions.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
              Start Your Project Today
            </button>
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
