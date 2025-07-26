'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function About() {
  // Animations
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Contact form logic
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Contact Info
  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'devspire.in@gmail.com', link: 'mailto:devspire.in@gmail.com' },
    { icon: Phone, title: 'Phone', value: '+91 9486409058', link: 'tel:+919486409058' },
    { icon: MapPin, title: 'Location', value: 'India', link: '#' }
  ];

  return (
    <>
      <Head>
        <title>About Us | DevSpire</title>
        <meta name="description" content="Discover DevSpire's mission, vision, team, and values. Learn about our journey, core principles, and how you can connect or join our innovative digital company." />
      </Head>
      {/* Remove overflow-x-hidden from here, add to global styles below */}
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        {/* Animated Gradient Blobs / Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-24 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-2/3 right-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-30 animate-blob" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2.4s' }}></div>
          <div className="absolute top-8 right-1/4 w-12 h-12 border-2 border-indigo-500 rounded-xl animate-float opacity-40"></div>
          <div className="absolute bottom-8 left-1/4 w-16 h-16 border-2 border-purple-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1.7s' }}></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className={`text-2xl font-extrabold gradient-text drop-shadow-xl tracking-wider transition-all duration-500 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              DevSpire
            </div>
            <div className={`hidden md:flex space-x-8 text-lg transition-all duration-500 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              <a href="#mission" className="nav-link">Mission & Vision</a>
              <a href="#history" className="nav-link">History</a>
              <a href="#team" className="nav-link">Team</a>
              <a href="#values" className="nav-link">Values</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="#cta" className="nav-link">Join Us</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto md:pt-24 pt-32">
            <h1 className={`text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight gradient-text-hero transition-all duration-700 ${isVisible ? 'animate-textPop' : 'opacity-0'}`}>
              About <span className="gradient-text block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-400 to-purple-500 animate-gradient-x">DevSpire</span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Meet the team and values driving digital innovation.<br />Discover our story, mission, and the principles behind every project we deliver.
            </p>
            <div className={`flex justify-center transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn-hero-contact group">
                <Mail className="w-6 h-6 mr-2 group-hover:animate-wiggle" />
                <span className="font-semibold tracking-wide">Get in Touch</span>
              </a>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="py-16 px-4 md:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-[#21293a] rounded-2xl px-8 py-10 shadow-xl border border-[#273042] flex flex-col">
              <div className="flex items-center mb-6">
                {/* Target Icon */}
                <span className="mr-3 text-[2rem]">
                  <svg fill="none" stroke="#51a6e6" strokeWidth="2.5" width="40" height="40" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="#51a6e6" strokeWidth="2" />
                    <circle cx="12" cy="12" r="6" stroke="#51a6e6" strokeWidth="2" />
                    <circle cx="12" cy="12" r="2" fill="#51a6e6" />
                  </svg>
                </span>
                <span className="text-3xl font-bold text-white">Our Mission</span>
              </div>
              <p className="text-xl text-gray-200 mb-8 font-normal">
                To empower businesses with innovative technology solutions that transform ideas into digital reality. We strive to bridge the gap between complex technical challenges and user-friendly solutions that drive measurable results.
              </p>
              <p className="text-xl text-gray-200 font-normal">
                Our commitment is to deliver excellence in every project while fostering long-term partnerships built on trust, transparency, and mutual success.
              </p>
            </div>
            <div className="bg-[#21293a] rounded-2xl px-8 py-10 shadow-xl border border-[#273042] flex flex-col">
              <div className="flex items-center mb-6">
                {/* Eye Icon */}
                <span className="mr-3 text-[2rem]">
                  <svg fill="none" stroke="#a78bfa" strokeWidth="2.5" width="40" height="40" viewBox="0 0 24 24">
                    <ellipse cx="12" cy="12" rx="10" ry="7" stroke="#a78bfa" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" fill="#a78bfa" />
                  </svg>
                </span>
                <span className="text-3xl font-bold text-white">Our Vision</span>
              </div>
              <p className="text-xl text-gray-200 mb-8 font-normal">
                To become the leading technology partner for businesses seeking digital transformation. We envision a future where innovative technology seamlessly integrates with human creativity to solve the world&apos;s most pressing challenges.
              </p>
              <p className="text-xl text-gray-200 font-normal">
                We aim to be recognized globally for our expertise in AI, machine learning, and full-stack development while maintaining our core values of innovation and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Brief History */}
        <section id="history" className="py-20 px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 gradient-text">Our Story</h2>
            <p className="text-xl text-gray-300 mb-4">
              Founded in 2020, DevSpire started as a small group of passionate technologists determined to make a mark in the digital landscape. Through relentless innovation, dedication, and a focus on client success, we’ve grown into a trusted partner for businesses worldwide.
            </p>
            <p className="text-xl text-gray-300">
              Today, DevSpire continues to push boundaries, delivering solutions in web development, mobile apps, and AI technologies that drive results and inspire change.
            </p>
          </div>
        </section>

        {/* Team Introduction */}
        <section id="team" className="py-20 px-6 relative bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 gradient-text">Meet Our Leadership</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our team blends creativity, expertise, and dedication to deliver outstanding results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="team-card animate-fadeInUp">
                <img src="/images/team-placeholder1.jpg" alt="John Doe, CEO" className="w-24 h-24 rounded-full mb-4 object-cover shadow-lg transition-transform duration-300 hover:scale-105" loading="lazy" />
                <h3 className="text-2xl font-extrabold gradient-text mb-2">John Doe</h3>
                <p className="text-lg text-gray-300 mb-2 font-semibold">Chief Executive Officer</p>
                <p className="text-gray-400 mb-3">Visionary leader with 10+ years’ experience in tech startups and digital transformation.</p>
                <div className="flex gap-2 justify-center">
                  <span className="badge-skill">Leadership</span>
                  <span className="badge-skill">AI Strategy</span>
                  <span className="badge-skill">Product Vision</span>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="team-card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <img src="/images/team-placeholder2.jpg" alt="Jane Smith, CTO" className="w-24 h-24 rounded-full mb-4 object-cover shadow-lg transition-transform duration-300 hover:scale-105" loading="lazy" />
                <h3 className="text-2xl font-extrabold gradient-text mb-2">Jane Smith</h3>
                <p className="text-lg text-gray-300 mb-2 font-semibold">Chief Technology Officer</p>
                <p className="text-gray-400 mb-3">Seasoned technologist specializing in AI, cloud, and scalable software architecture.</p>
                <div className="flex gap-2 justify-center">
                  <span className="badge-skill">React/Node.js</span>
                  <span className="badge-skill">ML/AI</span>
                  <span className="badge-skill">System Architecture</span>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="team-card animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <img src="/images/team-placeholder3.jpg" alt="Sam Lee, COO" className="w-24 h-24 rounded-full mb-4 object-cover shadow-lg transition-transform duration-300 hover:scale-105" loading="lazy" />
                <h3 className="text-2xl font-extrabold gradient-text mb-2">Sam Lee</h3>
                <p className="text-lg text-gray-300 mb-2 font-semibold">Chief Operating Officer</p>
                <p className="text-gray-400 mb-3">Operations expert focused on client success, teamwork, and strategic growth.</p>
                <div className="flex gap-2 justify-center">
                  <span className="badge-skill">Teamwork</span>
                  <span className="badge-skill">Growth Strategy</span>
                  <span className="badge-skill">Operations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Principles */}
        <section id="values" className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 gradient-text">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="value-card animate-fadeInLeft">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  💡
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Innovation</h3>
                <p className="text-gray-300">We embrace creativity and challenge norms, constantly seeking new ideas and approaches.</p>
              </div>
              <div className="value-card animate-fadeInUp">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  🤝
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Integrity</h3>
                <p className="text-gray-300">We act with honesty and transparency, building trust with every interaction.</p>
              </div>
              <div className="value-card animate-fadeInRight">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  🛡️
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Collaboration</h3>
                <p className="text-gray-300">We believe in the power of teamwork, valuing diverse perspectives and open communication.</p>
              </div>
              <div className="value-card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  ❤️
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Passion</h3>
                <p className="text-gray-300">We love what we do, and it shows in every line of code and every pixel we craft.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to start your next project? Let&apos;s discuss how we can help bring your vision to life.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Let&apos;s Talk</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <h4 className="text-white font-semibold mb-4">Why Work With Us?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Quick response within 24 hours</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Free consultation and project estimation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Dedicated project manager</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Transparent communication throughout</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        {/* Custom Animations & Styles */}
        <style jsx global>{`
          html, body {
            overflow-x: hidden !important;
          }
          .gradient-text {
            background: linear-gradient(90deg, #6366f1 0%, #60a5fa 60%, #a78bfa 100%);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
          }
          .gradient-text-hero {
            background: linear-gradient(90deg, #6366f1 0%, #9333ea 50%, #f43f5e 100%);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            animation: gradient-x 6s ease infinite;
          }
          .nav-link {
            color: #e5e7eb;
            transition: color 0.2s, text-shadow 0.2s;
            position: relative;
            font-weight: 600;
          }
          .nav-link:hover {
            color: #fff;
            text-shadow: 0 0 8px #6366f1, 0 0 12px #9333ea;
          }
          .btn-hero-contact {
            display: inline-flex;
            align-items: center;
            padding: 1rem 2.5rem;
            border-radius: 9999px;
            background: linear-gradient(90deg, #6366f1 0%, #9333ea 100%);
            color: #fff;
            font-size: 1.25rem;
            font-weight: 600;
            box-shadow: 0 0 30px 0 #6366f1a0, 0 0 60px 0 #9333eaa0;
            transition: background 0.3s, box-shadow 0.2s, transform 0.2s;
            outline: none;
            border: none;
            position: relative;
            overflow: hidden;
          }
          .btn-hero-contact:hover {
            background: linear-gradient(90deg, #9333ea 0%, #6366f1 100%);
            box-shadow: 0 0 36px 0 #9333eae0, 0 0 80px 0 #6366f1e0;
            transform: scale(1.05) translateY(-2px);
          }
          .btn-hero-contact:active {
            transform: scale(0.98);
          }
          .btn-primary-glow {
            padding: 1rem 2rem;
            border-radius: 9999px;
            background: linear-gradient(90deg, #6366f1 0%, #9333ea 100%);
            color: #fff;
            font-weight: 600;
            font-size: 1.125rem;
            box-shadow: 0 0 24px 0 #6366f1a0, 0 0 48px 0 #9333eaa0;
            transition: background 0.3s, box-shadow 0.2s, transform 0.2s;
            outline: none;
            border: none;
          }
          .btn-primary-glow:hover {
            background: linear-gradient(90deg, #9333ea 0%, #6366f1 100%);
            box-shadow: 0 0 36px 0 #9333eae0, 0 0 80px 0 #6366f1e0;
            transform: scale(1.04);
          }
          .btn-glass {
            padding: 1rem 2rem;
            border-radius: 9999px;
            background: rgba(255,255,255,0.08);
            color: #fff;
            font-weight: 600;
            font-size: 1.125rem;
            border: 1px solid #6366f1;
            transition: background 0.2s, border 0.2s, transform 0.2s;
          }
          .btn-glass:hover {
            background: rgba(255,255,255,0.18);
            border: 1px solid #9333ea;
            transform: scale(1.04);
          }
          .team-card {
            background: linear-gradient(120deg, rgba(99,102,241,0.10), rgba(147,51,234,0.10));
            backdrop-filter: blur(12px);
            border-radius: 1.5rem;
            box-shadow: 0 6px 32px 0 #6366f180;
            border: 1.5px solid #6366f1;
            padding: 2rem;
            text-align: center;
            transition: box-shadow 0.2s, border 0.2s, transform 0.2s;
          }
          .team-card:hover {
            box-shadow: 0 10px 48px 0 #9333ea80, 0 0 64px 0 #6366f1a0;
            border: 2px solid #9333ea;
            transform: scale(1.035);
          }
          .badge-skill {
            background: rgba(99,102,241,0.15);
            color: #6366f1;
            border-radius: 0.5rem;
            padding: 0.25rem 0.75rem;
            font-size: 0.875rem;
            font-weight: 500;
            margin: 0.125rem;
            transition: background 0.2s, color 0.2s;
          }
          .badge-skill:hover {
            background: #6366f1;
            color: #fff;
          }
          .value-card {
            background: linear-gradient(120deg, rgba(59,130,246,0.10), rgba(236,72,153,0.10));
            border-radius: 1.25rem;
            box-shadow: 0 4px 24px 0 #6366f140;
            border: 1.5px solid #6366f1;
            padding: 2rem 1.5rem;
            text-align: center;
            transition: box-shadow 0.2s, border 0.2s, transform 0.2s;
          }
          .value-card:hover {
            box-shadow: 0 8px 32px 0 #f43f5e40, 0 0 56px 0 #6366f180;
            border: 2px solid #f43f5e;
            transform: scale(1.04);
          }
          @keyframes gradient-x {
            0% {background-position:0%}
            100% {background-position:100%}
          }
          @keyframes fadeInUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes textPop {
            0% { transform: scale(0.92); opacity: 0; }
            60% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes blob {
            0%, 100% { transform: scale(1) translateY(0); }
            25% { transform: scale(1.1) translateY(20px); }
            50% { transform: scale(0.95) translateY(-10px); }
            75% { transform: scale(1.05) translateY(10px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-25px); }
          }
          @keyframes wiggle {
            0% { transform: rotate(0deg);}
            25% { transform: rotate(-15deg);}
            50% { transform: rotate(15deg);}
            75% { transform: rotate(-7deg);}
            100% { transform: rotate(0deg);}
          }
          .animate-gradient-x { animation: gradient-x 6s linear infinite; }
          .animate-fadeInUp { animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both; }
          .animate-textPop { animation: textPop 1.1s cubic-bezier(.4,0,.2,1) both; }
          .animate-blob { animation: blob 9s ease-in-out infinite; }
          .animate-float { animation: float 5s ease-in-out infinite; }
          .group-hover\\:animate-wiggle:hover { animation: wiggle 0.6s linear; }
        `}</style>
      </main>
    </>
  );
}