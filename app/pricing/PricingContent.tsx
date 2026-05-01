'use client';

import { useState } from 'react';
import InlineFAQ from '../components/InlineFAQ';
import PlaybookTeaser from '../components/PlaybookTeaser';
import PilotPlan from '../components/PilotPlan';

export default function PricingContent() {
  const [smallQuantity, setSmallQuantity] = useState(50);
  const [mediumQuantity, setMediumQuantity] = useState(50);
  const [largeQuantity, setLargeQuantity] = useState(50);

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const basePrices = {
    small: 25,
    medium: 30,
    large: 40,
  };

  const getDiscountPercent = (quantity: number): number => {
    if (quantity >= 200) return 15;
    if (quantity >= 100) return 10;
    if (quantity >= 50) return 5;
    return 0;
  };

  const calculatePrice = (size: 'small' | 'medium' | 'large', quantity: number) => {
    const basePrice = basePrices[size];
    const discount = getDiscountPercent(quantity);
    const discountedPrice = basePrice * (1 - discount / 100);
    return {
      perTouchpoint: discountedPrice,
      total: discountedPrice * quantity,
      discount: discount,
    };
  };

  const pricingFaqs = [
    { question: 'Can I cancel or pause my monthly plan?', answer: 'Yes. Monthly plans can be paused or cancelled at any time. Changes take effect on your next billing cycle—no cancellation fees.' },
    { question: 'What if the gifts don\'t generate results?', answer: 'We share the same follow-up playbook that\'s booked meetings at Rippling, LinkedIn, Amazon, and Mesirow. Most clients see 30%+ reply rates. Start with a Pilot to test before committing.' },
    { question: 'Is there a long-term commitment?', answer: 'No. Single campaigns are one-time purchases. Monthly plans are month-to-month with no long-term contract required.' },
    { question: 'Can I mix jar sizes in my order?', answer: 'Yes, you can mix sizes within a single order. Orders are based on increments of 1440 chocolates, which can be configured across the three jar sizes to match your needs.' },
    { question: 'What\'s included in the pricing?', answer: 'All pricing includes custom logo branding on wrappers, custom messaging, and premium packaging.' },
    { question: 'How long does production take?', answer: 'Single campaign orders take 2 weeks for production. Monthly recurring plans include priority scheduling and can be coordinated with your sales cadence.' },
    { question: 'Can I change my monthly plan?', answer: 'Yes, you can upgrade or downgrade your monthly plan at any time. Changes take effect on your next billing cycle.' },
    { question: 'What if I need more than 500 prospects per month?', answer: 'Contact us for custom enterprise pricing. We work with companies sending thousands of gifts per month and can create a tailored solution for your needs.' },
  ];

  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section id="top" className="py-20 pt-32 sm:py-32 sm:pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6 font-display">
              Pricing
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Simple, transparent<br className="hidden md:inline" /> pricing
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Choose between one-time campaigns or monthly recurring programs. All pricing includes custom branding.
            </p>
            {/* Jump Links */}
            <nav className="flex flex-wrap gap-3 text-sm" aria-label="Page sections">
              <a href="#single" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Single Campaign</a>
              <a href="#monthly" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Monthly Plans</a>
              <a href="#logistics" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Logistics</a>
              <a href="#faq" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">FAQ</a>
            </nav>
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

      {/* Single Campaign Pricing */}
      <section id="single" className="py-16 sm:py-24 border-t border-neutral-100 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-medium text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Perfect for one-time campaigns, pilot programs, or testing your outbound strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Scale */}
            <div className="glass-card p-6 sm:p-8 rounded hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">Scale</div>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">$3,125</div>
              <div className="text-sm text-neutral-500 mb-6 font-light">For 125 prospects</div>
              <div className="mb-6">
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">What&apos;s included</div>
                <ul className="space-y-2 text-sm text-neutral-700 font-light">
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>20-pieces of custom branded chocolates</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Delivered directly to each prospect</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Fully managed fulfillment</li>
                </ul>
              </div>
              <div className="mb-8">
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">Best for</div>
                <ul className="space-y-2 text-sm text-neutral-700 font-light">
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Scaling outbound across larger prospect lists</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Testing prospect gifting at volume</li>
                </ul>
              </div>
              <button onClick={scrollToContact} className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-light transition-all mt-auto">Get Started</button>
            </div>

            {/* Desk — Most Popular */}
            <div className="glass-card p-6 sm:p-8 rounded ring-2 ring-neutral-950 hover:shadow-lg transition-shadow flex flex-col h-full relative">
              <div className="absolute top-4 right-4 bg-neutral-950 text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full font-light">Most popular</div>
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">Desk</div>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">$2,250</div>
              <div className="text-sm text-neutral-500 mb-6 font-light">For 75 prospects</div>
              <div className="mb-6">
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">What&apos;s included</div>
                <ul className="space-y-2 text-sm text-neutral-700 font-light">
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>30-pieces of custom branded chocolates</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Delivered directly to each prospect</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Fully managed fulfillment</li>
                </ul>
              </div>
              <div className="mb-8">
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">Best for</div>
                <ul className="space-y-2 text-sm text-neutral-700 font-light">
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Most outbound and ABM motions</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Best balance of reach and impact</li>
                </ul>
              </div>
              <button onClick={scrollToContact} className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-light transition-all mt-auto">Get Started</button>
            </div>

            {/* Office */}
            <div className="glass-card p-6 sm:p-8 rounded hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">Office</div>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">$2,000</div>
              <div className="text-sm text-neutral-500 mb-6 font-light">For 50 high-value prospects</div>
              <div className="mb-6">
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">What&apos;s included</div>
                <ul className="space-y-2 text-sm text-neutral-700 font-light">
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>40-pieces of custom branded chocolates</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Delivered directly to company offices or shared workspaces</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Fully managed fulfillment</li>
                </ul>
              </div>
              <div className="mb-8">
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">Best for</div>
                <ul className="space-y-2 text-sm text-neutral-700 font-light">
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Strategic accounts</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span>Executive-level deal acceleration</li>
                </ul>
              </div>
              <button onClick={scrollToContact} className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-light transition-all mt-auto">Get Started</button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-neutral-600 leading-relaxed font-light">
              All orders include custom logo branding, messaging, and premium packaging. Mix sizes available for custom orders.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Process Callout */}
      <section className="py-12 sm:py-16 bg-white border-t border-neutral-100">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="border-l-4 border-neutral-950 pl-6 py-4 bg-neutral-50 rounded-r max-w-3xl">
            <p className="text-base text-neutral-700 leading-relaxed font-light">
              <span className="font-medium">Want to see it first?</span> Request a free sample before committing. 
              We&apos;ll send you an unbranded jar so you can evaluate the quality, packaging, and presentation. 
              Once approved, production begins with your custom branding.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Pricing */}
      <section id="monthly" className="py-16 sm:py-24 border-t border-neutral-100 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4 leading-tight">
              Monthly pricing
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Keep your pipeline warm with consistent, predictable gifting. Monthly programs build momentum and compound results over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Scale Slider */}
            {(() => {
              const pricing = calculatePrice('small', smallQuantity);
              return (
                <div className="glass-card p-6 sm:p-8 rounded hover:shadow-lg transition-shadow">
                  <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">Scale</div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Prospects/Month</span>
                      <span className="text-2xl font-display font-light text-neutral-950">{smallQuantity}</span>
                    </div>
                    <input type="range" min="1" max="500" value={smallQuantity} onChange={(e) => setSmallQuantity(Number(e.target.value))} className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950" />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1"><span>1</span><span>500</span></div>
                  </div>
                  <div className="mb-6">
                    {pricing.discount > 0 ? (
                      <div className="inline-block px-3 py-1 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light">{pricing.discount}% Savings</div>
                    ) : (
                      <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-500 text-xs uppercase tracking-widest font-display font-light">No discount</div>
                    )}
                  </div>
                  <div className="border-t border-neutral-100 pt-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Per prospect</span>
                      <span className="text-lg font-display font-light text-neutral-950">
                        ${pricing.perTouchpoint.toFixed(2)}
                        {pricing.discount > 0 && <span className="text-sm text-neutral-400 line-through ml-2">${basePrices.small}</span>}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600 font-light">Monthly total</span>
                      <span className="text-2xl font-display font-light text-neutral-950">${pricing.total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-600 font-light mb-6">
                    <li>• Custom branding included</li>
                    <li>• Flexible scheduling</li>
                  </ul>
                  <button onClick={scrollToContact} className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-display font-light transition-all">Get Started</button>
                </div>
              );
            })()}

            {/* Desk Slider */}
            {(() => {
              const pricing = calculatePrice('medium', mediumQuantity);
              return (
                <div className="glass-card p-6 sm:p-8 rounded ring-2 ring-neutral-950 hover:shadow-lg transition-shadow relative">
                  <div className="absolute top-4 right-4 bg-neutral-950 text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full font-light">Most popular</div>
                  <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">Desk</div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Prospects/Month</span>
                      <span className="text-2xl font-display font-light text-neutral-950">{mediumQuantity}</span>
                    </div>
                    <input type="range" min="1" max="500" value={mediumQuantity} onChange={(e) => setMediumQuantity(Number(e.target.value))} className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950" />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1"><span>1</span><span>500</span></div>
                  </div>
                  <div className="mb-6">
                    {pricing.discount > 0 ? (
                      <div className="inline-block px-3 py-1 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light">{pricing.discount}% Savings</div>
                    ) : (
                      <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-500 text-xs uppercase tracking-widest font-display font-light">No discount</div>
                    )}
                  </div>
                  <div className="border-t border-neutral-100 pt-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Per prospect</span>
                      <span className="text-lg font-display font-light text-neutral-950">
                        ${pricing.perTouchpoint.toFixed(2)}
                        {pricing.discount > 0 && <span className="text-sm text-neutral-400 line-through ml-2">${basePrices.medium}</span>}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600 font-light">Monthly total</span>
                      <span className="text-2xl font-display font-light text-neutral-950">${pricing.total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-600 font-light mb-6">
                    <li>• Custom branding included</li>
                    <li>• Flexible scheduling</li>
                  </ul>
                  <button onClick={scrollToContact} className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-display font-light transition-all">Get Started</button>
                </div>
              );
            })()}

            {/* Office Slider */}
            {(() => {
              const pricing = calculatePrice('large', largeQuantity);
              return (
                <div className="glass-card p-6 sm:p-8 rounded hover:shadow-lg transition-shadow">
                  <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">Office</div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Prospects/Month</span>
                      <span className="text-2xl font-display font-light text-neutral-950">{largeQuantity}</span>
                    </div>
                    <input type="range" min="1" max="500" value={largeQuantity} onChange={(e) => setLargeQuantity(Number(e.target.value))} className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950" />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1"><span>1</span><span>500</span></div>
                  </div>
                  <div className="mb-6">
                    {pricing.discount > 0 ? (
                      <div className="inline-block px-3 py-1 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light">{pricing.discount}% Savings</div>
                    ) : (
                      <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-500 text-xs uppercase tracking-widest font-display font-light">No discount</div>
                    )}
                  </div>
                  <div className="border-t border-neutral-100 pt-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Per prospect</span>
                      <span className="text-lg font-display font-light text-neutral-950">
                        ${pricing.perTouchpoint.toFixed(2)}
                        {pricing.discount > 0 && <span className="text-sm text-neutral-400 line-through ml-2">${basePrices.large}</span>}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600 font-light">Monthly total</span>
                      <span className="text-2xl font-display font-light text-neutral-950">${pricing.total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-600 font-light mb-6">
                    <li>• Custom branding included</li>
                    <li>• Flexible scheduling</li>
                  </ul>
                  <button onClick={scrollToContact} className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-display font-light transition-all">Get Started</button>
                </div>
              );
            })()}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-neutral-600 leading-relaxed font-light">
              Monthly plans include priority production scheduling, flexible delivery dates, and dedicated account support. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Logistics at a Glance */}
      <section id="logistics" className="py-16 sm:py-24 border-t border-neutral-100 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-950 mb-12 leading-tight text-center">
            Logistics at a glance
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded text-center">
              <div className="text-2xl font-display font-light text-neutral-900 mb-2">2 Weeks</div>
              <div className="text-sm text-neutral-600 font-light">Production lead time</div>
            </div>
            <div className="glass-card p-6 rounded text-center">
              <div className="text-2xl font-display font-light text-neutral-900 mb-2">50 Jars</div>
              <div className="text-sm text-neutral-600 font-light">Minimum order</div>
            </div>
            <div className="glass-card p-6 rounded text-center">
              <div className="text-2xl font-display font-light text-neutral-900 mb-2">Direct</div>
              <div className="text-sm text-neutral-600 font-light">We ship to your prospect list</div>
            </div>
            <div className="glass-card p-6 rounded text-center">
              <div className="text-2xl font-display font-light text-neutral-900 mb-2">US-Wide</div>
              <div className="text-sm text-neutral-600 font-light">Domestic shipping coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 sm:py-24 border-t border-neutral-100 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-950 mb-12 leading-tight text-center">
            What happens after you order
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-3">01</div>
              <h4 className="text-sm font-display font-medium text-neutral-900 mb-2">Submit assets</h4>
              <p className="text-xs text-neutral-600 font-light">Send your logo and messaging. We design the wrappers.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-3">02</div>
              <h4 className="text-sm font-display font-medium text-neutral-900 mb-2">Approve mockups</h4>
              <p className="text-xs text-neutral-600 font-light">Review proofs before production begins.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-3">03</div>
              <h4 className="text-sm font-display font-medium text-neutral-900 mb-2">Production</h4>
              <p className="text-xs text-neutral-600 font-light">2-week production with quality checks.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-3">04</div>
              <h4 className="text-sm font-display font-medium text-neutral-900 mb-2">Ship + playbook</h4>
              <p className="text-xs text-neutral-600 font-light">Gifts ship direct. You receive the follow-up sequence.</p>
            </div>
          </div>
          <PlaybookTeaser />
        </div>
      </section>

      {/* Pilot Plan */}
      <PilotPlan />

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 border-t border-neutral-100 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4 leading-tight">
              Pricing FAQ
            </h2>
          </div>
          <InlineFAQ faqs={pricingFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 border-t border-neutral-100 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            Request a sample or speak with our team to find the right plan for your outbound strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={scrollToContact} className="glass-button w-full sm:w-auto px-8 py-4 text-white text-base font-light transition-all inline-block text-center font-display">
              Request a Sample
            </button>
            <button onClick={scrollToContact} className="glass-button-light w-full sm:w-auto px-8 py-4 text-neutral-950 text-base font-light transition-all inline-block text-center font-display">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
