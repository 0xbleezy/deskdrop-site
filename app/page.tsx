import Hero from './components/Hero';
import Services from './components/Services';
import StarProduct from './components/StarProduct';
import TrustBadges from './components/TrustBadges';
import HowItWorks from './components/HowItWorks';
import ProductGallery from './components/ProductGallery';
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
      <Services />
      <ProductGallery />
      <HowItWorks />
      <UseCases />
      <ComparisonTable />
      <ROICalculator />
      <Customization />
      <FAQ />
      <Contact />
    </main>
  );
}
