import Link from 'next/link';

export default function CustomizationPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-32 pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <div className="max-w-7xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Product
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Fully Customizable<br className="hidden md:inline" /> Branding
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Each chocolate wrapper features your logo and messaging, creating a branded 
              experience that reinforces your message every time recipients reach for a chocolate.
            </p>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-24" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            {/* Logo Branding */}
            <div>
              <div className="aspect-[4/3] mb-8 bg-cover bg-center border border-neutral-200 rounded"
                style={{ backgroundImage: "url('/images/logo branding.png')" }}
              ></div>
              <h2 className="text-4xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Logo Placement
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Your logo appears on every chocolate wrapper, ensuring consistent brand presence 
                throughout the entire gift experience. Recipients see your brand each time they 
                reach for a chocolate.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• High-resolution logo printing</li>
                <li>• Consistent branding across all wrappers</li>
                <li>• Professional presentation</li>
              </ul>
            </div>

            {/* Custom Messaging */}
            <div>
              <div className="aspect-[4/3] mb-8 bg-cover bg-center border border-neutral-200 rounded"
                style={{ backgroundImage: "url('/images/custom messaging.png')" }}
              ></div>
              <h2 className="text-4xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Custom Messaging
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Include your value proposition, tagline, or key messaging on each wrapper. 
                Create a memorable impression that reinforces your brand message with every interaction.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Value proposition messaging</li>
                <li>• Custom taglines and copy</li>
                <li>• Call-to-action integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-16 leading-tight text-center">
            Premium Packaging
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Elegant Jar Presentation
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Premium jars create a sophisticated presentation that reflects your brand quality. 
                The elegant packaging makes recipients feel valued, increasing engagement and goodwill.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed font-light">
                Each jar is carefully packed and shipped directly to your prospects, ensuring 
                they arrive in perfect condition and create the right first impression.
              </p>
            </div>

            <div className="aspect-[4/3] bg-cover bg-center border border-neutral-200 rounded"
              style={{ backgroundImage: "url('/images/premium packaging.png')" }}
            ></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-16 leading-tight text-center">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-display font-light text-neutral-400 mb-6">01</div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Provide Assets
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Send us your logo files and messaging. We'll handle the design and layout to ensure 
                professional presentation on every wrapper.
              </p>
            </div>

            <div>
              <div className="text-5xl font-display font-light text-neutral-400 mb-6">02</div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Review & Approve
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We'll share mockups for your approval before production begins. Make any adjustments 
                to ensure everything looks perfect.
              </p>
            </div>

            <div>
              <div className="text-5xl font-display font-light text-neutral-400 mb-6">03</div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Production & Delivery
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Once approved, production takes 2 weeks. We'll handle printing, assembly, and shipping 
                directly to your prospect list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#f5f3f0' }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw] text-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to customize?
          </h2>
          <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light">
            Let's discuss your branding needs and create a customized gift experience.
          </p>
          <Link
            href="/#contact"
            className="glass-button inline-block px-8 py-4 text-white text-base font-light rounded transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
