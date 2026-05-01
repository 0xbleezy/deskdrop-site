'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function InlineFAQ({ faqs, heading }: { faqs: FAQItem[]; heading?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-12 max-w-2xl mx-auto">
      {heading && (
        <h3 className="text-lg font-display font-light text-neutral-900 mb-4 tracking-widest uppercase text-center">
          {heading}
        </h3>
      )}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card rounded overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-inset rounded"
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span id={`faq-question-${i}`} className="text-sm font-display font-light text-neutral-900">{faq.question}</span>
              <span className="text-neutral-400 ml-4 flex-shrink-0" aria-hidden="true">{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && (
              <div id={`faq-answer-${i}`} className="px-6 pb-4" role="region" aria-labelledby={`faq-question-${i}`}>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
