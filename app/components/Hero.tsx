'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [replyRate, setReplyRate] = useState(0);
  const [exposure, setExposure] = useState(0);
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
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#2a1f1a'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        <div className="pt-16 pb-12 md:pt-16 md:pb-16">
          {/* Text Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-light !text-white mb-6 leading-[1.1] tracking-tight">
              Get replies when outreach stops working
            </h1>

            {/* Stats directly under headline */}
            <div className="flex gap-8 sm:gap-12 mb-10">
              <div>
                <div className="font-display font-light text-white mb-2" style={{ fontSize: 'clamp(1.5rem, 3.85vw, 6.15rem)', lineHeight: '1.1' }}>
                  {replyRate}%
                </div>
                <div className="text-white/80 uppercase tracking-widest font-light" style={{ fontSize: 'clamp(0.5rem, 0.95vw, 1.5rem)' }}>REPLY RATE</div>
              </div>
              <div>
                <div className="font-display font-light text-white mb-2" style={{ fontSize: 'clamp(1.5rem, 3.85vw, 6.15rem)', lineHeight: '1.1' }}>
                  {exposure}x
                </div>
                <div className="text-white/80 uppercase tracking-widest font-light" style={{ fontSize: 'clamp(0.5rem, 0.95vw, 1.5rem)' }}>EXPOSURE</div>
              </div>
            </div>

            <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed font-light max-w-2xl">
              The outbound play your prospects notice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="glass-button-light px-7 py-2.5 text-black text-xs uppercase tracking-widest font-light transition-all text-center whitespace-nowrap"
              >
                Request a Sample
              </button>
              <button
                onClick={scrollToContact}
                className="glass-button-outline px-5 py-2 text-white text-xs uppercase tracking-widest font-light transition-all text-center whitespace-nowrap"
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
