'use client';

export default function StarProduct() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="star-product" className="py-32" style={{ backgroundColor: '#f9f8fa' }}>
      <div className="max-w-editorial mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-display font-light text-neutral-950 mb-8 leading-tight">
            The Prospecting Gift
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Your star product for winning desk ad space and cutting through digital noise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left - Image */}
          <div className="relative">
            <div 
              className="aspect-[4/3] bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=1200&q=80')"
              }}
            ></div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-4xl font-display font-light text-neutral-950 mb-8 leading-tight">
              A Gift That Works Harder
            </h3>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed font-light">
              Send your prospect a beautifully branded chocolate jar that sits on their desk. 
              Each chocolate wrapper features your logo and value prop, ensuring they see your 
              brand multiple times - following the proven "12 times before they buy" marketing principle.
            </p>

            {/* Minimal Stats */}
            <div className="grid grid-cols-2 gap-8 mb-12 border-t border-neutral-200 pt-8">
              <div>
                <div className="text-5xl font-display font-light text-neutral-950 mb-2">30%+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-light">Reply Rate</div>
              </div>
              <div>
                <div className="text-5xl font-display font-light text-neutral-950 mb-2">12x</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-light">Exposure</div>
              </div>
            </div>

            {/* Value Propositions - Minimal */}
            <div className="space-y-6 mb-12">
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Wins Ad Space on Their Desk</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">Physical presence advantage over digital marketing</p>
              </div>
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Cuts Through Digital Noise</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">Tangible touchpoint that stands out</p>
              </div>
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Account-Based Marketing Integration</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">Perfect for your sales and marketing strategy</p>
              </div>
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Increases Deal Velocity</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">Creates goodwill and accelerates sales cycles</p>
              </div>
            </div>

            {/* Minimal CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-neutral-950 text-white text-xs uppercase tracking-widest font-light hover:bg-neutral-800 transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 border border-neutral-950 text-neutral-950 text-xs uppercase tracking-widest font-light hover:bg-neutral-50 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Customization - Minimal */}
        <div className="border-t border-neutral-200 pt-16">
          <h3 className="text-3xl font-display font-light text-neutral-950 mb-8 text-center">
            Fully Customizable
          </h3>
          <p className="text-base text-neutral-600 text-center mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Each chocolate wrapper features your logo and value prop messaging. 
            Create a branded experience that reinforces your message every time they reach for a chocolate.
          </p>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h4 className="text-sm font-light text-neutral-950 mb-2 uppercase tracking-widest">Logo Branding</h4>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">Your logo on every wrapper</p>
            </div>
            <div>
              <h4 className="text-sm font-light text-neutral-950 mb-2 uppercase tracking-widest">Value Props</h4>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">Custom messaging on wrappers</p>
            </div>
            <div>
              <h4 className="text-sm font-light text-neutral-950 mb-2 uppercase tracking-widest">Packaging</h4>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">Branded jar and presentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
