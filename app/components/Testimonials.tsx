export default function Testimonials() {
  const testimonials = [
    {
      quote: 'We leverage prospect gifting to thank customers for participating in our reference program... our sales team uses it to help source leads... we use it to incentivize customers to complete reviews and surveys... we use it for EVERYTHING.',
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
      company: '',
    },
    {
      quote: 'Prospect gifting helps speed up my sales cycle and I love it. Allows me to break the ice with purpose. Gifting should mean something. By using our solution I can curate appreciation easily.',
      author: 'Willie Little',
      title: 'Account Executive',
      company: '',
    },
  ];

  return (
    <section className="py-24 bg-page">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Hear from our customers
          </h2>
        </div>

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
  );
}
