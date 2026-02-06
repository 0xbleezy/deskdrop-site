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
      ref={ref as any}
      id="star-product" 
      className={`py-16 sm:py-24 lg:py-32 overflow-hidden fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      {/* Two-column editorial layout — image bleeds left, text constrained right */}
      <div className="lg:grid lg:grid-cols-2 items-center">
        
        {/* Left — Oversized jar, bleeds off left viewport edge on desktop */}
        <div className="hidden lg:block relative lg:px-0 lg:mb-0">
          <div className="lg:-ml-[18vw] relative">
            {/* Subtle radial glow behind jar for grounding */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
            <Image
              src="/images/The Prospecting Gift.png"
              alt="Custom branded chocolate gift jar — a physical desk touchpoint"
              width={800}
              height={1200}
              className="relative w-full h-auto object-contain lg:scale-[1.3] transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Right — Constrained editorial text column */}
        <div className="px-4 sm:px-6 lg:pl-4 lg:pr-[7vw] lg:max-w-[560px] text-center lg:text-left mx-auto lg:mx-0">
          <p className="text-xs text-neutral-400 uppercase tracking-[0.3em] font-light mb-6">The Product</p>
          
          <h2 className="!text-3xl md:!text-4xl lg:!text-[2.75rem] font-display font-light text-neutral-950 mb-4 !leading-[1.15] tracking-tight">
            A Brand Moment That Lives on Their Desk
          </h2>
          
          <p className="text-xl text-neutral-500 font-light mb-8 leading-relaxed">
            Sales is an attention game. This gets attention.
          </p>

          {/* Mobile-only product image — sits between conviction line and body copy */}
          <div className="lg:hidden flex justify-center my-10">
            <Image
              src="/images/The Prospecting Gift.png"
              alt="Custom branded chocolate gift jar"
              width={800}
              height={1200}
              className="w-[80%] h-auto object-contain"
              priority
            />
          </div>
          
          <p className="text-lg text-neutral-600 font-light mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
