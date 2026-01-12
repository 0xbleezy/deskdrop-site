export default function UseCases() {
  const useCases = [
    {
      title: 'Sales Outreach',
      description: 'Perfect for your outbound sales team. Send gifts to warm up cold prospects before your first call. The physical touchpoint creates familiarity and increases meeting acceptance rates.',
      icon: '📞',
      metrics: ['40% higher meeting acceptance', '2x faster response time'],
      integration: 'Works with Salesforce, Outreach.io, Salesloft',
    },
    {
      title: 'Account-Based Marketing',
      description: 'Target high-value accounts with personalized gifts. Each decision-maker receives a customized gift with messaging tailored to their role and pain points.',
      icon: '🎯',
      metrics: ['3x engagement rate', '50% faster deal velocity'],
      integration: 'Integrates with HubSpot, Terminus, Demandbase',
    },
    {
      title: 'Event Follow-Up',
      description: 'Stand out after tradeshows and conferences. Send a follow-up gift to prospects you met, ensuring your brand stays top-of-mind long after the event ends.',
      icon: '🎪',
      metrics: ['60% better follow-up response', 'Higher meeting conversion'],
      integration: 'Syncs with event management platforms',
    },
    {
      title: 'Customer Retention',
      description: 'Re-engage dormant accounts or celebrate milestones. A thoughtful gift can rekindle relationships and open doors for upsells and renewals.',
      icon: '💎',
      metrics: ['35% re-engagement rate', 'Higher renewal rates'],
      integration: 'Compatible with your CRM',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-600 mb-4">
            Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies use prospecting gifts across their sales and marketing strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-cream-50 rounded-2xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 border border-cream-200"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{useCase.icon}</div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-2">
                    {useCase.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {useCase.description}
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-700 mb-2">Key Metrics:</div>
                <ul className="space-y-1">
                  {useCase.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span className="text-gold-500 mr-2">✓</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Integrations
                </div>
                <div className="text-sm text-gray-600">
                  {useCase.integration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className="mt-16 bg-gradient-to-r from-chocolate-50 to-cream-50 rounded-2xl p-8 border border-chocolate-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-2">
              Seamless Integration
            </h3>
            <p className="text-gray-600">
              Our prospecting gifts work with the tools you already use
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {['Salesforce', 'HubSpot', 'Outreach.io', 'Salesloft', 'Terminus', 'Demandbase', 'Marketo', 'Pardot'].map((tool) => (
              <div
                key={tool}
                className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700 font-semibold">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

