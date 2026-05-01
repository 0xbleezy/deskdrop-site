'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';
import ContactForm from './ContactForm';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} id="contact" className={`py-16 sm:py-24 fade-in-on-scroll ${isVisible ? 'visible' : ''}`}>
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        <div className="text-center mb-10">
          <p className="text-xs text-neutral-400 uppercase tracking-[0.3em] font-light mb-4">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-display font-light text-neutral-950 mb-4 leading-tight">
            Start a simple pilot.
          </h2>
          <p className="text-lg text-neutral-600 max-w-md mx-auto leading-relaxed font-light">
            We&apos;ll help you design a small test for your target accounts.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8 max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
