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
      
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
        <div className="pt-6 pb-12 md:pt-16 md:pb-16">
          {/* Text Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-light !text-white mb-6 leading-[1.1] tracking-tight">
              Get replies when outreach stops working
            </h1>

            {/* Conviction line — all breakpoints */}
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-6 md:mb-0">
              Sales is an attention game. This gets attention.
            </p>

            {/* Mobile-only product image with extra breathing room */}
            <div className="md:hidden flex justify-center my-10">
              <img
                src="/images/The Prospecting Gift.png"
                alt="Custom branded chocolate gift jar"
                className="w-[80%] h-auto object-contain"
              />
            </div>

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

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-white/90 hover:bg-white text-black border border-black/10 shadow-sm px-10 py-4 text-sm uppercase tracking-widest font-light rounded-lg transition-all text-center whitespace-nowrap"
              >
                Request a Sample
              </button>
              <button
                onClick={scrollToContact}
                className="bg-white/15 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 text-sm uppercase tracking-widest font-light rounded-lg transition-all text-center whitespace-nowrap"
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
