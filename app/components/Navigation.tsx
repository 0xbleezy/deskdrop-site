'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 shadow-luxury backdrop-blur-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-display font-bold text-chocolate-700 hover:text-chocolate-600 transition-colors"
            >
              Chocolate Gifting
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-chocolate-600 hover:text-chocolate-700 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-chocolate-600 hover:text-chocolate-700 transition-colors font-medium"
            >
              Corporate Gifts
            </button>
            <button
              onClick={() => scrollToSection('star-product')}
              className="text-chocolate-600 hover:text-chocolate-700 transition-colors font-medium"
            >
              Star Product
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-chocolate-600 hover:text-chocolate-700 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-chocolate-600 hover:text-chocolate-700 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

