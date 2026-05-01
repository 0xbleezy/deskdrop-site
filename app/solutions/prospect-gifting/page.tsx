import Link from 'next/link';
import PlaybookTeaser from '../../components/PlaybookTeaser';
import InlineFAQ from '../../components/InlineFAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prospect Gifting Solution — Send Gifts That Book Meetings | DeskDrop',
  description: 'Send gifts that get noticed. Follow up with the sequence that gets replies. 30%+ reply rates, scalable production, and direct shipping included.',
  openGraph: {
    title: 'Prospect Gifting Solution — Send Gifts That Book Meetings | DeskDrop',
    description: 'Send gifts that get noticed. 30%+ reply rates, scalable production, and direct shipping included.',
    url: 'https://thedeskdrop.com/solutions/prospect-gifting',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prospect Gifting Solution | DeskDrop',
    description: 'Send gifts that get noticed. 30%+ reply rates, scalable production, and direct shipping included.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/solutions/prospect-gifting' },
};

export default function ProspectGiftingPage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-32 pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Solutions
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Prospect gifting<br className="hidden md:inline" /> solution
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Send gifts that get noticed. Follow up with a sequence that gets replies. We handle 
              production, shipping, and give you the playbook to convert attention into meetings.
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
                30%+ reply rates
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Get responses when traditional outreach fails. Physical gifts cut through digital 
                noise and create a reason for prospects to respond.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Scalable production
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Scale from 50 to hundreds of prospects. Our production model handles campaigns 
                of any size with consistent quality and branding.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Direct shipping
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We handle all logistics and shipping. Send directly to your prospect list with 
                delivery confirmations included.
              </p>
            </div>
          </div>

          <PlaybookTeaser />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-12 leading-tight text-center">
            Use cases
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Outbound prospecting
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Break through inbox fatigue with physical touchpoints. Send thoughtful gifts before 
                your first outreach to earn attention and get responses.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Stand out from competitors</li>
                <li>• Earn genuine interest</li>
                <li>• Create memorable first impressions</li>
              </ul>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Re-engagement campaigns
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Reopen conversations with stalled deals or cold prospects. A well-timed gift can 
                re-energize conversations and maintain momentum.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Re-energize stuck deals</li>
                <li>• Maintain engagement</li>
                <li>• Build relationships with champions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16 sm:py-24 bg-page border-t border-neutral-100">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 text-center">Explore more</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link href="/use-case/sales" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Sales</div>
              <div className="text-xs text-neutral-500 mt-1">Book meetings &amp; close deals</div>
            </Link>
            <Link href="/solutions/abm" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">ABM Gifting</div>
              <div className="text-xs text-neutral-500 mt-1">Account-based strategy</div>
            </Link>
            <Link href="/product/gifts" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">The Gift</div>
              <div className="text-xs text-neutral-500 mt-1">See the product</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light">
            See how prospect gifting can help you break through inbox fatigue and earn responses.
          </p>
          <Link
            href="/#contact"
            className="glass-button inline-block px-8 py-4 text-white text-base font-light rounded transition-all"
          >
            Get Started
          </Link>
          <InlineFAQ faqs={[
            { question: 'What\'s the minimum order for a pilot program?', answer: 'Our minimum custom production run starts at 50 jars. We offer three jar sizes (Scale, Desk, and Office), with the Office size being our most popular for prospecting campaigns.' },
            { question: 'How quickly can I deploy this?', answer: 'Production takes 2 weeks from order confirmation. Once production completes, we ship directly to your prospect list. Plan your campaign timing accordingly.' },
            { question: 'What kind of ROI can I expect?', answer: 'Our clients see 30%+ reply rates, which is 10-15x higher than email campaigns (2-3%) or cold calls (1-2%). Combined with 2-3x faster deal velocity, most campaigns pay for themselves with the first closed deal.' },
          ]} />
        </div>
      </section>
    </main>
  );
}
