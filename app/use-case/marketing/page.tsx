'use client';

import Link from 'next/link';

export default function MarketingPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-20 pt-32 sm:py-32 sm:pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="max-w-7xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Marketing
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Personalize your ABM<br className="hidden md:inline" /> strategy at scale
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Generate more leads, build brand awareness, and nurture target accounts with personalized gifting 
              that cuts through digital noise.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/#contact"
                className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white text-base font-light rounded hover:bg-neutral-800 transition-colors inline-block text-center"
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
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
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

      {/* Use Cases */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-16 leading-tight">
            Use cases for marketing teams
          </h2>

          <div className="space-y-24">
            <div>
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                Account-Based Marketing
              </div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Target high-value accounts
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Send personalized gifts to your target account list. Each gift features your logo and 
                messaging, creating a physical reminder of your brand that supports your ABM initiatives.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Increase engagement with ICP accounts</li>
                <li>• Support multi-threaded outreach</li>
                <li>• Measure campaign effectiveness</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                Field Marketing
              </div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Event follow-up and lead nurture
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Follow up after events, webinars, and conferences with a memorable touchpoint. Thank 
                attendees and continue the conversation with a gift that keeps your brand in front of them.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Increase event ROI</li>
                <li>• Nurture inbound leads</li>
                <li>• Maintain post-event engagement</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                Brand Awareness
              </div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Build market presence
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Create awareness in new markets or verticals. Strategic gifting helps introduce your brand 
                to key stakeholders, building familiarity and establishing credibility.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Enter new markets</li>
                <li>• Establish thought leadership</li>
                <li>• Support content marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#f5f3f0' }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to enhance your{' '}
            <br />
            ABM strategy?
          </h2>
          <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light">
            See how prospect gifting can help your marketing team generate more leads and accelerate pipeline.
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
