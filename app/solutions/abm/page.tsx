import Link from 'next/link';

export default function ABMPage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-32 pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
              ABM Gifting Strategy
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Execute on your ABM strategy at scale with personalized gifting that nurtures target 
              accounts and accelerates pipeline. Create meaningful touchpoints for key decision-makers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Target High-Value Accounts
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Send personalized gifts to your target account list. Each gift features your logo 
                and messaging, supporting your ABM initiatives.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Multi-Threaded Outreach
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Reach multiple stakeholders within target accounts. Coordinate gifting across sales 
                and marketing teams for cohesive account penetration.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Accelerate Pipeline
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Keep your brand top-of-mind during long sales cycles. Strategic gifting maintains 
                engagement and moves accounts through the funnel faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-12 leading-tight text-center">
            ABM Use Cases
          </h2>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Account Activation
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Break into new target accounts with personalized gifting. Create memorable first 
                impressions that open doors and start conversations.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Engage key decision-makers</li>
                <li>• Build brand awareness</li>
                <li>• Establish credibility</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Account Nurturing
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Maintain engagement with target accounts during long sales cycles. Strategic gifting 
                keeps your brand top-of-mind and accelerates deal velocity.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Sustain account momentum</li>
                <li>• Nurture relationships</li>
                <li>• Move deals forward</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Multi-Stakeholder Engagement
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Reach multiple stakeholders within target accounts. Coordinate gifting across teams 
                to create cohesive account penetration.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Engage multiple stakeholders</li>
                <li>• Coordinate across teams</li>
                <li>• Create cohesive experiences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Event Follow-Up
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Follow up after events and conferences with memorable touchpoints. Thank attendees 
                and continue conversations with gifts that reinforce your brand.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Increase event ROI</li>
                <li>• Nurture inbound leads</li>
                <li>• Maintain post-event engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to enhance your ABM strategy?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light">
            See how ABM gifting can help you execute on your account-based marketing strategy at scale.
          </p>
          <Link
            href="/#contact"
            className="glass-button inline-block px-8 py-4 text-white text-base font-light rounded transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
