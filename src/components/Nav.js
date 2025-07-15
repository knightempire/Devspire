import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className={`text-2xl font-bold gradient-text ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
          DevSpire
        </div>
        <div className={`hidden md:flex space-x-8 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
