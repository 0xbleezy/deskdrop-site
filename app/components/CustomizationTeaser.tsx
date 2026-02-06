'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CustomizationTeaser() {
  const { ref, isVisible } = useScrollReveal();

  const cards = [
    {
      image: '/images/logo branding.png',
      label: 'Your logo on every wrapper',
    },
    {
      image: '/images/custom messaging.png',
      label: 'Your value prop, their desk',
    },
    {
      image: '/images/premium packaging.png',
      label: 'Your brand, present for days',
    },
  ];

  return (
    <section 
      ref={ref as any}
      className={`py-16 sm:py-24 fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs text-neutral-400 uppercase tracking-[0.3em] font-light mb-4">Customization</p>
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            Fully Customizable
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Every detail designed to reinforce your brand and value proposition
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <div key={index} className="glass-card p-8 text-center">
              {/* Image wrapper — fixed aspect ratio, neutral bg */}
              <div className="aspect-square w-full rounded-xl bg-black/5 flex items-center justify-center overflow-hidden mb-4">
                <Image
                  src={card.image}
                  alt={card.label}
                  width={400}
                  height={400}
                  className="object-contain w-[78%] h-[78%]"
                />
              </div>
              
              {/* Primary label — promoted descriptor */}
              <p className="text-base font-light text-neutral-700 leading-relaxed">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA with divider */}
        <div className="mt-12 pt-10 border-t border-black/10 text-center">
          <Link
            href="/product/customization"
            className="glass-button-light inline-block px-8 py-4 text-neutral-950 text-xs uppercase tracking-widest font-light transition-colors"
          >
            See Customization Options
          </Link>
        </div>
      </div>
    </section>
  );
}
