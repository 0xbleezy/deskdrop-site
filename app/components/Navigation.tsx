'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      const navHeight = 56; // Height of fixed navigation
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
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
        <div className="flex justify-end items-center h-14">
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
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-[#f9f8fa]/95">
            <div className="flex flex-col space-y-1 py-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="px-4 py-3 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors font-light tracking-widest uppercase text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-4 py-3 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors font-light tracking-widest uppercase text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('star-product')}
                className="px-4 py-3 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors font-light tracking-widest uppercase text-left"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-3 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors font-light tracking-widest uppercase text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
