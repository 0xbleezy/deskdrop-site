import Link from 'next/link';
import InlineFAQ from '../../components/InlineFAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABM Gifting Strategy — Target High-Value Accounts | DeskDrop',
  description: 'Execute your ABM strategy at scale with personalized gifting. Multi-threaded outreach, account nurturing, and event follow-up for target accounts.',
  openGraph: {
    title: 'ABM Gifting Strategy — Target High-Value Accounts | DeskDrop',
    description: 'Execute your ABM strategy at scale with personalized gifting for target accounts.',
    url: 'https://thedeskdrop.com/solutions/abm',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABM Gifting Strategy | DeskDrop',
    description: 'Execute your ABM strategy at scale with personalized gifting for target accounts.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/solutions/abm' },
};

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
              ABM gifting strategy
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
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Target high-value accounts
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Send personalized gifts to your target account list. Each gift features your logo 
                and messaging, supporting your ABM initiatives.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Multi-threaded outreach
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Reach multiple stakeholders within target accounts. Coordinate gifting across sales 
                and marketing teams for cohesive account penetration.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Accelerate pipeline
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
            ABM use cases
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Account activation
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

            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Account nurturing
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

            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Multi-stakeholder engagement
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

            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Event follow-up
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

      {/* ABM vs Prospect Gifting */}
      <section className="py-16 sm:py-24 bg-page border-t border-neutral-100">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-12 leading-tight text-center">
            ABM gifting vs. prospect gifting
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded">
              <h3 className="text-lg font-display font-medium text-neutral-900 mb-4">ABM gifting</h3>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Multiple stakeholders per account</li>
                <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Coordinated across sales &amp; marketing</li>
                <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Long-cycle account nurturing</li>
                <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Event follow-up &amp; re-engagement</li>
                <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Best for teams with a defined target account list</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded">
              <h3 className="text-lg font-display font-medium text-neutral-900 mb-4">Prospect gifting</h3>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> 1:1 outbound prospecting</li>
                <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Sales-led cold outreach</li>
                <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Quick-turn meeting generation</li>
                <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Pilot-friendly for testing</li>
                <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Best for SDRs and AEs running sequences</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-base text-neutral-600 font-light mt-8 max-w-2xl mx-auto">
            Not sure which approach fits? Most teams start with prospect gifting to prove ROI, then expand into ABM as they scale their account strategy.
          </p>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 text-center">Explore more</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link href="/use-case/marketing" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Marketing</div>
              <div className="text-xs text-neutral-500 mt-1">ABM &amp; demand gen</div>
            </Link>
            <Link href="/solutions/prospect-gifting" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Prospect Gifting</div>
              <div className="text-xs text-neutral-500 mt-1">1:1 outbound gifting</div>
            </Link>
            <Link href="/solutions/custom" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Custom Solutions</div>
              <div className="text-xs text-neutral-500 mt-1">Tailored programs</div>
            </Link>
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
          <InlineFAQ faqs={[
            { question: 'How many stakeholders can I reach per account?', answer: 'There\'s no limit. Most ABM teams send to 3-5 decision-makers per target account, coordinating delivery timing with their outreach cadence for maximum impact.' },
            { question: 'Can I coordinate gifting across my team?', answer: 'Yes. We handle production and shipping centrally, so your sales and marketing teams can coordinate account-level gifting without logistical overhead.' },
            { question: 'How does this fit into our existing ABM stack?', answer: 'Prospect gifting adds a physical layer to your existing digital campaigns. Coordinate gift delivery with email sequences and ads for a multi-channel account experience.' },
          ]} />
        </div>
      </section>
    </main>
  );
}
