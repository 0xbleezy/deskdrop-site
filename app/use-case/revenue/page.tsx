'use client';

import Link from 'next/link';

export default function RevenuePage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-20 pt-32 sm:py-32 sm:pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Revenue
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Accelerate pipeline and increase velocity
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-4xl">
              Drive revenue growth with strategic gifting that accelerates pipeline, increases deal velocity, 
              and supports your go-to-market motion.
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
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Increase pipeline velocity
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Move deals through your funnel faster. Strategic gifting at key moments accelerates the 
                sales cycle and reduces time to close, helping you hit revenue targets.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Optimize revenue operations
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Measure and optimize your gifting spend. Track ROI, analyze campaign performance, and make 
                data-driven decisions that support your revenue goals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Support ABM programs
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Execute on your ABM strategy at scale. Coordinate gifting across sales and marketing teams 
                to create cohesive experiences for your target accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-warm">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw] text-center">
          <h2 className="text-5xl md:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to accelerate revenue?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light">
            See how prospect gifting can help your revenue team increase pipeline velocity and hit targets.
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
