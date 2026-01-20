import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import StarProduct from './components/StarProduct';
import Services from './components/Services';
import ProductGallery from './components/ProductGallery';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import ComparisonTable from './components/ComparisonTable';
import ROICalculator from './components/ROICalculator';
import Customization from './components/Customization';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(180deg, #f9f8fa 0%, #faf9fb 100%)' }}>
      <Hero />
      <TrustBadges />
      <StarProduct />
      <Customization />
      <ProductGallery />
      <HowItWorks />
      <UseCases />
      <ComparisonTable />
      <ROICalculator />
      <FAQ />
      <Contact />
    </main>
  );
}
