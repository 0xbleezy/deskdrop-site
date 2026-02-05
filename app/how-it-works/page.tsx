import HowItWorks from '../components/HowItWorks';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-20 pt-32 sm:py-32 sm:pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6 font-display">
              How It Works
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
              How prospect gifting fits into your sales motion
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              A simple process: we produce and ship your gifts, then arm you with the follow-up 
              sequence that converts attention into booked meetings.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/#contact"
                className="glass-button w-full sm:w-auto px-8 py-4 text-white text-base font-light rounded transition-all inline-block text-center font-display"
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="text-base text-neutral-700 font-light hover:text-neutral-900 transition-colors text-center sm:text-left"
              >
                View Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Sequence Add-on */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <div className="border-l-4 border-neutral-950 pl-6 py-4 bg-neutral-50 rounded-r">
            <p className="text-base text-neutral-700 leading-relaxed font-light">
              <span className="font-medium">What happens after the gift arrives?</span> We'll share the 
              outreach sequence we've A/B tested to turn attention into replies—the same playbook that's 
              booked meetings with leaders at Rippling, Loro Piana, Richard Mille, and other enterprise teams.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 border-t border-neutral-200" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw] text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            See how prospect gifting can fit into your sales motion and accelerate your pipeline.
          </p>
          <Link
            href="/#contact"
            className="glass-button px-8 py-4 text-white text-base font-light rounded transition-all inline-block text-center font-display"
          >
            Request a Sample
          </Link>
        </div>
      </section>
    </main>
  );
}
