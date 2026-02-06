'use client';

import Script from 'next/script';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref as any} id="contact" className={`py-16 sm:py-24 fade-in-on-scroll ${isVisible ? 'visible' : ''}`}>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
        <div className="text-center mb-10">
          <p className="text-xs text-neutral-400 uppercase tracking-[0.3em] font-light mb-4">Get Started</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-neutral-950 mb-4 leading-tight">
            Start a simple pilot.
          </h2>
          <p className="text-lg text-neutral-600 max-w-md mx-auto leading-relaxed font-light">
            We'll help you design a small test for your target accounts.
          </p>
        </div>

        {/* GlassCard form container */}
        <div className="glass-card p-6 sm:p-8">
          {/* HubSpot Form */}
          <div className="hubspot-form-wrapper">
            <Script
              src="https://js.hsforms.net/forms/embed/23669867.js"
              strategy="lazyOnload"
            />
            <div
              className="hs-form-frame"
              data-region="na1"
              data-form-id="f351de3d-bb39-4ed4-b39e-ba1ad7e909be"
              data-portal-id="23669867"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
