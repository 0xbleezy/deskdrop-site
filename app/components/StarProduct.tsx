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
            Your competitive advantage in outbound sales and ABM programs
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
              A Play That Earns Real Attention
            </h3>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed font-light">
              A physical touchpoint designed to break through inbox fatigue. Unlike email or cold calls, 
              this gift sits on their desk, creating repeated, non-intrusive exposure to your brand every 
              single day.
              <br /><br />
              Each time they reach for a chocolate, they see your logo and value proposition. No spam 
              filters. No ignored calls. Just consistent, welcome brand presence that builds familiarity 
              and goodwill.
              <br /><br />
              This gives your sellers a genuine reason to follow up that recipients actually appreciate, 
              transforming cold outreach into warm conversations.
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
                <h4 className="text-lg font-light text-neutral-950 mb-2">Wins Attention Without Interruption</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">Unlike email and cold calls, this creates passive brand exposure that builds familiarity over time</p>
              </div>
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Reopens Stalled Conversations</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">The perfect reason to re-engage decision-makers who've gone quiet on your outreach attempts</p>
              </div>
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Integrates with Your ABM Strategy</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">Deploy at key moments in your account penetration plan, targeting decision-makers with precision</p>
              </div>
              <div>
                <h4 className="text-lg font-light text-neutral-950 mb-2">Accelerates Deal Velocity</h4>
                <p className="text-base text-neutral-600 leading-relaxed font-light">Creates goodwill that reduces sales resistance and speeds up sales cycles significantly</p>
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
            Each chocolate wrapper features your logo and messaging. 
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
              <p className="text-sm text-neutral-600 leading-relaxed font-light">Premium jar and presentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
