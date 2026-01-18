export default function Services() {
  return (
    <section id="services" className="py-32" style={{ backgroundColor: '#f9f8fa' }}>
      <div className="max-w-editorial mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Prospect Gifting for Revenue Growth
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            A strategic outbound motion that drives pipeline results. Premium chocolate gifts 
            designed specifically for sales and marketing teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {/* Prospect Gifting - Main Focus */}
          <div className="border-b border-neutral-200 pb-8">
            <h3 className="text-3xl font-display font-light text-neutral-950 mb-6">
              Prospect Gifting
            </h3>
            <p className="text-base text-neutral-600 mb-8 leading-relaxed font-light">
              The only outbound channel that works when email stops getting replies. 
              Built for ABM strategies, cold outreach, and stalled deal re-engagement.
            </p>
            <ul className="space-y-4 text-neutral-700">
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">30%+ reply rates (10-15x higher than email)</span>
              </li>
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">2-3x faster deal velocity</span>
              </li>
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Perfect for targeted account penetration</span>
              </li>
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Integrates seamlessly with your sales cadence</span>
              </li>
            </ul>
          </div>

          {/* Employee Gifts */}
          <div className="border-b border-neutral-200 pb-8">
            <h3 className="text-3xl font-display font-light text-neutral-950 mb-6">
              Employee Gifts
            </h3>
            <p className="text-base text-neutral-600 mb-8 leading-relaxed font-light">
              Show appreciation with premium chocolate gifts for retention, anniversaries, 
              and special achievements.
            </p>
            <ul className="space-y-4 text-neutral-700">
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Retention programs</span>
              </li>
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Anniversary celebrations</span>
              </li>
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Recognition rewards</span>
              </li>
            </ul>
          </div>

          {/* Event Gifting */}
          <div className="border-b border-neutral-200 pb-8">
            <h3 className="text-3xl font-display font-light text-neutral-950 mb-6">
              Event Gifting
            </h3>
            <p className="text-base text-neutral-600 mb-8 leading-relaxed font-light">
              Perfect for tradeshows, conferences, and corporate events. Make a memorable 
              impression with branded chocolate gifts.
            </p>
            <ul className="space-y-4 text-neutral-700">
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Tradeshows & conferences</span>
              </li>
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Corporate events</span>
              </li>
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Branded packaging</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
