'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [replyRate, setReplyRate] = useState(0);
  const [exposure, setExposure] = useState(0);

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
    animateCounter(setExposure, 12);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end justify-center overflow-hidden" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Full Viewport Hero Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://weary-plum-57sim2yjwn.edgeone.app/prospecting%20jar%20on%20desk.png')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 w-full px-8 pb-16 md:pb-24">
        <div className="max-w-full mx-auto">
          {/* Massive Typography - Full Width */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-light text-neutral-950 mb-8 leading-none tracking-tight text-center md:text-left">
            Get replies when outreach stops working
          </h1>
          
          {/* Stats directly under headline */}
          <div className="flex justify-center md:justify-start gap-12 md:gap-16 mb-12">
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-display font-light text-neutral-950 mb-2">
                {replyRate}%
              </div>
              <div className="text-xs text-neutral-600 uppercase tracking-widest font-light">Reply Rate</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-display font-light text-neutral-950 mb-2">
                {exposure}x
              </div>
              <div className="text-xs text-neutral-600 uppercase tracking-widest font-light">Daily Exposure</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed max-w-2xl">
              The outbound play your prospects notice.<br />
              A physical touchpoint that breaks through inbox fatigue and earns replies.
            </p>
          </div>

          {/* Minimal CTAs - Full Width */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={scrollToContact}
              className="px-12 py-4 bg-neutral-950 text-white text-sm uppercase tracking-widest font-light hover:bg-neutral-800 transition-colors"
            >
              See How It Works
            </button>
            <button
              onClick={scrollToContact}
              className="px-12 py-4 border border-neutral-950 text-neutral-950 text-sm uppercase tracking-widest font-light hover:bg-neutral-50 transition-colors"
            >
              Request Sample Campaign Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
