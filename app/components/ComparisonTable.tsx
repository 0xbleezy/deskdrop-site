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
      yourGift: '$35-50 per unit',
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
    <section className="py-24 border-t border-neutral-200" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Why This Works Where Other Channels Stall
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Behavioral advantages that drive different outcomes
          </p>
        </div>

        <div className="border border-neutral-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="px-3 md:px-6 py-2 md:py-4 text-left text-[10px] md:text-xs font-light text-neutral-950 uppercase tracking-widest">
                    Feature
                  </th>
                  <th className="px-3 md:px-6 py-2 md:py-4 text-center text-[10px] md:text-xs font-light text-neutral-950 uppercase tracking-widest bg-neutral-50">
                    <span className="md:hidden">Gift</span>
                    <span className="hidden md:inline">Your Gift</span>
                  </th>
                  <th className="px-3 md:px-6 py-2 md:py-4 text-center text-[10px] md:text-xs font-light text-neutral-600 uppercase tracking-widest">
                    Email
                  </th>
                  <th className="px-3 md:px-6 py-2 md:py-4 text-center text-[10px] md:text-xs font-light text-neutral-600 uppercase tracking-widest">
                    <span className="md:hidden">Call</span>
                    <span className="hidden md:inline">Cold Call</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-neutral-100 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'
                    }`}
                  >
                    <td className="px-3 md:px-6 py-2 md:py-4 text-xs md:text-sm font-light text-neutral-950">
                      {item.feature}
                    </td>
                    <td className={`px-3 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-light ${
                      item.yourGiftHighlight
                        ? 'text-neutral-950 bg-neutral-50'
                        : 'text-neutral-700'
                    }`}>
                      {item.yourGift}
                    </td>
                    <td className="px-3 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm text-neutral-600 font-light">
                      {item.email}
                    </td>
                    <td className="px-3 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm text-neutral-600 font-light">
                      {item.coldCall}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            The advantage: Repeated passive exposure builds familiarity without pressure, dramatically 
            increasing the likelihood of a welcome reply when you reach out. It's cognitive economics, not spam.
          </p>
        </div>

        <div className="mt-24 text-center border-t border-neutral-200 pt-16">
          <p className="text-lg text-neutral-700 mb-8 font-light">
            Ready to see the difference a physical touchpoint can make?
          </p>
          <a
            href="#contact"
            className="inline-block px-12 py-4 bg-neutral-950 text-white text-sm uppercase tracking-widest font-light hover:bg-neutral-800 transition-colors"
          >
            Request a Sample
          </a>
        </div>
      </div>
    </section>
  );
}
