import Link from 'next/link';

export default function ProspectGiftingPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-32 pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Prospect Gifting{' '}
              <br />
              Solution
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Automate and execute your prospect gifting programs with a scalable solution. 
              Create personalized touchpoints that break through inbox fatigue and earn genuine responses.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                30%+ Reply Rates
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Get responses when traditional outreach fails. Physical gifts cut through digital 
                noise and create a reason for prospects to respond.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Scalable Production
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Scale from 50 to hundreds of prospects. Our production model handles campaigns 
                of any size with consistent quality and branding.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Direct Shipping
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We handle all logistics and shipping. Send directly to your prospect list with 
                delivery confirmations included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-16 leading-tight text-center">
            Use cases
          </h2>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Outbound Prospecting
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

            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Re-engagement Campaigns
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

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#f5f3f0' }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light">
            See how prospect gifting can help you break through inbox fatigue and earn responses.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-neutral-900 text-white text-base font-light rounded hover:bg-neutral-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
