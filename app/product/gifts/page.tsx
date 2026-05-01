import Link from 'next/link';
import ProductGallery from '../../components/ProductGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Outbound Gift — Premium Branded Chocolate Jars | DeskDrop',
  description: 'Premium chocolates in elegant jars with your logo. Three sizes from $25–$40/jar. Shipping included, custom branding on every wrapper.',
  openGraph: {
    title: 'The Outbound Gift — Premium Branded Chocolate Jars | DeskDrop',
    description: 'Premium chocolates in elegant jars with your logo. Three sizes, shipping included, custom branding on every wrapper.',
    url: 'https://thedeskdrop.com/product/gifts',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Outbound Gift | DeskDrop',
    description: 'Premium chocolates in elegant jars with your logo. Three sizes, shipping included, custom branding on every wrapper.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/product/gifts' },
};

export default function GiftsPage() {
  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-32 pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Product
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-8 leading-tight">
              The outbound gift
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Premium chocolates in elegant jars, featuring your logo and messaging. 
              A physical touchpoint that sits on prospects' desks, creating repeated brand exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-12 sm:py-16 border-t border-neutral-100 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="glass-card p-8 rounded max-w-3xl">
            <h3 className="text-lg font-display font-light text-neutral-900 mb-4 tracking-widest uppercase">Who this is for</h3>
            <ul className="space-y-2 text-base text-neutral-700 font-light">
              <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Sales teams running outbound or ABM motions that need a higher reply rate</li>
              <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Marketing teams looking for a physical channel to complement digital campaigns</li>
              <li className="flex items-start gap-2"><span className="text-neutral-400">→</span> Revenue leaders who want to accelerate pipeline and shorten sales cycles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-24 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-12 leading-tight text-center">
            Choose your size
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Scale */}
            <div className="glass-card p-8 rounded hover:shadow-lg transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                Scale
              </div>
              <div className="aspect-[4/3] mb-6 bg-cover bg-center border border-neutral-200 rounded"
                style={{ backgroundImage: "url('/images/prospecting jar on desk.png')" }}
                role="img"
                aria-label="Branded chocolate jar on a desk"
              ></div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-6">
                <li>• 20 pieces of chocolate</li>
                <li>• 125 jars per order</li>
                <li>• $25 per jar</li>
                <li>• Total: $3,125</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light">
                Perfect for scaling outbound across larger prospect lists.
              </p>
            </div>

            {/* Desk */}
            <div className="glass-card p-8 rounded hover:shadow-lg transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                Desk
              </div>
              <div className="aspect-[4/3] mb-6 bg-cover bg-center border border-neutral-200 rounded"
                style={{ backgroundImage: "url('/images/prospecting jar on desk.png')" }}
                role="img"
                aria-label="Branded chocolate jar on a desk"
              ></div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-6">
                <li>• 30 pieces of chocolate</li>
                <li>• 75 jars per order</li>
                <li>• $30 per jar</li>
                <li>• Total: $2,250</li>
              </ul>
              <p className="text-sm text-neutral-600 font-light">
                Best balance of reach and impact for most campaigns.
              </p>
            </div>

            {/* Office */}
            <div className="glass-card p-8 rounded hover:shadow-lg transition-shadow">
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                Office
              </div>
              <div className="aspect-[4/3] mb-6 bg-cover bg-center border border-neutral-200 rounded"
                style={{ backgroundImage: "url('/images/prospecting jar on desk.png')" }}
                role="img"
                aria-label="Branded chocolate jar on a desk"
              ></div>
              <ul className="space-y-3 text-base text-neutral-700 font-light mb-6">
                <li>• 40 pieces of chocolate</li>
                <li>• 50 jars per order</li>
                <li>• $40 per jar</li>
                <li>• Total: $2,000</li>
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
      <section className="py-24 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-12 leading-tight text-center">
            Why this gift works
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-display font-light text-neutral-900 mb-6 leading-tight">
                Wins desk ad space
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
                Cuts through digital noise
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
      <section className="py-24 bg-warm">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to see the impact?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light">
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
