import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import StarProduct from './components/StarProduct';
import UseCases from './components/UseCases';
import ComparisonTable from './components/ComparisonTable';
import ROICalculator from './components/ROICalculator';
import CustomizationTeaser from './components/CustomizationTeaser';
import FAQPreview from './components/FAQPreview';
import Contact from './components/Contact';
import MobileStickyCTA from './components/MobileStickyCTA';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(180deg, #f9f8fa 0%, #faf9fb 100%)' }}>
      <Hero />
      <TrustBadges />
      <StarProduct />
      <CustomizationTeaser />
      <UseCases />
      <ComparisonTable />
      <ROICalculator />
      <FAQPreview />
      <Contact />
      <MobileStickyCTA />
    </main>
  );
}
