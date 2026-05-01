import Link from 'next/link';
import PlaybookTeaser from '../../components/PlaybookTeaser';
import InlineFAQ from '../../components/InlineFAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prospect Gifting for Sales Teams — Book More Meetings | DeskDrop',
  description: 'When email and LinkedIn stop working, a physical gift cuts through. 30%+ reply rates, 2-3x faster deal velocity. Get the follow-up playbook included.',
  openGraph: {
    title: 'Prospect Gifting for Sales Teams — Book More Meetings | DeskDrop',
    description: 'Physical gifts that cut through inbox fatigue. 30%+ reply rates, 2-3x faster deal velocity.',
    url: 'https://thedeskdrop.com/use-case/sales',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prospect Gifting for Sales Teams | DeskDrop',
    description: 'Physical gifts that cut through inbox fatigue. 30%+ reply rates, 2-3x faster deal velocity.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/use-case/sales' },
};

export default function SalesPage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-20 pt-32 sm:py-32 sm:pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Sales
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Book more meetings and close faster
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-4xl">
              When email and LinkedIn stop working, a physical gift cuts through. We handle production 
              and shipping—plus share the follow-up sequence that turns attention into replies.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/#contact"
                className="glass-button w-full sm:w-auto px-8 py-4 text-white text-base font-light rounded transition-all inline-block text-center"
              >
                Send Your First Campaign
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
                Increase reply rates
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Get 30%+ reply rates when traditional outreach fails. Physical gifts cut through digital noise 
                and create a reason for prospects to respond that they actually appreciate.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Book more meetings
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Turn cold outreach into warm conversations. A thoughtful gift gives you a genuine reason to 
                follow up, making it easier to secure that crucial discovery call.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Accelerate deal velocity
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Build goodwill and rapport early in the sales cycle. Prospects who receive gifts move through 
                your pipeline faster, reducing time to close and increasing win rates.
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
            <Link href="/use-case/marketing" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Marketing</div>
              <div className="text-xs text-neutral-500 mt-1">ABM &amp; demand gen</div>
            </Link>
            <Link href="/use-case/revenue" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Revenue</div>
              <div className="text-xs text-neutral-500 mt-1">Pipeline acceleration</div>
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
            Ready to close more deals?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light">
            See how prospect gifting can help your sales team book more meetings and accelerate pipeline.
          </p>
          <Link
            href="/#contact"
            className="glass-button px-8 py-4 text-white text-base font-light rounded transition-all inline-block text-center"
          >
            Send Your First Campaign
          </Link>
          <InlineFAQ faqs={[
            { question: 'How quickly can I launch a campaign?', answer: 'Production takes 2 weeks from order confirmation. We ship directly to your prospect list and provide the follow-up playbook so you can start outreach immediately.' },
            { question: 'What\'s the minimum order?', answer: 'Our minimum is 50 jars. Most sales teams start with 50–75 jars to test with their highest-priority accounts before scaling.' },
            { question: 'Do I get the follow-up sequence?', answer: 'Yes. Every order includes our A/B-tested outreach playbook—the same sequence that\'s earned 30%+ reply rates with enterprise prospects.' },
          ]} />
        </div>
      </section>
    </main>
  );
}
