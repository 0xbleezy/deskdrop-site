'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const topFaqs = [
    {
      question: 'What\'s the minimum order for a pilot program?',
      answer: 'Our minimum custom production run starts at 50 jars. We offer three jar sizes (small, medium, or large), with the large size being our most popular for prospecting campaigns. Typical pilot programs range from 50-75 jars, perfect for testing with your target accounts.',
    },
    {
      question: 'How quickly can I deploy this in my sales motion?',
      answer: 'Production takes 2 weeks from order confirmation. Once production completes, we ship directly to your prospect list. Plan your campaign timing accordingly. We recommend coordinating with your sales cadence to ensure delivery aligns with your outreach sequences.',
    },
    {
      question: 'What kind of ROI can I expect?',
      answer: 'Our clients see 30%+ reply rates, which is 10-15x higher than email campaigns (2-3%) or cold calls (1-2%). Combined with 2-3x faster deal velocity, most campaigns pay for themselves with the first closed deal. Use our ROI calculator above to model your specific scenario.',
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-200" style={{ backgroundColor: 'transparent' }}>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600 font-light">
            Everything marketing, sales, and revenue leaders need to know
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto mb-12">
          {topFaqs.map((faq, index) => (
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

        <div className="text-center border-t border-neutral-200 pt-12">
          <Link
            href="/resources/help"
            className="glass-button-outline inline-block px-8 py-3 text-neutral-950 text-xs uppercase tracking-widest font-light transition-colors"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
