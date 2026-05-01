import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help & FAQ — Prospect Gifting Questions Answered | DeskDrop',
  description: 'Find answers to common questions about prospect gifting, ordering, customization, shipping, and campaign execution.',
  openGraph: {
    title: 'Help & FAQ — Prospect Gifting Questions Answered | DeskDrop',
    description: 'Find answers to common questions about prospect gifting, ordering, customization, and campaign execution.',
    url: 'https://thedeskdrop.com/resources/help',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Help & FAQ | DeskDrop',
    description: 'Find answers to common questions about prospect gifting, ordering, customization, and campaign execution.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/resources/help' },
};

const gettingStartedFaqs = [
  {
    question: 'What\'s the minimum order for a pilot program?',
    answer: 'Our minimum custom production run starts at 50 jars. We offer three jar sizes (Scale, Desk, and Office), with the Office size being our most popular for prospecting campaigns.',
  },
  {
    question: 'How quickly can I deploy this in my sales motion?',
    answer: 'Production takes 2 weeks from order confirmation. Once production completes, we ship directly to your prospect list. Plan your campaign timing accordingly.',
  },
  {
    question: 'What kind of ROI can I expect?',
    answer: 'Our clients see 30%+ reply rates, which is 10-15x higher than email campaigns (2-3%) or cold calls (1-2%). Combined with 2-3x faster deal velocity, most campaigns pay for themselves with the first closed deal.',
  },
  {
    question: 'Do you offer samples for sales leadership to evaluate?',
    answer: 'Yes, we can send an unbranded sample so you can evaluate quality, packaging, and presentation. Request samples through our contact form. Once you\'re ready to order, we\'ll handle full customization with your logo and messaging.',
  },
];

const orderingFaqs = [
  {
    question: 'What jar sizes do you offer?',
    answer: 'We offer three sizes: Scale (20 pieces, 125 jars at $25/jar), Desk (30 pieces, 75 jars at $30/jar), and Office (40 pieces, 50 jars at $40/jar). All sizes include custom branding on every wrapper.',
  },
  {
    question: 'Can I mix jar sizes in my order?',
    answer: 'Yes, you can mix sizes within a single order. Orders are based on increments of 1440 chocolates, which can be configured across the three jar sizes to match your needs.',
  },
  {
    question: 'Is there a long-term commitment for monthly plans?',
    answer: 'No. Monthly plans are month-to-month with no long-term contract required. You can pause or cancel anytime—changes take effect on your next billing cycle with no cancellation fees.',
  },
  {
    question: 'What\'s included in the pricing?',
    answer: 'All pricing includes custom logo branding on wrappers, custom messaging, premium packaging, and the follow-up outreach playbook. Shipping is handled separately based on your prospect list.',
  },
];

const customizationFaqs = [
  {
    question: 'Can I test different messaging across my prospect list?',
    answer: 'Each order features consistent branding with your logo and value proposition messaging across all wrappers. This creates uniform brand presence. If you want to test different messages, we can discuss splitting orders or running sequential campaigns.',
  },
  {
    question: 'What assets do I need to provide?',
    answer: 'Just your logo (vector format preferred) and any messaging you\'d like on the wrappers. Our team handles the design and layout, and you\'ll approve mockups before production begins.',
  },
  {
    question: 'How many rounds of design revisions are included?',
    answer: 'We include up to two rounds of revisions on your wrapper mockup at no extra cost. Most clients approve on the first round since we work closely with you on the brief.',
  },
];

const shippingFaqs = [
  {
    question: 'How long does production take?',
    answer: 'Single campaign orders take 2 weeks for production from approval. Monthly recurring plans include priority scheduling and can be coordinated with your sales cadence.',
  },
  {
    question: 'Do you ship directly to my prospects?',
    answer: 'Yes. We ship directly to each address on your prospect list. You\'ll receive tracking confirmation when orders ship. We currently cover domestic US shipping.',
  },
  {
    question: 'What if I need to scale across hundreds of prospects?',
    answer: 'Our production model scales efficiently for campaigns of any size. We can coordinate large production runs and ship directly to your entire prospect list. Many clients run campaigns across hundreds of prospects with coordinated delivery dates.',
  },
  {
    question: 'Can I schedule deliveries to coincide with my outreach?',
    answer: 'Yes. For monthly plans, we coordinate production and delivery timing with your sales cadence. For single campaigns, we can target specific delivery windows to align with your follow-up sequence.',
  },
];

const allFaqs = [
  ...gettingStartedFaqs,
  ...orderingFaqs,
  ...customizationFaqs,
  ...shippingFaqs,
];

export default function HelpPage() {
  return (
    <>
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: allFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <main className="min-h-screen bg-page">
        {/* Hero */}
        <section className="py-20 pt-32 sm:py-32 sm:pt-40 bg-white">
          <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6 font-display">
                Resources
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
                Help Center
              </h1>
              <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
                Find answers to common questions about prospect gifting, ordering, customization, 
                shipping, and campaign execution.
              </p>
              {/* Jump Links */}
              <nav className="flex flex-wrap gap-3 text-sm" aria-label="FAQ categories">
                <a href="#getting-started" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Getting Started</a>
                <a href="#ordering" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Ordering &amp; Pricing</a>
                <a href="#customization" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Customization</a>
                <a href="#shipping" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light underline underline-offset-4">Shipping &amp; Logistics</a>
              </nav>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="py-16 sm:py-24 bg-page">
          <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
            <h2 className="text-2xl font-display font-light text-neutral-900 mb-8 tracking-widest uppercase">Getting Started</h2>
            <div className="space-y-6">
              {gettingStartedFaqs.map((faq, index) => (
                <div key={index} className="glass-card p-8 rounded">
                  <h3 className="text-xl font-display font-light text-neutral-900 mb-4 leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ordering & Pricing */}
        <section id="ordering" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
          <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
            <h2 className="text-2xl font-display font-light text-neutral-900 mb-8 tracking-widest uppercase">Ordering &amp; Pricing</h2>
            <div className="space-y-6">
              {orderingFaqs.map((faq, index) => (
                <div key={index} className="glass-card p-8 rounded">
                  <h3 className="text-xl font-display font-light text-neutral-900 mb-4 leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customization */}
        <section id="customization" className="py-16 sm:py-24 bg-page border-t border-neutral-100">
          <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
            <h2 className="text-2xl font-display font-light text-neutral-900 mb-8 tracking-widest uppercase">Customization</h2>
            <div className="space-y-6">
              {customizationFaqs.map((faq, index) => (
                <div key={index} className="glass-card p-8 rounded">
                  <h3 className="text-xl font-display font-light text-neutral-900 mb-4 leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping & Logistics */}
        <section id="shipping" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
          <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
            <h2 className="text-2xl font-display font-light text-neutral-900 mb-8 tracking-widest uppercase">Shipping &amp; Logistics</h2>
            <div className="space-y-6">
              {shippingFaqs.map((faq, index) => (
                <div key={index} className="glass-card p-8 rounded">
                  <h3 className="text-xl font-display font-light text-neutral-900 mb-4 leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-warm">
          <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Still have questions?
            </h2>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light">
              Contact us and we&apos;ll help you find the answers you need.
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
    </>
  );
}
