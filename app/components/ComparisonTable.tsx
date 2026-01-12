export default function ComparisonTable() {
  const features = [
    {
      feature: 'Reply Rate',
      yourGift: '30%+',
      email: '2-3%',
      coldCall: '1-2%',
      yourGiftHighlight: true,
    },
    {
      feature: 'Brand Visibility',
      yourGift: '24/7 on desk',
      email: 'Opened once',
      coldCall: 'No visibility',
      yourGiftHighlight: true,
    },
    {
      feature: 'Repeated Exposure',
      yourGift: '12+ times/day',
      email: 'Once (if opened)',
      coldCall: 'One interaction',
      yourGiftHighlight: true,
    },
    {
      feature: 'Deal Velocity',
      yourGift: '2-3x faster',
      email: 'Standard',
      coldCall: 'Standard',
      yourGiftHighlight: true,
    },
    {
      feature: 'Goodwill Creation',
      yourGift: 'High',
      email: 'Low',
      coldCall: 'Negative',
      yourGiftHighlight: true,
    },
    {
      feature: 'Cost per Touchpoint',
      yourGift: '$25-35',
      email: '$0.10-1',
      coldCall: '$50-100',
      yourGiftHighlight: false,
    },
    {
      feature: 'Cut Through Noise',
      yourGift: 'Yes - Physical',
      email: 'No - Digital clutter',
      coldCall: 'No - Interruptive',
      yourGiftHighlight: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-600 mb-4">
            Why Physical Gifts Win
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how prospecting gifts outperform traditional outreach methods
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-luxury-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-cream-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-chocolate-700">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-chocolate-700 bg-gold-50">
                    Your Gift
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Cold Call
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-cream-50'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {item.feature}
                    </td>
                    <td className={`px-6 py-4 text-center text-sm font-semibold ${
                      item.yourGiftHighlight
                        ? 'text-chocolate-700 bg-gold-50'
                        : 'text-gray-700'
                    }`}>
                      {item.yourGift}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      {item.coldCall}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to see the difference a physical touchpoint can make?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-chocolate-600 text-white rounded-lg font-semibold text-lg hover:bg-chocolate-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Request a Sample
          </a>
        </div>
      </div>
    </section>
  );
}

