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
          ? 'bg-[#f9f8fa]/90'
          : 'bg-[#f9f8fa]/80'
      }`}
    >
      <div className="max-w-editorial mx-auto px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-light text-neutral-900 hover:text-neutral-600 transition-colors tracking-wider uppercase"
            >
              Chocolate Gifting
            </button>
          </div>
          <div className="hidden md:flex space-x-12">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors font-light tracking-widest uppercase"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors font-light tracking-widest uppercase"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('star-product')}
              className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors font-light tracking-widest uppercase"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors font-light tracking-widest uppercase"
            >
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-neutral-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
