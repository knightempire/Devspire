import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect"


const CTASection = () => (
  <section className="py-12 px-6 relative overflow-hidden">
    {/* Animated Gradient Background Blobs */}

    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-30 rounded-full blur-3xl animate-blob1" style={{animationDelay: '0s'}}></div>
      <div className="absolute right-1/3 bottom-0 w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] bg-gradient-to-tr from-pink-500 via-cyan-500 to-indigo-500 opacity-20 rounded-full blur-2xl animate-blob2" style={{animationDelay: '1.5s'}}></div>
    </div>
    <div className="max-w-4xl mx-auto text-center relative">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight animate-fadein-up">
        Ready to <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">Transform</span> Your Ideas?
      </h2>
      <p className="text-xl text-gray-300 mb-10 animate-fadein-up delay-150">
        Let&apos;s work together to bring your vision to life with <span className="font-semibold text-indigo-300">innovative</span> <span className="font-semibold text-pink-300">digital solutions</span>.
      </p>
      <div className="flex justify-center">
        <button className="relative group btn-primary px-12 py-4 rounded-full text-white font-semibold text-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 focus:outline-none animate-fadein-up delay-300">
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-lg"></span>
          <span className="relative z-10 flex items-center gap-2">
            Start Your Project
            <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
        </button>
      </div>
    </div>


        <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center w-full max-w-7xl mx-auto">
                <TextHoverEffect text="DEVSPIRE" />
            </div>


    {/* Keyframes for custom animations */}
    <style jsx>{`
      @keyframes blob1 {
        0%, 100% { transform: translate(-50%, 0) scale(1); }
        50% { transform: translate(-60%, 10%) scale(1.1); }
      }
      @keyframes blob2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(10%, 10%) scale(1.15); }
      }
      .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
      .animate-blob2 { animation: blob2 14s ease-in-out infinite; }
      @keyframes fadein-up {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadein-up { animation: fadein-up 1.2s cubic-bezier(.4,0,.2,1) both; }
      .delay-150 { animation-delay: 0.15s; }
      .delay-300 { animation-delay: 0.3s; }
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 4s ease-in-out infinite;
      }
    `}</style>
  </section>
);

export default CTASection;
