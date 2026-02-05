'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Show first FAQ expanded by default

  const faqs = [
    {
      question: 'What\'s the minimum order for a pilot program?',
      answer: 'Our minimum custom production run starts at 50 jars. We offer three jar sizes (small, medium, or large), with the large size being our most popular for prospecting campaigns. Typical pilot programs range from 50-75 jars, perfect for testing with your target accounts. You can also mix sizes within your order to match different prospect tiers.',
    },
    {
      question: 'How quickly can I deploy this in my sales motion?',
      answer: 'Production takes 2 weeks from order confirmation. Once production completes, we ship directly to your prospect list. Plan your campaign timing accordingly. We recommend coordinating with your sales cadence to ensure delivery aligns with your outreach sequences.',
    },
    {
      question: 'What kind of ROI can I expect?',
      answer: 'Our clients see 30%+ reply rates, which is 10-15x higher than email campaigns (2-3%) or cold calls (1-2%). Combined with 2-3x faster deal velocity, most campaigns pay for themselves with the first closed deal. Use our ROI calculator above to model your specific scenario.',
    },
    {
      question: 'Can I test different messaging across my prospect list?',
      answer: 'Each order features consistent branding with your logo and value proposition messaging across all wrappers. This creates uniform brand presence. If you want to test different messages, we can discuss splitting orders or running sequential campaigns.',
    },
    {
      question: 'What happens if prospects don\'t respond immediately?',
      answer: 'The gift continues working. It sits on their desk creating repeated brand exposure. Every time they reach for a chocolate, they see your logo. Many clients report prospects reaching out weeks or months later, mentioning they kept seeing your brand. It\'s an investment that compounds over time.',
    },
    {
      question: 'Do you offer samples for sales leadership to evaluate?',
      answer: 'Yes, we can send samples so you can evaluate quality, packaging, and presentation. Request samples through our contact form. Once you\'re ready to order, we\'ll handle full customization with your logo and messaging.',
    },
    {
      question: 'What if I need to scale across hundreds of prospects?',
      answer: 'Our production model scales efficiently for campaigns of any size. We can coordinate large production runs and ship directly to your entire prospect list. Many clients run campaigns across hundreds of prospects with coordinated delivery dates aligned to their sales cadences.',
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-200" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-4xl mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600 font-light">
            Everything marketing, sales, and revenue leaders need to know
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
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
            className="glass-button inline-block px-12 py-4 text-white text-sm uppercase tracking-widest font-light transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

