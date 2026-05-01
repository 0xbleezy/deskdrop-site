import Link from 'next/link';
import InlineFAQ from '../../components/InlineFAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prospect Gifting for Revenue Teams — Accelerate Pipeline | DeskDrop',
  description: 'Increase pipeline velocity, optimize gifting ROI, and support ABM programs. Strategic prospect gifting that helps revenue teams hit targets faster.',
  openGraph: {
    title: 'Prospect Gifting for Revenue Teams — Accelerate Pipeline | DeskDrop',
    description: 'Increase pipeline velocity and optimize gifting ROI. Strategic prospect gifting for revenue teams.',
    url: 'https://thedeskdrop.com/use-case/revenue',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prospect Gifting for Revenue Teams | DeskDrop',
    description: 'Increase pipeline velocity and optimize gifting ROI. Strategic prospect gifting for revenue teams.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/use-case/revenue' },
};

export default function RevenuePage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-20 pt-32 sm:py-32 sm:pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
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
                See How Revenue Leaders Use This
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
                Increase pipeline velocity
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Move deals through your funnel faster. Strategic gifting at key moments accelerates the 
                sales cycle and reduces time to close, helping you hit revenue targets.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Optimize revenue operations
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Measure and optimize your gifting spend. Track ROI, analyze campaign performance, and make 
                data-driven decisions that support your revenue goals.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
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

      {/* Explore More */}
      <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 text-center">Explore more</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link href="/use-case/sales" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Sales</div>
              <div className="text-xs text-neutral-500 mt-1">Book meetings &amp; close deals</div>
            </Link>
            <Link href="/use-case/marketing" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Marketing</div>
              <div className="text-xs text-neutral-500 mt-1">ABM &amp; demand gen</div>
            </Link>
            <Link href="/solutions/prospect-gifting" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Prospect Gifting</div>
              <div className="text-xs text-neutral-500 mt-1">Full solution overview</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-warm">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
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
            See How Revenue Leaders Use This
          </Link>
          <InlineFAQ faqs={[
            { question: 'How does this impact pipeline velocity?', answer: 'Prospects who receive a gift move through the pipeline 2-3x faster on average. The physical touchpoint creates goodwill and genuine interest that accelerates every stage of the sales cycle.' },
            { question: 'Can I measure ROI on gifting spend?', answer: 'Yes. Track reply rates (30%+), meetings booked, and deals influenced. Most campaigns pay for themselves with the first closed deal from gifted prospects.' },
            { question: 'How does this scale across the team?', answer: 'Monthly plans support consistent gifting across your entire sales org. We handle production scheduling, shipping, and provide the playbook—your team just follows up.' },
          ]} />
        </div>
      </section>
    </main>
  );
}
