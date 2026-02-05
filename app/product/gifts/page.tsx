import Link from 'next/link';
import ProductGallery from '../../components/ProductGallery';

export default function GiftsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-32 pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="max-w-7xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Product
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              The Outbound Gift
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Premium chocolates in elegant jars, featuring your logo and messaging. 
              A physical touchpoint that sits on prospects' desks, creating repeated brand exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-24" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-16 leading-tight text-center">
            Choose your size
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Small */}
            <div className="glass-card p-8 rounded hover:shadow-lg transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                Small
              </div>
              <div className="aspect-[4/3] mb-6 bg-cover bg-center border border-neutral-200 rounded"
                style={{ backgroundImage: "url('/images/prospecting jar on desk.png')" }}
              ></div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-6">
                <li>• ~12 pieces of chocolate</li>
                <li>• 125 jars per order</li>
                <li>• $35 per jar</li>
                <li>• Total: $4,375</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light">
                Perfect for testing campaigns or smaller prospect lists.
              </p>
            </div>

            {/* Medium */}
            <div className="glass-card p-8 rounded hover:shadow-lg transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                Medium
              </div>
              <div className="aspect-[4/3] mb-6 bg-cover bg-center border border-neutral-200 rounded"
                style={{ backgroundImage: "url('/images/prospecting jar on desk.png')" }}
              ></div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-6">
                <li>• ~20 pieces of chocolate</li>
                <li>• 75 jars per order</li>
                <li>• $40 per jar</li>
                <li>• Total: $3,000</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light">
                Ideal balance of impact and cost for most campaigns.
              </p>
            </div>

            {/* Large */}
            <div className="glass-card p-8 rounded hover:shadow-lg transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                Large
              </div>
              <div className="aspect-[4/3] mb-6 bg-cover bg-center border border-neutral-200 rounded"
                style={{ backgroundImage: "url('/images/prospecting jar on desk.png')" }}
              ></div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-6">
                <li>• ~30 pieces of chocolate</li>
                <li>• 50 jars per order</li>
                <li>• $50 per jar</li>
                <li>• Total: $2,500</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light">
                Maximum impact for high-value accounts and key decision makers.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-base text-neutral-700 mb-6 leading-relaxed font-light">
              Pricing includes shipping. All sizes include custom branding on every wrapper.
            </p>
            <Link
              href="/#contact"
              className="glass-button inline-block px-8 py-4 text-white text-base font-light rounded transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <ProductGallery />

      {/* Benefits */}
      <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-16 leading-tight text-center">
            Why this gift works
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Wins Desk Ad Space
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Unlike emails that get deleted or calls that go unanswered, this gift sits 
                on prospects' desks, creating repeated, non-intrusive exposure to your brand.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <div className="text-4xl font-display font-light text-neutral-900 mb-2">30%+</div>
                  <div className="text-sm text-neutral-600 font-light">Reply Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-light text-neutral-900 mb-2">25x+</div>
                  <div className="text-sm text-neutral-600 font-light">Daily Exposure</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Cuts Through Digital Noise
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light">
                Inbox fatigue is real. A physical gift breaks through the clutter and creates 
                a touchpoint that recipients actually appreciate and remember.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed font-light">
                Each time they reach for a chocolate, they see your logo and messaging. No spam 
                filters. No ignored calls. Just consistent, welcome brand presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#f5f3f0' }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to see the impact?
          </h2>
          <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light">
            Request samples to evaluate quality and presentation before ordering.
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
