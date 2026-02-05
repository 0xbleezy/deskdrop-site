import Link from 'next/link';

export default function CustomersPage() {
  const testimonials = [
    {
      quote: 'We leverage prospect gifting to thank customers for participating in our reference program... our sales team uses it to help source leads... we use it for EVERYTHING.',
      author: 'Ray Rhodes',
      title: 'Co-Founder',
      company: 'UserEvidence',
    },
    {
      quote: 'Our marketing and sales playbooks include gift sends, one-off sends from AMs and AEs, employee appreciation, and direct mail campaigns. 40% of leads who receive a gift through our program end up converting to pipeline.',
      author: 'Mikaela Karcher',
      title: 'Field Marketing',
      company: 'Deal Support',
    },
    {
      quote: 'There are so many ways to use prospect gifting – customer gifting, prospecting, event follow-up, and employee engagement, just to name a few. Everyone can find a way to win.',
      author: 'Alice Stern',
      title: 'Senior Marketing Manager',
    },
    {
      quote: 'Prospect gifting helps speed up my sales cycle and I love it. Allows me to break the ice with purpose. Gifting should mean something. By using our solution I can curate appreciation easily.',
      author: 'Willie Little',
      title: 'Account Executive',
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
              Customers
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              See how companies are using prospect gifting to drive revenue, build relationships, 
              and accelerate pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded hover:shadow-lg transition-shadow"
              >
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-base font-medium text-neutral-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-neutral-600 font-light">
                    {testimonial.title}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#f5f3f0' }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to join our customers?
          </h2>
          <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light">
            See how prospect gifting can help you drive revenue and build stronger relationships.
          </p>
          <Link
            href="/#contact"
            className="glass-button inline-block px-8 py-4 text-white text-base font-light rounded transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
