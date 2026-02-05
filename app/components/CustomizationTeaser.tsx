'use client';

import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CustomizationTeaser() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section 
      ref={ref as any}
      className={`py-20 border-t border-neutral-200 fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="max-w-editorial mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            Fully Customizable
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Every detail designed to reinforce your brand and value proposition
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="mb-6 aspect-square max-w-[200px] mx-auto">
              <div 
                className="w-full h-full bg-cover bg-center border border-neutral-200"
                style={{
                  backgroundImage: "url('/images/logo branding.png')"
                }}
              ></div>
            </div>
            <h3 className="text-lg font-display font-light text-neutral-950 mb-2 leading-tight">
              Logo Branding
            </h3>
          </div>

          <div className="text-center">
            <div className="mb-6 aspect-square max-w-[200px] mx-auto">
              <div 
                className="w-full h-full bg-cover bg-center border border-neutral-200"
                style={{
                  backgroundImage: "url('/images/custom messaging.png')"
                }}
              ></div>
            </div>
            <h3 className="text-lg font-display font-light text-neutral-950 mb-2 leading-tight">
              Custom Messaging
            </h3>
          </div>

          <div className="text-center">
            <div className="mb-6 aspect-square max-w-[200px] mx-auto">
              <div 
                className="w-full h-full bg-cover bg-center border border-neutral-200"
                style={{
                  backgroundImage: "url('/images/premium packaging.png')"
                }}
              ></div>
            </div>
            <h3 className="text-lg font-display font-light text-neutral-950 mb-2 leading-tight">
              Premium Packaging
            </h3>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/product/customization"
            className="glass-button-outline inline-block px-8 py-3 text-neutral-950 text-xs uppercase tracking-widest font-light transition-colors"
          >
            See All Customization Options
          </Link>
        </div>
      </div>
    </section>
  );
}
