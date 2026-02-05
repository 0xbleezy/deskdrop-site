'use client';

import { useState } from 'react';

export default function PricingPage() {
  // State for each slider
  const [smallQuantity, setSmallQuantity] = useState(50);
  const [mediumQuantity, setMediumQuantity] = useState(50);
  const [largeQuantity, setLargeQuantity] = useState(50);

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  // Base prices for each size
  const basePrices = {
    small: 35,
    medium: 40,
    large: 50,
  };

  // Discount calculation based on quantity tiers
  const getDiscountPercent = (quantity: number): number => {
    if (quantity >= 200) return 15;
    if (quantity >= 100) return 10;
    if (quantity >= 50) return 5;
    return 0; // 1-49 touchpoints
  };

  // Calculate pricing for a given size and quantity
  const calculatePrice = (size: 'small' | 'medium' | 'large', quantity: number) => {
    const basePrice = basePrices[size];
    const discount = getDiscountPercent(quantity);
    const discountedPrice = basePrice * (1 - discount / 100);
    return {
      perTouchpoint: discountedPrice,
      total: discountedPrice * quantity,
      discount: discount
    };
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-20 pt-32 sm:py-32 sm:pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <div className="max-w-7xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6 font-display">
              Pricing
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Simple, transparent<br className="hidden md:inline" /> pricing
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Choose between one-time campaigns or monthly recurring programs. All pricing includes shipping and custom branding.
            </p>
          </div>
        </div>
      </section>

      {/* Single Campaign Pricing */}
      <section className="py-16 sm:py-24 border-t border-neutral-200" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
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
            <div className="glass-card p-6 sm:p-8 rounded hover:shadow-lg transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                Small
              </div>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">
                $4,375
              </div>
              <div className="text-sm text-neutral-500 mb-6 font-light">
                $35 per touchpoint
              </div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-8">
                <li>• 125 touchpoints per order</li>
                <li>• ~12 pieces</li>
                <li>• Custom branding included</li>
                <li>• Shipping included</li>
                <li>• 2-week production time</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light mb-6">
                Perfect for testing campaigns or smaller prospect lists.
              </p>
              <button
                onClick={scrollToContact}
                className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-display font-light rounded transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Medium */}
            <div className="glass-card p-6 sm:p-8 rounded ring-2 ring-neutral-950 hover:shadow-lg transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                Medium
              </div>
              <div className="inline-block px-3 py-1 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light mb-4">
                Most Popular
              </div>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">
                $3,000
              </div>
              <div className="text-sm text-neutral-500 mb-6 font-light">
                $40 per touchpoint
              </div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-8">
                <li>• 75 touchpoints per order</li>
                <li>• ~20 pieces</li>
                <li>• Custom branding included</li>
                <li>• Shipping included</li>
                <li>• 2-week production time</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light mb-6">
                Ideal balance of impact and cost for most campaigns.
              </p>
              <button
                onClick={scrollToContact}
                className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-display font-light rounded transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Large */}
            <div className="glass-card p-6 sm:p-8 rounded hover:shadow-lg transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                Large
              </div>
              <div className="text-4xl font-display font-light text-neutral-950 mb-1">
                $2,500
              </div>
              <div className="text-sm text-neutral-500 mb-6 font-light">
                $50 per touchpoint
              </div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-8">
                <li>• 50 touchpoints per order</li>
                <li>• ~30 pieces</li>
                <li>• Custom branding included</li>
                <li>• Shipping included</li>
                <li>• 2-week production time</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light mb-6">
                Maximum impact for high-value accounts and key decision makers.
              </p>
              <button
                onClick={scrollToContact}
                className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-display font-light rounded transition-all"
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

      {/* Monthly Pricing */}
      <section className="py-16 sm:py-24 border-t border-neutral-200" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4 leading-tight">
              Monthly Pricing
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Keep your pipeline warm with consistent, predictable gifting. Monthly programs build momentum and compound results over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Small Slider */}
            {(() => {
              const pricing = calculatePrice('small', smallQuantity);
              return (
                <div className="glass-card p-6 sm:p-8 rounded hover:shadow-lg transition-shadow">
                  <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                    Small
                  </div>
                  <div className="text-sm text-neutral-500 mb-6 font-light">
                    ~12 pieces per touchpoint
                  </div>
                  
                  {/* Slider */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Touchpoints/Month</span>
                      <span className="text-2xl font-display font-light text-neutral-950">{smallQuantity}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="500"
                      value={smallQuantity}
                      onChange={(e) => setSmallQuantity(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
                    />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1">
                      <span>1</span>
                      <span>500</span>
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="mb-6">
                    {pricing.discount > 0 ? (
                      <div className="inline-block px-3 py-1 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light">
                        {pricing.discount}% Savings
                      </div>
                    ) : (
                      <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-500 text-xs uppercase tracking-widest font-display font-light">
                        No discount
                      </div>
                    )}
                  </div>

                  {/* Pricing Display */}
                  <div className="border-t border-neutral-200 pt-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Per touchpoint</span>
                      <span className="text-lg font-display font-light text-neutral-950">
                        ${pricing.perTouchpoint.toFixed(2)}
                        {pricing.discount > 0 && (
                          <span className="text-sm text-neutral-400 line-through ml-2">${basePrices.small}</span>
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600 font-light">Monthly total</span>
                      <span className="text-2xl font-display font-light text-neutral-950">
                        ${pricing.total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-neutral-600 font-light mb-6">
                    <li>• Custom branding included</li>
                    <li>• Shipping included</li>
                    <li>• Flexible scheduling</li>
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-display font-light rounded transition-all"
                  >
                    Get Started
                  </button>
                </div>
              );
            })()}

            {/* Medium Slider */}
            {(() => {
              const pricing = calculatePrice('medium', mediumQuantity);
              return (
                <div className="glass-card p-6 sm:p-8 rounded ring-2 ring-neutral-950 hover:shadow-lg transition-shadow">
                  <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-2 font-display">
                    Medium
                  </div>
                  <div className="inline-block px-3 py-1 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light mb-4">
                    Most Popular
                  </div>
                  <div className="text-sm text-neutral-500 mb-6 font-light">
                    ~20 pieces per touchpoint
                  </div>
                  
                  {/* Slider */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Touchpoints/Month</span>
                      <span className="text-2xl font-display font-light text-neutral-950">{mediumQuantity}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="500"
                      value={mediumQuantity}
                      onChange={(e) => setMediumQuantity(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
                    />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1">
                      <span>1</span>
                      <span>500</span>
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="mb-6">
                    {pricing.discount > 0 ? (
                      <div className="inline-block px-3 py-1 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light">
                        {pricing.discount}% Savings
                      </div>
                    ) : (
                      <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-500 text-xs uppercase tracking-widest font-display font-light">
                        No discount
                      </div>
                    )}
                  </div>

                  {/* Pricing Display */}
                  <div className="border-t border-neutral-200 pt-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Per touchpoint</span>
                      <span className="text-lg font-display font-light text-neutral-950">
                        ${pricing.perTouchpoint.toFixed(2)}
                        {pricing.discount > 0 && (
                          <span className="text-sm text-neutral-400 line-through ml-2">${basePrices.medium}</span>
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600 font-light">Monthly total</span>
                      <span className="text-2xl font-display font-light text-neutral-950">
                        ${pricing.total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-neutral-600 font-light mb-6">
                    <li>• Custom branding included</li>
                    <li>• Shipping included</li>
                    <li>• Flexible scheduling</li>
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-display font-light rounded transition-all"
                  >
                    Get Started
                  </button>
                </div>
              );
            })()}

            {/* Large Slider */}
            {(() => {
              const pricing = calculatePrice('large', largeQuantity);
              return (
                <div className="glass-card p-6 sm:p-8 rounded hover:shadow-lg transition-shadow">
                  <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
                    Large
                  </div>
                  <div className="text-sm text-neutral-500 mb-6 font-light">
                    ~30 pieces per touchpoint
                  </div>
                  
                  {/* Slider */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Touchpoints/Month</span>
                      <span className="text-2xl font-display font-light text-neutral-950">{largeQuantity}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="500"
                      value={largeQuantity}
                      onChange={(e) => setLargeQuantity(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
                    />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1">
                      <span>1</span>
                      <span>500</span>
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="mb-6">
                    {pricing.discount > 0 ? (
                      <div className="inline-block px-3 py-1 bg-neutral-950 text-white text-xs uppercase tracking-widest font-display font-light">
                        {pricing.discount}% Savings
                      </div>
                    ) : (
                      <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-500 text-xs uppercase tracking-widest font-display font-light">
                        No discount
                      </div>
                    )}
                  </div>

                  {/* Pricing Display */}
                  <div className="border-t border-neutral-200 pt-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600 font-light">Per touchpoint</span>
                      <span className="text-lg font-display font-light text-neutral-950">
                        ${pricing.perTouchpoint.toFixed(2)}
                        {pricing.discount > 0 && (
                          <span className="text-sm text-neutral-400 line-through ml-2">${basePrices.large}</span>
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600 font-light">Monthly total</span>
                      <span className="text-2xl font-display font-light text-neutral-950">
                        ${pricing.total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-neutral-600 font-light mb-6">
                    <li>• Custom branding included</li>
                    <li>• Shipping included</li>
                    <li>• Flexible scheduling</li>
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className="glass-button w-full px-6 py-3 text-white text-xs uppercase tracking-widest font-display font-light rounded transition-all"
                  >
                    Get Started
                  </button>
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

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 border-t border-neutral-200" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
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
                What if I need more than 500 touchpoints per month?
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed font-light">
                Contact us for custom enterprise pricing. We work with companies sending thousands of gifts per month and can create a tailored solution for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 border-t border-neutral-200" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw] text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            Request a sample or speak with our team to find the right plan for your outbound strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="glass-button w-full sm:w-auto px-8 py-4 text-white text-base font-light rounded transition-all inline-block text-center font-display"
            >
              Request a Sample
            </button>
            <button
              onClick={scrollToContact}
              className="glass-button-light w-full sm:w-auto px-8 py-4 text-neutral-950 text-base font-light rounded transition-all inline-block text-center font-display border border-neutral-200"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
