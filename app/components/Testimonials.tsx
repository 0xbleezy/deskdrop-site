export default function Testimonials() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-700 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our clients say about our corporate gifting solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cream-50 rounded-2xl p-8 shadow-luxury border border-cream-200 hover:shadow-luxury-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "The prospecting gift has become an essential part of our account-based marketing strategy. 
              The 30%+ reply rate speaks for itself. Our sales team loves how it creates meaningful touchpoints."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-200 to-gold-300 mr-4"></div>
              <div>
                <div className="font-semibold text-chocolate-700">Sarah Johnson</div>
                <div className="text-sm text-gray-600">VP of Sales, TechCorp</div>
              </div>
            </div>
          </div>

          <div className="bg-cream-50 rounded-2xl p-8 shadow-luxury border border-cream-200 hover:shadow-luxury-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="text-gold-500 text-2xl">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "We've seen a significant increase in deal velocity since incorporating these gifts into 
              our outreach. The physical presence on prospects' desks makes all the difference."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-200 to-gold-300 mr-4"></div>
              <div>
                <div className="font-semibold text-chocolate-700">Michael Chen</div>
                <div className="text-sm text-gray-600">Marketing Director, GrowthCo</div>
              </div>
            </div>
          </div>

          <div className="bg-cream-50 rounded-2xl p-8 shadow-luxury border border-cream-200 hover:shadow-luxury-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="text-gold-500 text-2xl">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "The customization options are fantastic. We can brand each wrapper with our value props, 
              and the quality of the chocolates is exceptional. Our clients are always impressed."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-200 to-gold-300 mr-4"></div>
              <div>
                <div className="font-semibold text-chocolate-700">Emily Rodriguez</div>
                <div className="text-sm text-gray-600">Account Manager, Enterprise Solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-br from-chocolate-50 to-cream-50 rounded-2xl p-8 shadow-luxury border border-chocolate-100">
          <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-8 text-center">
            Why Companies Choose Us
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-5xl font-display font-bold text-chocolate-700 mb-2">75+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-chocolate-700 mb-2">1000+</div>
              <div className="text-gray-600">Corporate Clients</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-chocolate-700 mb-2">30%+</div>
              <div className="text-gray-600">Average Reply Rate</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-chocolate-700 mb-2">250+</div>
              <div className="text-gray-600">Gift Options</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

