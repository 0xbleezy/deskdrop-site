export default function Services() {
  return (
    <section id="services" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-700 mb-4">
            Corporate Gifting Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevate your business relationships with premium chocolate gifts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Prospect Gifting - Main Focus */}
          <div className="bg-gradient-to-br from-gold-50 to-white rounded-2xl p-8 shadow-luxury border-2 border-gold-200 hover:shadow-luxury-lg transition-all transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-4">
              Prospect Gifting
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our star product. Send a gift that wins desk ad space, cuts through digital noise, 
              and creates physical touchpoints in your sales strategy. 30%+ reply rate.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✓</span>
                <span className="leading-relaxed">Account-based marketing integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✓</span>
                <span className="leading-relaxed">Increases deal velocity</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✓</span>
                <span className="leading-relaxed">Creates lasting goodwill</span>
              </li>
            </ul>
          </div>

          {/* Employee Gifts */}
          <div className="bg-white rounded-2xl p-8 shadow-luxury border border-gray-200 hover:shadow-luxury-lg transition-all transform hover:-translate-y-1">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-4">
              Employee Gifts
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Show appreciation with premium chocolate gifts for retention, anniversaries, 
              and special achievements.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✓</span>
                <span className="leading-relaxed">Retention programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✓</span>
                <span className="leading-relaxed">Anniversary celebrations</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✓</span>
                <span className="leading-relaxed">Recognition rewards</span>
              </li>
            </ul>
          </div>

          {/* Event Gifting */}
          <div className="bg-white rounded-2xl p-8 shadow-luxury border border-gray-200 hover:shadow-luxury-lg transition-all transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🎪</div>
            <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-4">
              Event Gifting
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Perfect for tradeshows, conferences, and corporate events. Make a memorable 
              impression with branded chocolate gifts.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✓</span>
                <span className="leading-relaxed">Tradeshows & conferences</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✓</span>
                <span className="leading-relaxed">Corporate events</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✓</span>
                <span className="leading-relaxed">Branded packaging</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

