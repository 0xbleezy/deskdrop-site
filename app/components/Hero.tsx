'use client';

import { useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef} 
      id="hero" 
      className="relative min-h-screen flex items-start sm:items-center overflow-hidden pt-12 md:pt-[8vh]"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#2a1f1a'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        <div className="pt-16 pb-12 md:pt-[4.6rem] md:pb-[4.6rem]">
          {/* Text Content */}
          <div>
            <h1 className="hero-headline font-display font-light !text-white mb-[3.15rem] leading-[1.1] tracking-tight">
              Get replies when outreach stops working
            </h1>

            <p className="text-white/90 mb-[3.15rem] leading-relaxed font-light max-w-2xl" style={{ fontSize: 'clamp(1.1rem, 1.25vw, 2rem)' }}>
              The outbound play your prospects notice.
            </p>

            <div className="hidden sm:flex flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="glass-button-light px-7 py-2.5 text-black text-xs uppercase tracking-widest font-light transition-all text-center whitespace-nowrap"
              >
                Request a Sample
              </button>
              <a
                href="/how-it-works"
                className="glass-button-outline px-5 py-2 text-white text-xs uppercase tracking-widest font-light transition-all text-center whitespace-nowrap"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
