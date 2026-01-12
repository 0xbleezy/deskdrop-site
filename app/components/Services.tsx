export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-editorial mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Corporate Gifting Solutions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Elevate your business relationships with premium chocolate gifts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {/* Prospect Gifting - Main Focus */}
          <div className="border-b border-neutral-200 pb-8">
            <h3 className="text-3xl font-display font-light text-neutral-950 mb-6">
              Prospect Gifting
            </h3>
            <p className="text-base text-neutral-600 mb-8 leading-relaxed font-light">
              Our star product. Send a gift that wins desk ad space, cuts through digital noise, 
              and creates physical touchpoints in your sales strategy. 30%+ reply rate.
            </p>
            <ul className="space-y-4 text-neutral-700">
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Account-based marketing integration</span>
              </li>
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Increases deal velocity</span>
              </li>
              <li className="flex items-start font-light">
                <span className="text-neutral-400 mr-4">—</span>
                <span className="leading-relaxed">Creates lasting goodwill</span>
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
