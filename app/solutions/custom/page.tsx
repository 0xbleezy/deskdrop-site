import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Solutions — Tailored Gifting Programs | DeskDrop',
  description: 'Tailored gifting solutions with dedicated support, flexible programs, and scalable execution. Custom branding, campaign planning, and white-glove onboarding.',
  openGraph: {
    title: 'Custom Solutions — Tailored Gifting Programs | DeskDrop',
    description: 'Tailored gifting solutions with dedicated support, flexible programs, and scalable execution.',
    url: 'https://thedeskdrop.com/solutions/custom',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Solutions | DeskDrop',
    description: 'Tailored gifting solutions with dedicated support, flexible programs, and scalable execution.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/solutions/custom' },
};

export default function CustomPage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-32 pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Custom solutions
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Tailored gifting solutions for your business with first-class onboarding and dedicated 
              support. Customize your program to match your unique needs and goals.
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
                Dedicated support
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Work with our team to design a gifting program that fits your specific needs. 
                From campaign planning to execution, we're here to help.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Flexible programs
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Customize your program to match your sales cadence, budget, and goals. We'll 
                work with you to create a solution that drives results.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded">
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Scalable solutions
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Scale your program as you grow. Start small and expand as you see results. Our 
                production model handles campaigns of any size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-12 leading-tight text-center">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 sm:p-8 rounded">
              <div className="text-5xl font-display font-light text-neutral-400 mb-6">01</div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Consultation
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We&apos;ll discuss your goals, budget, and needs. Together, we&apos;ll design a gifting 
                program that fits your business.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded">
              <div className="text-5xl font-display font-light text-neutral-400 mb-6">02</div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Customization
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We&apos;ll customize branding, messaging, and packaging to match your brand. Review 
                mockups and approve before production.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded">
              <div className="text-5xl font-display font-light text-neutral-400 mb-6">03</div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Execution
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We&apos;ll handle production, shipping, and delivery. You focus on following up and 
                closing deals while we manage logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16 sm:py-24 bg-page border-t border-neutral-100">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 text-center">Explore more</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link href="/solutions/prospect-gifting" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Prospect Gifting</div>
              <div className="text-xs text-neutral-500 mt-1">1:1 outbound gifting</div>
            </Link>
            <Link href="/solutions/abm" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">ABM Gifting</div>
              <div className="text-xs text-neutral-500 mt-1">Account-based strategy</div>
            </Link>
            <Link href="/pricing" className="glass-card p-6 rounded text-center hover:shadow-lg transition-shadow block">
              <div className="text-sm font-display font-light text-neutral-900">Pricing</div>
              <div className="text-xs text-neutral-500 mt-1">Plans &amp; pricing</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to create a custom solution?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light">
            Let&apos;s discuss your needs and design a gifting program that drives results.
          </p>
          <Link
            href="/#contact"
            className="glass-button inline-block px-8 py-4 text-white text-base font-light rounded transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
