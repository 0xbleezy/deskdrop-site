import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You Received a Gift — Here\'s What It Means | DeskDrop',
  description: 'You just received a custom branded chocolate gift. Learn how companies use DeskDrop to create memorable touchpoints that drive conversations.',
  openGraph: {
    title: 'You Received a Gift — Here\'s What It Means | DeskDrop',
    description: 'You just received a custom branded chocolate gift. Learn how companies use DeskDrop to create memorable touchpoints.',
    url: 'https://thedeskdrop.com/sample',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'You Received a Gift — Here\'s What It Means | DeskDrop',
    description: 'You just received a custom branded chocolate gift. Learn how companies use DeskDrop to create memorable touchpoints.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/sample' },
};

export default function SamplePage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-20 pt-32 sm:py-32 sm:pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6 font-display">
              Welcome
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Enjoy the chocolates.<br className="hidden md:inline" /> Here&apos;s the story behind them.
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              The gift you received is part of a prospect gifting campaign. Companies use 
              DeskDrop to create physical touchpoints that earn attention, start conversations, 
              and book meetings—when digital outreach stops working.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-12 leading-tight text-center">
            How prospect gifting works
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-4">01</div>
              <h3 className="text-lg font-display font-light text-neutral-900 mb-3">Custom branded</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Each gift features the sender&apos;s logo and messaging on premium chocolate wrappers.
              </p>
            </div>
            <div className="glass-card p-6 rounded text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-4">02</div>
              <h3 className="text-lg font-display font-light text-neutral-900 mb-3">Shipped directly</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Gifts are shipped directly to prospects&apos; offices, creating a memorable desk presence.
              </p>
            </div>
            <div className="glass-card p-6 rounded text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-4">03</div>
              <h3 className="text-lg font-display font-light text-neutral-900 mb-3">Conversations start</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                The sender follows up with a personalized message—turning a gift into a meeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="glass-card p-6 rounded">
              <div className="text-3xl font-display font-light text-neutral-900 mb-2">30%+</div>
              <div className="text-sm text-neutral-600 font-light">Reply Rate</div>
            </div>
            <div className="glass-card p-6 rounded">
              <div className="text-3xl font-display font-light text-neutral-900 mb-2">25×</div>
              <div className="text-sm text-neutral-600 font-light">Exposure</div>
            </div>
            <div className="glass-card p-6 rounded">
              <div className="text-3xl font-display font-light text-neutral-900 mb-2">2–3×</div>
              <div className="text-sm text-neutral-600 font-light">Meeting Rate</div>
            </div>
            <div className="glass-card p-6 rounded">
              <div className="text-3xl font-display font-light text-neutral-900 mb-2">7–10</div>
              <div className="text-sm text-neutral-600 font-light">Days of Desk Presence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Want to use prospect gifting<br className="hidden md:inline" /> for your own team?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Request a sample to see the quality firsthand, or speak with our team to learn 
            how prospect gifting can fit into your sales motion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="glass-button w-full sm:w-auto px-8 py-4 text-white text-base font-light rounded transition-all inline-block text-center font-display"
            >
              Request a Sample
            </Link>
            <Link
              href="/how-it-works"
              className="glass-button-light w-full sm:w-auto px-8 py-4 text-neutral-950 text-base font-light rounded transition-all inline-block text-center font-display"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
