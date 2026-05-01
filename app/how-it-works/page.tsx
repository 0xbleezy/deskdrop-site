import HowItWorks from '../components/HowItWorks';
import PilotPlan from '../components/PilotPlan';
import PlaybookTeaser from '../components/PlaybookTeaser';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works — Prospect Gifting Process | DeskDrop',
  description: 'A simple process: we produce and ship your custom branded gifts, then arm you with the follow-up sequence that converts attention into booked meetings.',
  openGraph: {
    title: 'How It Works — Prospect Gifting Process | DeskDrop',
    description: 'We produce and ship your custom branded gifts, then arm you with the follow-up sequence that converts attention into booked meetings.',
    url: 'https://thedeskdrop.com/how-it-works',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works — Prospect Gifting Process | DeskDrop',
    description: 'We produce and ship your custom branded gifts, then arm you with the follow-up sequence that converts attention into booked meetings.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/how-it-works' },
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-20 pt-32 sm:py-32 sm:pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6 font-display">
              How It Works
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
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

      {/* Who This Is For */}
      <section className="py-12 sm:py-16 border-t border-neutral-100 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="glass-card p-8 rounded max-w-3xl">
            <h3 className="text-lg font-display font-light text-neutral-900 mb-4 tracking-widest uppercase">Who this is for</h3>
            <ul className="space-y-2 text-base text-neutral-700 font-light">
              <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Sales teams running outbound or ABM motions that need a higher reply rate</li>
              <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Marketing teams looking for a physical channel to complement digital campaigns</li>
              <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Revenue leaders who want to accelerate pipeline and shorten sales cycles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Jump Links */}
      <section className="py-8 bg-white border-t border-neutral-100">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <nav className="flex flex-wrap gap-3 text-sm" aria-label="Page sections">
            <a href="#steps" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Steps</a>
            <a href="#sequence" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Follow-Up Sequence</a>
            <a href="#sample" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Sample Process</a>
            <a href="#pilot" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Pilot Plan</a>
          </nav>
        </div>
      </section>

      {/* How It Works Section */}
      <div id="steps">
        <HowItWorks />
      </div>

      {/* Sequence Add-on */}
      <section id="sequence" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <PlaybookTeaser />
        </div>
      </section>

      {/* Sample Process Callout */}
      <section id="sample" className="py-12 sm:py-16 bg-page border-t border-neutral-100">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="border-l-4 border-neutral-950 pl-6 py-4 bg-white rounded-r max-w-3xl">
            <p className="text-base text-neutral-700 leading-relaxed font-light">
              <span className="font-medium">Want to see it first?</span> Request a free sample before committing.
              We&apos;ll send you an unbranded jar so you can evaluate the quality, packaging, and presentation.
              Once approved, production begins with your custom branding.
            </p>
          </div>
        </div>
      </section>

      {/* Pilot Plan */}
      <div id="pilot">
        <PilotPlan />
      </div>

      {/* CTA */}
      <section className="py-16 sm:py-24 border-t border-neutral-100 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
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
