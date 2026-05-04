'use client';

import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function StarProduct() {
  const { ref, isVisible } = useScrollReveal();
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      id="star-product" 
      className={`py-16 sm:py-24 md:py-32 overflow-hidden fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      {/* Two-column editorial layout — image bleeds left, text constrained right */}
      <div className="md:grid md:grid-cols-2 items-center">
        
        {/* Left — Oversized jar, bleeds off left viewport edge on desktop */}
        <div className="hidden md:block relative md:px-0 md:mb-0">
          <div className="md:-ml-[18vw] relative">
            {/* Subtle radial glow behind jar for grounding */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
            <Image
              src="/images/The Prospecting Gift.png"
              alt="Custom branded chocolate gift jar — a physical desk touchpoint"
              width={800}
              height={1200}
              className="relative w-full h-auto object-contain md:scale-[1.124] transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Right — Constrained editorial text column */}
        <div className="px-4 sm:px-6 md:pl-4 md:pr-[7vw] text-center md:text-left mx-auto md:mx-0">
          <h2 className="font-display font-light text-neutral-950 mb-8 leading-[1.15] tracking-tight">
            This gets attention.
          </h2>

          {/* Mobile-only product image — sits between conviction line and body copy */}
          <div className="md:hidden flex justify-center my-10">
            <Image
              src="/images/The Prospecting Gift.png"
              alt="Custom branded chocolate gift jar"
              width={800}
              height={1200}
              className="w-[80%] h-auto object-contain"
              priority
            />
          </div>
          
          <p className="text-lg text-neutral-600 font-light mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
            A physical desk drop designed to break through inbox fatigue. Unlike email or cold calls, 
            this gift stays visible, creating daily brand exposure without interruption.
          </p>

          {/* Value bullets — tight, skimmable */}
          <ul className="space-y-4 mb-10 inline-block text-left">
            <li className="flex items-start gap-3">
              <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />
              <span className="text-base text-neutral-600 font-light leading-relaxed">Sits on their desk, not in spam</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />
              <span className="text-base text-neutral-600 font-light leading-relaxed">Builds daily brand familiarity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />
              <span className="text-base text-neutral-600 font-light leading-relaxed">Creates a natural, appreciated follow-up</span>
            </li>
          </ul>

          {/* Single primary CTA */}
          <div className="mt-10">
            <button
              onClick={scrollToContact}
              className="glass-button px-10 py-4 text-white text-xs uppercase tracking-widest font-light transition-colors"
            >
              Request a Sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
