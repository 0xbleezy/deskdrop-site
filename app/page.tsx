import Hero from './components/Hero';
import Services from './components/Services';
import StarProduct from './components/StarProduct';
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
    <main className="min-h-screen">
      <Hero />
      <Services />
      <StarProduct />
      <HowItWorks />
      <ProductGallery />
      <UseCases />
      <ComparisonTable />
      <ROICalculator />
      <Customization />
      <FAQ />
      <Contact />
    </main>
  );
}
