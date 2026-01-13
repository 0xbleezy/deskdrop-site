export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Customize Your Gift',
      description: 'Choose your branding, logo placement, and value prop messaging. Each chocolate wrapper becomes a mini billboard for your brand.',
    },
    {
      number: '02',
      title: 'Send to Prospects',
      description: 'We handle shipping directly to your prospect list. Schedule delivery dates to align with your sales outreach campaigns.',
    },
    {
      number: '03',
      title: 'Win Desk Ad Space',
      description: 'Your gift sits on their desk, making them see your logo and message multiple times throughout the day. Physical presence beats digital noise.',
    },
    {
      number: '04',
      title: 'Close More Deals',
      description: 'Enjoy 30%+ reply rates and increased deal velocity. The repeated exposure creates familiarity and goodwill that accelerates sales cycles.',
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
            A simple 4-step process to transform your prospecting strategy
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
      </div>
    </section>
  );
}
