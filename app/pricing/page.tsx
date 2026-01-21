'use client';

import Link from 'next/link';

export default function PricingPage() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-32 pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-10">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6 font-display">
              Pricing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Choose between one-time campaigns or monthly recurring programs. All pricing includes shipping and custom branding.
            </p>
          </div>
        </div>
      </section>

      {/* Single Campaign Pricing */}
      <section className="py-24 border-t border-neutral-200" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4 leading-tight">
              Single Campaign Pricing
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Perfect for one-time campaigns, pilot programs, or testing your outbound strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Small */}
            <div className="bg-white p-8 rounded border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                Small
              </div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-2 leading-tight">
                8 oz Jar
              </h3>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">
                $4,375
              </div>
              <div className="text-sm text-neutral-500 mb-6 font-light">
                $35 per jar
              </div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-8">
                <li>• 125 jars per order</li>
                <li>• ~12 pieces per jar</li>
                <li>• Custom branding included</li>
                <li>• Shipping included</li>
                <li>• 2-week production time</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light mb-6">
                Perfect for testing campaigns or smaller prospect lists.
              </p>
              <button
                onClick={scrollToContact}
                className="w-full px-6 py-3 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light rounded hover:bg-neutral-800 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Medium */}
            <div className="bg-white p-8 rounded border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                Medium
              </div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-2 leading-tight">
                12 oz Jar
              </h3>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">
                $3,000
              </div>
              <div className="text-sm text-neutral-500 mb-6 font-light">
                $40 per jar
              </div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-8">
                <li>• 75 jars per order</li>
                <li>• ~20 pieces per jar</li>
                <li>• Custom branding included</li>
                <li>• Shipping included</li>
                <li>• 2-week production time</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light mb-6">
                Ideal balance of impact and cost for most campaigns.
              </p>
              <button
                onClick={scrollToContact}
                className="w-full px-6 py-3 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light rounded hover:bg-neutral-800 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Large */}
            <div className="bg-white p-8 rounded border-2 border-neutral-950 hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                Large
              </div>
              <div className="inline-block px-3 py-1 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light mb-4">
                Most Popular
              </div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-2 leading-tight">
                19 oz Jar
              </h3>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">
                $2,500
              </div>
              <div className="text-sm text-neutral-500 mb-6 font-light">
                $50 per jar
              </div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-8">
                <li>• 50 jars per order</li>
                <li>• ~30 pieces per jar</li>
                <li>• Custom branding included</li>
                <li>• Shipping included</li>
                <li>• 2-week production time</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light mb-6">
                Maximum impact for high-value accounts and key decision makers.
              </p>
              <button
                onClick={scrollToContact}
                className="w-full px-6 py-3 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light rounded hover:bg-neutral-800 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-neutral-600 leading-relaxed font-light">
              All orders include custom logo branding, messaging, and premium packaging. Mix sizes available for custom orders.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Recurring Pricing */}
      <section className="py-24 border-t border-neutral-200" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4 leading-tight">
              Monthly Recurring Pricing
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Scale your outbound gifting program with predictable monthly costs. Perfect for ongoing ABM and sales cadences.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Starter */}
            <div className="bg-white p-8 rounded border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                Starter
              </div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-2 leading-tight">
                50 Jars/Month
              </h3>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">
                $2,750
              </div>
              <div className="text-sm text-neutral-500 mb-6 font-light">
                per month
              </div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-8">
                <li>• 50 large jars monthly</li>
                <li>• Custom branding</li>
                <li>• Shipping included</li>
                <li>• Flexible scheduling</li>
                <li>• 10% savings vs one-time</li>
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full px-6 py-3 border border-neutral-950 text-neutral-950 text-xs uppercase tracking-widest font-display font-light rounded hover:bg-neutral-50 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Growth */}
            <div className="bg-white p-8 rounded border-2 border-neutral-950 hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                Growth
              </div>
              <div className="inline-block px-3 py-1 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-2 leading-tight">
                100 Jars/Month
              </h3>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">
                $4,500
              </div>
              <div className="text-sm text-neutral-500 mb-6 font-light">
                per month
              </div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-8">
                <li>• 100 large jars monthly</li>
                <li>• Custom branding</li>
                <li>• Shipping included</li>
                <li>• Flexible scheduling</li>
                <li>• 10% savings vs one-time</li>
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full px-6 py-3 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light rounded hover:bg-neutral-800 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Scale */}
            <div className="bg-white p-8 rounded border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                Scale
              </div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-2 leading-tight">
                200 Jars/Month
              </h3>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">
                $8,000
              </div>
              <div className="text-sm text-neutral-500 mb-6 font-light">
                per month
              </div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-8">
                <li>• 200 large jars monthly</li>
                <li>• Custom branding</li>
                <li>• Shipping included</li>
                <li>• Flexible scheduling</li>
                <li>• 20% savings vs one-time</li>
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full px-6 py-3 border border-neutral-950 text-neutral-950 text-xs uppercase tracking-widest font-display font-light rounded hover:bg-neutral-50 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-8 rounded border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                Enterprise
              </div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-2 leading-tight">
                500+ Jars/Month
              </h3>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">
                Custom
              </div>
              <div className="text-sm text-neutral-500 mb-6 font-light">
                pricing
              </div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-8">
                <li>• 500+ jars monthly</li>
                <li>• Custom branding</li>
                <li>• Shipping included</li>
                <li>• Dedicated support</li>
                <li>• Volume discounts</li>
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full px-6 py-3 border border-neutral-950 text-neutral-950 text-xs uppercase tracking-widest font-display font-light rounded hover:bg-neutral-50 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-neutral-600 leading-relaxed font-light">
              Monthly plans include priority production scheduling, flexible delivery dates, and dedicated account support. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-neutral-200" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-editorial mx-auto px-4 lg:px-8 xl:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4 leading-tight">
              Pricing FAQ
            </h2>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="border-t border-neutral-200 pt-8">
              <h3 className="text-xl font-display font-light text-neutral-950 mb-4 leading-tight">
                Can I mix jar sizes in my order?
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed font-light">
                Yes, you can mix sizes within a single order. Orders are based on increments of 1440 chocolates, which can be configured across the three jar sizes to match your needs.
              </p>
            </div>

            <div className="border-t border-neutral-200 pt-8">
              <h3 className="text-xl font-display font-light text-neutral-950 mb-4 leading-tight">
                What's included in the pricing?
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed font-light">
                All pricing includes custom logo branding on wrappers, custom messaging, premium packaging, and shipping. There are no hidden fees.
              </p>
            </div>

            <div className="border-t border-neutral-200 pt-8">
              <h3 className="text-xl font-display font-light text-neutral-950 mb-4 leading-tight">
                How long does production take?
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed font-light">
                Single campaign orders take 2 weeks for production. Monthly recurring plans include priority scheduling and can be coordinated with your sales cadence.
              </p>
            </div>

            <div className="border-t border-neutral-200 pt-8">
              <h3 className="text-xl font-display font-light text-neutral-950 mb-4 leading-tight">
                Can I change my monthly plan?
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed font-light">
                Yes, you can upgrade or downgrade your monthly plan at any time. Changes take effect on your next billing cycle.
              </p>
            </div>

            <div className="border-t border-neutral-200 pt-8">
              <h3 className="text-xl font-display font-light text-neutral-950 mb-4 leading-tight">
                What if I need more than 500 jars per month?
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed font-light">
                Contact us for custom enterprise pricing. We work with companies sending thousands of gifts per month and can create a tailored solution for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-neutral-200" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-editorial mx-auto px-4 lg:px-8 xl:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            Request a sample or speak with our team to find the right plan for your outbound strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-neutral-900 text-white text-base font-light rounded hover:bg-neutral-800 transition-colors inline-block text-center font-display"
            >
              Request a Sample
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 border border-neutral-950 text-neutral-950 text-base font-light rounded hover:bg-neutral-50 transition-colors inline-block text-center font-display"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
