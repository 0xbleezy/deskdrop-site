'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FAQPreview() {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const topFaqs = [
    {
      question: 'What\'s the minimum order for a pilot program?',
      bullets: [
        'Minimum of 50 jars for a custom pilot',
        'Most teams start with 50–75 jars',
        'Three sizes available, with medium jars performing best for prospecting',
      ],
    },
    {
      question: 'How quickly can I deploy this in my sales motion?',
      bullets: [
        '2-week production from confirmation',
        'Ships directly to your prospect list',
        'Timed to coordinate with your outreach cadence',
      ],
    },
    {
      question: 'What kind of ROI can I expect?',
      bullets: [
        '30%+ reply rates (10–15x higher than email)',
        '2–3x faster deal velocity on engaged accounts',
        'Most campaigns pay for themselves with one closed deal',
      ],
    },
  ];

  return (
    <section ref={sectionRef as any} className={`py-16 sm:py-24 fade-in-on-scroll ${isVisible ? 'visible' : ''}`}>
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        {/* GlassCard wrapper */}
        <div className="glass-card p-8 sm:p-12">
          <div className="text-center mb-10">
            <p className="text-xs text-neutral-400 uppercase tracking-[0.3em] font-light mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-950">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-0">
            {topFaqs.map((faq, index) => (
              <div
                key={index}
                className={`${index > 0 ? 'border-t border-black/5' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-4 py-5 text-left flex items-center justify-between hover:bg-black/[0.02] transition-colors rounded-lg -mx-4"
                >
                  <span className="text-xl font-light text-neutral-950 pr-6">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div id={`faq-answer-${index}`} role="region" className="px-4 pb-5 pt-0 -mx-4">
                    <ul className="space-y-3">
                      {faq.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-black/70 font-light leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-neutral-300 mt-2.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-black/5 text-center">
            <Link
              href="/resources/help"
              className="glass-button inline-block px-8 py-3 text-white text-xs uppercase tracking-widest font-light transition-colors"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
