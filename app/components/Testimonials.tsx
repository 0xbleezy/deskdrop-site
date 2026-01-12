export default function Testimonials() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-editorial mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            See what our clients say about our corporate gifting solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 mb-24">
          <div className="border-t border-neutral-200 pt-8">
            <p className="text-base text-neutral-700 mb-8 leading-relaxed font-light italic">
              "The prospecting gift has become an essential part of our account-based marketing strategy. 
              The 30%+ reply rate speaks for itself. Our sales team loves how it creates meaningful touchpoints."
            </p>
            <div>
              <div className="text-sm font-light text-neutral-950">Sarah Johnson</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mt-1">VP of Sales, TechCorp</div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <p className="text-base text-neutral-700 mb-8 leading-relaxed font-light italic">
              "We've seen a significant increase in deal velocity since incorporating these gifts into 
              our outreach. The physical presence on prospects' desks makes all the difference."
            </p>
            <div>
              <div className="text-sm font-light text-neutral-950">Michael Chen</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mt-1">Marketing Director, GrowthCo</div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <p className="text-base text-neutral-700 mb-8 leading-relaxed font-light italic">
              "The customization options are fantastic. We can brand each wrapper with our value props, 
              and the quality of the chocolates is exceptional. Our clients are always impressed."
            </p>
            <div>
              <div className="text-sm font-light text-neutral-950">Emily Rodriguez</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mt-1">Account Manager, Enterprise Solutions</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators - Minimal */}
        <div className="border-t border-neutral-200 pt-16">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-display font-light text-neutral-950 mb-3">75+</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-light">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-display font-light text-neutral-950 mb-3">1000+</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-light">Corporate Clients</div>
            </div>
            <div>
              <div className="text-5xl font-display font-light text-neutral-950 mb-3">30%+</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-light">Average Reply Rate</div>
            </div>
            <div>
              <div className="text-5xl font-display font-light text-neutral-950 mb-3">250+</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-light">Gift Options</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
