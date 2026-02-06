import Link from 'next/link';

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
                Custom Branding
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
                Flexible Sizing
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Choose from three jar sizes to match your budget and campaign goals. Perfect 
                for testing with smaller orders or scaling to hundreds of prospects.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Small: 125 jars at $35 each</li>
                <li>• Medium: 75 jars at $40 each</li>
                <li>• Large: 50 jars at $50 each</li>
              </ul>
            </div>

            <div>
              <h2 className="text-4xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Fast Delivery
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
                Premium Quality
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
