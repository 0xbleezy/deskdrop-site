'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the minimum order quantity?',
      answer: 'We offer flexible ordering options. For prospecting gifts, we typically recommend starting with 50-100 units, but we can accommodate smaller pilot programs. Volume discounts apply for orders over 200 units.',
    },
    {
      question: 'How long does customization take?',
      answer: 'Once we receive your logo and messaging, custom wrapper production takes 7-10 business days. Rush orders are available for an additional fee. We\'ll provide digital proofs for your approval before production begins.',
    },
    {
      question: 'What is the average cost per gift?',
      answer: 'Pricing varies based on quantity, customization level, and packaging options. Our prospecting gift packages start at $25-35 per unit for standard orders. Contact us for a custom quote based on your specific needs.',
    },
    {
      question: 'How do you handle shipping to multiple recipients?',
      answer: 'We can ship directly to your entire prospect list. Simply provide us with your recipient addresses and preferred delivery dates. We handle all logistics, including tracking and delivery confirmation. International shipping is available.',
    },
    {
      question: 'What kind of ROI can I expect?',
      answer: 'Our clients typically see 30%+ reply rates, which is significantly higher than email campaigns (2-3%) or cold calls (1-2%). Many clients report 2-3x faster deal velocity and increased meeting acceptance rates. The physical touchpoint creates lasting brand awareness.',
    },
    {
      question: 'Can I customize the messaging on each wrapper?',
      answer: 'Yes! Each chocolate wrapper can feature different value propositions or messaging. This is perfect for A/B testing or targeting different buyer personas. We can create up to 6-8 different wrapper designs per order.',
    },
    {
      question: 'What if a prospect doesn\'t respond?',
      answer: 'Even if a prospect doesn\'t immediately respond, your gift continues to work. It sits on their desk, creating repeated exposure to your brand. Many clients report prospects reaching out weeks or months later, mentioning they "kept seeing your logo."',
    },
    {
      question: 'Do you offer samples before ordering?',
      answer: 'Absolutely! We offer sample packages so you can see the quality and customization options firsthand. Request a sample through our contact form, and we\'ll send you a personalized sample within 3-5 business days.',
    },
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our prospecting gifts
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-luxury border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-cream-50 transition-colors"
              >
                <span className="text-lg font-semibold text-chocolate-700 pr-8">
                  {faq.question}
                </span>
                <span className={`text-2xl text-gold-500 transition-transform flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-chocolate-600 text-white rounded-lg font-semibold hover:bg-chocolate-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

