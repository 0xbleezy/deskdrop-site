'use client';

export default function StarProduct() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="star-product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-700 mb-4">
            The Prospecting Gift
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your star product for winning desk ad space and cutting through digital noise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury-lg">
              <div 
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=1200&q=80')"
                }}
              ></div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl font-display font-bold text-chocolate-700 mb-6">
              A Gift That Works Harder
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Send your prospect a beautifully branded chocolate jar that sits on their desk. 
              Each chocolate wrapper features your logo and value prop, ensuring they see your 
              brand multiple times - following the proven "12 times before they buy" marketing principle.
            </p>

            {/* Conversion Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-gold-50 to-white rounded-xl shadow-luxury p-6 border-2 border-gold-200">
                <div className="text-4xl font-display font-bold text-chocolate-700 mb-2">30%+</div>
                <div className="text-sm text-chocolate-600 font-semibold">Reply Rate</div>
              </div>
              <div className="bg-gradient-to-br from-chocolate-50 to-white rounded-xl shadow-luxury p-6 border-2 border-chocolate-200">
                <div className="text-4xl font-display font-bold text-chocolate-700 mb-2">12x</div>
                <div className="text-sm text-chocolate-600 font-semibold">Exposure</div>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate-700 mb-1 text-lg">Wins Ad Space on Their Desk</h4>
                  <p className="text-gray-600 leading-relaxed">Physical presence advantage over digital marketing</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate-700 mb-1 text-lg">Cuts Through Digital Noise</h4>
                  <p className="text-gray-600 leading-relaxed">Tangible touchpoint that stands out</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate-700 mb-1 text-lg">Account-Based Marketing Integration</h4>
                  <p className="text-gray-600 leading-relaxed">Perfect for your sales and marketing strategy</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate-700 mb-1 text-lg">Increases Deal Velocity</h4>
                  <p className="text-gray-600 leading-relaxed">Creates goodwill and accelerates sales cycles</p>
                </div>
              </div>
            </div>

            {/* Multiple CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-chocolate-600 text-white rounded-xl font-semibold hover:bg-chocolate-700 transition-all shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-1"
              >
                Contact Us
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white text-chocolate-700 border-2 border-chocolate-600 rounded-xl font-semibold hover:bg-cream-50 transition-all shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-1"
              >
                Get Started
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-cream-100 text-chocolate-700 rounded-xl font-semibold hover:bg-cream-200 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Customization Showcase */}
        <div className="bg-gradient-to-br from-cream-50 to-white rounded-2xl p-8 shadow-luxury border border-cream-200">
          <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-4 text-center">
            Fully Customizable
          </h3>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto leading-relaxed">
            Each chocolate wrapper features your logo and value prop messaging. 
            Create a branded experience that reinforces your message every time they reach for a chocolate.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-semibold text-chocolate-700 mb-2">Logo Branding</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Your logo on every wrapper</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💬</div>
              <h4 className="font-semibold text-chocolate-700 mb-2">Value Props</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Custom messaging on wrappers</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📦</div>
              <h4 className="font-semibold text-chocolate-700 mb-2">Packaging</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Branded jar and presentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

