'use client';

import Image from 'next/image';

export default function StarProduct() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="star-product" className="py-32 border-t border-neutral-200" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-editorial mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-950 mb-8 leading-tight">
            The Outbound Gift
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Your competitive advantage in outbound sales and ABM programs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left - Image */}
          <div className="relative w-full">
            <Image
              src="/images/The Prospecting Gift.png"
              alt="The Outbound Gift"
              width={800}
              height={1200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-4xl font-display font-light text-neutral-950 mb-8 leading-tight">
              A Play That Earns Real Attention
            </h3>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-light">
              A physical touchpoint designed to break through inbox fatigue. Unlike email or cold calls, 
              this gift sits on their desk, creating repeated, non-intrusive exposure to your brand every 
              single day.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-light">
              Each time they reach for a chocolate, they see your logo and value proposition. No spam 
              filters. No ignored calls. Just consistent, welcome brand presence that builds familiarity 
              and goodwill.
            </p>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed font-light">
              This gives your sellers a genuine reason to follow up that recipients actually appreciate, 
              transforming cold outreach into warm conversations.
            </p>

            {/* Minimal Stats */}
            <div className="grid grid-cols-2 gap-8 mb-12 border-t border-neutral-200 pt-8">
              <div>
                <div className="text-5xl font-display font-light text-neutral-950 mb-2">30%+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-light">Reply Rate</div>
              </div>
              <div>
                <div className="text-5xl font-display font-light text-neutral-950 mb-2">25x+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-light">Exposure</div>
              </div>
            </div>

            {/* Value Propositions - Minimal */}
            <div className="space-y-6 mb-12">
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Wins Attention Without Interruption</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">Unlike email and cold calls, this creates passive brand exposure that builds familiarity over time</p>
              </div>
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Reopens Stalled Conversations</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">The perfect reason to re-engage decision-makers who've gone quiet on your outreach attempts</p>
              </div>
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Integrates with Your ABM Strategy</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">Deploy at key moments in your account penetration plan, targeting decision-makers with precision</p>
              </div>
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Accelerates Deal Velocity</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">Creates goodwill that reduces sales resistance and speeds up sales cycles significantly</p>
              </div>
            </div>

            {/* Minimal CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-neutral-950 text-white text-xs uppercase tracking-widest font-light hover:bg-neutral-800 transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 border border-neutral-950 text-neutral-950 text-xs uppercase tracking-widest font-light hover:bg-neutral-50 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
