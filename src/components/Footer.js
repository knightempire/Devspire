import Link from 'next/link';
import AnimationContainer from "@/components/ui/AnimationContainer"
import { Icons } from "@/components/ui/Icons"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-gray-800 pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-white rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full max-w-7xl mx-auto">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            <Icons.logo className="w-7 h-7" />
                        </div>
                        <p className="text-gray-400 mt-4 text-sm text-start">
                            Inspiring digital innovation through creative technology solutions.
                        </p>
                        <span className="mt-4 text-gray-300 text-sm flex items-center">
                            Made with ❤️ by <span className="font-semibold ml-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">DevSpire Team</span>
                        </span>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Services
                                </h3>
                                <ul className="mt-4 text-sm text-gray-400">
                                    <li className="mt-2">
                                        <Link href="#services" className="hover:text-white transition-all duration-300">
                                            Web Development
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#services" className="hover:text-white transition-all duration-300">
                                            Mobile Apps
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#services" className="hover:text-white transition-all duration-300">
                                            AI Solutions
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#services" className="hover:text-white transition-all duration-300">
                                            Consulting
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Technologies
                                </h3>
                                <ul className="mt-4 text-sm text-gray-400">
                                    <li className="">
                                        <Link href="" className="hover:text-white transition-all duration-300">
                                            React & Next.js
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-white transition-all duration-300">
                                            Node.js
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-white transition-all duration-300">
                                            Python & AI
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-white transition-all duration-300">
                                            Cloud Solutions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Resources
                                </h3>
                                <ul className="mt-4 text-sm text-gray-400">
                                    <li className="mt-2">
                                        <Link href="/blog" className="hover:text-white transition-all duration-300">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/portfolio" className="hover:text-white transition-all duration-300">
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/support" className="hover:text-white transition-all duration-300">
                                            Support
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/careers" className="hover:text-white transition-all duration-300">
                                            Careers
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Company
                                </h3>
                                <ul className="mt-4 text-sm text-gray-400">
                                    <li className="">
                                        <Link href="#about" className="hover:text-white transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#contact" className="hover:text-white transition-all duration-300">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-white transition-all duration-300">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-white transition-all duration-300">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-gray-800 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full max-w-7xl mx-auto">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-gray-400 mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} DevSpire. All rights reserved.
                    </p>
                </AnimationContainer>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="mailto:hello@devspire.com" className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">Email</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </Link>
                    <Link href="https://github.com/devspire" className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link href="https://linkedin.com/company/devspire" className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center w-full max-w-7xl mx-auto">
                <TextHoverEffect text="DEVSPIRE" />
            </div>
        </footer>
    )
}

export default Footer
