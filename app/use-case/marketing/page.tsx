import Link from 'next/link';
import PlaybookTeaser from '../../components/PlaybookTeaser';
import InlineFAQ from '../../components/InlineFAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prospect Gifting for Marketing — Personalize ABM at Scale | DeskDrop',
  description: 'Generate more leads, build brand awareness, and nurture target accounts with personalized gifting that cuts through digital noise.',
  openGraph: {
    title: 'Prospect Gifting for Marketing — Personalize ABM at Scale | DeskDrop',
    description: 'Generate more leads, build brand awareness, and nurture target accounts with personalized gifting.',
    url: 'https://thedeskdrop.com/use-case/marketing',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prospect Gifting for Marketing | DeskDrop',
    description: 'Generate more leads, build brand awareness, and nurture target accounts with personalized gifting.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/use-case/marketing' },
};

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
                Launch a Campaign
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Accelerate ABM campaigns
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Execute personalized campaigns at scale. Send targeted gifts to your ideal customer profile 
                (ICP) accounts, increasing engagement rates and shortening sales cycles.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Build brand awareness
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Create lasting impressions with physical touchpoints that sit on prospects&apos; desks. Your logo 
                and messaging stay visible day after day, building brand recognition organically.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Nurture target accounts
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Keep your brand top-of-mind during long sales cycles. Strategic gifting maintains engagement 
                with key decision-makers, moving accounts through the funnel faster.
              </p>
            </div>
          </div>

          <PlaybookTeaser />
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 text-center">Explore more</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link href="/use-case/sales" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Sales</div>
              <div className="text-xs text-neutral-500 mt-1">Book meetings &amp; close deals</div>
            </Link>
            <Link href="/use-case/revenue" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Revenue</div>
              <div className="text-xs text-neutral-500 mt-1">Pipeline acceleration</div>
            </Link>
            <Link href="/solutions/abm" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">ABM Gifting</div>
              <div className="text-xs text-neutral-500 mt-1">Account-based strategy</div>
            </Link>
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
            Launch a Campaign
          </Link>
          <InlineFAQ faqs={[
            { question: 'How does this integrate with our ABM program?', answer: 'Physical gifts create a memorable touchpoint that complements your digital campaigns. Coordinate delivery with email sequences and LinkedIn outreach for maximum impact on target accounts.' },
            { question: 'Can we brand the gifts for different campaigns?', answer: 'Each order features your logo and custom messaging on every wrapper. For different messaging tests, we can coordinate split orders or sequential campaigns.' },
            { question: 'What metrics should we track?', answer: 'Track reply rates (expect 30%+), meetings booked, and pipeline generated. Most teams see ROI within the first campaign when they follow our playbook.' },
          ]} />
        </div>
      </section>
    </main>
  );
}
