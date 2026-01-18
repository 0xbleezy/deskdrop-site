export default function Customization() {
  return (
    <section id="customization" className="py-20 border-t border-neutral-200" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-editorial mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            Customization Options
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            Every detail designed to reinforce your brand and value proposition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="border-t border-neutral-200 pt-8 text-center">
            <div className="mb-6 aspect-square max-w-[200px] mx-auto">
              <div 
                className="w-full h-full bg-cover bg-center border border-neutral-200"
                style={{
                  backgroundImage: "url('/images/prospecting jar on desk.png')"
                }}
              ></div>
            </div>
            <h3 className="text-xl font-display font-light text-neutral-950 mb-3 leading-tight">
              Logo Branding
            </h3>
            <p className="text-neutral-600 leading-relaxed font-light">
              Your logo prominently displayed on each wrapper. Maximum brand visibility where it matters most.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-8 text-center">
            <div className="mb-6 aspect-square max-w-[200px] mx-auto">
              <div 
                className="w-full h-full bg-cover bg-center border border-neutral-200"
                style={{
                  backgroundImage: "url('/images/prospecting jar on desk.png')"
                }}
              ></div>
            </div>
            <h3 className="text-xl font-display font-light text-neutral-950 mb-3 leading-tight">
              Custom Messaging
            </h3>
            <p className="text-neutral-600 leading-relaxed font-light">
              Custom messaging on wrappers that reinforces your key value props. Each wrapper features your logo and messaging for consistent brand reinforcement.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-8 text-center">
            <div className="mb-6 aspect-square max-w-[200px] mx-auto">
              <div 
                className="w-full h-full bg-cover bg-center border border-neutral-200"
                style={{
                  backgroundImage: "url('/images/prospecting jar on desk.png')"
                }}
              ></div>
            </div>
            <h3 className="text-xl font-display font-light text-neutral-950 mb-3 leading-tight">
              Branded Packaging
            </h3>
            <p className="text-neutral-600 leading-relaxed font-light">
              Premium packaging and presentation. Professional first impression that sets the tone for the relationship.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-8 text-center">
            <h3 className="text-xl font-display font-light text-neutral-950 mb-3 leading-tight">
              Volume Pricing
            </h3>
            <p className="text-neutral-600 leading-relaxed font-light">
              Competitive pricing for bulk orders. Volume discounts make it easier to scale across your entire prospect list.
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-neutral-200 pt-16 text-center">
          <h3 className="text-2xl font-display font-light text-neutral-950 mb-4 leading-tight">
            Personalized Gift Messages
          </h3>
          <p className="text-neutral-600 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
            Add custom notes, gift cards, or promotional inserts to create truly personalized experiences 
            for each recipient. Perfect for high-value accounts or executive-level outreach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white rounded-full text-neutral-700 border border-neutral-200 text-sm uppercase tracking-widest font-light">
              Custom Gift Cards
            </span>
            <span className="px-6 py-3 bg-white rounded-full text-neutral-700 border border-neutral-200 text-sm uppercase tracking-widest font-light">
              Personalized Notes
            </span>
            <span className="px-6 py-3 bg-white rounded-full text-neutral-700 border border-neutral-200 text-sm uppercase tracking-widest font-light">
              Promotional Materials
            </span>
            <span className="px-6 py-3 bg-white rounded-full text-neutral-700 border border-neutral-200 text-sm uppercase tracking-widest font-light">
              Holiday Cards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

