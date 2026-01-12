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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Full Viewport Hero Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-editorial mx-auto px-8 py-32 w-full">
        <div className="text-center">
          {/* Massive Typography */}
          <h1 className="text-8xl md:text-9xl font-display font-light text-neutral-950 mb-8 leading-none tracking-tight">
            Win Desk<br />Ad Space
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-700 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            Cut through digital noise with physical touchpoints.<br />
            A prospecting gift that sits on their desk.
          </p>

          {/* Minimal Stats */}
          <div className="flex justify-center gap-16 mb-20">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-display font-light text-neutral-950 mb-2">
                {replyRate}%
              </div>
              <div className="text-xs text-neutral-600 uppercase tracking-widest font-light">Reply Rate</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-display font-light text-neutral-950 mb-2">
                {exposure}x
              </div>
              <div className="text-xs text-neutral-600 uppercase tracking-widest font-light">Daily Exposure</div>
            </div>
          </div>

          {/* Minimal CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="px-12 py-4 bg-neutral-950 text-white text-sm uppercase tracking-widest font-light hover:bg-neutral-800 transition-colors"
            >
              Learn More
            </button>
            <button
              onClick={scrollToContact}
              className="px-12 py-4 border border-neutral-950 text-neutral-950 text-sm uppercase tracking-widest font-light hover:bg-neutral-50 transition-colors"
            >
              Request Sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
