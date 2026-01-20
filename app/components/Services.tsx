export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-neutral-200" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-editorial mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Outbound Gifting for Revenue Growth
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            A strategic outbound motion that drives pipeline results. Premium chocolate gifts 
            designed specifically for sales and marketing teams.
          </p>
        </div>

        {/* Header Image */}
        <div className="mb-24 aspect-[21/9] max-w-4xl mx-auto">
          <div 
            className="w-full h-full bg-cover bg-center border border-neutral-200"
            style={{
              backgroundImage: "url('/images/CLA - Prospect Gfiting.jpg')"
            }}
          ></div>
        </div>

        {/* Prospect Gifting - Main Focus - Full Width */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-display font-light text-neutral-950 mb-6 text-center">
            Prospect Gifting
          </h3>
          <p className="text-lg text-neutral-600 mb-10 leading-relaxed font-light text-center max-w-2xl mx-auto">
            The only outbound channel that works when email stops getting replies. 
            Built for ABM strategies, cold outreach, and stalled deal re-engagement.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4 text-neutral-700">
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">30%+ reply rates (10-15x higher than email)</span>
              </li>
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">2-3x faster deal velocity</span>
              </li>
            </ul>
            <ul className="space-y-4 text-neutral-700">
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
        </div>
      </div>
    </section>
  );
}
