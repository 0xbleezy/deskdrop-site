'use client';

import Link from 'next/link';

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-20 pt-32 sm:py-32 sm:pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Marketing
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Personalize your ABM strategy at scale
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-4xl">
              Generate more leads, build brand awareness, and nurture target accounts with personalized gifting 
              that cuts through digital noise.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/#contact"
                className="glass-button w-full sm:w-auto px-8 py-4 text-white text-base font-light rounded transition-all inline-block text-center"
              >
                Get Started
              </Link>
              <Link
                href="/how-it-works"
                className="text-base text-neutral-700 font-light hover:text-neutral-900 transition-colors text-center sm:text-left"
              >
                See how it works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Accelerate ABM campaigns
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Execute personalized campaigns at scale. Send targeted gifts to your ideal customer profile 
                (ICP) accounts, increasing engagement rates and shortening sales cycles.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Build brand awareness
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Create lasting impressions with physical touchpoints that sit on prospects' desks. Your logo 
                and messaging stay visible day after day, building brand recognition organically.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Nurture target accounts
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Keep your brand top-of-mind during long sales cycles. Strategic gifting maintains engagement 
                with key decision-makers, moving accounts through the funnel faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-warm">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
          <h2 className="text-5xl md:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to enhance your{' '}
            <br />
            ABM strategy?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light">
            See how prospect gifting can help your marketing team generate more leads and accelerate pipeline.
          </p>
          <Link
            href="/#contact"
            className="glass-button px-8 py-4 text-white text-base font-light rounded transition-all inline-block text-center"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
