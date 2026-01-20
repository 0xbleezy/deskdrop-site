import Link from 'next/link';

export default function CustomPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-32 pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Custom Solutions
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Tailored gifting solutions for your business with first-class onboarding and dedicated 
              support. Customize your program to match your unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Dedicated Support
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Work with our team to design a gifting program that fits your specific needs. 
                From campaign planning to execution, we're here to help.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Flexible Programs
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Customize your program to match your sales cadence, budget, and goals. We'll 
                work with you to create a solution that drives results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Scalable Solutions
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Scale your program as you grow. Start small and expand as you see results. Our 
                production model handles campaigns of any size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-16 leading-tight text-center">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-display font-light text-neutral-400 mb-6">01</div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Consultation
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We'll discuss your goals, budget, and needs. Together, we'll design a gifting 
                program that fits your business.
              </p>
            </div>

            <div>
              <div className="text-5xl font-display font-light text-neutral-400 mb-6">02</div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Customization
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We'll customize branding, messaging, and packaging to match your brand. Review 
                mockups and approve before production.
              </p>
            </div>

            <div>
              <div className="text-5xl font-display font-light text-neutral-400 mb-6">03</div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                Execution
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We'll handle production, shipping, and delivery. You focus on following up and 
                closing deals while we manage logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#e6f7f9' }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to create a custom solution?
          </h2>
          <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light">
            Let's discuss your needs and design a gifting program that drives results.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-neutral-900 text-white text-base font-light rounded hover:bg-neutral-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
