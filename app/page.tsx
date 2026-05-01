import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import StarProduct from './components/StarProduct';
import StatsBand from './components/StatsBand';
import UseCases from './components/UseCases';
import ComparisonTable from './components/ComparisonTable';
import CustomizationTeaser from './components/CustomizationTeaser';
import FAQPreview from './components/FAQPreview';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(180deg, #f9f8fa 0%, #faf9fb 100%)' }}>
      <Hero />
      <TrustBadges />
      <StarProduct />
      <StatsBand />
      <CustomizationTeaser />
      <UseCases />
      <ComparisonTable />
      <FAQPreview />

      <Contact />

      {/* What Happens Next */}
      <section className="py-16 sm:py-24 border-t border-neutral-100">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-950 mb-12 leading-tight text-center">
            What happens next
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-3">01</div>
              <h4 className="text-sm font-display font-medium text-neutral-900 mb-2">Quick chat</h4>
              <p className="text-xs text-neutral-600 font-light">Tell us about your goals and target accounts.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-3">02</div>
              <h4 className="text-sm font-display font-medium text-neutral-900 mb-2">Free sample</h4>
              <p className="text-xs text-neutral-600 font-light">Evaluate the product before you commit.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-3">03</div>
              <h4 className="text-sm font-display font-medium text-neutral-900 mb-2">Custom design</h4>
              <p className="text-xs text-neutral-600 font-light">We brand everything with your logo and messaging.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-light text-neutral-400 mb-3">04</div>
              <h4 className="text-sm font-display font-medium text-neutral-900 mb-2">Launch</h4>
              <p className="text-xs text-neutral-600 font-light">Gifts ship direct. You get the follow-up playbook.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
