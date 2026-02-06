import Link from 'next/link';

export default function PackagingPage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-32 pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Product
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Premium Packaging<br className="hidden md:inline" /> That Makes an Impact
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Elegant jars and careful presentation create a memorable first impression.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <div className="aspect-[4/3] mb-8 bg-cover bg-center border border-neutral-200 rounded"
                style={{ backgroundImage: "url('/images/premium packaging.png')" }}
              ></div>
              <h2 className="text-4xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Elegant Jar Design
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Premium glass jars create a sophisticated presentation that reflects your brand quality. 
                The elegant design makes recipients feel valued and creates a lasting impression.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Premium glass construction</li>
                <li>• Three size options (8oz, 12oz, 19oz)</li>
                <li>• Professional presentation</li>
              </ul>
            </div>

            <div>
              <div className="aspect-[4/3] mb-8 bg-cover bg-center border border-neutral-200 rounded"
                style={{ backgroundImage: "url('/images/Prospect Gifting.png')" }}
              ></div>
              <h2 className="text-4xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Careful Shipping
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Each jar is carefully packed to ensure it arrives in perfect condition. We handle 
                all shipping directly to your prospects, so they receive a pristine gift that creates 
                the right first impression.
              </p>
              <ul className="space-y-3 text-base text-neutral-700 font-light">
                <li>• Secure packaging</li>
                <li>• Direct shipping to prospects</li>
                <li>• Delivery confirmations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-24 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-12 leading-tight text-center">
            Professional Presentation
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Desk-Ready Delivery
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Each gift arrives ready to display. Recipients can immediately place it on their desk, 
                creating a physical reminder of your brand that builds familiarity over time.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed font-light">
                The elegant packaging ensures your gift looks professional and creates the right impression 
                from the moment it's opened.
              </p>
            </div>

            <div className="aspect-[4/3] bg-cover bg-center border border-neutral-200 rounded"
              style={{ backgroundImage: "url('/images/desk no jar.png')" }}
            ></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw] text-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            See the quality yourself
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light">
            Request samples to evaluate packaging and presentation before ordering.
          </p>
          <Link
            href="/#contact"
            className="glass-button inline-block px-8 py-4 text-white text-base font-light rounded transition-all"
          >
            Request Samples
          </Link>
        </div>
      </section>
    </main>
  );
}
