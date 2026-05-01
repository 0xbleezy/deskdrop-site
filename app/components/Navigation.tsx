'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      const navElement = navRef.current;
      if (element && navElement) {
        const navHeight = navElement.getBoundingClientRect().height;
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

  // Fluid font styles
  const navLinkStyle = { fontSize: 'clamp(0.585rem, 0.935vw, 0.956rem)' };
  const ctaStyle = { fontSize: 'clamp(0.531rem, 0.85vw, 0.903rem)' };

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isHomePage
          ? isScrolled
            ? 'glass-nav'
            : 'bg-transparent'
          : 'glass-nav'
      }`}
    >
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="DeskDrop home">
            <Image
              src="/images/deskdrop-wordmark-white.png"
              alt="DeskDrop"
              width={2465}
              height={498}
              className="h-6 sm:h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/how-it-works"
              className="text-neutral-200 hover:text-white transition-colors font-display font-light tracking-widest uppercase"
              style={navLinkStyle}
            >
              How It Works
            </Link>

            {/* By Role Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('role')}
                className="text-neutral-200 hover:text-white transition-colors font-display font-light tracking-widest uppercase flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                style={navLinkStyle}
                aria-expanded={openDropdown === 'role'}
                aria-haspopup="true"
              >
                <span>By Role</span>
                <span className="text-neutral-400" aria-hidden="true">▼</span>
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-64 glass-dropdown rounded-lg py-4 ${openDropdown === 'role' ? 'open' : ''}`}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                  <Link 
                    href="/use-case/marketing" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">Marketing</div>
                    <div className="text-xs text-neutral-400 mt-1">Gifting to enhance brand awareness and ABM campaigns</div>
                  </Link>
                  <Link 
                    href="/use-case/sales" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">Sales</div>
                    <div className="text-xs text-neutral-400 mt-1">Gifting to book meetings and reach the signature line faster</div>
                  </Link>
                  <Link 
                    href="/use-case/revenue" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">Revenue</div>
                    <div className="text-xs text-neutral-400 mt-1">Gifting to accelerate pipeline and increase deal velocity</div>
                  </Link>
              </div>
            </div>

            {/* Product Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('product')}
                className="text-neutral-200 hover:text-white transition-colors font-display font-light tracking-widest uppercase flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                style={navLinkStyle}
                aria-expanded={openDropdown === 'product'}
                aria-haspopup="true"
              >
                <span>Product</span>
                <span className="text-neutral-400" aria-hidden="true">▼</span>
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-64 glass-dropdown rounded-lg py-4 ${openDropdown === 'product' ? 'open' : ''}`}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                  <Link 
                    href="/product/gifts" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">Gifts</div>
                  </Link>
                  <Link 
                    href="/product/customization" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">Customization</div>
                  </Link>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('solutions')}
                className="text-neutral-200 hover:text-white transition-colors font-display font-light tracking-widest uppercase flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                style={navLinkStyle}
                aria-expanded={openDropdown === 'solutions'}
                aria-haspopup="true"
              >
                <span>Solutions</span>
                <span className="text-neutral-400" aria-hidden="true">▼</span>
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-64 glass-dropdown rounded-lg py-4 ${openDropdown === 'solutions' ? 'open' : ''}`}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                  <Link 
                    href="/solutions/prospect-gifting" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">Prospect Gifting</div>
                    <div className="text-xs text-neutral-400 mt-1">Automate and integrate your gifting programs</div>
                  </Link>
                  <Link 
                    href="/solutions/abm" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">ABM Gifting</div>
                    <div className="text-xs text-neutral-400 mt-1">Execute on your ABM strategy at scale</div>
                  </Link>
                  <Link 
                    href="/solutions/custom" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">Custom Solutions</div>
                    <div className="text-xs text-neutral-400 mt-1">Tailored gifting solutions for your business</div>
                  </Link>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('resources')}
                className="text-neutral-200 hover:text-white transition-colors font-display font-light tracking-widest uppercase flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                style={navLinkStyle}
                aria-expanded={openDropdown === 'resources'}
                aria-haspopup="true"
              >
                <span>Resources</span>
                <span className="text-neutral-400" aria-hidden="true">▼</span>
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-64 glass-dropdown rounded-lg py-4 ${openDropdown === 'resources' ? 'open' : ''}`}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                  <Link 
                    href="/resources/blog" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">Blog</div>
                    <div className="text-xs text-neutral-400 mt-1">Insights and best practices</div>
                  </Link>
                  <Link 
                    href="/resources/customers" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">Customers</div>
                    <div className="text-xs text-neutral-400 mt-1">Success stories and testimonials</div>
                  </Link>
                  <Link 
                    href="/resources/help" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-white/10 text-neutral-200 font-display font-light"
                  >
                    <div className="font-medium text-sm">Help Center</div>
                    <div className="text-xs text-neutral-400 mt-1">FAQs and support</div>
                  </Link>
              </div>
            </div>

            <Link
              href="/pricing"
              className="text-neutral-200 hover:text-white transition-colors font-display font-light tracking-widest uppercase"
              style={navLinkStyle}
            >
              Pricing
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleContactClick}
              className="glass-button-outline px-2.5 py-1 text-neutral-200 font-display font-light tracking-widest uppercase transition-all focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              style={ctaStyle}
              aria-label="Contact us to chat"
            >
              Let&apos;s Chat
            </button>
            <button
              onClick={handleContactClick}
              className="glass-button-light px-2.5 py-1 text-neutral-900 font-display font-light tracking-widest uppercase transition-all focus:outline-none focus:ring-2 focus:ring-neutral-400 rounded"
              style={ctaStyle}
              aria-label="Request a sample"
            >
              REQUEST A SAMPLE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden border-t border-neutral-800/50 glass-nav-mobile mobile-menu-panel ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="flex flex-col py-4 space-y-1">
              <Link
                href="/how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-4 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left block"
              >
                How It Works
              </Link>
              <Link href="/use-case/marketing" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-4 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left block">
                Marketing
              </Link>
              <Link href="/use-case/sales" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-4 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left block">
                Sales
              </Link>
              <Link href="/use-case/revenue" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-4 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left block">
                Revenue
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-4 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left block"
              >
                Pricing
              </Link>
              <div className="border-t border-neutral-800/50 mt-1 pt-1">
                <span className="px-4 py-2 text-[10px] text-neutral-500 font-display tracking-widest uppercase block">Resources</span>
                <Link href="/resources/blog" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-4 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left block">
                  Blog
                </Link>
                <Link href="/resources/customers" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-4 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left block">
                  Customers
                </Link>
                <Link href="/resources/help" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-4 text-xs text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors font-display font-light tracking-widest uppercase text-left block">
                  Help Center
                </Link>
              </div>
              <button
                onClick={handleContactClick}
                className="px-4 py-4 text-xs text-white font-display font-light tracking-widest uppercase text-left w-full"
              >
                Let&apos;s Chat
              </button>
            </div>
          </div>
      </div>
    </nav>
  );
}
