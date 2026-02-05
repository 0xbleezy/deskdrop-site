export default function CaseStudies() {
  const caseStudies = [
    {
      company: 'TechCorp',
      industry: 'SaaS',
      challenge: 'Low response rates from cold email campaigns (2-3%)',
      solution: 'Implemented prospecting gift program for top 200 target accounts',
      results: [
        '38% reply rate (vs. 2% with email)',
        '2.5x faster deal velocity',
        '$2.4M in new pipeline generated',
        '19x ROI on gift investment',
      ],
      quote: 'The prospecting gifts transformed our outbound strategy. We went from struggling to get responses to having prospects reach out to us.',
      author: 'Sarah Johnson, VP of Sales',
    },
    {
      company: 'GrowthCo',
      industry: 'Marketing Technology',
      challenge: 'Difficulty breaking into enterprise accounts',
      solution: 'Used prospecting gifts as part of account-based marketing strategy',
      results: [
        '45% meeting acceptance rate',
        '3x increase in qualified opportunities',
        '60% faster time to first meeting',
        '$1.8M in closed deals',
      ],
      quote: 'The physical touchpoint made all the difference. Decision-makers remembered us and were more receptive to our outreach.',
      author: 'Michael Chen, Marketing Director',
    },
    {
      company: 'Enterprise Solutions Inc.',
      industry: 'Enterprise Software',
      challenge: 'Long sales cycles and low engagement from key stakeholders',
      solution: 'Sent personalized gifts to multiple decision-makers within target accounts',
      results: [
        '52% stakeholder engagement increase',
        '40% reduction in sales cycle length',
        '35% higher win rate',
        '4.2x ROAS on gift campaigns',
      ],
      quote: 'Sending gifts to multiple stakeholders created internal champions who advocated for our solution.',
      author: 'Emily Rodriguez, Account Manager',
    },
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-600 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from companies using our prospecting gifts
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-luxury-lg border border-gray-200"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="mb-4">
                    <div className="text-3xl font-display font-bold text-chocolate-700 mb-1">
                      {study.company}
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">
                      {study.industry}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Challenge
                      </div>
                      <p className="text-sm text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Solution
                      </div>
                      <p className="text-sm text-gray-700">{study.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-4">
                      Results
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.results.map((result, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-cream-50 rounded-lg p-4 border border-cream-200"
                        >
                          <span className="text-gold-500 text-xl flex-shrink-0">✓</span>
                          <span className="text-sm font-semibold text-chocolate-700">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-chocolate-50 to-cream-50 rounded-xl p-6 border-l-4 border-gold-500">
                    <p className="text-gray-700 italic mb-4 leading-relaxed">
                      "{study.quote}"
                    </p>
                    <p className="text-sm font-semibold text-chocolate-700">
                      — {study.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to create your own success story?
          </p>
          <a
            href="#contact"
            className="glass-button inline-block px-8 py-4 text-white text-sm uppercase tracking-widest font-light transition-colors"
          >
            Start Your Campaign
          </a>
        </div>
      </div>
    </section>
  );
}

