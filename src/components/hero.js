"use client";

import Link from "next/link";
import { BlurText } from "./ui/blur-text";


const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center w-full max-w-5xl my-24 mx-auto z-40 relative">
            <div className="pl-2 pr-1 py-1 rounded-full border border-gray-600/20 hover:border-gray-600/30 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto animate-fadeInUp">
                <div className="w-3.5 h-3.5 rounded-full bg-indigo-500/40 flex items-center justify-center relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/60 flex items-center justify-center animate-ping">
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/60 flex items-center justify-center animate-ping"></div>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    </div>
                </div>
                <span className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-sm text-transparent">
                    Inspiring Digital Innovation
                    <span className="text-xs text-gray-400 px-1.5 py-0.5 rounded-full bg-gradient-to-b from-gray-600/20 to-gray-600/10 flex items-center justify-center">
                        DevSpire
                        <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-gray-500" />
                    </span>
                </span>
            </div>
            
            <BlurText
                word={"Transform your ideas into\npowerful digital solutions"}
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium tracking-[-0.0125em] mt-6"
            />
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <p className="text-sm sm:text-base lg:text-lg mt-4 text-gray-400 max-w-2xl mx-auto">
                    Elevate your business with cutting-edge web services, mobile apps, and AI technologies. <span className="hidden sm:inline">DevSpire is your partner in digital transformation.</span>
                </p>
            </div>
            
         
 
        </div>
    )
};

export default Hero
