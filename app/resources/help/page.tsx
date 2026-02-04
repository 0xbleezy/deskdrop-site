import Link from 'next/link';

export default function HelpPage() {
  const faqs = [
    {
      question: 'What\'s the minimum order for a pilot program?',
      answer: 'Our minimum custom production run starts at 50 jars. We offer three jar sizes (small, medium, or large), with the large size being our most popular for prospecting campaigns.',
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
      question: 'Can I test different messaging across my prospect list?',
      answer: 'Each order features consistent branding with your logo and value proposition messaging across all wrappers. This creates uniform brand presence. If you want to test different messages, we can discuss splitting orders or running sequential campaigns.',
    },
    {
      question: 'Do you offer samples for sales leadership to evaluate?',
      answer: 'Yes, we can send samples so you can evaluate quality, packaging, and presentation. Request samples through our contact form. Once you\'re ready to order, we\'ll handle full customization with your logo and messaging.',
    },
    {
      question: 'What if I need to scale across hundreds of prospects?',
      answer: 'Our production model scales efficiently for campaigns of any size. We can coordinate large production runs and ship directly to your entire prospect list. Many clients run campaigns across hundreds of prospects with coordinated delivery dates.',
    },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-32 pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Help Center
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Find answers to common questions about prospect gifting, ordering, customization, 
              and campaign execution.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded border border-neutral-200"
              >
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
      <section className="py-24" style={{ backgroundColor: '#f5f3f0' }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Still have questions?
          </h2>
          <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light">
            Contact us and we'll help you find the answers you need.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-neutral-900 text-white text-base font-light rounded hover:bg-neutral-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
