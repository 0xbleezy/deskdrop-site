'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What\'s the minimum order for a pilot program?',
      answer: 'We produce in packs of 1,440 chocolates, which can be configured across three jar sizes (small, medium, or large). A typical pilot program uses our medium or large configurations, providing 50-75 jars to test with your target accounts. You can also mix sizes within your order to match different prospect tiers.',
    },
    {
      question: 'How quickly can I deploy this in my sales motion?',
      answer: 'Production takes 2 weeks from order confirmation. Once production completes, we ship directly to your prospect list. Plan your campaign timing accordingly—we recommend coordinating with your sales cadence to ensure delivery aligns with your outreach sequences.',
    },
    {
      question: 'What kind of ROI can I expect?',
      answer: 'Our clients see 30%+ reply rates, which is 10-15x higher than email campaigns (2-3%) or cold calls (1-2%). Combined with 2-3x faster deal velocity, most campaigns pay for themselves with the first closed deal. Use our ROI calculator above to model your specific scenario.',
    },
    {
      question: 'Can I test different messaging across my prospect list?',
      answer: 'Each order features consistent branding—your logo and value proposition messaging across all wrappers. This creates uniform brand presence. If you want to test different messages, we can discuss splitting orders or running sequential campaigns.',
    },
    {
      question: 'What happens if prospects don\'t respond immediately?',
      answer: 'The gift continues working. It sits on their desk creating repeated brand exposure—every time they reach for a chocolate, they see your logo. Many clients report prospects reaching out weeks or months later, mentioning they kept seeing your brand. It\'s an investment that compounds over time.',
    },
    {
      question: 'How does this integrate with my existing sales tech stack?',
      answer: 'This is a physical touchpoint, not a software integration. It works alongside your CRM and sales tools—you coordinate delivery timing with your outreach cadences. Perfect for adding a physical dimension to your digital sales motion.',
    },
    {
      question: 'Do you offer samples for sales leadership to evaluate?',
      answer: 'Yes, we can send non-personalized samples so you can evaluate quality, packaging, and presentation. Request samples through our contact form. Once you\'re ready to order, we\'ll handle full customization with your logo and messaging.',
    },
    {
      question: 'What if I need to scale across hundreds of prospects?',
      answer: 'Our production model scales efficiently—each pack is 1,440 chocolates. We can coordinate multiple packs and ship directly to your entire prospect list. Many clients run campaigns across large account lists with coordinated delivery dates.',
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#f9f8fa' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600 font-light">
            Everything marketing, sales, and revenue leaders need to know
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-neutral-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-0 py-6 text-left flex items-center justify-between hover:opacity-70 transition-opacity"
              >
                <span className="text-lg font-light text-neutral-950 pr-8">
                  {faq.question}
                </span>
                <span className={`text-xl text-neutral-400 transition-transform flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-0 pb-6 pt-0">
                  <p className="text-neutral-600 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-neutral-200 pt-12">
          <p className="text-neutral-600 mb-4 font-light">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-block px-12 py-4 bg-neutral-950 text-white text-sm uppercase tracking-widest font-light hover:bg-neutral-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

