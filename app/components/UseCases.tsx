export default function UseCases() {
  const useCases = [
    {
      title: 'Cold or Ignored Outbound',
      description: 'Send a gift before your first outreach to warm cold prospects. The physical touchpoint increases reply rates and meeting acceptance significantly compared to email-only sequences.',
      metrics: ['Up to 40% higher meeting acceptance rates', '2x faster response times', 'Breaks through inbox fatigue'],
    },
    {
      title: 'Stalled High-Value Deals',
      description: 'Reopen conversations with high-value accounts that have gone quiet. Targeted gifts to key decision-makers can rekindle stalled opportunities and reset relationship dynamics.',
      metrics: ['3x engagement rates vs. email re-engagement', '50% faster deal velocity on revived opportunities', 'Reduces "radio silence" response times'],
    },
    {
      title: 'Strategic Account Penetration',
      description: 'Perfect for ABM programs targeting multiple stakeholders. Get noticed by decision-makers, influencers, and budget-holders simultaneously, creating coordinated brand presence across the account.',
      metrics: ['Penetrate multi-stakeholder accounts effectively', 'Higher awareness across buying committees', 'Better positioning for enterprise deals'],
    },
    {
      title: 'Conference Follow-Up',
      description: 'Stand out after in-person connections. Send a gift to prospects you met at conferences or tradeshows to cut through the digital follow-up noise and reinforce your in-person meeting.',
      metrics: ['60% better follow-up response rates', 'Higher meeting conversion from event leads', 'Bridges online/offline touchpoints'],
    },
  ];

  return (
    <section className="py-32" style={{ backgroundColor: '#f9f8fa' }}>
      <div className="max-w-editorial mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            Use Cases
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            When prospect gifting delivers real pipeline results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="border-t border-neutral-200 pt-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-display font-light text-neutral-950 mb-2 leading-tight">
                  {useCase.title}
                </h3>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                {useCase.description}
              </p>
              <div className="mb-6">
                <div className="text-xs text-neutral-600 uppercase tracking-widest font-light mb-3">Key Results:</div>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start text-base text-neutral-700 font-light">
                      <span className="text-neutral-400 mr-4">—</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

