'use client';

import Link from 'next/link';

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
      <section className="py-16 sm:py-24 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Increase reply rates
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Get 30%+ reply rates when traditional outreach fails. Physical gifts cut through digital noise 
                and create a reason for prospects to respond that they actually appreciate.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Book more meetings
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Turn cold outreach into warm conversations. A thoughtful gift gives you a genuine reason to 
                follow up, making it easier to secure that crucial discovery call.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Accelerate deal velocity
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Build goodwill and rapport early in the sales cycle. Prospects who receive gifts move through 
                your pipeline faster, reducing time to close and increasing win rates.
              </p>
            </div>
          </div>

          {/* Sequence Add-on */}
          <div className="mt-12 border-l-4 border-neutral-950 pl-6 py-4 bg-white rounded-r">
            <p className="text-base text-neutral-700 leading-relaxed font-light">
              <span className="font-medium">What happens after the gift arrives?</span> We'll share the 
              outreach sequence we've A/B tested to turn attention into replies—the same playbook that's 
              booked meetings with leaders at Rippling, Loro Piana, Richard Mille, and other enterprise teams.
            </p>
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
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
