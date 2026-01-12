'use client';

import { useEffect, useState } from 'react';
import TrustBadges from './TrustBadges';

export default function Hero() {
  const [replyRate, setReplyRate] = useState(0);
  const [exposure, setExposure] = useState(0);

  useEffect(() => {
    // Animate counters on mount
    const animateCounter = (setter: (val: number) => void, target: number, suffix: string = '') => {
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
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Big Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=1920&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-cream-50"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left bg-white/98 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-luxury-lg border border-white/20">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full mb-6 border border-gold-200">
                <span className="text-gold-600 text-sm font-semibold">✓ Trusted by 1000+ Companies</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-chocolate-700 mb-6 leading-tight">
                Win Desk Ad Space
              </h1>
              <p className="text-xl md:text-2xl text-chocolate-600 mb-8 leading-relaxed font-medium">
                Cut Through Digital Noise with Physical Touchpoints
              </p>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Send your prospect a gift that sits on their desk, making them see your logo multiple times. 
                A physical touchpoint that's part of your sales and account-based marketing strategy.
              </p>

              {/* Conversion Stats - Larger and More Prominent */}
              <div className="grid grid-cols-2 gap-6 mb-10 max-w-lg mx-auto lg:mx-0">
                <div className="bg-gradient-to-br from-gold-50 to-white rounded-2xl shadow-luxury p-8 border-2 border-gold-200 transform hover:scale-105 transition-transform">
                  <div className="text-6xl font-display font-bold text-chocolate-700 mb-3 animate-counter">
                    {replyRate}%+
                  </div>
                  <div className="text-base text-chocolate-600 font-semibold">Reply Rate</div>
                  <div className="text-xs text-gray-500 mt-2">vs. 2-3% email</div>
                </div>
                <div className="bg-gradient-to-br from-chocolate-50 to-white rounded-2xl shadow-luxury p-8 border-2 border-chocolate-200 transform hover:scale-105 transition-transform">
                  <div className="text-6xl font-display font-bold text-chocolate-700 mb-3 animate-counter">
                    {exposure}x
                  </div>
                  <div className="text-base text-chocolate-600 font-semibold">Daily Exposure</div>
                  <div className="text-xs text-gray-500 mt-2">Before they buy</div>
                </div>
              </div>

              {/* Pricing Indicator */}
              <div className="mb-8 text-center lg:text-left">
                <p className="text-sm text-gray-500 mb-2">Starting at</p>
                <p className="text-3xl font-display font-bold text-chocolate-700">
                  $25-35 <span className="text-lg text-gray-600 font-normal">per gift</span>
                </p>
              </div>

              {/* CTA Buttons - Premium Styling */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="px-10 py-5 bg-chocolate-600 text-white rounded-xl font-semibold text-lg hover:bg-chocolate-700 transition-all shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-1"
                >
                  Learn More
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-10 py-5 bg-white text-chocolate-700 border-2 border-chocolate-600 rounded-xl font-semibold text-lg hover:bg-cream-50 transition-all shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-1"
                >
                  Request a Sample
                </button>
              </div>
            </div>

            {/* Right Column - Large Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg transform hover:scale-105 transition-transform duration-300">
                <div 
                  className="aspect-[3/4] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=1200&q=80')"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustBadges />
    </>
  );
}
