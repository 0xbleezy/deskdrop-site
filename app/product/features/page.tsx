import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — Custom Branding, Flexible Sizing & Fast Delivery | DeskDrop',
  description: 'Everything you need to gift with confidence. Custom branding on every wrapper, three jar sizes, 2-week production, and direct shipping to your prospect list.',
  openGraph: {
    title: 'Features — Custom Branding, Flexible Sizing & Fast Delivery | DeskDrop',
    description: 'Custom branding on every wrapper, three jar sizes, 2-week production, and direct shipping.',
    url: 'https://thedeskdrop.com/product/features',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features | DeskDrop',
    description: 'Custom branding on every wrapper, three jar sizes, 2-week production, and direct shipping.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/product/features' },
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-32 pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Product
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Everything you need<br className="hidden md:inline" /> to gift with confidence
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              From campaign planning to delivery tracking, our solution helps you execute 
              personalized gifting campaigns at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Custom branding
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Each chocolate wrapper features your logo and messaging, creating a branded 
                experience that reinforces your message every time recipients reach for a chocolate.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Logo placement on every wrapper</li>
                <li>• Custom messaging and value props</li>
                <li>• Consistent brand presence</li>
              </ul>
            </div>

            <div>
              <h2 className="text-4xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Flexible sizing
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Choose from three jar sizes to match your budget and campaign goals. Perfect 
                for testing with smaller orders or scaling to hundreds of prospects.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Scale: 125 jars at $25/jar (20 pieces each)</li>
                <li>• Desk: 75 jars at $30/jar (30 pieces each)</li>
                <li>• Office: 50 jars at $40/jar (40 pieces each)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-4xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Fast delivery
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Production takes 2 weeks from order confirmation. Once complete, we ship directly 
                to your prospect list. Coordinate timing with your sales cadence.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• 2-week production time</li>
                <li>• Direct shipping to prospects</li>
                <li>• Delivery confirmations included</li>
              </ul>
            </div>

            <div>
              <h2 className="text-4xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Premium quality
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Premium chocolates in elegant jars create a memorable impression. Recipients 
                appreciate the quality, making your brand stand out from generic gifts.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Premium chocolate selection</li>
                <li>• Elegant jar packaging</li>
                <li>• Memorable presentation</li>
              </ul>
            </div>
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
            See how our features can help you execute personalized gifting campaigns.
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
