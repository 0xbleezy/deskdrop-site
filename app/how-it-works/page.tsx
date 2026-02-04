import HowItWorks from '../components/HowItWorks';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-20 pt-32 sm:py-32 sm:pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6 font-display">
              How It Works
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
              How prospect gifting fits into your sales motion
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              A simple, strategic process that integrates physical touchpoints into your outbound strategy. 
              From identifying targets to following up with purpose.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/#contact"
                className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white text-base font-light rounded hover:bg-neutral-800 transition-colors inline-block text-center font-display"
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

      {/* CTA */}
      <section className="py-16 sm:py-24 border-t border-neutral-200" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-editorial mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            See how prospect gifting can fit into your sales motion and accelerate your pipeline.
          </p>
          <Link
            href="/#contact"
            className="px-8 py-4 bg-neutral-900 text-white text-base font-light rounded hover:bg-neutral-800 transition-colors inline-block text-center font-display"
          >
            Request a Sample
          </Link>
        </div>
      </section>
    </main>
  );
}
