export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Customize Your Gift',
      description: 'Choose your branding, logo placement, and value prop messaging. Each chocolate wrapper becomes a mini billboard for your brand.',
      icon: '🎨',
    },
    {
      number: '02',
      title: 'Send to Prospects',
      description: 'We handle shipping directly to your prospect list. Schedule delivery dates to align with your sales outreach campaigns.',
      icon: '📦',
    },
    {
      number: '03',
      title: 'Win Desk Ad Space',
      description: 'Your gift sits on their desk, making them see your logo and message multiple times throughout the day. Physical presence beats digital noise.',
      icon: '🏆',
    },
    {
      number: '04',
      title: 'Close More Deals',
      description: 'Enjoy 30%+ reply rates and increased deal velocity. The repeated exposure creates familiarity and goodwill that accelerates sales cycles.',
      icon: '💰',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-600 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple 4-step process to transform your prospecting strategy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Connection Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gold-300 to-gold-100 -z-10" style={{ width: 'calc(100% - 2rem)' }}></div>
              )}
              
              <div className="bg-cream-50 rounded-2xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 h-full border border-cream-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{step.icon}</div>
                  <div className="text-6xl font-display font-bold text-gold-500 opacity-30">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Mentions */}
        <div className="mt-16 bg-gradient-to-r from-chocolate-50 to-cream-50 rounded-2xl p-8 border border-chocolate-100">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Works With Your Existing Tools
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <span className="text-gray-700 font-semibold">Salesforce</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <span className="text-gray-700 font-semibold">HubSpot</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <span className="text-gray-700 font-semibold">Outreach.io</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <span className="text-gray-700 font-semibold">Salesforce Pardot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

