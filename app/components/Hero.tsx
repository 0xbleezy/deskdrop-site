'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [replyRate, setReplyRate] = useState(0);
  const [exposure, setExposure] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animateCounter = (setter: (val: number) => void, target: number) => {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, duration / steps);
    };

    animateCounter(setReplyRate, 30);
    animateCounter(setExposure, 25);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const heroHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / heroHeight));
      const parallaxSpeed = 0.3;
      const maxOffset = heroHeight * 0.2;
      const offset = scrollProgress * maxOffset * parallaxSpeed;
      setParallaxOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className="relative min-h-screen flex items-start sm:items-center overflow-hidden pt-12 md:pt-0"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
        <div className="pt-6 pb-12 md:pt-16 md:pb-16">
          {/* Text Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-light !text-white mb-6 leading-[1.1] tracking-tight">
              Get replies when outreach<br className="hidden md:inline" /> stops working
            </h1>
            
            {/* Stats directly under headline */}
            <div className="flex gap-8 sm:gap-12 mb-10">
              <div>
                <div className="text-5xl md:text-6xl font-display font-light text-white mb-2">
                  {replyRate}%
                </div>
                <div className="text-xs text-white/80 uppercase tracking-widest font-light">REPLY RATE</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-display font-light text-white mb-2">
                  {exposure}x
                </div>
                <div className="text-xs text-white/80 uppercase tracking-widest font-light">EXPOSURE</div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl">
              The outbound play your prospects notice.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="glass-button-light px-8 py-4 text-neutral-700 text-base font-light rounded transition-all text-center whitespace-nowrap"
              >
                SEE HOW IT WORKS
              </button>
              <button
                onClick={scrollToContact}
                className="glass-button-outline px-8 py-4 text-white text-base font-light rounded transition-all text-center whitespace-nowrap"
              >
                REQUEST A SAMPLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
