export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Identify Target Accounts',
      description: 'Identify your target accounts, stalled deals, or prospects who need re-engagement. This works best with precise targeting, not broad blasts.',
    },
    {
      number: '02',
      title: 'Plan Timing with Your Outreach',
      description: 'Schedule delivery to align with your sales cadence. We handle shipping directly to your prospect list, giving you full control over timing. Production takes 2 weeks once your order is confirmed.',
    },
    {
      number: '03',
      title: 'Deliver the Touchpoint',
      description: 'A thoughtfully designed gift arrives and takes its place on their desk. No coordination needed—we handle all logistics and delivery confirmations.',
    },
    {
      number: '04',
      title: 'Follow Up with Purpose',
      description: 'Reach out after delivery with a genuine check-in. The gift gives you a natural reason to re-engage that doesn\'t feel like a demand for their time.',
    },
  ];

  return (
    <section className="py-32" style={{ backgroundColor: '#f9f8fa' }}>
      <div className="max-w-editorial mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-display font-light text-neutral-950 mb-8 leading-tight">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            How prospect gifting fits into your sales motion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-t border-neutral-200 pt-8"
            >
              <div className="text-4xl font-display font-light text-neutral-400 mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-display font-light text-neutral-950 mb-6 leading-tight">
                {step.title}
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center border-t border-neutral-200 pt-16">
          <p className="text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light italic">
            This is not bulk swag. It's a precise outbound trigger deployed with intention at key moments in your sales process. Quality over quantity always wins.
          </p>
        </div>
      </div>
    </section>
  );
}
