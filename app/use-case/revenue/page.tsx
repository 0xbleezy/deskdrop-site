'use client';

import Link from 'next/link';

export default function RevenuePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-32 pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Revenue
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Accelerate pipeline{' '}
              <br />
              and increase velocity
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Drive revenue growth with strategic gifting that accelerates pipeline, increases deal velocity, 
              and supports your go-to-market motion. Measure ROI and optimize your revenue operations with 
              data-driven insights.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-neutral-900 text-white text-base font-light rounded hover:bg-neutral-800 transition-colors inline-block text-center"
              >
                Get Started
              </Link>
              <Link
                href="/"
                className="text-base text-neutral-700 font-light hover:text-neutral-900 transition-colors"
              >
                See how it works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
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

      {/* Use Cases */}
      <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-16 leading-tight">
            Use cases for revenue teams
          </h2>

          <div className="space-y-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                  Pipeline Acceleration
                </div>
                <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                  Move deals faster
                </h3>
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                  Accelerate pipeline by removing friction from the sales process. Strategic gifting at 
                  key moments keeps deals moving forward and reduces stalls.
                </p>
                <ul className="space-y-3 text-base text-neutral-700 font-light">
                  <li>• Reduce sales cycle length</li>
                  <li>• Increase conversion rates</li>
                  <li>• Support quota attainment</li>
                </ul>
              </div>
              <div className="aspect-[4/3] bg-cover bg-center rounded border border-neutral-200"
                style={{ backgroundImage: "url('/images/prospecting jar on desk.png')" }}
              ></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="md:order-2">
                <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                  Revenue Operations
                </div>
                <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                  Measure and optimize ROI
                </h3>
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                  Track the impact of gifting on revenue metrics. Analyze campaign performance, measure ROI, 
                  and optimize spend to maximize revenue impact.
                </p>
                <ul className="space-y-3 text-base text-neutral-700 font-light">
                  <li>• Track campaign ROI</li>
                  <li>• Optimize gifting spend</li>
                  <li>• Report on revenue impact</li>
                </ul>
              </div>
              <div className="md:order-1 aspect-[4/3] bg-cover bg-center rounded border border-neutral-200"
                style={{ backgroundImage: "url('/images/Prospect Gifting.png')" }}
              ></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                  Go-to-Market Alignment
                </div>
                <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                  Coordinate across teams
                </h3>
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                  Align sales and marketing around shared revenue goals. Coordinate gifting programs that 
                  support both outbound efforts and ABM initiatives.
                </p>
                <ul className="space-y-3 text-base text-neutral-700 font-light">
                  <li>• Align sales and marketing</li>
                  <li>• Support ABM coordination</li>
                  <li>• Maximize revenue impact</li>
                </ul>
              </div>
              <div className="aspect-[4/3] bg-cover bg-center rounded border border-neutral-200"
                style={{ backgroundImage: "url('/images/desk no jar.png')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#e6f7f9' }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-16 xl:px-20 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to accelerate revenue?
          </h2>
          <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light">
            See how prospect gifting can help your revenue team increase pipeline velocity and hit targets.
          </p>
          <Link
            href="/#contact"
            className="px-8 py-4 bg-neutral-900 text-white text-base font-light rounded hover:bg-neutral-800 transition-colors inline-block text-center"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
