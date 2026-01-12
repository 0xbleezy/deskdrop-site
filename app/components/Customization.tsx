export default function Customization() {
  return (
    <section id="customization" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-700 mb-4">
            Customization Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Make every gift uniquely yours with our comprehensive customization options
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-luxury border border-gray-200 hover:shadow-luxury-lg transition-all transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-display font-bold text-chocolate-700 mb-3">
              Logo Branding
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your logo prominently displayed on each chocolate wrapper for maximum brand visibility
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-luxury border border-gray-200 hover:shadow-luxury-lg transition-all transform hover:-translate-y-1">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-display font-bold text-chocolate-700 mb-3">
              Value Props
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Custom messaging and value propositions on wrappers to reinforce your key messages
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-luxury border border-gray-200 hover:shadow-luxury-lg transition-all transform hover:-translate-y-1">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-xl font-display font-bold text-chocolate-700 mb-3">
              Branded Packaging
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Custom packaging with your brand colors, logo, and design elements
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-luxury border border-gray-200 hover:shadow-luxury-lg transition-all transform hover:-translate-y-1">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-xl font-display font-bold text-chocolate-700 mb-3">
              Volume Pricing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Competitive pricing for bulk orders with volume discounts available
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-chocolate-50 to-cream-50 rounded-2xl p-8 border border-chocolate-100 shadow-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-4">
              Personalized Gift Messages
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Add personalized messages, gift cards, or promotional materials to create a truly 
              customized gifting experience for each recipient.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 border border-gray-200">
                Custom Gift Cards
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 border border-gray-200">
                Personalized Notes
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 border border-gray-200">
                Promotional Materials
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 border border-gray-200">
                Holiday Cards
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

