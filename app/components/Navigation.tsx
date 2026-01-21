'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      // On homepage, scroll to section
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 64;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to homepage section
      window.location.href = `/#${id}`;
    }
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    if (isHomePage) {
      scrollToSection('contact');
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isHomePage
          ? isScrolled
            ? 'bg-neutral-900/98 backdrop-blur-sm border-b border-neutral-800 shadow-sm'
            : 'bg-transparent'
          : 'bg-neutral-900/98 backdrop-blur-sm border-b border-neutral-800 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-white font-display font-light text-xl tracking-tight uppercase">NC</span>
            <span className="text-neutral-400 text-xs font-display font-light tracking-widest uppercase">GIFTING</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* By Role Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('role')}
                className="text-xs text-neutral-200 hover:text-white transition-colors font-display font-light tracking-widest uppercase flex items-center space-x-1"
              >
                <span>By Role</span>
                <span className="text-neutral-400">▼</span>
              </button>
              {openDropdown === 'role' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-neutral-200 shadow-lg py-4">
                  <Link href="/use-case/marketing" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-900 font-display font-light">
                    <div className="font-medium text-sm">Marketing</div>
                    <div className="text-xs text-neutral-600 mt-1">Gifting to enhance brand awareness and ABM campaigns</div>
                  </Link>
                  <Link href="/use-case/sales" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-900 font-display font-light">
                    <div className="font-medium text-sm">Sales</div>
                    <div className="text-xs text-neutral-600 mt-1">Gifting to book meetings and reach the signature line faster</div>
                  </Link>
                  <Link href="/use-case/revenue" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-900 font-display font-light">
                    <div className="font-medium text-sm">Revenue</div>
                    <div className="text-xs text-neutral-600 mt-1">Gifting to accelerate pipeline and increase deal velocity</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Product Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('product')}
                className="text-xs text-neutral-200 hover:text-white transition-colors font-display font-light tracking-widest uppercase flex items-center space-x-1"
              >
                <span>Product</span>
                <span className="text-neutral-400">▼</span>
              </button>
              {openDropdown === 'product' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-neutral-200 shadow-lg py-4">
                  <Link href="/product/features" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-900 font-display font-light">
                    <div className="font-medium text-sm">Features</div>
                  </Link>
                  <Link href="/product/gifts" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-900 font-display font-light">
                    <div className="font-medium text-sm">Gifts</div>
                  </Link>
                  <Link href="/product/customization" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-900 font-display font-light">
                    <div className="font-medium text-sm">Customization</div>
                  </Link>
                  <Link href="/product/packaging" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-900 font-display font-light">
                    <div className="font-medium text-sm">Packaging</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('solutions')}
                className="text-xs text-neutral-200 hover:text-white transition-colors font-display font-light tracking-widest uppercase flex items-center space-x-1"
              >
                <span>Solutions</span>
                <span className="text-neutral-400">▼</span>
              </button>
              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-neutral-200 shadow-lg py-4">
                  <Link href="/solutions/prospect-gifting" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-900 font-display font-light">
                    <div className="font-medium text-sm">Prospect Gifting</div>
                    <div className="text-xs text-neutral-600 mt-1">Automate and integrate your gifting programs</div>
                  </Link>
                  <Link href="/solutions/abm" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-900 font-display font-light">
                    <div className="font-medium text-sm">ABM Gifting</div>
                    <div className="text-xs text-neutral-600 mt-1">Execute on your ABM strategy at scale</div>
                  </Link>
                  <Link href="/solutions/custom" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-900 font-display font-light">
                    <div className="font-medium text-sm">Custom Solutions</div>
                    <div className="text-xs text-neutral-600 mt-1">Tailored gifting solutions for your business</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="text-xs text-neutral-200 hover:text-white transition-colors font-display font-light tracking-widest uppercase"
            >
              Pricing
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleContactClick}
              className="px-4 py-2 border border-neutral-700 text-neutral-200 text-xs font-display font-light tracking-widest uppercase rounded hover:bg-neutral-800 transition-colors"
            >
              Let's Chat
            </button>
            <button
              onClick={handleContactClick}
              className="px-4 py-2 bg-white text-neutral-900 text-xs font-display font-light tracking-widest uppercase rounded hover:bg-neutral-100 transition-colors"
            >
              REQUEST A SAMPLE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-200 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-900/98">
            <div className="flex flex-col py-4 space-y-1">
              <Link href="/use-case/marketing" className="px-4 py-3 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left">
                Marketing
              </Link>
              <Link href="/use-case/sales" className="px-4 py-3 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left">
                Sales
              </Link>
              <Link href="/use-case/revenue" className="px-4 py-3 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left">
                Revenue
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-3 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left block"
              >
                Pricing
              </Link>
              <button
                onClick={handleContactClick}
                className="px-4 py-3 text-xs text-white font-display font-light tracking-widest uppercase text-left"
              >
                Let's Chat
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
