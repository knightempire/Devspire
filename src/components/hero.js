"use client";

import Link from "next/link";
import { BlurText } from "./ui/blur-text";
import { Button } from "./ui/button";

const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLineJoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center justify-center md:gap-x-6 mt-8">
                    <Button asChild size="lg" className="btn-primary">
                        <Link href="#services">
                            Get Started
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="hidden md:flex glass border-gray-600 text-white hover:bg-white/10">
                        <Link href="#about">
                            Learn More
                        </Link>
                    </Button>
                </div>
            </div>
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-gray-700/50 p-2 backdrop-blur-lg bg-gray-800/50 md:p-4 mt-12">
                    <div className="absolute top-1/4 left-1/2 -z-10 w-3/4 h-1/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-[10rem]"></div>

                    <div className="rounded-lg lg:rounded-[24px] border p-2 border-gray-700 bg-black">
                        <div className="w-full h-64 lg:h-96 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-lg lg:rounded-[20px] flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🚀</div>
                                <div className="text-2xl font-bold text-white">Your Digital Future</div>
                                <div className="text-gray-400">Powered by DevSpire</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero
